import React from 'react';
import { 
  Waves, 
  Utensils, 
  Sparkles, 
  Wifi, 
  Car, 
  Bell, 
  Coffee, 
  Plane,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

export const AmenitiesSection: React.FC = () => {
  const amenities = [
    {
      icon: Waves,
      title: 'Infinity Pool',
      desc: 'Heated travertine natural stone pool overlooking peaceful green gardens.',
    },
    {
      icon: Utensils,
      title: 'Fine Dining',
      desc: 'Ember open-fire hearth restaurant & cocktail lounge.',
    },
    {
      icon: Sparkles,
      title: 'Wellness & Spa',
      desc: 'Complete hydrotherapy suites, herbal saunas & Ayurvedic body therapies.',
    },
    {
      icon: Wifi,
      title: 'High-Speed Wi-Fi',
      desc: 'Dedicated enterprise gigabit fiber coverage across all suites & gardens.',
    },
    {
      icon: Car,
      title: 'Valet Parking',
      desc: '24/7 complimentary secure private valet with EV charging stations.',
    },
    {
      icon: Bell,
      title: '24/7 Concierge',
      desc: 'Personalized butler assistance, private bookings & itinerary curation.',
    },
    {
      icon: Coffee,
      title: 'Breakfast Included',
      desc: 'Daily artisanal farm-to-table breakfast served in-suite or in the courtyard.',
    },
    {
      icon: Plane,
      title: 'Airport Transfer',
      desc: 'Private luxury sedan airport transfers with direct VIP terminal greeting.',
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-[#0D0F11] border-t border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C9A96E] font-medium">
            <span className="w-6 h-[1px] bg-[#C9A96E]" />
            <span>Curated Hospitality</span>
            <span className="w-6 h-[1px] bg-[#C9A96E]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#FAF9F5] font-light tracking-tight">
            Hotel Amenities
          </h2>
          <p className="font-sans text-[#C4C0B6] text-base font-light leading-relaxed">
            Every convenience thoughtfully tailored to ensure an effortless, uninterrupted stay.
          </p>
        </div>

        {/* 8-Grid Amenities */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {amenities.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 bg-[#14171B] border border-white/10 hover:border-[#C9A96E]/50 transition-all duration-300 group flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-[#1F242C] border border-white/10 text-[#C9A96E] group-hover:bg-[#C9A96E] group-hover:text-[#0D0F11] transition-all duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-xl text-[#FAF9F5] group-hover:text-[#C9A96E] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#9E9B93] leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
