import React, { useEffect } from 'react';
import { LessonPage } from '../data/methodsAndStrategiesContent';

export interface PageGroup {
  groupIndex: number;
  displayPageNumber: number;
  rawPages: LessonPage[];
  startRawPageNum: number;
  endRawPageNum: number;
  displayDayTitle: string;
  displayTopicTitle: string;
  totalEstimatedReadTime: string;
}

interface LessonTableOfContentsProps {
  isOpen: boolean;
  onClose: () => void;
  pageGroups: PageGroup[];
  currentPageIndex: number;
  onSelectGroup: (groupIndex: number, targetRawPageNumber?: number) => void;
  subjectTitle: string;
  paragraphBookmarks: Record<string, string[]>;
  subjectId: string;
}

export const LessonTableOfContents: React.FC<LessonTableOfContentsProps> = ({
  isOpen,
  onClose,
  pageGroups,
  currentPageIndex,
  onSelectGroup,
  subjectTitle,
  paragraphBookmarks,
  subjectId,
}) => {
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

  const bookmarkedSections = paragraphBookmarks[subjectId] || [];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/35 backdrop-blur-xs animate-fadeIn overscroll-none">
      {/* Backdrop click to close */}
      <div 
        className="fixed inset-0" 
        onClick={onClose} 
        onTouchMove={(e) => e.preventDefault()}
        aria-hidden="true" 
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-xl bg-white rounded-2xl border border-slate-200/90 shadow-2xl flex flex-col max-h-[85vh] z-10 overflow-hidden font-sans">
        
        {/* Academic Header */}
        <div className="px-6 py-4.5 border-b border-slate-100 flex items-center justify-between bg-white shrink-0">
          <div className="space-y-0.5">
            <h3 className="font-serif text-base sm:text-lg font-bold text-slate-950 tracking-tight uppercase">
              {subjectTitle}
            </h3>
            <p className="text-xs text-slate-400 font-sans">
              Table of Contents • {pageGroups.length} Pages
            </p>
          </div>

          <button
            onClick={onClose}
            className="text-xs font-medium text-slate-400 hover:text-slate-900 transition-colors px-2.5 py-1 rounded-md hover:bg-slate-100 cursor-pointer"
          >
            Close
          </button>
        </div>

        {/* Lesson Groups List with Clean Scrollbar */}
        <div className="p-4 sm:p-5 overflow-y-auto flex-1 space-y-3 bg-white">
          {pageGroups.map((group, idx) => {
            const isCurrent = idx === currentPageIndex;
            const hasBookmarksInGroup = group.rawPages.some(p => 
              bookmarkedSections.some(b => b.startsWith(`p${p.pageNumber}-`))
            );

            return (
              <div
                key={idx}
                className={`w-full text-left p-4 rounded-xl transition-all block border ${
                  isCurrent
                    ? 'bg-amber-50/60 border-amber-300/80 shadow-2xs'
                    : 'bg-white hover:bg-slate-50/80 border-slate-200 hover:border-slate-300'
                }`}
              >
                {/* Meta line: Page Number + Reading time */}
                <div className="flex items-center justify-between text-xs mb-2 font-sans">
                  <div className="flex items-center gap-2">
                    <span className={`px-2 py-0.5 rounded font-mono font-bold text-[11px] ${
                      isCurrent ? 'bg-amber-200/80 text-amber-950' : 'bg-slate-100 text-slate-800'
                    }`}>
                      Page {group.displayPageNumber}
                    </span>
                    <span className="text-slate-300">•</span>
                    <span className="text-slate-500 text-[11px]">
                      {group.totalEstimatedReadTime}
                    </span>
                  </div>

                  {hasBookmarksInGroup && (
                    <span className="text-[10px] font-sans font-semibold text-amber-800 bg-amber-100 px-1.5 py-0.5 rounded border border-amber-300">
                      Bookmarked
                    </span>
                  )}
                </div>

                {/* Main Action to jump to entire page */}
                <button
                  onClick={() => {
                    onSelectGroup(idx);
                    onClose();
                  }}
                  className="w-full text-left font-serif text-sm sm:text-base font-bold text-slate-950 hover:text-amber-900 transition-colors leading-snug cursor-pointer block mb-2.5"
                >
                  {group.displayDayTitle}
                </button>

                {/* Topics within this page */}
                <div className="pt-2 border-t border-slate-100 grid grid-cols-1 gap-1.5">
                  {group.rawPages.map((sub, sIdx) => {
                    const hasSubBookmark = bookmarkedSections.some(b => b.startsWith(`p${sub.pageNumber}-`));
                    return (
                      <button
                        key={sIdx}
                        onClick={() => {
                          onSelectGroup(idx, sub.pageNumber);
                          onClose();
                        }}
                        className="text-left py-1.5 px-2 rounded-lg text-xs font-sans flex items-start gap-2 hover:bg-slate-100 text-slate-700 hover:text-slate-950 transition-colors cursor-pointer group"
                      >
                        <span className="w-5 h-5 rounded bg-slate-100 group-hover:bg-slate-900 group-hover:text-white text-slate-600 text-[10px] font-bold flex items-center justify-center border border-slate-200 group-hover:border-transparent shrink-0 mt-0.5 transition-colors">
                          {sIdx + 1}
                        </span>
                        <span className="leading-snug truncate flex-1 font-medium">
                          {sub.topicTitle}
                        </span>
                        {hasSubBookmark && (
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0 mt-1.5" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Subtle Footer Hint */}
        <div className="px-6 py-3 border-t border-slate-100 bg-[#fafafa] flex items-center justify-between text-xs text-slate-400 shrink-0">
          <span className="text-[11px]">Click any page or topic to navigate directly.</span>
          <span className="text-[11px] font-mono text-slate-400">Esc to close</span>
        </div>

      </div>
    </div>
  );
};
