import React, { useState, useEffect } from 'react';
import { HighlightItem, HighlightColor, SubjectModule } from '../types';
import { HIGHLIGHT_COLORS } from '../lib/highlightConstants';
import { X, ArrowUpRight, Trash2, Highlighter, Sparkles, MessageSquare, BookOpen, Check, Pencil } from 'lucide-react';

interface HighlightsDigestModalProps {
  isOpen: boolean;
  onClose: () => void;
  highlights: HighlightItem[];
  currentSubject: SubjectModule;
  onJumpToHighlight: (pageNumber: number, highlightId: string, locationKey?: string) => void;
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

  // Lock background body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      const originalTouchAction = document.body.style.touchAction;
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
      return () => {
        document.body.style.overflow = originalOverflow;
        document.body.style.touchAction = originalTouchAction;
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const subjectHighlights = highlights.filter(h => h.subjectId === currentSubject.id);

  const filteredHighlights = selectedColorFilter === 'ALL'
    ? subjectHighlights
    : subjectHighlights.filter(h => h.color === selectedColorFilter);

  const colorCategories: { key: HighlightColor; label: string; dotColor: string; bgBadge: string }[] = [
    { key: 'yellow', label: 'Important', dotColor: '#eab308', bgBadge: 'bg-amber-100/70 text-amber-900 border-amber-300' },
    { key: 'green', label: 'Definitions', dotColor: '#10b981', bgBadge: 'bg-emerald-100/70 text-emerald-900 border-emerald-300' },
    { key: 'pink', label: 'Needs Review', dotColor: '#f43f5e', bgBadge: 'bg-rose-100/70 text-rose-900 border-rose-300' },
    { key: 'blue', label: 'Examples', dotColor: '#0ea5e9', bgBadge: 'bg-sky-100/70 text-sky-900 border-sky-300' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-950/50 backdrop-blur-xs animate-fadeIn overscroll-none">
      
      {/* Background click to dismiss — blocks touchmove propagation to background */}
      <div 
        className="fixed inset-0" 
        onClick={onClose} 
        onTouchMove={(e) => e.preventDefault()} 
      />

      {/* Main Modal Card (Full bottom-sheet on phone, centered modal on desktop) */}
      <div className="relative bg-white rounded-t-3xl sm:rounded-2xl border border-slate-200/90 shadow-2xl max-w-2xl w-full max-h-[92vh] sm:max-h-[85vh] flex flex-col overflow-hidden z-10 animate-slideUp sm:animate-fadeIn">
        
        {/* Mobile Pull/Drag Indicator */}
        <div className="pt-2.5 pb-1 flex justify-center sm:hidden shrink-0 bg-slate-50 border-b border-slate-100">
          <div className="w-10 h-1 bg-slate-300 rounded-full" />
        </div>

        {/* Header */}
        <div className="px-4 sm:px-6 py-3.5 sm:py-4 border-b border-slate-100 flex items-center justify-between bg-white shrink-0">
          <div className="flex items-center gap-2.5 min-w-0 pr-2">
            <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-800 shrink-0 shadow-2xs">
              <Highlighter className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <h3 className="font-serif text-base sm:text-lg font-bold text-slate-950 tracking-tight truncate flex items-center gap-1.5">
                <span>My Highlights & Notes</span>
              </h3>
              <p className="text-[11px] text-slate-500 font-sans truncate">
                {currentSubject.title} • <span className="font-semibold text-amber-800">{subjectHighlights.length}</span> saved
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer shrink-0"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Horizontal Color Filter Chips (Touch scrollable) */}
        <div className="px-3 sm:px-6 py-2.5 border-b border-slate-100 bg-[#faf9f6] flex items-center gap-1.5 overflow-x-auto text-xs scrollbar-none shrink-0">
          <button
            onClick={() => setSelectedColorFilter('ALL')}
            className={`px-3 py-1.5 rounded-full font-semibold transition-all whitespace-nowrap cursor-pointer shrink-0 text-xs ${
              selectedColorFilter === 'ALL'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'bg-white border border-slate-200 text-slate-600 hover:text-slate-950'
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
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full font-medium transition-all whitespace-nowrap cursor-pointer shrink-0 text-xs border ${
                  isSelected
                    ? 'bg-white text-slate-950 font-bold border-slate-800 shadow-2xs ring-1 ring-slate-800'
                    : 'bg-white border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300'
                }`}
              >
                <span 
                  className="w-2.5 h-2.5 rounded-full shrink-0" 
                  style={{ backgroundColor: dotColor }} 
                />
                <span>{label}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                  isSelected ? 'bg-slate-100 text-slate-900' : 'bg-slate-100 text-slate-500'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Highlights Cards List Body — isolated scrolling */}
        <div className="p-3 sm:p-6 overflow-y-auto flex-1 space-y-3 bg-[#faf9f6]/40 divide-y divide-slate-100 overscroll-contain touch-pan-y">
          {filteredHighlights.length === 0 ? (
            <div className="text-center py-12 px-4 text-slate-400 space-y-3">
              <div className="w-12 h-12 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center mx-auto">
                <Highlighter className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <p className="text-sm font-semibold text-slate-800 font-serif">No highlights found in this category</p>
                <p className="text-xs text-slate-500 max-w-xs mx-auto leading-relaxed">
                  Turn on <span className="font-bold text-amber-800">Highlighting</span>, drag across words you want to remember, and tap <span className="font-bold text-slate-800">Highlight ✓</span>.
                </p>
              </div>
            </div>
          ) : (
            filteredHighlights.map((h) => {
              const colorConfig = HIGHLIGHT_COLORS[h.color];
              const isEditingThis = editingNoteId === h.id;
              const accentColor = colorConfig.hex === '#fef08a' ? '#eab308' : colorConfig.hex === '#bbf7d0' ? '#10b981' : colorConfig.hex === '#fbcfe8' ? '#f43f5e' : '#0ea5e9';

              return (
                <div 
                  key={h.id} 
                  className="pt-3 first:pt-0"
                >
                  <div className="p-4 sm:p-5 rounded-2xl border border-slate-200/90 bg-white hover:border-slate-300 transition-all space-y-3 shadow-2xs">
                    
                    {/* Card Header: Page badge, Category pill & Delete */}
                    <div className="flex items-center justify-between gap-2 text-xs">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className="font-mono text-[11px] font-bold text-slate-700 bg-slate-100 border border-slate-200 px-2 py-0.5 rounded-md flex items-center gap-1">
                          <BookOpen className="w-3 h-3 text-slate-500" />
                          <span>Page {Math.ceil(h.pageNumber / 4)}</span>
                        </span>

                        <span 
                          className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider"
                          style={{
                            backgroundColor: `${accentColor}18`,
                            color: accentColor,
                          }}
                        >
                          <span 
                            className="w-1.5 h-1.5 rounded-full shrink-0"
                            style={{ backgroundColor: accentColor }}
                          />
                          <span>{colorConfig.meaning}</span>
                        </span>
                      </div>

                      {/* Delete button */}
                      <button
                        onClick={() => onDeleteHighlight(h.id)}
                        className="p-1 rounded-lg text-slate-300 hover:text-rose-600 hover:bg-rose-50 transition-colors cursor-pointer"
                        title="Remove highlight"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Highlighted Text Quote */}
                    <blockquote 
                      className="pl-3.5 py-1 text-sm sm:text-base font-serif leading-relaxed text-slate-900 border-l-[3px] rounded-r-lg"
                      style={{ 
                        borderColor: accentColor,
                        backgroundColor: `${accentColor}0a`
                      }}
                    >
                      &ldquo;{h.text}&rdquo;
                    </blockquote>

                    {/* Personal Study Note Section */}
                    {isEditingThis ? (
                      <div className="space-y-2 pt-1 border-t border-slate-100">
                        <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1">
                          <Pencil className="w-3 h-3 text-amber-700" />
                          <span>Your Study Note:</span>
                        </label>
                        <textarea
                          rows={2}
                          value={tempNoteText}
                          onChange={(e) => setTempNoteText(e.target.value)}
                          placeholder="Add your note, mnemonic, or LET board exam tip..."
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-amber-600 focus:bg-white transition-all font-sans leading-relaxed"
                          autoFocus
                        />
                        <div className="flex items-center justify-end gap-2">
                          <button
                            type="button"
                            onClick={() => setEditingNoteId(null)}
                            className="px-3 py-1.5 text-xs font-semibold text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
                          >
                            Cancel
                          </button>
                          <button
                            type="button"
                            onClick={() => {
                              onUpdateNote(h.id, tempNoteText.trim());
                              setEditingNoteId(null);
                            }}
                            className="px-3.5 py-1.5 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-bold transition-colors cursor-pointer shadow-2xs flex items-center gap-1"
                          >
                            <Check className="w-3.5 h-3.5" />
                            <span>Save Note</span>
                          </button>
                        </div>
                      </div>
                    ) : h.note ? (
                      <div className="bg-amber-50/70 border border-amber-200/80 rounded-xl p-3 text-xs space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-amber-900 flex items-center gap-1">
                            <MessageSquare className="w-3 h-3 text-amber-700" />
                            <span>Personal Note</span>
                          </span>
                          <button
                            onClick={() => {
                              setEditingNoteId(h.id);
                              setTempNoteText(h.note || '');
                            }}
                            className="text-[11px] font-bold text-amber-800 hover:text-amber-950 underline transition-colors cursor-pointer"
                          >
                            Edit
                          </button>
                        </div>
                        <p className="font-sans text-xs text-slate-800 leading-relaxed">
                          {h.note}
                        </p>
                      </div>
                    ) : null}

                    {/* Card Action Footer: Big Touch Button for Jump to Reading + Note trigger */}
                    <div className="pt-2 border-t border-slate-100 flex items-center justify-between gap-2 text-xs">
                      {!h.note && !isEditingThis && (
                        <button
                          onClick={() => {
                            setEditingNoteId(h.id);
                            setTempNoteText('');
                          }}
                          className="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-800 hover:text-amber-950 bg-amber-50/80 hover:bg-amber-100 border border-amber-200/60 px-2.5 py-1.5 rounded-lg transition-colors cursor-pointer"
                        >
                          <MessageSquare className="w-3 h-3" />
                          <span>+ Add Note</span>
                        </button>
                      )}

                      {/* Jump to exact reading spot */}
                      <button
                        onClick={() => {
                          onJumpToHighlight(h.pageNumber, h.id, h.locationKey);
                          onClose();
                        }}
                        className="ml-auto inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 bg-slate-100 hover:bg-slate-900 hover:text-white px-3 py-1.5 rounded-lg transition-all cursor-pointer shadow-2xs active:scale-95"
                      >
                        <span>Jump to Reading</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Modal Sticky Footer */}
        <div className="px-4 sm:px-6 py-3 border-t border-slate-100 bg-white flex items-center justify-between text-xs shrink-0">
          <span className="text-[11px] text-slate-500 font-sans hidden sm:inline">
            Highlights are saved automatically to your study record.
          </span>
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-slate-950 text-white text-xs font-bold hover:bg-slate-800 transition-colors cursor-pointer ml-auto shadow-xs active:scale-98"
          >
            Done Reviewing
          </button>
        </div>

      </div>
    </div>
  );
};

