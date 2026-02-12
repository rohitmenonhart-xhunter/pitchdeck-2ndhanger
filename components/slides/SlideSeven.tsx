'use client';

const RAMP = [
    { month: 'M1', pcs: '150', profit: '-₹5K' },
    { month: 'M2', pcs: '200', profit: '+₹10K' },
    { month: 'M3', pcs: '260', profit: '+₹30K' },
    { month: 'M6', pcs: '420', profit: '+₹71K' },
    { month: 'M9', pcs: '500', profit: '+₹99K' },
    { month: 'M12', pcs: '570', profit: '+₹1.15L' },
];

export function SlideSeven() {
    return (
        <div className="slide-container retro-grid">
            <div className="slide-number">07 / 19</div>

            <div className="max-w-5xl mx-auto w-full px-4 sm:px-6">
                <div className="text-center mb-3 sm:mb-5 md:mb-6">
                    <div className="neo-tag-yellow inline-flex mb-2 sm:mb-4 animate-fade-in">
                        <span>Hub Economics</span>
                    </div>
                    <h2 className="font-display text-xl sm:text-3xl md:text-4xl text-[#1A1A1A] animate-slide-up">
                        Single Hub = <span className="text-[#FF3366]">₹1.15L/month Profit</span> at Steady State
                    </h2>
                </div>

                {/* Key stats */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 max-w-4xl mx-auto mb-4 sm:mb-5 animate-fade-in animate-delay-2">
                    <div className="neo-card-peach p-2 sm:p-3 text-center">
                        <span className="stat-number text-base sm:text-xl text-[#1A1A1A]">₹65K</span>
                        <span className="font-mono text-[8px] sm:text-[9px] text-[#4A4A4A] block mt-1">HUB OPEX/MO</span>
                    </div>
                    <div className="neo-card-yellow p-2 sm:p-3 text-center">
                        <span className="stat-number text-base sm:text-xl text-[#1A1A1A]">155 pcs</span>
                        <span className="font-mono text-[8px] sm:text-[9px] text-[#4A4A4A] block mt-1">DAILY BREAKEVEN</span>
                    </div>
                    <div className="neo-card-mint p-2 sm:p-3 text-center">
                        <span className="stat-number text-base sm:text-xl text-[#1A1A1A]">Month 2</span>
                        <span className="font-mono text-[8px] sm:text-[9px] text-[#4A4A4A] block mt-1">HUB PROFITABLE</span>
                    </div>
                    <div className="neo-card-solid-pink p-2 sm:p-3 text-center shadow-[3px_3px_0px_#1A1A1A]">
                        <span className="stat-number text-base sm:text-xl text-white">57%</span>
                        <span className="font-mono text-[8px] sm:text-[9px] text-white/70 block mt-1">PROFIT MARGIN</span>
                    </div>
                </div>

                {/* 12-Month Ramp Table */}
                <div className="neo-card-flat p-3 sm:p-4 max-w-3xl mx-auto mb-3 sm:mb-4 animate-slide-up animate-delay-4">
                    <h3 className="font-display text-xs sm:text-sm text-[#1A1A1A] mb-2 sm:mb-3">12-Month Hub Ramp</h3>
                    <div className="grid grid-cols-6 gap-1 sm:gap-2">
                        {RAMP.map((r, i) => {
                            const isPositive = r.profit.startsWith('+');
                            return (
                                <div key={i} className={`p-1.5 sm:p-2 text-center border ${isPositive ? 'bg-[#E8F5E9] border-[#4CAF50]/20' : 'bg-[#FFF3E0] border-[#FF9800]/20'}`}>
                                    <span className="font-mono text-[8px] sm:text-[9px] font-bold text-[#1A1A1A] block">{r.month}</span>
                                    <span className="font-mono text-[8px] sm:text-[9px] text-[#8A8A8A] block">{r.pcs}/d</span>
                                    <span className={`font-mono text-[8px] sm:text-[10px] font-bold block ${isPositive ? 'text-[#4CAF50]' : 'text-[#FF9800]'}`}>{r.profit}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="neo-card-solid-yellow p-2 sm:p-3 max-w-xl mx-auto text-center animate-scale-in animate-delay-6 shadow-[3px_3px_0px_#1A1A1A]">
                    <p className="text-[10px] sm:text-xs font-bold text-[#1A1A1A]">
                        Year 1 Hub Cumulative Profit: <span className="text-[#FF3366]">₹8.04L</span>
                    </p>
                </div>
            </div>
        </div>
    );
}
