'use client';

export function SlideFifteen() {
    return (
        <div className="slide-container retro-grid">
            <div className="slide-number">15 / 17</div>

            <div className="max-w-5xl mx-auto w-full px-4 sm:px-6">
                <div className="text-center mb-5 md:mb-6">
                    <div className="neo-tag-pink inline-flex mb-4 animate-fade-in">
                        <span>The Ask</span>
                    </div>
                    <h2 className="font-display text-2xl sm:text-4xl md:text-5xl text-[#1A1A1A] animate-slide-up">
                        ₹45 Lakhs. 12% Equity.
                    </h2>
                    <p className="font-mono text-sm text-[#8A8A8A] mt-2 animate-fade-in animate-delay-1">
                        Pre-money valuation: ₹3.3 Crore
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto mb-4">
                    {/* Allocation */}
                    <div className="space-y-2 animate-slide-right animate-delay-2">
                        {[
                            { item: 'Hub 1 CAPEX', amount: '₹10L', pct: '22%', fill: 'neo-card-peach', sub: 'Machine ₹4L · Van ₹3L · Setup ₹1.5L · Mktg ₹1L' },
                            { item: 'Hub 1 OPEX Reserve', amount: '₹6L', pct: '13%', fill: 'neo-card-yellow', sub: '10-mo runway. Profitable from M1 but zero cash risk.' },
                            { item: 'Hub 2-3 Scaling', amount: '₹24L', pct: '53%', fill: 'neo-card-mint', sub: 'Deployed ONLY after Hub 1 proves model. Same playbook.' },
                            { item: 'Contingency', amount: '₹5L', pct: '12%', fill: 'neo-card-lavender', sub: 'Emergency repairs, demand spikes, unforeseen.' },
                        ].map((item, i) => (
                            <div key={i} className={`${item.fill} p-3 flex items-center gap-3`}>
                                <div className="min-w-[3rem] text-center">
                                    <span className="stat-number text-lg text-[#1A1A1A]">{item.pct}</span>
                                </div>
                                <div className="border-l-2 border-[#1A1A1A]/15 pl-3 flex-1">
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs font-bold text-[#1A1A1A]">{item.item}</span>
                                        <span className="font-mono text-xs font-bold text-[#FF3366]">{item.amount}</span>
                                    </div>
                                    <span className="text-[9px] text-[#8A8A8A]">{item.sub}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Risk & Return */}
                    <div className="space-y-3 animate-slide-left animate-delay-3">
                        <div className="neo-card-solid-pink p-4 shadow-[4px_4px_0px_#1A1A1A]">
                            <h4 className="font-display text-sm text-white mb-2">Downside Protection</h4>
                            <p className="text-[10px] text-white/80 leading-relaxed">
                                ₹29L stays untouched until Hub 1 is profitable. If it fails → ₹29L back + ₹7-8L from asset liquidation.
                            </p>
                            <div className="mt-2 pt-2 border-t border-white/20 text-center">
                                <span className="font-mono text-xs text-white font-bold">Real risk: ₹8-9L. Upside: unlimited.</span>
                            </div>
                        </div>

                        <div className="neo-card-flat p-3">
                            <h4 className="font-display text-xs text-[#1A1A1A] mb-2">Equity Value Trajectory</h4>
                            <div className="space-y-1">
                                {[
                                    { stage: 'Today', val: '₹3.75 Cr post-money', mult: '1x', highlight: false },
                                    { stage: 'Seed (M12-14)', val: '₹15-20 Cr', mult: '4-5x', highlight: false },
                                    { stage: 'Series A (M24-30)', val: '₹80-100 Cr', mult: '15-20x', highlight: false },
                                    { stage: 'Series B (M36-42)', val: '₹400-500 Cr', mult: '53-67x', highlight: true },
                                ].map((s, i) => (
                                    <div key={i} className={`flex items-center justify-between py-1 border-b border-[#1A1A1A]/10 last:border-0 ${s.highlight ? 'bg-[#FFF0F3] -mx-1 px-1' : ''}`}>
                                        <span className="text-[10px] text-[#4A4A4A]">{s.stage}</span>
                                        <div className="flex items-center gap-2">
                                            <span className="font-mono text-[9px] text-[#8A8A8A]">{s.val}</span>
                                            <span className={`font-mono text-[10px] font-bold ${s.highlight ? 'text-[#FF3366]' : 'text-[#1A1A1A]'}`}>{s.mult}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
