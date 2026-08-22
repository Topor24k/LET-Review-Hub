import React from 'react';

export const HeroBanner: React.FC = () => {
  return (
    <section className="mb-6 sm:mb-8">
      <div className="relative overflow-hidden rounded-2xl bg-[#eef5f6] border border-[#d6e5e8] p-4.5 sm:p-8 md:p-10 shadow-xs">
        
        {/* Subtle decorative background pattern */}
        <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-10 pointer-events-none bg-gradient-to-l from-slate-900 to-transparent" />
        
        <div className="relative z-10 w-full space-y-3 sm:space-y-4">
          <h1 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-950 leading-[1.2] w-full">
            Welcome to Your <span className="underline decoration-slate-300 decoration-2 underline-offset-4">LET Reviewer</span>, Langga.
          </h1>

          <div className="text-slate-700 text-xs sm:text-base leading-relaxed space-y-2.5 sm:space-y-3 w-full">
            <p className="w-full">
              I know how much time and effort you're putting into preparing for the LET, and I hope this website can be a small part of that journey — a place where you can review, practice, and keep track of everything you’re learning. Take your time, stay consistent, and trust the work you’re putting in. You don't have to have everything figured out at once. Just keep moving forward, one topic at a time. I’m always rooting for you, Langga.
            </p>
            <p className="font-medium text-slate-800">
              Study well, believe in yourself, and give it your best.
            </p>
            <p className="font-serif italic text-amber-900 font-semibold text-sm sm:text-lg pt-0.5">
              Future LPT — you've got this.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
