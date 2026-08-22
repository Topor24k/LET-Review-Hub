import { ExamQuestion } from '../../types';
import { METHODS_AND_STRATEGIES_EXAM_QUESTIONS } from './methodsAndStrategiesExams';
import { TECH_TEACHING_LEARNING_EXAM_QUESTIONS } from './techTeachingLearningExams';
import { CURRICULUM_DEV_EXAM_QUESTIONS } from './curriculumDevExams';
import { BUILDING_LITERACIES_EXAM_QUESTIONS } from './buildingLiteraciesExams';
import { INCLUSIVE_EDUCATION_EXAM_QUESTIONS } from './inclusiveEducationExams';
import { SOCIAL_DIMENSIONS_EXAM_QUESTIONS } from './socialDimensionsExams';
import { CHILD_ADOLESCENT_EXAM_QUESTIONS } from './childAdolescentExams';
import { ASSESSMENT_EXAM_QUESTIONS } from './assessmentExams';
import { ETHICS_EXAM_QUESTIONS } from './ethicsExams';
import { ART_APPRECIATION_EXAM_QUESTIONS } from './artAppreciationExams';
import { PURPOSIVE_COMM_EXAM_QUESTIONS } from './purposiveCommExams';
import { UNDERSTANDING_SELF_EXAM_QUESTIONS } from './understandingSelfExams';
import { STS_EXAM_QUESTIONS } from './stsExams';
import { MATH_EXAM_QUESTIONS } from './mathExams';
import { SOCIAL_STUDIES_EXAM_QUESTIONS } from './socialStudiesExams';
import { FILIPINO_EXAM_QUESTIONS } from './filipinoExams';
import { RIZAL_EXAM_QUESTIONS } from './rizalExams';

export const EXAMS_BY_SUBJECT: Record<string, ExamQuestion[]> = {
  'prof-methods-strategies': METHODS_AND_STRATEGIES_EXAM_QUESTIONS,
  'prof-tech-teaching-learning': TECH_TEACHING_LEARNING_EXAM_QUESTIONS,
  'prof-curriculum-dev': CURRICULUM_DEV_EXAM_QUESTIONS,
  'prof-new-literacies': BUILDING_LITERACIES_EXAM_QUESTIONS,
  'prof-inclusive-education': INCLUSIVE_EDUCATION_EXAM_QUESTIONS,
  'prof-social-dimensions': SOCIAL_DIMENSIONS_EXAM_QUESTIONS,
  'prof-child-adolescent': CHILD_ADOLESCENT_EXAM_QUESTIONS,
  'prof-assessment': ASSESSMENT_EXAM_QUESTIONS,
  'gen-ethics': ETHICS_EXAM_QUESTIONS,
  'gen-art-appreciation': ART_APPRECIATION_EXAM_QUESTIONS,
  'gen-purposive-communication': PURPOSIVE_COMM_EXAM_QUESTIONS,
  'gen-understanding-self': UNDERSTANDING_SELF_EXAM_QUESTIONS,
  'gen-sts': STS_EXAM_QUESTIONS,
  'gen-math': MATH_EXAM_QUESTIONS,
  'gen-social-studies': SOCIAL_STUDIES_EXAM_QUESTIONS,
  'gen-filipino': FILIPINO_EXAM_QUESTIONS,
  'gen-rizal': RIZAL_EXAM_QUESTIONS,
};

export function getExamQuestionsForSubject(subjectId: string): ExamQuestion[] {
  return EXAMS_BY_SUBJECT[subjectId] || METHODS_AND_STRATEGIES_EXAM_QUESTIONS;
}

/**
 * Modern Fisher-Yates shuffle helper
 */
function shuffleArray<T>(array: T[]): T[] {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

/**
 * Scrambles both the question order AND all 4 multiple-choice options (A, B, C, D)
 * for every question. Re-maps the correct answer key accurately so scores and
 * rationalizations match the newly scrambled options 100% reliably.
 */
export function scrambleExamQuestions(rawQuestions: ExamQuestion[]): ExamQuestion[] {
  if (!rawQuestions || rawQuestions.length === 0) return [];

  // 1. Randomly scramble question order
  const shuffledQuestions = shuffleArray(rawQuestions);

  // 2. For each question, randomly scramble its options & compute new correctAnswer key
  return shuffledQuestions.map((q) => {
    // Find text of the current correct answer
    const originalCorrectOption = q.options.find(opt => opt.key === q.correctAnswer);
    const correctText = originalCorrectOption ? originalCorrectOption.text : (q.options[0]?.text || '');

    // Scramble the options list
    const shuffledOptions = shuffleArray(q.options);

    const keys: ('A' | 'B' | 'C' | 'D')[] = ['A', 'B', 'C', 'D'];
    let newCorrectKey: 'A' | 'B' | 'C' | 'D' = 'A';

    const newOptions = shuffledOptions.map((opt, idx) => {
      const assignedKey = keys[idx] || 'A';
      if (opt.text === correctText) {
        newCorrectKey = assignedKey;
      }
      return {
        key: assignedKey,
        text: opt.text,
      };
    });

    return {
      ...q,
      options: newOptions,
      correctAnswer: newCorrectKey,
    };
  });
}
