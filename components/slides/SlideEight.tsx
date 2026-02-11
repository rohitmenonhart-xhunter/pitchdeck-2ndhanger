'use client';

export function SlideEight() {
    return (
        <div className="slide-container retro-grid">
            <div className="slide-number">08 / 17</div>

            <div className="max-w-6xl mx-auto w-full px-4 sm:px-6">
                <div className="text-center mb-3 sm:mb-4 md:mb-5">
                    <div className="neo-tag inline-flex mb-2 sm:mb-3 animate-fade-in">
                        <span>The Product</span>
                    </div>
                    <h2 className="font-display text-xl sm:text-3xl md:text-4xl text-[#1A1A1A] animate-slide-up">
                        Doorstep garment care. Three tiers. <span className="text-[#FF3366]">Same day.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3 md:gap-4">
                    {/* Order */}
                    <div className="neo-card-peach p-3 sm:p-4 md:p-5 animate-slide-up animate-delay-2">
                        <div className="flex items-center gap-2 mb-2 sm:mb-3">
                            <span className="w-5 h-5 flex items-center justify-center bg-white border-2 border-[#1A1A1A] text-[10px] font-bold text-[#FF3366]">1</span>
                            <h3 className="font-display text-xs sm:text-sm text-[#1A1A1A]">Order</h3>
                        </div>
                        <div className="space-y-1 sm:space-y-1.5">
                            {[
                                { tier: 'Standard', price: '₹11/pc', desc: 'Shirts, pants, kurtis' },
                                { tier: 'Delicate', price: '₹18-20/pc', desc: 'Embroidery, zari' },
                                { tier: 'Saree', price: '₹30/pc', desc: '40% cheaper than dhobi' },
                                { tier: 'Aroma', price: '+₹3/pc', desc: 'Lavender, rose mist' },
                            ].map((item, i) => (
                                <div key={i} className="flex items-center justify-between py-0.5 sm:py-1 border-b border-[#1A1A1A]/10 last:border-0">
                                    <div>
                                        <span className="text-[9px] sm:text-[10px] font-bold text-[#1A1A1A]">{item.tier}</span>
                                        <span className="text-[8px] sm:text-[9px] text-[#8A8A8A] ml-1">{item.desc}</span>
                                    </div>
                                    <span className="font-mono text-[9px] sm:text-[10px] font-bold text-[#FF3366]">{item.price}</span>
                                </div>
                            ))}
                        </div>
                        <div className="mt-2 sm:mt-3 p-1 sm:p-1.5 bg-white border border-[#1A1A1A]/10 text-center">
                            <span className="font-mono text-[7px] sm:text-[8px] text-[#4A4A4A]">Before 2 PM → same-day delivery</span>
                        </div>
                    </div>

                    {/* Process */}
                    <div className="neo-card-yellow p-3 sm:p-4 md:p-5 animate-slide-up animate-delay-3">
                        <div className="flex items-center gap-2 mb-2 sm:mb-3">
                            <span className="w-5 h-5 flex items-center justify-center bg-white border-2 border-[#1A1A1A] text-[10px] font-bold text-[#FF3366]">2</span>
                            <h3 className="font-display text-xs sm:text-sm text-[#1A1A1A]">Process</h3>
                        </div>
                        <div className="space-y-1 sm:space-y-1.5">
                            {[
                                { label: 'Hub', value: '300-400 sq ft dark hub' },
                                { label: 'Model', value: 'No walk-ins. Pure factory.' },
                                { label: 'Flow', value: 'Tag → Press → QC → Pack' },
                                { label: 'Speed', value: '70-80 pcs/hour flowing' },
                                { label: 'Finish', value: 'Protective covers on all' },
                            ].map((item, i) => (
                                <div key={i} className="flex items-center justify-between py-0.5 sm:py-1 border-b border-[#1A1A1A]/10 last:border-0">
                                    <span className="text-[9px] sm:text-[10px] text-[#8A8A8A]">{item.label}</span>
                                    <span className="text-[9px] sm:text-[10px] font-bold text-[#1A1A1A]">{item.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Deliver */}
                    <div className="neo-card-mint p-3 sm:p-4 md:p-5 animate-slide-up animate-delay-4 sm:col-span-2 md:col-span-1">
                        <div className="flex items-center gap-2 mb-2 sm:mb-3">
                            <span className="w-5 h-5 flex items-center justify-center bg-white border-2 border-[#1A1A1A] text-[10px] font-bold text-[#FF3366]">3</span>
                            <h3 className="font-display text-xs sm:text-sm text-[#1A1A1A]">Deliver</h3>
                        </div>
                        <div className="space-y-1 sm:space-y-1.5">
                            {[
                                { label: 'Vehicle', value: 'Branded Tata Ace van' },
                                { label: 'Radius', value: '5 km from hub' },
                                { label: 'Routes', value: 'Route-optimised' },
                                { label: 'Tracking', value: 'Real-time notifications' },
                                { label: 'Result', value: 'Fresh, crisp, doorstep' },
                            ].map((item, i) => (
                                <div key={i} className="flex items-center justify-between py-0.5 sm:py-1 border-b border-[#1A1A1A]/10 last:border-0">
                                    <span className="text-[9px] sm:text-[10px] text-[#8A8A8A]">{item.label}</span>
                                    <span className="text-[9px] sm:text-[10px] font-bold text-[#1A1A1A]">{item.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
