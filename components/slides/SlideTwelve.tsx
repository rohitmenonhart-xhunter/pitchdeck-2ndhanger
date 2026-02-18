'use client';

const APPS = [
    {
        name: 'Customer App',
        features: ['Browse services', 'Place order', 'Choose express/regular', 'Live rider tracking', 'Payment', 'Rate service', 'Order history', 'Referral program'],
        fill: 'neo-card-peach',
    },
    {
        name: 'Rider App',
        features: ['Receive dispatch', 'Accept/reject', 'GPS navigation', 'Pickup confirmation', 'Delivery confirmation', 'Earnings dashboard', 'Weekly payout summary'],
        fill: 'neo-card-yellow',
    },
    {
        name: 'Hub Management App',
        features: ['Live order queue', 'Express priority flagging', 'Operator task assignment', 'Rider dispatch', 'Quality check workflow', 'Daily/weekly analytics', 'Revenue tracking'],
        fill: 'neo-card-mint',
    },
];

export function SlideTwelve() {
    return (
        <div className="slide-container retro-grid">
            <div className="slide-number">12 / 18</div>

            <div className="max-w-5xl mx-auto w-full px-4 sm:px-6">
                <div className="text-center mb-3 sm:mb-5">
                    <div className="neo-tag-coral inline-flex mb-2 sm:mb-4 animate-fade-in">
                        <span>Technology</span>
                    </div>
                    <h2 className="font-display text-xl sm:text-3xl md:text-4xl text-[#1A1A1A] animate-slide-up">
                        Three Real-Time Apps. <span className="text-[#FF3366]">All Built In-House.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 max-w-5xl mx-auto mb-3 sm:mb-4">
                    {APPS.map((app, i) => (
                        <div key={i} className={`${app.fill} p-3 sm:p-4 animate-slide-up animate-delay-${i + 2}`}>
                            <h3 className="font-display text-xs sm:text-sm text-[#1A1A1A] mb-2">{app.name}</h3>
                            <div className="space-y-0.5 sm:space-y-1">
                                {app.features.map((f, j) => (
                                    <div key={j} className="flex items-start gap-1.5">
                                        <span className="text-[#FF3366] text-[8px] mt-0.5">→</span>
                                        <span className="text-[8px] sm:text-[9px] text-[#4A4A4A]">{f}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="neo-card-flat p-3 sm:p-4 max-w-3xl mx-auto mb-3 text-center animate-fade-in animate-delay-6">
                    <p className="text-[9px] sm:text-[11px] text-[#4A4A4A] leading-relaxed">
                        Cloud infrastructure: <span className="font-bold text-[#1A1A1A]">₹15,000/month</span> on auto-scaling servers. Handles 10 orders or 500 orders per day. Real-time GPS, push notifications, payment processing, route optimization.
                    </p>
                </div>

                <div className="neo-card-solid-pink p-2.5 sm:p-3 max-w-3xl mx-auto text-center shadow-[3px_3px_0px_#1A1A1A] animate-scale-in animate-delay-7">
                    <p className="text-[9px] sm:text-xs font-bold text-white">
                        Other pre-seed startups spend ₹1-2L/month on external agencies. Our entire tech budget: ₹15K/month.{' '}
                        <span className="text-white/70">The CEO is the developer. 100% of your capital goes to hubs and customers.</span>
                    </p>
                </div>
            </div>
        </div>
    );
}
