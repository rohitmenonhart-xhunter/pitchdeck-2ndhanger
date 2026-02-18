'use client';

const SERVICES = [
    { service: 'Regular', price: '₹15', share: '60%' },
    { service: 'Express', price: '₹30', share: '28%' },
    { service: 'Saree Regular', price: '₹50', share: '7%' },
    { service: 'Saree Express', price: '₹75', share: '5%' },
];

export function SlideSix() {
    return (
        <div className="slide-container retro-grid">
            <div className="slide-number">06 / 18</div>

            <div className="max-w-5xl mx-auto w-full px-4 sm:px-6">
                <div className="text-center mb-3 sm:mb-5">
                    <div className="neo-tag-pink inline-flex mb-2 sm:mb-4 animate-fade-in">
                        <span>Pricing & Unit Economics</span>
                    </div>
                    <h2 className="font-display text-xl sm:text-3xl md:text-4xl text-[#1A1A1A] animate-slide-up">
                        ₹25 Blended. <span className="text-[#FF3366]">79% Contribution Margin.</span>
                    </h2>
                </div>

                {/* Pricing table */}
                <div className="neo-card-flat p-3 sm:p-4 max-w-2xl mx-auto mb-3 sm:mb-4 animate-slide-up animate-delay-2">
                    <div className="grid grid-cols-3 gap-0 mb-1">
                        <div className="p-1.5 border-b-2 border-[#1A1A1A]/10"><span className="font-mono text-[8px] sm:text-[9px] text-[#8A8A8A]">Service</span></div>
                        <div className="p-1.5 border-b-2 border-[#1A1A1A]/10 text-center"><span className="font-mono text-[8px] sm:text-[9px] text-[#8A8A8A]">Price</span></div>
                        <div className="p-1.5 border-b-2 border-[#1A1A1A]/10 text-right"><span className="font-mono text-[8px] sm:text-[9px] text-[#8A8A8A]">Vol. Share</span></div>
                    </div>
                    {SERVICES.map((s, i) => (
                        <div key={i} className="grid grid-cols-3 gap-0 border-b border-[#1A1A1A]/5">
                            <div className="p-1.5"><span className="text-[10px] sm:text-[11px] text-[#1A1A1A]">{s.service}</span></div>
                            <div className="p-1.5 text-center"><span className="text-[10px] sm:text-[11px] font-bold text-[#FF3366]">{s.price}</span></div>
                            <div className="p-1.5 text-right"><span className="text-[10px] sm:text-[11px] text-[#8A8A8A]">{s.share}</span></div>
                        </div>
                    ))}
                </div>

                {/* Key metrics */}
                <div className="grid grid-cols-3 gap-2 sm:gap-3 max-w-3xl mx-auto mb-3 sm:mb-4 animate-fade-in animate-delay-4">
                    <div className="neo-card-yellow p-2 sm:p-3 text-center">
                        <span className="stat-number text-lg sm:text-2xl text-[#1A1A1A]">₹25</span>
                        <span className="font-mono text-[7px] sm:text-[8px] text-[#4A4A4A] block mt-1">BLENDED RATE</span>
                    </div>
                    <div className="neo-card-mint p-2 sm:p-3 text-center">
                        <span className="stat-number text-lg sm:text-2xl text-[#1A1A1A]">₹5.20</span>
                        <span className="font-mono text-[7px] sm:text-[8px] text-[#4A4A4A] block mt-1">VARIABLE COST</span>
                    </div>
                    <div className="neo-card-solid-pink p-2 sm:p-3 text-center shadow-[3px_3px_0px_#1A1A1A]">
                        <span className="stat-number text-lg sm:text-2xl text-white">₹19.80</span>
                        <span className="font-mono text-[7px] sm:text-[8px] text-white/70 block mt-1">CONTRIBUTION (79%)</span>
                    </div>
                </div>

                <div className="neo-card-flat p-2.5 sm:p-3 max-w-2xl mx-auto text-center mb-3 animate-fade-in animate-delay-6">
                    <p className="text-[9px] sm:text-[11px] text-[#4A4A4A]">
                        Variable cost: rider ₹4 + electricity + packaging + damage reserve. Out of every <span className="font-bold text-[#1A1A1A]">₹100 earned, ₹79 goes towards rent, salaries, and profit.</span>
                    </p>
                </div>

                <div className="neo-card-solid-yellow p-2.5 sm:p-3 max-w-2xl mx-auto text-center shadow-[3px_3px_0px_#1A1A1A] animate-scale-in animate-delay-7">
                    <p className="text-[9px] sm:text-xs font-bold text-[#1A1A1A]">
                        Why so high? The machine does the work. 150 pcs/hr. Two operators at ₹12K handle 700+ pcs/day. <span className="text-[#FF3366]">The per-piece cost is just electricity at 27 paisa and a bike rider.</span>
                    </p>
                </div>
            </div>
        </div>
    );
}
