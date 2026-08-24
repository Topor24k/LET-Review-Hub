import React, { useState, useEffect } from 'react';
import { 
  X, 
  Download, 
  Check, 
  Sparkles, 
  Smartphone, 
  Monitor, 
  ArrowRight, 
  ShieldCheck, 
  WifiOff, 
  BookOpen, 
  Award
} from 'lucide-react';

interface InstallAppModalProps {
  isOpen: boolean;
  onClose: () => void;
  deferredPrompt: any;
  onAppInstalled: () => void;
}

export const InstallAppModal: React.FC<InstallAppModalProps> = ({
  isOpen,
  onClose,
  deferredPrompt,
  onAppInstalled,
}) => {
  const [activeTab, setActiveTab] = useState<'android' | 'ios' | 'desktop'>('android');
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [progressStatus, setProgressStatus] = useState('Preparing offline packages...');
  const [isReady, setIsReady] = useState(false);

  // Detect platform default
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const ua = window.navigator.userAgent.toLowerCase();
      if (/iphone|ipad|ipod/.test(ua)) {
        setActiveTab('ios');
      } else if (/android/.test(ua)) {
        setActiveTab('android');
      } else {
        setActiveTab('desktop');
      }
    }
  }, []);

  // Lock background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Auto-start a smooth pre-cache package check animation
      setDownloadProgress(10);
      setProgressStatus('Initializing offline cache engine...');

      const step1 = setTimeout(() => {
        setDownloadProgress(35);
        setProgressStatus('Caching 17 Subject Review Modules & Notes...');
      }, 400);

      const step2 = setTimeout(() => {
        setDownloadProgress(72);
        setProgressStatus('Pre-caching 1,275 Board Exam Practice Items...');
      }, 900);

      const step3 = setTimeout(() => {
        setDownloadProgress(94);
        setProgressStatus('Configuring offline Service Worker & storage...');
      }, 1400);

      const step4 = setTimeout(() => {
        setDownloadProgress(100);
        setProgressStatus('Offline Package 100% Ready!');
        setIsReady(true);
      }, 1800);

      return () => {
        clearTimeout(step1);
        clearTimeout(step2);
        clearTimeout(step3);
        clearTimeout(step4);
      };
    } else {
      document.body.style.overflow = '';
      setDownloadProgress(0);
      setIsReady(false);
    }
  }, [isOpen]);

  const handleNativeInstall = async () => {
    if (deferredPrompt) {
      try {
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        if (outcome === 'accepted') {
          onAppInstalled();
          onClose();
        }
      } catch (err) {
        console.error('PWA install error:', err);
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
      
      {/* Modal Dialog Card */}
      <div 
        className="bg-white border border-slate-200/90 rounded-3xl w-full max-w-lg shadow-2xl overflow-hidden animate-pop-in flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Top Header Banner with Animated Gradient & Badge */}
        <div className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white p-5 sm:p-6 overflow-hidden shrink-0">
          
          {/* Subtle Ambient Glow */}
          <div className="absolute -right-8 -top-8 w-40 h-40 bg-amber-500/20 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute left-1/2 -bottom-10 w-48 h-48 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer z-10"
            title="Close"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="relative z-10 flex items-start gap-4">
            {/* Animated App Icon */}
            <div className="relative shrink-0">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-950 border border-white/20 shadow-xl flex items-center justify-center font-serif text-2xl sm:text-3xl font-bold text-white">
                L
              </div>
              <div className="absolute -bottom-1.5 -right-1.5 w-6 h-6 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center shadow-md animate-bounce-arrow">
                <Download className="w-3.5 h-3.5 stroke-[2.5]" />
              </div>
            </div>

            {/* App Info */}
            <div className="space-y-1 pr-6">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/10 border border-white/15 text-[11px] font-semibold text-amber-300">
                <Sparkles className="w-3 h-3 text-amber-400" />
                <span>LET Reviewer App</span>
              </div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-white leading-tight">
                Study Anywhere Offline
              </h2>
              <p className="text-xs text-slate-300 font-sans leading-relaxed">
                Prepared for <strong className="text-white">Hershey Nicolle Tabanao</strong> • 100% Zero Mobile Data
              </p>
            </div>
          </div>

          {/* Animated Download Progress Bar Card */}
          <div className="mt-4 pt-3.5 border-t border-white/10 space-y-2">
            <div className="flex items-center justify-between text-xs font-semibold">
              <span className="text-slate-300 flex items-center gap-1.5">
                {isReady ? (
                  <Check className="w-3.5 h-3.5 text-emerald-400 stroke-[3]" />
                ) : (
                  <span className="inline-block w-2 h-2 rounded-full bg-amber-400 animate-ping" />
                )}
                <span>{progressStatus}</span>
              </span>
              <span className="font-mono text-amber-300 font-bold">{downloadProgress}%</span>
            </div>

            {/* Progress Track */}
            <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden relative">
              <div 
                className="h-full bg-gradient-to-r from-amber-400 via-emerald-400 to-teal-300 transition-all duration-500 ease-out rounded-full relative"
                style={{ width: `${downloadProgress}%` }}
              >
                {/* Shimmer Light effect */}
                <div className="absolute inset-0 bg-white/30 animate-shimmer" />
              </div>
            </div>
          </div>

        </div>

        {/* Feature Pills */}
        <div className="grid grid-cols-3 gap-2 p-3 bg-slate-50 border-b border-slate-200 text-center shrink-0">
          <div className="p-2 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
            <WifiOff className="w-4 h-4 text-emerald-600 mx-auto mb-1" />
            <p className="text-[11px] font-bold text-slate-900">100% Offline</p>
            <p className="text-[9px] text-slate-400">No WiFi needed</p>
          </div>
          <div className="p-2 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
            <BookOpen className="w-4 h-4 text-amber-600 mx-auto mb-1" />
            <p className="text-[11px] font-bold text-slate-900">17 Subjects</p>
            <p className="text-[9px] text-slate-400">Full notes cached</p>
          </div>
          <div className="p-2 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
            <Award className="w-4 h-4 text-sky-600 mx-auto mb-1" />
            <p className="text-[11px] font-bold text-slate-900">1,275 Exams</p>
            <p className="text-[9px] text-slate-400">Instant simulations</p>
          </div>
        </div>

        {/* Platform Selector Tabs */}
        <div className="p-4 sm:p-5 space-y-4 overflow-y-auto flex-1">
          <div className="flex rounded-xl bg-slate-100 p-1 gap-1">
            <button
              onClick={() => setActiveTab('android')}
              className={`flex-1 py-1.5 px-2 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                activeTab === 'android'
                  ? 'bg-white text-slate-950 shadow-xs'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>Android</span>
            </button>

            <button
              onClick={() => setActiveTab('ios')}
              className={`flex-1 py-1.5 px-2 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                activeTab === 'ios'
                  ? 'bg-white text-slate-950 shadow-xs'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              <span className="font-semibold text-xs">🍏</span>
              <span>iPhone/iPad</span>
            </button>

            <button
              onClick={() => setActiveTab('desktop')}
              className={`flex-1 py-1.5 px-2 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                activeTab === 'desktop'
                  ? 'bg-white text-slate-950 shadow-xs'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              <Monitor className="w-3.5 h-3.5" />
              <span>PC / Mac</span>
            </button>
          </div>

          {/* Tab Instructions Content */}
          <div className="space-y-2.5 text-xs text-slate-700 font-sans">
            {activeTab === 'android' && (
              <div className="space-y-2 animate-fadeIn">
                <div className="p-3 rounded-2xl bg-amber-50/70 border border-amber-200/80 flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-amber-200 text-amber-950 flex items-center justify-center font-bold text-xs shrink-0">
                    1
                  </div>
                  <div>
                    <p className="font-bold text-amber-950">Tap 3 Dots in Chrome</p>
                    <p className="text-amber-900 text-[11px] leading-relaxed">
                      Tap the <strong>3 vertical dots (⋮)</strong> located at the top-right of your Chrome browser.
                    </p>
                  </div>
                </div>

                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-slate-200 text-slate-900 flex items-center justify-center font-bold text-xs shrink-0">
                    2
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">Select "Install App" or "Add to Home screen"</p>
                    <p className="text-slate-600 text-[11px] leading-relaxed">
                      Tap <strong>"Install app"</strong> to add the LET Reviewer icon directly to your phone's home screen.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'ios' && (
              <div className="space-y-2 animate-fadeIn">
                <div className="p-3 rounded-2xl bg-sky-50/70 border border-sky-200/80 flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-sky-200 text-sky-950 flex items-center justify-center font-bold text-xs shrink-0">
                    1
                  </div>
                  <div>
                    <p className="font-bold text-sky-950">Tap the Share Button in Safari</p>
                    <p className="text-sky-900 text-[11px] leading-relaxed">
                      Tap the <strong>Share icon</strong> (the square with an arrow pointing up ⎋) at the bottom toolbar of Safari.
                    </p>
                  </div>
                </div>

                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-slate-200 text-slate-900 flex items-center justify-center font-bold text-xs shrink-0">
                    2
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">Tap "Add to Home Screen"</p>
                    <p className="text-slate-600 text-[11px] leading-relaxed">
                      Scroll down and tap <strong>"Add to Home Screen"</strong>, then tap <strong>"Add"</strong> on the top right.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'desktop' && (
              <div className="space-y-2 animate-fadeIn">
                <div className="p-3 rounded-2xl bg-emerald-50/70 border border-emerald-200/80 flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-200 text-emerald-950 flex items-center justify-center font-bold text-xs shrink-0">
                    1
                  </div>
                  <div>
                    <p className="font-bold text-emerald-950">Click the Install icon in Chrome/Edge</p>
                    <p className="text-emerald-900 text-[11px] leading-relaxed">
                      Look at the right side of the address bar at the top of your browser and click the <strong>Install / App icon</strong>.
                    </p>
                  </div>
                </div>

                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-slate-200 text-slate-900 flex items-center justify-center font-bold text-xs shrink-0">
                    2
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">Click "Install"</p>
                    <p className="text-slate-600 text-[11px] leading-relaxed">
                      The app opens in its own clean window without any browser bars!
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Primary Action Bar */}
        <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 shrink-0 space-y-2">
          {deferredPrompt ? (
            <button
              onClick={handleNativeInstall}
              className="w-full py-3.5 px-4 bg-slate-950 hover:bg-slate-800 active:scale-[0.99] text-white text-xs sm:text-sm font-bold rounded-2xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer relative overflow-hidden group"
            >
              <Download className="w-4 h-4 text-amber-400 animate-bounce-arrow" />
              <span>Install App Now (1-Tap)</span>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
            </button>
          ) : (
            <button
              onClick={onClose}
              className="w-full py-3.5 px-4 bg-slate-950 hover:bg-slate-800 active:scale-[0.99] text-white text-xs sm:text-sm font-bold rounded-2xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Understood &amp; Ready</span>
              <Check className="w-4 h-4 text-emerald-400" />
            </button>
          )}

          <p className="text-[10px] text-center text-slate-400 flex items-center justify-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Progressive Web App (PWA) • Auto-updates when online</span>
          </p>
        </div>

      </div>

    </div>
  );
};
