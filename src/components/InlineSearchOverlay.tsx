import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ChevronUp, ChevronDown } from 'lucide-react';

interface InlineSearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  matchCount: number;
  currentMatchIndex: number;
  onNextMatch: () => void;
  onPrevMatch: () => void;
}

export const InlineSearchOverlay: React.FC<InlineSearchOverlayProps> = ({
  isOpen,
  onClose,
  searchQuery,
  onSearchChange,
  matchCount,
  currentMatchIndex,
  onNextMatch,
  onPrevMatch,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed top-16 right-4 sm:right-16 z-40 animate-fadeIn">
      <div className="bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-full shadow-lg px-3 py-1.5 flex items-center gap-2 text-xs">
        <Search className="w-3.5 h-3.5 text-slate-400 shrink-0" />
        
        <input
          ref={inputRef}
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search in lesson..."
          className="bg-transparent border-none outline-none text-slate-800 placeholder:text-slate-400 w-36 sm:w-48 text-xs font-sans"
        />

        {searchQuery && (
          <span className="text-[11px] text-slate-400 font-mono">
            {matchCount > 0 ? `${currentMatchIndex + 1}/${matchCount}` : '0 results'}
          </span>
        )}

        <div className="flex items-center gap-0.5">
          <button
            onClick={onPrevMatch}
            disabled={matchCount === 0}
            className="p-1 rounded text-slate-400 hover:text-slate-700 hover:bg-slate-100 disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
            title="Previous match"
          >
            <ChevronUp className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={onNextMatch}
            disabled={matchCount === 0}
            className="p-1 rounded text-slate-400 hover:text-slate-700 hover:bg-slate-100 disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
            title="Next match"
          >
            <ChevronDown className="w-3.5 h-3.5" />
          </button>
        </div>

        <button
          onClick={onClose}
          className="p-1 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 cursor-pointer"
          title="Close search (Esc)"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
