'use client';

const STEPS = [
    { num: '01', title: 'Order', desc: 'Customer opens app → Selects Express or Regular → Rider dispatched' },
    { num: '02', title: 'Pickup', desc: 'Rider on bike reaches customer in 10-15 min → Picks up clothes → Rides to hub (2-3 km)' },
    { num: '03', title: 'Press', desc: 'Machine presses: 5 pieces in 2 minutes → Quality check → Pack' },
    { num: '04', title: 'Deliver', desc: 'Same rider delivers back → Customer receives machine-pressed clothes' },
];

const APPS = [
    { name: 'Customer App', desc: 'Order, track, pay, rate' },
    { name: 'Rider App', desc: 'Dispatch, navigate, earn, confirm' },
    { name: 'Hub App', desc: 'Queue management, express priority, analytics' },
];

export function SlideFour() {
    return (
        <div className="slide-container retro-grid">
            <div className="slide-number">04 / 18</div>

            <div className="max-w-5xl mx-auto w-full px-4 sm:px-6">
                <div className="text-center mb-3 sm:mb-5">
                    <div className="neo-tag-coral inline-flex mb-2 sm:mb-4 animate-fade-in">
                        <span>How It Works</span>
                    </div>
                    <h2 className="font-display text-xl sm:text-3xl md:text-4xl text-[#1A1A1A] animate-slide-up">
                        Order to Delivery: <span className="text-[#FF3366]">35-50 Minutes</span>
                    </h2>
                </div>

                {/* Steps */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 max-w-5xl mx-auto mb-4 sm:mb-5">
                    {STEPS.map((s, i) => {
                        const fills = ['neo-card-peach', 'neo-card-yellow', 'neo-card-mint', 'neo-card-solid-pink'];
                        const isLast = i === STEPS.length - 1;
                        return (
                            <div key={i} className={`${fills[i]} p-3 sm:p-4 animate-slide-up animate-delay-${i + 2} ${isLast ? 'shadow-[3px_3px_0px_#1A1A1A]' : ''}`}>
                                <div className="flex items-center gap-2 mb-1.5">
                                    <span className={`w-6 h-6 flex items-center justify-center border-2 font-mono text-[9px] font-bold ${isLast ? 'bg-white text-[#FF3366] border-white' : 'bg-white text-[#FF3366] border-[#1A1A1A]/10'}`}>{s.num}</span>
                                    <span className={`font-display text-xs sm:text-sm ${isLast ? 'text-white' : 'text-[#1A1A1A]'}`}>{s.title}</span>
                                </div>
                                <p className={`text-[9px] sm:text-[10px] leading-relaxed ${isLast ? 'text-white/85' : 'text-[#4A4A4A]'}`}>{s.desc}</p>
                            </div>
                        );
                    })}
                </div>

                {/* Timing */}
                <div className="grid grid-cols-2 gap-2 sm:gap-3 max-w-md mx-auto mb-4 animate-fade-in animate-delay-7">
                    <div className="neo-card-solid-pink p-2 sm:p-3 text-center shadow-[3px_3px_0px_#1A1A1A]">
                        <span className="stat-number text-base sm:text-xl text-white">35-50 min</span>
                        <span className="font-mono text-[7px] sm:text-[8px] text-white/60 block mt-0.5">EXPRESS</span>
                    </div>
                    <div className="neo-card-mint p-2 sm:p-3 text-center">
                        <span className="stat-number text-base sm:text-xl text-[#1A1A1A]">Same Day</span>
                        <span className="font-mono text-[7px] sm:text-[8px] text-[#8A8A8A] block mt-0.5">REGULAR (BATCHED)</span>
                    </div>
                </div>

                {/* Three apps */}
                <div className="neo-card-flat p-3 sm:p-4 max-w-3xl mx-auto animate-fade-in animate-delay-8">
                    <h4 className="font-display text-xs sm:text-sm text-[#1A1A1A] mb-2">Three apps power the operation</h4>
                    <div className="grid grid-cols-3 gap-2 sm:gap-3">
                        {APPS.map((a, i) => (
                            <div key={i} className="text-center">
                                <span className="font-mono text-[8px] sm:text-[9px] font-bold text-[#FF3366] block">{a.name}</span>
                                <span className="text-[8px] sm:text-[9px] text-[#4A4A4A]">{a.desc}</span>
                            </div>
                        ))}
                    </div>
                    <p className="text-center font-mono text-[8px] sm:text-[9px] text-[#8A8A8A] mt-2">All built in-house. Zero agency cost.</p>
                </div>
            </div>
        </div>
    );
}
