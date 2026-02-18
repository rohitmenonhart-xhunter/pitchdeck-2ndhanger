'use client';

const RISKS = [
    { risk: 'Volume grows slower?', mitigation: 'Breakeven moves from Month 3 to Month 5. ₹3L contingency covers extra losses. We don\'t die. We grow slower.' },
    { risk: 'Rider costs higher?', mitigation: 'Even at ₹7-8/piece variable, contribution margin is 68-72%. Breakeven moves from 81 to 105/day. Still under 55 families.' },
    { risk: 'Express demand is low?', mitigation: 'Blended drops from ₹25 to ₹18-20. Breakeven at 110-120/day. Model survives on regular alone. Express is upside, not survival.' },
    { risk: 'Everything fails?', mitigation: 'Machine resale ₹2.5-3L + remaining cash ₹5-7L = ₹8-10L recoverable. Maximum downside: ₹5-7L. Buyback clause in agreement.' },
];

export function SlideSeventeen() {
    return (
        <div className="slide-container retro-grid">
            <div className="slide-number">17 / 18</div>

            <div className="max-w-5xl mx-auto w-full px-4 sm:px-6">
                <div className="text-center mb-3 sm:mb-5">
                    <div className="neo-tag-yellow inline-flex mb-2 sm:mb-4 animate-fade-in">
                        <span>Risk</span>
                    </div>
                    <h2 className="font-display text-xl sm:text-3xl md:text-4xl text-[#1A1A1A] animate-slide-up">
                        We&apos;ll Tell You What Can Go Wrong <span className="text-[#FF3366]">Before You Ask.</span>
                    </h2>
                </div>

                <div className="space-y-2 sm:space-y-3 max-w-3xl mx-auto mb-3 sm:mb-4">
                    {RISKS.map((r, i) => {
                        const fills = ['neo-card-peach', 'neo-card-yellow', 'neo-card-mint', 'neo-card-solid-pink'];
                        const isLast = i === RISKS.length - 1;
                        return (
                            <div key={i} className={`${fills[i]} p-3 sm:p-4 animate-slide-up animate-delay-${i + 2} ${isLast ? 'shadow-[3px_3px_0px_#1A1A1A]' : ''}`}>
                                <h4 className={`font-display text-xs sm:text-sm mb-1 ${isLast ? 'text-white' : 'text-[#1A1A1A]'}`}>{r.risk}</h4>
                                <p className={`text-[9px] sm:text-[10px] leading-relaxed ${isLast ? 'text-white/85' : 'text-[#4A4A4A]'}`}>{r.mitigation}</p>
                            </div>
                        );
                    })}
                </div>

                <div className="neo-card-solid-yellow p-2.5 sm:p-3 max-w-xl mx-auto text-center shadow-[3px_3px_0px_#1A1A1A] animate-scale-in animate-delay-7">
                    <p className="text-[10px] sm:text-xs font-bold text-[#1A1A1A]">
                        This is a question of speed, not viability. <span className="text-[#FF3366]">The math works across a wide range of assumptions.</span>
                    </p>
                </div>
            </div>
        </div>
    );
}
