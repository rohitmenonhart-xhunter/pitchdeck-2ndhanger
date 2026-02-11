'use client';

import { useState, useEffect, useCallback } from 'react';
import { SlideOne } from '@/components/slides/SlideOne';
import { SlideTwo } from '@/components/slides/SlideTwo';
import { SlideThree } from '@/components/slides/SlideThree';
import { SlideFour } from '@/components/slides/SlideFour';
import { SlideFive } from '@/components/slides/SlideFive';
import { SlideSix } from '@/components/slides/SlideSix';
import { SlideSeven } from '@/components/slides/SlideSeven';
import { SlideEight } from '@/components/slides/SlideEight';
import { SlideNine } from '@/components/slides/SlideNine';
import { SlideTen } from '@/components/slides/SlideTen';
import { SlideEleven } from '@/components/slides/SlideEleven';
import { SlideTwelve } from '@/components/slides/SlideTwelve';
import { SlideThirteen } from '@/components/slides/SlideThirteen';
import { SlideFourteen } from '@/components/slides/SlideFourteen';
import { SlideFifteen } from '@/components/slides/SlideFifteen';
import { SlideSixteen } from '@/components/slides/SlideSixteen';
import { SlideSeventeen } from '@/components/slides/SlideSeventeen';
import { SlideNavigation } from '@/components/deck/SlideNavigation';
import { GrainOverlay } from '@/components/deck/GrainOverlay';

const SLIDES = [
  SlideOne, SlideTwo, SlideThree, SlideFour, SlideFive,
  SlideSix, SlideSeven, SlideEight, SlideNine, SlideTen,
  SlideEleven, SlideTwelve, SlideThirteen, SlideFourteen,
  SlideFifteen, SlideSixteen, SlideSeventeen,
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const totalSlides = SLIDES.length;

  const goToSlide = useCallback((index: number) => {
    if (isAnimating || index === currentSlide) return;
    if (index >= 0 && index < totalSlides) {
      setIsAnimating(true);
      setCurrentSlide(index);
      setTimeout(() => setIsAnimating(false), 700);
    }
  }, [isAnimating, currentSlide, totalSlides]);

  const nextSlide = useCallback(() => {
    goToSlide(currentSlide + 1);
  }, [currentSlide, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide(currentSlide - 1);
  }, [currentSlide, goToSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  // Touch/swipe navigation
  useEffect(() => {
    let touchStartX = 0;
    let touchStartY = 0;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const touchEndX = e.changedTouches[0].clientX;
      const touchEndY = e.changedTouches[0].clientY;
      const diffX = touchStartX - touchEndX;
      const diffY = touchStartY - touchEndY;

      if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
        if (diffX > 0) nextSlide();
        else prevSlide();
      }
    };

    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });
    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [nextSlide, prevSlide]);

  // Wheel navigation (throttled)
  useEffect(() => {
    let lastWheel = 0;
    const handleWheel = (e: WheelEvent) => {
      const now = Date.now();
      if (now - lastWheel < 800) return;
      if (Math.abs(e.deltaY) > 30) {
        lastWheel = now;
        if (e.deltaY > 0) nextSlide();
        else prevSlide();
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [nextSlide, prevSlide]);

  return (
    <main className="relative w-full h-screen overflow-hidden bg-[#FAF7F2]">
      <GrainOverlay />

      <div className="relative z-10 w-full h-full">
        <div
          className="flex w-full h-full transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {SLIDES.map((SlideComponent, index) => (
            <div key={index} className="min-w-full h-full">
              <SlideComponent />
            </div>
          ))}
        </div>
      </div>

      <SlideNavigation
        currentSlide={currentSlide}
        totalSlides={totalSlides}
        onNext={nextSlide}
        onPrev={prevSlide}
        onGoTo={goToSlide}
      />
    </main>
  );
}
