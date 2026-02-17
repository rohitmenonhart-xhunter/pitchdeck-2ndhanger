'use client';

const MILESTONES = [
    { period: 'M1-4', title: 'Hub 1, Avadi', desc: 'Prove model, profitable M3', fill: 'neo-card-peach' },
    { period: 'M5-8', title: 'Hub 2, Ambattur', desc: 'IT corridor, different demographic', fill: 'neo-card-yellow' },
    { period: 'M9-12', title: 'Hub 3, Anna Nagar', desc: 'Premium market, Seed-ready', fill: 'neo-card-mint' },
    { period: 'M12-18', title: 'Seed ₹3-5 Cr', desc: '10-15 hubs Chennai, franchise launch', fill: 'neo-card-lavender' },
    { period: 'M18-24', title: 'Multi-City', desc: 'Bangalore + Hyderabad, 30+ hubs', fill: 'neo-card-peach' },
    { period: 'M24-36', title: 'Series A ₹15-20 Cr', desc: '100+ hubs, 5-8 cities, wash+dry', fill: 'neo-card-yellow' },
    { period: 'M36-48', title: 'Series B ₹50-80 Cr', desc: '500+ hubs, subscription live', fill: 'neo-card-mint' },
    { period: 'M48-60', title: 'Series C ₹200+ Cr', desc: '2,000+ hubs, pan-India, global pilot', fill: 'neo-card-solid-pink' },
];

export function SlideTen() {
    return (
        <div className="slide-container retro-grid">
            <div className="slide-number">10 / 17</div>

            <div className="max-w-5xl mx-auto w-full px-4 sm:px-6">
                <div className="text-center mb-3 sm:mb-5">
                    <div className="neo-tag-yellow inline-flex mb-2 sm:mb-4 animate-fade-in">
                        <span>Roadmap</span>
                    </div>
                    <h2 className="font-display text-xl sm:text-3xl md:text-4xl text-[#1A1A1A] animate-slide-up">
                        Hub 1 → <span className="text-[#FF3366]">2,000+ Hubs</span>
                    </h2>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 sm:gap-2 max-w-5xl mx-auto mb-3 sm:mb-4">
                    {MILESTONES.map((m, i) => {
                        const isLast = i === MILESTONES.length - 1;
                        return (
                            <div key={i} className={`${m.fill} p-2 sm:p-3 animate-slide-up animate-delay-${Math.min(i + 2, 9)} ${isLast ? 'shadow-[3px_3px_0px_#1A1A1A]' : ''}`}>
                                <span className={`font-mono text-[7px] sm:text-[8px] font-bold block mb-0.5 ${isLast ? 'text-white/60' : 'text-[#FF3366]'}`}>{m.period}</span>
                                <h3 className={`font-display text-[10px] sm:text-xs mb-0.5 ${isLast ? 'text-white' : 'text-[#1A1A1A]'}`}>{m.title}</h3>
                                <p className={`text-[8px] sm:text-[9px] leading-relaxed ${isLast ? 'text-white/80' : 'text-[#4A4A4A]'}`}>{m.desc}</p>
                            </div>
                        );
                    })}
                </div>

                <div className="neo-card-solid-pink p-2.5 sm:p-3 max-w-xl mx-auto text-center animate-scale-in animate-delay-10 shadow-[3px_3px_0px_#1A1A1A]">
                    <p className="text-[10px] sm:text-xs font-bold text-white">
                        Goal: Fastest-growing garment care company in history.
                    </p>
                </div>
            </div>
        </div>
    );
}
