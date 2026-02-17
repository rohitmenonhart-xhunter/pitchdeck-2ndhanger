'use client';

const MOATS = [
    { title: 'Density', desc: 'First hub captures 200-300 households, habits lock after 2-3 orders', fill: 'neo-card-peach' },
    { title: 'Infrastructure', desc: '₹10.6L deployed, any competitor 6 months behind', fill: 'neo-card-yellow' },
    { title: 'Speed', desc: 'While they set up Hub 1, we\'re opening Hub 5', fill: 'neo-card-mint' },
    { title: 'Data', desc: 'Routes, demand patterns, preferences compound monthly', fill: 'neo-card-lavender' },
];

const DEPTH = [
    { hubs: '3 hubs', level: 'Moderate' },
    { hubs: '30 hubs', level: 'Strong' },
    { hubs: '300 hubs', level: 'Unbreakable' },
];

export function SlideThirteen() {
    return (
        <div className="slide-container retro-grid">
            <div className="slide-number">13 / 17</div>

            <div className="max-w-5xl mx-auto w-full px-4 sm:px-6">
                <div className="text-center mb-3 sm:mb-5 md:mb-6">
                    <div className="neo-tag-yellow inline-flex mb-2 sm:mb-4 animate-fade-in">
                        <span>Moat & Defensibility</span>
                    </div>
                    <h2 className="font-display text-xl sm:text-3xl md:text-4xl text-[#1A1A1A] animate-slide-up">
                        At Pre-Seed: Thin. <span className="text-[#FF3366]">Honest About That.</span>
                    </h2>
                    <p className="text-[10px] sm:text-sm text-[#4A4A4A] mt-1 sm:mt-2 animate-fade-in animate-delay-1">
                        But deepens daily.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 max-w-5xl mx-auto mb-4 sm:mb-5">
                    {MOATS.map((m, i) => (
                        <div key={i} className={`${m.fill} p-3 sm:p-4 animate-slide-up animate-delay-${i + 2}`}>
                            <div className="flex items-center gap-2 mb-1.5">
                                <span className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center bg-white border-2 border-[#1A1A1A]/10 font-mono text-[8px] sm:text-[9px] font-bold text-[#FF3366]">
                                    {String(i + 1).padStart(2, '0')}
                                </span>
                            </div>
                            <h3 className="font-display text-xs sm:text-sm text-[#1A1A1A] mb-1">{m.title}</h3>
                            <p className="text-[9px] sm:text-[10px] text-[#4A4A4A] leading-relaxed">{m.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Depth progression */}
                <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 animate-fade-in animate-delay-7">
                    {DEPTH.map((d, i) => (
                        <div key={i} className="flex items-center gap-2 sm:gap-3">
                            <div className={`p-1.5 sm:p-2 text-center ${i === 2 ? 'neo-card-solid-pink shadow-[3px_3px_0px_#1A1A1A]' : 'neo-card-flat bg-[#F5F0E8]'}`}>
                                <span className={`font-mono text-[8px] sm:text-[9px] block ${i === 2 ? 'text-white/60' : 'text-[#8A8A8A]'}`}>{d.hubs}</span>
                                <span className={`font-mono text-[9px] sm:text-xs font-bold block ${i === 2 ? 'text-white' : 'text-[#1A1A1A]'}`}>{d.level}</span>
                            </div>
                            {i < DEPTH.length - 1 && <span className="text-[#FF3366] font-bold text-xs">→</span>}
                        </div>
                    ))}
                </div>

                <p className="text-center text-[10px] sm:text-xs text-[#1A1A1A] font-bold animate-fade-in animate-delay-8">
                    Speed of expansion <span className="text-[#FF3366]">IS</span> the moat.
                </p>
            </div>
        </div>
    );
}
