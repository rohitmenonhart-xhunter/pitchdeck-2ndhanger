'use client';

export function SlideOne() {
  return (
    <div className="slide-container retro-grid">
      <div className="slide-number">01 / 19</div>

      <div className="max-w-4xl mx-auto text-center space-y-4 sm:space-y-6 md:space-y-8 px-4 sm:px-6">
        {/* Tag */}
        <div className="neo-tag-pink inline-flex animate-fade-in">
          <span>Pre-Seed · February 2026 · Confidential</span>
        </div>

        {/* Logo / Title */}
        <div className="animate-slide-up">
          <h1 className="font-display text-3xl sm:text-5xl md:text-7xl lg:text-9xl text-[#1A1A1A] tracking-tight">
            2nd Hanger
          </h1>
          <div className="w-24 h-1 bg-[#FF3366] mx-auto mt-4" />
        </div>

        {/* Subtitle */}
        <p className="font-display text-sm sm:text-lg md:text-2xl text-[#4A4A4A] max-w-2xl mx-auto animate-fade-in animate-delay-2">
          India&apos;s Garment Aftercare Infrastructure
        </p>

        {/* Tagline */}
        <p className="font-mono text-[10px] sm:text-xs tracking-widest text-[#8A8A8A] animate-fade-in animate-delay-3">
          MACHINE-FIRST · HUB-MODEL · HYPERLOCAL
        </p>

        {/* Raising info */}
        <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 md:gap-4 animate-slide-up animate-delay-4">
          <div className="neo-card-yellow p-2 sm:p-3 md:p-4 min-w-[7rem] sm:min-w-[8rem]">
            <div className="stat-number text-lg sm:text-2xl md:text-3xl text-[#1A1A1A]">₹45L</div>
            <div className="font-mono text-[8px] sm:text-[9px] tracking-wider text-[#4A4A4A] mt-1">RAISING</div>
          </div>
          <div className="neo-card-mint p-2 sm:p-3 md:p-4 min-w-[7rem] sm:min-w-[8rem]">
            <div className="stat-number text-lg sm:text-2xl md:text-3xl text-[#1A1A1A]">12%</div>
            <div className="font-mono text-[8px] sm:text-[9px] tracking-wider text-[#4A4A4A] mt-1">EQUITY</div>
          </div>
          <div className="neo-card-solid-pink p-2 sm:p-3 md:p-4 min-w-[7rem] sm:min-w-[8rem] shadow-[4px_4px_0px_#1A1A1A]">
            <div className="stat-number text-lg sm:text-2xl md:text-3xl text-white">Pre-Seed</div>
            <div className="font-mono text-[8px] sm:text-[9px] tracking-wider text-white/70 mt-1">STAGE</div>
          </div>
        </div>
      </div>
    </div>
  );
}
