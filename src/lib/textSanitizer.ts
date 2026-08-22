/**
 * Text sanitization utilities for educational notes and LET exam drills.
 * Removes duplicate bullets (e.g. "• ● Reality...") and duplicate numbers (e.g. "(1) 1. Question...").
 */

/**
 * Strips leading bullet symbols (●, •, ▪, ■, ○, ◆, ⁃, ‣, *, -, –, —) and repeated bullet glyphs.
 */
export const cleanBulletText = (text: string): string => {
  if (!text) return '';
  return text.replace(/^[\s\u2022\u2023\u25E6\u2043\u2219\u25CF\u25AA\u25A0\u25CB\u25C6\*\-\–\—\.]+\s*/g, '').trim();
};

/**
 * Strips leading numeric list prefixes such as:
 * "1. ", "1) ", "(1) ", "[1] ", "1: ", "1 - ", etc.
 */
export const cleanNumberedText = (text: string): string => {
  if (!text) return '';
  return text.replace(/^\s*(?:\(?\d+[\.\)\:\-\]]\s*|\[\d+\]\s*)/g, '').trim();
};
