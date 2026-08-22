import React from 'react';
import { X, Command } from 'lucide-react';

interface KeyboardShortcutsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const KeyboardShortcutsModal: React.FC<KeyboardShortcutsModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  const shortcuts = [
    { key: 'H', desc: 'Toggle Highlight Mode ON / OFF' },
    { key: 'Esc', desc: 'Exit Highlight Mode, search, or active modal' },
    { key: '1, 2, 3, 4', desc: 'Switch highlight color (Yellow, Green, Pink, Blue)' },
    { key: 'Cmd / Ctrl + F', desc: 'Search keywords inside the current lesson' },
    { key: 'F', desc: 'Toggle Focus Mode (dim non-active paragraphs)' },
    { key: 'D', desc: 'Open My Highlights & Notes Digest' },
    { key: 'P', desc: 'Jump to Page / Table of Contents' },
    { key: '?', desc: 'Show this keyboard shortcuts guide' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xs animate-fadeIn">
      <div className="bg-white rounded-2xl border border-slate-200 shadow-2xl max-w-md w-full overflow-hidden">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/80">
          <div className="flex items-center gap-2">
            <Command className="w-4 h-4 text-slate-700" />
            <h3 className="font-serif text-base font-bold text-slate-900">
              Keyboard Shortcuts
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-200/50 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Shortcuts List */}
        <div className="p-6 divide-y divide-slate-100 text-xs">
          {shortcuts.map((s, idx) => (
            <div key={idx} className="py-2.5 first:pt-0 last:pb-0 flex items-center justify-between">
              <span className="text-slate-600">{s.desc}</span>
              <kbd className="px-2 py-1 bg-slate-100 border border-slate-200 rounded font-mono font-semibold text-slate-800 shadow-2xs">
                {s.key}
              </kbd>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-slate-100 bg-slate-50 text-[11px] text-slate-500 text-center">
          Designed for frictionless, high-retention board exam review.
        </div>
      </div>
    </div>
  );
};
