'use client';

const PHASES = [
    { phase: 'Phase 1', title: 'IRON', timeline: 'Now → Year 2', desc: 'Doorstep machine ironing, prove hub model', fill: 'neo-card-peach' },
    { phase: 'Phase 2', title: 'WASH / DRY / IRON', timeline: 'Year 2-3', desc: 'Add machines to same hubs, revenue ₹658 → ₹2,000/customer', fill: 'neo-card-yellow' },
    { phase: 'Phase 3', title: 'SUBSCRIPTION', timeline: 'Year 3-4', desc: '₹999/month unlimited, become household utility', fill: 'neo-card-mint' },
    { phase: 'Phase 4', title: 'CLOTHING RENTAL', timeline: 'Year 5+', desc: 'Circular fashion, zero new infrastructure needed', fill: 'neo-card-lavender' },
    { phase: 'Phase 5', title: 'GLOBAL', timeline: 'Year 5+', desc: 'Southeast Asia, Middle East, Africa — same hub model, same economics', fill: 'neo-card-solid-pink' },
];

export function SlideFour() {
    return (
        <div className="slide-container retro-grid">
            <div className="slide-number">04 / 17</div>

            <div className="max-w-5xl mx-auto w-full px-4 sm:px-6">
                <div className="text-center mb-3 sm:mb-5">
                    <div className="neo-tag-coral inline-flex mb-2 sm:mb-4 animate-fade-in">
                        <span>The Vision</span>
                    </div>
                    <h2 className="font-display text-xl sm:text-3xl md:text-4xl text-[#1A1A1A] animate-slide-up">
                        From ₹11 Iron to <span className="text-[#FF3366]">Global Garment Platform</span>
                    </h2>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-3 max-w-5xl mx-auto mb-4">
                    {PHASES.map((p, i) => {
                        const isLast = i === PHASES.length - 1;
                        return (
                            <div key={i} className={`${p.fill} p-2.5 sm:p-3 animate-slide-up animate-delay-${i + 2} ${isLast ? 'shadow-[3px_3px_0px_#1A1A1A]' : ''}`}>
                                <div className="flex items-center gap-1.5 mb-1">
                                    <span className={`font-mono text-[7px] sm:text-[8px] font-bold px-1 py-0.5 border ${isLast ? 'bg-white text-[#FF3366] border-white' : 'bg-white border-[#1A1A1A]/15 text-[#FF3366]'}`}>
                                        {p.phase}
                                    </span>
                                </div>
                                <span className={`font-mono text-[7px] sm:text-[8px] block mb-1 ${isLast ? 'text-white/50' : 'text-[#8A8A8A]'}`}>{p.timeline}</span>
                                <h3 className={`font-display text-[10px] sm:text-xs mb-1 ${isLast ? 'text-white' : 'text-[#1A1A1A]'}`}>{p.title}</h3>
                                <p className={`text-[8px] sm:text-[9px] leading-relaxed ${isLast ? 'text-white/80' : 'text-[#4A4A4A]'}`}>{p.desc}</p>
                            </div>
                        );
                    })}
                </div>

                <div className="neo-card-solid-yellow p-3 max-w-3xl mx-auto text-center animate-scale-in animate-delay-8 shadow-[3px_3px_0px_#1A1A1A]">
                    <p className="text-[9px] sm:text-xs font-bold text-[#1A1A1A]">
                        Zepto scaled 1,000+ dark stores in 3 years. Our hub is simpler — one machine, no cold chain, no 3,000 SKUs.{' '}
                        <span className="text-[#FF3366]">We can scale faster.</span>
                    </p>
                </div>
            </div>
        </div>
    );
}
