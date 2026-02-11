'use client';

const IDENTITY = [
  {
    title: 'Zero-to-one builder.',
    desc: 'Built and shipped lighting design software with 3D visualization, magnetic track systems, and BOM generation — managing 13 feature categories simultaneously. I don\'t plan products. I build them.',
    fill: 'neo-card-peach',
  },
  {
    title: 'Market proof, not market research.',
    desc: 'Walked into an apartment complex, knocked on 20 doors, got paying customers the same day. No ads. No discounts. Full price. Day 1 revenue.',
    fill: 'neo-card-yellow',
  },
  {
    title: 'Architect + Operator.',
    desc: '8 Express.js microservices, PostgreSQL, Docker-to-Kubernetes scaling path. Also designed the unit economics, hub model, and financial projections. I build the system AND run it.',
    fill: 'neo-card-mint',
  },
  {
    title: 'Infrastructure, not services.',
    desc: 'I don\'t see a laundry business. I see a garment care processing network that scales like Zepto\'s dark stores — one hub at a time, one city at a time, until we own the category.',
    fill: 'neo-card-blue',
  },
];

const COFOUNDERS = [
  { name: 'Murahari', role: 'Co-Founder (25%)', desc: 'Operations & logistics. Every garment reaches every doorstep perfectly, every single day.' },
  { name: 'Vibhav', role: 'Co-Founder (25%)', desc: 'Growth & acquisition. Gets the first 200 households in every hub we open.' },
  { name: 'Hitroo', role: 'Technology Partner', desc: 'Full-stack app: Kotlin + Express.js. Dev cost on us, not on investor capital.' },
];

export function SlideTwo() {
  return (
    <div className="slide-container retro-grid">
      <div className="slide-number">02 / 17</div>

      <div className="max-w-6xl mx-auto w-full px-4 sm:px-6">
        <div className="text-center mb-4 md:mb-5">
          <div className="neo-tag inline-flex mb-3 animate-fade-in">
            <span>The Founder — Why Me</span>
          </div>
          <h2 className="font-display text-xl sm:text-3xl md:text-4xl text-[#1A1A1A] animate-slide-up">
            Rohit <span className="text-[#8A8A8A] text-lg md:text-xl">CEO & Co-Founder</span>
          </h2>
        </div>

        {/* Identity cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 md:gap-3 mb-4">
          {IDENTITY.map((item, i) => (
            <div key={i} className={`${item.fill} p-3 md:p-4 animate-slide-up animate-delay-${i + 1}`}>
              <h3 className="font-display text-sm text-[#1A1A1A] mb-1.5">{item.title}</h3>
              <p className="text-[10px] md:text-[11px] text-[#4A4A4A] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Co-founders */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 animate-fade-in animate-delay-5">
          {COFOUNDERS.map((c, i) => (
            <div key={i} className="neo-card-flat p-3">
              <div className="flex items-center gap-2 mb-1.5">
                <div className="w-7 h-7 bg-[#FF3366] border-2 border-[#1A1A1A] flex items-center justify-center flex-shrink-0">
                  <span className="font-display text-[10px] text-white font-bold">{c.name[0]}</span>
                </div>
                <div>
                  <span className="text-xs font-bold text-[#1A1A1A]">{c.name}</span>
                  <span className="font-mono text-[8px] text-[#8A8A8A] ml-1.5">{c.role}</span>
                </div>
              </div>
              <p className="text-[10px] text-[#4A4A4A]">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
