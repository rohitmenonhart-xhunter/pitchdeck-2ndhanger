'use client';

export function SlideEleven() {
    return (
        <div className="slide-container retro-grid">
            <div className="slide-number">11 / 17</div>

            <div className="max-w-6xl mx-auto w-full px-4 sm:px-6">
                <div className="text-center mb-4 md:mb-5">
                    <div className="neo-tag-pink inline-flex mb-3 animate-fade-in">
                        <span>Hub Economics</span>
                    </div>
                    <h2 className="font-display text-xl sm:text-3xl md:text-4xl text-[#1A1A1A] animate-slide-up">
                        Each hub is a <span className="text-[#FF3366]">₹19L/year profit machine.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-4">
                    {/* Revenue */}
                    <div className="neo-card-mint p-4 md:p-5 animate-slide-right animate-delay-2">
                        <h3 className="font-display text-sm text-[#1A1A1A] mb-3 flex items-center gap-2">
                            <span className="w-3 h-3 bg-[#4CAF50] border border-[#1A1A1A]" />
                            Daily Revenue (500 pcs/day)
                        </h3>
                        <div className="space-y-1">
                            {[
                                { tier: 'Standard (65%)', calc: '325 × ₹11', value: '₹3,575' },
                                { tier: 'Delicate (15%)', calc: '75 × ₹19', value: '₹1,425' },
                                { tier: 'Saree/Suit (10%)', calc: '50 × ₹32', value: '₹1,600' },
                                { tier: 'Aroma (30%)', calc: '150 × ₹3', value: '₹450' },
                            ].map((item, i) => (
                                <div key={i} className="flex items-center justify-between py-1 border-b border-[#1A1A1A]/10 last:border-0">
                                    <span className="text-[10px] text-[#4A4A4A]">{item.tier}</span>
                                    <div className="flex items-center gap-2">
                                        <span className="font-mono text-[9px] text-[#8A8A8A]">{item.calc}</span>
                                        <span className="font-mono text-[10px] font-bold text-[#1A1A1A]">{item.value}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-2 pt-2 border-t-2 border-[#1A1A1A] flex justify-between">
                            <span className="text-xs font-bold text-[#1A1A1A]">Daily Total</span>
                            <span className="stat-number text-lg text-[#1A1A1A]">₹7,050</span>
                        </div>
                        <div className="font-mono text-[9px] text-[#8A8A8A] text-right mt-1">Blended avg: ₹14.10/pc</div>
                    </div>

                    {/* OPEX */}
                    <div className="neo-card-peach p-4 md:p-5 animate-slide-left animate-delay-3">
                        <h3 className="font-display text-sm text-[#1A1A1A] mb-3 flex items-center gap-2">
                            <span className="w-3 h-3 bg-[#FF6B5A] border border-[#1A1A1A]" />
                            Monthly OPEX
                        </h3>
                        <div className="space-y-1">
                            {[
                                { item: 'Operators (2)', cost: '₹24,000' },
                                { item: 'Rent', cost: '₹10,000' },
                                { item: 'Electricity', cost: '₹8,000' },
                                { item: 'Van fuel', cost: '₹9,000' },
                                { item: 'Helper + Water + Aroma', cost: '₹11,000' },
                                { item: 'Software + Marketing + Misc', cost: '₹12,000' },
                            ].map((item, i) => (
                                <div key={i} className="flex items-center justify-between py-1 border-b border-[#1A1A1A]/10 last:border-0">
                                    <span className="text-[10px] text-[#4A4A4A]">{item.item}</span>
                                    <span className="font-mono text-[10px] font-bold text-[#1A1A1A]">{item.cost}</span>
                                </div>
                            ))}
                        </div>
                        <div className="mt-2 pt-2 border-t-2 border-[#1A1A1A] flex justify-between">
                            <span className="text-xs font-bold text-[#1A1A1A]">Total OPEX</span>
                            <span className="stat-number text-lg text-[#1A1A1A]">₹74,000</span>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="grid grid-cols-3 gap-2 md:gap-3 animate-fade-in animate-delay-5">
                    <div className="neo-card-solid-pink p-3 text-center shadow-[3px_3px_0px_#1A1A1A]">
                        <div className="stat-number text-xl md:text-2xl text-white">₹1.09L</div>
                        <div className="font-mono text-[8px] text-white/70 mt-1">MONTHLY PROFIT</div>
                        <div className="font-mono text-[8px] text-white/50">60% margin</div>
                    </div>
                    <div className="neo-card-solid-yellow p-3 text-center shadow-[3px_3px_0px_#1A1A1A]">
                        <div className="stat-number text-xl md:text-2xl text-[#1A1A1A]">₹10L</div>
                        <div className="font-mono text-[8px] text-[#1A1A1A]/70 mt-1">SETUP COST</div>
                        <div className="font-mono text-[8px] text-[#1A1A1A]/50">7-8 mo payback</div>
                    </div>
                    <div className="neo-card-mint p-3 text-center border-2 border-[#1A1A1A] shadow-[3px_3px_0px_#1A1A1A]">
                        <div className="stat-number text-xl md:text-2xl text-[#1A1A1A]">₹19L</div>
                        <div className="font-mono text-[8px] text-[#4A4A4A] mt-1">ANNUAL PROFIT</div>
                        <div className="font-mono text-[8px] text-[#8A8A8A]">at 600 pcs/day</div>
                    </div>
                </div>

                <p className="text-center text-[10px] text-[#FF3366] font-bold mt-3 animate-fade-in animate-delay-7">
                    &ldquo;Show me another business where ₹10L generates ₹13-19L annual profit with 60% margins and zero labour risk.&rdquo;
                </p>
            </div>
        </div>
    );
}
