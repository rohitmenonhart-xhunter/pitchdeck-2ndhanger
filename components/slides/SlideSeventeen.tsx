'use client';

const BUILDS = [
    '3 profitable hubs across Chennai',
    '300+ recurring household customers',
    'Documented, replicable hub playbook',
    '₹2.67L/month combined profit',
    'Seed-ready by Month 12',
];

const RETURNS = [
    { stage: 'Seed (M12-18)', multiple: '3-5x' },
    { stage: 'Series A (M24-30)', multiple: '14-20x' },
    { stage: 'Series B (M36-42)', multiple: '60-90x' },
];

export function SlideSeventeen() {
    return (
        <div className="slide-container retro-grid">
            <div className="slide-number">17 / 17</div>

            <div className="max-w-4xl mx-auto w-full px-4 sm:px-6">
                <div className="text-center mb-3 sm:mb-5">
                    <div className="neo-tag-pink inline-flex mb-2 sm:mb-4 animate-fade-in">
                        <span>The Ask</span>
                    </div>
                    <h2 className="font-display text-2xl sm:text-4xl md:text-5xl text-[#1A1A1A] animate-slide-up">
                        ₹50 Lakhs | 12% Equity
                    </h2>
                    <p className="font-mono text-[10px] sm:text-sm text-[#8A8A8A] mt-2 animate-fade-in animate-delay-1">
                        Post-money valuation: ₹4.17 Crore
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

                    {/* Returns */}
                    <div className="space-y-2 sm:space-y-3 animate-slide-left animate-delay-3">
                        <div className="neo-card-solid-pink p-3 sm:p-4 shadow-[4px_4px_0px_#1A1A1A]">
                            <h3 className="font-display text-xs sm:text-sm text-white mb-2">Your Returns</h3>
                            {RETURNS.map((r, i) => (
                                <div key={i} className="flex items-center justify-between py-1 border-b border-white/10 last:border-0">
                                    <span className="font-mono text-[9px] sm:text-[10px] text-white/70">{r.stage}</span>
                                    <span className="stat-number text-sm sm:text-lg text-white">{r.multiple}</span>
                                </div>
                            ))}
                        </div>

                        <div className="neo-card-flat bg-[#F5F0E8] p-2 sm:p-3 text-center">
                            <p className="text-[9px] sm:text-[10px] text-[#4A4A4A]">
                                <span className="font-bold text-[#1A1A1A]">Risk:</span> Max ₹8-10L at risk (CAPEX minus resale). Recovery: 80%+ any scenario.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Why ₹50L */}
                <div className="neo-card-solid-yellow p-2.5 sm:p-3 max-w-3xl mx-auto text-center mb-3 animate-fade-in animate-delay-5 shadow-[3px_3px_0px_#1A1A1A]">
                    <p className="text-[9px] sm:text-xs font-bold text-[#1A1A1A]">
                        Why ₹50L: ₹12L gets 1 hub, 18-month crawl. ₹50L gets 3 data points + ability to accelerate. <span className="text-[#FF3366]">Speed is the product.</span>
                    </p>
                </div>

                {/* Closing line */}
                <div className="text-center animate-fade-in animate-delay-7">
                    <p className="font-display text-xs sm:text-base text-[#4A4A4A] mb-1 leading-relaxed">
                        30 Cr households. 70 years same solution. Nobody serves the 90%.
                    </p>
                    <p className="font-display text-sm sm:text-lg text-[#1A1A1A] font-bold">
                        Your ₹50 Lakhs is where it starts.
                    </p>
                </div>
            </div>
        </div>
    );
}
