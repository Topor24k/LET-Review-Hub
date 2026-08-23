import React, { useState, useEffect } from 'react';
import { Search, Bookmark, CheckCircle2, LogOut, Sparkles, Cloud, RefreshCw, Download, X, Menu } from 'lucide-react';
import { SubjectCategory } from '../types';
import { subscribeSyncStatus, syncWithCloud, SyncStatus } from '../lib/cloudSync';

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
  const [syncStatus, setSyncStatus] = useState<SyncStatus>('synced');
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isInstallModalOpen, setIsInstallModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    return subscribeSyncStatus((s) => setSyncStatus(s));
  }, []);

  useEffect(() => {
    const handler = (e: any) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };
    window.addEventListener('beforeinstallprompt', handler);
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        setDeferredPrompt(null);
      }
    } else {
      setIsInstallModalOpen(true);
    }
  };
  return (
    <header className="w-full bg-[#faf9f6] border-b border-slate-200 sticky top-0 z-30 shadow-xs backdrop-blur-md bg-[#faf9f6]/95">
      {/* Top Header Bar */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-3 sm:py-3.5">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 sm:gap-4">
          
          {/* Top Row on Mobile: Logo (Left) + Hamburger Menu (Right) */}
          <div className="flex items-center justify-between gap-3 shrink-0">
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
                <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-slate-950 block leading-tight">
                  LET Reviewer<span className="text-amber-700">.</span>
                </span>
                <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-widest text-slate-500 block">
                  Licensure Exam Portal
                </span>
              </div>
            </button>

            {/* Mobile Hamburger Toggle */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-2 rounded-xl border transition-all cursor-pointer ${
                  isMobileMenuOpen
                    ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                    : 'bg-white text-slate-800 border-slate-200 hover:bg-slate-50'
                }`}
                title="Menu"
                aria-label="Toggle navigation menu"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Collapsible Mobile Hamburger Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden w-full bg-white border border-slate-200/90 rounded-2xl p-3 shadow-lg space-y-2 animate-slideDown">
              {/* 1. Saved Subjects */}
              <button
                onClick={() => {
                  onToggleBookmarksOnly();
                  setIsMobileMenuOpen(false);
                }}
                className={`w-full flex items-center justify-between p-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  showOnlyBookmarks
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-slate-50 text-slate-800 hover:bg-slate-100'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Bookmark className={`w-4 h-4 ${showOnlyBookmarks ? 'fill-white' : 'text-slate-600'}`} />
                  <span>Saved Subjects</span>
                </div>
                <span className={`px-2 py-0.5 text-[10px] rounded-full font-bold ${
                  showOnlyBookmarks ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-700'
                }`}>
                  {bookmarkedCount}
                </span>
              </button>

              {/* 2. Cloud Sync Status */}
              <button
                onClick={() => {
                  syncWithCloud();
                }}
                className={`w-full flex items-center justify-between p-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  syncStatus === 'syncing'
                    ? 'bg-amber-50 text-amber-950 border border-amber-200'
                    : syncStatus === 'error'
                    ? 'bg-rose-50 text-rose-950 border border-rose-200'
                    : syncStatus === 'offline'
                    ? 'bg-slate-100 text-slate-700'
                    : 'bg-emerald-50 text-emerald-950 border border-emerald-200'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Cloud className={`w-4 h-4 ${
                    syncStatus === 'syncing'
                      ? 'text-amber-600 animate-spin'
                      : syncStatus === 'error'
                      ? 'text-rose-600'
                      : syncStatus === 'offline'
                      ? 'text-slate-500'
                      : 'text-emerald-700'
                  }`} />
                  <span>
                    {syncStatus === 'syncing'
                      ? 'Syncing with MongoDB...'
                      : syncStatus === 'error'
                      ? 'Sync Warning (Tap to Retry)'
                      : syncStatus === 'offline'
                      ? 'Offline Mode (Saved Locally)'
                      : 'Cloud Synced (MongoDB Atlas)'}
                  </span>
                </div>
                <span className="text-[10px] font-bold text-slate-500 underline">
                  {syncStatus === 'syncing' ? 'Syncing' : 'Sync Now'}
                </span>
              </button>

              {/* 3. Install App for Offline Study */}
              <button
                onClick={() => {
                  handleInstallClick();
                  setIsMobileMenuOpen(false);
                }}
                className="w-full flex items-center justify-between p-2.5 rounded-xl text-xs font-semibold bg-slate-900 text-white hover:bg-slate-800 transition-all cursor-pointer shadow-xs"
              >
                <div className="flex items-center gap-2.5">
                  <Download className="w-4 h-4 text-amber-400" />
                  <span>Install App (Offline Study)</span>
                </div>
                <span className="text-[10px] bg-amber-400/20 text-amber-300 px-2 py-0.5 rounded-full font-bold">
                  Free
                </span>
              </button>

              {/* 4. Logout / Lock */}
              {onLogout && (
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onLogout();
                  }}
                  className="w-full flex items-center gap-2.5 p-2.5 rounded-xl text-xs font-semibold text-rose-600 hover:bg-rose-50 transition-colors cursor-pointer"
                >
                  <LogOut className="w-4 h-4 text-rose-500" />
                  <span>Lock Review Portal / Logout</span>
                </button>
              )}
            </div>
          )}

          {/* Center: Wide, Prominent Search Bar */}
          <div className="flex-1 w-full max-w-full md:max-w-2xl md:mx-4 lg:mx-8">
            <div className="relative w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search subjects, topics, competencies, keywords..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full pl-10 sm:pl-11 pr-14 py-2.5 sm:py-2 text-xs sm:text-sm bg-white border border-slate-200/90 rounded-full text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-slate-800 focus:ring-2 focus:ring-slate-800/10 transition-all shadow-xs"
              />
              {searchQuery && (
                <button
                  onClick={() => onSearchChange('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-800 px-1 cursor-pointer font-semibold"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Right Actions on Desktop */}
          <div className="hidden md:flex items-center gap-2 sm:gap-2.5 shrink-0">
            
            {/* Bookmarks Toggle */}
            <button
              onClick={onToggleBookmarksOnly}
              title="View Bookmarked Subjects"
              className={`flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-full border transition-all whitespace-nowrap cursor-pointer shrink-0 ${
                showOnlyBookmarks
                  ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                  : 'bg-white text-slate-700 border-slate-200 hover:border-slate-400 hover:bg-slate-50'
              }`}
            >
              <Bookmark className={`w-3.5 h-3.5 ${showOnlyBookmarks ? 'fill-white' : 'text-slate-500'}`} />
              <span>Saved</span>
              <span className={`px-1.5 py-0.2 text-[10px] rounded-full font-bold ${
                showOnlyBookmarks ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'
              }`}>
                {bookmarkedCount}
              </span>
            </button>

            {/* Cloud Sync Status Indicator */}
            <button
              onClick={() => syncWithCloud()}
              title={
                syncStatus === 'syncing'
                  ? 'Syncing with MongoDB Atlas...'
                  : syncStatus === 'offline'
                  ? 'Offline (changes saved locally)'
                  : syncStatus === 'error'
                  ? 'Sync warning (tap to retry sync with MongoDB)'
                  : 'Multi-device Cloud Sync active with MongoDB (tap to refresh)'
              }
              className={`flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-full border transition-all cursor-pointer shrink-0 ${
                syncStatus === 'syncing'
                  ? 'bg-amber-50 text-amber-900 border-amber-200'
                  : syncStatus === 'error'
                  ? 'bg-rose-50 text-rose-800 border-rose-200'
                  : syncStatus === 'offline'
                  ? 'bg-slate-100 text-slate-600 border-slate-200'
                  : 'bg-emerald-50 text-emerald-900 border-emerald-200 hover:bg-emerald-100/80'
              }`}
            >
              <Cloud className={`w-3.5 h-3.5 ${
                syncStatus === 'syncing'
                  ? 'text-amber-600 animate-spin'
                  : syncStatus === 'error'
                  ? 'text-rose-600'
                  : syncStatus === 'offline'
                  ? 'text-slate-400'
                  : 'text-emerald-700'
              }`} />
              <span className="text-[11px]">
                {syncStatus === 'syncing' ? 'Syncing...' : syncStatus === 'error' ? 'Retry Sync' : syncStatus === 'offline' ? 'Offline' : 'Cloud Synced'}
              </span>
            </button>

            {/* Professional Install App Button (Static, No Bounce) */}
            {deferredPrompt && (
              <button
                onClick={handleInstallClick}
                title="Install LET Reviewer App on your device for offline studying"
                className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-full bg-slate-900 hover:bg-slate-800 text-white transition-all cursor-pointer shadow-xs border border-slate-800 shrink-0 active:scale-95"
              >
                <Download className="w-3.5 h-3.5 text-amber-400" />
                <span>Install App</span>
              </button>
            )}

            {/* Desktop Logout Button */}
            {onLogout && (
              <button
                onClick={onLogout}
                title="Lock Review Portal"
                className="p-2 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-colors cursor-pointer border border-transparent hover:border-slate-200 shrink-0"
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

      {/* Mobile Install Guide Modal */}
      {isInstallModalOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white border border-slate-200 rounded-2xl w-full max-w-md p-5 sm:p-6 shadow-2xl space-y-4 animate-slideUp">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold">
                  <Download className="w-4 h-4 text-amber-400" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-slate-950 text-base">Install LET Reviewer</h3>
                  <p className="text-[11px] text-slate-500">Study anywhere with 100% offline support</p>
                </div>
              </div>
              <button
                onClick={() => setIsInstallModalOpen(false)}
                className="p-1 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-slate-700 font-sans">
              <div className="p-3.5 rounded-xl bg-amber-50/80 border border-amber-200/80 space-y-1">
                <p className="font-bold text-amber-950 flex items-center gap-1.5">
                  <span>📱 On Android (Chrome)</span>
                </p>
                <p className="text-amber-900 leading-relaxed text-xs">
                  Tap the <strong>3 dots (⋮)</strong> at the top-right of Chrome, then tap <strong>"Install app"</strong> or <strong>"Add to Home screen"</strong>.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <p className="font-bold text-slate-900 flex items-center gap-1.5">
                  <span>🍏 On iPhone / iPad (Safari)</span>
                </p>
                <p className="text-slate-600 leading-relaxed text-xs">
                  Tap the <strong>Share button</strong> (square with up arrow), scroll down, and tap <strong>"Add to Home Screen"</strong>.
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsInstallModalOpen(false)}
              className="w-full py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-slate-800 transition-colors shadow-xs cursor-pointer"
            >
              Got It
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
