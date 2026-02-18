'use client';

const MONTHS = [
    { m: 'M1', pcs: '80', rev: '₹52K', pnl: '-₹69K', color: 'text-[#FF9800]' },
    { m: 'M2', pcs: '150', rev: '₹97K', pnl: '-₹32K', color: 'text-[#FF9800]' },
    { m: 'M3', pcs: '220', rev: '₹1.43L', pnl: '+₹3K', color: 'text-[#4CAF50]' },
    { m: 'M6', pcs: '450', rev: '₹2.92L', pnl: '+₹1.22L', color: 'text-[#4CAF50]' },
    { m: 'M12', pcs: '700', rev: '₹4.55L', pnl: '+₹2.50L', color: 'text-[#4CAF50]' },
];

export function SlideEight() {
    return (
        <div className="slide-container retro-grid">
            <div className="slide-number">08 / 18</div>

            <div className="max-w-5xl mx-auto w-full px-4 sm:px-6">
                <div className="text-center mb-3 sm:mb-5">
                    <div className="neo-tag-coral inline-flex mb-2 sm:mb-4 animate-fade-in">
                        <span>12-Month Projection</span>
                    </div>
                    <h2 className="font-display text-xl sm:text-3xl md:text-4xl text-[#1A1A1A] animate-slide-up">
                        Profitable Month 3. <span className="text-[#FF3366]">₹30L Net Profit Year 1.</span>
                    </h2>
                </div>

                {/* P&L Table */}
                <div className="neo-card-flat p-3 sm:p-4 max-w-3xl mx-auto mb-4 animate-slide-up animate-delay-2">
                    <div className="grid grid-cols-4 gap-0 mb-1">
                        <div className="p-1.5 border-b-2 border-[#1A1A1A]/10"><span className="font-mono text-[8px] sm:text-[9px] text-[#8A8A8A]">Month</span></div>
                        <div className="p-1.5 border-b-2 border-[#1A1A1A]/10 text-center"><span className="font-mono text-[8px] sm:text-[9px] text-[#8A8A8A]">Pcs/Day</span></div>
                        <div className="p-1.5 border-b-2 border-[#1A1A1A]/10 text-center"><span className="font-mono text-[8px] sm:text-[9px] text-[#8A8A8A]">Revenue</span></div>
                        <div className="p-1.5 border-b-2 border-[#1A1A1A]/10 text-right"><span className="font-mono text-[8px] sm:text-[9px] text-[#8A8A8A]">Profit/Loss</span></div>
                    </div>
                    {MONTHS.map((m, i) => (
                        <div key={i} className={`grid grid-cols-4 gap-0 border-b border-[#1A1A1A]/5 ${i === MONTHS.length - 1 ? 'bg-[#FF3366]/5' : ''}`}>
                            <div className="p-1.5"><span className="font-mono text-[10px] sm:text-[11px] font-bold text-[#1A1A1A]">{m.m}</span></div>
                            <div className="p-1.5 text-center"><span className="text-[10px] sm:text-[11px] text-[#4A4A4A]">{m.pcs}</span></div>
                            <div className="p-1.5 text-center"><span className="text-[10px] sm:text-[11px] text-[#4A4A4A]">{m.rev}</span></div>
                            <div className="p-1.5 text-right"><span className={`text-[10px] sm:text-[11px] font-bold ${m.color}`}>{m.pnl}</span></div>
                        </div>
                    ))}
                </div>

                {/* Year 1 stats */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 max-w-4xl mx-auto mb-3 animate-fade-in animate-delay-5">
                    <div className="neo-card-peach p-2 sm:p-3 text-center">
                        <span className="stat-number text-base sm:text-xl text-[#1A1A1A]">₹54.6L</span>
                        <span className="font-mono text-[7px] sm:text-[8px] text-[#4A4A4A] block mt-1">Y1 REVENUE</span>
                    </div>
                    <div className="neo-card-mint p-2 sm:p-3 text-center">
                        <span className="stat-number text-base sm:text-xl text-[#4CAF50]">~₹30L</span>
                        <span className="font-mono text-[7px] sm:text-[8px] text-[#4A4A4A] block mt-1">Y1 NET PROFIT</span>
                    </div>
                    <div className="neo-card-yellow p-2 sm:p-3 text-center">
                        <span className="stat-number text-base sm:text-xl text-[#1A1A1A]">55%</span>
                        <span className="font-mono text-[7px] sm:text-[8px] text-[#4A4A4A] block mt-1">NET MARGIN</span>
                    </div>
                    <div className="neo-card-solid-pink p-2 sm:p-3 text-center shadow-[3px_3px_0px_#1A1A1A]">
                        <span className="stat-number text-base sm:text-xl text-white">₹18-20L</span>
                        <span className="font-mono text-[7px] sm:text-[8px] text-white/70 block mt-1">M12 BANK BALANCE</span>
                    </div>
                </div>

                <p className="text-center text-[9px] sm:text-[10px] text-[#1A1A1A] font-bold animate-fade-in animate-delay-7">
                    More than the original ₹15L invested. <span className="text-[#FF3366]">Your money grows, not shrinks.</span>
                </p>
            </div>
        </div>
    );
}
