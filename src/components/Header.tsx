import React from 'react';
import { Search, Bookmark, CheckCircle2, LogOut, Sparkles } from 'lucide-react';
import { SubjectCategory } from '../types';

interface HeaderProps {
  activeCategory: SubjectCategory;
  onSelectCategory: (category: SubjectCategory) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  bookmarkedCount: number;
  completedCount: number;
  totalSubjects: number;
  profEdCount?: number;
  genEdCount?: number;
  onToggleBookmarksOnly: () => void;
  showOnlyBookmarks: boolean;
  onLogout?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  bookmarkedCount,
  completedCount,
  totalSubjects,
  profEdCount = 0,
  genEdCount = 0,
  onToggleBookmarksOnly,
  showOnlyBookmarks,
  onLogout,
}) => {
  return (
    <header className="w-full bg-[#faf9f6] border-b border-slate-200 sticky top-0 z-30 shadow-xs backdrop-blur-md bg-[#faf9f6]/95">
      {/* Top Header Bar */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
          
          {/* Logo / Brand */}
          <div className="flex items-center justify-between gap-3">
            <button 
              onClick={() => {
                onSelectCategory('ALL');
                if (showOnlyBookmarks) onToggleBookmarksOnly();
              }}
              className="flex items-center gap-2.5 text-left group focus:outline-none cursor-pointer"
            >
              <div className="w-8 h-8 sm:w-9 sm:h-9 bg-slate-900 text-white flex items-center justify-center font-serif text-lg sm:text-xl font-bold rounded-xs shadow-xs group-hover:bg-slate-800 transition-colors">
                L
              </div>
              <div>
                <span className="font-serif text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-slate-950 block leading-tight">
                  LET Reviewer<span className="text-amber-700">.</span>
                </span>
                <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-widest text-slate-500 block">
                  Licensure Exam Portal
                </span>
              </div>
            </button>

            {/* Mobile quick logout if on small screen */}
            {onLogout && (
              <button
                onClick={onLogout}
                title="Lock Review Portal"
                className="sm:hidden p-2 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-colors cursor-pointer border border-transparent"
              >
                <LogOut className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Search & Actions */}
          <div className="flex items-center gap-2 sm:gap-3 flex-1 w-full max-w-full sm:max-w-lg sm:ml-auto">
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search subjects, topics, terms..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full pl-9 sm:pl-10 pr-12 py-2 text-xs sm:text-sm bg-white border border-slate-200 rounded-full text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-slate-800 focus:ring-1 focus:ring-slate-800 transition-all shadow-xs"
              />
              {searchQuery && (
                <button
                  onClick={() => onSearchChange('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-700 px-1 cursor-pointer font-medium"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Bookmarks Toggle */}
            <button
              onClick={onToggleBookmarksOnly}
              title="View Bookmarked Subjects"
              className={`flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-full border transition-all whitespace-nowrap cursor-pointer shrink-0 ${
                showOnlyBookmarks
                  ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                  : 'bg-white text-slate-700 border-slate-200 hover:border-slate-400 hover:bg-slate-50'
              }`}
            >
              <Bookmark className={`w-3.5 h-3.5 ${showOnlyBookmarks ? 'fill-white' : 'text-slate-500'}`} />
              <span className="hidden xs:inline sm:inline">Saved</span>
              <span className={`px-1.5 py-0.2 text-[10px] rounded-full font-bold ${
                showOnlyBookmarks ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'
              }`}>
                {bookmarkedCount}
              </span>
            </button>

            {/* Desktop Logout Button */}
            {onLogout && (
              <button
                onClick={onLogout}
                title="Lock Review Portal"
                className="hidden sm:flex p-2 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-colors cursor-pointer border border-transparent hover:border-slate-200"
              >
                <LogOut className="w-4 h-4" />
              </button>
            )}
          </div>

        </div>
      </div>

      {/* Category Navigation Bar */}
      <nav className="border-t border-slate-200/80 bg-white/80 backdrop-blur-xs overflow-x-auto scrollbar-none">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center gap-1 sm:gap-2 py-1.5 sm:py-2">
          
          <button
            onClick={() => {
              onSelectCategory('ALL');
              if (showOnlyBookmarks) onToggleBookmarksOnly();
            }}
            className={`px-3 sm:px-3.5 py-1.5 text-[11px] sm:text-xs font-semibold tracking-wider uppercase transition-colors whitespace-nowrap border-b-2 cursor-pointer shrink-0 ${
              activeCategory === 'ALL' && !showOnlyBookmarks
                ? 'border-slate-900 text-slate-950 font-bold'
                : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            <span className="sm:hidden">All ({totalSubjects})</span>
            <span className="hidden sm:inline">All Subjects ({totalSubjects})</span>
          </button>

          <button
            onClick={() => {
              onSelectCategory('PROF_ED');
              if (showOnlyBookmarks) onToggleBookmarksOnly();
            }}
            className={`px-3 sm:px-3.5 py-1.5 text-[11px] sm:text-xs font-semibold tracking-wider uppercase transition-colors whitespace-nowrap border-b-2 cursor-pointer shrink-0 ${
              activeCategory === 'PROF_ED' && !showOnlyBookmarks
                ? 'border-slate-900 text-slate-950 font-bold'
                : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            <span className="sm:hidden">Prof Ed ({profEdCount})</span>
            <span className="hidden sm:inline">Professional Education ({profEdCount})</span>
          </button>

          <button
            onClick={() => {
              onSelectCategory('GEN_ED');
              if (showOnlyBookmarks) onToggleBookmarksOnly();
            }}
            className={`px-3 sm:px-3.5 py-1.5 text-[11px] sm:text-xs font-semibold tracking-wider uppercase transition-colors whitespace-nowrap border-b-2 cursor-pointer shrink-0 ${
              activeCategory === 'GEN_ED' && !showOnlyBookmarks
                ? 'border-slate-900 text-slate-950 font-bold'
                : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            <span className="sm:hidden">Gen Ed ({genEdCount})</span>
            <span className="hidden sm:inline">General Education ({genEdCount})</span>
          </button>

          <button
            onClick={() => {
              onSelectCategory('TRY_EXAM');
              if (showOnlyBookmarks) onToggleBookmarksOnly();
            }}
            className={`px-3 sm:px-3.5 py-1.5 text-[11px] sm:text-xs font-semibold tracking-wider uppercase transition-colors whitespace-nowrap border-b-2 cursor-pointer shrink-0 ${
              activeCategory === 'TRY_EXAM' && !showOnlyBookmarks
                ? 'border-amber-700 text-amber-950 font-bold bg-amber-50/80 rounded-t-sm'
                : 'border-transparent text-amber-800 hover:text-amber-950 hover:bg-amber-50/40'
            }`}
          >
            <span className="sm:hidden">Simulate ({totalSubjects})</span>
            <span className="hidden sm:inline">Exam Simulations ({totalSubjects})</span>
          </button>

        </div>
      </nav>
    </header>
  );
};
