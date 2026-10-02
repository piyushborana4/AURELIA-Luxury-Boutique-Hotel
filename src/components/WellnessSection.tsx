import React from 'react';
import { Sparkles, Droplets, Sun, Wind, Heart, ArrowRight } from 'lucide-react';

interface WellnessSectionProps {
  onBookSpa: () => void;
}

export const WellnessSection: React.FC<WellnessSectionProps> = ({ onBookSpa }) => {
  const pillars = [
    {
      icon: Droplets,
      title: 'Hydrotherapy & Infinity Plunge',
      desc: 'Temperature controlled natural stone thermal pools surrounded by steam vapors.',
    },
    {
      icon: Sun,
      title: 'Botanical Aromatherapy',
      desc: 'Bespoke cold-pressed oils infused with local vetiver, sandalwood and wild jasmine.',
    },
    {
      icon: Wind,
      title: 'Cedarwood Herbal Sauna',
      desc: 'Dry heat Finnish sauna crafted with sustainable Nordic cedar and mineral rock infusions.',
    },
    {
      icon: Heart,
      title: 'Sound Healing Sanctuary',
      desc: 'Tibetan singing bowls and binaural frequency baths for profound nervous system recovery.',
    },
  ];

  return (
    <section id="wellness" className="py-24 md:py-32 bg-[#121519] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image with Zen framing */}
          <div className="lg:col-span-6 relative order-2 lg:order-1 group">
            <div className="aspect-[4/3] overflow-hidden border border-white/10 shadow-2xl">
              <img
                src="/src/assets/images/wellness_spa_pool_1790869781996.jpg"
                alt="Aurelia Wellness Spa and Infinity Plunge Pool"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>

            <div className="absolute top-6 left-6 p-4 bg-[#0D0F11]/85 backdrop-blur-md border border-white/10 max-w-[200px]">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#C9A96E] font-semibold block mb-1">
                Sanctuary Hours
              </span>
              <p className="font-mono text-xs text-[#FAF9F5]">06:00 AM – 10:00 PM</p>
            </div>
          </div>

          {/* Right Column: Editorial Wellness Prose */}
          <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C9A96E] font-medium">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Restoration & Stillness</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#FAF9F5] font-light leading-tight">
              “Make Time for <br />
              <span className="italic text-[#C9A96E]">Yourself.”</span>
            </h2>

            <p className="font-sans text-[#C4C0B6] text-base font-light leading-relaxed">
              Our wellness experiences are designed to help you slow down, breathe deeper and leave feeling renewed. Drawing from ancient Ayurvedic traditions and modern restorative therapies.
            </p>

            {/* Wellness Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-white/10">
              {pillars.map((pillar, idx) => {
                const IconComponent = pillar.icon;
                return (
                  <div key={idx} className="space-y-1.5">
                    <div className="flex items-center gap-2 text-[#FAF9F5]">
                      <IconComponent className="w-4 h-4 text-[#C9A96E]" />
                      <h4 className="font-serif text-base">{pillar.title}</h4>
                    </div>
                    <p className="text-xs text-[#9E9B93] leading-relaxed font-light">
                      {pillar.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="pt-4 flex items-center gap-4">
              <button
                onClick={onBookSpa}
                className="px-6 py-3.5 text-xs uppercase tracking-[0.2em] font-semibold text-[#0D0F11] bg-[#C9A96E] hover:bg-[#D9B97E] transition-colors flex items-center gap-2 cursor-pointer"
              >
                <span>Book Spa Treatment</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
