import React, { useMemo } from 'react';
import { Bookmark, CheckCircle, Sparkles, FileText, ArrowRight } from 'lucide-react';
import { SubjectModule, SubjectProgressMap, StudyStatus } from '../types';
import { getSubjectStats } from '../lib/examHistory';

interface SubjectCardProps {
  subject: SubjectModule;
  userProgress: SubjectProgressMap;
  onSelectSubject: (subject: SubjectModule) => void;
  onToggleBookmark: (subjectId: string, e: React.MouseEvent) => void;
  onUpdateStatus?: (subjectId: string, status: StudyStatus, e: React.MouseEvent) => void;
  isExamMode?: boolean;
}

export const SubjectCard: React.FC<SubjectCardProps> = ({
  subject,
  userProgress,
  onSelectSubject,
  onToggleBookmark,
  isExamMode = false,
}) => {
  const progress = userProgress[subject.id] || {
    bookmarked: false,
    status: 'NOT_STARTED',
    userNotes: '',
  };

  const isCompleted = progress.status === 'COMPLETED';

  // Read student's stats for this subject
  const stats = useMemo(() => getSubjectStats(subject.id), [subject.id]);
  const bestAttempt = stats.bestScore;

  return (
    <article 
      className={`group cursor-pointer flex flex-col bg-white rounded-md border transition-all duration-300 overflow-hidden ${
        isExamMode 
          ? 'border-amber-200/90 hover:border-amber-500 hover:shadow-lg' 
          : 'border-slate-200/80 hover:border-slate-400 hover:shadow-md'
      }`}
      onClick={() => onSelectSubject(subject)}
    >
      {/* Subject Cover Image */}
      <div className="w-full aspect-[16/10] overflow-hidden bg-slate-100 relative">
        <img
          src={subject.coverImage}
          alt={subject.title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500"
        />
        
        {/* Category Tag */}
        <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5 flex-wrap">
          <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-xs shadow-xs ${
            subject.category === 'PROF_ED' 
              ? 'bg-slate-900 text-white' 
              : 'bg-amber-900 text-amber-50'
          }`}>
            {subject.category === 'PROF_ED' ? 'Prof Ed' : 'Gen Ed'}
          </span>
          {isExamMode && (
            <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-xs bg-amber-500 text-white shadow-xs flex items-center gap-1">
              <Sparkles className="w-2.5 h-2.5" />
              50 Items
            </span>
          )}
        </div>

        {/* Bookmark Quick Action (44px touch area on mobile) */}
        <button
          onClick={(e) => onToggleBookmark(subject.id, e)}
          className="absolute top-2 right-2 w-9 h-9 sm:w-8 sm:h-8 rounded-full bg-white/95 backdrop-blur-xs flex items-center justify-center text-slate-600 hover:text-slate-950 transition-colors shadow-sm cursor-pointer"
          title={progress.bookmarked ? "Remove Bookmark" : "Save for Review"}
        >
          <Bookmark className={`w-4 h-4 sm:w-3.5 sm:h-3.5 ${progress.bookmarked ? 'fill-slate-900 text-slate-900' : ''}`} />
        </button>

        {/* Best Score or Completed Badge */}
        {bestAttempt ? (
          <div className={`absolute bottom-2 left-2 flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full shadow-xs ${
            bestAttempt.isPassed 
              ? 'bg-emerald-600 text-white' 
              : 'bg-amber-700 text-white'
          }`}>
            <span>Your Best: {bestAttempt.score}/50 ({bestAttempt.percentage}%)</span>
          </div>
        ) : isCompleted ? (
          <div className="absolute bottom-2 left-2 flex items-center gap-1 bg-emerald-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-xs">
            <CheckCircle className="w-3 h-3" />
            <span>Mastered</span>
          </div>
        ) : null}
      </div>

      {/* Card Content */}
      <div className="p-4 sm:p-5 flex flex-col flex-1">
        
        {/* Title */}
        <h3 className="font-serif text-lg sm:text-xl font-bold text-slate-950 group-hover:text-amber-900 transition-colors leading-snug line-clamp-2 mb-2">
          {subject.title}
        </h3>

        {/* Excerpt / Summary Placeholder */}
        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-2">
          {subject.placeholderSummary}
        </p>

        {/* Exam Mode CTA or Outline Units Preview Tags */}
        {isExamMode ? (
          <div className="mt-auto pt-3 border-t border-amber-100 flex items-center justify-between text-xs font-semibold text-amber-900 group-hover:text-amber-700 transition-colors">
            <span className="flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5 text-amber-600" />
              <span>
                {stats.totalAttempts > 0 
                  ? `${stats.totalAttempts} ${stats.totalAttempts === 1 ? 'Attempt' : 'Attempts'} saved` 
                  : '50-Item Practice Exam'}
              </span>
            </span>
            <span className="flex items-center gap-1 text-slate-500 group-hover:text-slate-900 text-[11px]">
              {stats.totalAttempts > 0 ? 'Retake / History' : 'Take Exam'}
              <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
            </span>
          </div>
        ) : (
          <div className="flex flex-wrap gap-1 mt-auto">
            {subject.tags.slice(0, 3).map((tag, i) => (
              <span key={i} className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded-xs font-medium">
                {tag}
              </span>
            ))}
            {subject.tags.length > 3 && (
              <span className="text-[10px] text-slate-400 px-1 py-0.5">
                +{subject.tags.length - 3}
              </span>
            )}
          </div>
        )}

      </div>
    </article>
  );
};

