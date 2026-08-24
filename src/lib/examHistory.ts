import { ExamAttempt, SubjectExamHistoryMap, ExamQuestion } from '../types';
import { getMemoryStore, pushCloudChange } from './cloudSync';

export function getAllExamHistory(): SubjectExamHistoryMap {
  return getMemoryStore().examHistory || {};
}

export function getSubjectExamHistory(subjectId: string): ExamAttempt[] {
  const all = getAllExamHistory();
  return all[subjectId] || [];
}

export function saveExamAttempt(attempt: ExamAttempt): SubjectExamHistoryMap {
  const all = { ...getAllExamHistory() };
  const existing = all[attempt.subjectId] || [];
  // Append new attempt (unlimited tries)
  const updatedAttempts = [attempt, ...existing];
  all[attempt.subjectId] = updatedAttempts;
  // Push to MongoDB Cloud
  pushCloudChange({ examHistory: all });
  return all;
}

export function getTop3ScoresForSubject(subjectId: string): ExamAttempt[] {
  const attempts = getSubjectExamHistory(subjectId);
  if (attempts.length === 0) return [];
  
  // Sort attempts: highest score first, then most recent date
  const sorted = [...attempts].sort((a, b) => {
    if (b.score !== a.score) {
      return b.score - a.score;
    }
    return new Date(b.completedAt).getTime() - new Date(a.completedAt).getTime();
  });

  return sorted.slice(0, 3);
}

export function getSubjectStats(subjectId: string) {
  const attempts = getSubjectExamHistory(subjectId);
  const top3 = getTop3ScoresForSubject(subjectId);
  const bestScore = top3.length > 0 ? top3[0] : null;
  const totalAttempts = attempts.length;
  const passedAttempts = attempts.filter(a => a.isPassed).length;

  return {
    totalAttempts,
    passedAttempts,
    top3,
    bestScore,
    latestAttempt: attempts.length > 0 ? attempts[0] : null,
  };
}

export interface ActiveExamDraft {
  subjectId: string;
  questions: ExamQuestion[];
  currentQuestionIndex: number;
  userAnswers: Record<number, string>;
  startedAt?: number;
}

export function getStoredExamDraft(subjectId: string): ActiveExamDraft | null {
  const draft = getMemoryStore().examDrafts?.[subjectId] || null;
  if (draft && draft.questions && draft.questions.length >= 75) {
    // Invalidate and discard any old cached drafts that contain duplicate questions
    const uniqueStems = new Set(draft.questions.map(q => q.question.toLowerCase().trim()));
    if (uniqueStems.size === draft.questions.length) {
      return draft;
    }
  }
  return null;
}

export function saveStoredExamDraft(draft: ActiveExamDraft): void {
  pushCloudChange({
    examDrafts: {
      [draft.subjectId]: draft,
    },
  });
}

export function clearStoredExamDraft(subjectId: string): void {
  pushCloudChange({
    examDrafts: {
      [subjectId]: null as any,
    },
  });
}
