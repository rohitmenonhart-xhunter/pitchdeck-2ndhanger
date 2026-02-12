'use client';

const PHASES = [
    {
        phase: 'Phase 1',
        title: 'IRON',
        timeline: 'Now → Year 2',
        desc: 'Doorstep machine ironing. Prove hub model. 3 hubs, 300+ households. Build the logistics backbone and customer trust.',
        fill: 'neo-card-peach',
    },
    {
        phase: 'Phase 2',
        title: 'WASH + DRY + IRON',
        timeline: 'Year 2-3',
        desc: 'Add washing machines and dryers to hubs. Full garment care. Customer drops off dirty clothes, gets back everything washed, dried, pressed, and packaged.',
        fill: 'neo-card-yellow',
    },
    {
        phase: 'Phase 3',
        title: 'EVERY HOUSEHOLD SUBSCRIBES',
        timeline: 'Year 3-4',
        desc: 'Monthly subscription model. ₹999/month for a family of 4. Unlimited wash+dry+iron. 2nd Hanger becomes as essential as your internet connection.',
        fill: 'neo-card-mint',
    },
    {
        phase: 'Phase 4',
        title: 'CLOTHING RENTAL',
        timeline: 'Year 5+',
        desc: 'Once we\'re the garment infrastructure — machines, logistics, millions of households — we become the platform for clothing rental. Wedding sherwanis, designer sarees, formal suits. Rent → Wear → Return → We clean → Next customer.',
        fill: 'neo-card-solid-pink',
    },
];

export function SlideFour() {
    return (
        <div className="slide-container retro-grid">
            <div className="slide-number">04 / 19</div>

            <div className="max-w-5xl mx-auto w-full px-4 sm:px-6">
                <div className="text-center mb-3 sm:mb-5 md:mb-6">
                    <div className="neo-tag-coral inline-flex mb-2 sm:mb-4 animate-fade-in">
                        <span>The Vision</span>
                    </div>
                    <h2 className="font-display text-xl sm:text-3xl md:text-4xl text-[#1A1A1A] animate-slide-up">
                        From ₹11 Iron to <span className="text-[#FF3366]">India&apos;s Garment Lifecycle Platform</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 mb-3 sm:mb-4">
                    {PHASES.map((p, i) => {
                        const isLast = i === PHASES.length - 1;
                        return (
                            <div key={i} className={`${p.fill} p-3 sm:p-4 animate-slide-up animate-delay-${i + 2} ${isLast ? 'shadow-[4px_4px_0px_#1A1A1A]' : ''}`}>
                                <div className="flex items-center gap-2 mb-1.5 sm:mb-2">
                                    <span className={`font-mono text-[8px] sm:text-[9px] font-bold px-1.5 py-0.5 border ${isLast ? 'bg-white text-[#FF3366] border-white' : 'bg-white border-[#1A1A1A]/15 text-[#FF3366]'}`}>
                                        {p.phase}
                                    </span>
                                    <span className={`font-mono text-[8px] sm:text-[9px] ${isLast ? 'text-white/60' : 'text-[#8A8A8A]'}`}>{p.timeline}</span>
                                </div>
                                <h3 className={`font-display text-xs sm:text-sm mb-1 ${isLast ? 'text-white' : 'text-[#1A1A1A]'}`}>{p.title}</h3>
                                <p className={`text-[9px] sm:text-[10px] leading-relaxed ${isLast ? 'text-white/85' : 'text-[#4A4A4A]'}`}>{p.desc}</p>
                            </div>
                        );
                    })}
                </div>

                <div className="neo-card-solid-yellow p-3 max-w-3xl mx-auto text-center animate-scale-in animate-delay-7 shadow-[3px_3px_0px_#1A1A1A]">
                    <p className="text-[10px] sm:text-xs font-bold text-[#1A1A1A]">
                        &ldquo;We start with a ₹11 iron. We end as the platform that <span className="text-[#FF3366]">changes how India wears clothes.</span>&rdquo;
                    </p>
                </div>
            </div>
        </div>
    );
}
