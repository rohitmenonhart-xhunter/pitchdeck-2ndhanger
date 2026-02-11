'use client';

export function SlideFour() {
    return (
        <div className="slide-container retro-grid">
            <div className="slide-number">04 / 17</div>

            <div className="max-w-5xl mx-auto w-full px-4 sm:px-6">
                <div className="text-center mb-5 md:mb-6">
                    <div className="neo-tag-pink inline-flex mb-4 animate-fade-in">
                        <span>The Answer</span>
                    </div>
                    <h2 className="font-display text-2xl sm:text-4xl md:text-6xl text-[#1A1A1A] animate-slide-up">
                        They iron clothes.
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
                    {/* The Habit */}
                    <div className="neo-card-yellow p-4 md:p-5 animate-slide-right animate-delay-2">
                        <h3 className="font-display text-sm text-[#1A1A1A] mb-3 flex items-center gap-2">
                            <span className="w-3 h-3 bg-[#FFD166] border border-[#1A1A1A]" />
                            The Daily Habit
                        </h3>
                        <div className="space-y-2">
                            {[
                                '30+ crore urban households',
                                '7 days a week. 365 days a year',
                                'No exceptions. No seasons. No fads',
                                'Family of 4 = 150-200 pieces/month',
                            ].map((line, i) => (
                                <div key={i} className="flex items-start gap-2">
                                    <span className="text-[#FF3366] font-bold text-xs mt-0.5 flex-shrink-0">→</span>
                                    <span className="text-[11px] text-[#4A4A4A]">{line}</span>
                                </div>
                            ))}
                        </div>
                        <div className="mt-3 p-2 bg-white border border-[#1A1A1A]/10">
                            <p className="text-[10px] text-[#4A4A4A] italic">
                                This is not a market. This is a daily habit built into the DNA of Indian life.
                            </p>
                        </div>
                    </div>

                    {/* The Incumbent */}
                    <div className="neo-card-peach p-4 md:p-5 animate-slide-left animate-delay-3">
                        <h3 className="font-display text-sm text-[#1A1A1A] mb-3 flex items-center gap-2">
                            <span className="w-3 h-3 bg-[#FF6B5A] border border-[#1A1A1A]" />
                            The Incumbent — 50 Years Unchanged
                        </h3>
                        <div className="space-y-2">
                            {[
                                'Roadside dhobi with a coal iron and wooden cart',
                                'No technology. No consistency. No delivery',
                                'Burns your ₹2,000 shirt and says sorry',
                                '₹10/piece regular, ₹50/saree · 40-50 pcs/day max',
                            ].map((line, i) => (
                                <div key={i} className="flex items-start gap-2">
                                    <span className="text-[#FF3366] font-bold text-xs mt-0.5 flex-shrink-0">→</span>
                                    <span className="text-[11px] text-[#4A4A4A]">{line}</span>
                                </div>
                            ))}
                        </div>
                        <div className="mt-3 p-2 bg-white border border-[#1A1A1A]/10">
                            <p className="text-[10px] text-[#4A4A4A] italic">
                                Nobody has disrupted him. Until now.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="neo-card-solid-pink p-3 max-w-2xl mx-auto mt-5 text-center animate-scale-in animate-delay-6 shadow-[4px_4px_0px_#1A1A1A]">
                    <p className="text-sm font-bold text-white">
                        140 crore Indians. Same method as their grandparents. Nothing changed — until now.
                    </p>
                </div>
            </div>
        </div>
    );
}
