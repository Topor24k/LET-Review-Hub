import { ExamAttempt, SubjectExamHistoryMap, ExamQuestion } from '../types';

const EXAM_HISTORY_STORAGE_KEY = 'let_reviewer_exam_history_v1';

export function getAllExamHistory(): SubjectExamHistoryMap {
  try {
    const raw = localStorage.getItem(EXAM_HISTORY_STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (e) {
    console.error('Failed to read exam history from localStorage', e);
    return {};
  }
}

export function getSubjectExamHistory(subjectId: string): ExamAttempt[] {
  const all = getAllExamHistory();
  return all[subjectId] || [];
}

export function saveExamAttempt(attempt: ExamAttempt): SubjectExamHistoryMap {
  try {
    const all = getAllExamHistory();
    const existing = all[attempt.subjectId] || [];
    // Append new attempt (unlimited tries)
    const updatedAttempts = [attempt, ...existing];
    all[attempt.subjectId] = updatedAttempts;
    localStorage.setItem(EXAM_HISTORY_STORAGE_KEY, JSON.stringify(all));
    return all;
  } catch (e) {
    console.error('Failed to save exam attempt to localStorage', e);
    return getAllExamHistory();
  }
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
  try {
    const raw = localStorage.getItem(`let_active_exam_draft_${subjectId}`);
    return raw ? JSON.parse(raw) : null;
  } catch (e) {
    return null;
  }
}

export function saveStoredExamDraft(draft: ActiveExamDraft): void {
  try {
    localStorage.setItem(`let_active_exam_draft_${draft.subjectId}`, JSON.stringify(draft));
  } catch (e) {
    console.error('Failed to save active exam draft', e);
  }
}

export function clearStoredExamDraft(subjectId: string): void {
  try {
    localStorage.removeItem(`let_active_exam_draft_${subjectId}`);
  } catch (e) {
    console.error('Failed to clear exam draft', e);
  }
}
