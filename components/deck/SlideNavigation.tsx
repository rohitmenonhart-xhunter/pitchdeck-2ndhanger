'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SlideNavigationProps {
  currentSlide: number;
  totalSlides: number;
  onNext: () => void;
  onPrev: () => void;
  onGoTo: (index: number) => void;
}

export function SlideNavigation({
  currentSlide,
  totalSlides,
  onNext,
  onPrev,
  onGoTo,
}: SlideNavigationProps) {
  return (
    <>
      {/* Bottom bar */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 bg-white border-2 border-[#1A1A1A] px-4 py-2">
        <span className="font-mono text-[10px] tracking-widest text-[#1A1A1A] font-bold min-w-[2rem] text-right">
          {String(currentSlide + 1).padStart(2, '0')}
        </span>

        <div className="w-px h-3 bg-[#E0DCD4]" />

        <div className="flex items-center gap-1">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => onGoTo(index)}
              className={`transition-all duration-300 ${currentSlide === index
                  ? 'w-5 h-2 bg-[#FF3366]'
                  : 'w-2 h-2 bg-[#E0DCD4] hover:bg-[#1A1A1A]'
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="w-px h-3 bg-[#E0DCD4]" />

        <span className="font-mono text-[10px] tracking-widest text-[#8A8A8A] min-w-[2rem]">
          {String(totalSlides).padStart(2, '0')}
        </span>
      </div>

      {/* Prev */}
      {currentSlide > 0 && (
        <button
          onClick={onPrev}
          className="fixed left-3 md:left-6 top-1/2 -translate-y-1/2 z-50
            w-10 h-10 md:w-11 md:h-11
            bg-white border-2 border-[#1A1A1A]
            text-[#1A1A1A] hover:bg-[#FF3366] hover:text-white
            transition-all duration-150
            flex items-center justify-center
            hover:translate-x-[-2px] hover:translate-y-[-2px]
            hover:shadow-[3px_3px_0px_#1A1A1A]
            active:translate-x-0 active:translate-y-0 active:shadow-none"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
      )}

      {/* Next */}
      {currentSlide < totalSlides - 1 && (
        <button
          onClick={onNext}
          className="fixed right-3 md:right-6 top-1/2 -translate-y-1/2 z-50
            w-10 h-10 md:w-11 md:h-11
            bg-white border-2 border-[#1A1A1A]
            text-[#1A1A1A] hover:bg-[#FF3366] hover:text-white
            transition-all duration-150
            flex items-center justify-center
            hover:translate-x-[-2px] hover:translate-y-[-2px]
            hover:shadow-[3px_3px_0px_#1A1A1A]
            active:translate-x-0 active:translate-y-0 active:shadow-none"
          aria-label="Next slide"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      )}
    </>
  );
}
