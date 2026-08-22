import React, { useState, useEffect, useRef } from 'react';
import { HighlightItem, HighlightColor } from '../types';
import { HIGHLIGHT_COLORS } from '../lib/highlightConstants';
import { Trash2, MessageSquare, Check, HelpCircle } from 'lucide-react';

interface HighlightPopoverProps {
  highlight: HighlightItem;
  position: { x: number; y: number; width: number; height: number };
  onUpdateColor: (id: string, color: HighlightColor) => void;
  onUpdateNote: (id: string, note: string) => void;
  onDeleteHighlight: (id: string) => void;
  onConvertToFlashcard: (highlight: HighlightItem) => void;
  onClose: () => void;
}

export const HighlightPopover: React.FC<HighlightPopoverProps> = ({
  highlight,
  position,
  onUpdateColor,
  onUpdateNote,
  onDeleteHighlight,
  onConvertToFlashcard,
  onClose,
}) => {
  const [isEditingNote, setIsEditingNote] = useState(false);
  const [noteText, setNoteText] = useState(highlight.note || '');
  const inputRef = useRef<HTMLInputElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setNoteText(highlight.note || '');
  }, [highlight.note]);

  useEffect(() => {
    if (isEditingNote && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditingNote]);

  // Click outside to close
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (popoverRef.current && !popoverRef.current.contains(e.target as Node)) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  const handleSaveNote = () => {
    onUpdateNote(highlight.id, noteText.trim());
    setIsEditingNote(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSaveNote();
    } else if (e.key === 'Escape') {
      setIsEditingNote(false);
    }
  };

  // Compute position clamped in window for small and large screens
  const screenWidth = typeof window !== 'undefined' ? window.innerWidth : 360;
  const popoverWidth = Math.min(320, screenWidth - 24);
  const top = Math.max(64, Math.min(window.innerHeight - 180, position.y - 56));
  const left = Math.max(12, Math.min(screenWidth - popoverWidth - 12, position.x + position.width / 2 - popoverWidth / 2));

  return (
    <div
      ref={popoverRef}
      style={{ top: `${top}px`, left: `${left}px`, width: `${popoverWidth}px` }}
      className="fixed z-50 bg-white border border-slate-200/90 rounded-xl shadow-xl p-2.5 sm:p-3 text-xs flex flex-col gap-2 animate-fadeIn transition-all"
    >
      {/* Top action row */}
      <div className="flex items-center justify-between gap-2">
        
        {/* 4 Color Swatches */}
        <div className="flex items-center gap-1.5">
          {(Object.keys(HIGHLIGHT_COLORS) as HighlightColor[]).map((colorKey) => {
            const config = HIGHLIGHT_COLORS[colorKey];
            const isCurrent = highlight.color === colorKey;

            return (
              <button
                key={colorKey}
                type="button"
                onClick={() => onUpdateColor(highlight.id, colorKey)}
                className={`w-4.5 h-4.5 rounded-full transition-transform cursor-pointer relative ${
                  isCurrent ? 'ring-2 ring-slate-800 ring-offset-1 scale-110' : 'hover:scale-110 opacity-80 hover:opacity-100'
                }`}
                style={{ backgroundColor: config.hex }}
                title={`${config.name}: ${config.meaning}`}
              />
            );
          })}
        </div>

        <div className="h-4 w-px bg-slate-200" />

        {/* Note button */}
        <button
          type="button"
          onClick={() => setIsEditingNote(!isEditingNote)}
          className={`flex items-center gap-1 px-2 py-1 rounded transition-colors cursor-pointer ${
            highlight.note || isEditingNote
              ? 'bg-amber-50 text-amber-900 font-medium'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
          title="Attach or edit personal note"
        >
          <MessageSquare className="w-3.5 h-3.5 text-amber-700" />
          <span>{highlight.note ? 'Edit Note' : 'Add Note'}</span>
        </button>

        <div className="h-4 w-px bg-slate-200" />

        {/* Turn into Question / Flashcard */}
        <button
          type="button"
          onClick={() => onConvertToFlashcard(highlight)}
          className="text-slate-500 hover:text-emerald-700 hover:bg-emerald-50 p-1 rounded transition-colors cursor-pointer"
          title="Turn highlighted text into a self-test flashcard"
        >
          <HelpCircle className="w-3.5 h-3.5" />
        </button>

        {/* Delete Highlight */}
        <button
          type="button"
          onClick={() => onDeleteHighlight(highlight.id)}
          className="text-slate-400 hover:text-rose-600 hover:bg-rose-50 p-1 rounded transition-colors cursor-pointer ml-auto"
          title="Remove highlight"
        >
          <Trash2 className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Note input expandable section */}
      {isEditingNote && (
        <div className="pt-1 border-t border-slate-100 flex items-center gap-1.5 animate-fadeIn">
          <input
            ref={inputRef}
            type="text"
            value={noteText}
            onChange={(e) => setNoteText(e.target.value)}
            onKeyDown={handleKeyDown}
            onBlur={handleSaveNote}
            placeholder="Add note (e.g. key board exam trap)..."
            className="w-full bg-slate-50 border border-slate-200 rounded px-2 py-1 text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-emerald-600 focus:bg-white font-sans"
          />
          <button
            type="button"
            onClick={handleSaveNote}
            className="bg-emerald-700 hover:bg-emerald-800 text-white p-1 rounded transition-colors cursor-pointer"
            title="Save note"
          >
            <Check className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Current note display if not editing */}
      {!isEditingNote && highlight.note && (
        <div className="pt-1.5 border-t border-slate-100 text-[11px] text-slate-600 italic bg-amber-50/50 p-1.5 rounded">
          💬 &ldquo;{highlight.note}&rdquo;
        </div>
      )}
    </div>
  );
};
