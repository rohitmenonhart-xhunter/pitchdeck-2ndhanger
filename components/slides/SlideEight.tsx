'use client';

const MONTHS = [
    { m: 'M1', val: '-₹62K' },
    { m: 'M2', val: '-₹47K' },
    { m: 'M3', val: '-₹26K' },
    { m: 'M4', val: '-₹10K' },
    { m: 'M5', val: '-₹2K' },
    { m: 'M6', val: '+₹15K' },
    { m: 'M7', val: '+₹25K' },
    { m: 'M8', val: '+₹36K' },
    { m: 'M9', val: '+₹42K' },
    { m: 'M10', val: '+₹45K' },
    { m: 'M11', val: '+₹52K' },
    { m: 'M12', val: '+₹58K' },
];

export function SlideEight() {
    return (
        <div className="slide-container retro-grid">
            <div className="slide-number">08 / 19</div>

            <div className="max-w-5xl mx-auto w-full px-4 sm:px-6">
                <div className="text-center mb-3 sm:mb-5">
                    <div className="neo-tag-pink inline-flex mb-2 sm:mb-4 animate-fade-in">
                        <span>Company P&L</span>
                    </div>
                    <h2 className="font-display text-xl sm:text-3xl md:text-4xl text-[#1A1A1A] animate-slide-up">
                        Company Profitable by Month 6. <span className="text-[#FF3366]">All Founders Paid.</span>
                    </h2>
                </div>

                {/* Overhead */}
                <div className="neo-card-flat p-2 sm:p-3 max-w-3xl mx-auto mb-3 sm:mb-4 animate-fade-in animate-delay-2">
                    <div className="flex items-center justify-between mb-1.5">
                        <span className="font-display text-xs sm:text-sm text-[#1A1A1A]">Company Overhead</span>
                        <span className="stat-number text-base sm:text-xl text-[#FF3366]">₹56,500/mo</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {[
                            { name: 'Rohit (CEO/Tech)', amt: '₹20K' },
                            { name: 'Murahari (Ops)', amt: '₹15K' },
                            { name: 'Vibhav (Mktg)', amt: '₹15K' },
                            { name: 'Admin', amt: '₹6.5K' },
                        ].map((f, i) => (
                            <span key={i} className="neo-tag text-[7px] sm:text-[8px] bg-white">{f.name} {f.amt}</span>
                        ))}
                    </div>
                    <p className="text-[9px] sm:text-[10px] text-[#8A8A8A] mt-1">Stays FLAT regardless of hub count.</p>
                </div>

                {/* Monthly P&L */}
                <div className="neo-card-flat p-3 sm:p-4 max-w-4xl mx-auto mb-3 sm:mb-4 animate-slide-up animate-delay-3">
                    <h3 className="font-display text-xs sm:text-sm text-[#1A1A1A] mb-2 sm:mb-3">Month-by-Month</h3>
                    <div className="grid grid-cols-6 sm:grid-cols-12 gap-1">
                        {MONTHS.map((m) => {
                            const isPositive = m.val.startsWith('+');
                            return (
                                <div key={m.m} className={`p-1 sm:p-1.5 text-center border ${isPositive ? 'bg-[#E8F5E9] border-[#4CAF50]/20' : 'bg-[#FFF3E0] border-[#FF9800]/20'}`}>
                                    <span className="font-mono text-[7px] sm:text-[8px] font-bold text-[#1A1A1A] block">{m.m}</span>
                                    <span className={`font-mono text-[7px] sm:text-[9px] font-bold block ${isPositive ? 'text-[#4CAF50]' : 'text-[#FF9800]'}`}>{m.val}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Year 1 stats */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 max-w-4xl mx-auto animate-fade-in animate-delay-5">
                    <div className="neo-card-yellow p-2 sm:p-3 text-center">
                        <span className="stat-number text-base sm:text-xl text-[#1A1A1A]">₹15.5L</span>
                        <span className="font-mono text-[8px] sm:text-[9px] text-[#4A4A4A] block mt-1">Y1 REVENUE</span>
                    </div>
                    <div className="neo-card-mint p-2 sm:p-3 text-center">
                        <span className="stat-number text-base sm:text-xl text-[#4CAF50]">+₹1.26L</span>
                        <span className="font-mono text-[8px] sm:text-[9px] text-[#4A4A4A] block mt-1">Y1 NET PROFIT</span>
                    </div>
                    <div className="neo-card-solid-pink p-2 sm:p-3 text-center shadow-[3px_3px_0px_#1A1A1A]">
                        <span className="stat-number text-base sm:text-xl text-white">₹36.26L</span>
                        <span className="font-mono text-[8px] sm:text-[9px] text-white/70 block mt-1">Y1 BANK BALANCE</span>
                    </div>
                    <div className="neo-card-peach p-2 sm:p-3 text-center">
                        <span className="stat-number text-base sm:text-xl text-[#FF9800]">₹1.47L</span>
                        <span className="font-mono text-[8px] sm:text-[9px] text-[#4A4A4A] block mt-1">PEAK LOSS (M5)</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
