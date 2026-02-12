'use client';

const ROUNDS = [
    { stage: 'Pre-Seed (Now)', equity: '12.0%', val: '₹3.75 Cr', amount: '₹45L', multiple: '1x', fill: 'neo-card-peach' },
    { stage: 'Seed (M18-24)', equity: '10.2%', val: '₹15-20 Cr', amount: '₹1.5-2 Cr', multiple: '3-4x', fill: 'neo-card-yellow' },
    { stage: 'Series A (M30-36)', equity: '8.4%', val: '₹80-100 Cr', amount: '₹6.7-8.4 Cr', multiple: '15-19x', fill: 'neo-card-mint' },
    { stage: 'Series B (M42-48)', equity: '7.1%', val: '₹400-500 Cr', amount: '₹28-35 Cr', multiple: '62-78x', fill: 'neo-card-solid-pink' },
];

export function SlideEighteen() {
    return (
        <div className="slide-container retro-grid">
            <div className="slide-number">18 / 19</div>

            <div className="max-w-5xl mx-auto w-full px-4 sm:px-6">
                <div className="text-center mb-3 sm:mb-5 md:mb-6">
                    <div className="neo-tag-yellow inline-flex mb-2 sm:mb-4 animate-fade-in">
                        <span>Investor Returns</span>
                    </div>
                    <h2 className="font-display text-xl sm:text-3xl md:text-4xl text-[#1A1A1A] animate-slide-up">
                        Your ₹45L → <span className="text-[#FF3366]">₹28-35 Crore</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 max-w-5xl mx-auto mb-4 sm:mb-5">
                    {ROUNDS.map((r, i) => {
                        const isLast = i === ROUNDS.length - 1;
                        return (
                            <div key={i} className={`${r.fill} p-3 sm:p-4 md:p-5 animate-slide-up animate-delay-${i + 2} ${isLast ? 'shadow-[4px_4px_0px_#1A1A1A]' : ''}`}>
                                <span className={`font-mono text-[8px] sm:text-[9px] font-bold block mb-1.5 ${isLast ? 'text-white/60' : 'text-[#FF3366]'}`}>{r.stage}</span>
                                <div className="flex items-center justify-between mb-1">
                                    <span className={`text-[9px] sm:text-[10px] ${isLast ? 'text-white/70' : 'text-[#8A8A8A]'}`}>Equity</span>
                                    <span className={`font-mono text-[10px] sm:text-xs font-bold ${isLast ? 'text-white' : 'text-[#1A1A1A]'}`}>{r.equity}</span>
                                </div>
                                <div className="flex items-center justify-between mb-1">
                                    <span className={`text-[9px] sm:text-[10px] ${isLast ? 'text-white/70' : 'text-[#8A8A8A]'}`}>Valuation</span>
                                    <span className={`font-mono text-[10px] sm:text-xs font-bold ${isLast ? 'text-white' : 'text-[#1A1A1A]'}`}>{r.val}</span>
                                </div>
                                <div className="flex items-center justify-between pt-1 mt-1 border-t ${isLast ? 'border-white/20' : 'border-[#1A1A1A]/10'}">
                                    <span className={`text-[9px] sm:text-[10px] ${isLast ? 'text-white/70' : 'text-[#8A8A8A]'}`}>Value</span>
                                    <span className={`stat-number text-base sm:text-xl ${isLast ? 'text-white' : 'text-[#FF3366]'}`}>{r.amount}</span>
                                </div>
                                <div className="mt-1 text-right">
                                    <span className={`font-mono text-[9px] sm:text-xs font-bold px-1.5 py-0.5 ${isLast ? 'bg-white text-[#FF3366]' : 'bg-[#FF3366] text-white'}`}>{r.multiple}</span>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="neo-card-solid-yellow p-3 max-w-3xl mx-auto text-center mb-3 animate-scale-in animate-delay-7 shadow-[3px_3px_0px_#1A1A1A]">
                    <p className="text-[9px] sm:text-xs font-bold text-[#1A1A1A]">
                        Conservative floor: Even at 50% of projections, Seed at ₹10 Cr = ₹1 Cr on ₹45L = <span className="text-[#FF3366]">2.3x in under 2 years.</span>
                    </p>
                </div>

                <p className="text-center font-display text-sm sm:text-base text-[#1A1A1A] animate-fade-in animate-delay-8">
                    Downside protected. Upside uncapped. <span className="text-[#FF3366] font-bold">Asymmetric bet.</span>
                </p>
            </div>
        </div>
    );
}
