'use client';

const TRACTION = [
    { title: 'Hazel Apartments Pilot', desc: 'Families paid ₹11/piece (old pricing). Zero negotiation. Repeat orders same week.', fill: 'neo-card-solid-pink', highlight: true },
    { title: '60+ Conversations', desc: 'Door-to-door in Avadi. 3 PG owners interested in bulk contracts. 2 RWAs offered demo days.', fill: 'neo-card-peach', highlight: false },
    { title: 'Military Demand', desc: '80-100 pieces/week confirmed. Uniform-heavy households in Avadi area.', fill: 'neo-card-yellow', highlight: false },
    { title: 'Inbound Demand', desc: 'Customer call received for urgent saree pressing — demand finding us before we launched.', fill: 'neo-card-mint', highlight: false },
];

const READY = [
    'Machine specs verified at Coimbatore factory by Murahari',
    'Three apps under active development',
    'Rider recruitment pipeline — Swiggy/Zomato riders, local bike owners',
];

export function SlideFourteen() {
    return (
        <div className="slide-container retro-grid">
            <div className="slide-number">14 / 18</div>

            <div className="max-w-5xl mx-auto w-full px-4 sm:px-6">
                <div className="text-center mb-3 sm:mb-5">
                    <div className="neo-tag-coral inline-flex mb-2 sm:mb-4 animate-fade-in">
                        <span>Traction & Validation</span>
                    </div>
                    <h2 className="font-display text-xl sm:text-3xl md:text-4xl text-[#1A1A1A] animate-slide-up">
                        Not Just a Deck. <span className="text-[#FF3366]">We&apos;ve Already Started.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 max-w-4xl mx-auto mb-3 sm:mb-4">
                    {TRACTION.map((t, i) => (
                        <div key={i} className={`${t.fill} p-3 sm:p-4 animate-slide-up animate-delay-${i + 2} ${t.highlight ? 'shadow-[4px_4px_0px_#1A1A1A] sm:col-span-2' : ''}`}>
                            <div className="flex items-center gap-2 mb-1.5">
                                <span className={`w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center border-2 font-mono text-[8px] sm:text-[9px] font-bold ${t.highlight ? 'bg-white text-[#FF3366] border-white' : 'bg-white text-[#FF3366] border-[#1A1A1A]/10'}`}>
                                    {String(i + 1).padStart(2, '0')}
                                </span>
                                <h3 className={`font-display text-[10px] sm:text-xs ${t.highlight ? 'text-white' : 'text-[#1A1A1A]'}`}>{t.title}</h3>
                            </div>
                            <p className={`text-[9px] sm:text-[10px] leading-relaxed ${t.highlight ? 'text-white/85' : 'text-[#4A4A4A]'}`}>{t.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="neo-card-flat p-3 sm:p-4 max-w-3xl mx-auto animate-fade-in animate-delay-7">
                    <h4 className="font-display text-xs sm:text-sm text-[#1A1A1A] mb-2">Launch-Ready</h4>
                    {READY.map((r, i) => (
                        <div key={i} className="flex items-start gap-2 py-0.5">
                            <span className="text-[#FF3366] text-[8px] sm:text-[9px] mt-0.5">→</span>
                            <span className="text-[9px] sm:text-[10px] text-[#4A4A4A]">{r}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
