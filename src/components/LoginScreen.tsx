import React, { useState } from 'react';
import { Lock, User, ArrowRight, Eye, EyeOff, Heart, Sparkles } from 'lucide-react';

interface LoginScreenProps {
  onLoginSuccess: () => void;
}

export const LoginScreen: React.FC<LoginScreenProps> = ({ onLoginSuccess }) => {
  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    const normName = fullName.trim().toLowerCase().replace(/\s+/g, ' ');
    const normPass = password.trim().toLowerCase().replace(/\s+/g, '');

    if (!normName && !normPass) {
      setErrorMsg('Please enter your full name and password.');
      return;
    }

    if (!normName) {
      setErrorMsg('Please enter your full name.');
      return;
    }

    if (!normPass) {
      setErrorMsg('Please enter your password.');
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      const isNameValid = 
        normName === 'hershey nicolle tabanao' || 
        normName === 'hershey tabanao' ||
        normName === 'hershey nicolle' ||
        normName === 'hershey' ||
        normName === 'langga';

      const isPassValid = normPass === 'iloveyou';

      if (!isNameValid) {
        setErrorMsg('Please enter your authorized name (Hershey Nicolle Tabanao).');
        setIsLoading(false);
        return;
      }

      if (!isPassValid) {
        setErrorMsg('Incorrect password. Please try again.');
        setIsLoading(false);
        return;
      }

      if (rememberMe) {
        try {
          localStorage.setItem('let_reviewer_authenticated', 'true');
          localStorage.setItem('let_reviewer_user_name', 'Hershey Nicolle Tabanao');
        } catch (e) {
          console.error(e);
        }
      }
      onLoginSuccess();
    }, 350);
  };

  return (
    <div className="min-h-screen bg-[#faf9f6] text-slate-900 flex flex-col justify-between items-center p-4 sm:p-6 lg:p-8 animate-fadeIn">
      
      {/* Top Header Bar */}
      <header className="w-full max-w-5xl flex items-center justify-between py-2">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 bg-slate-950 text-white flex items-center justify-center font-serif text-lg font-bold rounded-xs shadow-xs">
            L
          </div>
          <div>
            <span className="font-serif text-xl font-bold tracking-tight text-slate-950 block leading-none">
              LET Reviewer<span className="text-amber-700">.</span>
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-400 block mt-0.5">
              Licensure Exam Portal
            </span>
          </div>
        </div>
      </header>

      {/* Main Login Card Container */}
      <main className="w-full max-w-md my-auto py-8">
        <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
          
          {/* Title & Description */}
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200/70 text-amber-900 text-xs font-semibold mb-1">
              <Sparkles className="w-3.5 h-3.5 text-amber-700" />
              <span>Dedicated LET Portal</span>
            </div>
            <h1 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-slate-950">
              Welcome, Hershey
            </h1>

            <p className="text-xs sm:text-sm text-slate-500 font-serif leading-relaxed max-w-xs mx-auto">
              Your private review portal for the Licensure Examination for Teachers. Sign in to access your modules &amp; exams.
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Full Name Input */}
            <div className="space-y-1.5">
              <label 
                htmlFor="fullName" 
                className="block text-xs font-bold uppercase tracking-wider text-slate-700 font-sans"
              >
                Full Name
              </label>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <User className="w-4 h-4" />
                </div>

                <input
                  id="fullName"
                  type="text"
                  value={fullName}
                  onChange={(e) => {
                    setFullName(e.target.value);
                    if (errorMsg) setErrorMsg('');
                  }}
                  placeholder="Enter your full name..."
                  autoFocus
                  autoComplete="name"
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-50/50 hover:bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm placeholder:text-slate-400 focus:bg-white focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-all font-sans"
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="space-y-1.5">
              <label 
                htmlFor="password" 
                className="block text-xs font-bold uppercase tracking-wider text-slate-700 font-sans"
              >
                Password
              </label>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Lock className="w-4 h-4" />
                </div>

                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    if (errorMsg) setErrorMsg('');
                  }}
                  placeholder="Enter your password..."
                  autoComplete="current-password"
                  className="w-full pl-10 pr-10 py-2.5 bg-slate-50/50 hover:bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm placeholder:text-slate-400 focus:bg-white focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-all font-sans"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(prev => !prev)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-700 transition-colors cursor-pointer"
                  title={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>

              {errorMsg ? (
                <p className="text-xs text-rose-600 font-medium pt-1 animate-fadeIn">
                  {errorMsg}
                </p>
              ) : (
                <p className="text-[11px] text-slate-400 pt-0.5 flex items-center justify-between">
                  <span>Single-user authorized portal</span>
                  <span>100% Private</span>
                </p>
              )}
            </div>

            {/* Remember Me Option */}
            <div className="flex items-center justify-between pt-1">
              <label className="flex items-center gap-2 cursor-pointer text-xs text-slate-600 font-medium">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded border-slate-300 text-slate-900 focus:ring-slate-900 accent-slate-900 cursor-pointer"
                />
                <span>Keep me signed in</span>
              </label>

              <span className="text-[11px] text-slate-400 italic">
                Local session
              </span>
            </div>

            {/* Unlock Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 px-4 bg-slate-950 hover:bg-slate-800 active:scale-[0.99] text-white text-xs sm:text-sm font-semibold rounded-xl shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer font-sans disabled:opacity-70"
            >
              {isLoading ? (
                <span>Signing In...</span>
              ) : (
                <>
                  <span>Sign In to Reviewer</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>

          </form>

          {/* Gentle Motivational Quote */}
          <div className="pt-4 border-t border-slate-100 text-center space-y-1">
            <div className="flex items-center justify-center gap-1.5 text-xs text-amber-900 font-serif italic">
              <Heart className="w-3.5 h-3.5 fill-amber-700 text-amber-700" />
              <span>"One topic at a time. Future LPT Hershey — you've got this."</span>
            </div>
          </div>

        </div>
      </main>

      {/* Empty Footer Spacer */}
      <footer className="w-full max-w-5xl py-2" />

    </div>
  );
};
