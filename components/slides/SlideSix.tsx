'use client';

const METRICS = [
    { label: 'Blended rate', value: '₹13.15/piece' },
    { label: 'Variable cost', value: '₹1.35/piece' },
    { label: 'Contribution margin', value: '₹11.80 (89.7%)' },
    { label: 'Electricity per piece', value: '27 paisa' },
];

export function SlideSix() {
    return (
        <div className="slide-container retro-grid">
            <div className="slide-number">06 / 17</div>

            <div className="max-w-5xl mx-auto w-full px-4 sm:px-6">
                <div className="text-center mb-3 sm:mb-5 md:mb-6">
                    <div className="neo-tag-pink inline-flex mb-2 sm:mb-4 animate-fade-in">
                        <span>Unit Economics</span>
                    </div>
                    <h2 className="font-display text-xl sm:text-3xl md:text-4xl text-[#1A1A1A] animate-slide-up">
                        89.7% Contribution Margin. <span className="text-[#FF3366]">SaaS-Level from a Physical Service.</span>
                    </h2>
                </div>

                {/* Metrics table */}
                <div className="neo-card-flat p-3 sm:p-4 md:p-5 max-w-2xl mx-auto mb-4 sm:mb-5 animate-slide-up animate-delay-2">
                    <div className="space-y-2 sm:space-y-3">
                        {METRICS.map((m, i) => (
                            <div key={i} className="flex items-center justify-between border-b border-[#1A1A1A]/5 pb-1.5 sm:pb-2">
                                <span className="text-[10px] sm:text-sm text-[#4A4A4A]">{m.label}</span>
                                <span className="font-mono text-[10px] sm:text-sm font-bold text-[#1A1A1A]">{m.value}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* LTV / CAC */}
                <div className="grid grid-cols-3 gap-2 sm:gap-3 max-w-3xl mx-auto mb-4 animate-fade-in animate-delay-4">
                    <div className="neo-card-yellow p-2 sm:p-3 text-center">
                        <span className="stat-number text-lg sm:text-2xl text-[#1A1A1A]">₹15,792</span>
                        <span className="font-mono text-[8px] sm:text-[9px] text-[#4A4A4A] block mt-1">LTV</span>
                    </div>
                    <div className="neo-card-mint p-2 sm:p-3 text-center">
                        <span className="stat-number text-lg sm:text-2xl text-[#1A1A1A]">₹400</span>
                        <span className="font-mono text-[8px] sm:text-[9px] text-[#4A4A4A] block mt-1">CAC</span>
                    </div>
                    <div className="neo-card-solid-pink p-2 sm:p-3 text-center shadow-[3px_3px_0px_#1A1A1A]">
                        <span className="stat-number text-lg sm:text-2xl text-white">39.5x</span>
                        <span className="font-mono text-[8px] sm:text-[9px] text-white/70 block mt-1">LTV:CAC</span>
                    </div>
                </div>

                <p className="text-center text-[9px] sm:text-[10px] text-[#8A8A8A] animate-fade-in animate-delay-6">
                    90% contribution margin from a physical service. <span className="text-[#FF3366] font-bold">The machine does the work, not expensive labour.</span>
                </p>
            </div>
        </div>
    );
}
