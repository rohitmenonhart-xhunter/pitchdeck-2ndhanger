'use client';

export function SlideFive() {
    return (
        <div className="slide-container retro-grid">
            <div className="slide-number">05 / 18</div>

            <div className="max-w-4xl mx-auto w-full px-4 sm:px-6">
                <div className="text-center mb-3 sm:mb-5 md:mb-6">
                    <div className="neo-tag-coral inline-flex mb-2 sm:mb-4 animate-fade-in">
                        <span>Market</span>
                    </div>
                    <h2 className="font-display text-xl sm:text-3xl md:text-4xl text-[#1A1A1A] animate-slide-up">
                        ₹48,000 Crore. <span className="text-[#FF3366]">We Need 40 Families.</span>
                    </h2>
                </div>

                <div className="max-w-2xl mx-auto space-y-3 sm:space-y-4">
                    <div className="neo-card-lavender p-4 sm:p-5 md:p-6 text-center animate-slide-up animate-delay-2">
                        <span className="stat-number text-3xl sm:text-5xl text-[#1A1A1A]">₹48,000 Cr</span>
                        <p className="font-mono text-[8px] sm:text-[9px] text-[#8A8A8A] mt-2">URBAN GARMENT AFTERCARE · TOP 50 CITIES</p>
                    </div>

                    <div className="neo-card-flat p-3 sm:p-4 bg-[#F5F0E8] text-center animate-fade-in animate-delay-3">
                        <p className="text-[10px] sm:text-sm text-[#4A4A4A]">
                            We don&apos;t need 1% of this. We need <span className="font-bold text-[#1A1A1A]">40 families per hub.</span>
                        </p>
                    </div>

                    <div className="neo-card-yellow p-3 sm:p-4 text-center animate-slide-up animate-delay-4">
                        <p className="text-[10px] sm:text-sm text-[#4A4A4A]">
                            Avadi alone: <span className="font-bold text-[#1A1A1A]">50,000+ households.</span> We need 40 to break even.{' '}
                            <span className="font-bold text-[#FF3366]">0.08%.</span>
                        </p>
                    </div>

                    <div className="neo-card-solid-pink p-3 sm:p-4 text-center shadow-[4px_4px_0px_#1A1A1A] animate-scale-in animate-delay-5">
                        <p className="text-[10px] sm:text-sm font-bold text-white">
                            The market isn&apos;t the question. Execution is. <span className="text-white/70">That&apos;s what your ₹15 lakhs proves.</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
