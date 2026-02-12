'use client';

const ALLOCATIONS = [
    { label: 'Hub 1 CAPEX', amount: '₹10.0L', pct: '22%', timing: 'Month 1', detail: 'Machine ₹4L + Van ₹3L + Store ₹1.5L + Marketing ₹1L + Tech ₹30K + Supplies ₹20K', fill: 'neo-card-peach' },
    { label: 'Hub 2 CAPEX', amount: '₹8.3L', pct: '18%', timing: 'Month 13', detail: '', fill: 'neo-card-yellow' },
    { label: 'Hub 3 CAPEX', amount: '₹8.3L', pct: '18%', timing: 'Month 19', detail: '', fill: 'neo-card-mint' },
    { label: 'Ops Losses M1-5', amount: '₹1.5L', pct: '3%', timing: '', detail: '', fill: 'neo-card-flat bg-[#F5F0E8]' },
    { label: 'Buffer + Contingency', amount: '₹9.5L', pct: '21%', timing: '', detail: '', fill: 'neo-card-flat bg-[#F5F0E8]' },
    { label: 'Unallocated Reserve', amount: '₹7.4L', pct: '16%', timing: '', detail: '', fill: 'neo-card-lavender' },
];

export function SlideNine() {
    return (
        <div className="slide-container retro-grid">
            <div className="slide-number">09 / 19</div>

            <div className="max-w-5xl mx-auto w-full px-4 sm:px-6">
                <div className="text-center mb-3 sm:mb-5">
                    <div className="neo-tag-coral inline-flex mb-2 sm:mb-4 animate-fade-in">
                        <span>Capital Deployment</span>
                    </div>
                    <h2 className="font-display text-xl sm:text-3xl md:text-4xl text-[#1A1A1A] animate-slide-up">
                        80% of Your Money <span className="text-[#FF3366]">Still in the Bank After Year 1</span>
                    </h2>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 max-w-4xl mx-auto mb-4 sm:mb-5">
                    {ALLOCATIONS.map((a, i) => (
                        <div key={i} className={`${a.fill} p-2 sm:p-3 animate-slide-up animate-delay-${i + 2}`}>
                            <div className="flex items-center gap-1.5 mb-1">
                                <span className="font-mono text-[9px] sm:text-[10px] font-bold text-[#FF3366]">{a.pct}</span>
                                {a.timing && <span className="font-mono text-[7px] sm:text-[8px] text-[#8A8A8A]">· {a.timing}</span>}
                            </div>
                            <h3 className="font-display text-[10px] sm:text-xs text-[#1A1A1A] mb-0.5">{a.label}</h3>
                            <span className="stat-number text-sm sm:text-lg text-[#1A1A1A]">{a.amount}</span>
                            {a.detail && <p className="text-[7px] sm:text-[8px] text-[#8A8A8A] mt-1">{a.detail}</p>}
                        </div>
                    ))}
                </div>

                <div className="neo-card-solid-pink p-3 sm:p-4 max-w-3xl mx-auto text-center animate-scale-in animate-delay-9 shadow-[4px_4px_0px_#1A1A1A]">
                    <h4 className="font-display text-xs sm:text-sm text-white mb-1.5">Capital Protection</h4>
                    <p className="text-[10px] sm:text-[11px] text-white/90 leading-relaxed">
                        Worst-case shutdown at Month 12 — 92-94% recoverable. ₹36.3L cash + ₹5-6L assets = <span className="font-bold text-white">₹41-42L out of ₹45L.</span>
                    </p>
                    <p className="text-[9px] sm:text-[10px] text-white/60 mt-1.5">
                        At no point is the full ₹45L at risk simultaneously.
                    </p>
                </div>
            </div>
        </div>
    );
}
