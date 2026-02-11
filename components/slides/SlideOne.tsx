'use client';

export function SlideOne() {
  return (
    <div className="slide-container retro-grid">
      <div className="slide-number">01 / 17</div>

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

        {/* Three killer stats */}
        <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 md:gap-4 animate-slide-up animate-delay-3">
          <div className="neo-card-yellow p-3 md:p-4 min-w-[8rem]">
            <div className="stat-number text-2xl md:text-3xl text-[#1A1A1A]">1</div>
            <div className="font-mono text-[9px] tracking-wider text-[#4A4A4A] mt-1">MACHINE</div>
          </div>
          <div className="neo-card-mint p-3 md:p-4 min-w-[8rem]">
            <div className="stat-number text-2xl md:text-3xl text-[#1A1A1A]">70/hr</div>
            <div className="font-mono text-[9px] tracking-wider text-[#4A4A4A] mt-1">GARMENTS</div>
          </div>
          <div className="neo-card-solid-pink p-3 md:p-4 min-w-[8rem] shadow-[4px_4px_0px_#1A1A1A]">
            <div className="stat-number text-2xl md:text-3xl text-white">₹1.6L</div>
            <div className="font-mono text-[9px] tracking-wider text-white/70 mt-1">PROFIT / HUB / MONTH</div>
          </div>
        </div>
      </div>
    </div>
  );
}
