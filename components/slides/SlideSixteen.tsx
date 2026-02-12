'use client';

const SCENARIOS = [
    {
        label: 'Worst Case',
        start: '100 pcs/day start, slow ramp, ₹12.50 blended rate',
        items: ['Hub breakeven Month 5-6', 'Company breakeven Month 9-10', 'Year 1 bank: ₹32.5L', 'Recovery: 82-84%'],
        fill: 'neo-card-peach',
        color: '#FF9800',
    },
    {
        label: 'Base Case',
        start: '150 pcs/day start, normal ramp, ₹13.50 blended rate',
        items: ['Hub profitable Month 2', 'Company profitable Month 6', 'Year 1 profit: +₹1.26L', 'Bank: ₹36.3L · Recovery: 92-94%'],
        fill: 'neo-card-yellow',
        color: '#4CAF50',
    },
    {
        label: 'Best Case',
        start: '200 pcs/day start, fast ramp, ₹14.50 blended rate',
        items: ['Company profitable Month 4', 'Year 1 profit: +₹4.5L', 'Bank: ₹39L', 'Recovery: 96%+'],
        fill: 'neo-card-mint',
        color: '#2196F3',
    },
];

export function SlideSixteen() {
    return (
        <div className="slide-container retro-grid">
            <div className="slide-number">16 / 19</div>

            <div className="max-w-5xl mx-auto w-full px-4 sm:px-6">
                <div className="text-center mb-3 sm:mb-5 md:mb-6">
                    <div className="neo-tag-coral inline-flex mb-2 sm:mb-4 animate-fade-in">
                        <span>Sensitivity Analysis</span>
                    </div>
                    <h2 className="font-display text-xl sm:text-3xl md:text-4xl text-[#1A1A1A] animate-slide-up">
                        Even in the Worst Case, <span className="text-[#FF3366]">Your Money is Safe.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-4xl mx-auto mb-4 sm:mb-5">
                    {SCENARIOS.map((s, i) => (
                        <div key={i} className={`${s.fill} p-3 sm:p-4 md:p-5 animate-slide-up animate-delay-${i + 2}`}>
                            <div className="flex items-center gap-2 mb-2">
                                <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: s.color }} />
                                <h3 className="font-display text-xs sm:text-sm text-[#1A1A1A]">{s.label}</h3>
                            </div>
                            <p className="text-[8px] sm:text-[9px] text-[#8A8A8A] mb-2 leading-relaxed">{s.start}</p>
                            <div className="space-y-1">
                                {s.items.map((item, j) => (
                                    <div key={j} className="flex items-start gap-1">
                                        <span className="text-[8px] sm:text-[9px] mt-0.5 text-[#FF3366]">→</span>
                                        <span className="text-[9px] sm:text-[10px] text-[#4A4A4A]">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="neo-card-solid-pink p-3 sm:p-4 max-w-3xl mx-auto text-center shadow-[4px_4px_0px_#1A1A1A] animate-scale-in animate-delay-6">
                    <p className="text-[10px] sm:text-sm font-bold text-white leading-relaxed">
                        The business doesn&apos;t die in ANY scenario. Worst case it scales slower.<br />
                        <span className="text-white/70">The model works — it&apos;s a question of speed, not viability.</span>
                    </p>
                </div>
            </div>
        </div>
    );
}
