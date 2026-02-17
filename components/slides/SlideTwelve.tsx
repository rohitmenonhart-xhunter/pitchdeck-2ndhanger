'use client';

const COMPARISON = [
    { label: 'Price', uclean: '₹40-60/piece', sh: '₹11/piece' },
    { label: 'Model', uclean: 'Store walk-in, prime retail', sh: 'Doorstep, dark hub' },
    { label: 'Franchise cost', uclean: '₹25-30L', sh: '₹10.6L' },
    { label: 'Customer', uclean: 'Top 10%', sh: 'Other 90%' },
];

export function SlideTwelve() {
    return (
        <div className="slide-container retro-grid">
            <div className="slide-number">12 / 17</div>

            <div className="max-w-5xl mx-auto w-full px-4 sm:px-6">
                <div className="text-center mb-3 sm:mb-5 md:mb-6">
                    <div className="neo-tag-coral inline-flex mb-2 sm:mb-4 animate-fade-in">
                        <span>Competition</span>
                    </div>
                    <h2 className="font-display text-xl sm:text-3xl md:text-4xl text-[#1A1A1A] animate-slide-up">
                        They Serve the 10%. <span className="text-[#FF3366]">We Serve the 90%.</span>
                    </h2>
                </div>

                {/* Comparison table */}
                <div className="neo-card-flat p-3 sm:p-4 md:p-5 max-w-3xl mx-auto mb-4 sm:mb-5 animate-slide-up animate-delay-2">
                    <div className="grid grid-cols-3 gap-0">
                        {/* Header */}
                        <div className="p-1.5 sm:p-2 border-b-2 border-[#1A1A1A]/10" />
                        <div className="p-1.5 sm:p-2 border-b-2 border-[#1A1A1A]/10 text-center">
                            <span className="font-display text-[10px] sm:text-xs text-[#8A8A8A]">UClean</span>
                        </div>
                        <div className="p-1.5 sm:p-2 border-b-2 border-[#FF3366]/30 text-center bg-[#FF3366]/5">
                            <span className="font-display text-[10px] sm:text-xs text-[#FF3366] font-bold">2nd Hanger</span>
                        </div>

                        {/* Rows */}
                        {COMPARISON.map((row, i) => (
                            <div key={i} className="contents">
                                <div className="p-1.5 sm:p-2 border-b border-[#1A1A1A]/5">
                                    <span className="font-mono text-[9px] sm:text-[10px] text-[#8A8A8A]">{row.label}</span>
                                </div>
                                <div className="p-1.5 sm:p-2 border-b border-[#1A1A1A]/5 text-center">
                                    <span className="text-[9px] sm:text-[10px] text-[#4A4A4A]">{row.uclean}</span>
                                </div>
                                <div className="p-1.5 sm:p-2 border-b border-[#FF3366]/10 text-center bg-[#FF3366]/5">
                                    <span className="text-[9px] sm:text-[10px] text-[#1A1A1A] font-bold">{row.sh}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="neo-card-solid-pink p-3 sm:p-4 max-w-3xl mx-auto text-center shadow-[4px_4px_0px_#1A1A1A] animate-scale-in animate-delay-5">
                    <p className="text-[10px] sm:text-sm font-bold text-white leading-relaxed">
                        Why they can&apos;t copy: ₹11 cannibalises ₹40-60. 500 franchise owners revolt.<br />
                        <span className="text-white/70">Innovator&apos;s Dilemma. Same reason Swiggy couldn&apos;t stop Zepto.</span>
                    </p>
                </div>
            </div>
        </div>
    );
}
