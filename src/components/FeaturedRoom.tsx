import React from 'react';
import { ArrowRight, Check, Sparkles, Coffee, Bath, Wind } from 'lucide-react';
import { ROOMS_DATA, Room } from '../data/hotelData';

interface FeaturedRoomProps {
  onDiscover: (room: Room) => void;
  onBook: (room: Room) => void;
}

export const FeaturedRoom: React.FC<FeaturedRoomProps> = ({ onDiscover, onBook }) => {
  const signatureRoom = ROOMS_DATA.find((r) => r.id === 'signature-suite') || ROOMS_DATA[1];

  return (
    <section className="py-24 md:py-32 bg-[#0D0F11] border-t border-b border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image with Cinematic Framing */}
          <div className="lg:col-span-7 relative group">
            <div className="relative aspect-[16/10] overflow-hidden border border-white/10 shadow-2xl">
              <img
                src={signatureRoom.image}
                alt="The Signature Suite at Aurelia"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
            
            {/* Floating Highlight Badge */}
            <div className="absolute -bottom-6 -right-4 sm:right-6 bg-[#171B21] border border-[#C9A96E]/40 p-5 shadow-2xl max-w-[240px]">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#C9A96E] font-semibold block mb-1">
                Guest Favorite
              </span>
              <p className="font-serif text-base text-[#FAF9F5] leading-snug">
                Private teak terrace with panoramic sunset vista.
              </p>
            </div>
          </div>

          {/* Right Column: Editorial Suite Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C9A96E] font-medium">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Featured Suite Experience</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#FAF9F5] font-light leading-tight">
              The Signature Suite
            </h2>

            <p className="font-serif text-xl italic text-[#C9A96E]">
              “Your private retreat above the city.”
            </p>

            <p className="font-sans text-xs sm:text-sm text-[#C4C0B6] font-light leading-relaxed">
              Curated for those who appreciate expansive space, natural light, and bespoke architectural details. Enjoy a seamless indoor-outdoor transition with your private teak wood terrace.
            </p>

            {/* Key Inclusions List */}
            <div className="space-y-3 py-4 border-y border-white/10">
              <div className="flex items-center gap-3 text-xs text-[#E8E4DC]">
                <div className="w-5 h-5 flex items-center justify-center rounded-full bg-[#C9A96E]/10 text-[#C9A96E]">
                  <Check className="w-3 h-3" />
                </div>
                <span><strong>650 sq ft</strong> of curated living space</span>
              </div>

              <div className="flex items-center gap-3 text-xs text-[#E8E4DC]">
                <div className="w-5 h-5 flex items-center justify-center rounded-full bg-[#C9A96E]/10 text-[#C9A96E]">
                  <Wind className="w-3 h-3" />
                </div>
                <span>Private open-air teak balcony with sunset vista</span>
              </div>

              <div className="flex items-center gap-3 text-xs text-[#E8E4DC]">
                <div className="w-5 h-5 flex items-center justify-center rounded-full bg-[#C9A96E]/10 text-[#C9A96E]">
                  <Bath className="w-3 h-3" />
                </div>
                <span>Freestanding soaking tub & rain shower</span>
              </div>

              <div className="flex items-center gap-3 text-xs text-[#E8E4DC]">
                <div className="w-5 h-5 flex items-center justify-center rounded-full bg-[#C9A96E]/10 text-[#C9A96E]">
                  <Coffee className="w-3 h-3" />
                </div>
                <span>Complimentary artisanal morning breakfast</span>
              </div>
            </div>

            {/* Suite Pricing & Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={() => onBook(signatureRoom)}
                className="w-full sm:w-auto px-6 py-3.5 text-xs uppercase tracking-[0.2em] font-semibold text-[#0D0F11] bg-[#C9A96E] hover:bg-[#D9B97E] transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Reserve Suite</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => onDiscover(signatureRoom)}
                className="w-full sm:w-auto px-6 py-3.5 text-xs uppercase tracking-[0.2em] font-medium text-[#FAF9F5] border border-white/20 hover:border-[#C9A96E] hover:text-[#C9A96E] transition-colors cursor-pointer"
              >
                Discover Suite
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
