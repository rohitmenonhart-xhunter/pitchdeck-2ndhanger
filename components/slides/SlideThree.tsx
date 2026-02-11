'use client';

import { MobileOverlay } from '@/components/deck/MobileOverlay';

export function SlideThree() {
    return (
        <div className="slide-container retro-grid relative">
            <div className="slide-number">03 / 17</div>

            {/* Mobile liquid glass overlay */}
            <MobileOverlay />

            <div className="max-w-4xl mx-auto text-center flex flex-col items-center justify-center px-4 sm:px-6">
                <h2 className="font-display text-2xl sm:text-4xl md:text-6xl lg:text-7xl text-[#1A1A1A] leading-tight animate-slide-up">
                    What does every Indian household do{' '}
                    <span className="font-garamond garamond-underline text-[#FF3366]">every single day?</span>
                </h2>
            </div>
        </div>
    );
}
