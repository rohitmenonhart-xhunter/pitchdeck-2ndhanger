'use client';

export function SlideEight() {
    return (
        <div className="slide-container retro-grid">
            <div className="slide-number">08 / 17</div>

            <div className="max-w-5xl mx-auto w-full px-4 sm:px-6">
                <div className="text-center mb-3 sm:mb-5">
                    <div className="neo-tag-pink inline-flex mb-2 sm:mb-4 animate-fade-in">
                        <span>Company P&L</span>
                    </div>
                    <h2 className="font-display text-xl sm:text-3xl md:text-4xl text-[#1A1A1A] animate-slide-up">
                        Company Profitable by Month 5-6. <span className="text-[#FF3366]">Every Founder Paid.</span>
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
                            { name: 'Rohit', amt: '₹20K' },
                            { name: 'Murahari', amt: '₹15K' },
                            { name: 'Vibhav', amt: '₹15K' },
                            { name: 'Admin', amt: '₹6.5K' },
                        ].map((f, i) => (
                            <span key={i} className="neo-tag text-[7px] sm:text-[8px] bg-white">{f.name} {f.amt}</span>
                        ))}
                    </div>
                    <p className="text-[9px] sm:text-[10px] text-[#8A8A8A] mt-1">Flat — 1 hub or 10 hubs. Same overhead.</p>
                </div>

                {/* Key financials */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 max-w-3xl mx-auto mb-3 sm:mb-4 animate-slide-up animate-delay-3">
                    <div className="neo-card-peach p-2 sm:p-3 text-center">
                        <span className="stat-number text-base sm:text-xl text-[#1A1A1A]">393 pcs</span>
                        <span className="font-mono text-[8px] sm:text-[9px] text-[#4A4A4A] block mt-1">CO. BREAKEVEN/DAY</span>
                    </div>
                    <div className="neo-card-yellow p-2 sm:p-3 text-center">
                        <span className="stat-number text-base sm:text-xl text-[#1A1A1A]">Month 5-6</span>
                        <span className="font-mono text-[8px] sm:text-[9px] text-[#4A4A4A] block mt-1">CO. PROFITABLE</span>
                    </div>
                    <div className="neo-card-mint p-2 sm:p-3 text-center col-span-2 sm:col-span-1">
                        <span className="stat-number text-base sm:text-xl text-[#4CAF50]">₹53K</span>
                        <span className="font-mono text-[8px] sm:text-[9px] text-[#4A4A4A] block mt-1">M12 NET PROFIT/MO</span>
                    </div>
                </div>

                {/* Year 1 stats */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 max-w-4xl mx-auto animate-fade-in animate-delay-5">
                    <div className="neo-card-solid-pink p-2 sm:p-3 text-center shadow-[3px_3px_0px_#1A1A1A]">
                        <span className="stat-number text-base sm:text-xl text-white">~₹38L</span>
                        <span className="font-mono text-[8px] sm:text-[9px] text-white/70 block mt-1">Y1 BANK BALANCE</span>
                    </div>
                    <div className="neo-card-flat bg-[#F5F0E8] p-2 sm:p-3 text-center">
                        <span className="stat-number text-base sm:text-xl text-[#1A1A1A]">76%</span>
                        <span className="font-mono text-[8px] sm:text-[9px] text-[#4A4A4A] block mt-1">CAPITAL PRESERVED</span>
                    </div>
                    <div className="neo-card-flat bg-[#F5F0E8] p-2 sm:p-3 text-center">
                        <span className="stat-number text-base sm:text-xl text-[#FF9800]">~₹2.4L</span>
                        <span className="font-mono text-[8px] sm:text-[9px] text-[#4A4A4A] block mt-1">PEAK LOSS (M5)</span>
                    </div>
                    <div className="neo-card-flat bg-[#F5F0E8] p-2 sm:p-3 text-center">
                        <span className="stat-number text-base sm:text-xl text-[#1A1A1A]">₹12.6L</span>
                        <span className="font-mono text-[8px] sm:text-[9px] text-[#4A4A4A] block mt-1">TOTAL Y1 CASH USED</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
