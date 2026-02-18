'use client';

export function SlideOne() {
  return (
    <div className="slide-container retro-grid">
      <div className="slide-number">01 / 18</div>

      <div className="max-w-4xl mx-auto text-center space-y-4 sm:space-y-6 md:space-y-8 px-4 sm:px-6">
        <div className="animate-slide-up">
          <h1 className="font-display text-3xl sm:text-5xl md:text-7xl lg:text-9xl text-[#1A1A1A] tracking-tight">
            2nd Hanger
          </h1>
          <div className="w-24 h-1 bg-[#FF3366] mx-auto mt-4" />
        </div>

        <p className="font-display text-base sm:text-xl md:text-3xl text-[#1A1A1A] animate-fade-in animate-delay-1">
          Sub-1-Hour Doorstep Ironing
        </p>

        <p className="font-mono text-[10px] sm:text-xs tracking-widest text-[#8A8A8A] animate-fade-in animate-delay-2">
          MACHINE-FIRST · BIKE-DELIVERED · APP-POWERED
        </p>

        <p className="font-display text-sm sm:text-lg md:text-xl text-[#4A4A4A] max-w-2xl mx-auto animate-fade-in animate-delay-3">
          India&apos;s first on-demand garment pressing service.
        </p>
      </div>
    </div>
  );
}
