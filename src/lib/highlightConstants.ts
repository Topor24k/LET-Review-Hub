import { HighlightColor, HighlightColorConfig, HighlightItem, FlashcardItem } from '../types';
import { pushCloudChange } from './cloudSync';

export const HIGHLIGHT_COLORS: Record<HighlightColor, HighlightColorConfig> = {
  yellow: {
    id: 'yellow',
    name: 'Yellow',
    hex: '#FCEFC2',
    bgClass: 'bg-[#FCEFC2]/90 hover:bg-[#FBE49D]',
    borderClass: 'border-[#EAD58B]',
    badgeClass: 'bg-[#FCEFC2] text-amber-900',
    meaning: 'General important'
  },
  green: {
    id: 'green',
    name: 'Green',
    hex: '#D9EFDC',
    bgClass: 'bg-[#D9EFDC]/90 hover:bg-[#C2E7C7]',
    borderClass: 'border-[#B4DDBB]',
    badgeClass: 'bg-[#D9EFDC] text-emerald-900',
    meaning: 'Definitions / key terms'
  },
  pink: {
    id: 'pink',
    name: 'Pink',
    hex: '#F8DCE3',
    bgClass: 'bg-[#F8DCE3]/90 hover:bg-[#F2C5D0]',
    borderClass: 'border-[#E7A9B9]',
    badgeClass: 'bg-[#F8DCE3] text-rose-900',
    meaning: 'Confusing — needs review'
  },
  blue: {
    id: 'blue',
    name: 'Blue',
    hex: '#D8E6F4',
    bgClass: 'bg-[#D8E6F4]/90 hover:bg-[#BED8EF]',
    borderClass: 'border-[#A7C8E7]',
    badgeClass: 'bg-[#D8E6F4] text-blue-900',
    meaning: 'Personal notes / examples'
  }
};

const HIGHLIGHTS_STORAGE_KEY = 'let_reviewer_highlights_v1';
const FLASHCARDS_STORAGE_KEY = 'let_reviewer_flashcards_v1';
const FLASHCARD_MASTERY_KEY = 'let_reviewer_flashcard_mastery_v1';
const PARAGRAPH_BOOKMARKS_KEY = 'let_reviewer_paragraph_bookmarks_v1';
const READER_SETTINGS_KEY = 'let_reviewer_reader_settings_v1';

export function getStoredHighlights(): HighlightItem[] {
  try {
    const raw = localStorage.getItem(HIGHLIGHTS_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.error('Failed to load stored highlights', e);
    return [];
  }
}

export function saveStoredHighlights(highlights: HighlightItem[]): void {
  try {
    localStorage.setItem(HIGHLIGHTS_STORAGE_KEY, JSON.stringify(highlights));
    pushCloudChange({ highlights });
  } catch (e) {
    console.error('Failed to save highlights', e);
  }
}

export function getStoredFlashcards(): FlashcardItem[] {
  try {
    const raw = localStorage.getItem(FLASHCARDS_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.error('Failed to load flashcards', e);
    return [];
  }
}

export function saveStoredFlashcards(cards: FlashcardItem[]): void {
  try {
    localStorage.setItem(FLASHCARDS_STORAGE_KEY, JSON.stringify(cards));
    pushCloudChange({ flashcards: cards });
  } catch (e) {
    console.error('Failed to save flashcards', e);
  }
}

export function getStoredFlashcardMastery(): string[] {
  try {
    const raw = localStorage.getItem(FLASHCARD_MASTERY_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.error('Failed to load flashcard mastery', e);
    return [];
  }
}

export function saveStoredFlashcardMastery(masteredIds: string[]): void {
  try {
    localStorage.setItem(FLASHCARD_MASTERY_KEY, JSON.stringify(masteredIds));
    pushCloudChange({ flashcardMastery: masteredIds });
  } catch (e) {
    console.error('Failed to save flashcard mastery', e);
  }
}

export function getStoredParagraphBookmarks(): Record<string, string[]> {
  try {
    const raw = localStorage.getItem(PARAGRAPH_BOOKMARKS_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (e) {
    console.error('Failed to load paragraph bookmarks', e);
    return {};
  }
}

export function saveStoredParagraphBookmarks(data: Record<string, string[]>): void {
  try {
    localStorage.setItem(PARAGRAPH_BOOKMARKS_KEY, JSON.stringify(data));
    pushCloudChange({ paragraphBookmarks: data });
  } catch (e) {
    console.error('Failed to save paragraph bookmarks', e);
  }
}

export interface ReaderSettings {
  fontSize?: 'normal' | 'large' | 'xlarge';
  isFocusMode?: boolean;
}

export function getStoredReaderSettings(): ReaderSettings {
  try {
    const raw = localStorage.getItem(READER_SETTINGS_KEY);
    return raw ? JSON.parse(raw) : { fontSize: 'normal', isFocusMode: false };
  } catch (e) {
    return { fontSize: 'normal', isFocusMode: false };
  }
}

export function saveStoredReaderSettings(settings: ReaderSettings): void {
  try {
    localStorage.setItem(READER_SETTINGS_KEY, JSON.stringify(settings));
    pushCloudChange({ readerSettings: settings });
  } catch (e) {
    console.error('Failed to save reader settings', e);
  }
}
