'use client';

const PRICING = [
    { tier: 'Standard', price: '₹11/piece', mix: '75% of orders' },
    { tier: 'Delicate', price: '₹18-20/piece', mix: '10%' },
    { tier: 'Saree/Suit', price: '₹30/piece', mix: '8%' },
    { tier: 'Aroma Add-on', price: '+₹3/piece', mix: '20% adoption' },
];

export function SlideSix() {
    return (
        <div className="slide-container retro-grid">
            <div className="slide-number">06 / 19</div>

            <div className="max-w-5xl mx-auto w-full px-4 sm:px-6">
                <div className="text-center mb-3 sm:mb-5 md:mb-6">
                    <div className="neo-tag-pink inline-flex mb-2 sm:mb-4 animate-fade-in">
                        <span>Unit Economics</span>
                    </div>
                    <h2 className="font-display text-xl sm:text-3xl md:text-4xl text-[#1A1A1A] animate-slide-up">
                        89% Contribution Margin. <span className="text-[#FF3366]">SaaS-Level from a Physical Service.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 max-w-4xl mx-auto mb-3 sm:mb-4">
                    {/* Pricing table */}
                    <div className="neo-card-flat p-3 sm:p-4 animate-slide-right animate-delay-2">
                        <h3 className="font-display text-xs sm:text-sm text-[#1A1A1A] mb-2 sm:mb-3">Pricing Tiers</h3>
                        <div className="space-y-1.5 sm:space-y-2">
                            {PRICING.map((p, i) => (
                                <div key={i} className="flex items-center justify-between border-b border-[#1A1A1A]/5 pb-1">
                                    <span className="text-[10px] sm:text-[11px] text-[#4A4A4A]">{p.tier}</span>
                                    <div className="text-right">
                                        <span className="font-mono text-[10px] sm:text-[11px] font-bold text-[#1A1A1A]">{p.price}</span>
                                        <span className="font-mono text-[8px] sm:text-[9px] text-[#8A8A8A] ml-1.5">({p.mix})</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Key metrics */}
                    <div className="space-y-2 sm:space-y-3 animate-slide-left animate-delay-3">
                        <div className="neo-card-solid-pink p-3 sm:p-4 shadow-[4px_4px_0px_#1A1A1A]">
                            <div className="flex items-center justify-between">
                                <span className="text-[10px] sm:text-xs text-white/70">Blended Rate</span>
                                <span className="stat-number text-xl sm:text-2xl text-white">₹13.15</span>
                            </div>
                            <div className="flex items-center justify-between mt-1">
                                <span className="text-[10px] sm:text-xs text-white/70">Variable Cost</span>
                                <span className="font-mono text-xs sm:text-sm text-white/90">₹1.42/piece</span>
                            </div>
                            <div className="flex items-center justify-between mt-1 pt-1 border-t border-white/20">
                                <span className="text-[10px] sm:text-xs text-white font-bold">Contribution Margin</span>
                                <span className="stat-number text-xl sm:text-2xl text-white">89.2%</span>
                            </div>
                        </div>

                        <p className="text-[9px] sm:text-[10px] text-[#4A4A4A] text-center leading-relaxed">
                            For every ₹100 in revenue, ₹89 is contribution. The machine does the work, not expensive labour.
                        </p>
                    </div>
                </div>

                {/* LTV / CAC */}
                <div className="grid grid-cols-3 gap-2 sm:gap-3 max-w-3xl mx-auto animate-fade-in animate-delay-5">
                    <div className="neo-card-yellow p-2 sm:p-3 text-center">
                        <span className="stat-number text-lg sm:text-2xl text-[#1A1A1A]">₹15,792</span>
                        <span className="font-mono text-[8px] sm:text-[9px] text-[#4A4A4A] block mt-1">LTV / CUSTOMER</span>
                    </div>
                    <div className="neo-card-mint p-2 sm:p-3 text-center">
                        <span className="stat-number text-lg sm:text-2xl text-[#1A1A1A]">₹400</span>
                        <span className="font-mono text-[8px] sm:text-[9px] text-[#4A4A4A] block mt-1">CAC (BLENDED)</span>
                    </div>
                    <div className="neo-card-solid-pink p-2 sm:p-3 text-center shadow-[3px_3px_0px_#1A1A1A]">
                        <span className="stat-number text-lg sm:text-2xl text-white">39.5x</span>
                        <span className="font-mono text-[8px] sm:text-[9px] text-white/70 block mt-1">LTV:CAC</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
