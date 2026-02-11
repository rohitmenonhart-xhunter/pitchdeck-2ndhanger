'use client';

import { MobileOverlay } from '@/components/deck/MobileOverlay';

export function SlideSeventeen() {
    return (
        <div className="slide-container retro-grid relative">
            <div className="slide-number">17 / 17</div>

            {/* Mobile liquid glass overlay */}
            <MobileOverlay />

            <div className="max-w-3xl mx-auto text-center px-4 sm:px-6">
                {/* Zepto comparison */}
                <div className="space-y-3 sm:space-y-5 mb-4 sm:mb-6 md:mb-8">
                    <p className="text-xs sm:text-sm md:text-base text-[#4A4A4A] leading-relaxed animate-fade-in animate-delay-1">
                        Zepto saw a <span className="text-[#FF3366] font-bold">₹7 Lakh Crore</span> grocery market with no 10-minute delivery player.
                        They built the dark store infrastructure. Now they&apos;re worth <span className="text-[#FF3366] font-bold">₹45,000 Crore</span>.
                    </p>

                    <p className="text-xs sm:text-sm md:text-base text-[#4A4A4A] leading-relaxed animate-fade-in animate-delay-2">
                        We see a <span className="text-[#FF3366] font-bold">₹2.1 Lakh Crore</span> garment care market with <span className="text-[#FF3366] font-bold">zero</span> machine-first, tech-enabled players.
                        We&apos;re building the dark hub infrastructure. And we&apos;re starting with <span className="text-[#FF3366] font-bold">paying customers already in hand</span>.
                    </p>
                </div>

                {/* The question */}
                <div className="neo-card-solid-pink p-4 sm:p-5 md:p-8 shadow-[5px_5px_0px_#1A1A1A] animate-scale-in animate-delay-4 mb-4 sm:mb-6 md:mb-8">
                    <p className="font-display text-base sm:text-xl md:text-2xl text-white leading-relaxed">
                        The only question is — are you the investor who saw it at{' '}
                        <span className="font-garamond garamond-underline text-white text-lg sm:text-2xl md:text-3xl" style={{ '--underline-color': '#fff' } as React.CSSProperties}>₹3.75 Crore</span>?
                        <br />
                        Or the one who <span className="text-white/40">wishes they had?</span>
                    </p>
                </div>

                {/* Contact */}
                <div className="animate-fade-in animate-delay-6">
                    <h3 className="font-display text-lg sm:text-xl md:text-2xl text-[#FF3366] mb-1">Rohit</h3>
                    <span className="font-mono text-[8px] sm:text-[9px] tracking-wider text-[#8A8A8A]">CEO & CO-FOUNDER</span>

                    <div className="w-12 sm:w-16 h-px bg-[#E0DCD4] mx-auto my-3 sm:my-4" />

                    <div className="space-y-1 sm:space-y-1.5">
                        <p className="font-mono text-[10px] sm:text-xs text-[#8A8A8A]">rohit@2ndhanger.com</p>
                        <p className="font-mono text-[10px] sm:text-xs text-[#8A8A8A]">+91 XXXXX XXXXX</p>
                    </div>

                    <div className="w-12 sm:w-16 h-px bg-[#E0DCD4] mx-auto my-3 sm:my-4" />

                    <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
                        <span className="font-mono text-[8px] sm:text-[9px] tracking-widest text-[#8A8A8A]">2ND HANGER</span>
                        <span className="text-[#FF3366]">·</span>
                        <span className="font-mono text-[8px] sm:text-[9px] tracking-widest text-[#8A8A8A]">CHENNAI</span>
                        <span className="text-[#FF3366]">·</span>
                        <span className="font-mono text-[8px] sm:text-[9px] tracking-widest text-[#8A8A8A]">2ndhanger.com</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
