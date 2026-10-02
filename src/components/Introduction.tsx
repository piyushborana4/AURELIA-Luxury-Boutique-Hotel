import React from 'react';
import { Compass, Sparkles, Feather, ShieldCheck } from 'lucide-react';

export const Introduction: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-[#0D0F11] border-b border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Editorial Text */}
          <div className="lg:col-span-6 space-y-8">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C9A96E] font-medium">
              <span className="w-6 h-[1px] bg-[#C9A96E]" />
              <span>The Aurelia Experience</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#FAF9F5] font-light leading-[1.12] text-balance">
              “Luxury, without the <span className="italic text-[#C9A96E]">noise.”</span>
            </h2>

            <p className="font-sans text-[#C4C0B6] text-base md:text-lg leading-relaxed font-light text-balance">
              Aurelia is designed for travelers who value quiet mornings, thoughtful details and experiences that feel personal. Every space has been carefully designed to create a sense of calm, comfort and connection.
            </p>

            {/* Editorial Value Pillars */}
            <div className="grid grid-cols-2 gap-6 pt-4 border-t border-white/10">
              <div>
                <div className="text-[#FAF9F5] font-serif text-xl mb-1 flex items-center gap-2">
                  <Feather className="w-4 h-4 text-[#C9A96E]" />
                  <span>Tactile Rest</span>
                </div>
                <p className="text-xs text-[#9E9B93] leading-relaxed">
                  Italian linen, custom acoustic insulation, and tailored botanical sleep elixirs.
                </p>
              </div>

              <div>
                <div className="text-[#FAF9F5] font-serif text-xl mb-1 flex items-center gap-2">
                  <Compass className="w-4 h-4 text-[#C9A96E]" />
                  <span>Curated Stillness</span>
                </div>
                <p className="text-xs text-[#9E9B93] leading-relaxed">
                  Four acres of secluded botanical gardens shielded from the urban tempo.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <div className="text-xs uppercase tracking-[0.2em] text-[#A09D95]">
                Estate Location <span className="text-[#EDE8E1] ml-2">12 Garden Avenue, Mumbai</span>
              </div>
            </div>
          </div>

          {/* Right Column: Asymmetrical Editorial Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative z-10 img-zoom-container border border-white/10 shadow-2xl">
              <img
                src="/src/assets/images/hero_aurelia_resort_1790869743175.jpg"
                alt="Aurelia Estate Courtyard Architecture"
                className="w-full h-[450px] md:h-[540px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              
              {/* Image Overlay Card */}
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#0D0F11]/85 backdrop-blur-md border border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#C9A96E] block font-semibold">Architectural Philosophy</span>
                  <span className="font-serif text-sm text-[#FAF9F5]">Natural stone, teak & reflection pools</span>
                </div>
                <span className="font-mono text-xs text-[#C9A96E]">Est. 2008</span>
              </div>
            </div>

            {/* Subtle background decorative accent */}
            <div className="absolute -top-6 -right-6 w-48 h-48 border border-[#C9A96E]/20 -z-0 hidden sm:block" />
          </div>

        </div>
      </div>
    </section>
  );
};
