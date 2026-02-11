'use client';

export function SlideNine() {
    return (
        <div className="slide-container retro-grid">
            <div className="slide-number">09 / 17</div>

            <div className="max-w-5xl mx-auto w-full text-center px-4 sm:px-6">
                <div className="neo-tag-yellow inline-flex mb-5 animate-fade-in">
                    <span>TAM · SAM · SOM</span>
                </div>

                <h2 className="font-display text-xl sm:text-3xl md:text-4xl text-[#1A1A1A] mb-3 sm:mb-5 animate-slide-up">
                    ₹2.1 Lakh Crore. <span className="text-[#FF3366]">And nobody&apos;s building the infrastructure.</span>
                </h2>

                <div className="max-w-3xl mx-auto space-y-3 mb-5">
                    {/* TAM */}
                    <div className="neo-card-lavender p-4 md:p-5 text-left animate-slide-left animate-delay-2 w-full">
                        <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-3">
                                <span className="neo-tag text-[8px] bg-white">TAM</span>
                                <span className="font-display text-sm text-[#1A1A1A]">India&apos;s Garment Aftercare Economy</span>
                            </div>
                            <span className="stat-number text-2xl md:text-3xl text-[#1A1A1A]">₹2.1L Cr</span>
                        </div>
                        <div className="flex flex-wrap gap-1 mt-2">
                            {[
                                'Household ₹65K Cr', 'Commercial ₹50K Cr', 'Products ₹50K Cr',
                                'Institutional ₹27.5K Cr', 'Rural ₹12K Cr',
                            ].map((s, i) => (
                                <span key={i} className="font-mono text-[8px] px-1.5 py-0.5 bg-white border border-[#1A1A1A]/15 text-[#4A4A4A]">{s}</span>
                            ))}
                        </div>
                        <p className="text-[9px] text-[#8A8A8A] mt-2">We start with ironing. We end up owning the full stack.</p>
                    </div>

                    {/* SAM */}
                    <div className="neo-card-yellow p-4 md:p-5 text-left animate-slide-left animate-delay-4" style={{ width: '75%', margin: '0 auto' }}>
                        <div className="flex items-center justify-between mb-1">
                            <div className="flex items-center gap-3">
                                <span className="neo-tag text-[8px] bg-white">SAM</span>
                                <span className="font-display text-sm text-[#1A1A1A]">Urban T1/T2 — Top 30 Cities</span>
                            </div>
                            <span className="stat-number text-2xl md:text-3xl text-[#1A1A1A]">₹48K Cr</span>
                        </div>
                        <p className="text-[9px] text-[#8A8A8A]">12 Cr households + commercial + institutional. Hub network across 30 cities in 5-7 years.</p>
                    </div>

                    {/* SOM */}
                    <div className="neo-card-solid-pink p-4 md:p-5 text-left animate-slide-left animate-delay-5 shadow-[5px_5px_0px_#1A1A1A]" style={{ width: '50%', margin: '0 auto' }}>
                        <div className="flex items-center justify-between mb-1">
                            <div className="flex items-center gap-3">
                                <span className="neo-tag text-[8px] bg-white text-[#1A1A1A]">SOM</span>
                                <span className="font-display text-sm text-white">5-Year Target</span>
                            </div>
                            <span className="stat-number text-xl md:text-2xl text-white">₹800-1,200 Cr</span>
                        </div>
                        <p className="text-[9px] text-white/80">500+ hubs · 15 cities · &lt;2.5% SAM capture</p>
                    </div>
                </div>

                <div className="neo-card-solid-yellow p-3 max-w-2xl mx-auto animate-scale-in animate-delay-7 shadow-[4px_4px_0px_#1A1A1A]">
                    <p className="text-xs md:text-sm font-bold text-[#1A1A1A]">
                        Even at &lt;2.5% market capture, we&apos;re building a ₹1,000 Cr revenue company.
                        <span className="text-[#FF3366]"> The market isn&apos;t the question. Execution is. And we&apos;ve already started.</span>
                    </p>
                </div>
            </div>
        </div>
    );
}
