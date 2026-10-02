import React from 'react';
import { Sparkles, Gift, Check, ArrowRight } from 'lucide-react';

interface SpecialOffersSectionProps {
  onClaimOffer: () => void;
}

export const SpecialOffersSection: React.FC<SpecialOffersSectionProps> = ({ onClaimOffer }) => {
  return (
    <section className="py-24 bg-[#0D0F11] border-b border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="relative bg-gradient-to-br from-[#1A1E26] via-[#14171B] to-[#0D0F11] border border-[#C9A96E]/30 p-8 sm:p-14 md:p-16 shadow-2xl">
          
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#C9A96E]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C9A96E] font-medium">
                <Gift className="w-4 h-4" />
                <span>Limited Curated Package</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#FAF9F5] font-light leading-tight">
                “Stay Longer. <span className="italic text-[#C9A96E]">Experience More.”</span>
              </h2>

              <div className="space-y-2">
                <span className="font-serif text-2xl text-[#FAF9F5] block">THE LONG WEEKEND RETREAT</span>
                <p className="font-sans text-xs sm:text-sm text-[#C4C0B6] font-light leading-relaxed">
                  Reserve three consecutive nights or more and enjoy an elevated boutique experience with our compliments:
                </p>
              </div>

              {/* Offer Inclusions */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2.5 text-xs text-[#E8E4DC]">
                  <Check className="w-4 h-4 text-[#C9A96E]" />
                  <span>Daily artisanal breakfast at Ember</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-[#E8E4DC]">
                  <Check className="w-4 h-4 text-[#C9A96E]" />
                  <span>Complimentary 60-min signature spa ritual</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-[#E8E4DC]">
                  <Check className="w-4 h-4 text-[#C9A96E]" />
                  <span>Round-trip private luxury airport transfer</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-[#E8E4DC]">
                  <Check className="w-4 h-4 text-[#C9A96E]" />
                  <span>Guaranteed late check-out until 16:00</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center space-y-4">
              <div className="text-left lg:text-right">
                <span className="text-[11px] uppercase tracking-wider text-[#A09D95] block">Special Package Value</span>
                <span className="font-serif text-3xl text-[#FAF9F5]">Complimentary Upgrades</span>
                <span className="text-xs text-[#C9A96E] block mt-1">Code: LONGWEEKEND26</span>
              </div>

              <button
                onClick={onClaimOffer}
                className="w-full sm:w-auto px-8 py-4 text-xs uppercase tracking-[0.2em] font-semibold text-[#0D0F11] bg-[#C9A96E] hover:bg-[#D9B97E] transition-all duration-300 shadow-xl flex items-center justify-center gap-2 cursor-pointer active:scale-95"
              >
                <span>Reserve Package</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
