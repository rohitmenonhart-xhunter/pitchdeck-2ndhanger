'use client';

export function SlideSeven() {
    return (
        <div className="slide-container retro-grid">
            <div className="slide-number">07 / 17</div>

            <div className="max-w-5xl mx-auto w-full px-4 sm:px-6">
                <div className="text-center mb-3 sm:mb-5 md:mb-6">
                    <div className="neo-tag-yellow inline-flex mb-2 sm:mb-4 animate-fade-in">
                        <span>Our Unfair Advantage</span>
                    </div>
                    <h2 className="font-display text-xl sm:text-3xl md:text-4xl text-[#1A1A1A] animate-slide-up">
                        One machine replaces <span className="text-[#FF3366]">an entire dhobi market.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 max-w-4xl mx-auto mb-3 sm:mb-4">
                    {/* Machine */}
                    <div className="neo-card-solid-pink p-3 sm:p-4 md:p-5 shadow-[5px_5px_0px_#1A1A1A] animate-slide-right animate-delay-2">
                        <h3 className="font-display text-sm sm:text-base text-white mb-2 sm:mb-3">The Machine</h3>
                        <div className="space-y-1 sm:space-y-2">
                            {[
                                { label: 'Output', value: '70-80 garments/hour' },
                                { label: 'Shift', value: '560-640 pcs / 8 hrs' },
                                { label: 'Operators', value: 'Just 2 people' },
                                { label: 'Daily revenue', value: '₹8,400 at ₹14/pc' },
                                { label: 'Quality', value: 'Uniform steam finish' },
                            ].map((item, i) => (
                                <div key={i} className="flex items-center justify-between py-1 sm:py-1.5 border-b border-white/15 last:border-0">
                                    <span className="text-[10px] sm:text-[11px] text-white/70">{item.label}</span>
                                    <span className="font-mono text-[10px] sm:text-xs font-bold text-white">{item.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Dhobi */}
                    <div className="neo-card-flat p-3 sm:p-4 md:p-5 bg-[#F5F0E8] animate-slide-left animate-delay-3">
                        <h3 className="font-display text-sm sm:text-base text-[#8A8A8A] mb-2 sm:mb-3">The Dhobi</h3>
                        <div className="space-y-1 sm:space-y-2">
                            {[
                                { label: 'Output', value: '40-50 pcs/day' },
                                { label: 'Workers needed', value: '12-15 to match' },
                                { label: 'Labour cost', value: '₹1.5-2L/month' },
                                { label: 'Daily revenue', value: '₹400-500' },
                                { label: 'Quality', value: 'Inconsistent, burns' },
                            ].map((item, i) => (
                                <div key={i} className="flex items-center justify-between py-1 sm:py-1.5 border-b border-[#1A1A1A]/10 last:border-0">
                                    <span className="text-[10px] sm:text-[11px] text-[#8A8A8A]">{item.label}</span>
                                    <span className="font-mono text-[10px] sm:text-xs text-[#8A8A8A]">{item.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom row — no emojis, using styled X marks */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 sm:gap-2 max-w-3xl mx-auto animate-fade-in animate-delay-5">
                    {['No sick days', 'No quitting', 'No burned sarees', 'No lost garments'].map((label, i) => (
                        <div key={i} className="neo-card-mint p-2 text-center">
                            <span className="font-mono text-sm sm:text-lg font-bold text-[#FF3366]">✕</span>
                            <div className="font-mono text-[7px] sm:text-[8px] text-[#4A4A4A] mt-0.5 sm:mt-1">{label}</div>
                        </div>
                    ))}
                </div>

                <p className="text-center text-[10px] sm:text-xs text-[#8A8A8A] mt-3 sm:mt-4 px-2 animate-fade-in animate-delay-7">
                    Not a marginal improvement. <span className="text-[#FF3366] font-bold">A structural disruption of the entire supply side.</span>
                </p>
            </div>
        </div>
    );
}
