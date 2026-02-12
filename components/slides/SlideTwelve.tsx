'use client';

const COMPETITORS = [
    {
        name: 'UClean',
        detail: '500+ stores',
        desc: 'Store-based walk-in. Primarily wash + dry clean. ₹40-60/piece. ₹25-30L franchise cost. Targets the top 10%.',
        fill: 'neo-card-flat bg-[#F5F0E8]',
    },
    {
        name: 'Tumbledry',
        detail: '150+ stores',
        desc: 'Same model as UClean. Store-based, walk-in, wash-focused. Premium pricing. Metro-only.',
        fill: 'neo-card-flat bg-[#F5F0E8]',
    },
    {
        name: 'App Aggregators',
        detail: 'Pick My Laundry, Washho',
        desc: "Don't own infrastructure. Connect customers to existing dhobis. No quality control. Thin margins.",
        fill: 'neo-card-flat bg-[#F5F0E8]',
    },
    {
        name: 'Roadside Dhobi',
        detail: '10 Lakh+',
        desc: '₹10/piece. Coal iron. The real incumbent. Zero quality, zero convenience, zero accountability.',
        fill: 'neo-card-flat bg-[#F5F0E8]',
    },
];

const DIFFERENTIATORS = [
    { label: 'Ironing-FIRST', desc: 'Highest-frequency touchpoint — every household, every week' },
    { label: 'Doorstep, not storefront', desc: 'Dark hub ₹10K rent vs ₹40-60K retail. Van IS the storefront' },
    { label: '₹11 vs ₹40-60', desc: 'We serve the 90%, not the premium 10%' },
    { label: '₹10L vs ₹25L+ CAPEX', desc: 'Profitable Month 2. 3x more capital-efficient' },
];

export function SlideTwelve() {
    return (
        <div className="slide-container retro-grid">
            <div className="slide-number">12 / 19</div>

            <div className="max-w-6xl mx-auto w-full px-4 sm:px-6">
                <div className="text-center mb-2 sm:mb-4">
                    <div className="neo-tag-coral inline-flex mb-2 sm:mb-3 animate-fade-in">
                        <span>Competition & Why Us</span>
                    </div>
                    <h2 className="font-display text-lg sm:text-2xl md:text-3xl text-[#1A1A1A] animate-slide-up">
                        The Players Exist. <span className="text-[#FF3366]">None of Them Do What We Do.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-1.5 sm:gap-2 max-w-5xl mx-auto mb-3 sm:mb-4">
                    {COMPETITORS.map((c, i) => (
                        <div key={i} className={`${c.fill} p-2 sm:p-3 animate-slide-up animate-delay-${i + 2}`}>
                            <h3 className="font-display text-[10px] sm:text-xs text-[#1A1A1A]">{c.name}</h3>
                            <span className="font-mono text-[7px] sm:text-[8px] text-[#8A8A8A] block mb-1">{c.detail}</span>
                            <p className="text-[8px] sm:text-[9px] text-[#4A4A4A] leading-relaxed">{c.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="neo-card-solid-pink p-3 sm:p-4 max-w-4xl mx-auto mb-3 sm:mb-4 shadow-[4px_4px_0px_#1A1A1A] animate-scale-in animate-delay-7">
                    <h3 className="font-display text-xs sm:text-sm text-white mb-2">How 2nd Hanger is fundamentally different</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 sm:gap-2">
                        {DIFFERENTIATORS.map((d, i) => (
                            <div key={i} className="bg-white/10 p-1.5 sm:p-2">
                                <span className="font-mono text-[8px] sm:text-[9px] font-bold text-white block mb-0.5">{d.label}</span>
                                <span className="text-[7px] sm:text-[8px] text-white/75 leading-tight block">{d.desc}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <p className="text-center text-[8px] sm:text-[10px] text-[#8A8A8A] animate-fade-in animate-delay-9 max-w-3xl mx-auto">
                    &ldquo;UClean built a ₹200 Cr laundry business for the premium 10%.
                    We&apos;re building garment care infrastructure for <span className="text-[#FF3366] font-bold">the other 90%.</span>&rdquo;
                </p>
            </div>
        </div>
    );
}
