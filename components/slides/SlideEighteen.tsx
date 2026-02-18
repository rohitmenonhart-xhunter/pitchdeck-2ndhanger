'use client';

const BUILDS = [
    '1 profitable hub',
    '350+ households served',
    'Three live applications',
    'Documented playbook',
    'Seed-ready by Month 12',
];

export function SlideEighteen() {
    return (
        <div className="slide-container retro-grid">
            <div className="slide-number">18 / 18</div>

            <div className="max-w-4xl mx-auto w-full px-4 sm:px-6">
                <div className="text-center mb-3 sm:mb-5 md:mb-6">
                    <div className="neo-tag-pink inline-flex mb-2 sm:mb-4 animate-fade-in">
                        <span>The Close</span>
                    </div>
                    <h2 className="font-display text-2xl sm:text-4xl md:text-5xl text-[#1A1A1A] animate-slide-up">
                        ₹15 Lakhs. 5% Equity.
                    </h2>
                    <p className="font-mono text-[10px] sm:text-sm text-[#8A8A8A] mt-2 animate-fade-in animate-delay-1">
                        ₹3 Crore Valuation.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 max-w-4xl mx-auto mb-3 sm:mb-4">
                    {/* What it builds */}
                    <div className="neo-card-flat p-3 sm:p-4 animate-slide-right animate-delay-2">
                        <h3 className="font-display text-xs sm:text-sm text-[#1A1A1A] mb-2 sm:mb-3">What it builds</h3>
                        <div className="space-y-1.5 sm:space-y-2">
                            {BUILDS.map((b, i) => (
                                <div key={i} className="flex items-start gap-2">
                                    <span className="w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center bg-white border border-[#1A1A1A]/10 font-mono text-[7px] sm:text-[8px] font-bold text-[#FF3366] flex-shrink-0 mt-0.5">
                                        {String(i + 1).padStart(2, '0')}
                                    </span>
                                    <span className="text-[9px] sm:text-[11px] text-[#4A4A4A]">{b}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* What it proves + returns + protection */}
                    <div className="space-y-2 sm:space-y-3 animate-slide-left animate-delay-3">
                        <div className="neo-card-yellow p-3 sm:p-4">
                            <h3 className="font-display text-xs sm:text-sm text-[#1A1A1A] mb-1">What it proves</h3>
                            <p className="text-[9px] sm:text-[10px] text-[#4A4A4A] leading-relaxed">
                                Sub-1-hour machine-pressed doorstep delivery works. Customers pay. Economics hold. The hub is replicable.
                            </p>
                        </div>

                        <div className="neo-card-solid-pink p-3 sm:p-4 shadow-[4px_4px_0px_#1A1A1A]">
                            <h3 className="font-display text-xs sm:text-sm text-white mb-1.5">Your returns</h3>
                            <div className="flex items-center justify-between py-1 border-b border-white/10">
                                <span className="font-mono text-[9px] sm:text-[10px] text-white/70">Seed</span>
                                <span className="stat-number text-sm sm:text-base text-white">5-8x</span>
                            </div>
                            <div className="flex items-center justify-between py-1">
                                <span className="font-mono text-[9px] sm:text-[10px] text-white/70">Series A</span>
                                <span className="stat-number text-sm sm:text-base text-white">27-40x</span>
                            </div>
                        </div>

                        <div className="neo-card-flat bg-[#F5F0E8] p-2 sm:p-3">
                            <p className="text-[8px] sm:text-[9px] text-[#4A4A4A]">
                                <span className="font-bold text-[#1A1A1A]">Protection:</span> Buyback clause. Machine = physical asset. ₹18-20L in bank by year end.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Closing line */}
                <div className="text-center animate-fade-in animate-delay-6 mt-2 sm:mt-4">
                    <p className="font-display text-xs sm:text-base text-[#4A4A4A] mb-1 leading-relaxed">
                        30 Crore households. 70 years, same solution. Nobody serves the 90%.
                    </p>
                    <p className="font-display text-sm sm:text-xl text-[#1A1A1A] font-bold">
                        Your ₹15 lakhs is where that changes.
                    </p>
                </div>
            </div>
        </div>
    );
}
