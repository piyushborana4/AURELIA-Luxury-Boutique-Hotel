import React from 'react';
import { ArrowDown, ArrowRight, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
  onExplore: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onExplore }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Container with Slow Zoom */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_aurelia_resort_1790869743175.jpg"
          alt="Aurelia Luxury Boutique Hotel at Golden Hour"
          className="w-full h-full object-cover object-center scale-105 animate-fade-in duration-1000"
          style={{ animation: 'pulse-slow 20s ease-in-out infinite alternate' }}
          referrerPolicy="no-referrer"
        />
        {/* Measured dark scrim for 4.5:1 text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0F11] via-[#0D0F11]/55 to-[#0D0F11]/40" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 text-center pt-28 pb-32 flex flex-col items-center">
        {/* Editorial Kicker */}
        <div className="inline-flex items-center gap-2 mb-6 px-3.5 py-1 bg-white/10 backdrop-blur-md border border-white/15 text-[#E8E4DC]">
          <Sparkles className="w-3 h-3 text-[#C9A96E]" />
          <span className="text-[11px] uppercase tracking-[0.3em] font-medium text-[#F7F4EE]">
            A Boutique Escape
          </span>
        </div>

        {/* Marquee Title */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-[#FAF9F5] leading-[1.08] tracking-tight mb-8 max-w-4xl text-balance">
          Where Every Stay <br className="hidden sm:inline" />
          <span className="italic font-normal text-[#C9A96E]">Becomes a Story.</span>
        </h1>

        {/* Subtitle Prose */}
        <p className="font-sans text-base sm:text-lg md:text-xl text-[#D8D4C8] font-light max-w-2xl leading-relaxed mb-12 text-balance">
          An intimate luxury retreat designed for slow mornings, unforgettable evenings and everything in between.
        </p>

        {/* Dual Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto">
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-8 py-4 text-xs uppercase tracking-[0.22em] font-semibold text-[#0D0F11] bg-[#C9A96E] hover:bg-[#D9B97E] transition-all duration-300 shadow-xl shadow-black/40 flex items-center justify-center gap-3 cursor-pointer"
          >
            <span>Book Your Stay</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={onExplore}
            className="w-full sm:w-auto px-8 py-4 text-xs uppercase tracking-[0.22em] font-medium text-[#FAF9F5] bg-white/5 hover:bg-white/15 backdrop-blur-md border border-white/20 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Explore Aurelia</span>
          </button>
        </div>
      </div>

      {/* Scroll to Explore Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-2 text-[#D8D4C8]/80 hover:text-[#C9A96E] transition-colors cursor-pointer" onClick={onExplore}>
        <span className="text-[10px] uppercase tracking-[0.3em] font-medium">Scroll To Explore</span>
        <ArrowDown className="w-4 h-4 animate-bounce text-[#C9A96E]" />
      </div>
    </section>
  );
};
