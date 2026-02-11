'use client';

const FORCES = [
    {
        num: '01',
        title: 'Labour economics collapsed',
        desc: 'Skilled ironing worker costs ₹12-15K/month. 40-60% annual attrition. Every labour-dependent model — UClean, Dhobi G, Dhobiman — is drowning in wage inflation. The labour model hit a wall.',
        fill: 'neo-card-peach',
    },
    {
        num: '02',
        title: 'Machine technology arrived',
        desc: 'Industrial steam press: ₹4L. Capacity: 70-80 garments/hour. 560-640 pieces in an 8-hour shift. Was ₹8-10L five years ago. Now affordable enough to build a hub business around.',
        fill: 'neo-card-yellow',
    },
    {
        num: '03',
        title: 'India is trained for hyperlocal',
        desc: 'Zepto, Swiggy Instamart, Dunzo have conditioned consumers to expect doorstep service. The behavioural shift is complete. We\'re riding this wave, not creating it.',
        fill: 'neo-card-mint',
    },
    {
        num: '04',
        title: 'Urbanisation is accelerating',
        desc: '60 crore urban Indians by 2030. More nuclear families, more dual-income households. Demand for outsourced garment care grows while supply (dhobis) shrinks — young people don\'t want to become dhobis.',
        fill: 'neo-card-blue',
    },
];

export function SlideSix() {
    return (
        <div className="slide-container retro-grid">
            <div className="slide-number">06 / 17</div>

            <div className="max-w-5xl mx-auto w-full px-4 sm:px-6">
                <div className="text-center mb-5 md:mb-6">
                    <div className="neo-tag-pink inline-flex mb-4 animate-fade-in">
                        <span>Why Now</span>
                    </div>
                    <h2 className="font-display text-2xl sm:text-4xl md:text-5xl text-[#1A1A1A] animate-slide-up">
                        The <span className="text-[#FF3366]">perfect storm.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 max-w-4xl mx-auto">
                    {FORCES.map((f, i) => (
                        <div key={i} className={`${f.fill} p-4 md:p-5 animate-slide-up animate-delay-${i + 2}`}>
                            <div className="flex items-center gap-2 mb-2">
                                <span className="font-mono text-[9px] font-bold text-[#FF3366] bg-white border border-[#1A1A1A]/10 px-1.5 py-0.5">{f.num}</span>
                                <h3 className="font-display text-sm text-[#1A1A1A]">{f.title}</h3>
                            </div>
                            <p className="text-[10px] md:text-[11px] text-[#4A4A4A] leading-relaxed">{f.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="neo-card-solid-yellow p-3 max-w-3xl mx-auto mt-4 text-center animate-scale-in animate-delay-7 shadow-[4px_4px_0px_#1A1A1A]">
                    <p className="text-sm font-bold text-[#1A1A1A]">
                        These four forces have never converged before. The team that builds garment care infrastructure{' '}
                        <span className="text-[#FF3366]">NOW</span> owns the category for the next 20 years.
                    </p>
                </div>
            </div>
        </div>
    );
}
