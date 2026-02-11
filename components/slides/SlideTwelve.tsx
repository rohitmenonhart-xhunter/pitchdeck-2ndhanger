'use client';

const MONTHS = [
    { m: 'M1', pcs: 200, rev: '₹68K', opex: '₹60K', profit: '₹8K', h: '8%' },
    { m: 'M2', pcs: 260, rev: '₹88K', opex: '₹62K', profit: '₹26K', h: '18%' },
    { m: 'M3', pcs: 320, rev: '₹1.08L', opex: '₹63K', profit: '₹45K', h: '30%' },
    { m: 'M4', pcs: 370, rev: '₹1.28L', opex: '₹64K', profit: '₹64K', h: '42%' },
    { m: 'M5', pcs: 400, rev: '₹1.42L', opex: '₹65K', profit: '₹77K', h: '52%' },
    { m: 'M6', pcs: 430, rev: '₹1.55L', opex: '₹66K', profit: '₹89K', h: '58%' },
    { m: 'M7', pcs: 460, rev: '₹1.66L', opex: '₹68K', profit: '₹98K', h: '65%' },
    { m: 'M8', pcs: 500, rev: '₹1.83L', opex: '₹70K', profit: '₹1.13L', h: '75%' },
    { m: 'M9', pcs: 550, rev: '₹2.05L', opex: '₹72K', profit: '₹1.33L', h: '88%' },
    { m: 'M10', pcs: 580, rev: '₹2.3L', opex: '₹74K', profit: '₹1.6L', h: '100%' },
];

export function SlideTwelve() {
    return (
        <div className="slide-container retro-grid">
            <div className="slide-number">12 / 17</div>

            <div className="max-w-5xl mx-auto w-full px-4 sm:px-6">
                <div className="text-center mb-4 md:mb-5">
                    <div className="neo-tag-coral inline-flex mb-3 animate-fade-in">
                        <span>The Trajectory</span>
                    </div>
                    <h2 className="font-display text-xl sm:text-3xl md:text-4xl text-[#1A1A1A] animate-slide-up">
                        Month 1 profitable. <span className="text-[#FF3366]">Month 10 at ₹1.6L.</span>
                    </h2>
                </div>

                {/* Bar chart */}
                <div className="neo-card-flat p-4 md:p-5 animate-slide-up animate-delay-2 mb-4">
                    <div className="flex items-end gap-1.5 md:gap-3 h-28 md:h-36 mb-3">
                        {MONTHS.map((month, i) => {
                            const isFirst = i === 0;
                            const isLast = i === MONTHS.length - 1;
                            return (
                                <div key={i} className="flex-1 flex flex-col items-center gap-1">
                                    <span className={`font-mono text-[7px] md:text-[9px] font-bold ${isLast ? 'text-[#FF3366]' : isFirst ? 'text-[#4CAF50]' : 'text-[#1A1A1A]'}`}>
                                        {month.profit}
                                    </span>
                                    <div
                                        className={`w-full border-2 border-[#1A1A1A] ${isLast ? 'bg-[#FF3366]' : isFirst ? 'bg-[#A8E6CF]' : 'bg-[#FFD166]'}`}
                                        style={{ height: month.h }}
                                    />
                                    <span className="font-mono text-[7px] md:text-[8px] text-[#8A8A8A]">{month.m}</span>
                                </div>
                            );
                        })}
                    </div>

                    {/* OPEX line note */}
                    <div className="flex items-center gap-2 border-t-2 border-[#1A1A1A] pt-2">
                        <div className="flex-1 h-px bg-[#8A8A8A] border-dashed border-b border-[#8A8A8A]" />
                        <span className="font-mono text-[9px] text-[#8A8A8A]">OPEX stays flat ₹60-74K →</span>
                        <div className="flex-1 h-px bg-[#8A8A8A] border-dashed border-b border-[#8A8A8A]" />
                    </div>
                </div>

                {/* Callouts */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 animate-fade-in animate-delay-5">
                    <div className="neo-card-mint p-3 text-center shadow-[3px_3px_0px_#1A1A1A]">
                        <span className="font-mono text-[9px] text-[#4CAF50] font-bold">✓ PROFITABLE FROM MONTH 1</span>
                        <p className="text-[10px] text-[#4A4A4A] mt-1">200 pcs/day. Rev ₹68K. OPEX ₹60K. Profit Day 1.</p>
                    </div>
                    <div className="neo-card-solid-pink p-3 text-center shadow-[3px_3px_0px_#1A1A1A]">
                        <span className="font-mono text-[9px] text-white font-bold">₹1.6L/MONTH AT MONTH 10</span>
                        <p className="text-[10px] text-white/80 mt-1">580 pcs/day. Every additional piece = pure profit.</p>
                    </div>
                </div>

                <p className="text-center text-[10px] text-[#8A8A8A] mt-3 animate-fade-in animate-delay-7">
                    Fixed costs don&apos;t change from 200 to 600 pieces. Same machine. Same rent. Same van.{' '}
                    <span className="text-[#FF3366] font-bold">Classic operating leverage.</span>
                </p>
            </div>
        </div>
    );
}
