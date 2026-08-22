import React, { useState } from 'react';
import { HighlightItem, HighlightColor, SubjectModule } from '../types';
import { HIGHLIGHT_COLORS } from '../lib/highlightConstants';
import { X, ArrowUpRight, Trash2 } from 'lucide-react';

interface HighlightsDigestModalProps {
  isOpen: boolean;
  onClose: () => void;
  highlights: HighlightItem[];
  currentSubject: SubjectModule;
  onJumpToHighlight: (pageNumber: number, highlightId: string) => void;
  onDeleteHighlight: (id: string) => void;
  onUpdateNote: (id: string, note: string) => void;
}

export const HighlightsDigestModal: React.FC<HighlightsDigestModalProps> = ({
  isOpen,
  onClose,
  highlights,
  currentSubject,
  onJumpToHighlight,
  onDeleteHighlight,
  onUpdateNote,
}) => {
  const [selectedColorFilter, setSelectedColorFilter] = useState<'ALL' | HighlightColor>('ALL');
  const [editingNoteId, setEditingNoteId] = useState<string | null>(null);
  const [tempNoteText, setTempNoteText] = useState('');

  if (!isOpen) return null;

  const subjectHighlights = highlights.filter(h => h.subjectId === currentSubject.id);

  const filteredHighlights = selectedColorFilter === 'ALL'
    ? subjectHighlights
    : subjectHighlights.filter(h => h.color === selectedColorFilter);

  const colorCategories: { key: HighlightColor; label: string; dotColor: string }[] = [
    { key: 'yellow', label: 'General Important', dotColor: '#eab308' },
    { key: 'green', label: 'Definitions & Key Terms', dotColor: '#10b981' },
    { key: 'pink', label: 'Confusing / Needs Review', dotColor: '#f43f5e' },
    { key: 'blue', label: 'Examples & Notes', dotColor: '#0ea5e9' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/40 backdrop-blur-xs animate-fadeIn">
      <div className="bg-white rounded-2xl border border-slate-200/90 shadow-2xl max-w-2xl w-full max-h-[90vh] flex flex-col overflow-hidden">
        
        {/* Header */}
        <div className="px-4 sm:px-6 py-3.5 sm:py-5 border-b border-slate-100 flex items-start justify-between bg-white shrink-0">
          <div className="space-y-0.5 min-w-0 pr-2">
            <h3 className="font-serif text-base sm:text-xl font-bold text-slate-950 tracking-tight truncate">
              My Highlights & Notes
            </h3>
            <p className="text-[11px] sm:text-xs text-slate-500 font-sans truncate">
              {currentSubject.title} • {subjectHighlights.length} {subjectHighlights.length === 1 ? 'saved passage' : 'saved passages'}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 -mr-1 -mt-0.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer shrink-0"
            aria-label="Close"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* Clean Text-based Filter Tabs */}
        <div className="px-3 sm:px-6 py-2 sm:py-3 border-b border-slate-100 bg-[#fdfdfd] flex items-center gap-1.5 overflow-x-auto text-xs scrollbar-none shrink-0">
          <button
            onClick={() => setSelectedColorFilter('ALL')}
            className={`px-2.5 sm:px-3 py-1.5 rounded-lg font-medium transition-all whitespace-nowrap cursor-pointer shrink-0 text-[11px] sm:text-xs ${
              selectedColorFilter === 'ALL'
                ? 'bg-slate-900 text-white font-semibold shadow-2xs'
                : 'text-slate-600 hover:text-slate-950 hover:bg-slate-100'
            }`}
          >
            All ({subjectHighlights.length})
          </button>

          {colorCategories.map(({ key, label, dotColor }) => {
            const count = subjectHighlights.filter(h => h.color === key).length;
            const isSelected = selectedColorFilter === key;

            return (
              <button
                key={key}
                onClick={() => setSelectedColorFilter(key)}
                className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg font-medium transition-all whitespace-nowrap cursor-pointer shrink-0 text-[11px] sm:text-xs ${
                  isSelected
                    ? 'bg-slate-100 text-slate-950 font-semibold ring-1 ring-slate-300'
                    : 'text-slate-600 hover:text-slate-950 hover:bg-slate-50'
                }`}
              >
                <span 
                  className="w-2 h-2 rounded-full shrink-0" 
                  style={{ backgroundColor: dotColor }} 
                />
                <span>{label}</span>
                <span className="text-[10px] sm:text-[11px] text-slate-400">({count})</span>
              </button>
            );
          })}
        </div>

        {/* Highlights List Body */}
        <div className="p-3.5 sm:p-6 overflow-y-auto flex-1 space-y-3 sm:space-y-4 bg-white">
          {filteredHighlights.length === 0 ? (
            <div className="text-center py-16 text-slate-400 space-y-2">
              <p className="text-sm font-semibold text-slate-700 font-serif">No saved passages found</p>
              <p className="text-xs text-slate-500 max-w-sm mx-auto leading-relaxed">
                While reading, press <kbd className="font-mono bg-slate-100 border border-slate-200 px-1 py-0.5 rounded text-slate-700 font-semibold">H</kbd> to activate highlighting, then drag across any text to save key review passages.
              </p>
            </div>
          ) : (
            filteredHighlights.map((h) => {
              const colorConfig = HIGHLIGHT_COLORS[h.color];
              const isEditingThis = editingNoteId === h.id;

              return (
                <div 
                  key={h.id} 
                  className="p-5 rounded-xl border border-slate-200/80 bg-white hover:border-slate-300 transition-all space-y-3 shadow-2xs group"
                >
                  {/* Card Meta Row */}
                  <div className="flex items-center justify-between gap-3 text-xs">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[11px] font-semibold text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                        Page {Math.ceil(h.pageNumber / 4)}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-slate-600">
                        <span 
                          className="w-1.5 h-1.5 rounded-full shrink-0"
                          style={{ backgroundColor: colorConfig.hex === '#fef08a' ? '#eab308' : colorConfig.hex === '#bbf7d0' ? '#10b981' : colorConfig.hex === '#fbcfe8' ? '#f43f5e' : '#0ea5e9' }}
                        />
                        {colorConfig.meaning}
                      </span>
                    </div>

                    {/* Actions: Jump to Source & Discreet Delete */}
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => {
                          onJumpToHighlight(h.pageNumber, h.id);
                          onClose();
                        }}
                        className="inline-flex items-center gap-1 text-xs font-medium text-emerald-800 hover:text-emerald-950 transition-colors cursor-pointer"
                      >
                        <span>Jump to source</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>

                      <button
                        onClick={() => onDeleteHighlight(h.id)}
                        className="text-slate-300 hover:text-rose-600 transition-colors cursor-pointer p-0.5"
                        title="Delete highlight"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Highlighted Passage */}
                  <blockquote 
                    className="pl-3.5 py-1 text-sm sm:text-base font-serif leading-relaxed text-slate-900 border-l-2"
                    style={{ borderColor: colorConfig.hex === '#fef08a' ? '#eab308' : colorConfig.hex === '#bbf7d0' ? '#10b981' : colorConfig.hex === '#fbcfe8' ? '#f43f5e' : '#0ea5e9' }}
                  >
                    &ldquo;{h.text}&rdquo;
                  </blockquote>

                  {/* Personal Note Section */}
                  <div className="pt-1 text-xs">
                    {isEditingThis ? (
                      <div className="space-y-2 pt-1">
                        <textarea
                          rows={2}
                          value={tempNoteText}
                          onChange={(e) => setTempNoteText(e.target.value)}
                          placeholder="Write your personal study note or mnemonic..."
                          className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-slate-900 focus:bg-white transition-all font-serif leading-relaxed"
                          autoFocus
                        />
                        <div className="flex items-center justify-end gap-2">
                          <button
                            type="button"
                            onClick={() => setEditingNoteId(null)}
                            className="px-3 py-1 text-xs font-medium text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
                          >
                            Cancel
                          </button>
                          <button
                            type="button"
                            onClick={() => {
                              onUpdateNote(h.id, tempNoteText.trim());
                              setEditingNoteId(null);
                            }}
                            className="px-3 py-1 bg-slate-900 hover:bg-slate-800 text-white rounded-md text-xs font-semibold transition-colors cursor-pointer"
                          >
                            Save Note
                          </button>
                        </div>
                      </div>
                    ) : h.note ? (
                      <div className="flex items-start justify-between gap-3 bg-slate-50 border border-slate-200/70 rounded-lg px-3 py-2 text-slate-700">
                        <div className="space-y-0.5">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block font-sans">
                            Personal Note
                          </span>
                          <p className="font-serif text-xs text-slate-800 leading-relaxed italic">
                            {h.note}
                          </p>
                        </div>
                        <button
                          onClick={() => {
                            setEditingNoteId(h.id);
                            setTempNoteText(h.note || '');
                          }}
                          className="text-[11px] font-medium text-slate-400 hover:text-slate-800 underline transition-colors cursor-pointer shrink-0 mt-0.5"
                        >
                          Edit
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => {
                          setEditingNoteId(h.id);
                          setTempNoteText('');
                        }}
                        className="text-xs text-slate-400 hover:text-slate-700 transition-colors cursor-pointer font-medium"
                      >
                        + Add personal note
                      </button>
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-slate-100 bg-[#fdfdfd] flex items-center justify-between text-xs">
          <span className="text-slate-400 font-sans hidden sm:inline">
            Highlights and notes are automatically saved for your review.
          </span>
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-2 rounded-xl bg-slate-950 text-white text-xs font-semibold hover:bg-slate-800 transition-colors cursor-pointer ml-auto shadow-xs"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
