'use client';

const MOATS = [
    {
        title: 'Hyperlocal Density',
        desc: 'First hub in a neighbourhood owns it. 300 households on subscription don\'t switch. Density beats everything.',
        fill: 'neo-card-peach',
    },
    {
        title: 'Infrastructure Lock-in',
        desc: '₹10L machine + van + trained team = 6-month head start. By the time anyone copies, we have contracts, subscriptions, and loyalty locked in.',
        fill: 'neo-card-yellow',
    },
    {
        title: 'Customer Habit',
        desc: 'Machine-quality doorstep ironing → going back to the dhobi is psychologically impossible. Habit is the strongest moat.',
        fill: 'neo-card-mint',
    },
    {
        title: 'Data Advantage',
        desc: 'Route efficiency, demand prediction, customer preference data compounds every month. New entrant starts blind. We start optimised.',
        fill: 'neo-card-solid-pink',
    },
];

export function SlideThirteen() {
    return (
        <div className="slide-container retro-grid">
            <div className="slide-number">13 / 19</div>

            <div className="max-w-5xl mx-auto w-full px-4 sm:px-6">
                <div className="text-center mb-3 sm:mb-5 md:mb-6">
                    <div className="neo-tag-yellow inline-flex mb-2 sm:mb-4 animate-fade-in">
                        <span>Moat & Defensibility</span>
                    </div>
                    <h2 className="font-display text-xl sm:text-3xl md:text-4xl text-[#1A1A1A] animate-slide-up">
                        Density Wins. <span className="text-[#FF3366]">First Mover Locks the Neighbourhood.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 max-w-5xl mx-auto">
                    {MOATS.map((m, i) => {
                        const isLast = i === MOATS.length - 1;
                        return (
                            <div key={i} className={`${m.fill} p-3 sm:p-4 md:p-5 animate-slide-up animate-delay-${i + 2} ${isLast ? 'shadow-[4px_4px_0px_#1A1A1A]' : ''}`}>
                                <div className="flex items-center gap-2 mb-2">
                                    <span className={`w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center border-2 font-mono text-[10px] sm:text-xs font-bold ${isLast ? 'bg-white text-[#FF3366] border-white' : 'bg-white text-[#FF3366] border-[#1A1A1A]/15'}`}>
                                        {String(i + 1).padStart(2, '0')}
                                    </span>
                                </div>
                                <h3 className={`font-display text-xs sm:text-sm mb-1.5 ${isLast ? 'text-white' : 'text-[#1A1A1A]'}`}>{m.title}</h3>
                                <p className={`text-[9px] sm:text-[10px] leading-relaxed ${isLast ? 'text-white/85' : 'text-[#4A4A4A]'}`}>{m.desc}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
