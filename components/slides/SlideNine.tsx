'use client';

const DEPLOY = [
    { label: 'Hub setup', amount: '₹7.70L' },
    { label: 'Operating losses M1-2', amount: '₹1.00L' },
    { label: 'Contingency buffer', amount: '₹3.00L' },
    { label: 'Working capital', amount: '₹1.00L' },
    { label: 'Reserve', amount: '₹2.30L' },
];

export function SlideNine() {
    return (
        <div className="slide-container retro-grid">
            <div className="slide-number">09 / 18</div>

            <div className="max-w-4xl mx-auto w-full px-4 sm:px-6">
                <div className="text-center mb-3 sm:mb-5 md:mb-6">
                    <div className="neo-tag-pink inline-flex mb-2 sm:mb-4 animate-fade-in">
                        <span>The Ask</span>
                    </div>
                    <h2 className="font-display text-2xl sm:text-4xl md:text-5xl text-[#1A1A1A] animate-slide-up">
                        ₹15 Lakhs | 5% Equity
                    </h2>
                    <p className="font-mono text-[10px] sm:text-sm text-[#8A8A8A] mt-2 animate-fade-in animate-delay-1">
                        Post-money valuation: ₹3 Crore
                    </p>
                </div>

                {/* Deployment table */}
                <div className="neo-card-flat p-3 sm:p-4 md:p-5 max-w-xl mx-auto mb-4 sm:mb-5 animate-slide-up animate-delay-2">
                    <h3 className="font-display text-xs sm:text-sm text-[#1A1A1A] mb-2 sm:mb-3">Capital Deployment</h3>
                    {DEPLOY.map((d, i) => (
                        <div key={i} className="flex items-center justify-between py-1.5 border-b border-[#1A1A1A]/5 last:border-0">
                            <span className="text-[10px] sm:text-[11px] text-[#4A4A4A]">{d.label}</span>
                            <span className="font-mono text-[10px] sm:text-[11px] font-bold text-[#1A1A1A]">{d.amount}</span>
                        </div>
                    ))}
                    <div className="flex items-center justify-between pt-2 border-t-2 border-[#1A1A1A]/10 mt-1">
                        <span className="text-[10px] sm:text-xs font-bold text-[#1A1A1A]">Total</span>
                        <span className="stat-number text-sm sm:text-lg text-[#FF3366]">₹15.00L</span>
                    </div>
                </div>

                <div className="neo-card-solid-pink p-3 sm:p-4 max-w-2xl mx-auto text-center shadow-[4px_4px_0px_#1A1A1A] animate-scale-in animate-delay-5">
                    <p className="text-[10px] sm:text-sm text-white leading-relaxed">
                        Not asking for ₹50 lakhs to build a dream. Asking for <span className="font-bold">₹15 lakhs to prove a model.</span> One hub. One machine. 12 months.
                    </p>
                    <p className="text-[9px] sm:text-[11px] text-white/70 mt-2">
                        If it works, Seed round takes it to 15 hubs. If it doesn&apos;t, you recover 60-70% of your capital from machine resale and remaining cash.
                    </p>
                </div>
            </div>
        </div>
    );
}
