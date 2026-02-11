'use client';

const QUARTERS = [
    {
        q: 'Q1', title: 'PROVE', months: 'Month 1-3', fill: 'neo-card-peach',
        items: ['Hub 1 operational — Avadi', 'Profitable from Month 1', '300+ pcs/day by Month 3', '100+ paying households', 'B2B contracts with PGs/hostels', 'App live · Subscriptions launched'],
    },
    {
        q: 'Q2', title: 'ACCELERATE', months: 'Month 4-6', fill: 'neo-card-yellow',
        items: ['Hub 1 crossing 400 pcs/day', 'Monthly profit: ₹75-90K', '60+ subscription households', 'Aroma add-on at 25%+ adoption', 'Hub 2 location identified + setup'],
    },
    {
        q: 'Q3', title: 'MULTIPLY', months: 'Month 7-9', fill: 'neo-card-mint',
        items: ['Hub 2 operational — Ambattur', 'Hub 1 profit: ₹1-1.1L/mo', 'Combined volume: 700+ pcs/day', 'Hub 2 profitable within 60 days', 'Seed round conversations started'],
    },
    {
        q: 'Q4', title: 'DOMINATE', months: 'Month 10-12', fill: 'neo-card-solid-pink',
        items: ['Hub 1 at ₹1.6L/mo profit', 'Hub 2 at ₹60-80K/mo profit', 'Hub 3 launched/launching', 'Combined profit: ₹2.5-3.2L/mo', 'Annual run rate: ₹35-40L', 'Seed closed at ₹15-20 Cr val'],
    },
];

export function SlideSixteen() {
    return (
        <div className="slide-container retro-grid">
            <div className="slide-number">16 / 17</div>

            <div className="max-w-6xl mx-auto w-full px-4 sm:px-6">
                <div className="text-center mb-4 md:mb-5">
                    <div className="neo-tag-coral inline-flex mb-3 animate-fade-in">
                        <span>Roadmap</span>
                    </div>
                    <h2 className="font-display text-xl sm:text-3xl md:text-4xl text-[#1A1A1A] animate-slide-up">
                        12 months. Four milestones. <span className="text-[#FF3366]">All measurable.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3">
                    {QUARTERS.map((q, i) => {
                        const isLast = i === QUARTERS.length - 1;
                        return (
                            <div key={i} className={`${q.fill} p-3 md:p-4 animate-slide-up animate-delay-${i + 2} ${isLast ? 'shadow-[4px_4px_0px_#1A1A1A]' : ''}`}>
                                <div className="flex items-center gap-2 mb-2">
                                    <span className={`font-mono text-[9px] font-bold px-1.5 py-0.5 border ${isLast ? 'bg-white text-[#FF3366] border-white' : 'bg-white border-[#1A1A1A]/15 text-[#FF3366]'}`}>
                                        {q.q}
                                    </span>
                                    <span className={`font-mono text-[8px] ${isLast ? 'text-white/60' : 'text-[#8A8A8A]'}`}>{q.months}</span>
                                </div>
                                <h3 className={`font-display text-sm mb-2 ${isLast ? 'text-white' : 'text-[#1A1A1A]'}`}>{q.title}</h3>
                                <div className="space-y-1">
                                    {q.items.map((item, j) => (
                                        <div key={j} className="flex items-start gap-1.5">
                                            <span className={`text-[9px] mt-0.5 font-bold ${isLast ? 'text-white/70' : 'text-[#FF3366]'}`}>→</span>
                                            <span className={`text-[9px] leading-tight ${isLast ? 'text-white/85' : 'text-[#4A4A4A]'}`}>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="neo-card-solid-yellow p-2.5 max-w-xl mx-auto mt-4 text-center animate-fade-in animate-delay-7 shadow-[3px_3px_0px_#1A1A1A]">
                    <p className="text-[10px] md:text-xs font-bold text-[#1A1A1A]">
                        Your ₹45L is now worth <span className="text-[#FF3366]">₹1.8-2.4 Cr</span> on paper by Month 12.
                    </p>
                </div>
            </div>
        </div>
    );
}
