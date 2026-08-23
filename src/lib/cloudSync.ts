import { SubjectProgressMap, HighlightItem, FlashcardItem, SubjectExamHistoryMap } from '../types';
import { ActiveExamDraft } from './examHistory';

export interface CloudStudyData {
  userProgress?: SubjectProgressMap;
  highlights?: HighlightItem[];
  flashcards?: FlashcardItem[];
  flashcardMastery?: string[];
  paragraphBookmarks?: Record<string, string[]>;
  examHistory?: SubjectExamHistoryMap;
  examDrafts?: Record<string, ActiveExamDraft>;
  studyPages?: Record<string, number>;
  readerSettings?: { fontSize?: string; isFocusMode?: boolean };
  lastSyncedAt?: string;
}

export type SyncStatus = 'synced' | 'syncing' | 'offline' | 'error';

const STORAGE_KEYS = {
  progress: 'let_reviewer_user_progress_v1',
  highlights: 'let_reviewer_highlights_v1',
  flashcards: 'let_reviewer_flashcards_v1',
  flashcardMastery: 'let_reviewer_flashcard_mastery_v1',
  paragraphBookmarks: 'let_reviewer_paragraph_bookmarks_v1',
  examHistory: 'let_reviewer_exam_history_v1',
  readerSettings: 'let_reviewer_reader_settings_v1',
};

let currentSyncStatus: SyncStatus = 'synced';
const statusListeners = new Set<(status: SyncStatus) => void>();
let pushDebounceTimer: any = null;
let pendingPushData: CloudStudyData = {};

export function getSyncStatus(): SyncStatus {
  return currentSyncStatus;
}

export function subscribeSyncStatus(listener: (status: SyncStatus) => void): () => void {
  statusListeners.add(listener);
  listener(currentSyncStatus);
  return () => statusListeners.delete(listener);
}

function setSyncStatus(status: SyncStatus) {
  if (currentSyncStatus !== status) {
    currentSyncStatus = status;
    statusListeners.forEach(cb => {
      try { cb(status); } catch (e) { console.error(e); }
    });
  }
}

// Gather all local study data into a snapshot
export function getLocalSnapshot(): CloudStudyData {
  try {
    const rawProgress = localStorage.getItem(STORAGE_KEYS.progress);
    const rawHighlights = localStorage.getItem(STORAGE_KEYS.highlights);
    const rawFlashcards = localStorage.getItem(STORAGE_KEYS.flashcards);
    const rawMastery = localStorage.getItem(STORAGE_KEYS.flashcardMastery);
    const rawBookmarks = localStorage.getItem(STORAGE_KEYS.paragraphBookmarks);
    const rawExamHistory = localStorage.getItem(STORAGE_KEYS.examHistory);
    const rawSettings = localStorage.getItem(STORAGE_KEYS.readerSettings);

    // Collect active drafts
    const examDrafts: Record<string, ActiveExamDraft> = {};
    const studyPages: Record<string, number> = {};

    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (!key) continue;

      if (key.startsWith('let_active_exam_draft_v2_')) {
        const subId = key.replace('let_active_exam_draft_v2_', '');
        try {
          const val = JSON.parse(localStorage.getItem(key) || '');
          if (val) examDrafts[subId] = val;
        } catch {}
      } else if (key.startsWith('let_study_page_')) {
        const subId = key.replace('let_study_page_', '');
        const pageNum = parseInt(localStorage.getItem(key) || '0', 10);
        if (!isNaN(pageNum)) studyPages[subId] = pageNum;
      }
    }

    return {
      userProgress: rawProgress ? JSON.parse(rawProgress) : {},
      highlights: rawHighlights ? JSON.parse(rawHighlights) : [],
      flashcards: rawFlashcards ? JSON.parse(rawFlashcards) : [],
      flashcardMastery: rawMastery ? JSON.parse(rawMastery) : [],
      paragraphBookmarks: rawBookmarks ? JSON.parse(rawBookmarks) : {},
      examHistory: rawExamHistory ? JSON.parse(rawExamHistory) : {},
      examDrafts,
      studyPages,
      readerSettings: rawSettings ? JSON.parse(rawSettings) : {},
    };
  } catch (e) {
    console.error('Error gathering local study snapshot', e);
    return {};
  }
}

// Save cloud data down into localStorage
export function applyCloudSnapshotToLocal(cloud: CloudStudyData): void {
  try {
    if (cloud.userProgress) {
      localStorage.setItem(STORAGE_KEYS.progress, JSON.stringify(cloud.userProgress));
    }
    if (cloud.highlights) {
      localStorage.setItem(STORAGE_KEYS.highlights, JSON.stringify(cloud.highlights));
    }
    if (cloud.flashcards) {
      localStorage.setItem(STORAGE_KEYS.flashcards, JSON.stringify(cloud.flashcards));
    }
    if (cloud.flashcardMastery) {
      localStorage.setItem(STORAGE_KEYS.flashcardMastery, JSON.stringify(cloud.flashcardMastery));
    }
    if (cloud.paragraphBookmarks) {
      localStorage.setItem(STORAGE_KEYS.paragraphBookmarks, JSON.stringify(cloud.paragraphBookmarks));
    }
    if (cloud.examHistory) {
      localStorage.setItem(STORAGE_KEYS.examHistory, JSON.stringify(cloud.examHistory));
    }
    if (cloud.readerSettings) {
      localStorage.setItem(STORAGE_KEYS.readerSettings, JSON.stringify(cloud.readerSettings));
    }

    if (cloud.examDrafts) {
      Object.entries(cloud.examDrafts).forEach(([subId, draft]) => {
        if (draft) {
          localStorage.setItem(`let_active_exam_draft_v2_${subId}`, JSON.stringify(draft));
        }
      });
    }

    if (cloud.studyPages) {
      Object.entries(cloud.studyPages).forEach(([subId, pageNum]) => {
        localStorage.setItem(`let_study_page_${subId}`, pageNum.toString());
      });
    }

    // Broadcast event so UI re-syncs immediately across all components
    window.dispatchEvent(new CustomEvent('cloud-sync-applied', { detail: cloud }));
  } catch (e) {
    console.error('Error applying cloud snapshot to local storage', e);
  }
}

// Deep merge local and cloud data to ensure no progress is lost across devices
function mergeStudyData(local: CloudStudyData, cloud: CloudStudyData): CloudStudyData {
  // 1. Highlights: deduplicate by ID, keeping newest
  const highlightMap = new Map<string, HighlightItem>();
  (cloud.highlights || []).forEach(h => highlightMap.set(h.id, h));
  (local.highlights || []).forEach(h => highlightMap.set(h.id, h));
  const mergedHighlights = Array.from(highlightMap.values());

  // 2. Flashcards: deduplicate by ID
  const flashcardMap = new Map<string, FlashcardItem>();
  (cloud.flashcards || []).forEach(f => flashcardMap.set(f.id, f));
  (local.flashcards || []).forEach(f => flashcardMap.set(f.id, f));
  const mergedFlashcards = Array.from(flashcardMap.values());

  // 3. Flashcard mastery: union of IDs
  const mergedMastery = Array.from(new Set([
    ...(cloud.flashcardMastery || []),
    ...(local.flashcardMastery || []),
  ]));

  // 4. Paragraph bookmarks: union per subject
  const mergedBookmarks: Record<string, string[]> = { ...(cloud.paragraphBookmarks || {}) };
  Object.entries(local.paragraphBookmarks || {}).forEach(([subId, keys]) => {
    const existing = mergedBookmarks[subId] || [];
    mergedBookmarks[subId] = Array.from(new Set([...existing, ...keys]));
  });

  // 5. Exam History: deduplicate attempts by attempt.id
  const mergedExamHistory: SubjectExamHistoryMap = { ...(cloud.examHistory || {}) };
  Object.entries(local.examHistory || {}).forEach(([subId, attempts]) => {
    const cloudAttempts = mergedExamHistory[subId] || [];
    const attemptMap = new Map<string, any>();
    cloudAttempts.forEach(a => attemptMap.set(a.id, a));
    attempts.forEach(a => attemptMap.set(a.id, a));
    // Sort descending by date
    mergedExamHistory[subId] = Array.from(attemptMap.values()).sort(
      (a, b) => new Date(b.completedAt).getTime() - new Date(a.completedAt).getTime()
    );
  });

  // 6. User Progress (notes, status, bookmark)
  const mergedProgress: SubjectProgressMap = { ...(cloud.userProgress || {}) };
  Object.entries(local.userProgress || {}).forEach(([subId, prog]) => {
    if (!mergedProgress[subId]) {
      mergedProgress[subId] = prog;
    } else {
      // Merge: if local has notes, prefer longest/newest; preserve true for bookmarked
      mergedProgress[subId] = {
        bookmarked: prog.bookmarked || mergedProgress[subId].bookmarked,
        status: prog.status !== 'NOT_STARTED' ? prog.status : mergedProgress[subId].status,
        userNotes: (prog.userNotes && prog.userNotes.length > (mergedProgress[subId].userNotes || '').length)
          ? prog.userNotes
          : mergedProgress[subId].userNotes || prog.userNotes || '',
      };
    }
  });

  // 7. Study pages (max page)
  const mergedPages: Record<string, number> = { ...(cloud.studyPages || {}) };
  Object.entries(local.studyPages || {}).forEach(([subId, pageNum]) => {
    mergedPages[subId] = Math.max(pageNum, mergedPages[subId] || 0);
  });

  // 8. Exam drafts & Reader settings
  const mergedDrafts = { ...(cloud.examDrafts || {}), ...(local.examDrafts || {}) };
  const mergedSettings = { ...(cloud.readerSettings || {}), ...(local.readerSettings || {}) };

  return {
    userProgress: mergedProgress,
    highlights: mergedHighlights,
    flashcards: mergedFlashcards,
    flashcardMastery: mergedMastery,
    paragraphBookmarks: mergedBookmarks,
    examHistory: mergedExamHistory,
    examDrafts: mergedDrafts,
    studyPages: mergedPages,
    readerSettings: mergedSettings,
    lastSyncedAt: new Date().toISOString(),
  };
}

// Fetch from MongoDB and reconcile
export async function syncWithCloud(): Promise<void> {
  if (!navigator.onLine) {
    setSyncStatus('offline');
    return;
  }

  try {
    setSyncStatus('syncing');
    const res = await fetch('/api/sync', { method: 'GET' });

    if (!res.ok) {
      let errDetails = '';
      try {
        const errJson = await res.json();
        errDetails = errJson.error || errJson.details || JSON.stringify(errJson);
      } catch {
        errDetails = await res.text();
      }
      throw new Error(`Failed to fetch cloud sync (${res.status}): ${errDetails}`);
    }

    const cloudDoc = await res.json();
    const local = getLocalSnapshot();
    const merged = mergeStudyData(local, cloudDoc || {});

    // Save merged to local
    applyCloudSnapshotToLocal(merged);

    // Push merged back to MongoDB to ensure database has complete unified state
    await fetch('/api/sync', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(merged),
    });

    setSyncStatus('synced');
  } catch (error) {
    console.warn('Could not sync with MongoDB cloud (using local cache):', error);
    setSyncStatus('error');
  }
}

// Queue a change to be pushed to MongoDB (debounced to avoid spamming network)
export function pushCloudChange(partial: CloudStudyData): void {
  // Merge into pending buffer
  pendingPushData = {
    ...pendingPushData,
    ...partial,
  };

  setSyncStatus('syncing');

  if (pushDebounceTimer) {
    clearTimeout(pushDebounceTimer);
  }

  pushDebounceTimer = setTimeout(async () => {
    const toPush = { ...pendingPushData };
    pendingPushData = {};

    if (!navigator.onLine) {
      setSyncStatus('offline');
      return;
    }

    try {
      const res = await fetch('/api/sync', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(toPush),
      });

      if (res.ok) {
        setSyncStatus('synced');
      } else {
        setSyncStatus('error');
      }
    } catch (e) {
      console.warn('Failed to push change to MongoDB:', e);
      setSyncStatus('error');
    }
  }, 400);
}

// Initialize listeners on startup
let isInitialized = false;

export function initCloudSync(): void {
  if (isInitialized || typeof window === 'undefined') return;
  isInitialized = true;

  // Initial sync on app load
  syncWithCloud();

  // Sync automatically when window regains focus or becomes visible (switching between devices / tabs)
  window.addEventListener('focus', () => syncWithCloud());
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
      syncWithCloud();
    }
  });

  // Sync on online reconnect
  window.addEventListener('online', () => syncWithCloud());
  window.addEventListener('offline', () => setSyncStatus('offline'));

  // Background polling every 45s to fetch updates made on other active devices
  setInterval(() => {
    if (document.visibilityState === 'visible') {
      syncWithCloud();
    }
  }, 45000);
}
