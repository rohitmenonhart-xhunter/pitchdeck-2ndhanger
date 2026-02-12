'use client';

const PAIN_POINTS = [
  {
    title: 'Damage Risk',
    desc: 'Coal irons burn, scorch, and leave marks. One mistake ruins a ₹2,000 shirt. Zero compensation.',
    fill: 'neo-card-peach',
  },
  {
    title: 'Inconvenience',
    desc: 'Carry clothes to the dhobi, wait 1-2 days, go back to collect. No doorstep. No tracking.',
    fill: 'neo-card-yellow',
  },
  {
    title: 'Unreliability',
    desc: 'No fixed timing. No quality guarantee. Different results every time.',
    fill: 'neo-card-mint',
  },
];

export function SlideTwo() {
  return (
    <div className="slide-container retro-grid">
      <div className="slide-number">02 / 19</div>

      <div className="max-w-5xl mx-auto w-full px-4 sm:px-6">
        <div className="text-center mb-3 sm:mb-5 md:mb-6">
          <div className="neo-tag-pink inline-flex mb-2 sm:mb-4 animate-fade-in">
            <span>The Problem</span>
          </div>
          <h2 className="font-display text-xl sm:text-3xl md:text-4xl text-[#1A1A1A] animate-slide-up">
            30 Crore Households. <span className="text-[#FF3366]">Same Coal Iron Since 1950.</span>
          </h2>
        </div>

        <p className="text-[11px] sm:text-sm text-[#4A4A4A] text-center max-w-3xl mx-auto mb-4 sm:mb-6 animate-fade-in animate-delay-1 leading-relaxed">
          Every Indian household irons clothes. The solution hasn&apos;t changed in 70 years — a roadside dhobi with a coal iron.
          No quality control, no accountability, and a real risk of damage to your clothes.
        </p>

        {/* Pain points */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 md:gap-4 max-w-4xl mx-auto mb-4 sm:mb-5">
          {PAIN_POINTS.map((item, i) => (
            <div key={i} className={`${item.fill} p-3 sm:p-4 md:p-5 animate-slide-up animate-delay-${i + 2}`}>
              <h3 className="font-display text-sm sm:text-base text-[#1A1A1A] mb-1.5 sm:mb-2 flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-[#FF3366] border border-[#1A1A1A] flex-shrink-0" />
                {item.title}
              </h3>
              <p className="text-[10px] sm:text-[11px] text-[#4A4A4A] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="neo-card-solid-pink p-3 max-w-2xl mx-auto text-center animate-scale-in animate-delay-6 shadow-[4px_4px_0px_#1A1A1A]">
          <p className="text-[10px] sm:text-sm font-bold text-white">
            95%+ of the market remains unorganised. The existing organised players focus on premium laundry —{' '}
            <span className="text-white/70">nobody has solved everyday ironing at scale.</span>
          </p>
        </div>
      </div>
    </div>
  );
}
