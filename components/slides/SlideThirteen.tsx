'use client';

const YEARS = [
    {
        year: 'Year 1',
        tag: 'Prove',
        round: 'Pre-Seed — ₹45L',
        fill: 'neo-card-peach',
        items: [
            'Single hub — Avadi, Chennai',
            'Month 1 profitable. Month 10 at ₹1.6L/mo',
            'Open Hub 2 at Month 7 from scaling reserve',
            'Year 1 combined profit: ₹10-13L across 2 hubs',
        ],
    },
    {
        year: 'Year 2',
        tag: 'Dominate Chennai',
        round: 'Seed — ₹2-3 Cr',
        fill: 'neo-card-yellow',
        items: [
            '15-20 hubs across Chennai',
            'Add wash+iron (₹25-30/pc)',
            'Subscriptions: ₹499-1,999/month plans',
            'Revenue: ₹3-5 Cr · Profit: ₹1-1.5 Cr',
        ],
    },
    {
        year: 'Year 3',
        tag: 'Multi-City',
        round: 'Series A — ₹15-20 Cr',
        fill: 'neo-card-blue',
        items: [
            '50-80 hubs — Chennai + Bangalore + Hyderabad',
            'B2B: hotels, hostels, corporates',
            'Private label garment care products',
            'Revenue: ₹12-18 Cr · Profit: ₹3-5 Cr',
        ],
    },
    {
        year: 'Year 4-5',
        tag: 'National Infrastructure',
        round: 'Series B',
        fill: 'neo-card-solid-pink',
        items: [
            '250-500+ hubs · 10-15 cities',
            'Full platform: iron, wash, dry clean, B2B, products',
            'Revenue: ₹150-200 Cr',
            'Approaching ₹800-1,200 Cr SOM',
        ],
    },
];

export function SlideThirteen() {
    return (
        <div className="slide-container retro-grid">
            <div className="slide-number">13 / 17</div>

            <div className="max-w-6xl mx-auto w-full px-4 sm:px-6">
                <div className="text-center mb-4 md:mb-5">
                    <div className="neo-tag-pink inline-flex mb-3 animate-fade-in">
                        <span>Scaling</span>
                    </div>
                    <h2 className="font-display text-xl sm:text-3xl md:text-4xl text-[#1A1A1A] animate-slide-up">
                        One hub proves it. <span className="text-[#FF3366]">Then we copy-paste.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 mb-3 sm:mb-4">
                    {YEARS.map((y, i) => {
                        const isLast = i === YEARS.length - 1;
                        return (
                            <div key={i} className={`${y.fill} p-3 md:p-4 animate-slide-up animate-delay-${i + 2} ${isLast ? 'shadow-[4px_4px_0px_#1A1A1A]' : ''}`}>
                                <div className="flex items-center gap-2 mb-2">
                                    <span className={`font-mono text-[8px] font-bold px-1.5 py-0.5 border ${isLast ? 'bg-white text-[#FF3366] border-white' : 'bg-white border-[#1A1A1A]/15 text-[#FF3366]'}`}>
                                        {y.year}
                                    </span>
                                </div>
                                <h3 className={`font-display text-sm mb-1 ${isLast ? 'text-white' : 'text-[#1A1A1A]'}`}>{y.tag}</h3>
                                <div className={`font-mono text-[8px] mb-2 ${isLast ? 'text-white/60' : 'text-[#8A8A8A]'}`}>{y.round}</div>
                                <div className="space-y-1">
                                    {y.items.map((item, j) => (
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

                <div className="neo-card-solid-yellow p-3 max-w-3xl mx-auto text-center animate-scale-in animate-delay-7 shadow-[3px_3px_0px_#1A1A1A]">
                    <p className="text-[10px] md:text-xs font-bold text-[#1A1A1A]">
                        Same machine. Same setup cost. Same economics. Same 7-month payback.{' '}
                        <span className="text-[#FF3366]">This isn&apos;t a startup that reinvents — it&apos;s a proven unit that multiplies.</span>
                    </p>
                </div>
            </div>
        </div>
    );
}
