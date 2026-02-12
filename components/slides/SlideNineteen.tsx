'use client';

export function SlideNineteen() {
    return (
        <div className="slide-container retro-grid">
            <div className="slide-number">19 / 19</div>

            <div className="max-w-4xl mx-auto text-center space-y-4 sm:space-y-6 md:space-y-8 px-4 sm:px-6">
                <div className="space-y-3 sm:space-y-5 animate-slide-up">
                    <p className="font-display text-sm sm:text-lg md:text-xl text-[#4A4A4A] leading-relaxed">
                        30 Crore Indian households iron clothes every week.
                    </p>
                    <p className="font-display text-sm sm:text-lg md:text-xl text-[#4A4A4A] leading-relaxed">
                        Organised players serve the premium 10%.
                    </p>
                    <p className="font-display text-base sm:text-xl md:text-2xl text-[#1A1A1A] font-bold leading-relaxed">
                        Nobody serves the other 90%.
                    </p>
                </div>

                <div className="space-y-2 sm:space-y-3 animate-fade-in animate-delay-3">
                    <p className="font-display text-sm sm:text-lg text-[#4A4A4A]">
                        We built the machine. We proved the demand. We have the model.
                    </p>
                    <p className="font-display text-base sm:text-xl text-[#1A1A1A] font-bold">
                        Now we need the capital to scale.
                    </p>
                </div>

                {/* Title + Tagline */}
                <div className="animate-slide-up animate-delay-5">
                    <h2 className="font-display text-3xl sm:text-5xl md:text-7xl text-[#1A1A1A] tracking-tight">
                        2nd Hanger
                    </h2>
                    <div className="w-20 h-1 bg-[#FF3366] mx-auto mt-3 mb-2" />
                    <p className="font-mono text-[10px] sm:text-xs tracking-widest text-[#FF3366]">
                        THE ZEPTO OF GARMENT CARE
                    </p>
                </div>

                {/* CTA */}
                <div className="neo-card-solid-pink p-4 sm:p-5 max-w-md mx-auto shadow-[5px_5px_0px_#1A1A1A] animate-scale-in animate-delay-7">
                    <p className="font-display text-base sm:text-lg text-white mb-2">
                        ₹45 Lakhs | 12% Equity | Let&apos;s build.
                    </p>
                    <div className="w-12 h-0.5 bg-white/30 mx-auto mb-2" />
                    <p className="font-mono text-[10px] sm:text-xs text-white/80">
                        Rohit — +91 75500 00805
                    </p>
                    <p className="font-mono text-[9px] sm:text-[10px] text-white/60">
                        contactrohitmenon@gmail.com
                    </p>
                </div>
            </div>
        </div>
    );
}
