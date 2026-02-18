'use client';

const HEADERS = ['', 'Dhobi', 'UClean / Tumbledry', '2nd Hanger'];

const ROWS = [
    { label: 'Price', dhobi: '₹10', uclean: '₹40-60', sh: '₹15-30' },
    { label: 'Quality', dhobi: 'Coal iron', uclean: 'Machine', sh: 'Machine' },
    { label: 'Speed', dhobi: '1-2 days', uclean: '2-3 days', sh: '1 hour to same day' },
    { label: 'Delivery', dhobi: 'Customer carries', uclean: 'Store walk-in', sh: 'Doorstep via app' },
    { label: 'Model', dhobi: 'One man, one iron', uclean: 'Franchise, retail rent', sh: 'Dark hub, freelance riders' },
    { label: 'Tech', dhobi: 'None', uclean: 'Basic POS', sh: '3 real-time apps' },
];

export function SlideThirteen() {
    return (
        <div className="slide-container retro-grid">
            <div className="slide-number">13 / 18</div>

            <div className="max-w-5xl mx-auto w-full px-4 sm:px-6">
                <div className="text-center mb-3 sm:mb-5">
                    <div className="neo-tag-pink inline-flex mb-2 sm:mb-4 animate-fade-in">
                        <span>Competition</span>
                    </div>
                    <h2 className="font-display text-xl sm:text-3xl md:text-4xl text-[#1A1A1A] animate-slide-up">
                        The Gap <span className="text-[#FF3366]">Nobody Serves.</span>
                    </h2>
                </div>

                {/* Comparison table */}
                <div className="neo-card-flat p-2 sm:p-3 md:p-4 max-w-4xl mx-auto mb-3 sm:mb-4 animate-slide-up animate-delay-2 overflow-x-auto">
                    <div className="min-w-[500px]">
                        {/* Header */}
                        <div className="grid grid-cols-4 gap-0">
                            {HEADERS.map((h, i) => (
                                <div key={i} className={`p-1.5 sm:p-2 border-b-2 ${i === 3 ? 'border-[#FF3366]/30 bg-[#FF3366]/5 text-center' : 'border-[#1A1A1A]/10 text-center'}`}>
                                    <span className={`font-display text-[9px] sm:text-[10px] ${i === 3 ? 'text-[#FF3366] font-bold' : 'text-[#8A8A8A]'}`}>{h}</span>
                                </div>
                            ))}
                        </div>
                        {/* Rows */}
                        {ROWS.map((row, i) => (
                            <div key={i} className="grid grid-cols-4 gap-0 border-b border-[#1A1A1A]/5">
                                <div className="p-1.5 sm:p-2"><span className="font-mono text-[8px] sm:text-[9px] text-[#8A8A8A]">{row.label}</span></div>
                                <div className="p-1.5 sm:p-2 text-center"><span className="text-[8px] sm:text-[9px] text-[#8A8A8A]">{row.dhobi}</span></div>
                                <div className="p-1.5 sm:p-2 text-center"><span className="text-[8px] sm:text-[9px] text-[#4A4A4A]">{row.uclean}</span></div>
                                <div className="p-1.5 sm:p-2 text-center bg-[#FF3366]/5"><span className="text-[8px] sm:text-[9px] text-[#1A1A1A] font-bold">{row.sh}</span></div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="neo-card-solid-pink p-3 sm:p-4 max-w-3xl mx-auto text-center shadow-[4px_4px_0px_#1A1A1A] animate-scale-in animate-delay-5">
                    <p className="text-[10px] sm:text-sm font-bold text-white mb-1">Why they can&apos;t copy us:</p>
                    <p className="text-[9px] sm:text-[11px] text-white/85 leading-relaxed mb-1">
                        UClean dropping to ₹15 cannibalises their ₹40-60 revenue. 500 franchise owners revolt. <span className="text-white/60">Innovator&apos;s Dilemma — same reason Swiggy couldn&apos;t stop Zepto.</span>
                    </p>
                    <p className="text-[9px] sm:text-[11px] text-white/85 leading-relaxed">
                        The dhobi can&apos;t match our speed, quality, or accountability. <span className="text-white/60">He&apos;s one person with one coal iron.</span>
                    </p>
                </div>
            </div>
        </div>
    );
}
