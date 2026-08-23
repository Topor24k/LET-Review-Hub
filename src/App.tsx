import React, { useState, useEffect, useMemo } from 'react';
import { Header } from './components/Header';
import { HeroBanner } from './components/HeroBanner';
import { SubjectCard } from './components/SubjectCard';
import { SubstackArticleView } from './components/SubstackArticleView';
import { SubjectExamView } from './components/SubjectExamView';
import { LoginScreen } from './components/LoginScreen';
import { SUBJECTS_DATA } from './data/subjects';
import { SubjectCategory, SubjectModule, SubjectProgressMap, StudyStatus, UserSubjectState } from './types';
import { BookOpen, SlidersHorizontal, Sparkles } from 'lucide-react';
import { initCloudSync, pushCloudChange } from './lib/cloudSync';

const AUTH_KEY = 'let_reviewer_authenticated';
const NAV_STATE_KEY = 'let_reviewer_nav_state_v1';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    try {
      return localStorage.getItem(AUTH_KEY) === 'true';
    } catch {
      return false;
    }
  });

  // Restore active navigation state from localStorage
  const savedNav = useMemo(() => {
    try {
      const raw = localStorage.getItem(NAV_STATE_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  }, []);

  const [activeCategory, setActiveCategory] = useState<SubjectCategory>(() => savedNav?.activeCategory || 'ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [showOnlyBookmarks, setShowOnlyBookmarks] = useState(false);
  const [statusFilter, setStatusFilter] = useState<'ALL' | StudyStatus>('ALL');
  const [selectedSubject, setSelectedSubject] = useState<SubjectModule | null>(() => {
    if (savedNav?.selectedSubjectId) {
      return SUBJECTS_DATA.find(s => s.id === savedNav.selectedSubjectId) || null;
    }
    return null;
  });
  const [selectedExamSubject, setSelectedExamSubject] = useState<SubjectModule | null>(() => {
    if (savedNav?.selectedExamSubjectId) {
      return SUBJECTS_DATA.find(s => s.id === savedNav.selectedExamSubjectId) || null;
    }
    return null;
  });

  // User progress backed strictly by MongoDB
  const [userProgress, setUserProgress] = useState<SubjectProgressMap>({});

  // Start MongoDB Cloud Synchronization & listen for multi-device updates
  useEffect(() => {
    initCloudSync();

    const handleCloudSync = (e: any) => {
      if (e.detail?.userProgress) {
        setUserProgress(e.detail.userProgress);
      }
    };

    window.addEventListener('cloud-sync-applied', handleCloudSync);
    return () => window.removeEventListener('cloud-sync-applied', handleCloudSync);
  }, []);

  // Save active view state to localStorage so refreshes keep user in place
  useEffect(() => {
    try {
      localStorage.setItem(
        NAV_STATE_KEY,
        JSON.stringify({
          activeCategory,
          selectedSubjectId: selectedSubject?.id || null,
          selectedExamSubjectId: selectedExamSubject?.id || null,
        })
      );
    } catch (e) {
      console.error('Failed to save nav state', e);
    }
  }, [activeCategory, selectedSubject, selectedExamSubject]);

  const handleLogout = () => {
    try {
      localStorage.removeItem(AUTH_KEY);
      localStorage.removeItem(NAV_STATE_KEY);
    } catch (e) {
      console.error(e);
    }
    setIsAuthenticated(false);
  };

  // Handlers for updating status, notes, bookmarks with instant MongoDB push
  const handleToggleBookmark = (subjectId: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setUserProgress(prev => {
      const current = prev[subjectId] || {
        bookmarked: false,
        status: 'NOT_STARTED',
        userNotes: '',
      };
      const updated = {
        ...prev,
        [subjectId]: {
          ...current,
          bookmarked: !current.bookmarked,
        },
      };
      pushCloudChange({ userProgress: updated });
      return updated;
    });
  };

  const handleUpdateStatus = (subjectId: string, status: StudyStatus, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setUserProgress(prev => {
      const current = prev[subjectId] || {
        bookmarked: false,
        status: 'NOT_STARTED',
        userNotes: '',
      };
      const updated = {
        ...prev,
        [subjectId]: {
          ...current,
          status,
          lastStudied: new Date().toISOString(),
        },
      };
      pushCloudChange({ userProgress: updated });
      return updated;
    });
  };

  const handleSaveNotes = (subjectId: string, notes: string) => {
    setUserProgress(prev => {
      const current = prev[subjectId] || {
        bookmarked: false,
        status: 'NOT_STARTED',
        userNotes: '',
      };
      const updated = {
        ...prev,
        [subjectId]: {
          ...current,
          userNotes: notes,
        },
      };
      pushCloudChange({ userProgress: updated });
      return updated;
    });
  };

  const bookmarkedCount = useMemo(() => {
    const list = Object.values(userProgress) as UserSubjectState[];
    return list.filter(p => p && p.bookmarked).length;
  }, [userProgress]);

  const completedCount = useMemo(() => {
    const list = Object.values(userProgress) as UserSubjectState[];
    return list.filter(p => p && p.status === 'COMPLETED').length;
  }, [userProgress]);

  // Filtered subjects for the main grid
  const filteredSubjects = useMemo(() => {
    return SUBJECTS_DATA.filter(subject => {
      // Category filter (TRY_EXAM and ALL show all subjects)
      if (activeCategory !== 'ALL' && activeCategory !== 'TRY_EXAM' && subject.category !== activeCategory) {
        return false;
      }
      // Bookmarks filter
      if (showOnlyBookmarks && !userProgress[subject.id]?.bookmarked) {
        return false;
      }
      // Status filter
      if (statusFilter !== 'ALL') {
        const subjectStatus = userProgress[subject.id]?.status || 'NOT_STARTED';
        if (subjectStatus !== statusFilter) return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchTitle = subject.title.toLowerCase().includes(q);
        const matchSummary = subject.placeholderSummary.toLowerCase().includes(q);
        const matchTags = subject.tags.some(t => t.toLowerCase().includes(q));
        if (!matchTitle && !matchSummary && !matchTags) {
          return false;
        }
      }
      return true;
    });
  }, [activeCategory, showOnlyBookmarks, statusFilter, searchQuery, userProgress]);

  // If user is not logged in, render the dedicated single-user Login Screen
  if (!isAuthenticated) {
    return <LoginScreen onLoginSuccess={() => setIsAuthenticated(true)} />;
  }

  // If an exam subject is selected, render the Subject Exam View
  if (selectedExamSubject) {
    return (
      <SubjectExamView
        subject={selectedExamSubject}
        onBack={() => {
          setSelectedExamSubject(null);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onSelectSubject={(subject) => {
          setSelectedExamSubject(subject);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenStudyNotes={(subject) => {
          setSelectedExamSubject(null);
          setSelectedSubject(subject);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />
    );
  }

  // If a subject is selected for study, render the Substack Article View Frame (not a popup modal)
  if (selectedSubject) {
    return (
      <SubstackArticleView
        subject={selectedSubject}
        userProgress={userProgress}
        onBack={() => {
          setSelectedSubject(null);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onSelectSubject={(subject) => {
          setSelectedSubject(subject);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onToggleBookmark={handleToggleBookmark}
        onUpdateStatus={handleUpdateStatus}
        onSaveNotes={handleSaveNotes}
        onOpenExam={(subject) => {
          setSelectedSubject(null);
          setSelectedExamSubject(subject);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />
    );
  }

  return (
    <div className="min-h-screen bg-[#faf9f6] text-slate-900 flex flex-col animate-fadeIn">
      
      {/* Header Navigation */}
      <Header
        activeCategory={activeCategory}
        onSelectCategory={(cat) => {
          setActiveCategory(cat);
          setShowOnlyBookmarks(false);
        }}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        bookmarkedCount={bookmarkedCount}
        completedCount={completedCount}
        totalSubjects={SUBJECTS_DATA.length}
        profEdCount={SUBJECTS_DATA.filter(s => s.category === 'PROF_ED').length}
        genEdCount={SUBJECTS_DATA.filter(s => s.category === 'GEN_ED').length}
        showOnlyBookmarks={showOnlyBookmarks}
        onToggleBookmarksOnly={() => setShowOnlyBookmarks(prev => !prev)}
        onLogout={handleLogout}
      />

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-8 flex-1 w-full space-y-5 sm:space-y-8">
        
        {/* Welcome / Hero Banner */}
        {!searchQuery && !showOnlyBookmarks && activeCategory === 'ALL' && (
          <HeroBanner />
        )}

        {/* Full-Width Main Subject Section */}
        <section className="space-y-4 sm:space-y-6">
          
          {/* Section Header with Category & Status Filters */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-900/10 gap-3">
            <div>
              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-slate-950">
                {showOnlyBookmarks
                  ? 'Saved Bookmarked Subjects'
                  : activeCategory === 'TRY_EXAM'
                  ? `Exam Simulations (${SUBJECTS_DATA.length} Subjects)`
                  : activeCategory === 'PROF_ED'
                  ? `Professional Education (${SUBJECTS_DATA.filter(s => s.category === 'PROF_ED').length} Subjects)`
                  : activeCategory === 'GEN_ED'
                  ? `General Education (${SUBJECTS_DATA.filter(s => s.category === 'GEN_ED').length} Subjects)`
                  : `All Review Subjects (${SUBJECTS_DATA.length})`}
              </h2>
              {activeCategory !== 'TRY_EXAM' && (
                <p className="text-xs text-slate-500 mt-0.5">
                  Showing {filteredSubjects.length} of {SUBJECTS_DATA.length} subjects • Tap any subject to open review notes
                </p>
              )}
            </div>

            {/* Status Filter Selector */}
            <div className="flex items-center gap-2">
              <SlidersHorizontal className="w-3.5 h-3.5 text-slate-400" />
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value as 'ALL' | StudyStatus)}
                className="text-xs bg-white border border-slate-200 rounded-md px-2.5 py-1.5 text-slate-700 focus:outline-none focus:ring-1 focus:ring-slate-900 font-medium cursor-pointer"
              >
                <option value="ALL">All Statuses</option>
                <option value="NOT_STARTED">To Review</option>
                <option value="IN_PROGRESS">In Progress</option>
                <option value="COMPLETED">Mastered</option>
              </select>
            </div>
          </div>

          {/* If No Results Found */}
          {filteredSubjects.length === 0 ? (
            <div className="bg-white rounded-lg border border-slate-200 p-8 sm:p-12 text-center space-y-3">
              <BookOpen className="w-8 h-8 text-slate-400 mx-auto" />
              <h3 className="font-serif text-lg font-bold text-slate-900">No subjects match your filter</h3>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                Try clearing the search query or adjusting your category/status filters.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('ALL');
                  setShowOnlyBookmarks(false);
                  setStatusFilter('ALL');
                }}
                className="px-4 py-2 bg-slate-900 text-white text-xs font-semibold rounded-md shadow-xs cursor-pointer hover:bg-slate-800"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            /* Responsive Card Grid (1 col on mobile, 2 on tablet, 3-4 on desktop) */
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {filteredSubjects.map((subject) => (
                <SubjectCard
                  key={subject.id}
                  subject={subject}
                  userProgress={userProgress}
                  isExamMode={activeCategory === 'TRY_EXAM'}
                  onSelectSubject={(subj) => {
                    if (activeCategory === 'TRY_EXAM') {
                      setSelectedExamSubject(subj);
                    } else {
                      setSelectedSubject(subj);
                    }
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  onToggleBookmark={handleToggleBookmark}
                  onUpdateStatus={handleUpdateStatus}
                />
              ))}
            </div>
          )}

        </section>

      </main>

    </div>
  );
}

