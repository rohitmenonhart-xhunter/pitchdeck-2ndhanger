'use client';

import { useState, useEffect } from 'react';

/**
 * Liquid glass overlay that appears on small screens (<768px).
 * Shows a frosted blur over the slide with a "Continue Anyway" button.
 * Once dismissed, it stays dismissed for the session.
 */
export function MobileOverlay() {
    const [dismissed, setDismissed] = useState(false);
    const [isSmall, setIsSmall] = useState(false);

    useEffect(() => {
        const check = () => setIsSmall(window.innerWidth < 768);
        check();
        window.addEventListener('resize', check);
        return () => window.removeEventListener('resize', check);
    }, []);

    if (dismissed || !isSmall) return null;

    return (
        <div className="liquid-glass-overlay animate-fade-in">
            <div className="glass-card">
                {/* Distortion rings */}
                <div className="absolute -top-12 -left-12 w-32 h-32 rounded-full opacity-20" style={{ background: 'radial-gradient(circle, #FF3366 0%, transparent 70%)' }} />
                <div className="absolute -bottom-8 -right-8 w-24 h-24 rounded-full opacity-15" style={{ background: 'radial-gradient(circle, #7EC8E3 0%, transparent 70%)' }} />

                {/* Icon */}
                <div className="mb-4">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mx-auto">
                        <rect x="2" y="3" width="20" height="14" rx="2" />
                        <path d="M8 21h8" />
                        <path d="M12 17v4" />
                    </svg>
                </div>

                <p className="font-garamond text-lg text-white/90 mb-2 leading-snug">
                    This slide is best experienced on a larger screen
                </p>
                <p className="font-mono text-[9px] text-white/40 tracking-wider mb-5">
                    OPTIMISED FOR DESKTOP & TABLET
                </p>

                <button
                    onClick={() => setDismissed(true)}
                    className="glass-btn"
                >
                    Continue Anyway →
                </button>
            </div>
        </div>
    );
}
