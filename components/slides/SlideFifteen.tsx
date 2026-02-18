'use client';

const TEAM = [
    {
        name: 'Rohit',
        role: 'CEO & CTO',
        equity: '50%',
        desc: 'Strategy, technology, finance. Builds all three apps through Hitroo (own development studio). Built the financial model. Runs the investor process.',
        fill: 'neo-card-peach',
    },
    {
        name: 'Murahari',
        role: 'Operations',
        equity: '25%',
        desc: 'At the hub every day. Quality control, operator management, rider coordination. At the machine factory today verifying specs.',
        fill: 'neo-card-yellow',
    },
    {
        name: 'Vibhav',
        role: 'Growth',
        equity: '25%',
        desc: 'Door-to-door customer acquisition. 60+ families already visited. Society demos, RWA relationships, rider recruitment.',
        fill: 'neo-card-mint',
    },
];

export function SlideFifteen() {
    return (
        <div className="slide-container retro-grid">
            <div className="slide-number">15 / 18</div>

            <div className="max-w-5xl mx-auto w-full px-4 sm:px-6">
                <div className="text-center mb-3 sm:mb-5 md:mb-6">
                    <div className="neo-tag-yellow inline-flex mb-2 sm:mb-4 animate-fade-in">
                        <span>The Team</span>
                    </div>
                    <h2 className="font-display text-xl sm:text-3xl md:text-4xl text-[#1A1A1A] animate-slide-up">
                        Three Co-Founders. Full-Time. <span className="text-[#FF3366]">No Overlap.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-4xl mx-auto mb-4 sm:mb-5">
                    {TEAM.map((t, i) => (
                        <div key={i} className={`${t.fill} p-4 sm:p-5 animate-slide-up animate-delay-${i + 2}`}>
                            <h3 className="font-display text-base sm:text-lg text-[#1A1A1A] mb-0.5">{t.name}</h3>
                            <span className="font-mono text-[8px] sm:text-[9px] text-[#FF3366] block">{t.role}</span>
                            <span className="font-mono text-[8px] sm:text-[9px] text-[#8A8A8A] block mt-0.5 mb-2">{t.equity}</span>
                            <p className="text-[9px] sm:text-[10px] text-[#4A4A4A] leading-relaxed">{t.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="neo-card-solid-pink p-2.5 sm:p-3 max-w-md mx-auto text-center shadow-[3px_3px_0px_#1A1A1A] animate-scale-in animate-delay-6">
                    <p className="text-[10px] sm:text-xs font-bold text-white">
                        ₹20K + ₹15K + ₹15K = ₹50K total salaries.
                    </p>
                    <p className="text-[9px] sm:text-[10px] text-white/70 mt-0.5">
                        We&apos;re not here for salaries.
                    </p>
                </div>
            </div>
        </div>
    );
}
