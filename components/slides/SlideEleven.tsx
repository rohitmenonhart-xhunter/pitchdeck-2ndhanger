'use client';

const FACTORS = [
    { title: 'Revenue', desc: 'Year 1 projected ₹54.6L. At 5.5x revenue multiple (standard for early-stage on-demand services): ₹3 Cr.' },
    { title: 'Earnings', desc: 'Annualized profit at Month 12: ₹30L. At 10x earnings: ₹3 Cr.' },
    { title: 'Replication', desc: 'One hub = ₹30L annual profit from ₹7.7L investment. The playbook for replicating across 10, 50, 500 hubs is what you\'re investing in.' },
    { title: 'Technology', desc: 'Three proprietary apps — customer, rider, hub management. Built in-house at near-zero cost. Replacement cost through agency: ₹15-25L.' },
    { title: 'Comparable', desc: 'Pre-seed on-demand service startups in India raise at ₹2-5 Cr post-money with less traction and higher burn.' },
];

export function SlideEleven() {
    return (
        <div className="slide-container retro-grid">
            <div className="slide-number">11 / 18</div>

            <div className="max-w-5xl mx-auto w-full px-4 sm:px-6">
                <div className="text-center mb-3 sm:mb-5">
                    <div className="neo-tag-yellow inline-flex mb-2 sm:mb-4 animate-fade-in">
                        <span>Valuation Justification</span>
                    </div>
                    <h2 className="font-display text-xl sm:text-3xl md:text-4xl text-[#1A1A1A] animate-slide-up">
                        ₹3 Cr Post-Money. <span className="text-[#FF3366]">Five Reasons Why.</span>
                    </h2>
                </div>

                <div className="space-y-2 sm:space-y-3 max-w-3xl mx-auto">
                    {FACTORS.map((f, i) => {
                        const fills = ['neo-card-peach', 'neo-card-yellow', 'neo-card-mint', 'neo-card-lavender', 'neo-card-solid-pink'];
                        const isLast = i === FACTORS.length - 1;
                        return (
                            <div key={i} className={`${fills[i]} p-3 sm:p-4 animate-slide-up animate-delay-${i + 2} ${isLast ? 'shadow-[3px_3px_0px_#1A1A1A]' : ''}`}>
                                <div className="flex items-start gap-2 sm:gap-3">
                                    <span className={`w-6 h-6 flex items-center justify-center border-2 font-mono text-[9px] font-bold flex-shrink-0 mt-0.5 ${isLast ? 'bg-white text-[#FF3366] border-white' : 'bg-white text-[#FF3366] border-[#1A1A1A]/10'}`}>
                                        {String(i + 1).padStart(2, '0')}
                                    </span>
                                    <div>
                                        <h3 className={`font-display text-xs sm:text-sm mb-0.5 ${isLast ? 'text-white' : 'text-[#1A1A1A]'}`}>{f.title}</h3>
                                        <p className={`text-[9px] sm:text-[10px] leading-relaxed ${isLast ? 'text-white/85' : 'text-[#4A4A4A]'}`}>{f.desc}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
