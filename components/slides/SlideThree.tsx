'use client';

const PRICING = [
    { service: 'Express', price: '₹30/piece', detail: 'Under 1 hour' },
    { service: 'Regular', price: '₹15/piece', detail: 'Same day' },
    { service: 'Saree Express', price: '₹75', detail: 'Under 1 hour' },
    { service: 'Saree Regular', price: '₹50', detail: 'Same day' },
];

export function SlideThree() {
    return (
        <div className="slide-container retro-grid">
            <div className="slide-number">03 / 18</div>

            <div className="max-w-5xl mx-auto w-full px-4 sm:px-6">
                <div className="text-center mb-3 sm:mb-5">
                    <div className="neo-tag-yellow inline-flex mb-2 sm:mb-4 animate-fade-in">
                        <span>The Solution</span>
                    </div>
                    <h2 className="font-display text-xl sm:text-3xl md:text-4xl text-[#1A1A1A] animate-slide-up">
                        Industrial Steam Press. <span className="text-[#FF3366]">150 Pieces/Hour. One Shirt: 24 Seconds.</span>
                    </h2>
                </div>

                <p className="text-[10px] sm:text-sm text-[#4A4A4A] text-center max-w-3xl mx-auto mb-4 animate-fade-in animate-delay-1 leading-relaxed">
                    Customer orders on app. Freelancer rider on bike picks up from their door. Brings to hub. Machine presses. Same rider delivers back.
                </p>

                {/* Pricing */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 max-w-3xl mx-auto mb-4 sm:mb-5">
                    {PRICING.map((p, i) => (
                        <div key={i} className={`${i < 2 ? (i === 0 ? 'neo-card-solid-pink shadow-[3px_3px_0px_#1A1A1A]' : 'neo-card-mint') : 'neo-card-flat bg-[#F5F0E8]'} p-2 sm:p-3 text-center animate-slide-up animate-delay-${i + 2}`}>
                            <span className={`font-display text-[10px] sm:text-xs block mb-0.5 ${i === 0 ? 'text-white' : 'text-[#1A1A1A]'}`}>{p.service}</span>
                            <span className={`stat-number text-base sm:text-xl block ${i === 0 ? 'text-white' : 'text-[#FF3366]'}`}>{p.price}</span>
                            <span className={`font-mono text-[7px] sm:text-[8px] block mt-0.5 ${i === 0 ? 'text-white/60' : 'text-[#8A8A8A]'}`}>{p.detail}</span>
                        </div>
                    ))}
                </div>

                <div className="neo-card-flat p-3 sm:p-4 max-w-2xl mx-auto mb-3 text-center animate-fade-in animate-delay-7">
                    <p className="text-[9px] sm:text-[11px] text-[#4A4A4A]">
                        No van. No store. <span className="font-bold text-[#1A1A1A]">Riders use their own bikes. Paid per trip based on distance.</span>
                    </p>
                </div>

                {/* Comparison */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3 max-w-3xl mx-auto mb-3 animate-fade-in animate-delay-8">
                    <div className="neo-card-flat bg-[#F5F0E8] p-2.5 sm:p-3">
                        <span className="font-mono text-[8px] sm:text-[9px] text-[#8A8A8A] block mb-1">DHOBI</span>
                        <p className="text-[10px] sm:text-[11px] text-[#8A8A8A]">2 days · Coal iron · ₹10</p>
                    </div>
                    <div className="neo-card-solid-pink p-2.5 sm:p-3 shadow-[3px_3px_0px_#1A1A1A]">
                        <span className="font-mono text-[8px] sm:text-[9px] text-white/60 block mb-1">2ND HANGER</span>
                        <p className="text-[10px] sm:text-[11px] text-white">1 hour · Machine · ₹30. Or same day · ₹15.</p>
                    </div>
                </div>

                <p className="text-center text-[10px] sm:text-xs font-bold text-[#1A1A1A] animate-fade-in animate-delay-9">
                    Nobody in India offers sub-1-hour machine-pressed doorstep delivery. <span className="text-[#FF3366]">Nobody.</span>
                </p>
            </div>
        </div>
    );
}
