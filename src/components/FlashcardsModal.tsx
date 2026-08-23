import React, { useState, useEffect } from 'react';
import { FlashcardItem, SubjectModule } from '../types';
import { X, HelpCircle, RotateCw, ChevronLeft, ChevronRight, Trash2, CheckCircle2, Plus, Sparkles } from 'lucide-react';
import { getStoredFlashcardMastery, saveStoredFlashcardMastery } from '../lib/highlightConstants';

interface FlashcardsModalProps {
  isOpen: boolean;
  onClose: () => void;
  flashcards: FlashcardItem[];
  currentSubject: SubjectModule;
  currentPageNumber?: number;
  onDeleteFlashcard: (id: string) => void;
  onAddFlashcard?: (newCard: FlashcardItem) => void;
}

export const FlashcardsModal: React.FC<FlashcardsModalProps> = ({
  isOpen,
  onClose,
  flashcards,
  currentSubject,
  currentPageNumber = 1,
  onDeleteFlashcard,
  onAddFlashcard,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [masteredIds, setMasteredIds] = useState<Set<string>>(() => {
    return new Set(getStoredFlashcardMastery());
  });
  const [isCreatingNew, setIsCreatingNew] = useState(false);
  const [newQuestion, setNewQuestion] = useState('');
  const [newAnswer, setNewAnswer] = useState('');

  // Persist mastery state changes
  useEffect(() => {
    saveStoredFlashcardMastery(Array.from(masteredIds));
  }, [masteredIds]);

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

  const subjectCards = flashcards.filter(c => c.subjectId === currentSubject.id);
  const currentCard = subjectCards[currentIndex];

  const handleNext = () => {
    setIsFlipped(false);
    if (currentIndex < subjectCards.length - 1) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    setIsFlipped(false);
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  const toggleMastered = (id: string) => {
    setMasteredIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const handleSaveCustomCard = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newQuestion.trim() || !newAnswer.trim()) return;

    if (onAddFlashcard) {
      const newCard: FlashcardItem = {
        id: `fc-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
        subjectId: currentSubject.id,
        pageNumber: currentPageNumber,
        question: newQuestion.trim(),
        answer: newAnswer.trim(),
        createdAt: Date.now(),
      };
      onAddFlashcard(newCard);
      setNewQuestion('');
      setNewAnswer('');
      setIsCreatingNew(false);
      setCurrentIndex(0);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/40 backdrop-blur-xs animate-fadeIn">
      <div className="bg-white rounded-2xl border border-slate-200 shadow-2xl max-w-xl w-full flex flex-col overflow-hidden max-h-[92vh]">
        
        {/* Header */}
        <div className="px-4 sm:px-6 py-3.5 sm:py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/70 gap-2 shrink-0">
          <div className="flex items-center gap-2 min-w-0">
            <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-800 shrink-0">
              <HelpCircle className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <h3 className="font-serif text-sm sm:text-base font-bold text-slate-900 truncate">
                Flashcards Bank
              </h3>
              <p className="text-[11px] sm:text-xs text-slate-500 truncate">
                {currentSubject.title} • {subjectCards.length} Cards
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5 shrink-0">
            <button
              onClick={() => setIsCreatingNew(!isCreatingNew)}
              className={`px-2.5 sm:px-3 py-1.5 rounded-lg text-[11px] sm:text-xs font-semibold flex items-center gap-1 transition-colors cursor-pointer ${
                isCreatingNew
                  ? 'bg-slate-200 text-slate-800'
                  : 'bg-emerald-700 hover:bg-emerald-800 text-white shadow-xs'
              }`}
            >
              <Plus className="w-3.5 h-3.5" />
              <span>{isCreatingNew ? 'Cards' : '+ Add'}</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-200/50 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="p-4 sm:p-6 flex flex-col items-center overflow-y-auto flex-1">
          
          {/* Add New Card Form */}
          {isCreatingNew ? (
            <form onSubmit={handleSaveCustomCard} className="w-full space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">Question / Prompt / Term:</label>
                <textarea
                  rows={3}
                  value={newQuestion}
                  onChange={(e) => setNewQuestion(e.target.value)}
                  placeholder="e.g., What is the definition of PQF Level 6?"
                  className="w-full p-3 text-xs sm:text-sm bg-white border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-all font-serif"
                  required
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">Answer / Explanation / Key Takeaway:</label>
                <textarea
                  rows={4}
                  value={newAnswer}
                  onChange={(e) => setNewAnswer(e.target.value)}
                  placeholder="e.g., Baccalaureate Degree (Bachelor's Degree) — applies specialized knowledge in field of study."
                  className="w-full p-3 text-xs sm:text-sm bg-white border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-all font-serif"
                  required
                />
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsCreatingNew(false)}
                  className="px-4 py-2 text-xs font-medium text-slate-600 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-slate-950 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg shadow-xs transition-colors cursor-pointer"
                >
                  Save Flashcard
                </button>
              </div>
            </form>
          ) : subjectCards.length === 0 ? (
            <div className="text-center py-10 text-slate-400">
              <HelpCircle className="w-10 h-10 mx-auto mb-2 opacity-40 text-emerald-700" />
              <p className="text-sm font-bold text-slate-700">No Flashcards Created Yet</p>
              <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto leading-relaxed">
                You can create cards in 2 quick ways:
              </p>
              <div className="mt-4 p-3 bg-slate-50 border border-slate-200 rounded-xl text-left text-xs text-slate-600 space-y-2 max-w-sm mx-auto font-sans">
                <div className="flex items-start gap-2">
                  <span className="font-bold text-emerald-700 shrink-0">1.</span>
                  <span><strong>Highlight any text</strong> in reading mode, click the highlight, and press the <strong>❓ (Turn into Question)</strong> button.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold text-emerald-700 shrink-0">2.</span>
                  <span>Click the <strong>"+ Add Card"</strong> button above to type your own question and answer.</span>
                </div>
              </div>
            </div>
          ) : (
            <>
              {/* Card index & Page ref */}
              <div className="w-full flex items-center justify-between text-xs text-slate-500 mb-3 font-medium">
                <span className="font-sans">Card {currentIndex + 1} of {subjectCards.length}</span>
                <span className="font-serif">Page {currentCard.pageNumber}</span>
              </div>

              {/* Flippable Card */}
              <div
                onClick={() => setIsFlipped(!isFlipped)}
                className={`w-full min-h-[220px] p-6 rounded-xl border transition-all cursor-pointer flex flex-col justify-between select-none ${
                  isFlipped
                    ? 'bg-emerald-50/70 border-emerald-200 text-slate-900 shadow-sm'
                    : 'bg-amber-50/40 border-amber-200 text-slate-800 hover:border-amber-300 shadow-sm'
                }`}
              >
                <div className="flex items-center justify-between text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                  <span>{isFlipped ? 'Answer / Source' : 'Question / Prompt'}</span>
                  <span className="flex items-center gap-1 text-slate-500 text-xs font-normal">
                    <RotateCw className="w-3 h-3" /> Click to flip
                  </span>
                </div>

                <div className="my-auto py-4 text-center">
                  <p className="font-serif text-sm sm:text-base leading-relaxed text-slate-900 whitespace-pre-line">
                    {isFlipped ? currentCard.answer : currentCard.question}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-slate-200/40 text-[11px] text-slate-400">
                  <span className="font-sans">Active Recall Drill</span>
                  {masteredIds.has(currentCard.id) && (
                    <span className="text-emerald-700 font-semibold flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Mastered
                    </span>
                  )}
                </div>
              </div>

              {/* Card Controls */}
              <div className="w-full mt-5 flex items-center justify-between">
                <button
                  onClick={() => toggleMastered(currentCard.id)}
                  className={`text-xs px-3 py-1.5 rounded-lg border font-medium transition-colors cursor-pointer flex items-center gap-1.5 ${
                    masteredIds.has(currentCard.id)
                      ? 'bg-emerald-100 border-emerald-300 text-emerald-800 font-semibold'
                      : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{masteredIds.has(currentCard.id) ? 'Mastered' : 'Mark Mastered'}</span>
                </button>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrev}
                    disabled={currentIndex === 0}
                    className="p-2 rounded-lg border border-slate-200 hover:bg-slate-50 disabled:opacity-30 disabled:pointer-events-none transition-colors cursor-pointer"
                    title="Previous Card"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleNext}
                    disabled={currentIndex === subjectCards.length - 1}
                    className="p-2 rounded-lg border border-slate-200 hover:bg-slate-50 disabled:opacity-30 disabled:pointer-events-none transition-colors cursor-pointer"
                    title="Next Card"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => {
                      onDeleteFlashcard(currentCard.id);
                      if (currentIndex > 0) setCurrentIndex(prev => prev - 1);
                    }}
                    className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors cursor-pointer"
                    title="Delete flashcard"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </>
          )}
        </div>

      </div>
    </div>
  );
};
