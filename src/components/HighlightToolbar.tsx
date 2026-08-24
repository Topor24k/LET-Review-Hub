import React from 'react';
import { HighlightColor, HighlightColorConfig } from '../types';
import { HIGHLIGHT_COLORS } from '../lib/highlightConstants';
import { Highlighter, X, Sparkles } from 'lucide-react';

interface HighlightToolbarProps {
  isHighlightMode: boolean;
  activeColor: HighlightColor;
  onColorChange: (color: HighlightColor) => void;
  onToggleHighlightMode: () => void;
  highlightCount: number;
  onOpenDigest: () => void;
}

export const HighlightToolbar: React.FC<HighlightToolbarProps> = ({
  isHighlightMode,
  activeColor,
  onColorChange,
  onToggleHighlightMode,
  highlightCount,
  onOpenDigest,
}) => {
  const currentColorKey: HighlightColor = activeColor;
  const currentColorConfig: HighlightColorConfig = HIGHLIGHT_COLORS[currentColorKey] || HIGHLIGHT_COLORS.yellow;

  return (
    <>
      {/* ================= FLOATING HIGHLIGHT TOOLBAR (Anchored below top bar) ================= */}
      {isHighlightMode && (
        <div className="fixed top-14 sm:top-16 left-1/2 -translate-x-1/2 z-40 animate-fadeIn transition-all max-w-[94vw] sm:max-w-max">
          <div className="bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-full shadow-lg px-3 sm:px-4 py-1.5 sm:py-2 flex items-center gap-2 sm:gap-3 text-xs">
            
            {/* Highlighter Icon Badge */}
            <div className="flex items-center gap-1 sm:gap-1.5 font-medium text-emerald-800 bg-emerald-50 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full border border-emerald-100/80 shrink-0">
              <Highlighter className="w-3.5 h-3.5 text-emerald-700" />
              <span className="font-serif italic font-semibold text-[11px] sm:text-xs">Highlighting</span>
            </div>

            {/* 4 Soft Pastel Swatches */}
            <div className="flex items-center gap-2 sm:gap-3 px-0.5 sm:px-1">
              {(Object.keys(HIGHLIGHT_COLORS) as HighlightColor[]).map((colorKey) => {
                const config = HIGHLIGHT_COLORS[colorKey];
                const isActive = activeColor === colorKey;

                return (
                  <button
                    key={colorKey}
                    type="button"
                    onClick={() => onColorChange(colorKey)}
                    className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full transition-transform cursor-pointer relative ${
                      isActive 
                        ? 'ring-2 ring-emerald-600/80 ring-offset-1 sm:ring-offset-2 scale-110' 
                        : 'hover:scale-105 opacity-85 hover:opacity-100'
                    }`}
                    style={{ backgroundColor: config.hex }}
                    title={`${config.name}: ${config.meaning} (Press ${colorKey === 'yellow' ? '1' : colorKey === 'green' ? '2' : colorKey === 'pink' ? '3' : '4'})`}
                  >
                    {isActive && (
                      <span className="absolute inset-0 flex items-center justify-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-800/60" />
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            <div className="h-4 w-px bg-slate-200 hidden xs:block" />

            {/* Current Color Label */}
            <span className="text-[11px] text-slate-500 font-medium hidden md:inline">
              {currentColorConfig.meaning}
            </span>

            {/* Quick View Highlights count button */}
            {highlightCount > 0 && (
              <button
                type="button"
                onClick={onOpenDigest}
                className="flex items-center gap-1 font-semibold text-[10px] sm:text-xs text-amber-900 bg-amber-100 hover:bg-amber-200 px-2 py-0.5 sm:py-1 rounded-full transition-colors cursor-pointer shrink-0"
                title="View All My Highlights & Notes"
              >
                <Sparkles className="w-3 h-3 text-amber-700" />
                <span>{highlightCount} Saved</span>
              </button>
            )}

            {/* Exit Mode Button / Esc key tip */}
            <button
              onClick={onToggleHighlightMode}
              className="p-1 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors ml-0.5 sm:ml-1 cursor-pointer shrink-0"
              title="Exit Highlight Mode (Esc or H)"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          {/* Mobile tip: shows below the pill on small screens */}
          <p className="sm:hidden mt-1.5 text-center text-[10px] text-slate-500 font-medium px-2">
            Long-press &amp; drag to select text, then tap Highlight ✓ or lift finger
          </p>
        </div>
      )}

      {/* ================= BOTTOM-RIGHT QUICK HIGHLIGHTER TOGGLE ================= */}
      <div className="fixed bottom-6 right-6 z-30 flex items-center gap-2">
        <button
          onClick={onToggleHighlightMode}
          className={`flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-semibold shadow-md transition-all cursor-pointer ${
            isHighlightMode
              ? 'bg-emerald-700 text-white ring-2 ring-emerald-500/50 hover:bg-emerald-800'
              : 'bg-white/95 backdrop-blur-md border border-slate-200 text-slate-700 hover:text-slate-900 hover:bg-slate-50'
          }`}
          title="Toggle Highlighting (Press H)"
        >
          <Highlighter className={`w-4 h-4 ${isHighlightMode ? 'text-white animate-pulse' : 'text-emerald-700'}`} />
          <span>{isHighlightMode ? 'Highlighting ON' : 'Highlight'}</span>
        </button>
      </div>
    </>
  );
};
