'use client';

export function SlideFourteen() {
    return (
        <div className="slide-container retro-grid">
            <div className="slide-number">14 / 17</div>

            <div className="max-w-5xl mx-auto w-full px-4 sm:px-6">
                <div className="text-center mb-3 sm:mb-5 md:mb-6">
                    <div className="neo-tag-pink inline-flex mb-2 sm:mb-4 animate-fade-in">
                        <span>Traction & Validation</span>
                    </div>
                    <h2 className="font-display text-xl sm:text-3xl md:text-4xl text-[#1A1A1A] animate-slide-up">
                        Not Just a Deck. <span className="text-[#FF3366]">We&apos;ve Already Started.</span>
                    </h2>
                </div>

                {/* Hazel Apartments Pilot */}
                <div className="neo-card-peach p-5 sm:p-6 md:p-8 max-w-2xl mx-auto mb-4 sm:mb-5 animate-slide-up animate-delay-2">
                    <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                        <span className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center bg-white border-2 border-[#1A1A1A]/10 font-mono text-[10px] sm:text-xs font-bold text-[#FF3366]">
                            01
                        </span>
                        <h3 className="font-display text-sm sm:text-base text-[#1A1A1A]">Hazel Apartments Pilot</h3>
                    </div>
                    <p className="text-[11px] sm:text-sm text-[#4A4A4A] leading-relaxed mb-3">
                        Pilot done with just a WhatsApp account. ₹11 paid, zero negotiation, repeat orders same week.
                    </p>
                    <div className="grid grid-cols-3 gap-2 sm:gap-3">
                        <div className="bg-white/60 p-2 sm:p-3 text-center border border-[#1A1A1A]/5">
                            <span className="stat-number text-base sm:text-xl text-[#FF3366]">₹11</span>
                            <span className="font-mono text-[7px] sm:text-[8px] text-[#8A8A8A] block mt-0.5">PAID/PIECE</span>
                        </div>
                        <div className="bg-white/60 p-2 sm:p-3 text-center border border-[#1A1A1A]/5">
                            <span className="stat-number text-base sm:text-xl text-[#4CAF50]">Zero</span>
                            <span className="font-mono text-[7px] sm:text-[8px] text-[#8A8A8A] block mt-0.5">NEGOTIATION</span>
                        </div>
                        <div className="bg-white/60 p-2 sm:p-3 text-center border border-[#1A1A1A]/5">
                            <span className="stat-number text-base sm:text-xl text-[#1A1A1A]">Week 1</span>
                            <span className="font-mono text-[7px] sm:text-[8px] text-[#8A8A8A] block mt-0.5">REPEAT ORDERS</span>
                        </div>
                    </div>
                </div>

                <div className="neo-card-flat p-2.5 sm:p-3 max-w-3xl mx-auto text-center mb-3 animate-fade-in animate-delay-5">
                    <p className="text-[9px] sm:text-[11px] text-[#4A4A4A]">
                        <span className="font-bold text-[#1A1A1A]">Tech:</span> Application being built in Hitroo (Rohit&apos;s dev studio).{' '}
                        <span className="font-bold text-[#FF3366]">60% complete. Tech cost: ₹3K/month.</span>
                    </p>
                </div>

                <div className="neo-card-solid-yellow p-2 sm:p-3 max-w-xl mx-auto text-center animate-scale-in animate-delay-6 shadow-[3px_3px_0px_#1A1A1A]">
                    <p className="text-[9px] sm:text-xs font-bold text-[#1A1A1A]">
                        Every number first-principles, supplier-verified.{' '}
                        <span className="text-[#FF3366]">Murahari at factory today.</span>
                    </p>
                </div>
            </div>
        </div>
    );
}
