'use client';

export function SlideTwo() {
  return (
    <div className="slide-container retro-grid">
      <div className="slide-number">02 / 18</div>

      <div className="max-w-5xl mx-auto w-full px-4 sm:px-6">
        <div className="text-center mb-3 sm:mb-5 md:mb-6">
          <div className="neo-tag-pink inline-flex mb-2 sm:mb-4 animate-fade-in">
            <span>The Problem</span>
          </div>
          <h2 className="font-display text-xl sm:text-3xl md:text-4xl text-[#1A1A1A] animate-slide-up">
            30 Crore Households. <span className="text-[#FF3366]">Same Coal Iron Since 1950.</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-3 sm:space-y-4">
          <div className="neo-card-peach p-3 sm:p-4 md:p-5 animate-slide-up animate-delay-2">
            <p className="text-[10px] sm:text-sm text-[#4A4A4A] leading-relaxed">
              Roadside dhobi. Coal iron. Burns. Damage. Zero accountability.
            </p>
            <p className="text-[10px] sm:text-sm text-[#4A4A4A] leading-relaxed mt-1.5">
              Give clothes Saturday. Maybe get back Monday. Maybe Tuesday. <span className="font-bold text-[#1A1A1A]">Maybe he doesn&apos;t show up.</span>
            </p>
          </div>

          <div className="neo-card-yellow p-3 sm:p-4 md:p-5 animate-slide-up animate-delay-3">
            <p className="text-[10px] sm:text-sm text-[#4A4A4A] leading-relaxed">
              Organised players exist — UClean, Tumbledry. <span className="font-bold text-[#1A1A1A]">₹40-60 per piece.</span> A family doing 50 pieces a week pays ₹2,000-3,000 per month just for ironing. Nobody pays that.
            </p>
          </div>

          <div className="neo-card-flat p-3 sm:p-4 bg-[#F5F0E8] text-center animate-fade-in animate-delay-4">
            <p className="text-[10px] sm:text-sm text-[#4A4A4A]">
              These companies serve the top 5-10%.
            </p>
            <p className="text-[10px] sm:text-sm text-[#4A4A4A]">
              The other 90% is stuck with the dhobi.
            </p>
          </div>

          <div className="neo-card-solid-pink p-3 sm:p-4 max-w-md mx-auto text-center shadow-[4px_4px_0px_#1A1A1A] animate-scale-in animate-delay-5">
            <p className="text-sm sm:text-base font-bold text-white">
              That 90% is our market.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
