import React, { useEffect, useState, useRef } from 'react';
import { Sparkles, Award, Shield, HeartHandshake } from 'lucide-react';
import { STATS_DATA } from '../data/hotelData';
import { IMAGES } from '../assets/images';

export const AboutSection: React.FC = () => {

  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-[#0D0F11] border-b border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Main Story Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C9A96E] font-medium">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Our Heritage & Origin</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#FAF9F5] font-light leading-tight">
              “Designed Around You.”
            </h2>

            <p className="font-sans text-[#C4C0B6] text-base md:text-lg font-light leading-relaxed">
              Aurelia was created around a simple idea: <span className="text-[#FAF9F5] font-medium">luxury is not about excess</span>. It is about time, space and thoughtful details.
            </p>

            <p className="font-sans text-xs sm:text-sm text-[#9E9B93] leading-relaxed font-light">
              Founded on the belief that travel should restore rather than exhaust, our 42 accommodations are nestled inside secluded gardens, shielded from noise yet minutes from Mumbai’s vibrant cultural center. Every guest is welcomed by name, and every stay is tailored with understated elegance.
            </p>

            <div className="pt-4 flex items-center gap-6">
              <div>
                <span className="font-serif text-2xl text-[#FAF9F5] italic block">Arjun & Maya Singhania</span>
                <span className="text-[11px] uppercase tracking-wider text-[#A09D95]">Founders & Managing Curators</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="aspect-[4/3] overflow-hidden border border-white/10 shadow-2xl">
              <img
                src={IMAGES.hero}
                alt="Aurelia Estate Architectural Design"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
          </div>

        </div>

        {/* Animated Statistics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-white/10">
          {STATS_DATA.map((stat, idx) => (
            <div
              key={idx}
              className="p-6 bg-[#14171B] border border-white/5 text-center space-y-2 group hover:border-[#C9A96E]/40 transition-colors"
            >
              <div className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#FAF9F5] font-light group-hover:text-[#C9A96E] transition-colors tabular-nums">
                {stat.value}
                <span className="text-xl sm:text-2xl text-[#C9A96E]">{stat.suffix}</span>
              </div>
              <div className="text-xs uppercase tracking-[0.18em] text-[#A09D95] font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
