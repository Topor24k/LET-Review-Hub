import { HighlightColor, HighlightColorConfig, HighlightItem, FlashcardItem } from '../types';
import { getMemoryStore, pushCloudChange } from './cloudSync';

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

export function getStoredHighlights(): HighlightItem[] {
  return getMemoryStore().highlights || [];
}

export function saveStoredHighlights(highlights: HighlightItem[]): void {
  pushCloudChange({ highlights });
}

export function getStoredFlashcards(): FlashcardItem[] {
  return getMemoryStore().flashcards || [];
}

export function saveStoredFlashcards(cards: FlashcardItem[]): void {
  pushCloudChange({ flashcards: cards });
}

export function getStoredFlashcardMastery(): string[] {
  return getMemoryStore().flashcardMastery || [];
}

export function saveStoredFlashcardMastery(masteredIds: string[]): void {
  pushCloudChange({ flashcardMastery: masteredIds });
}

export function getStoredParagraphBookmarks(): Record<string, string[]> {
  return getMemoryStore().paragraphBookmarks || {};
}

export function saveStoredParagraphBookmarks(data: Record<string, string[]>): void {
  pushCloudChange({ paragraphBookmarks: data });
}

export interface ReaderSettings {
  fontSize?: 'normal' | 'large' | 'xlarge';
  isFocusMode?: boolean;
}

export function getStoredReaderSettings(): ReaderSettings {
  return getMemoryStore().readerSettings || { fontSize: 'normal', isFocusMode: false };
}

export function saveStoredReaderSettings(settings: ReaderSettings): void {
  pushCloudChange({ readerSettings: settings });
}
