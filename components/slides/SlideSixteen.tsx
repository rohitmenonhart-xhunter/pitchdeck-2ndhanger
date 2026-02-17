'use client';

const SCENARIOS = [
    {
        label: 'Worst',
        m1Vol: '100/day',
        profitable: 'Month 9-10',
        y1Bank: '~₹33L',
        fill: 'neo-card-peach',
    },
    {
        label: 'Base',
        m1Vol: '150/day',
        profitable: 'Month 5-6',
        y1Bank: '~₹38L',
        fill: 'neo-card-yellow',
    },
    {
        label: 'Best',
        m1Vol: '200/day',
        profitable: 'Month 4',
        y1Bank: '~₹42L',
        fill: 'neo-card-mint',
    },
];

const RISKS = [
    { risk: 'Damage', mitigation: '0.1% rate, ₹5K/month reserve, we pay every claim' },
    { risk: 'Slow Acquisition', mitigation: '80/day not 150? Hub profitable M6 not M3. ₹10L buffer covers it.' },
    { risk: 'Operator Attrition', mitigation: '1 week gap, Murahari + 2nd operator cover' },
];

export function SlideSixteen() {
    return (
        <div className="slide-container retro-grid">
            <div className="slide-number">16 / 17</div>

            <div className="max-w-5xl mx-auto w-full px-4 sm:px-6">
                <div className="text-center mb-3 sm:mb-5">
                    <div className="neo-tag-coral inline-flex mb-2 sm:mb-4 animate-fade-in">
                        <span>Risk & Sensitivity</span>
                    </div>
                    <h2 className="font-display text-xl sm:text-3xl md:text-4xl text-[#1A1A1A] animate-slide-up">
                        Even in the Worst Case, <span className="text-[#FF3366]">Your Money is Safe.</span>
                    </h2>
                </div>

                {/* Scenario table */}
                <div className="grid grid-cols-3 gap-2 sm:gap-3 max-w-3xl mx-auto mb-4 sm:mb-5">
                    {SCENARIOS.map((s, i) => (
                        <div key={i} className={`${s.fill} p-2.5 sm:p-4 animate-slide-up animate-delay-${i + 2}`}>
                            <h3 className="font-display text-xs sm:text-sm text-[#1A1A1A] mb-2">{s.label}</h3>
                            <div className="space-y-1.5">
                                <div><span className="font-mono text-[8px] sm:text-[9px] text-[#8A8A8A]">M1 Vol</span><br /><span className="font-mono text-[9px] sm:text-[11px] font-bold text-[#1A1A1A]">{s.m1Vol}</span></div>
                                <div><span className="font-mono text-[8px] sm:text-[9px] text-[#8A8A8A]">Co. Profitable</span><br /><span className="font-mono text-[9px] sm:text-[11px] font-bold text-[#1A1A1A]">{s.profitable}</span></div>
                                <div><span className="font-mono text-[8px] sm:text-[9px] text-[#8A8A8A]">Y1 Bank</span><br /><span className="stat-number text-sm sm:text-lg text-[#FF3366]">{s.y1Bank}</span></div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Honest downsides */}
                <div className="neo-card-flat p-3 sm:p-4 max-w-3xl mx-auto mb-3 sm:mb-4 animate-fade-in animate-delay-6">
                    <h4 className="font-display text-xs sm:text-sm text-[#1A1A1A] mb-2">Honest Downsides</h4>
                    <div className="space-y-1.5 sm:space-y-2">
                        {RISKS.map((r, i) => (
                            <div key={i} className="flex items-start gap-2 border-b border-[#1A1A1A]/5 pb-1.5">
                                <span className="font-mono text-[9px] sm:text-[10px] font-bold text-[#FF3366] w-20 sm:w-28 flex-shrink-0">{r.risk}</span>
                                <span className="text-[9px] sm:text-[10px] text-[#4A4A4A]">{r.mitigation}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="neo-card-solid-pink p-2.5 sm:p-3 max-w-3xl mx-auto text-center shadow-[4px_4px_0px_#1A1A1A] animate-scale-in animate-delay-8">
                    <p className="text-[9px] sm:text-[11px] text-white mb-1">
                        <span className="font-bold">Stress test:</span> 300 pcs max, ₹12 blended, +10% costs → hub still profitable, company survives 40+ months.
                    </p>
                    <p className="text-[9px] sm:text-[10px] text-white/70">
                        Question of speed, not viability.
                    </p>
                </div>
            </div>
        </div>
    );
}
