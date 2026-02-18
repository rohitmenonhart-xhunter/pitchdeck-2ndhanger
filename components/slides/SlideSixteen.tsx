'use client';

const PHASES = [
    { title: 'Seed (M12-18)', desc: '₹3-5 Cr. 10-15 hubs. Same city. Prove density effects.', fill: 'neo-card-peach' },
    { title: 'Series A (M24-30)', desc: '50-100 hubs. Franchise model. Multiple cities. Add wash+dry to hubs.', fill: 'neo-card-yellow' },
    { title: 'Series B+', desc: '500+ hubs. Subscription model. Pan-India.', fill: 'neo-card-solid-pink' },
];

export function SlideSixteen() {
    return (
        <div className="slide-container retro-grid">
            <div className="slide-number">16 / 18</div>

            <div className="max-w-5xl mx-auto w-full px-4 sm:px-6">
                <div className="text-center mb-3 sm:mb-5">
                    <div className="neo-tag-coral inline-flex mb-2 sm:mb-4 animate-fade-in">
                        <span>Scaling Roadmap</span>
                    </div>
                    <h2 className="font-display text-xl sm:text-3xl md:text-4xl text-[#1A1A1A] animate-slide-up">
                        ₹15L Proves → <span className="text-[#FF3366]">1 Hub Profitable.</span>
                    </h2>
                </div>

                <div className="neo-card-flat p-3 sm:p-4 max-w-3xl mx-auto mb-3 sm:mb-4 animate-slide-up animate-delay-2">
                    <p className="text-[10px] sm:text-[11px] text-[#4A4A4A] leading-relaxed mb-2">
                        Hub 2 onwards: <span className="font-bold text-[#1A1A1A]">₹6.5L each</span> (lower setup, lower marketing).
                    </p>
                    <p className="text-[10px] sm:text-[11px] text-[#4A4A4A] leading-relaxed">
                        Company overhead <span className="font-bold text-[#1A1A1A]">₹68,500 stays flat</span> across all hubs. Every hub makes every other hub&apos;s economics better.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 max-w-4xl mx-auto mb-4 sm:mb-5">
                    {PHASES.map((p, i) => {
                        const isLast = i === PHASES.length - 1;
                        return (
                            <div key={i} className={`${p.fill} p-3 sm:p-4 animate-slide-up animate-delay-${i + 3} ${isLast ? 'shadow-[3px_3px_0px_#1A1A1A]' : ''}`}>
                                <h3 className={`font-display text-xs sm:text-sm mb-1 ${isLast ? 'text-white' : 'text-[#1A1A1A]'}`}>{p.title}</h3>
                                <p className={`text-[9px] sm:text-[10px] leading-relaxed ${isLast ? 'text-white/85' : 'text-[#4A4A4A]'}`}>{p.desc}</p>
                            </div>
                        );
                    })}
                </div>

                <div className="neo-card-flat p-3 sm:p-4 max-w-3xl mx-auto mb-3 animate-fade-in animate-delay-7">
                    <p className="text-[10px] sm:text-[11px] text-[#4A4A4A] leading-relaxed">
                        <span className="font-bold text-[#1A1A1A]">Ironing is the entry point.</span> Wash+dry+iron triples revenue per customer. Subscription makes us a household utility. Each phase builds on the proven hub playbook.
                    </p>
                </div>

                <div className="neo-card-solid-yellow p-2.5 sm:p-3 max-w-xl mx-auto text-center shadow-[3px_3px_0px_#1A1A1A] animate-scale-in animate-delay-8">
                    <p className="text-[10px] sm:text-xs font-bold text-[#1A1A1A]">
                        We&apos;re not asking you to fund the vision. <span className="text-[#FF3366]">We&apos;re asking you to fund the proof.</span>
                    </p>
                </div>
            </div>
        </div>
    );
}
