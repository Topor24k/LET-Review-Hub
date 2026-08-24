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

const OFFLINE_CACHE_KEY = 'let_reviewer_offline_cache_v3';
let pendingOfflineQueue: CloudStudyData = {};

// Load offline cache on boot if available
function loadOfflineCache(): CloudStudyData | null {
  try {
    const raw = localStorage.getItem(OFFLINE_CACHE_KEY);
    if (!raw) {
      // Clear legacy v2 cache to remove old draft questions
      localStorage.removeItem('let_reviewer_offline_cache_v2');
      return null;
    }
    const parsed = JSON.parse(raw);
    // Clear legacy examDrafts so the new 75-question banks load freshly
    if (parsed) {
      parsed.examDrafts = {};
    }
    return parsed;
  } catch {
    return null;
  }
}

// Save offline cache
function saveOfflineCache(data: CloudStudyData): void {
  try {
    localStorage.setItem(OFFLINE_CACHE_KEY, JSON.stringify(data));
  } catch (e) {
    console.error('Failed to save offline cache', e);
  }
}

// In-memory single source of truth for active session
let memoryStore: CloudStudyData = loadOfflineCache() || {
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
  saveOfflineCache(memoryStore);
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

// Purge old individual legacy keys
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

    // Flush any pending offline queue first
    if (Object.keys(pendingOfflineQueue).length > 0) {
      const flushPayload = { ...pendingOfflineQueue };
      pendingOfflineQueue = {};
      await fetch('/api/sync', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(flushPayload),
      });
    }

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

    // Save offline cache for offline resilience
    saveOfflineCache(memoryStore);

    // Clean any old legacy individual keys
    purgeLegacyLocalStorage();

    // Broadcast update across active React components
    window.dispatchEvent(new CustomEvent('cloud-sync-applied', { detail: memoryStore }));
    setSyncStatus('synced');
  } catch (error) {
    console.warn('Could not sync with MongoDB cloud (using offline store):', error);
    setSyncStatus(navigator.onLine ? 'error' : 'offline');
  }
}

// Push user changes directly to MongoDB or queue for offline sync
export function pushCloudChange(partial: CloudStudyData): void {
  // Update memory store immediately for instant 0ms UI reactivity
  updateMemoryStore(partial);

  pendingPushData = {
    ...pendingPushData,
    ...partial,
  };

  if (!navigator.onLine) {
    pendingOfflineQueue = {
      ...pendingOfflineQueue,
      ...partial,
    };
    setSyncStatus('offline');
    return;
  }

  setSyncStatus('syncing');

  if (pushDebounceTimer) {
    clearTimeout(pushDebounceTimer);
  }

  pushDebounceTimer = setTimeout(async () => {
    const toPush = { ...pendingPushData };
    pendingPushData = {};

    if (!navigator.onLine) {
      pendingOfflineQueue = {
        ...pendingOfflineQueue,
        ...toPush,
      };
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
      console.warn('Failed to push change to MongoDB (queued offline):', e);
      pendingOfflineQueue = {
        ...pendingOfflineQueue,
        ...toPush,
      };
      setSyncStatus(navigator.onLine ? 'error' : 'offline');
    }
  }, 350);
}

// Initialize cloud sync on startup
let isInitialized = false;

export function initCloudSync(): void {
  if (isInitialized || typeof window === 'undefined') return;
  isInitialized = true;

  // Immediately wipe legacy individual storage keys
  purgeLegacyLocalStorage();

  // Load clean data from MongoDB or offline cache
  syncWithCloud();

  // Re-sync on tab focus or visibility change (switching devices)
  window.addEventListener('focus', () => syncWithCloud());
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
      syncWithCloud();
    }
  });

  // Re-sync on network reconnect & flush offline queue
  window.addEventListener('online', () => {
    setSyncStatus('syncing');
    syncWithCloud();
  });
  window.addEventListener('offline', () => setSyncStatus('offline'));

  // Background sync polling every 45s
  setInterval(() => {
    if (document.visibilityState === 'visible' && navigator.onLine) {
      syncWithCloud();
    }
  }, 45000);
}
