'use client';

export function SlideOne() {
  return (
    <div className="slide-container retro-grid">
      <div className="slide-number">01 / 17</div>

      <div className="max-w-4xl mx-auto text-center space-y-4 sm:space-y-6 md:space-y-8 px-4 sm:px-6">
        {/* Logo / Title */}
        <div className="animate-slide-up">
          <h1 className="font-display text-3xl sm:text-5xl md:text-7xl lg:text-9xl text-[#1A1A1A] tracking-tight">
            2nd Hanger
          </h1>
          <div className="w-24 h-1 bg-[#FF3366] mx-auto mt-4" />
        </div>

        {/* Tagline */}
        <p className="font-mono text-[10px] sm:text-xs tracking-widest text-[#8A8A8A] animate-fade-in animate-delay-1">
          MACHINE-FIRST · HUB-MODEL · HYPERLOCAL
        </p>

        {/* Subtitle */}
        <p className="font-display text-sm sm:text-lg md:text-2xl text-[#4A4A4A] max-w-2xl mx-auto animate-fade-in animate-delay-2">
          India&apos;s Garment Aftercare Infrastructure
        </p>

        {/* Key stats */}
        <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 md:gap-4 animate-slide-up animate-delay-3">
          <div className="neo-card-yellow p-2 sm:p-3 md:p-4 min-w-[9rem] sm:min-w-[10rem]">
            <div className="stat-number text-base sm:text-xl md:text-2xl text-[#1A1A1A]">₹50L → ₹38L</div>
            <div className="font-mono text-[7px] sm:text-[8px] tracking-wider text-[#4A4A4A] mt-1">M12 BANK · 76% PRESERVED</div>
          </div>
          <div className="neo-card-mint p-2 sm:p-3 md:p-4 min-w-[9rem] sm:min-w-[10rem]">
            <div className="stat-number text-base sm:text-xl md:text-2xl text-[#1A1A1A]">Month 3</div>
            <div className="font-mono text-[7px] sm:text-[8px] tracking-wider text-[#4A4A4A] mt-1">1 HUB PROFITABLE</div>
          </div>
        </div>

        <div className="neo-card-solid-pink p-2 sm:p-3 max-w-sm mx-auto shadow-[4px_4px_0px_#1A1A1A] animate-scale-in animate-delay-4">
          <p className="font-mono text-[8px] sm:text-[9px] text-white/90">
            Worst-case shutdown: <span className="font-bold text-white">82-90% recovered</span>
          </p>
        </div>
      </div>
    </div>
  );
}
