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
  readerSettings?: { fontSize?: 'normal' | 'large' | 'xlarge'; isFocusMode?: boolean };
  lastSyncedAt?: string;
}

export type SyncStatus = 'synced' | 'syncing' | 'offline' | 'error';

let currentSyncStatus: SyncStatus = 'synced';
const statusListeners = new Set<(status: SyncStatus) => void>();
let pushDebounceTimer: any = null;
let pendingPushData: CloudStudyData = {};

// In-memory single source of truth for active session
let memoryStore: CloudStudyData = {
  userProgress: {},
  highlights: [],
  flashcards: [],
  flashcardMastery: [],
  paragraphBookmarks: {},
  examHistory: {},
  examDrafts: {},
  studyPages: {},
  readerSettings: { fontSize: 'normal', isFocusMode: false },
};

export function getMemoryStore(): CloudStudyData {
  return memoryStore;
}

export function updateMemoryStore(partial: Partial<CloudStudyData>): void {
  memoryStore = {
    ...memoryStore,
    ...partial,
    examDrafts: {
      ...(memoryStore.examDrafts || {}),
      ...(partial.examDrafts || {}),
    },
    studyPages: {
      ...(memoryStore.studyPages || {}),
      ...(partial.studyPages || {}),
    },
    paragraphBookmarks: {
      ...(memoryStore.paragraphBookmarks || {}),
      ...(partial.paragraphBookmarks || {}),
    },
  };
}

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

// Purge all legacy study data from localStorage on all devices
export function purgeLegacyLocalStorage(): void {
  try {
    const keysToRemove = [
      'let_reviewer_user_progress_v1',
      'let_reviewer_highlights_v1',
      'let_reviewer_flashcards_v1',
      'let_reviewer_flashcard_mastery_v1',
      'let_reviewer_paragraph_bookmarks_v1',
      'let_reviewer_exam_history_v1',
      'let_reviewer_reader_settings_v1',
    ];
    keysToRemove.forEach(k => localStorage.removeItem(k));

    const extraKeys: string[] = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && (key.startsWith('let_active_exam_draft_') || key.startsWith('let_study_page_'))) {
        extraKeys.push(key);
      }
    }
    extraKeys.forEach(k => localStorage.removeItem(k));
  } catch (e) {
    console.error('Failed to purge legacy localStorage', e);
  }
}

// Fetch authoritative profile directly from MongoDB
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

    // Populate in-memory store directly from MongoDB
    memoryStore = {
      userProgress: cloudDoc?.userProgress || {},
      highlights: cloudDoc?.highlights || [],
      flashcards: cloudDoc?.flashcards || [],
      flashcardMastery: cloudDoc?.flashcardMastery || [],
      paragraphBookmarks: cloudDoc?.paragraphBookmarks || {},
      examHistory: cloudDoc?.examHistory || {},
      examDrafts: cloudDoc?.examDrafts || {},
      studyPages: cloudDoc?.studyPages || {},
      readerSettings: cloudDoc?.readerSettings || { fontSize: 'normal', isFocusMode: false },
      lastSyncedAt: cloudDoc?.lastSyncedAt || new Date().toISOString(),
    };

    // Clean any old localStorage data from browser
    purgeLegacyLocalStorage();

    // Broadcast update across active React components
    window.dispatchEvent(new CustomEvent('cloud-sync-applied', { detail: memoryStore }));
    setSyncStatus('synced');
  } catch (error) {
    console.warn('Could not sync with MongoDB cloud:', error);
    setSyncStatus('error');
  }
}

// Push user changes directly to MongoDB
export function pushCloudChange(partial: CloudStudyData): void {
  // Update memory store immediately for instant 0ms UI reactivity
  updateMemoryStore(partial);

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
  }, 350);
}

// Initialize cloud sync on startup
let isInitialized = false;

export function initCloudSync(): void {
  if (isInitialized || typeof window === 'undefined') return;
  isInitialized = true;

  // Immediately wipe legacy local storage keys
  purgeLegacyLocalStorage();

  // Load clean data from MongoDB
  syncWithCloud();

  // Re-sync on tab focus or visibility change (switching devices)
  window.addEventListener('focus', () => syncWithCloud());
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
      syncWithCloud();
    }
  });

  // Re-sync on network reconnect
  window.addEventListener('online', () => syncWithCloud());
  window.addEventListener('offline', () => setSyncStatus('offline'));

  // Background sync polling every 45s
  setInterval(() => {
    if (document.visibilityState === 'visible') {
      syncWithCloud();
    }
  }, 45000);
}
