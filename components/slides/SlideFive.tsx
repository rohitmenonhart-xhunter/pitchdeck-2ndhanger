'use client';

const PHASES = [
    { phase: 'Phase 1 — This Raise', detail: '₹45L, 18-24 months', items: ['3 hubs. Chennai.', '₹70L annualised revenue', '₹2.34L/month profit', 'Proven playbook'] },
    { phase: 'Phase 2 — Post-Seed', detail: 'Year 2-3', items: ['20-30 hubs', '2-3 cities', '₹8-12 Cr revenue', 'Franchise model live'] },
    { phase: 'Phase 3 — Post-Series A', detail: 'Year 3-5', items: ['100-200 hubs (owned + franchise)', '5-8 cities', 'Wash+Dry+Iron launched', '₹50-80 Cr revenue'] },
];

export function SlideFive() {
    return (
        <div className="slide-container retro-grid">
            <div className="slide-number">05 / 19</div>

            <div className="max-w-5xl mx-auto w-full px-4 sm:px-6">
                <div className="text-center mb-3 sm:mb-5 md:mb-6">
                    <div className="neo-tag-coral inline-flex mb-2 sm:mb-4 animate-fade-in">
                        <span>Market Size</span>
                    </div>
                    <h2 className="font-display text-xl sm:text-3xl md:text-4xl text-[#1A1A1A] animate-slide-up">
                        ₹2.1 Lakh Crore Market. <span className="text-[#FF3366]">Massively Underserved.</span>
                    </h2>
                </div>

                {/* TAM / SAM */}
                <div className="max-w-3xl mx-auto space-y-2 sm:space-y-3 mb-4 sm:mb-5">
                    <div className="neo-card-lavender p-3 sm:p-4 md:p-5 text-left animate-slide-left animate-delay-2 w-full">
                        <div className="flex items-center justify-between mb-1">
                            <div className="flex items-center gap-2 sm:gap-3">
                                <span className="neo-tag text-[8px] bg-white">TAM</span>
                                <span className="font-display text-xs sm:text-sm text-[#1A1A1A]">India&apos;s Total Garment Aftercare</span>
                            </div>
                            <span className="stat-number text-lg sm:text-2xl md:text-3xl text-[#1A1A1A]">₹2.1L Cr</span>
                        </div>
                        <p className="text-[9px] sm:text-[10px] text-[#8A8A8A]">Every household, every week.</p>
                    </div>

                    <div className="neo-card-yellow p-3 sm:p-4 md:p-5 text-left animate-slide-left animate-delay-3">
                        <div className="flex items-center justify-between mb-1">
                            <div className="flex items-center gap-2 sm:gap-3">
                                <span className="neo-tag text-[8px] bg-white">SAM</span>
                                <span className="font-display text-xs sm:text-sm text-[#1A1A1A]">Urban Hub-Serviceable — Top 50 Cities</span>
                            </div>
                            <span className="stat-number text-lg sm:text-2xl md:text-3xl text-[#1A1A1A]">₹48K Cr</span>
                        </div>
                    </div>
                </div>

                {/* SOM Phases */}
                <div className="neo-card-flat p-3 sm:p-4 max-w-3xl mx-auto mb-3 sm:mb-4 animate-fade-in animate-delay-4">
                    <h4 className="font-display text-xs sm:text-sm text-[#1A1A1A] mb-2 sm:mb-3">SOM — Phased & Realistic</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3">
                        {PHASES.map((p, i) => (
                            <div key={i} className={`${i === 0 ? 'neo-card-solid-pink shadow-[3px_3px_0px_#1A1A1A]' : 'neo-card-flat bg-[#F5F0E8]'} p-2 sm:p-3`}>
                                <span className={`font-mono text-[8px] sm:text-[9px] font-bold block mb-1 ${i === 0 ? 'text-white/70' : 'text-[#FF3366]'}`}>{p.phase}</span>
                                <span className={`font-mono text-[7px] sm:text-[8px] block mb-1.5 ${i === 0 ? 'text-white/50' : 'text-[#8A8A8A]'}`}>{p.detail}</span>
                                {p.items.map((item, j) => (
                                    <div key={j} className="flex items-start gap-1">
                                        <span className={`text-[8px] sm:text-[9px] mt-0.5 ${i === 0 ? 'text-white/60' : 'text-[#FF3366]'}`}>→</span>
                                        <span className={`text-[8px] sm:text-[9px] ${i === 0 ? 'text-white/90' : 'text-[#4A4A4A]'}`}>{item}</span>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>

                <p className="text-center text-[9px] sm:text-[10px] text-[#8A8A8A] px-2 animate-fade-in animate-delay-7 max-w-3xl mx-auto">
                    &ldquo;We&apos;re not asking you to bet on 1,000 hubs. We&apos;re asking you to bet on Hub 1. The unit economics are proven. Your ₹45L builds 3 profitable hubs and gets us to Seed.&rdquo;
                </p>
            </div>
        </div>
    );
}
