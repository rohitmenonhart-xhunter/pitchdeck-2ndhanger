'use client';

const MILESTONES = [
    {
        period: 'Month 1-6',
        title: 'Hub 1 Prove',
        items: ['Avadi launch', '150→420 pcs/day', 'Hub profitable Month 2', 'Company profitable Month 6'],
        fill: 'neo-card-peach',
    },
    {
        period: 'Month 7-12',
        title: 'Hub 1 Scale',
        items: ['420→570 pcs/day', '₹1.15L/month hub profit', 'Build operations playbook', '₹36L in bank'],
        fill: 'neo-card-yellow',
    },
    {
        period: 'Month 13-18',
        title: 'Hub 2 Replicate',
        items: ['Ambattur launch', 'Replicate proven playbook', 'Combined profit ₹1.06L/month'],
        fill: 'neo-card-mint',
    },
    {
        period: 'Month 19-24',
        title: 'Hub 3 Premium',
        items: ['Anna Nagar launch', 'Higher blended rate (₹15+)', '3 hubs', '₹2.34L/month combined'],
        fill: 'neo-card-solid-pink',
    },
];

export function SlideTen() {
    return (
        <div className="slide-container retro-grid">
            <div className="slide-number">10 / 19</div>

            <div className="max-w-5xl mx-auto w-full px-4 sm:px-6">
                <div className="text-center mb-3 sm:mb-5 md:mb-6">
                    <div className="neo-tag-yellow inline-flex mb-2 sm:mb-4 animate-fade-in">
                        <span>24-Month Roadmap</span>
                    </div>
                    <h2 className="font-display text-xl sm:text-3xl md:text-4xl text-[#1A1A1A] animate-slide-up">
                        1 Hub → 3 Hubs → <span className="text-[#FF3366]">₹2.34L/month Profit</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 max-w-5xl mx-auto mb-4 sm:mb-5">
                    {MILESTONES.map((m, i) => {
                        const isLast = i === MILESTONES.length - 1;
                        return (
                            <div key={i} className={`${m.fill} p-3 sm:p-4 animate-slide-up animate-delay-${i + 2} relative ${isLast ? 'shadow-[4px_4px_0px_#1A1A1A]' : ''}`}>
                                <span className={`font-mono text-[8px] sm:text-[9px] font-bold block mb-1 ${isLast ? 'text-white/60' : 'text-[#FF3366]'}`}>{m.period}</span>
                                <h3 className={`font-display text-xs sm:text-sm mb-2 ${isLast ? 'text-white' : 'text-[#1A1A1A]'}`}>{m.title}</h3>
                                {m.items.map((item, j) => (
                                    <div key={j} className="flex items-start gap-1 mb-0.5">
                                        <span className={`text-[8px] sm:text-[9px] mt-0.5 ${isLast ? 'text-white/50' : 'text-[#FF3366]'}`}>→</span>
                                        <span className={`text-[9px] sm:text-[10px] ${isLast ? 'text-white/90' : 'text-[#4A4A4A]'}`}>{item}</span>
                                    </div>
                                ))}
                            </div>
                        );
                    })}
                </div>

                <div className="neo-card-solid-yellow p-3 max-w-4xl mx-auto text-center animate-scale-in animate-delay-7 shadow-[3px_3px_0px_#1A1A1A]">
                    <p className="text-[9px] sm:text-xs font-bold text-[#1A1A1A]">
                        Month 24: 3 hubs | ₹2.34L/month profit | ₹70L revenue run rate | ₹38-42L in bank | <span className="text-[#FF3366]">Seed-ready at ₹15-20 Cr valuation</span>
                    </p>
                </div>
            </div>
        </div>
    );
}
