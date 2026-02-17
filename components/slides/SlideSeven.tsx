'use client';

const CAPACITY = [
    { vol: '209/day', label: 'Breakeven', profit: '₹0', util: '14%' },
    { vol: '570/day', label: 'Steady state', profit: '₹1.10L', util: '38%' },
    { vol: '1,000/day', label: 'Growth', profit: '₹2.45L', util: '67%' },
    { vol: '1,500/day', label: 'Full capacity', profit: '₹4.00L', util: '100%' },
];

export function SlideSeven() {
    return (
        <div className="slide-container retro-grid">
            <div className="slide-number">07 / 17</div>

            <div className="max-w-5xl mx-auto w-full px-4 sm:px-6">
                <div className="text-center mb-3 sm:mb-5 md:mb-6">
                    <div className="neo-tag-yellow inline-flex mb-2 sm:mb-4 animate-fade-in">
                        <span>Hub Economics</span>
                    </div>
                    <h2 className="font-display text-xl sm:text-3xl md:text-4xl text-[#1A1A1A] animate-slide-up">
                        Single Hub OPEX: <span className="text-[#FF3366]">₹81,500/month</span>
                    </h2>
                    <p className="font-mono text-[9px] sm:text-xs text-[#8A8A8A] mt-1 animate-fade-in animate-delay-1">
                        Includes ₹5K damage compensation reserve
                    </p>
                </div>

                {/* Key stats */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 max-w-3xl mx-auto mb-4 sm:mb-5 animate-fade-in animate-delay-2">
                    <div className="neo-card-peach p-2 sm:p-3 text-center">
                        <span className="stat-number text-base sm:text-xl text-[#1A1A1A]">209 pcs</span>
                        <span className="font-mono text-[8px] sm:text-[9px] text-[#4A4A4A] block mt-1">DAILY BREAKEVEN</span>
                    </div>
                    <div className="neo-card-mint p-2 sm:p-3 text-center">
                        <span className="stat-number text-base sm:text-xl text-[#1A1A1A]">14%</span>
                        <span className="font-mono text-[8px] sm:text-[9px] text-[#4A4A4A] block mt-1">BE UTILISATION</span>
                    </div>
                    <div className="neo-card-solid-pink p-2 sm:p-3 text-center shadow-[3px_3px_0px_#1A1A1A] col-span-2 sm:col-span-1">
                        <span className="stat-number text-base sm:text-xl text-white">₹10.6L</span>
                        <span className="font-mono text-[8px] sm:text-[9px] text-white/70 block mt-1">HUB INVESTMENT</span>
                    </div>
                </div>

                {/* Capacity table */}
                <div className="neo-card-flat p-3 sm:p-4 max-w-3xl mx-auto mb-3 sm:mb-4 animate-slide-up animate-delay-4">
                    <h3 className="font-display text-xs sm:text-sm text-[#1A1A1A] mb-2 sm:mb-3">Hub Profit at Different Volumes</h3>
                    <div className="grid grid-cols-4 gap-1 sm:gap-2">
                        {CAPACITY.map((c, i) => {
                            const isMax = i === CAPACITY.length - 1;
                            return (
                                <div key={i} className={`p-1.5 sm:p-2.5 text-center border ${isMax ? 'bg-[#FF3366]/10 border-[#FF3366]/30' : 'bg-white border-[#1A1A1A]/5'}`}>
                                    <span className="font-mono text-[8px] sm:text-[9px] font-bold text-[#1A1A1A] block">{c.vol}</span>
                                    <span className="font-mono text-[7px] sm:text-[8px] text-[#8A8A8A] block">{c.label}</span>
                                    <span className={`font-mono text-[9px] sm:text-[11px] font-bold block mt-1 ${c.profit === '₹0' ? 'text-[#8A8A8A]' : 'text-[#4CAF50]'}`}>
                                        {c.profit}
                                    </span>
                                    <span className="font-mono text-[7px] sm:text-[8px] text-[#8A8A8A] block">{c.util}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="neo-card-solid-yellow p-2 sm:p-3 max-w-2xl mx-auto text-center animate-scale-in animate-delay-6 shadow-[3px_3px_0px_#1A1A1A]">
                    <p className="text-[9px] sm:text-xs font-bold text-[#1A1A1A]">
                        Same ₹10.6L investment. Same machine. Same staff. <span className="text-[#FF3366]">3x output possible with zero additional CAPEX.</span>
                    </p>
                </div>
            </div>
        </div>
    );
}
