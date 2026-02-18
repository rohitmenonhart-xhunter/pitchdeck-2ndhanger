'use client';

export function SlideSeven() {
    return (
        <div className="slide-container retro-grid">
            <div className="slide-number">07 / 18</div>

            <div className="max-w-5xl mx-auto w-full px-4 sm:px-6">
                <div className="text-center mb-3 sm:mb-5">
                    <div className="neo-tag-yellow inline-flex mb-2 sm:mb-4 animate-fade-in">
                        <span>Hub Economics</span>
                    </div>
                    <h2 className="font-display text-xl sm:text-3xl md:text-4xl text-[#1A1A1A] animate-slide-up">
                        ₹7.7L Setup. <span className="text-[#FF3366]">No Van. No Vehicle.</span>
                    </h2>
                    <p className="font-mono text-[9px] sm:text-xs text-[#8A8A8A] mt-1 animate-fade-in animate-delay-1">
                        Riders bring their own bikes. Paid per trip.
                    </p>
                </div>

                {/* Key metrics */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 max-w-4xl mx-auto mb-3 sm:mb-4 animate-fade-in animate-delay-2">
                    <div className="neo-card-peach p-2 sm:p-3 text-center">
                        <span className="stat-number text-base sm:text-xl text-[#1A1A1A]">₹7.7L</span>
                        <span className="font-mono text-[7px] sm:text-[8px] text-[#4A4A4A] block mt-1">HUB SETUP</span>
                    </div>
                    <div className="neo-card-mint p-2 sm:p-3 text-center">
                        <span className="stat-number text-base sm:text-xl text-[#1A1A1A]">₹41,500</span>
                        <span className="font-mono text-[7px] sm:text-[8px] text-[#4A4A4A] block mt-1">FIXED COST/MO</span>
                    </div>
                    <div className="neo-card-yellow p-2 sm:p-3 text-center">
                        <span className="stat-number text-base sm:text-xl text-[#FF3366]">81 pcs</span>
                        <span className="font-mono text-[7px] sm:text-[8px] text-[#4A4A4A] block mt-1">DAILY BREAKEVEN</span>
                    </div>
                    <div className="neo-card-solid-pink p-2 sm:p-3 text-center shadow-[3px_3px_0px_#1A1A1A]">
                        <span className="stat-number text-base sm:text-xl text-white">40</span>
                        <span className="font-mono text-[7px] sm:text-[8px] text-white/70 block mt-1">FAMILIES NEEDED</span>
                    </div>
                </div>

                <div className="neo-card-flat p-3 sm:p-4 max-w-3xl mx-auto mb-3 animate-fade-in animate-delay-4">
                    <p className="text-[10px] sm:text-[11px] text-[#4A4A4A] leading-relaxed mb-2">
                        Hub fixed cost: Rent + 2 operators + basics. That&apos;s it. <span className="font-bold text-[#1A1A1A]">Rider cost is 100% variable.</span> No orders = no rider payments. Our costs breathe with our revenue.
                    </p>
                    <p className="text-[10px] sm:text-[11px] text-[#4A4A4A] leading-relaxed">
                        Machine capacity: <span className="font-bold text-[#1A1A1A]">1,500 pieces/day.</span> At breakeven we use 5% of capacity. 95% headroom to grow on the same machine, same rent, same operators.
                    </p>
                </div>

                <div className="neo-card-solid-yellow p-3 sm:p-4 max-w-3xl mx-auto text-center shadow-[3px_3px_0px_#1A1A1A] animate-scale-in animate-delay-6">
                    <p className="text-[10px] sm:text-xs text-[#1A1A1A] mb-1">At 700 pieces/day:</p>
                    <span className="stat-number text-2xl sm:text-3xl text-[#FF3366]">₹2.5L</span>
                    <p className="font-mono text-[8px] sm:text-[9px] text-[#4A4A4A] mt-1">MONTHLY PROFIT · SAME HUB · SAME ₹7.7L INVESTMENT</p>
                    <p className="text-[9px] sm:text-[10px] text-[#1A1A1A] mt-1 font-bold">That&apos;s the leverage of a machine-first model.</p>
                </div>
            </div>
        </div>
    );
}
