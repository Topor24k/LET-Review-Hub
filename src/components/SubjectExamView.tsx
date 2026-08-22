import React, { useState, useEffect, useMemo } from 'react';
import { 
  ArrowLeft, 
  ChevronLeft, 
  ChevronRight, 
  ChevronsLeft, 
  ChevronsRight, 
  ChevronDown,
  BookOpen,
  Layers,
  CheckCircle2,
  XCircle,
  HelpCircle,
  RotateCcw,
  Award,
  AlertCircle,
  Trophy,
  History,
  TrendingUp,
  Clock,
  Filter,
  Check,
  X,
  AlertTriangle,
  Flame,
  ArrowRight,
  Eye
} from 'lucide-react';
import { SubjectModule, ExamQuestion, ExamAttempt } from '../types';
import { SUBJECTS_DATA } from '../data/subjects';
import { getExamQuestionsForSubject, scrambleExamQuestions } from '../data/exams';
import { getKayeenMessage } from '../data/kayeenMessages';
import { 
  saveExamAttempt, 
  getSubjectExamHistory, 
  getTop3ScoresForSubject, 
  getSubjectStats,
  getStoredExamDraft,
  saveStoredExamDraft,
  clearStoredExamDraft
} from '../lib/examHistory';

interface SubjectExamViewProps {
  subject: SubjectModule;
  onBack: () => void;
  onSelectSubject?: (subject: SubjectModule) => void;
  onOpenStudyNotes?: (subject: SubjectModule) => void;
}

type ReviewFilterMode = 'ALL' | 'MISTAKES' | 'CORRECT' | 'SKIPPED';

export const SubjectExamView: React.FC<SubjectExamViewProps> = ({
  subject,
  onBack,
  onSelectSubject,
  onOpenStudyNotes,
}) => {
  const [questions, setQuestions] = useState<ExamQuestion[]>(() => {
    const freshQuestions = getExamQuestionsForSubject(subject.id);
    const draft = getStoredExamDraft(subject.id);
    if (draft && draft.questions && draft.questions.length === freshQuestions.length) {
      return draft.questions;
    }
    return scrambleExamQuestions(freshQuestions);
  });
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(() => {
    const freshQuestions = getExamQuestionsForSubject(subject.id);
    const draft = getStoredExamDraft(subject.id);
    return (draft && draft.questions && draft.questions.length === freshQuestions.length)
      ? draft.currentQuestionIndex || 0 
      : 0;
  });
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>(() => {
    const freshQuestions = getExamQuestionsForSubject(subject.id);
    const draft = getStoredExamDraft(subject.id);
    return (draft && draft.questions && draft.questions.length === freshQuestions.length)
      ? draft.userAnswers || {} 
      : {};
  });
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);
  const [isSwitcherOpen, setIsSwitcherOpen] = useState(false);
  const [isHistoryModalOpen, setIsHistoryModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showConfirmSubmit, setShowConfirmSubmit] = useState(false);
  const [kayeenMessage, setKayeenMessage] = useState<string | null>(null);
  
  // Review Mode Filter (e.g. Mistakes only, All, Correct, Skipped)
  const [reviewFilter, setReviewFilter] = useState<ReviewFilterMode>('ALL');

  // Exam stats & history for this subject
  const [stats, setStats] = useState(() => getSubjectStats(subject.id));

  // Sync questions and history when subject changes
  useEffect(() => {
    const freshQuestions = getExamQuestionsForSubject(subject.id);
    const draft = getStoredExamDraft(subject.id);
    if (draft && draft.questions && draft.questions.length === freshQuestions.length) {
      setQuestions(draft.questions);
      setCurrentQuestionIndex(draft.currentQuestionIndex || 0);
      setUserAnswers(draft.userAnswers || {});
    } else {
      const newQuestions = scrambleExamQuestions(freshQuestions);
      setQuestions(newQuestions);
      setCurrentQuestionIndex(0);
      setUserAnswers({});
    }
    setIsSubmitted(false);
    setShowConfirmSubmit(false);
    setReviewFilter('ALL');
    setStats(getSubjectStats(subject.id));
  }, [subject.id]);

  // Persist live draft so refreshing or navigating never loses choices
  useEffect(() => {
    if (!isSubmitted && questions.length > 0) {
      saveStoredExamDraft({
        subjectId: subject.id,
        questions,
        currentQuestionIndex,
        userAnswers,
      });
    }
  }, [subject.id, questions, currentQuestionIndex, userAnswers, isSubmitted]);

  const totalQuestions = questions.length || 75;
  const currentQ = questions[currentQuestionIndex];
  const currentQuestionNumber = currentQuestionIndex + 1;

  // Answer tracking
  const answeredCount = Object.keys(userAnswers).length;
  const remainingCount = totalQuestions - answeredCount;
  const progressPercent = Math.round((answeredCount / totalQuestions) * 100);
  const selectedAnswer = currentQ ? userAnswers[currentQ.id] : undefined;

  // Score calculation
  const correctQuestions = useMemo(() => {
    return questions.filter(q => userAnswers[q.id] === q.correctAnswer);
  }, [questions, userAnswers]);

  const wrongQuestions = useMemo(() => {
    return questions.filter(q => userAnswers[q.id] && userAnswers[q.id] !== q.correctAnswer);
  }, [questions, userAnswers]);

  const skippedQuestions = useMemo(() => {
    return questions.filter(q => !userAnswers[q.id]);
  }, [questions, userAnswers]);

  const mistakesList = useMemo(() => {
    // All items that are either wrong or skipped
    return questions.filter(q => userAnswers[q.id] !== q.correctAnswer);
  }, [questions, userAnswers]);

  const correctCount = correctQuestions.length;
  const scorePercent = Math.round((correctCount / totalQuestions) * 100);
  const isPassed = scorePercent >= 75;

  // Filtered question indexes for navigation in review mode
  const filteredQuestionIndices = useMemo(() => {
    if (!isSubmitted || reviewFilter === 'ALL') {
      return questions.map((_, i) => i);
    }
    if (reviewFilter === 'MISTAKES') {
      return questions
        .map((q, i) => (userAnswers[q.id] !== q.correctAnswer ? i : -1))
        .filter(i => i !== -1);
    }
    if (reviewFilter === 'CORRECT') {
      return questions
        .map((q, i) => (userAnswers[q.id] === q.correctAnswer ? i : -1))
        .filter(i => i !== -1);
    }
    if (reviewFilter === 'SKIPPED') {
      return questions
        .map((q, i) => (!userAnswers[q.id] ? i : -1))
        .filter(i => i !== -1);
    }
    return questions.map((_, i) => i);
  }, [isSubmitted, reviewFilter, questions, userAnswers]);

  // Filtered questions list for continuous scroll review
  const filteredQuestions = useMemo(() => {
    return filteredQuestionIndices.map(idx => questions[idx]).filter(Boolean);
  }, [filteredQuestionIndices, questions]);

  // Handle option selection
  const handleSelectOption = (choiceKey: string) => {
    if (isSubmitted || !currentQ) return;
    setUserAnswers((prev) => {
      if (prev[currentQ.id] === choiceKey) {
        const next = { ...prev };
        delete next[currentQ.id];
        return next;
      }
      return {
        ...prev,
        [currentQ.id]: choiceKey,
      };
    });
  };

  const handleClearSelection = () => {
    if (isSubmitted || !currentQ) return;
    setUserAnswers((prev) => {
      const next = { ...prev };
      delete next[currentQ.id];
      return next;
    });
  };

  // Navigation handlers
  const handleFirst = () => {
    if (filteredQuestionIndices.length > 0) {
      setCurrentQuestionIndex(filteredQuestionIndices[0]);
    }
  };

  const handlePrev = () => {
    if (filteredQuestionIndices.length === 0) return;
    const currentPos = filteredQuestionIndices.indexOf(currentQuestionIndex);
    if (currentPos > 0) {
      setCurrentQuestionIndex(filteredQuestionIndices[currentPos - 1]);
    } else if (currentPos === -1 && currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleNext = () => {
    if (filteredQuestionIndices.length === 0) return;
    const currentPos = filteredQuestionIndices.indexOf(currentQuestionIndex);
    if (currentPos >= 0 && currentPos < filteredQuestionIndices.length - 1) {
      setCurrentQuestionIndex(filteredQuestionIndices[currentPos + 1]);
    } else if (currentPos === -1 && currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handleLast = () => {
    if (filteredQuestionIndices.length > 0) {
      setCurrentQuestionIndex(filteredQuestionIndices[filteredQuestionIndices.length - 1]);
    }
  };

  // Jump to next mistake directly
  const handleJumpNextMistake = () => {
    const nextMistakeIndex = questions.findIndex(
      (q, idx) => idx > currentQuestionIndex && userAnswers[q.id] !== q.correctAnswer
    );
    if (nextMistakeIndex !== -1) {
      setCurrentQuestionIndex(nextMistakeIndex);
    } else {
      // Loop around to first mistake
      const firstMistake = questions.findIndex(q => userAnswers[q.id] !== q.correctAnswer);
      if (firstMistake !== -1) setCurrentQuestionIndex(firstMistake);
    }
  };

  // Restart for a fresh attempt (Unlimited tries & Fresh scramble)
  const handleRestart = () => {
    clearStoredExamDraft(subject.id);
    const freshlyScrambled = scrambleExamQuestions(getExamQuestionsForSubject(subject.id));
    setQuestions(freshlyScrambled);
    setUserAnswers({});
    setIsSubmitted(false);
    setShowConfirmSubmit(false);
    setCurrentQuestionIndex(0);
    setReviewFilter('ALL');
    setKayeenMessage(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Submit and save exam attempt
  const handleSubmitExam = () => {
    clearStoredExamDraft(subject.id);
    setShowConfirmSubmit(false);
    setIsSubmitted(true);
    setCurrentQuestionIndex(0);
    setReviewFilter('ALL');

    const newAttempt: ExamAttempt = {
      id: `attempt_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      subjectId: subject.id,
      subjectTitle: subject.title,
      completedAt: new Date().toISOString(),
      score: correctCount,
      totalQuestions,
      percentage: scorePercent,
      isPassed,
      userAnswers: { ...userAnswers },
      questionsSnapshot: [...questions],
    };

    saveExamAttempt(newAttempt);
    setStats(getSubjectStats(subject.id));
    // Generate Kayeen's message based on score and current time as seed
    setKayeenMessage(getKayeenMessage(correctCount, Math.floor(Date.now() / 1000) % 16));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Load a past attempt to review what went wrong
  const handleReviewPastAttempt = (attempt: ExamAttempt) => {
    if (attempt.questionsSnapshot && attempt.questionsSnapshot.length > 0) {
      setQuestions(attempt.questionsSnapshot);
    } else {
      setQuestions(getExamQuestionsForSubject(subject.id));
    }
    setUserAnswers({ ...attempt.userAnswers });
    setIsSubmitted(true);
    setIsHistoryModalOpen(false);
    setCurrentQuestionIndex(0);
    setReviewFilter('ALL');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isFilterMenuOpen || isSwitcherOpen || showConfirmSubmit || isHistoryModalOpen) return;
      if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (!isSubmitted) {
        if (['1', 'a', 'A'].includes(e.key)) handleSelectOption('A');
        else if (['2', 'b', 'B'].includes(e.key)) handleSelectOption('B');
        else if (['3', 'c', 'C'].includes(e.key)) handleSelectOption('C');
        else if (['4', 'd', 'D'].includes(e.key)) handleSelectOption('D');
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentQuestionIndex, isFilterMenuOpen, isSwitcherOpen, showConfirmSubmit, isHistoryModalOpen, isSubmitted, currentQ, filteredQuestionIndices]);

  return (
    <div className="min-h-screen bg-[#faf9f6] text-slate-900 flex flex-col justify-start items-center p-2 sm:p-6 md:p-8 font-sans selection:bg-amber-100">
      
      {/* Top Application Navigation Bar */}
      <div className="max-w-4xl w-full flex items-center justify-between mb-3 sm:mb-4 px-1 gap-2">
        
        {/* Left: Exit Exam */}
        <button
          onClick={onBack}
          className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 rounded-lg transition-colors shadow-2xs cursor-pointer shrink-0"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Exit</span>
        </button>

        {/* Right: Actions (Score History, Study Notes, Change Subject) */}
        <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap justify-end">
          
          {/* Score History Button */}
          <button
            onClick={() => setIsHistoryModalOpen(true)}
            className="flex items-center gap-1.5 px-2.5 sm:px-3.5 py-1.5 text-xs font-semibold text-amber-900 bg-amber-50 hover:bg-amber-100 border border-amber-200/90 rounded-lg transition-colors cursor-pointer shadow-2xs"
            title="View Your Score History and Past Attempts"
          >
            <History className="w-3.5 h-3.5 text-amber-700" />
            <span className="hidden xs:inline sm:inline">Score History</span>
            <span className="text-[11px] font-bold bg-amber-100/80 px-1.5 py-0.2 rounded-full text-amber-900">
              {stats.totalAttempts}
            </span>
          </button>

          {/* Read Notes Link */}
          {onOpenStudyNotes && (
            <button
              onClick={() => onOpenStudyNotes(subject)}
              className="flex items-center gap-1.5 px-2.5 sm:px-3.5 py-1.5 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 rounded-lg transition-colors cursor-pointer shadow-2xs"
            >
              <BookOpen className="w-3.5 h-3.5 text-slate-500" />
              <span className="hidden xs:inline sm:inline">Notes</span>
            </button>
          )}

          {/* Change Subject Switcher */}
          {onSelectSubject && (
            <div className="relative">
              <button
                onClick={() => setIsSwitcherOpen(!isSwitcherOpen)}
                className="flex items-center gap-1 px-2.5 sm:px-3.5 py-1.5 text-xs font-semibold bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 rounded-lg transition-colors cursor-pointer shadow-2xs"
              >
                <Layers className="w-3.5 h-3.5 text-slate-500" />
                <span className="hidden md:inline">Change Subject</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </button>

              {isSwitcherOpen && (
                <>
                  <div 
                    className="fixed inset-0 z-40" 
                    onClick={() => setIsSwitcherOpen(false)} 
                  />
                  <div className="absolute right-0 mt-2 w-72 sm:w-80 bg-white rounded-xl border border-slate-200 shadow-xl z-50 py-2 max-h-96 overflow-y-auto">
                    <div className="px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100">
                      Switch Exam Subject
                    </div>
                    {SUBJECTS_DATA.map((s) => (
                      <button
                        key={s.id}
                        onClick={() => {
                          onSelectSubject(s);
                          setIsSwitcherOpen(false);
                        }}
                        className={`w-full text-left px-3.5 py-2.5 text-xs flex items-center justify-between hover:bg-slate-50 transition-colors cursor-pointer ${
                          s.id === subject.id ? 'bg-amber-50/80 font-bold text-amber-950' : 'text-slate-700'
                        }`}
                      >
                        <span className="truncate pr-2">{s.title}</span>
                        <span className={`text-[10px] px-1.5 py-0.5 rounded-xs shrink-0 ${
                          s.category === 'PROF_ED' 
                            ? 'bg-slate-100 text-slate-700' 
                            : 'bg-amber-100 text-amber-800'
                        }`}>
                          {s.category === 'PROF_ED' ? 'Prof Ed' : 'Gen Ed'}
                        </span>
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Main Examination Frame */}
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-sm border border-slate-200/90 flex flex-col justify-between overflow-hidden">
        
        {/* ======================================================== */}
        {/* TOP PROGRESS BAR & QUESTIONS REMAINING                   */}
        {/* ======================================================== */}
        <div>
          {/* Top Progress Bar Line */}
          <div className="w-full h-1.5 bg-slate-100 overflow-hidden">
            <div 
              className={`h-full transition-all duration-300 ease-out ${
                isSubmitted ? (isPassed ? 'bg-emerald-600' : 'bg-rose-600') : 'bg-slate-900'
              }`}
              style={{ width: `${Math.max(progressPercent, 2)}%` }}
            />
          </div>

          {/* Results Summary Header Bar or Remaining Counter */}
          {isSubmitted ? (
            <div className={`px-4 sm:px-8 py-3.5 border-b space-y-3 ${
              isPassed ? 'bg-emerald-50/60 border-emerald-200' : 'bg-rose-50/60 border-rose-200'
            }`}>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                    isPassed ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
                  }`}>
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className={`text-sm sm:text-base font-bold ${
                        isPassed ? 'text-emerald-950' : 'text-rose-950'
                      }`}>
                        Score: {correctCount} / {totalQuestions} ({scorePercent}%)
                      </span>
                      <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${
                        isPassed ? 'bg-emerald-200/80 text-emerald-900' : 'bg-rose-200/80 text-rose-900'
                      }`}>
                        {isPassed ? 'PASSED (LET Ready 🎓)' : 'NEEDS REVIEW (<75% 📚)'}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 mt-0.5">
                      {mistakesList.length === 0 
                        ? 'Perfect Score! 🌟 Flawless understanding across all topics.'
                        : `You have ${mistakesList.length} mistake${mistakesList.length > 1 ? 's' : ''} to review. Review them below to master what went wrong.`
                      }
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => setIsHistoryModalOpen(true)}
                    className="flex items-center gap-1 text-xs font-semibold px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer shadow-2xs text-slate-700"
                  >
                    <History className="w-3.5 h-3.5 text-amber-700" />
                    <span>Score History</span>
                  </button>

                  <button
                    onClick={handleRestart}
                    className="flex items-center gap-1.5 text-xs font-bold px-3.5 py-1.5 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer shadow-xs"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Retake Exam</span>
                  </button>
                </div>
              </div>

              {/* Message from Kayeen 💛 */}
              {kayeenMessage && (
                <div className={`mt-1 rounded-xl px-4 py-3.5 border flex items-start gap-3 ${
                  correctCount <= 25
                    ? 'bg-rose-50/60 border-rose-200/80'
                    : correctCount <= 50
                    ? 'bg-amber-50/60 border-amber-200/80'
                    : 'bg-emerald-50/60 border-emerald-200/80'
                }`}>
                  <div className={`mt-0.5 shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-base ${
                    correctCount <= 25
                      ? 'bg-rose-100'
                      : correctCount <= 50
                      ? 'bg-amber-100'
                      : 'bg-emerald-100'
                  }`}>
                    💛
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className={`text-[11px] font-bold uppercase tracking-widest mb-1 ${
                      correctCount <= 25
                        ? 'text-rose-700'
                        : correctCount <= 50
                        ? 'text-amber-800'
                        : 'text-emerald-800'
                    }`}>
                      From Kayeen
                    </p>
                    <p className={`text-sm font-serif leading-relaxed italic ${
                      correctCount <= 25
                        ? 'text-rose-950'
                        : correctCount <= 50
                        ? 'text-amber-950'
                        : 'text-emerald-950'
                    }`}>
                      "{kayeenMessage}"
                    </p>
                  </div>
                </div>
              )}

              {/* Review Filter Tabs (All, Mistakes Only, Correct, Skipped) */}
              <div className="flex items-center gap-1.5 pt-1 overflow-x-auto scrollbar-none">
                <span className="text-xs font-bold text-slate-500 mr-1 shrink-0 flex items-center gap-1">
                  <Filter className="w-3 h-3" />
                  Review Filter:
                </span>

                <button
                  onClick={() => {
                    setReviewFilter('ALL');
                    setCurrentQuestionIndex(0);
                  }}
                  className={`px-3 py-1 rounded-md text-xs font-semibold whitespace-nowrap cursor-pointer transition-colors ${
                    reviewFilter === 'ALL'
                      ? 'bg-slate-900 text-white shadow-2xs'
                      : 'bg-white/80 text-slate-700 hover:bg-white border border-slate-200/70'
                  }`}
                >
                  All Items ({totalQuestions})
                </button>

                <button
                  onClick={() => {
                    setReviewFilter('MISTAKES');
                    const firstMistake = questions.findIndex(q => userAnswers[q.id] !== q.correctAnswer);
                    if (firstMistake !== -1) setCurrentQuestionIndex(firstMistake);
                  }}
                  className={`px-3 py-1 rounded-md text-xs font-semibold whitespace-nowrap cursor-pointer transition-colors flex items-center gap-1 ${
                    reviewFilter === 'MISTAKES'
                      ? 'bg-rose-700 text-white shadow-2xs font-bold'
                      : 'bg-white/80 text-rose-800 hover:bg-white border border-rose-200/70'
                  }`}
                >
                  <XCircle className="w-3 h-3 text-rose-500" />
                  <span>What Went Wrong / Mistakes ({mistakesList.length})</span>
                </button>

                <button
                  onClick={() => {
                    setReviewFilter('CORRECT');
                    const firstCorrect = questions.findIndex(q => userAnswers[q.id] === q.correctAnswer);
                    if (firstCorrect !== -1) setCurrentQuestionIndex(firstCorrect);
                  }}
                  className={`px-3 py-1 rounded-md text-xs font-semibold whitespace-nowrap cursor-pointer transition-colors flex items-center gap-1 ${
                    reviewFilter === 'CORRECT'
                      ? 'bg-emerald-700 text-white shadow-2xs font-bold'
                      : 'bg-white/80 text-emerald-800 hover:bg-white border border-emerald-200/70'
                  }`}
                >
                  <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                  <span>Correct ({correctCount})</span>
                </button>

                {skippedQuestions.length > 0 && (
                  <button
                    onClick={() => {
                      setReviewFilter('SKIPPED');
                      const firstSkipped = questions.findIndex(q => !userAnswers[q.id]);
                      if (firstSkipped !== -1) setCurrentQuestionIndex(firstSkipped);
                    }}
                    className={`px-3 py-1 rounded-md text-xs font-semibold whitespace-nowrap cursor-pointer transition-colors flex items-center gap-1 ${
                      reviewFilter === 'SKIPPED'
                        ? 'bg-amber-700 text-white shadow-2xs font-bold'
                        : 'bg-white/80 text-amber-800 hover:bg-white border border-amber-200/70'
                    }`}
                  >
                    <AlertTriangle className="w-3 h-3 text-amber-500" />
                    <span>Skipped ({skippedQuestions.length})</span>
                  </button>
                )}
              </div>
            </div>
          ) : (
            <div className="px-6 sm:px-8 py-3 flex justify-between items-center border-b border-slate-100">
              <span className="text-xs sm:text-sm text-slate-500 font-medium flex items-center gap-1.5">
                <Flame className="w-4 h-4 text-amber-700" />
                {totalQuestions}-Item Comprehensive LET Drill • Unlimited Tries
              </span>
              <span className="text-xs sm:text-sm font-bold text-slate-800 tracking-wide">
                {remainingCount} <span className="font-normal text-slate-500">OF {totalQuestions} QUESTIONS REMAINING</span>
              </span>
            </div>
          )}
        </div>

        {/* ======================================================== */}
        {/* REVIEW MODE: ALL-IN-ONE CONTINUOUS SCROLL VIEW           */}
        {/* ======================================================== */}
        {isSubmitted ? (
          <div className="flex flex-col flex-1">
            {/* Quick Jump Bar to Any Question */}
            <div className="px-4 sm:px-8 py-3 bg-[#faf9f6] border-b border-slate-200">
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                  <span>Jump to Question in Review:</span>
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  Showing {filteredQuestions.length} of {totalQuestions} items
                </span>
              </div>

              {/* Scrollable Question Badges Grid */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-thin">
                {questions.map((q, idx) => {
                  const qNum = idx + 1;
                  const isQCorrect = userAnswers[q.id] === q.correctAnswer;
                  const isQWrong = userAnswers[q.id] && userAnswers[q.id] !== q.correctAnswer;
                  const isQSkipped = !userAnswers[q.id];

                  // Check if this question is hidden by the active filter
                  const isVisibleInFilter = 
                    reviewFilter === 'ALL' ||
                    (reviewFilter === 'MISTAKES' && (isQWrong || isQSkipped)) ||
                    (reviewFilter === 'CORRECT' && isQCorrect) ||
                    (reviewFilter === 'SKIPPED' && isQSkipped);

                  let badgeStyle = 'bg-slate-100 text-slate-400 border-slate-200 opacity-40';
                  if (isVisibleInFilter) {
                    if (isQCorrect) badgeStyle = 'bg-emerald-100 text-emerald-900 border-emerald-300 font-bold hover:bg-emerald-200 shadow-2xs';
                    else if (isQWrong) badgeStyle = 'bg-rose-100 text-rose-900 border-rose-300 font-bold hover:bg-rose-200 shadow-2xs';
                    else if (isQSkipped) badgeStyle = 'bg-amber-100 text-amber-900 border-amber-300 font-semibold hover:bg-amber-200 shadow-2xs';
                  }

                  return (
                    <button
                      key={q.id}
                      onClick={() => {
                        const elem = document.getElementById(`review-question-${q.id}`);
                        if (elem) {
                          elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }
                      }}
                      title={`Question ${qNum}: ${isQCorrect ? 'Correct' : isQWrong ? 'Mistake' : 'Skipped'}`}
                      className={`min-w-[28px] h-7 px-1.5 rounded-md text-xs border flex items-center justify-center transition-all cursor-pointer shrink-0 ${badgeStyle}`}
                    >
                      {qNum}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Continuous Scrollable List of All Questions */}
            <div className="p-4 sm:p-8 space-y-8 divide-y divide-slate-100">
              {filteredQuestions.length === 0 ? (
                <div className="py-12 text-center text-slate-500 space-y-2">
                  <p className="font-semibold text-slate-700">No questions match the selected review filter.</p>
                  <button
                    onClick={() => setReviewFilter('ALL')}
                    className="text-xs text-amber-800 font-bold underline cursor-pointer"
                  >
                    Show All {totalQuestions} Questions
                  </button>
                </div>
              ) : (
                filteredQuestions.map((q) => {
                  const originalIndex = questions.findIndex(orig => orig.id === q.id);
                  const qNum = originalIndex !== -1 ? originalIndex + 1 : q.id;
                  const userAnswer = userAnswers[q.id];
                  const isQCorrect = userAnswer === q.correctAnswer;
                  const isQWrong = !!userAnswer && userAnswer !== q.correctAnswer;
                  const isQSkipped = !userAnswer;
                  const correctOption = q.options.find(opt => opt.key === q.correctAnswer);
                  const userSelectedOption = q.options.find(opt => opt.key === userAnswer);

                  return (
                    <div
                      key={q.id}
                      id={`review-question-${q.id}`}
                      className="pt-6 first:pt-0 space-y-5 scroll-mt-6"
                    >
                      {/* Question Header */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="font-serif text-base sm:text-lg font-bold text-slate-900">
                            Question {qNum}
                          </span>

                          {isQCorrect ? (
                            <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center gap-1 border border-emerald-200">
                              <Check className="w-3 h-3" /> Correct (+1)
                            </span>
                          ) : isQWrong ? (
                            <span className="px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-800 text-xs font-bold flex items-center gap-1 border border-rose-200">
                              <X className="w-3 h-3" /> Mistake (0/1)
                            </span>
                          ) : (
                            <span className="px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800 text-xs font-bold flex items-center gap-1 border border-amber-200">
                              <AlertTriangle className="w-3 h-3" /> Skipped (0/1)
                            </span>
                          )}

                          <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700">
                            {q.topicRef || subject.title}
                          </span>
                        </div>

                        <div className="text-xs font-medium text-slate-400">
                          Item #{qNum} of {totalQuestions}
                        </div>
                      </div>

                      {/* Question Text */}
                      <div className="text-sm sm:text-base text-slate-900 leading-relaxed font-medium">
                        {q.question}
                      </div>

                      {/* 4 Choices */}
                      <div className="space-y-2 pt-1">
                        {q.options.map((option) => {
                          const isSelected = userAnswer === option.key;
                          const isCorrectOption = option.key === q.correctAnswer;
                          const isWrongSelection = isSelected && !isCorrectOption;

                          let optionStyle = 'bg-[#faf9f6] border-slate-200/80 text-slate-700';
                          if (isCorrectOption) {
                            optionStyle = 'bg-emerald-50/90 border-emerald-400 text-emerald-950 font-semibold shadow-2xs';
                          } else if (isWrongSelection) {
                            optionStyle = 'bg-rose-50/90 border-rose-300 text-rose-950 font-medium shadow-2xs';
                          }

                          return (
                            <div
                              key={option.key}
                              className={`w-full px-4 py-3 rounded-xl border flex items-center justify-between text-sm sm:text-base select-none transition-all ${optionStyle}`}
                            >
                              <div className="flex items-center gap-3 w-full pr-3">
                                <div className="flex items-center justify-center shrink-0">
                                  {isCorrectOption ? (
                                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                                  ) : isWrongSelection ? (
                                    <XCircle className="w-5 h-5 text-rose-600" />
                                  ) : (
                                    <div className="w-5 h-5 rounded-full border-2 border-slate-300 bg-white flex items-center justify-center text-[10px] font-bold text-slate-400">
                                      {option.key}
                                    </div>
                                  )}
                                </div>

                                <div className="h-4 w-px bg-slate-200 shrink-0" />

                                <span className="text-sm sm:text-base text-slate-800 leading-snug">
                                  <strong className="mr-1.5 font-bold text-slate-900">{option.key}.</strong> {option.text}
                                </span>
                              </div>

                              {isWrongSelection && (
                                <span className="text-xs font-bold text-rose-700 bg-rose-100 px-2 py-0.5 rounded-xs shrink-0 whitespace-nowrap">
                                  Your Answer (Wrong ❌)
                                </span>
                              )}
                              {isCorrectOption && (
                                <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-xs shrink-0 whitespace-nowrap">
                                  {isSelected ? 'Your Answer (Correct ✅)' : 'Correct Answer Key ✅'}
                                </span>
                              )}
                            </div>
                          );
                        })}
                      </div>

                      {/* Pedagogical Rationale / Explanation Box */}
                      <div className={`p-4 sm:p-5 rounded-xl border space-y-2.5 ${
                        isQCorrect
                          ? 'bg-emerald-50/50 border-emerald-200 text-slate-800'
                          : 'bg-amber-50/70 border-amber-300/80 text-slate-900'
                      }`}>
                        <div className="flex items-center justify-between flex-wrap gap-2">
                          <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-950">
                            <HelpCircle className="w-4 h-4 text-amber-700" />
                            <span>LET Concept Rationale & Solution</span>
                          </div>
                          <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-white border border-amber-200 text-amber-900 shadow-2xs">
                            Correct Answer Key: <strong>{q.correctAnswer}</strong>
                          </span>
                        </div>

                        {/* Full Rationale Text */}
                        <div className="text-xs sm:text-sm text-slate-800 leading-relaxed font-normal bg-white/70 p-3 rounded-lg border border-amber-100">
                          {q.explanation || 'No rationale available.'}
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>

            {/* Bottom Sticky Action Footer in Review Mode */}
            <div className="sticky bottom-0 bg-[#faf9f6]/95 backdrop-blur-xs border-t border-slate-200 px-6 sm:px-8 py-3.5 flex items-center justify-between gap-3 z-30">
              <div className="flex items-center gap-3">
                <span className="text-xs sm:text-sm font-bold text-slate-800">
                  Score: {correctCount} / {totalQuestions} ({scorePercent}%)
                </span>
                <button
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-xs text-amber-800 hover:text-amber-950 font-bold underline cursor-pointer hidden sm:inline"
                >
                  ↑ Back to Top
                </button>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsHistoryModalOpen(true)}
                  className="px-3.5 py-2 text-xs sm:text-sm font-semibold rounded-lg bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 transition-colors cursor-pointer shadow-2xs flex items-center gap-1.5"
                >
                  <History className="w-3.5 h-3.5 text-amber-700" />
                  <span>Score History</span>
                </button>
                <button
                  onClick={handleRestart}
                  className="px-5 py-2 text-xs sm:text-sm font-bold rounded-lg bg-slate-900 hover:bg-slate-800 text-white transition-colors cursor-pointer shadow-sm flex items-center gap-1.5"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Retake Exam</span>
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* ======================================================== */
          /* ACTIVE TAKING MODE: STEP-BY-STEP SINGLE QUESTION         */
          /* ======================================================== */
          <div>
            {/* Question Title & Page Info */}
            <div className="px-4 sm:px-8 pt-5 sm:pt-6 pb-3 sm:pb-4 border-b border-slate-100 space-y-1">
              <div className="flex items-center justify-between gap-2">
                <h2 className="font-serif text-base sm:text-xl font-bold text-slate-950 truncate">
                  {subject.title}
                </h2>
                <span className="text-[11px] sm:text-xs font-semibold px-2 sm:px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 shrink-0">
                  {currentQ?.topicRef || 'LET Practice Drill'}
                </span>
              </div>
              <div className="flex items-center justify-between text-xs sm:text-sm text-slate-500 font-medium">
                <p>
                  Question {currentQuestionNumber} <span className="text-slate-400 font-normal">of {totalQuestions}</span>
                </p>
              </div>
            </div>

            {/* Question Area */}
            <div className="px-3.5 sm:px-8 py-5 sm:py-8 space-y-5 sm:space-y-6">
              
              {/* Question Title & Point Badge */}
              <div className="flex items-center justify-between gap-4">
                <h3 className="font-serif text-base sm:text-lg font-bold text-slate-900">
                  Question {currentQuestionNumber}
                </h3>

                <div className="flex items-center gap-2">
                  <div className="px-3 py-0.5 bg-amber-50 text-amber-900 border border-amber-200/80 rounded-full text-xs font-semibold">
                    1 Point
                  </div>
                </div>
              </div>

              {/* Question Prompt Text */}
              <div className="text-sm sm:text-base text-slate-800 leading-relaxed font-medium">
                {currentQ?.question || 'Loading question...'}
              </div>

              {/* Multiple Choice Options */}
              <div className="space-y-2.5 pt-1 sm:pt-2">
                {currentQ?.options.map((option) => {
                  const isSelected = selectedAnswer === option.key;

                  let optionStyle = 'bg-[#faf9f6] hover:bg-slate-100/80 border border-slate-200/80 text-slate-700';
                  if (isSelected) {
                    optionStyle = 'bg-amber-50/70 border border-amber-300 text-slate-950 font-medium shadow-2xs';
                  }

                  return (
                    <div
                      key={option.key}
                      onClick={() => handleSelectOption(option.key)}
                      className={`
                        w-full px-3.5 sm:px-4 py-3 rounded-xl flex items-center justify-between text-sm sm:text-base
                        cursor-pointer select-none transition-all active:scale-[0.99]
                        ${optionStyle}
                      `}
                    >
                      {/* Left Side: Radio Button + Divider + Option Text */}
                      <div className="flex items-start sm:items-center gap-2.5 sm:gap-3 w-full pr-2">
                        <div className="flex items-center justify-center shrink-0 mt-0.5 sm:mt-0">
                          {isSelected ? (
                            <div className="w-5 h-5 rounded-full border-2 border-amber-800 bg-white flex items-center justify-center">
                              <div className="w-2.5 h-2.5 rounded-full bg-amber-800" />
                            </div>
                          ) : (
                            <div className="w-5 h-5 rounded-full border-2 border-slate-300 bg-white flex items-center justify-center text-[10px] font-bold text-slate-400">
                              {option.key}
                            </div>
                          )}
                        </div>

                        <div className="h-4 w-px bg-slate-200 shrink-0 hidden sm:block" />

                        <span className="text-xs sm:text-base text-slate-800 leading-snug">
                          <strong className="mr-1 sm:mr-1.5 font-bold text-slate-900">{option.key}.</strong> {option.text}
                        </span>
                      </div>

                      {isSelected && (
                        <span className="text-[11px] sm:text-sm text-amber-800 font-semibold shrink-0">
                          Selected
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Clear Selection Link */}
              {selectedAnswer && (
                <div className="flex justify-end pt-0.5">
                  <button
                    onClick={handleClearSelection}
                    className="text-xs sm:text-sm text-amber-800 hover:text-amber-950 underline cursor-pointer font-medium"
                  >
                    Clear selection
                  </button>
                </div>
              )}

              {/* Subtle Dotted / Dashed Divider */}
              <div className="pt-2 sm:pt-4">
                <div className="border-t border-dashed border-slate-200 w-full" />
              </div>

              {/* Single Unified Action & Navigation Bar */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
                
                {/* Left: Filter dropdown */}
                <div className="w-full sm:w-auto sm:flex-1 flex items-center justify-start">
                  <div className="relative">
                    <button
                      onClick={() => setIsFilterMenuOpen(!isFilterMenuOpen)}
                      className="flex items-center gap-1.5 px-3 py-2 text-xs sm:text-sm font-semibold text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer shadow-2xs"
                    >
                      <span>Filter ({answeredCount}/{totalQuestions})</span>
                      <ChevronDown className="w-3.5 h-3.5 text-slate-500" />
                    </button>

                    {/* Questions Filter Modal / Grid */}
                    {isFilterMenuOpen && (
                      <>
                        <div 
                          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-2xs" 
                          onClick={() => setIsFilterMenuOpen(false)} 
                        />
                        <div className="fixed inset-x-3 bottom-16 sm:bottom-full sm:inset-x-auto sm:left-0 sm:mb-2 max-w-sm sm:w-80 bg-white border border-slate-200 shadow-2xl z-50 p-4 rounded-2xl animate-fadeIn">
                          <div className="text-xs font-bold text-slate-800 pb-2 mb-2 border-b border-slate-100 flex justify-between items-center">
                            <span>Jump to Question (1–{totalQuestions})</span>
                            <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">
                              {answeredCount} answered
                            </span>
                          </div>

                          <div className="grid grid-cols-5 sm:grid-cols-10 gap-1.5 max-h-60 sm:max-h-56 overflow-y-auto p-1">
                            {questions.map((q, idx) => {
                              const qNum = idx + 1;
                              const isAns = !!userAnswers[q.id];
                              const isCurr = idx === currentQuestionIndex;

                              let btnStyle = 'bg-slate-50 hover:bg-slate-100 text-slate-600 border border-slate-200';
                              if (isCurr) {
                                btnStyle = 'bg-slate-900 text-white font-bold ring-2 ring-slate-900 ring-offset-1';
                              } else if (isAns) {
                                btnStyle = 'bg-amber-100 text-amber-900 font-semibold border border-amber-200';
                              }

                              return (
                                <button
                                  key={q.id}
                                  onClick={() => {
                                    setCurrentQuestionIndex(idx);
                                    setIsFilterMenuOpen(false);
                                  }}
                                  className={`
                                    h-8 sm:h-7 rounded-lg sm:rounded-md text-xs font-semibold flex items-center justify-center transition-all cursor-pointer active:scale-95
                                    ${btnStyle}
                                  `}
                                >
                                  {qNum}
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>

                {/* Center: Pagination Controls (First, Previous, Next, Last) */}
                <div className="w-full sm:w-auto flex items-center justify-center gap-1 sm:gap-1.5 text-xs sm:text-sm font-semibold text-slate-700">
                  {/* First Button */}
                  <button
                    onClick={handleFirst}
                    disabled={currentQuestionIndex === 0}
                    className={`flex items-center gap-1 px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-lg border transition-colors cursor-pointer ${
                      currentQuestionIndex === 0 
                        ? 'bg-slate-50 text-slate-300 border-slate-200 cursor-not-allowed' 
                        : 'bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 border-slate-200 shadow-2xs'
                    }`}
                    title="Go to First Question"
                  >
                    <ChevronsLeft className="w-3.5 h-3.5" />
                    <span className="hidden xs:inline sm:inline">First</span>
                  </button>

                  {/* Previous Button */}
                  <button
                    onClick={handlePrev}
                    disabled={currentQuestionIndex === 0}
                    className={`flex items-center gap-1 px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-lg border transition-colors cursor-pointer ${
                      currentQuestionIndex === 0 
                        ? 'bg-slate-50 text-slate-300 border-slate-200 cursor-not-allowed' 
                        : 'bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 border-slate-200 shadow-2xs'
                    }`}
                    title="Previous Question"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                    <span className="hidden xs:inline sm:inline">Previous</span>
                  </button>

                  {/* Question Indicator */}
                  <div className="px-2 sm:px-3 py-1.5 text-xs font-mono text-slate-600 bg-slate-100 rounded-lg border border-slate-200/80 shrink-0">
                    <span className="font-bold text-slate-900">{currentQuestionNumber}</span>
                    <span className="text-slate-400"> / </span>
                    <span>{totalQuestions}</span>
                  </div>

                  {/* Next Button */}
                  <button
                    onClick={handleNext}
                    disabled={currentQuestionIndex === totalQuestions - 1}
                    className={`flex items-center gap-1 px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-lg border transition-colors cursor-pointer ${
                      currentQuestionIndex === totalQuestions - 1 
                        ? 'bg-slate-50 text-slate-300 border-slate-200 cursor-not-allowed' 
                        : 'bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 border-slate-200 shadow-2xs'
                    }`}
                    title="Next Question"
                  >
                    <span className="hidden xs:inline sm:inline">Next</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>

                  {/* Last Button */}
                  <button
                    onClick={handleLast}
                    disabled={currentQuestionIndex === totalQuestions - 1}
                    className={`flex items-center gap-1 px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-lg border transition-colors cursor-pointer ${
                      currentQuestionIndex === totalQuestions - 1 
                        ? 'bg-slate-50 text-slate-300 border-slate-200 cursor-not-allowed' 
                        : 'bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 border-slate-200 shadow-2xs'
                    }`}
                    title="Go to Last Question"
                  >
                    <span className="hidden xs:inline sm:inline">Last</span>
                    <ChevronsRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Right: Continue / Submit Button */}
                <div className="w-full sm:w-auto sm:flex-1 flex items-center justify-end">
                  {currentQuestionIndex === totalQuestions - 1 ? (
                    <button
                      onClick={() => setShowConfirmSubmit(true)}
                      className="w-full sm:w-auto px-6 py-2.5 sm:py-2 text-xs sm:text-sm font-bold rounded-lg bg-amber-800 hover:bg-amber-900 text-white transition-colors cursor-pointer shadow-sm text-center"
                    >
                      Submit Exam ({answeredCount}/{totalQuestions})
                    </button>
                  ) : (
                    <button
                      onClick={handleNext}
                      className="w-full sm:w-auto px-7 py-2.5 sm:py-2 text-xs sm:text-sm font-bold rounded-lg bg-slate-900 hover:bg-slate-800 text-white transition-colors cursor-pointer shadow-sm text-center"
                    >
                      Continue
                    </button>
                  )}
                </div>

              </div>

            </div>
          </div>
        )}

      </div>

      {/* ======================================================== */}
      {/* CONFIRMATION MODAL BEFORE SUBMISSION                     */}
      {/* ======================================================== */}
      {showConfirmSubmit && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4 z-50 animate-fadeIn">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full border border-slate-200 shadow-2xl space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-800 shrink-0">
                <AlertCircle className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif text-base font-bold text-slate-900">
                  Ready to Submit Exam?
                </h4>
                <p className="text-xs text-slate-500">
                  You have answered <strong className="text-slate-800">{answeredCount}</strong> of <strong className="text-slate-800">{totalQuestions}</strong> questions.
                </p>
              </div>
            </div>

            {remainingCount > 0 && (
              <p className="text-xs text-amber-900 bg-amber-50 p-3 rounded-lg border border-amber-200/70">
                Warning: You still have <strong>{remainingCount} unanswered</strong> questions. Unanswered questions will be marked as incorrect.
              </p>
            )}

            <div className="flex items-center justify-end gap-2.5 pt-2">
              <button
                onClick={() => setShowConfirmSubmit(false)}
                className="px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
              >
                Review Answers
              </button>
              <button
                onClick={handleSubmitExam}
                className="px-5 py-2 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors cursor-pointer shadow-xs"
              >
                Confirm Submission
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* STUDENT SCORE HISTORY & PROGRESS JOURNAL MODAL          */}
      {/* ======================================================== */}
      {isHistoryModalOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4 z-50 animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-2xl w-full border border-slate-200 shadow-2xl overflow-hidden flex flex-col max-h-[85vh]">
            
            {/* Modal Header */}
            <div className="px-6 py-4 bg-[#faf9f6] border-b border-slate-200 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-900">
                  <History className="w-4 h-4 text-amber-800" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-slate-950">
                    Your Exam Score History
                  </h3>
                  <p className="text-xs text-slate-500">
                    {subject.title} • Individual Study & Progress Journal
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsHistoryModalOpen(false)}
                className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-6 flex-1">
              
              {/* STUDENT PERSONAL SUMMARY CARDS */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                
                {/* Total Attempts */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex flex-col justify-between">
                  <div className="flex items-center justify-between text-slate-500 text-xs font-semibold">
                    <span>Total Attempts</span>
                    <History className="w-3.5 h-3.5 text-slate-400" />
                  </div>
                  <div className="mt-2 font-serif text-2xl font-bold text-slate-950">
                    {stats.totalAttempts}
                  </div>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    Unlimited practice tries
                  </p>
                </div>

                {/* Highest Score Achieved */}
                <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200/90 flex flex-col justify-between">
                  <div className="flex items-center justify-between text-amber-900 text-xs font-semibold">
                    <span>Your Highest Score</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-700" />
                  </div>
                  <div className="mt-2 font-serif text-2xl font-bold text-amber-950">
                    {stats.bestScore ? `${stats.bestScore.score} / ${stats.bestScore.totalQuestions || totalQuestions}` : '—'}
                  </div>
                  <p className="text-[11px] text-amber-800 mt-0.5">
                    {stats.bestScore ? `${stats.bestScore.percentage}% accuracy` : 'No attempts yet'}
                  </p>
                </div>

                {/* Passing Readiness */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex flex-col justify-between">
                  <div className="flex items-center justify-between text-slate-500 text-xs font-semibold">
                    <span>LET 75% Readiness</span>
                    <TrendingUp className="w-3.5 h-3.5 text-slate-400" />
                  </div>
                  <div className="mt-2 font-serif text-2xl font-bold text-slate-950">
                    {stats.bestScore && stats.bestScore.isPassed ? (
                      <span className="text-emerald-700">Passed</span>
                    ) : stats.bestScore ? (
                      <span className="text-amber-800">In Progress</span>
                    ) : (
                      '—'
                    )}
                  </div>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    {stats.passedAttempts > 0 
                      ? `${stats.passedAttempts} of ${stats.totalAttempts} tries ≥ 75%` 
                      : `Target: ${Math.ceil(totalQuestions * 0.75)}/${totalQuestions} (75%)`}
                  </p>
                </div>

              </div>

              {/* YOUR ATTEMPTS CHRONOLOGICAL LOG */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                    <History className="w-3.5 h-3.5 text-slate-500" />
                    <span>Your Attempts & Progress History</span>
                  </h4>
                  <span className="text-xs text-slate-400 font-medium">
                    {getSubjectExamHistory(subject.id).length} recorded
                  </span>
                </div>

                {getSubjectExamHistory(subject.id).length === 0 ? (
                  <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-6 text-center text-xs text-slate-500 space-y-1">
                    <p className="font-semibold text-slate-700">No previous attempts recorded yet.</p>
                    <p>When you complete the {totalQuestions}-item exam, your score and answers will be saved here so you can track your progress over time.</p>
                  </div>
                ) : (
                  <div className="space-y-2.5 max-h-72 overflow-y-auto pr-1">
                    {getSubjectExamHistory(subject.id).map((att, idx, arr) => {
                      const attemptNumber = arr.length - idx;
                      const isPersonalBest = stats.bestScore?.id === att.id;

                      return (
                        <div 
                          key={att.id}
                          className="flex flex-col sm:flex-row sm:items-center justify-between p-3.5 rounded-xl bg-white border border-slate-200 text-xs hover:border-slate-300 hover:bg-slate-50/50 transition-all gap-3"
                        >
                          <div className="flex items-start sm:items-center gap-3">
                            <div className="w-7 h-7 rounded-lg bg-slate-100 font-bold text-slate-700 flex items-center justify-center text-xs shrink-0 mt-0.5 sm:mt-0">
                              #{attemptNumber}
                            </div>

                            <div className="space-y-0.5">
                              <div className="flex items-center gap-2 flex-wrap">
                                <span className="font-bold text-slate-900 text-sm">
                                  {att.score} / {att.totalQuestions}
                                </span>
                                <span className="text-slate-600 font-semibold">
                                  ({att.percentage}%)
                                </span>
                                
                                {isPersonalBest && (
                                  <span className="text-[10px] bg-amber-100 text-amber-900 font-bold px-2 py-0.5 rounded-full border border-amber-200/70">
                                    Highest Score
                                  </span>
                                )}

                                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                                  att.isPassed ? 'bg-emerald-50 text-emerald-800 border border-emerald-200/70' : 'bg-rose-50 text-rose-800 border border-rose-200/70'
                                }`}>
                                  {att.isPassed ? 'Passed (≥75%)' : 'Needs Review (<75%)'}
                                </span>
                              </div>

                              <div className="text-[11px] text-slate-400">
                                Taken on {new Date(att.completedAt).toLocaleString(undefined, { 
                                  month: 'short', 
                                  day: 'numeric', 
                                  year: 'numeric',
                                  hour: '2-digit', 
                                  minute: '2-digit' 
                                })}
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center justify-end">
                            <button
                              onClick={() => handleReviewPastAttempt(att)}
                              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-lg transition-colors cursor-pointer"
                            >
                              <Eye className="w-3.5 h-3.5 text-slate-600" />
                              <span>Review Answers</span>
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

            </div>

            {/* Modal Footer */}
            <div className="px-6 py-3.5 bg-[#faf9f6] border-t border-slate-200 flex items-center justify-between">
              <span className="text-xs text-slate-500 font-medium">
                Retake this exam anytime to test your progress.
              </span>
              <button
                onClick={() => setIsHistoryModalOpen(false)}
                className="px-4 py-1.5 text-xs font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 rounded-lg cursor-pointer transition-colors shadow-2xs"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
