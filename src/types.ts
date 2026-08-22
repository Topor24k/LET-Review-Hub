export type SubjectCategory = 'ALL' | 'PROF_ED' | 'GEN_ED' | 'TRY_EXAM';

export type StudyStatus = 'NOT_STARTED' | 'IN_PROGRESS' | 'COMPLETED';

export type FeaturedSlot = 
  | 'main' 
  | 'middle-top' 
  | 'middle-bottom' 
  | 'compact-1' 
  | 'compact-2' 
  | 'compact-3';

export interface SubjectModule {
  id: string;
  code: string;
  title: string;
  category: 'PROF_ED' | 'GEN_ED';
  categoryLabel: string;
  weightInExam: 'High Yield' | 'Core Competency' | 'Major Domain' | 'Foundational';
  examWeightPercentage: string;
  estimatedReviewTime: string;
  moduleCount: number;
  coverImage: string;
  accentColor?: string;
  placeholderSummary: string;
  tags: string[];
  isFeatured?: boolean;
  featuredSlot?: FeaturedSlot;
  popularRank?: number;
  outlinePlaceholders: string[];
}

export interface UserSubjectState {
  bookmarked: boolean;
  status: StudyStatus;
  userNotes: string;
  lastStudied?: string;
}

export type SubjectProgressMap = Record<string, UserSubjectState>;

export interface FilterOptions {
  category: SubjectCategory;
  searchQuery: string;
  onlyBookmarked: boolean;
  statusFilter: 'ALL' | StudyStatus;
  sortBy: 'default' | 'title' | 'popular' | 'time';
}

export type HighlightColor = 'yellow' | 'green' | 'pink' | 'blue';

export interface HighlightColorConfig {
  id: HighlightColor;
  name: string;
  hex: string;
  bgClass: string;
  borderClass: string;
  badgeClass: string;
  meaning: string;
}

export interface HighlightItem {
  id: string;
  subjectId: string;
  pageNumber: number;
  locationKey?: string;
  startOffset?: number;
  endOffset?: number;
  text: string;
  color: HighlightColor;
  note?: string;
  createdAt: number;
  sectionHeading?: string;
}

export interface FlashcardItem {
  id: string;
  subjectId: string;
  pageNumber: number;
  question: string;
  answer: string;
  createdAt: number;
}

export interface ExamOption {
  key: 'A' | 'B' | 'C' | 'D';
  text: string;
}

export interface ExamQuestion {
  id: number;
  question: string;
  options: ExamOption[];
  correctAnswer: 'A' | 'B' | 'C' | 'D';
  explanation: string;
  topicRef?: string;
}

export interface ExamAttempt {
  id: string;
  subjectId: string;
  subjectTitle?: string;
  completedAt: string; // ISO string
  score: number;
  totalQuestions: number;
  percentage: number;
  isPassed: boolean;
  userAnswers: Record<number, string>;
  timeSpentSeconds?: number;
  questionsSnapshot?: ExamQuestion[];
}

export type SubjectExamHistoryMap = Record<string, ExamAttempt[]>;

