'use client';

export function SlideTen() {
    return (
        <div className="slide-container retro-grid">
            <div className="slide-number">10 / 17</div>

            <div className="max-w-5xl mx-auto w-full px-4 sm:px-6">
                <div className="text-center mb-5 md:mb-6">
                    <div className="neo-tag-coral inline-flex mb-4 animate-fade-in">
                        <span>Competitive Landscape</span>
                    </div>
                    <h2 className="font-display text-xl sm:text-3xl md:text-4xl text-[#1A1A1A] animate-slide-up">
                        The quadrant <span className="text-[#FF3366]">nobody occupies.</span>
                    </h2>
                </div>

                <div className="max-w-3xl mx-auto animate-scale-in animate-delay-2">
                    <div className="text-center mb-2">
                        <span className="font-mono text-[9px] tracking-wider text-[#8A8A8A] font-bold">↑ HIGH QUALITY + CONVENIENCE</span>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        {/* 2nd Hanger — TOP LEFT */}
                        <div className="neo-card-solid-pink p-4 md:p-5 shadow-[5px_5px_0px_#1A1A1A]">
                            <div className="font-mono text-[8px] text-white/50 mb-2">LOW PRICE + HIGH QUALITY</div>
                            <div className="font-display text-lg text-white mb-2">2nd Hanger</div>
                            <div className="space-y-1 text-[10px] text-white/80">
                                <div>₹11/piece · Machine steam press</div>
                                <div>Same-day doorstep delivery</div>
                                <div>Full tech stack + tracking</div>
                            </div>
                            <div className="mt-3 font-mono text-[8px] font-bold text-white tracking-wider">◆ THIS QUADRANT IS EMPTY</div>
                        </div>

                        {/* Premium — TOP RIGHT */}
                        <div className="neo-card-flat p-4 md:p-5 bg-[#F5F0E8]">
                            <div className="font-mono text-[8px] text-[#8A8A8A] mb-2">HIGH PRICE + HIGH QUALITY</div>
                            <div className="font-display text-sm text-[#8A8A8A] mb-2">UClean, Pressto, Fabric Spa</div>
                            <div className="space-y-1 text-[10px] text-[#aaa]">
                                <div>₹15-50/piece. Franchise model.</div>
                                <div>Labour-dependent. 24-48 hr turnaround.</div>
                                <div>Franchise royalty kills margins.</div>
                            </div>
                        </div>

                        {/* Dhobi — BOTTOM LEFT */}
                        <div className="neo-card-flat p-4 md:p-5 bg-[#F5F0E8]">
                            <div className="font-mono text-[8px] text-[#8A8A8A] mb-2">LOW PRICE + LOW QUALITY</div>
                            <div className="font-display text-sm text-[#8A8A8A] mb-2">Roadside Dhobi</div>
                            <div className="space-y-1 text-[10px] text-[#aaa]">
                                <div>₹10/piece. Coal iron. No delivery.</div>
                                <div>Burns clothes. Zero tech.</div>
                            </div>
                        </div>

                        {/* Aggregators — BOTTOM RIGHT */}
                        <div className="neo-card-flat p-4 md:p-5 bg-[#F5F0E8]">
                            <div className="font-mono text-[8px] text-[#8A8A8A] mb-2">HIGH PRICE + LOW QUALITY</div>
                            <div className="font-display text-sm text-[#8A8A8A] mb-2">Dhobi G, Dhobiman</div>
                            <div className="space-y-1 text-[10px] text-[#aaa]">
                                <div>₹10-15/piece. App-based aggregator.</div>
                                <div>Don&apos;t control quality. Middleman.</div>
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-2">
                        <span className="font-mono text-[9px] tracking-wider text-[#8A8A8A] font-bold">↓ LOW QUALITY + CONVENIENCE</span>
                    </div>
                </div>

                <p className="text-center text-xs text-[#8A8A8A] mt-4 max-w-2xl mx-auto animate-fade-in animate-delay-5">
                    Only a <span className="text-[#FF3366] font-bold">vertically integrated, machine-first operator</span> can occupy this quadrant. That&apos;s our moat.
                </p>
            </div>
        </div>
    );
}
