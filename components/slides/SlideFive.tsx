'use client';

const CATEGORIES = [
    { category: 'Groceries', players: 'BigBasket → Zepto', tam: '₹7L Cr', fill: '#A8E6CF', solved: true },
    { category: 'Food', players: 'Zomato, Swiggy', tam: '₹5L Cr', fill: '#FFD166', solved: true },
    { category: 'Pharmacy', players: 'PharmEasy, 1mg', tam: '₹2.5L Cr', fill: '#7EC8E3', solved: true },
    { category: 'Meat', players: 'Licious, FreshToHome', tam: '₹3L Cr', fill: '#c4b8e8', solved: true },
    { category: 'Beauty', players: 'Nykaa, Purplle', tam: '₹1.5L Cr', fill: '#FFAD9E', solved: true },
    { category: 'Garment Care', players: '???', tam: '₹2.1L Cr', fill: '#FF3366', solved: false },
];

export function SlideFive() {
    return (
        <div className="slide-container retro-grid">
            <div className="slide-number">05 / 17</div>

            <div className="max-w-5xl mx-auto w-full px-4 sm:px-6">
                <div className="text-center mb-5 md:mb-6">
                    <div className="neo-tag-coral inline-flex mb-4 animate-fade-in">
                        <span>The Category Map</span>
                    </div>
                    <h2 className="font-display text-xl sm:text-3xl md:text-4xl text-[#1A1A1A] animate-slide-up">
                        Every daily need got its Zepto moment.{' '}
                        <span className="text-[#FF3366]">Except one.</span>
                    </h2>
                </div>

                <div className="space-y-2.5 max-w-3xl mx-auto">
                    {CATEGORIES.map((cat, i) => {
                        const isTarget = !cat.solved;
                        return (
                            <div
                                key={i}
                                className={`flex items-center gap-3 md:gap-4 p-3 md:p-4 animate-slide-up animate-delay-${i + 1} ${isTarget
                                    ? 'neo-card-solid-pink shadow-[5px_5px_0px_#1A1A1A]'
                                    : 'neo-card-flat'
                                    }`}
                            >
                                <div className="w-3 h-3 border-2 border-[#1A1A1A] flex-shrink-0" style={{ background: isTarget ? '#fff' : cat.fill }} />
                                <span className={`font-display text-sm md:text-base min-w-[6rem] ${isTarget ? 'text-white font-bold' : 'text-[#1A1A1A]'}`}>
                                    {cat.category}
                                </span>
                                <div className="flex-1 flex items-center">
                                    <div className={`h-px flex-1 ${isTarget ? 'bg-white/30' : 'bg-[#E0DCD4]'}`} />
                                    <span className={`font-mono text-[10px] px-2 ${isTarget ? 'text-white/80' : 'text-[#8A8A8A]'}`}>
                                        {cat.players}
                                    </span>
                                    <div className={`h-px flex-1 ${isTarget ? 'bg-white/30' : 'bg-[#E0DCD4]'}`} />
                                </div>
                                <span className={`font-mono text-xs md:text-sm font-bold min-w-[5rem] text-right ${isTarget ? 'text-white' : 'text-[#1A1A1A]'}`}>
                                    {cat.tam}
                                </span>
                                {isTarget && (
                                    <span className="neo-tag text-[7px] bg-white text-[#FF3366] font-bold">ZERO PLAYERS</span>
                                )}
                            </div>
                        );
                    })}
                </div>

                <p className="text-center text-sm text-[#8A8A8A] mt-5 animate-fade-in animate-delay-8">
                    Bigger than pharmacy. Bigger than meat. Bigger than beauty.{' '}
                    <span className="text-[#FF3366] font-bold">Completely unorganized. The window is open right now.</span>
                </p>
            </div>
        </div>
    );
}
