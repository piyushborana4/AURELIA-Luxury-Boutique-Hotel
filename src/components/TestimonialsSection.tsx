import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/hotelData';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
    }, 6500);

    return () => clearInterval(interval);
  }, [isPaused]);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };

  const current = TESTIMONIALS_DATA[currentIndex];

  return (
    <section className="py-24 md:py-32 bg-[#121519] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
        
        {/* Header */}
        <div className="space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C9A96E] font-medium">
            <span className="w-6 h-[1px] bg-[#C9A96E]" />
            <span>Verified Guest Reflections</span>
            <span className="w-6 h-[1px] bg-[#C9A96E]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#FAF9F5] font-light tracking-tight">
            “Words From Our Guests.”
          </h2>
        </div>

        {/* Carousel Container */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="relative bg-[#171B21] border border-white/10 p-8 sm:p-14 shadow-2xl transition-all duration-500"
        >
          {/* Subtle Quote Icon */}
          <div className="flex justify-center mb-6">
            <Quote className="w-8 h-8 text-[#C9A96E]/40" />
          </div>

          {/* Star Rating */}
          <div className="flex items-center justify-center gap-1.5 mb-8">
            {[...Array(current.rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-[#C9A96E] text-[#C9A96E]" />
            ))}
          </div>

          {/* Quote Text */}
          <blockquote className="font-serif text-xl sm:text-2xl md:text-3xl text-[#FAF9F5] font-light leading-relaxed mb-8 max-w-3xl mx-auto italic">
            “{current.text}”
          </blockquote>

          {/* Author Details */}
          <div className="space-y-1">
            <div className="font-serif text-lg text-[#C9A96E] font-medium">
              — {current.author}
            </div>
            <div className="text-xs text-[#A09D95] font-light flex items-center justify-center gap-2">
              <span>{current.location}</span>
              <span>·</span>
              <span className="text-[#C4C0B6]">{current.stayDate}</span>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between mt-10 pt-6 border-t border-white/10">
            <button
              onClick={prevReview}
              className="p-2.5 text-[#FAF9F5] hover:text-[#0D0F11] hover:bg-[#C9A96E] border border-white/10 transition-colors cursor-pointer"
              aria-label="Previous Review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Pagination Indicators */}
            <div className="flex items-center gap-2">
              {TESTIMONIALS_DATA.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-1.5 transition-all duration-300 cursor-pointer ${
                    currentIndex === idx ? 'w-8 bg-[#C9A96E]' : 'w-2 bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Go to review ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextReview}
              className="p-2.5 text-[#FAF9F5] hover:text-[#0D0F11] hover:bg-[#C9A96E] border border-white/10 transition-colors cursor-pointer"
              aria-label="Next Review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
