'use client';

const STEPS = [
    'Customer orders via App/WhatsApp',
    'Van picks up from doorstep',
    'Machine-pressed at hub (70-80 pcs/hour)',
    'Quality checked & packaged',
    'Delivered back same day',
];

export function SlideThree() {
    return (
        <div className="slide-container retro-grid">
            <div className="slide-number">03 / 19</div>

            <div className="max-w-5xl mx-auto w-full px-4 sm:px-6">
                <div className="text-center mb-3 sm:mb-5 md:mb-6">
                    <div className="neo-tag-yellow inline-flex mb-2 sm:mb-4 animate-fade-in">
                        <span>The Solution</span>
                    </div>
                    <h2 className="font-display text-xl sm:text-3xl md:text-4xl text-[#1A1A1A] animate-slide-up">
                        Industrial Machine + Doorstep = <span className="text-[#FF3366]">10x Better, Same Price</span>
                    </h2>
                </div>

                {/* Comparison */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 max-w-4xl mx-auto mb-4 sm:mb-5">
                    <div className="neo-card-flat p-3 sm:p-4 md:p-5 bg-[#F5F0E8] animate-slide-right animate-delay-2">
                        <h3 className="font-display text-sm sm:text-base text-[#8A8A8A] mb-2 sm:mb-3">Dhobi (Current)</h3>
                        <div className="space-y-1 sm:space-y-1.5">
                            {['₹10/piece', 'Coal iron', 'Burns risk', 'No doorstep', '1-2 day wait', 'No tracking'].map((item, i) => (
                                <div key={i} className="flex items-center gap-2 py-0.5">
                                    <span className="font-mono text-[10px] sm:text-xs text-[#8A8A8A]">✕</span>
                                    <span className="text-[10px] sm:text-[11px] text-[#8A8A8A]">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="neo-card-solid-pink p-3 sm:p-4 md:p-5 shadow-[5px_5px_0px_#1A1A1A] animate-slide-left animate-delay-3">
                        <h3 className="font-display text-sm sm:text-base text-white mb-2 sm:mb-3">2nd Hanger</h3>
                        <div className="space-y-1 sm:space-y-1.5">
                            {['₹11/piece', 'Steam press', 'Zero damage', 'Doorstep pickup & delivery', 'Same day', 'App tracked'].map((item, i) => (
                                <div key={i} className="flex items-center gap-2 py-0.5">
                                    <span className="font-mono text-[10px] sm:text-xs text-white/70">→</span>
                                    <span className="text-[10px] sm:text-[11px] text-white/90">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="neo-card-solid-yellow p-3 max-w-2xl mx-auto text-center animate-scale-in animate-delay-5 shadow-[4px_4px_0px_#1A1A1A] mb-4">
                    <p className="text-[10px] sm:text-sm font-bold text-[#1A1A1A]">
                        Just ₹1 more for <span className="text-[#FF3366]">10x the quality + convenience.</span>
                    </p>
                </div>

                {/* How it works */}
                <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 animate-fade-in animate-delay-6">
                    {STEPS.map((step, i) => (
                        <div key={i} className="flex items-center gap-1.5 sm:gap-2">
                            <div className="neo-card-mint p-1.5 sm:p-2 text-center">
                                <span className="font-mono text-[8px] sm:text-[9px] font-bold text-[#FF3366] block">{String(i + 1).padStart(2, '0')}</span>
                                <span className="text-[8px] sm:text-[9px] text-[#4A4A4A] leading-tight block max-w-[5rem] sm:max-w-[7rem]">{step}</span>
                            </div>
                            {i < STEPS.length - 1 && <span className="text-[#FF3366] font-bold text-xs hidden sm:inline">→</span>}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
