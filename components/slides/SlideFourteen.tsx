'use client';

const FLYWHEEL = [
    { step: 'Hub opens in dense apartment zone', num: '01' },
    { step: 'Doorstep pickup at ₹11/pc — cheaper than dhobi on sarees', num: '02' },
    { step: 'Perfect quality every time — machine doesn\'t have bad days', num: '03' },
    { step: 'Customer tells neighbours — more households', num: '04' },
    { step: 'Routes get shorter — delivery gets faster', num: '05' },
    { step: 'Customers upgrade — Delicate + Aroma tiers', num: '06' },
    { step: 'Hub hits ₹1.6L/month — profit funds next hub', num: '07' },
    { step: 'New hub opens 3-5 km away — coverage expands', num: '08' },
];

const FILLS = [
    'neo-card-peach', 'neo-card-yellow', 'neo-card-mint', 'neo-card-blue',
    'neo-card-lavender', 'neo-card-peach', 'neo-card-yellow', 'neo-card-solid-pink',
];

export function SlideFourteen() {
    return (
        <div className="slide-container retro-grid">
            <div className="slide-number">14 / 17</div>

            <div className="max-w-5xl mx-auto w-full px-4 sm:px-6">
                <div className="text-center mb-3 sm:mb-4 md:mb-5">
                    <div className="neo-tag-yellow inline-flex mb-2 sm:mb-3 animate-fade-in">
                        <span>Go To Market</span>
                    </div>
                    <h2 className="font-display text-xl sm:text-3xl md:text-4xl text-[#1A1A1A] animate-slide-up">
                        Density wins. Speed follows. <span className="text-[#FF3366]">Monopoly forms.</span>
                    </h2>
                </div>

                {/* Flywheel ring — no emojis, numbered badges */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 sm:gap-2 md:gap-3 max-w-4xl mx-auto mb-3 sm:mb-4">
                    {FLYWHEEL.map((item, i) => {
                        const isLast = i === FLYWHEEL.length - 1;
                        return (
                            <div key={i} className={`${FILLS[i]} p-2 sm:p-3 animate-slide-up animate-delay-${i + 1} relative ${isLast ? 'shadow-[3px_3px_0px_#1A1A1A]' : ''}`}>
                                <span className={`font-mono text-[8px] sm:text-[9px] font-bold mb-1 block ${isLast ? 'text-white/60' : 'text-[#FF3366]'}`}>
                                    {item.num}
                                </span>
                                <span className={`text-[8px] sm:text-[9px] md:text-[10px] leading-tight block ${isLast ? 'text-white/90' : 'text-[#4A4A4A]'}`}>
                                    {item.step}
                                </span>
                                {i < FLYWHEEL.length - 1 && (
                                    <span className="hidden md:block absolute -right-2 top-1/2 -translate-y-1/2 text-[#FF3366] font-bold text-lg z-10">›</span>
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* Monopoly math */}
                <div className="neo-card-lavender p-3 sm:p-4 max-w-3xl mx-auto animate-fade-in animate-delay-6">
                    <h4 className="font-display text-xs sm:text-sm text-[#1A1A1A] mb-1 sm:mb-2">The Monopoly Math</h4>
                    <div className="space-y-0.5 sm:space-y-1 text-[9px] sm:text-[10px] text-[#4A4A4A]">
                        <div>→ Each hub covers 3-5 km radius. 3 hubs form a triangle covering North Chennai.</div>
                        <div>→ 10 hubs cover all of Chennai. Van within 15 minutes of every household.</div>
                        <div>→ No entrant can match density without matching hub investment. <span className="text-[#FF3366] font-bold">First mover wins forever.</span></div>
                    </div>
                </div>

                <p className="text-center text-[9px] sm:text-[10px] text-[#8A8A8A] mt-2 sm:mt-3 px-2 animate-fade-in animate-delay-8">
                    Exactly how Zepto built grocery dominance — dark store by dark store, until switching became irrational.
                </p>
            </div>
        </div>
    );
}
