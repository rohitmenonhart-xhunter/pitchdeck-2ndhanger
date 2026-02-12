'use client';

const BUILDS = [
    '3 profitable hubs across Chennai',
    '300+ recurring household customers',
    'Proven, documented, replicable hub playbook',
    '₹2.34L/month combined profit by Month 24',
    'Seed-ready profile at ₹15-20 Cr valuation',
];

export function SlideSeventeen() {
    return (
        <div className="slide-container retro-grid">
            <div className="slide-number">17 / 19</div>

            <div className="max-w-4xl mx-auto w-full px-4 sm:px-6">
                <div className="text-center mb-3 sm:mb-5 md:mb-6">
                    <div className="neo-tag-pink inline-flex mb-2 sm:mb-4 animate-fade-in">
                        <span>The Ask</span>
                    </div>
                    <h2 className="font-display text-2xl sm:text-4xl md:text-5xl text-[#1A1A1A] animate-slide-up">
                        ₹45 Lakhs for 12% Equity
                    </h2>
                    <p className="font-mono text-[10px] sm:text-sm text-[#8A8A8A] mt-2 animate-fade-in animate-delay-1">
                        Post-money valuation: ₹3.75 Crore
                    </p>
                </div>

                {/* What your money builds */}
                <div className="neo-card-flat p-4 sm:p-5 md:p-6 max-w-3xl mx-auto mb-4 sm:mb-5 animate-slide-up animate-delay-2">
                    <h3 className="font-display text-xs sm:text-sm text-[#1A1A1A] mb-3">What your ₹45L builds</h3>
                    <div className="space-y-2 sm:space-y-3">
                        {BUILDS.map((b, i) => (
                            <div key={i} className="flex items-start gap-2 sm:gap-3">
                                <span className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center bg-white border-2 border-[#1A1A1A]/10 font-mono text-[8px] sm:text-[9px] font-bold text-[#FF3366] flex-shrink-0 mt-0.5">
                                    {String(i + 1).padStart(2, '0')}
                                </span>
                                <span className="text-[10px] sm:text-sm text-[#4A4A4A]">{b}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Founder commitment */}
                <div className="neo-card-solid-pink p-3 sm:p-4 max-w-2xl mx-auto text-center shadow-[4px_4px_0px_#1A1A1A] animate-scale-in animate-delay-5">
                    <span className="font-mono text-[8px] sm:text-[9px] text-white/60 block mb-1.5">FOUNDER COMMITMENT</span>
                    <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 mb-2">
                        {[
                            { name: 'Rohit', amt: '₹20K' },
                            { name: 'Murahari', amt: '₹15K' },
                            { name: 'Vibhav', amt: '₹15K' },
                        ].map((f, i) => (
                            <span key={i} className="font-mono text-[9px] sm:text-xs text-white/90">{f.name} {f.amt}</span>
                        ))}
                    </div>
                    <p className="text-[10px] sm:text-xs text-white font-bold">
                        We eat last. The business eats first.
                    </p>
                </div>
            </div>
        </div>
    );
}
