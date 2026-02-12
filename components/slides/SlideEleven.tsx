'use client';

const HUBS = [
    { count: '1 Hub', overhead: '₹56,500/hub', breakeven: '338 pcs/day' },
    { count: '2 Hubs', overhead: '₹28,250/hub', breakeven: '248 pcs/day' },
    { count: '3 Hubs', overhead: '₹18,833/hub', breakeven: '216 pcs/day' },
    { count: '5 Hubs', overhead: '₹11,300/hub', breakeven: '194 pcs/day' },
];

export function SlideEleven() {
    return (
        <div className="slide-container retro-grid">
            <div className="slide-number">11 / 19</div>

            <div className="max-w-5xl mx-auto w-full px-4 sm:px-6">
                <div className="text-center mb-3 sm:mb-5 md:mb-6">
                    <div className="neo-tag-coral inline-flex mb-2 sm:mb-4 animate-fade-in">
                        <span>Scaling Advantage</span>
                    </div>
                    <h2 className="font-display text-xl sm:text-3xl md:text-4xl text-[#1A1A1A] animate-slide-up">
                        Every New Hub Gets Easier. <span className="text-[#FF3366]">Here&apos;s Why.</span>
                    </h2>
                </div>

                <div className="neo-card-flat p-3 sm:p-4 max-w-3xl mx-auto mb-4 sm:mb-5 animate-fade-in animate-delay-2">
                    <div className="flex items-center justify-between mb-3">
                        <span className="font-display text-xs sm:text-sm text-[#1A1A1A]">Company Overhead</span>
                        <span className="stat-number text-lg sm:text-2xl text-[#FF3366]">₹56,500</span>
                    </div>
                    <p className="text-[9px] sm:text-[10px] text-[#8A8A8A] mb-4">
                        Stays flat. Each new hub only adds ₹65,000. More hubs = more dilution of fixed overhead = easier economics per hub.
                    </p>

                    {/* Hub scaling table */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
                        {HUBS.map((h, i) => {
                            const isLast = i === HUBS.length - 1;
                            return (
                                <div key={i} className={`${isLast ? 'neo-card-solid-pink shadow-[3px_3px_0px_#1A1A1A]' : i % 2 === 0 ? 'neo-card-yellow' : 'neo-card-mint'} p-2 sm:p-3 text-center animate-slide-up animate-delay-${i + 3}`}>
                                    <span className={`font-display text-xs sm:text-sm block mb-1 ${isLast ? 'text-white' : 'text-[#1A1A1A]'}`}>{h.count}</span>
                                    <span className={`font-mono text-[8px] sm:text-[9px] block ${isLast ? 'text-white/70' : 'text-[#8A8A8A]'}`}>Overhead: {h.overhead}</span>
                                    <span className={`font-mono text-[9px] sm:text-[10px] font-bold block mt-1 ${isLast ? 'text-white' : 'text-[#FF3366]'}`}>BE: {h.breakeven}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="neo-card-solid-yellow p-2 sm:p-3 max-w-2xl mx-auto text-center animate-scale-in animate-delay-8 shadow-[3px_3px_0px_#1A1A1A]">
                    <p className="text-[10px] sm:text-xs font-bold text-[#1A1A1A]">
                        Same founder team. Same software. Same CA. <span className="text-[#FF3366]">More hubs = easier economics per hub.</span>
                    </p>
                </div>
            </div>
        </div>
    );
}
