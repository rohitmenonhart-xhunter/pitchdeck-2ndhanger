'use client';

const ALLOCATIONS = [
    { label: 'Hub 1 CAPEX', amount: '₹10.6L', timing: 'Month 1', fill: 'neo-card-peach' },
    { label: 'Hub 2 CAPEX', amount: '₹8.9L', timing: 'Month 5-6 (accelerated)', fill: 'neo-card-yellow' },
    { label: 'Hub 3 CAPEX', amount: '₹8.9L', timing: 'Month 9-10 (accelerated)', fill: 'neo-card-mint' },
    { label: 'Operating Losses M1-5', amount: '₹2.4L', timing: 'Month 1-5', fill: 'neo-card-flat bg-[#F5F0E8]' },
    { label: 'Buffer + Contingency', amount: '₹10L', timing: 'Reserve', fill: 'neo-card-lavender' },
    { label: 'Speed Reserve', amount: '₹9.2L', timing: 'Hub 2 acceleration', fill: 'neo-card-solid-pink' },
];

export function SlideNine() {
    return (
        <div className="slide-container retro-grid">
            <div className="slide-number">09 / 17</div>

            <div className="max-w-5xl mx-auto w-full px-4 sm:px-6">
                <div className="text-center mb-3 sm:mb-5">
                    <div className="neo-tag-coral inline-flex mb-2 sm:mb-4 animate-fade-in">
                        <span>Capital Deployment</span>
                    </div>
                    <h2 className="font-display text-xl sm:text-3xl md:text-4xl text-[#1A1A1A] animate-slide-up">
                        Never Full ₹50L <span className="text-[#FF3366]">at Risk Simultaneously</span>
                    </h2>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 max-w-4xl mx-auto mb-4 sm:mb-5">
                    {ALLOCATIONS.map((a, i) => {
                        const isLast = i === ALLOCATIONS.length - 1;
                        return (
                            <div key={i} className={`${a.fill} p-2 sm:p-3 animate-slide-up animate-delay-${i + 2} ${isLast ? 'shadow-[3px_3px_0px_#1A1A1A]' : ''}`}>
                                <h3 className={`font-display text-[10px] sm:text-xs mb-0.5 ${isLast ? 'text-white' : 'text-[#1A1A1A]'}`}>{a.label}</h3>
                                <span className={`stat-number text-sm sm:text-lg block ${isLast ? 'text-white' : 'text-[#1A1A1A]'}`}>{a.amount}</span>
                                <span className={`font-mono text-[7px] sm:text-[8px] ${isLast ? 'text-white/60' : 'text-[#8A8A8A]'}`}>{a.timing}</span>
                            </div>
                        );
                    })}
                </div>

                <div className="neo-card-flat p-3 max-w-3xl mx-auto text-center mb-3 animate-fade-in animate-delay-9">
                    <p className="text-[9px] sm:text-[11px] text-[#4A4A4A]">
                        Month 1: only ₹10.6L deployed, rest in bank.
                    </p>
                </div>

                <div className="neo-card-solid-yellow p-2.5 sm:p-3 max-w-2xl mx-auto text-center animate-scale-in animate-delay-10 shadow-[3px_3px_0px_#1A1A1A]">
                    <p className="text-[9px] sm:text-xs font-bold text-[#1A1A1A]">
                        Extra ₹5L over ₹45L = speed. If Hub 1 proves M3, Hub 2 opens M5, not M13. <span className="text-[#FF3366]">₹5L buys 8 months.</span>
                    </p>
                </div>
            </div>
        </div>
    );
}
