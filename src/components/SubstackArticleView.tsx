import React, { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import { 
  ArrowLeft, Bookmark, 
  ChevronLeft, ChevronRight, Save, Type, Check, 
  Search, BookOpen, Eye, HelpCircle, Sparkles, Highlighter
} from 'lucide-react';
import { SubjectModule, SubjectProgressMap, StudyStatus, HighlightItem, HighlightColor, FlashcardItem } from '../types';
import { SUBJECTS_DATA } from '../data/subjects';
import { METHODS_AND_STRATEGIES_PAGES, LessonPage } from '../data/methodsAndStrategiesContent';
import { TECH_TEACHING_LEARNING_PAGES } from '../data/techTeachingLearningContent';
import { CURRICULUM_DEVELOPMENT_PAGES } from '../data/curriculumDevelopmentContent';
import { NEW_LITERACIES_PAGES } from '../data/buildingAndEnhancingLiteraciesContent';
import { INCLUSIVE_EDUCATION_PAGES } from '../data/inclusiveEducationContent';
import { SOCIAL_DIMENSION_TEACHING_PAGES } from '../data/socialDimensionTeachingContent';
import { CHILD_ADOLESCENT_LEARNERS_PAGES } from '../data/childAdolescentLearnersContent';
import { ETHICS_PAGES } from '../data/ethicsContent';
import { ART_APPRECIATION_PAGES } from '../data/artAppreciationContent';
import { PURPOSIVE_COMMUNICATION_PAGES } from '../data/purposiveCommunicationContent';
import { UNDERSTANDING_THE_SELF_PAGES } from '../data/understandingTheSelfContent';
import { SCIENCE_TECHNOLOGY_SOCIETY_PAGES } from '../data/scienceTechnologySocietyContent';
import { MATH_PAGES } from '../data/mathContent';
import { SOCIAL_STUDIES_PAGES } from '../data/socialStudiesContent';
import { FILIPINO_PAGES } from '../data/filipinoContent';
import { RIZAL_PAGES } from '../data/rizalContent';
import { ASSESSMENT_PAGES } from '../data/assessmentContent';
import { 
  getStoredHighlights, saveStoredHighlights, 
  getStoredFlashcards, saveStoredFlashcards, 
  getStoredParagraphBookmarks, saveStoredParagraphBookmarks,
  getStoredReaderSettings, saveStoredReaderSettings,
  HIGHLIGHT_COLORS
} from '../lib/highlightConstants';
import { pushCloudChange } from '../lib/cloudSync';
import { cleanBulletText, cleanNumberedText } from '../lib/textSanitizer';
import { HighlightToolbar } from './HighlightToolbar';
import { HighlightPopover } from './HighlightPopover';
import { HighlightsDigestModal } from './HighlightsDigestModal';
import { FlashcardsModal } from './FlashcardsModal';
import { KeyboardShortcutsModal } from './KeyboardShortcutsModal';
import { InlineSearchOverlay } from './InlineSearchOverlay';
import { LessonTableOfContents, PageGroup } from './LessonTableOfContents';

interface SubstackArticleViewProps {
  subject: SubjectModule;
  userProgress: SubjectProgressMap;
  onBack: () => void;
  onSelectSubject: (subject: SubjectModule) => void;
  onToggleBookmark: (subjectId: string, e?: React.MouseEvent) => void;
  onUpdateStatus: (subjectId: string, status: StudyStatus) => void;
  onSaveNotes: (subjectId: string, notes: string) => void;
  onOpenExam?: (subject: SubjectModule) => void;
}

export const SubstackArticleView: React.FC<SubstackArticleViewProps> = ({
  subject,
  userProgress,
  onBack,
  onSelectSubject,
  onToggleBookmark,
  onUpdateStatus,
  onSaveNotes,
  onOpenExam,
}) => {
  const isMethodsAndStrategies = subject.id === 'prof-methods-strategies' || subject.title.toUpperCase().includes('METHODS');
  const isTechTeachingLearning = subject.id === 'prof-tech-teaching-learning' || subject.title.toUpperCase().includes('TECHNOLOGY');
  const isCurriculumDev = subject.id === 'prof-curriculum-dev' || (subject.title.toUpperCase().includes('CURRICULUM') && !subject.title.toUpperCase().includes('LITERACIES'));
  const isNewLiteracies = subject.id === 'prof-new-literacies' || subject.title.toUpperCase().includes('LITERACIES');
  const isInclusiveEducation = subject.id === 'prof-inclusive-education' || subject.title.toUpperCase().includes('INCLUSIVE');
  const isSocialDimensions = subject.id === 'prof-social-dimensions' || subject.title.toUpperCase().includes('SOCIAL') || subject.title.toUpperCase().includes('PROFESSION');
  const isChildAdolescent = subject.id === 'prof-child-adolescent' || subject.title.toUpperCase().includes('CHILD') || subject.title.toUpperCase().includes('ADOLESCENT');
  const isAssessment = subject.id === 'prof-assessment' || subject.title.toUpperCase().includes('ASSESSMENT');
  const isEthics = subject.id === 'gen-ethics' || subject.title.toUpperCase().includes('ETHICS');
  const isArtAppreciation = subject.id === 'gen-art-appreciation' || subject.title.toUpperCase().includes('ART');
  const isPurposiveComm = subject.id === 'gen-purposive-communication' || subject.title.toUpperCase().includes('PURPOSIVE') || subject.title.toUpperCase().includes('COMMUNICATION');
  const isUnderstandingSelf = subject.id === 'gen-understanding-self' || subject.title.toUpperCase().includes('UNDERSTANDING') || subject.title.toUpperCase().includes('SELF');
  const isSTS = subject.id === 'gen-sts' || subject.title.toUpperCase().includes('SCIENCE, TECHNOLOGY') || subject.title.toUpperCase().includes('SOCIETY');
  const isMath = subject.id === 'gen-math' || subject.title.toUpperCase().includes('MATH');
  const isSocialStudies = subject.id === 'gen-social-studies' || subject.title.toUpperCase().includes('SOCIAL STUDIES');
  const isFilipino = subject.id === 'gen-filipino' || subject.title.toUpperCase().includes('FILIPINO');
  const isRizal = subject.id === 'gen-rizal' || subject.title.toUpperCase().includes('RIZAL');

  const rawLessonPages: LessonPage[] = useMemo(() => {
    if (isMethodsAndStrategies) return METHODS_AND_STRATEGIES_PAGES;
    if (isTechTeachingLearning) return TECH_TEACHING_LEARNING_PAGES;
    if (isCurriculumDev) return CURRICULUM_DEVELOPMENT_PAGES;
    if (isNewLiteracies) return NEW_LITERACIES_PAGES;
    if (isInclusiveEducation) return INCLUSIVE_EDUCATION_PAGES;
    if (isSocialDimensions) return SOCIAL_DIMENSION_TEACHING_PAGES;
    if (isChildAdolescent) return CHILD_ADOLESCENT_LEARNERS_PAGES;
    if (isAssessment) return ASSESSMENT_PAGES;
    if (isEthics) return ETHICS_PAGES;
    if (isArtAppreciation) return ART_APPRECIATION_PAGES;
    if (isPurposiveComm) return PURPOSIVE_COMMUNICATION_PAGES;
    if (isUnderstandingSelf) return UNDERSTANDING_THE_SELF_PAGES;
    if (isSTS) return SCIENCE_TECHNOLOGY_SOCIETY_PAGES;
    if (isMath) return MATH_PAGES;
    if (isSocialStudies) return SOCIAL_STUDIES_PAGES;
    if (isFilipino) return FILIPINO_PAGES;
    if (isRizal) return RIZAL_PAGES;
    return [];
  }, [
    isMethodsAndStrategies, 
    isTechTeachingLearning, 
    isCurriculumDev, 
    isNewLiteracies, 
    isInclusiveEducation, 
    isSocialDimensions, 
    isChildAdolescent,
    isAssessment,
    isEthics,
    isArtAppreciation,
    isPurposiveComm,
    isUnderstandingSelf,
    isSTS,
    isMath,
    isSocialStudies,
    isFilipino,
    isRizal
  ]);

  // Group raw lesson pages into pages by day ("Page 1: Day 1...", "Page 2: Day 2...")
  const pageGroups: PageGroup[] = useMemo(() => {
    if (!rawLessonPages || rawLessonPages.length === 0) return [];
    
    // Group raw pages by dayNumber so that each Day / Unit is an organized, comprehensive review page with its sub-topics
    const dayMap = new Map<number, LessonPage[]>();
    rawLessonPages.forEach((p) => {
      const day = p.dayNumber || 1;
      if (!dayMap.has(day)) {
        dayMap.set(day, []);
      }
      dayMap.get(day)!.push(p);
    });

    const groups: PageGroup[] = [];
    let groupIndex = 0;
    dayMap.forEach((pagesInDay, dayNum) => {
      const startNum = pagesInDay[0].pageNumber;
      const endNum = pagesInDay[pagesInDay.length - 1].pageNumber;
      const displayPageNum = groupIndex + 1;
      
      const totalMinutes = pagesInDay.reduce((sum, p) => {
        const match = p.readTime?.match(/(\d+)/);
        return sum + (match ? parseInt(match[1], 10) : 4);
      }, 0);

      groups.push({
        groupIndex: groupIndex,
        displayPageNumber: displayPageNum,
        rawPages: pagesInDay,
        startRawPageNum: startNum,
        endRawPageNum: endNum,
        displayDayTitle: pagesInDay[0].dayTitle || `Day ${dayNum}`,
        displayTopicTitle: pagesInDay[0].topicTitle,
        totalEstimatedReadTime: `~${totalMinutes} min read`,
      });
      groupIndex++;
    });

    return groups;
  }, [rawLessonPages]);

  const hasPages = pageGroups.length > 0;
  const totalPages = hasPages ? pageGroups.length : 1;

  // Restore reader preferences from localStorage
  const [initialSettings] = useState(() => getStoredReaderSettings());
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'xlarge'>(initialSettings.fontSize || 'normal');
  const [isFocusMode, setIsFocusMode] = useState<boolean>(initialSettings.isFocusMode || false);
  const [savedNotification, setSavedNotification] = useState(false);

  // Restore last visited page for this subject from localStorage
  const [currentPageIndex, setCurrentPageIndex] = useState<number>(() => {
    try {
      const savedPage = localStorage.getItem(`let_study_page_${subject.id}`);
      return savedPage ? Math.min(parseInt(savedPage, 10), totalPages - 1) : 0;
    } catch {
      return 0;
    }
  });

  // Highlighting & Annotation State
  const [highlights, setHighlights] = useState<HighlightItem[]>(() => getStoredHighlights());
  const [isHighlightMode, setIsHighlightMode] = useState(false);
  const [activeHighlightColor, setActiveHighlightColor] = useState<HighlightColor>('yellow');
  const [activePopover, setActivePopover] = useState<{
    highlight: HighlightItem;
    position: { x: number; y: number; width: number; height: number };
  } | null>(null);

  // Flashcards state
  const [flashcards, setFlashcards] = useState<FlashcardItem[]>(() => getStoredFlashcards());
  const [isFlashcardsModalOpen, setIsFlashcardsModalOpen] = useState(false);

  // Paragraph Bookmarks state
  const [paragraphBookmarks, setParagraphBookmarks] = useState<Record<string, string[]>>(() => getStoredParagraphBookmarks());

  // Modals & Overlays
  const [isDigestOpen, setIsDigestOpen] = useState(false);
  const [isShortcutsOpen, setIsShortcutsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isTocOpen, setIsTocOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentMatchIndex, setCurrentMatchIndex] = useState(0);
  const [targetHighlightId, setTargetHighlightId] = useState<string | null>(null);

  const articleContainerRef = useRef<HTMLDivElement>(null);

  const progress = userProgress[subject.id] || {
    bookmarked: false,
    status: 'NOT_STARTED',
    userNotes: '',
  };

  const [notes, setNotes] = useState(progress.userNotes || '');

  // Persist reader settings
  useEffect(() => {
    saveStoredReaderSettings({ fontSize, isFocusMode });
  }, [fontSize, isFocusMode]);

  // Persist current page index for this subject & push to MongoDB cloud
  useEffect(() => {
    try {
      localStorage.setItem(`let_study_page_${subject.id}`, currentPageIndex.toString());
      pushCloudChange({
        studyPages: {
          [subject.id]: currentPageIndex,
        },
      });
    } catch (e) {
      console.error(e);
    }
  }, [currentPageIndex, subject.id]);

  // Listen to live Cloud Sync updates applied from other devices
  useEffect(() => {
    const handleCloudSync = (e: any) => {
      const detail = e.detail;
      if (detail?.highlights) setHighlights(detail.highlights);
      if (detail?.flashcards) setFlashcards(detail.flashcards);
      if (detail?.paragraphBookmarks) setParagraphBookmarks(detail.paragraphBookmarks);
      if (detail?.studyPages && detail.studyPages[subject.id] !== undefined) {
        setCurrentPageIndex(Math.min(detail.studyPages[subject.id], totalPages - 1));
      }
      if (detail?.userProgress && detail.userProgress[subject.id]?.userNotes !== undefined) {
        setNotes(detail.userProgress[subject.id].userNotes);
      }
    };
    window.addEventListener('cloud-sync-applied', handleCloudSync);
    return () => window.removeEventListener('cloud-sync-applied', handleCloudSync);
  }, [subject.id, totalPages]);

  // Sync page index & notes when switching subjects
  useEffect(() => {
    try {
      const savedPage = localStorage.getItem(`let_study_page_${subject.id}`);
      setCurrentPageIndex(savedPage ? parseInt(savedPage, 10) || 0 : 0);
    } catch {
      setCurrentPageIndex(0);
    }
    setNotes(userProgress[subject.id]?.userNotes || '');
    setActivePopover(null);
  }, [subject.id]);

  // Auto-sync notes with parent and localStorage (debounced)
  useEffect(() => {
    const timer = setTimeout(() => {
      if (notes !== (userProgress[subject.id]?.userNotes || '')) {
        onSaveNotes(subject.id, notes);
      }
    }, 600);
    return () => clearTimeout(timer);
  }, [notes, subject.id]);

  // Persist highlights
  useEffect(() => {
    saveStoredHighlights(highlights);
  }, [highlights]);

  // Persist flashcards
  useEffect(() => {
    saveStoredFlashcards(flashcards);
  }, [flashcards]);

  // Persist paragraph bookmarks
  useEffect(() => {
    saveStoredParagraphBookmarks(paragraphBookmarks);
  }, [paragraphBookmarks]);

  // Find index for Previous / Next subject navigation
  const currentSubjectIndex = SUBJECTS_DATA.findIndex(s => s.id === subject.id);
  const prevSubject = currentSubjectIndex > 0 ? SUBJECTS_DATA[currentSubjectIndex - 1] : null;
  const nextSubject = currentSubjectIndex < SUBJECTS_DATA.length - 1 ? SUBJECTS_DATA[currentSubjectIndex + 1] : null;

  const currentPageGroup = hasPages ? pageGroups[currentPageIndex] : null;
  const currentRawPageNumbers = useMemo(() => {
    return currentPageGroup ? currentPageGroup.rawPages.map(p => p.pageNumber) : [];
  }, [currentPageGroup]);

  // Filter highlights for current subject and current 4-page frame
  const currentPageHighlights = useMemo(() => {
    return highlights.filter(h => h.subjectId === subject.id && currentRawPageNumbers.includes(h.pageNumber));
  }, [highlights, subject.id, currentRawPageNumbers]);

  const subjectHighlights = useMemo(() => {
    return highlights.filter(h => h.subjectId === subject.id);
  }, [highlights, subject.id]);

  const handleNextPage = () => {
    if (currentPageIndex < totalPages - 1) {
      setCurrentPageIndex(prev => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrevPage = () => {
    if (currentPageIndex > 0) {
      setCurrentPageIndex(prev => prev - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSaveNotes = () => {
    onSaveNotes(subject.id, notes);
    setSavedNotification(true);
    setTimeout(() => setSavedNotification(false), 2200);
  };

  // Keyboard shortcut listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable) {
        return;
      }

      if (e.key.toLowerCase() === 'h' && !e.ctrlKey && !e.metaKey) {
        e.preventDefault();
        setIsHighlightMode(prev => !prev);
      } else if (e.key === 'Escape') {
        setIsHighlightMode(false);
        setActivePopover(null);
        setIsSearchOpen(false);
        setIsShortcutsOpen(false);
        setIsDigestOpen(false);
        setIsFlashcardsModalOpen(false);
        setIsTocOpen(false);
      } else if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'f') {
        e.preventDefault();
        setIsSearchOpen(true);
      } else if (e.key === '1') {
        setActiveHighlightColor('yellow');
      } else if (e.key === '2') {
        setActiveHighlightColor('green');
      } else if (e.key === '3') {
        setActiveHighlightColor('pink');
      } else if (e.key === '4') {
        setActiveHighlightColor('blue');
      } else if (e.key.toLowerCase() === 'f' && !e.ctrlKey && !e.metaKey) {
        setIsFocusMode(prev => !prev);
      } else if (e.key.toLowerCase() === 'd' && !e.ctrlKey && !e.metaKey) {
        setIsDigestOpen(prev => !prev);
      } else if (e.key.toLowerCase() === 'p' && !e.ctrlKey && !e.metaKey) {
        setIsTocOpen(prev => !prev);
      } else if (e.key === '?') {
        setIsShortcutsOpen(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // ---------------------------------------------------------------
  // MOBILE HIGHLIGHT — ref-based, auto-applies on finger release
  // ---------------------------------------------------------------
  // pendingSelectionRef always holds the latest snapshotted selection.
  // Using a ref (not state) means touchend always reads the freshest data.
  // pendingSelectionState drives the floating button UI only.
  // ---------------------------------------------------------------

  type PendingSelectionData = {
    text: string;
    locationKey: string;
    pageNumber: number;
    startOffset?: number;
    endOffset?: number;
    rect: { top: number; bottom: number; left: number; width: number; height: number };
  };

  const pendingSelectionRef = useRef<PendingSelectionData | null>(null);
  const [pendingSelection, setPendingSelection] = useState<PendingSelectionData | null>(null);

  // Snapshot selection into ref AND state
  const snapshotSelection = useCallback(() => {
    if (!isHighlightMode) {
      pendingSelectionRef.current = null;
      setPendingSelection(null);
      return;
    }

    const selection = window.getSelection();
    if (!selection || selection.isCollapsed) {
      pendingSelectionRef.current = null;
      setPendingSelection(null);
      return;
    }

    const rawText = selection.toString().trim();
    if (rawText.length < 1) {
      pendingSelectionRef.current = null;
      setPendingSelection(null);
      return;
    }

    if (!articleContainerRef.current || !articleContainerRef.current.contains(selection.anchorNode)) {
      pendingSelectionRef.current = null;
      setPendingSelection(null);
      return;
    }

    const anchorNode = selection.anchorNode;
    const anchorElement = anchorNode instanceof HTMLElement ? anchorNode : anchorNode?.parentElement;
    const targetContainer = anchorElement?.closest('[data-location-key]') as HTMLElement | null;
    if (!targetContainer) {
      pendingSelectionRef.current = null;
      setPendingSelection(null);
      return;
    }

    const locationKey = targetContainer.getAttribute('data-location-key');
    if (!locationKey) {
      pendingSelectionRef.current = null;
      setPendingSelection(null);
      return;
    }

    const pageMatch = locationKey.match(/^p(\d+)-/);
    const pageNumber = pageMatch ? parseInt(pageMatch[1], 10) : (currentRawPageNumbers[0] || 1);

    let startOffset: number | undefined;
    let endOffset: number | undefined;
    // Use viewport coords (for floating button position) — not scroll-relative
    let rect = { top: 0, bottom: 0, left: 0, width: 0, height: 0 };

    try {
      const range = selection.getRangeAt(0);
      // Ensure the selection is within the targetContainer content
      if (!targetContainer.contains(range.commonAncestorContainer)) {
        pendingSelectionRef.current = null;
        setPendingSelection(null);
        return;
      }

      const preRange = range.cloneRange();
      preRange.selectNodeContents(targetContainer);
      preRange.setEnd(range.startContainer, range.startOffset);
      startOffset = preRange.toString().length;
      endOffset = startOffset + rawText.length;

      const domRect = range.getBoundingClientRect();
      // viewport coords so it moves with scroll correctly
      rect = { 
        top: domRect.top, 
        bottom: domRect.bottom, 
        left: domRect.left, 
        width: domRect.width, 
        height: domRect.height 
      };
    } catch (e) {
      console.error('Could not compute range offset', e);
    }

    const snap: PendingSelectionData = { text: rawText, locationKey, pageNumber, startOffset, endOffset, rect };
    pendingSelectionRef.current = snap;
    setPendingSelection(snap);
  }, [isHighlightMode, currentRawPageNumbers]);

  // selectionchange fires during drag — continuously updates the snapshot
  useEffect(() => {
    const handler = () => setTimeout(snapshotSelection, 30);
    document.addEventListener('selectionchange', handler);
    return () => document.removeEventListener('selectionchange', handler);
  }, [snapshotSelection]);

  // Core: build and save a HighlightItem from snapshot data
  const buildAndSaveHighlight = useCallback((snap: PendingSelectionData) => {
    const newHighlight: HighlightItem = {
      id: `hl-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`,
      subjectId: subject.id,
      pageNumber: snap.pageNumber,
      locationKey: snap.locationKey,
      startOffset: snap.startOffset,
      endOffset: snap.endOffset,
      text: snap.text,
      color: activeHighlightColor,
      createdAt: Date.now(),
    };
    setHighlights(prev => {
      const updated = [newHighlight, ...prev];
      saveStoredHighlights(updated);
      pushCloudChange({ highlights: updated });
      return updated;
    });
    window.getSelection()?.removeAllRanges();
    pendingSelectionRef.current = null;
    setPendingSelection(null);
  }, [subject.id, activeHighlightColor]);

  // applyPendingHighlight reads from ref so it always has the latest data
  // ONLY called when user explicitly clicks/taps the floating "Highlight ✓" button
  const applyPendingHighlight = useCallback(() => {
    const snap = pendingSelectionRef.current;
    if (!snap || !snap.text || snap.text.length < 1) return;
    buildAndSaveHighlight(snap);
  }, [buildAndSaveHighlight]);

  // Desktop mouseup: immediately highlights on mouse drag release on PC/Laptop
  const handleMouseUp = useCallback(() => {
    if (!isHighlightMode) return;
    setTimeout(() => {
      const snap = pendingSelectionRef.current;
      if (snap && snap.text && snap.text.length > 0) {
        buildAndSaveHighlight(snap);
      }
    }, 40);
  }, [isHighlightMode, buildAndSaveHighlight]);

  // Mobile touch release: update snapshot so the floating "Highlight ✓" button appears below the word on phones
  const handleTouchEnd = useCallback(() => {
    if (!isHighlightMode) return;
    setTimeout(() => {
      snapshotSelection();
    }, 60);
  }, [isHighlightMode, snapshotSelection]);



  // Update Highlight Color & Sync to MongoDB
  const handleUpdateHighlightColor = (id: string, color: HighlightColor) => {
    setHighlights(prev => {
      const updated = prev.map(h => h.id === id ? { ...h, color } : h);
      saveStoredHighlights(updated);
      pushCloudChange({ highlights: updated });
      return updated;
    });
    if (activePopover && activePopover.highlight.id === id) {
      setActivePopover(prev => prev ? { ...prev, highlight: { ...prev.highlight, color } } : null);
    }
  };

  // Update Highlight Note & Sync to MongoDB
  const handleUpdateHighlightNote = (id: string, note: string) => {
    setHighlights(prev => {
      const updated = prev.map(h => h.id === id ? { ...h, note } : h);
      saveStoredHighlights(updated);
      pushCloudChange({ highlights: updated });
      return updated;
    });
    if (activePopover && activePopover.highlight.id === id) {
      setActivePopover(prev => prev ? { ...prev, highlight: { ...prev.highlight, note } } : null);
    }
  };

  // Delete Highlight — immediately updates local storage and syncs deletion to MongoDB
  const handleDeleteHighlight = (id: string) => {
    setHighlights(prev => {
      const updated = prev.filter(h => h.id !== id);
      saveStoredHighlights(updated);
      pushCloudChange({ highlights: updated });
      return updated;
    });
    setActivePopover(null);
  };

  // Convert Highlight to Flashcard
  const handleConvertToFlashcard = (hl: HighlightItem) => {
    const newCard: FlashcardItem = {
      id: `fc-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
      subjectId: subject.id,
      pageNumber: hl.pageNumber,
      question: `Define / Identify: "${hl.text}"`,
      answer: hl.note ? `${hl.text}\n\nNote: ${hl.note}` : hl.text,
      createdAt: Date.now(),
    };

    setFlashcards(prev => {
      const updated = [newCard, ...prev];
      saveStoredFlashcards(updated);
      pushCloudChange({ flashcards: updated });
      return updated;
    });
    setActivePopover(null);
    setIsFlashcardsModalOpen(true);
  };

  // Jump precisely to a specific highlighted word / passage in reading view
  const handleJumpToHighlight = (pageNumber: number, highlightId: string, locationKey?: string) => {
    let targetGroupIdx = -1;

    if (locationKey) {
      const match = locationKey.match(/^p(\d+)-/);
      if (match) {
        const parsedRaw = parseInt(match[1], 10);
        targetGroupIdx = pageGroups.findIndex(g => g.rawPages.some(p => p.pageNumber === parsedRaw));
      }
    }

    if (targetGroupIdx === -1) {
      targetGroupIdx = pageGroups.findIndex(g => g.rawPages.some(p => p.pageNumber === pageNumber));
    }

    if (targetGroupIdx !== -1 && targetGroupIdx !== currentPageIndex) {
      setCurrentPageIndex(targetGroupIdx);
    }

    setTargetHighlightId(highlightId);

    const attemptScroll = (attempts = 0) => {
      const el = document.getElementById(`highlight-${highlightId}`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        setTimeout(() => {
          setTargetHighlightId(prev => (prev === highlightId ? null : prev));
        }, 3500);
      } else if (attempts < 25) {
        setTimeout(() => attemptScroll(attempts + 1), 60);
      }
    };

    requestAnimationFrame(() => attemptScroll());
  };

  // Toggle Paragraph / Section Bookmark
  const toggleParagraphBookmark = (sectionKey: string) => {
    setParagraphBookmarks(prev => {
      const subjectList = prev[subject.id] || [];
      const exists = subjectList.includes(sectionKey);
      const updated = exists ? subjectList.filter(k => k !== sectionKey) : [...subjectList, sectionKey];
      const nextBookmarks = { ...prev, [subject.id]: updated };
      saveStoredParagraphBookmarks(nextBookmarks);
      pushCloudChange({ paragraphBookmarks: nextBookmarks });
      return nextBookmarks;
    });
  };

  // Jump via Table of Contents to a group and optionally a sub-page
  const handleSelectGroup = (groupIndex: number, targetRawPageNumber?: number) => {
    setCurrentPageIndex(groupIndex);
    if (targetRawPageNumber) {
      setTimeout(() => {
        const el = document.getElementById(`subpage-${targetRawPageNumber}`);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 120);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Location-Aware Annotated Text Renderer with robust interval-based non-overlapping slicing
  const renderAnnotatedText = (rawText: string, locationKey: string): React.ReactNode => {
    if (!rawText) return null;

    // Filter highlights that strictly belong to this locationKey
    const targetHighlights = currentPageHighlights.filter(h => {
      if (h.locationKey) {
        return h.locationKey === locationKey;
      }
      return false;
    });

    interface SegmentItem {
      start: number;
      end: number;
      text: string;
      highlight?: HighlightItem;
      isSearchMatch?: boolean;
    }

    // Step 1: Locate each highlight within rawText to find valid index ranges
    const highlightIntervals: { start: number; end: number; highlight: HighlightItem }[] = [];

    if (targetHighlights.length > 0) {
      targetHighlights.forEach(hl => {
        if (!hl.text) return;

        let startIdx = -1;
        const targetLen = hl.text.length;

        // Check if startOffset is precisely accurate
        if (
          typeof hl.startOffset === 'number' &&
          rawText.substring(hl.startOffset, hl.startOffset + targetLen).toLowerCase() === hl.text.toLowerCase()
        ) {
          startIdx = hl.startOffset;
        } else {
          // Find occurrence CLOSEST to hl.startOffset so duplicate words elsewhere never trigger wrong highlights
          const targetOffset = typeof hl.startOffset === 'number' ? hl.startOffset : 0;
          let bestIdx = -1;
          let minDiff = Infinity;
          let searchPos = 0;
          const searchKey = hl.text.toLowerCase();
          const lowerRaw = rawText.toLowerCase();

          while (true) {
            const foundPos = lowerRaw.indexOf(searchKey, searchPos);
            if (foundPos === -1) break;
            const diff = Math.abs(foundPos - targetOffset);
            if (diff < minDiff) {
              minDiff = diff;
              bestIdx = foundPos;
            }
            searchPos = foundPos + 1;
          }
          startIdx = bestIdx;
        }

        if (startIdx !== -1) {
          highlightIntervals.push({
            start: startIdx,
            end: startIdx + targetLen,
            highlight: hl,
          });
        }
      });
    }

    // Step 2: Sort intervals by start index
    highlightIntervals.sort((a, b) => a.start - b.start || b.end - a.end);

    // Step 3: Eliminate overlapping collision ranges (keep the earlier/larger highlight)
    const cleanIntervals: typeof highlightIntervals = [];
    let currentMaxEnd = 0;
    highlightIntervals.forEach(inv => {
      if (inv.start >= currentMaxEnd) {
        cleanIntervals.push(inv);
        currentMaxEnd = inv.end;
      }
    });

    // Step 4: Slices rawText once linearly without duplicating any sentences
    let segments: SegmentItem[] = [];
    let cursor = 0;

    cleanIntervals.forEach(inv => {
      if (inv.start > cursor) {
        segments.push({
          start: cursor,
          end: inv.start,
          text: rawText.substring(cursor, inv.start),
        });
      }
      segments.push({
        start: inv.start,
        end: inv.end,
        text: rawText.substring(inv.start, inv.end),
        highlight: inv.highlight,
      });
      cursor = inv.end;
    });

    if (cursor < rawText.length) {
      segments.push({
        start: cursor,
        end: rawText.length,
        text: rawText.substring(cursor),
      });
    }

    if (segments.length === 0) {
      segments.push({ start: 0, end: rawText.length, text: rawText });
    }

    // Step 5: Apply Search Query highlights to plain text segments if active
    if (searchQuery.trim().length > 1) {
      const q = searchQuery.toLowerCase();
      const searchSegments: SegmentItem[] = [];

      segments.forEach(seg => {
        if (seg.highlight || !seg.text) {
          searchSegments.push(seg);
          return;
        }

        let segCursor = 0;
        let sIdx = seg.text.toLowerCase().indexOf(q, segCursor);

        if (sIdx === -1) {
          searchSegments.push(seg);
          return;
        }

        while (sIdx !== -1) {
          if (sIdx > segCursor) {
            searchSegments.push({
              start: seg.start + segCursor,
              end: seg.start + sIdx,
              text: seg.text.substring(segCursor, sIdx),
            });
          }
          searchSegments.push({
            start: seg.start + sIdx,
            end: seg.start + sIdx + searchQuery.length,
            text: seg.text.substring(sIdx, sIdx + searchQuery.length),
            isSearchMatch: true,
          });
          segCursor = sIdx + searchQuery.length;
          sIdx = seg.text.toLowerCase().indexOf(q, segCursor);
        }

        if (segCursor < seg.text.length) {
          searchSegments.push({
            start: seg.start + segCursor,
            end: seg.end,
            text: seg.text.substring(segCursor),
          });
        }
      });

      segments = searchSegments;
    }

    return (
      <>
        {segments.map((seg, i) => {
          if (seg.highlight) {
            const config = HIGHLIGHT_COLORS[seg.highlight.color];
            const isTarget = targetHighlightId === seg.highlight.id;

            return (
              <span key={i} className="inline relative group/hl">
                <mark
                  id={`highlight-${seg.highlight.id}`}
                  data-highlight-id={seg.highlight.id}
                  onClick={(e) => {
                    e.stopPropagation();
                    const rect = e.currentTarget.getBoundingClientRect();
                    setActivePopover({
                      highlight: seg.highlight!,
                      position: { x: rect.left, y: rect.top, width: rect.width, height: rect.height }
                    });
                  }}
                  className={`cursor-pointer rounded-xs px-0.5 transition-all select-text ${config.bgClass} ${config.borderClass} border-b-2 ${
                    isTarget ? 'ring-2 ring-slate-900 ring-offset-1 font-semibold animate-pulse' : ''
                  }`}
                >
                  {seg.text}
                </mark>
                {seg.highlight.note && (
                  <span 
                    title={seg.highlight.note}
                    className="inline-block align-super text-[10px] bg-slate-900 text-white font-mono rounded px-1 ml-0.5 cursor-pointer font-bold select-none"
                  >
                    Note
                  </span>
                )}
              </span>
            );
          }

          if (seg.isSearchMatch) {
            return (
              <mark key={i} className="bg-amber-300 text-slate-950 px-0.5 rounded-xs font-semibold select-text">
                {seg.text}
              </mark>
            );
          }

          return <React.Fragment key={i}>{seg.text}</React.Fragment>;
        })}
      </>
    );
  };

  return (
    <div className={`min-h-screen bg-[#fffefc] text-slate-900 flex flex-col selection:bg-amber-200 selection:text-slate-900 ${
      isFocusMode ? 'focus-mode-active' : ''
    }`}>
      
      {/* ================= SUBSTACK TOP NAVIGATION BAR ================= */}
      <header className="sticky top-0 z-40 bg-[#fffefc]/95 backdrop-blur-md border-b border-slate-200/80 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-13 sm:h-16 flex items-center justify-between gap-2 sm:gap-3">
          
          {/* Back to Subject Directory */}
          <div className="flex items-center gap-1.5 sm:gap-3 min-w-0 flex-1">
            <button
              onClick={onBack}
              className="p-1.5 sm:p-2 -ml-1 rounded-full hover:bg-slate-100 text-slate-600 hover:text-slate-900 transition-colors cursor-pointer shrink-0"
              title="Return to Subject Directory"
            >
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            <div className="min-w-0 pr-1">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="text-[9px] sm:text-xs font-bold tracking-wider uppercase text-amber-700 font-sans shrink-0">
                  {subject.code}
                </span>
                <span className="text-slate-300 hidden sm:inline">•</span>
                <span className="text-[11px] font-sans font-medium text-slate-500 hidden sm:inline">
                  {hasPages ? `Page ${currentPageIndex + 1} of ${totalPages}` : subject.categoryLabel}
                </span>
              </div>
              <h2 className="font-serif text-xs sm:text-sm font-bold text-slate-950 truncate max-w-[170px] xs:max-w-[220px] sm:max-w-md">
                {subject.title}
              </h2>
            </div>
          </div>

          {/* Right Action Icons - Responsive */}
          <div className="flex items-center gap-1 sm:gap-2 shrink-0">
            
            {/* Quick Search */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-1.5 sm:p-2 rounded-lg text-slate-600 hover:text-slate-950 hover:bg-slate-100 transition-colors cursor-pointer"
              title="Search Lesson (Ctrl+F / Cmd+F)"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Table of Contents */}
            {hasPages && (
              <button
                onClick={() => setIsTocOpen(true)}
                className="p-1.5 sm:p-2 rounded-lg text-slate-600 hover:text-slate-950 hover:bg-slate-100 transition-colors cursor-pointer flex items-center gap-1.5"
                title="Table of Contents (P)"
              >
                <BookOpen className="w-4 h-4" />
                <span className="text-xs font-medium hidden md:inline">Contents</span>
              </button>
            )}

            {/* My Highlights & Notes Digest */}
            <button
              onClick={() => setIsDigestOpen(true)}
              className="relative p-1.5 sm:p-2 rounded-lg text-slate-600 hover:text-slate-950 hover:bg-slate-100 transition-colors cursor-pointer flex items-center gap-1 shrink-0"
              title="View My Highlights & Notes"
            >
              <Highlighter className="w-4 h-4 text-amber-600" />
              <span className="text-xs font-semibold text-amber-900 hidden md:inline">Highlights</span>
              {subjectHighlights.length > 0 && (
                <span className="px-1.5 py-0.2 rounded-full bg-amber-500 text-white font-mono text-[9px] font-bold">
                  {subjectHighlights.length}
                </span>
              )}
            </button>

            {/* Flashcards Review Mode (Desktop view) */}
            <button
              onClick={() => setIsFlashcardsModalOpen(true)}
              className="relative p-1.5 sm:p-2 rounded-lg text-slate-600 hover:text-slate-950 hover:bg-slate-100 transition-colors cursor-pointer hidden sm:flex items-center gap-1.5"
              title="Practice Flashcards"
            >
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span className="text-xs font-semibold text-amber-900 hidden md:inline">Cards</span>
              {flashcards.filter(c => c.subjectId === subject.id).length > 0 && (
                <span className="px-1.5 py-0.2 rounded-full bg-amber-500 text-white font-mono text-[9px] font-bold">
                  {flashcards.filter(c => c.subjectId === subject.id).length}
                </span>
              )}
            </button>

            {/* Try Exam 1-75 Item Simulator */}
            {onOpenExam && (
              <button
                onClick={() => onOpenExam(subject)}
                className="px-2 sm:px-2.5 py-1 sm:py-1.5 rounded-lg text-amber-900 bg-amber-50 hover:bg-amber-100/80 transition-colors cursor-pointer flex items-center gap-1 border border-amber-200/80 shrink-0"
                title="Launch 1–75 Item Exam Simulator"
              >
                <span className="text-[11px] sm:text-xs font-bold font-sans">Exam</span>
              </button>
            )}

            {/* Focus Mode Toggle (Desktop only) */}
            <button
              onClick={() => setIsFocusMode(prev => !prev)}
              className={`p-1.5 sm:p-2 rounded-lg transition-colors cursor-pointer hidden sm:inline-block ${
                isFocusMode ? 'bg-slate-900 text-white' : 'text-slate-600 hover:text-slate-950 hover:bg-slate-100'
              }`}
              title="Toggle Focus Dimming Mode (F)"
            >
              <Eye className="w-4 h-4" />
            </button>

            {/* Font Size Adjuster (Desktop only) */}
            <button
              onClick={() => {
                if (fontSize === 'normal') setFontSize('large');
                else if (fontSize === 'large') setFontSize('xlarge');
                else setFontSize('normal');
              }}
              className="p-1.5 sm:p-2 rounded-lg text-slate-600 hover:text-slate-950 hover:bg-slate-100 transition-colors cursor-pointer hidden sm:flex items-center gap-0.5"
              title="Adjust Reading Font Size"
            >
              <Type className="w-4 h-4" />
              <span className="text-[10px] font-mono font-bold uppercase">{fontSize === 'normal' ? '1x' : fontSize === 'large' ? '1.2x' : '1.4x'}</span>
            </button>

            {/* Subject Bookmark */}
            <button
              onClick={(e) => onToggleBookmark(subject.id, e)}
              className={`p-1.5 sm:p-2 rounded-lg transition-colors cursor-pointer shrink-0 ${
                progress.bookmarked ? 'text-amber-800 bg-amber-50' : 'text-slate-400 hover:text-slate-700 hover:bg-slate-100'
              }`}
              title={progress.bookmarked ? 'Remove Subject Bookmark' : 'Bookmark Subject'}
            >
              <Bookmark className={`w-4 h-4 ${progress.bookmarked ? 'fill-amber-800' : ''}`} />
            </button>

            {/* Keyboard Shortcuts Guide */}
            <button
              onClick={() => setIsShortcutsOpen(true)}
              className="p-1.5 sm:p-2 rounded-lg text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-colors cursor-pointer hidden md:inline-block"
              title="Keyboard Shortcuts (?)"
            >
              <HelpCircle className="w-4 h-4" />
            </button>
          </div>

        </div>
      </header>

      {/* ================= FLOATING HIGHLIGHTING TOOLBAR ================= */}
      <HighlightToolbar
        isHighlightMode={isHighlightMode}
        activeColor={activeHighlightColor}
        onColorChange={setActiveHighlightColor}
        onToggleHighlightMode={() => setIsHighlightMode(prev => !prev)}
        highlightCount={subjectHighlights.length}
        onOpenDigest={() => setIsDigestOpen(true)}
      />

      {/* ================= HIGHLIGHT CONTEXT POPOVER ================= */}
      {activePopover && (
        <HighlightPopover
          highlight={activePopover.highlight}
          position={activePopover.position}
          onUpdateColor={handleUpdateHighlightColor}
          onUpdateNote={handleUpdateHighlightNote}
          onDeleteHighlight={handleDeleteHighlight}
          onConvertToFlashcard={handleConvertToFlashcard}
          onClose={() => setActivePopover(null)}
        />
      )}

      {/* ================= INLINE SEARCH OVERLAY ================= */}
      <InlineSearchOverlay
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        matchCount={searchQuery ? 1 : 0}
        currentMatchIndex={currentMatchIndex}
        onNextMatch={() => setCurrentMatchIndex(prev => prev + 1)}
        onPrevMatch={() => setCurrentMatchIndex(prev => Math.max(0, prev - 1))}
      />

      {/* ================= TABLE OF CONTENTS DRAWER ================= */}
      <LessonTableOfContents
        isOpen={isTocOpen}
        onClose={() => setIsTocOpen(false)}
        pageGroups={pageGroups}
        currentPageIndex={currentPageIndex}
        onSelectGroup={handleSelectGroup}
        subjectTitle={subject.title}
        paragraphBookmarks={paragraphBookmarks}
        subjectId={subject.id}
      />

      {/* ================= MY HIGHLIGHTS DIGEST MODAL ================= */}
      <HighlightsDigestModal
        isOpen={isDigestOpen}
        onClose={() => setIsDigestOpen(false)}
        highlights={highlights}
        currentSubject={subject}
        onJumpToHighlight={handleJumpToHighlight}
        onDeleteHighlight={handleDeleteHighlight}
        onUpdateNote={handleUpdateHighlightNote}
      />

      {/* ================= FLASHCARDS MODAL ================= */}
      <FlashcardsModal
        isOpen={isFlashcardsModalOpen}
        onClose={() => setIsFlashcardsModalOpen(false)}
        flashcards={flashcards}
        currentSubject={subject}
        currentPageNumber={currentPageGroup ? currentPageGroup.displayPageNumber : 1}
        onDeleteFlashcard={(id) => setFlashcards(prev => prev.filter(c => c.id !== id))}
        onAddFlashcard={(newCard) => setFlashcards(prev => [newCard, ...prev])}
      />

      {/* ================= KEYBOARD SHORTCUTS MODAL ================= */}
      <KeyboardShortcutsModal
        isOpen={isShortcutsOpen}
        onClose={() => setIsShortcutsOpen(false)}
      />

      {/* ================= SUBSTACK ARTICLE CONTENT CONTAINER ================= */}
      <main 
        ref={articleContainerRef}
        onMouseUp={handleMouseUp}
        onTouchEnd={handleTouchEnd}
        className="flex-1 max-w-5xl xl:max-w-6xl w-full mx-auto px-3.5 sm:px-8 md:px-10 lg:px-12 pt-4 sm:pt-8 pb-28 sm:pb-12 select-text"
      >

        {/* ============================================================ */}
        {/* FLOATING HIGHLIGHT BUTTON (Mobile Phone View ONLY)           */}
        {/* Positioned below the word to avoid the native Android        */}
        {/* "Copy, Share, Select all" popup which appears above the word.*/}
        {/* On PC/Laptop (sm:), mouseup applies highlights immediately.  */}
        {/* ============================================================ */}
        {isHighlightMode && pendingSelection && (
          <div
            className="fixed z-[90] pointer-events-auto animate-fadeIn sm:hidden"
            style={{
              // Position 8px below the bottom of the selection
              top: `${Math.min(window.innerHeight - 80, (pendingSelection.rect.bottom || (pendingSelection.rect.top + 32)) + 8)}px`,
              left: `${Math.max(8, Math.min(window.innerWidth - 190, pendingSelection.rect.left + pendingSelection.rect.width / 2 - 90))}px`,
            }}
          >
            <button
              onMouseDown={(e) => { e.preventDefault(); e.stopPropagation(); applyPendingHighlight(); }}
              onTouchStart={(e) => { e.preventDefault(); e.stopPropagation(); applyPendingHighlight(); }}
              className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold text-slate-900 shadow-xl cursor-pointer border-2 border-white active:scale-95 transition-transform"
              style={{ backgroundColor: HIGHLIGHT_COLORS[activeHighlightColor]?.hex ?? '#fde047' }}
            >
              <Highlighter className="w-4 h-4" />
              <span>Highlight ✓</span>
            </button>
          </div>
        )}

        {/* If this subject has structured page groups */}
        {hasPages && currentPageGroup ? (
          <div className="space-y-8">
            
            {/* Main Frame Header Strip */}
            <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-slate-200 text-xs">
              <div className="flex items-center gap-2">
                <span className="font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 text-[10px]">
                  {currentPageGroup.displayDayTitle}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-slate-500 font-medium text-[11px]">
                  {currentPageGroup.totalEstimatedReadTime}
                </span>
                <span className="px-2.5 py-0.5 rounded-md bg-slate-900 text-white font-bold text-[11px]">
                  Page {currentPageGroup.displayPageNumber} of {totalPages}
                </span>
              </div>
            </div>

            {/* Frame Overview Title */}
            <div className="space-y-2">
              <h1 
                data-location-key={`frame-p${currentPageGroup.displayPageNumber}-title`}
                className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-950 leading-[1.2]"
              >
                {renderAnnotatedText(currentPageGroup.displayDayTitle, `frame-p${currentPageGroup.displayPageNumber}-title`)}
              </h1>
              <p className="text-xs text-slate-500 font-serif italic">
                {subject.title} • LET Examination Review
              </p>
            </div>

            {/* Author Row & Flag */}
            <div className="flex items-center justify-between py-3 border-y border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-slate-950 text-white flex items-center justify-center font-serif font-bold text-sm shrink-0">
                  L
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">Prepared for Langga</p>
                  <p className="text-[11px] text-slate-400">Board for Professional Teachers (BPT) Reference</p>
                </div>
              </div>

              <button
                onClick={() => toggleParagraphBookmark(`frame-p${currentPageGroup.displayPageNumber}-main`)}
                className={`p-1.5 rounded-lg border text-xs font-medium flex items-center gap-1 transition-colors cursor-pointer ${
                  (paragraphBookmarks[subject.id] || []).includes(`frame-p${currentPageGroup.displayPageNumber}-main`)
                    ? 'bg-amber-100 border-amber-300 text-amber-900 font-bold'
                    : 'border-slate-200 text-slate-500 hover:bg-slate-100'
                }`}
                title="Flag this page"
              >
                <Bookmark className={`w-3.5 h-3.5 ${
                  (paragraphBookmarks[subject.id] || []).includes(`frame-p${currentPageGroup.displayPageNumber}-main`) ? 'fill-amber-800' : ''
                }`} />
                <span className="hidden sm:inline">
                  {(paragraphBookmarks[subject.id] || []).includes(`frame-p${currentPageGroup.displayPageNumber}-main`) ? 'Flagged' : 'Flag Page'}
                </span>
              </button>
            </div>

            {/* Quick Topic Jumper Bar within this Page */}
            <div className="bg-slate-50/80 border border-slate-200/90 rounded-xl p-3 sm:p-4 space-y-2">
              <div className="flex items-center justify-between text-xs text-slate-600 font-sans">
                <span className="font-bold uppercase tracking-wider text-[11px] text-slate-800">
                  Topics in Page {currentPageGroup.displayPageNumber}:
                </span>
                <span className="text-[10px] font-mono text-slate-400 hidden sm:inline">
                  Click to jump
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {currentPageGroup.rawPages.map((subPage, topicIndex) => (
                  <button
                    key={subPage.pageNumber}
                    onClick={() => {
                      const el = document.getElementById(`subpage-${subPage.pageNumber}`);
                      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }}
                    className="flex items-center gap-2 p-2 rounded-lg bg-white border border-slate-200 hover:border-slate-400 hover:bg-slate-50 text-left transition-all cursor-pointer group shadow-2xs"
                  >
                    <span className="w-5 h-5 rounded-md bg-slate-900 text-white flex items-center justify-center text-[10px] font-bold shrink-0">
                      {topicIndex + 1}
                    </span>
                    <span className="text-xs font-serif font-semibold text-slate-800 truncate group-hover:text-slate-950">
                      {subPage.topicTitle}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* ================= RENDER ALL TOPIC SECTIONS SEQUENTIALLY ================= */}
            <div className="space-y-12">
              {currentPageGroup.rawPages.map((subPage, topicIndex) => {
                const isSubpageBookmarked = (paragraphBookmarks[subject.id] || []).includes(`p${subPage.pageNumber}-main`);

                return (
                  <section 
                    key={subPage.pageNumber} 
                    id={`subpage-${subPage.pageNumber}`}
                    className="space-y-6 pt-4 scroll-mt-20 relative"
                  >
                    {/* Topic Header & Divider Ribbon */}
                    <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b-2 border-slate-200 bg-white/50 pt-2">
                      <div className="flex items-center gap-2.5">
                        <span className="w-6 h-6 rounded-md bg-slate-950 text-white font-mono text-xs font-bold flex items-center justify-center shadow-2xs shrink-0">
                          {topicIndex + 1}
                        </span>
                        <h2 className="font-serif text-lg sm:text-xl font-bold text-slate-900">
                          {subPage.topicTitle}
                        </h2>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="text-xs text-slate-400 font-sans font-medium">
                          {subPage.readTime}
                        </span>
                        <button
                          onClick={() => toggleParagraphBookmark(`p${subPage.pageNumber}-main`)}
                          className={`p-1.5 rounded-md border text-xs flex items-center gap-1 transition-colors cursor-pointer ${
                            isSubpageBookmarked
                              ? 'bg-amber-100 border-amber-300 text-amber-900 font-bold'
                              : 'border-slate-200 text-slate-500 hover:bg-slate-100'
                          }`}
                          title="Flag this section"
                        >
                          <Bookmark className={`w-3.5 h-3.5 ${isSubpageBookmarked ? 'fill-amber-800' : ''}`} />
                          <span className="hidden sm:inline">
                            {isSubpageBookmarked ? 'Flagged' : 'Flag'}
                          </span>
                        </button>
                      </div>
                    </div>

                    {/* Page Content Sections */}
                    <article className={`space-y-6 font-serif leading-[1.8] text-slate-800 ${
                      fontSize === 'xlarge' ? 'text-xl sm:text-2xl' : fontSize === 'large' ? 'text-lg sm:text-xl' : 'text-base sm:text-lg'
                    }`}>
                      
                      {subPage.sections.map((sec, idx) => {
                        const sectionKey = `p${subPage.pageNumber}-sec${idx}`;
                        const isSectionBookmarked = (paragraphBookmarks[subject.id] || []).includes(sectionKey);

                        return (
                          <div 
                            key={idx} 
                            className={`space-y-3 transition-opacity duration-300 relative group/section ${
                              isFocusMode ? 'hover:opacity-100 focus-within:opacity-100 opacity-60' : 'opacity-100'
                            }`}
                          >
                            
                            {sec.heading && (
                              <div className="flex items-center justify-between gap-2 pt-2">
                                <h3 
                                  data-location-key={`${sectionKey}-heading`}
                                  className="font-serif text-xl sm:text-2xl font-bold text-slate-950 tracking-tight"
                                >
                                  {renderAnnotatedText(sec.heading, `${sectionKey}-heading`)}
                                </h3>

                                <button
                                  onClick={() => toggleParagraphBookmark(sectionKey)}
                                  className={`opacity-0 group-hover/section:opacity-100 p-1 rounded text-slate-300 hover:text-amber-700 transition-opacity cursor-pointer ${
                                    isSectionBookmarked ? 'opacity-100 text-amber-700' : ''
                                  }`}
                                  title={isSectionBookmarked ? 'Remove section bookmark' : 'Bookmark this section'}
                                >
                                  <Bookmark className={`w-4 h-4 ${isSectionBookmarked ? 'fill-amber-700 text-amber-700' : ''}`} />
                                </button>
                              </div>
                            )}

                            {sec.subheading && (
                              <h4 
                                data-location-key={`${sectionKey}-subheading`}
                                className="font-sans text-sm font-bold text-slate-700 uppercase tracking-wider"
                              >
                                {renderAnnotatedText(sec.subheading, `${sectionKey}-subheading`)}
                              </h4>
                            )}

                            {/* Text type */}
                            {sec.type === 'text' && sec.content && (
                              <div 
                                data-location-key={`${sectionKey}-content`}
                                className="text-slate-800 leading-relaxed whitespace-pre-line font-sans"
                              >
                                {renderAnnotatedText(sec.content, `${sectionKey}-content`)}
                              </div>
                            )}

                            {/* Callout type - Clean leading bullet symbols with standard callout display */}
                            {sec.type === 'callout' && (
                              <div className="border-l-4 border-slate-900 bg-[#f2f7f7] rounded-r-xl p-4 sm:p-5 my-4 font-sans text-sm sm:text-base space-y-3">
                                {sec.content && (
                                  <div 
                                    data-location-key={`${sectionKey}-callout-content`}
                                    className="text-slate-800 font-medium leading-relaxed whitespace-pre-line"
                                  >
                                    {renderAnnotatedText(sec.content, `${sectionKey}-callout-content`)}
                                  </div>
                                )}
                                {sec.items && (
                                  <ul className="space-y-2 text-slate-700">
                                    {sec.items.map((it, i) => {
                                      const cleanIt = cleanBulletText(it);
                                      return (
                                        <li 
                                          key={i} 
                                          data-location-key={`${sectionKey}-callout-item-${i}`}
                                          className="flex items-start gap-2 whitespace-pre-line"
                                        >
                                          <span className="text-slate-900 font-bold">•</span>
                                          <span>
                                            {renderAnnotatedText(cleanIt, `${sectionKey}-callout-item-${i}`)}
                                          </span>
                                        </li>
                                      );
                                    })}
                                  </ul>
                                )}
                              </div>
                            )}

                            {/* Quote type */}
                            {sec.type === 'quote' && sec.content && (
                              <blockquote 
                                data-location-key={`${sectionKey}-quote`}
                                className="border-l-4 border-amber-600 pl-5 py-2 my-4 italic text-slate-900 bg-amber-50/40 rounded-r-lg font-serif whitespace-pre-line"
                              >
                                &ldquo;{renderAnnotatedText(sec.content, `${sectionKey}-quote`)}&rdquo;
                              </blockquote>
                            )}

                            {/* Bullet list type - Sanitized with cleanBulletText */}
                            {sec.type === 'bullet_list' && sec.items && (
                              <ul className="space-y-2.5 my-2">
                                {sec.items.map((item, i) => {
                                  const cleanItem = cleanBulletText(item);
                                  return (
                                    <li 
                                      key={i} 
                                      data-location-key={`${sectionKey}-bullet-${i}`}
                                      className="flex items-start gap-2.5 whitespace-pre-line"
                                    >
                                      <span className="w-1.5 h-1.5 rounded-full bg-slate-900 mt-3 shrink-0" />
                                      <span className="leading-relaxed">
                                        {renderAnnotatedText(cleanItem, `${sectionKey}-bullet-${i}`)}
                                      </span>
                                    </li>
                                  );
                                })}
                              </ul>
                            )}

                            {/* Numbered list type - Sanitized with cleanNumberedText */}
                            {sec.type === 'numbered_list' && sec.items && (
                              <div className="space-y-2.5 my-2">
                                {sec.items.map((item, i) => {
                                  const cleanItem = cleanNumberedText(item);
                                  return (
                                    <div 
                                      key={i} 
                                      data-location-key={`${sectionKey}-numbered-${i}`}
                                      className="p-3.5 rounded-xl border border-slate-200 bg-white font-sans text-sm sm:text-base text-slate-800 flex items-start gap-3 shadow-2xs whitespace-pre-line"
                                    >
                                      <span className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                                        {i + 1}
                                      </span>
                                      <span className="leading-relaxed font-medium">
                                        {renderAnnotatedText(cleanItem, `${sectionKey}-numbered-${i}`)}
                                      </span>
                                    </div>
                                  );
                                })}
                              </div>
                            )}

                            {/* Comparison type */}
                            {sec.type === 'comparison' && sec.items && (
                              <div className="space-y-3 font-sans my-2">
                                {sec.items.map((item, i) => {
                                  const cleanItem = cleanBulletText(item);
                                  return (
                                    <div 
                                      key={i} 
                                      data-location-key={`${sectionKey}-comparison-${i}`}
                                      className="p-4 rounded-xl border border-slate-200/90 bg-white text-sm sm:text-base text-slate-800 space-y-1 shadow-2xs whitespace-pre-line"
                                    >
                                      <p className="leading-relaxed font-medium">
                                        {renderAnnotatedText(cleanItem, `${sectionKey}-comparison-${i}`)}
                                      </p>
                                    </div>
                                  );
                                })}
                              </div>
                            )}

                            {/* Table type */}
                            {sec.type === 'table' && sec.tableData && (
                              <div className="overflow-x-auto my-4 rounded-xl border border-slate-200 bg-white shadow-2xs font-sans text-xs sm:text-sm">
                                <table className="w-full text-left border-collapse">
                                  <thead>
                                    <tr className="bg-slate-900 text-white">
                                      {sec.tableData.headers.map((h, i) => (
                                        <th 
                                          key={i} 
                                          data-location-key={`${sectionKey}-table-head-${i}`}
                                          className="p-3 sm:p-3.5 font-bold uppercase tracking-wider text-[11px] border-b border-slate-800"
                                        >
                                          {renderAnnotatedText(h, `${sectionKey}-table-head-${i}`)}
                                        </th>
                                      ))}
                                    </tr>
                                  </thead>
                                  <tbody className="divide-y divide-slate-100">
                                    {sec.tableData.rows.map((row, rIdx) => (
                                      <tr key={rIdx} className="hover:bg-slate-50/80 transition-colors">
                                        {row.map((cell, cIdx) => (
                                          <td 
                                            key={cIdx} 
                                            data-location-key={`${sectionKey}-table-${rIdx}-${cIdx}`}
                                            className="p-3 sm:p-3.5 align-top text-slate-700 leading-relaxed font-normal whitespace-pre-line"
                                          >
                                            {renderAnnotatedText(cell, `${sectionKey}-table-${rIdx}-${cIdx}`)}
                                          </td>
                                        ))}
                                      </tr>
                                    ))}
                                  </tbody>
                                </table>
                              </div>
                            )}

                          </div>
                        );
                      })}

                    </article>
                  </section>
                );
              })}
            </div>

            {/* ================= BOTTOM PAGINATION CONTROLS ================= */}
            <div className="pt-8 mt-12 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              
              {/* Previous Page Button */}
              <button
                onClick={handlePrevPage}
                disabled={currentPageIndex === 0}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm font-serif font-bold text-slate-700 hover:text-slate-950 hover:bg-white hover:border-slate-400 disabled:opacity-30 disabled:pointer-events-none transition-all cursor-pointer shadow-2xs"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous Page</span>
              </button>

              {/* Center Page Indicator & Shortcut Hint */}
              <div className="flex flex-col items-center text-center">
                <span className="text-xs sm:text-sm font-serif font-bold text-slate-900">
                  Page {currentPageIndex + 1} of {totalPages}
                </span>
                <button
                  onClick={() => setIsTocOpen(true)}
                  className="mt-0.5 text-[11px] sm:text-xs text-slate-500 hover:text-slate-900 transition-colors cursor-pointer inline-flex items-center gap-1 font-sans group"
                  title="Open Table of Contents / Jump to Page"
                >
                  <span>(Press</span>
                  <kbd className="px-1.5 py-0.5 bg-slate-100 border border-slate-300 rounded font-mono font-bold text-slate-800 text-[10px] shadow-2xs group-hover:border-slate-400 group-hover:bg-white">
                    P
                  </kbd>
                  <span>to Navigate Pages)</span>
                </button>
              </div>

              {/* Next Page Button */}
              <button
                onClick={handleNextPage}
                disabled={currentPageIndex === totalPages - 1}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-slate-950 text-white text-xs sm:text-sm font-serif font-bold hover:bg-slate-800 disabled:opacity-30 disabled:pointer-events-none transition-all cursor-pointer shadow-xs"
              >
                <span>Next Page</span>
                <ChevronRight className="w-4 h-4" />
              </button>

            </div>

          </div>
        ) : (
          /* Fallback view if subject hasn't been populated with structured pages yet */
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-slate-950">
                {subject.title}
              </h1>
              <p className="text-xs text-slate-500 font-serif italic">
                {subject.categoryLabel} • Examination Competencies
              </p>
            </div>

            <div className="rounded-xl overflow-hidden border border-slate-200/80 bg-slate-100">
              <img
                src={subject.coverImage}
                alt={subject.title}
                referrerPolicy="no-referrer"
                className="w-full aspect-[16/9] object-cover"
              />
            </div>

            <div className="space-y-4 font-serif leading-[1.8] text-slate-800">
              <h2 className="font-serif text-2xl font-bold text-slate-950 pt-2">
                Structured Competency Units ({subject.outlinePlaceholders.length})
              </h2>
              <div className="space-y-2.5 font-sans">
                {subject.outlinePlaceholders.map((topic, i) => (
                  <div key={i} className="p-3.5 rounded-lg border border-slate-200 bg-white flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-bold">
                        {i + 1}
                      </span>
                      <span className="font-medium text-slate-900 text-sm">{topic}</span>
                    </div>
                    <span className="text-xs text-slate-400 italic">Ready for PDF notes</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ================= INTERACTIVE STUDY NOTES FOR LANGGA ================= */}
        <section className="mt-12 pt-8 border-t border-slate-200 font-sans space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-950">
                Langga's Study Notes & Mnemonics
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Type your personal summaries and review reminders for {subject.title} below.
              </p>
            </div>
            {savedNotification && (
              <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full flex items-center gap-1 border border-emerald-200 animate-pulse">
                <Check className="w-3.5 h-3.5" /> Notes Saved Locally!
              </span>
            )}
          </div>

          <div className="space-y-3">
            <textarea
              rows={6}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder={`Write your review takeaways, mnemonics, or pointers for ${subject.title} here...`}
              className="w-full p-4 text-sm sm:text-base font-serif bg-white border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 placeholder:font-sans focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-all leading-relaxed shadow-2xs"
            />
            <div className="flex justify-between items-center">
              <span className="text-xs text-slate-400 font-sans">
                {notes.trim().length > 0 ? `${notes.trim().split(/\s+/).length} words` : 'Empty note'}
              </span>
              <button
                onClick={handleSaveNotes}
                className="px-5 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg shadow-xs flex items-center gap-2 transition-all cursor-pointer font-sans"
              >
                <Save className="w-3.5 h-3.5" />
                <span>Save Notes</span>
              </button>
            </div>
          </div>
        </section>

        {/* ================= PREVIOUS / NEXT SUBJECT FOOTER NAVIGATION ================= */}
        <div className="mt-8 pt-6 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {prevSubject ? (
            <button
              onClick={() => {
                onSelectSubject(prevSubject);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="p-4 rounded-xl border border-slate-200 hover:border-slate-400 bg-white text-left transition-all group flex items-center gap-3 cursor-pointer shadow-2xs"
            >
              <ChevronLeft className="w-5 h-5 text-slate-400 group-hover:text-slate-900 group-hover:-translate-x-0.5 transition-all shrink-0" />
              <div className="overflow-hidden">
                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">
                  Previous Subject
                </span>
                <span className="font-serif font-bold text-sm text-slate-900 truncate block group-hover:text-slate-700">
                  {prevSubject.title}
                </span>
              </div>
            </button>
          ) : <div />}

          {nextSubject && (
            <button
              onClick={() => {
                onSelectSubject(nextSubject);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="p-4 rounded-xl border border-slate-200 hover:border-slate-400 bg-white text-right transition-all group flex items-center justify-end gap-3 cursor-pointer shadow-2xs sm:col-start-2"
            >
              <div className="overflow-hidden">
                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">
                  Next Subject
                </span>
                <span className="font-serif font-bold text-sm text-slate-900 truncate block group-hover:text-slate-700">
                  {nextSubject.title}
                </span>
              </div>
              <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-slate-900 group-hover:translate-x-0.5 transition-all shrink-0" />
            </button>
          )}
        </div>

      </main>

      {/* ================= MOBILE BOTTOM FLOATING READING BAR ================= */}
      <div className="sm:hidden fixed bottom-3 left-3 right-3 z-30 bg-slate-950/95 text-white backdrop-blur-md rounded-2xl shadow-2xl px-3 py-2 border border-slate-800 flex items-center justify-between gap-1">
        
        {/* Previous Page */}
        <button
          onClick={handlePrevPage}
          disabled={!hasPages || currentPageIndex === 0}
          className="p-2 rounded-xl text-slate-300 hover:text-white active:bg-slate-800 disabled:opacity-20 disabled:pointer-events-none transition-colors cursor-pointer shrink-0"
          title="Previous Page"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {/* Page Jump / Table of Contents Pill */}
        {hasPages ? (
          <button
            onClick={() => setIsTocOpen(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 active:bg-white/25 transition-colors cursor-pointer text-xs font-semibold shrink-0"
          >
            <BookOpen className="w-3.5 h-3.5 text-amber-400" />
            <span className="font-mono text-[11px] text-amber-200">
              {currentPageIndex + 1}/{totalPages}
            </span>
          </button>
        ) : (
          <span className="text-[11px] text-slate-400 font-medium">Notes</span>
        )}

        {/* Highlight Mode Toggle */}
        <button
          onClick={() => setIsHighlightMode(prev => !prev)}
          className={`flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
            isHighlightMode
              ? 'bg-amber-400 text-slate-950 shadow-xs'
              : 'bg-white/10 hover:bg-white/20 text-slate-200'
          }`}
          title="Toggle Highlighting Mode"
        >
          <Highlighter className="w-3.5 h-3.5" />
          <span className="text-[11px]">{isHighlightMode ? 'Highlighting' : 'Highlight'}</span>
        </button>

        {/* My Highlights Digest Button */}
        <button
          onClick={() => setIsDigestOpen(true)}
          className={`relative p-2 rounded-xl transition-colors cursor-pointer shrink-0 ${
            subjectHighlights.length > 0
              ? 'text-amber-400 bg-amber-400/15 active:bg-amber-400/25'
              : 'text-slate-300 hover:text-white active:bg-slate-800'
          }`}
          title="View My Highlights & Notes"
        >
          <Highlighter className="w-4 h-4 text-amber-300" />
          {subjectHighlights.length > 0 && (
            <span className="absolute -top-1 -right-1 px-1 min-w-[15px] h-3.5 bg-amber-400 text-slate-950 rounded-full font-mono text-[9px] font-bold flex items-center justify-center">
              {subjectHighlights.length}
            </span>
          )}
        </button>

        {/* Flashcards */}
        <button
          onClick={() => setIsFlashcardsModalOpen(true)}
          className="relative p-2 rounded-xl text-slate-200 hover:text-white active:bg-slate-800 transition-colors cursor-pointer shrink-0"
          title="Open Flashcards"
        >
          <Sparkles className="w-4 h-4 text-amber-400" />
          {flashcards.filter(c => c.subjectId === subject.id).length > 0 && (
            <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-amber-400" />
          )}
        </button>

        {/* Font Size Adjuster */}
        <button
          onClick={() => {
            if (fontSize === 'normal') setFontSize('large');
            else if (fontSize === 'large') setFontSize('xlarge');
            else setFontSize('normal');
          }}
          className="p-2 rounded-xl text-slate-300 hover:text-white active:bg-slate-800 transition-colors cursor-pointer shrink-0 font-mono text-[11px] font-bold uppercase"
          title="Adjust Font Size"
        >
          {fontSize === 'normal' ? '1x' : fontSize === 'large' ? '1.2x' : '1.4x'}
        </button>

        {/* Next Page */}
        <button
          onClick={handleNextPage}
          disabled={!hasPages || currentPageIndex === totalPages - 1}
          className="p-2 rounded-xl text-slate-300 hover:text-white active:bg-slate-800 disabled:opacity-20 disabled:pointer-events-none transition-colors cursor-pointer shrink-0"
          title="Next Page"
        >
          <ChevronRight className="w-4 h-4" />
        </button>

      </div>

    </div>
  );
};
