'use client';

const TRACTION = [
    {
        title: 'Demand Validated',
        desc: 'Hazel Apartments micro-pilot. Customers paid ₹11 for machine ironing. Repeat orders within first week.',
        fill: 'neo-card-peach',
    },
    {
        title: 'App Architecture Ready',
        desc: 'Kotlin frontend, Express.js microservices backend. Technology partner Hitroo onboarded and building.',
        fill: 'neo-card-yellow',
    },
    {
        title: 'Financial Model Built',
        desc: 'Every cost line-item researched. Breakeven from first principles. 24-month projections stress-tested across best/base/worst scenarios.',
        fill: 'neo-card-mint',
    },
    {
        title: 'Team Committed',
        desc: '3 co-founders. Equity allocated. Roles defined. Ready to launch the day funding lands.',
        fill: 'neo-card-solid-pink',
    },
];

export function SlideFourteen() {
    return (
        <div className="slide-container retro-grid">
            <div className="slide-number">14 / 19</div>

            <div className="max-w-5xl mx-auto w-full px-4 sm:px-6">
                <div className="text-center mb-3 sm:mb-5 md:mb-6">
                    <div className="neo-tag-pink inline-flex mb-2 sm:mb-4 animate-fade-in">
                        <span>Traction & Validation</span>
                    </div>
                    <h2 className="font-display text-xl sm:text-3xl md:text-4xl text-[#1A1A1A] animate-slide-up">
                        Not Just a Deck. <span className="text-[#FF3366]">We&apos;ve Already Started.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-w-4xl mx-auto">
                    {TRACTION.map((t, i) => {
                        const isLast = i === TRACTION.length - 1;
                        return (
                            <div key={i} className={`${t.fill} p-4 sm:p-5 md:p-6 animate-slide-up animate-delay-${i + 2} ${isLast ? 'shadow-[4px_4px_0px_#1A1A1A]' : ''}`}>
                                <div className="flex items-center gap-2 mb-2 sm:mb-3">
                                    <span className={`w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center border-2 font-mono text-[10px] sm:text-xs font-bold ${isLast ? 'bg-white text-[#FF3366] border-white' : 'bg-white text-[#FF3366] border-[#1A1A1A]/15'}`}>
                                        {String(i + 1).padStart(2, '0')}
                                    </span>
                                    <h3 className={`font-display text-sm sm:text-base ${isLast ? 'text-white' : 'text-[#1A1A1A]'}`}>{t.title}</h3>
                                </div>
                                <p className={`text-[10px] sm:text-[11px] leading-relaxed ${isLast ? 'text-white/85' : 'text-[#4A4A4A]'}`}>{t.desc}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
