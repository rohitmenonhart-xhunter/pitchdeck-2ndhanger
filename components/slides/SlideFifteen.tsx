'use client';

const TEAM = [
    {
        name: 'Rohit',
        role: 'CEO & Co-Founder',
        equity: '50%',
        desc: 'Tech-first founder. Background in lighting design software with 3D visualisation. Product, app oversight, investor relations, financial strategy. The tech backbone that makes hub replication scalable.',
        fill: 'neo-card-peach',
    },
    {
        name: 'Murahari',
        role: 'Operations & Co-Founder',
        equity: '25%',
        desc: 'Daily hub manager. Quality control, sorting, tagging, customer coordination. On the ground every day ensuring the machine runs and customers are happy.',
        fill: 'neo-card-yellow',
    },
    {
        name: 'Vibhav',
        role: 'Marketing & Co-Founder',
        equity: '25%',
        desc: 'Field sales and customer acquisition. Door-to-door apartment outreach, PG partnerships, referral programs. Feet on the street, not ads on a screen.',
        fill: 'neo-card-mint',
    },
];

export function SlideFifteen() {
    return (
        <div className="slide-container retro-grid">
            <div className="slide-number">15 / 19</div>

            <div className="max-w-5xl mx-auto w-full px-4 sm:px-6">
                <div className="text-center mb-3 sm:mb-5 md:mb-6">
                    <div className="neo-tag-yellow inline-flex mb-2 sm:mb-4 animate-fade-in">
                        <span>The Team</span>
                    </div>
                    <h2 className="font-display text-2xl sm:text-4xl md:text-5xl text-[#1A1A1A] animate-slide-up">
                        The Team
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-4xl mx-auto mb-4 sm:mb-5">
                    {TEAM.map((t, i) => (
                        <div key={i} className={`${t.fill} p-4 sm:p-5 animate-slide-up animate-delay-${i + 2}`}>
                            <h3 className="font-display text-base sm:text-lg text-[#1A1A1A] mb-0.5">{t.name}</h3>
                            <span className="font-mono text-[8px] sm:text-[9px] text-[#FF3366] block mb-0.5">{t.role}</span>
                            <span className="font-mono text-[8px] sm:text-[9px] text-[#8A8A8A] block mb-2">{t.equity}</span>
                            <p className="text-[9px] sm:text-[10px] text-[#4A4A4A] leading-relaxed">{t.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Technology Partner */}
                <div className="neo-card-solid-pink p-3 sm:p-4 max-w-xl mx-auto text-center shadow-[4px_4px_0px_#1A1A1A] animate-scale-in animate-delay-6">
                    <span className="font-mono text-[8px] sm:text-[9px] text-white/60 block mb-1">TECHNOLOGY PARTNER</span>
                    <h3 className="font-display text-sm sm:text-base text-white">Hitroo</h3>
                    <p className="text-[9px] sm:text-[10px] text-white/80 mt-1">
                        Kotlin + Express.js app. Order management, route optimisation, customer tracking.
                    </p>
                </div>
            </div>
        </div>
    );
}
