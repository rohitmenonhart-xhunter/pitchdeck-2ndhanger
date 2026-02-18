'use client';

const RECOVERY = [
    { when: 'Day 1', cash: '₹15.0L', assets: '₹0', total: '₹15.0L' },
    { when: 'Month 1', cash: '₹6.3L', assets: '₹6.1L', total: '₹12.4L' },
    { when: 'Month 6', cash: '₹8.6L', assets: '₹5.6L', total: '₹14.2L' },
    { when: 'Month 9', cash: '₹14.5L', assets: '₹5.5L', total: '₹20.0L' },
    { when: 'Month 12', cash: '₹18-20L', assets: '₹5.0L', total: '₹23-25L' },
];

const EXITS = [
    {
        title: 'Buyback from Profits',
        desc: 'M12 cash balance: ₹18-20L. Company buys back your 5% at ₹15L from operating cash. You get full investment back.',
        fill: 'neo-card-peach',
    },
    {
        title: 'Secondary at Seed',
        desc: 'M12-18, we raise Seed at ₹15-25 Cr. Your 5% is worth ₹75L-1.25 Cr. 5-8x return.',
        fill: 'neo-card-yellow',
    },
    {
        title: 'Liquidation Value',
        desc: 'Worst case. Machine resale ₹2.5-3L + fixtures ₹50K + cash ₹5-7L = ₹8-10L recoverable. Max downside: ₹5-7L.',
        fill: 'neo-card-mint',
    },
];

export function SlideTen() {
    return (
        <div className="slide-container retro-grid">
            <div className="slide-number">10 / 18</div>

            <div className="max-w-5xl mx-auto w-full px-4 sm:px-6">
                <div className="text-center mb-3 sm:mb-4">
                    <div className="neo-tag-coral inline-flex mb-2 sm:mb-3 animate-fade-in">
                        <span>Capital Protection</span>
                    </div>
                    <h2 className="font-display text-xl sm:text-3xl md:text-4xl text-[#1A1A1A] animate-slide-up">
                        Your Money Is <span className="text-[#FF3366]">Never Gone.</span>
                    </h2>
                </div>

                {/* Recovery table */}
                <div className="neo-card-flat p-2.5 sm:p-3 max-w-3xl mx-auto mb-3 animate-slide-up animate-delay-2">
                    <div className="grid grid-cols-4 gap-0 mb-1">
                        <div className="p-1 border-b-2 border-[#1A1A1A]/10"><span className="font-mono text-[7px] sm:text-[8px] text-[#8A8A8A]">When</span></div>
                        <div className="p-1 border-b-2 border-[#1A1A1A]/10 text-center"><span className="font-mono text-[7px] sm:text-[8px] text-[#8A8A8A]">Cash</span></div>
                        <div className="p-1 border-b-2 border-[#1A1A1A]/10 text-center"><span className="font-mono text-[7px] sm:text-[8px] text-[#8A8A8A]">Assets</span></div>
                        <div className="p-1 border-b-2 border-[#1A1A1A]/10 text-right"><span className="font-mono text-[7px] sm:text-[8px] text-[#8A8A8A]">Total</span></div>
                    </div>
                    {RECOVERY.map((r, i) => (
                        <div key={i} className={`grid grid-cols-4 gap-0 border-b border-[#1A1A1A]/5 ${i === RECOVERY.length - 1 ? 'bg-[#FF3366]/5' : ''}`}>
                            <div className="p-1"><span className="font-mono text-[9px] sm:text-[10px] font-bold text-[#1A1A1A]">{r.when}</span></div>
                            <div className="p-1 text-center"><span className="text-[9px] sm:text-[10px] text-[#4A4A4A]">{r.cash}</span></div>
                            <div className="p-1 text-center"><span className="text-[9px] sm:text-[10px] text-[#4A4A4A]">{r.assets}</span></div>
                            <div className="p-1 text-right"><span className="text-[9px] sm:text-[10px] font-bold text-[#4CAF50]">{r.total}</span></div>
                        </div>
                    ))}
                </div>

                <p className="text-center text-[9px] sm:text-[10px] text-[#4A4A4A] mb-3 animate-fade-in animate-delay-4">
                    Money moves from cash → physical assets → assets generate profit → profit rebuilds cash. <span className="font-bold text-[#1A1A1A]">By Month 9, cash exceeds original investment.</span>
                </p>

                {/* Three exits */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-2.5 max-w-4xl mx-auto mb-3 animate-fade-in animate-delay-5">
                    {EXITS.map((e, i) => (
                        <div key={i} className={`${e.fill} p-2.5 sm:p-3`}>
                            <h4 className="font-display text-[10px] sm:text-xs text-[#1A1A1A] mb-1">{e.title}</h4>
                            <p className="text-[8px] sm:text-[9px] text-[#4A4A4A] leading-relaxed">{e.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="neo-card-solid-pink p-2.5 sm:p-3 max-w-3xl mx-auto text-center shadow-[3px_3px_0px_#1A1A1A] animate-scale-in animate-delay-7">
                    <p className="text-[8px] sm:text-[10px] text-white mb-1">
                        <span className="font-bold">Formal buyback clause</span> in the investment agreement. Your capital is contractually protected.
                    </p>
                    <p className="text-[7px] sm:text-[9px] text-white/60">
                        Most startups burn on salaries, ads, software with zero recoverable value. ₹7.7L of yours sits as a physical machine — steel, functional, resalable.
                    </p>
                </div>
            </div>
        </div>
    );
}
