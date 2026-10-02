import React, { useState } from 'react';
import { MapPin, Phone, Mail, Navigation, Car, Plane, Compass, Check } from 'lucide-react';

export const LocationSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyAddress = () => {
    navigator.clipboard.writeText('Aurelia Boutique Hotel, 12 Garden Avenue, Mumbai, Maharashtra 400050, India');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const openGoogleMaps = () => {
    window.open('https://maps.google.com/?q=Mumbai+Boutique+Hotel+Garden+Avenue', '_blank');
  };

  return (
    <section className="py-24 md:py-32 bg-[#121519] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Address & Connectivity */}
          <div className="lg:col-span-6 space-y-8">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C9A96E] font-medium">
              <Compass className="w-3.5 h-3.5" />
              <span>Location & Arrival</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#FAF9F5] font-light leading-tight">
              “Find Your Way <br />
              <span className="italic text-[#C9A96E]">to Aurelia.”</span>
            </h2>

            <div className="space-y-4 text-xs sm:text-sm text-[#D8D4C8] font-light">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#C9A96E] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#FAF9F5] font-medium block text-base font-serif">Aurelia Boutique Hotel</strong>
                  <span>12 Garden Avenue, Off Seaface Road</span><br />
                  <span>Mumbai, Maharashtra 400050, India</span>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <Phone className="w-4 h-4 text-[#C9A96E] shrink-0" />
                <a href="tel:+919876543210" className="hover:text-[#C9A96E] transition-colors">
                  +91 98765 43210
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#C9A96E] shrink-0" />
                <a href="mailto:stay@aureliahotel.com" className="hover:text-[#C9A96E] transition-colors">
                  stay@aureliahotel.com
                </a>
              </div>
            </div>

            {/* Travel Distances */}
            <div className="grid grid-cols-2 gap-4 py-4 border-t border-white/10 text-xs text-[#A09D95]">
              <div className="flex items-center gap-2">
                <Plane className="w-4 h-4 text-[#C9A96E]" />
                <div>
                  <span className="text-[#FAF9F5] block font-medium">CSM International Airport</span>
                  <span>25 mins (14 km)</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Car className="w-4 h-4 text-[#C9A96E]" />
                <div>
                  <span className="text-[#FAF9F5] block font-medium">Financial & Art District</span>
                  <span>15 mins (8 km)</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={openGoogleMaps}
                className="px-6 py-3.5 text-xs uppercase tracking-[0.2em] font-semibold text-[#0D0F11] bg-[#C9A96E] hover:bg-[#D9B97E] transition-colors flex items-center gap-2 cursor-pointer"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Get Directions</span>
              </button>

              <button
                onClick={copyAddress}
                className="px-6 py-3.5 text-xs uppercase tracking-[0.2em] font-medium text-[#FAF9F5] border border-white/20 hover:border-[#C9A96E] transition-colors flex items-center gap-2 cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Address Copied</span>
                  </>
                ) : (
                  <span>Copy Address</span>
                )}
              </button>
            </div>
          </div>

          {/* Right Column: Stylized Minimalist Map Visual */}
          <div className="lg:col-span-6 relative">
            <div className="bg-[#171B21] border border-white/10 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
              
              {/* Map Canvas Graphic */}
              <div className="relative aspect-square sm:aspect-[4/3] bg-[#0E1114] border border-white/10 flex items-center justify-center overflow-hidden">
                {/* Stylized grid lines */}
                <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#C9A96E_1px,transparent_1px),linear-gradient(to_bottom,#C9A96E_1px,transparent_1px)] bg-[size:40px_40px]" />
                
                {/* Coastal line vector simulation */}
                <svg className="absolute inset-0 w-full h-full stroke-[#C9A96E]/30 fill-none" viewBox="0 0 400 300">
                  <path d="M 50 300 Q 120 180 200 150 T 350 0" strokeWidth="2" />
                  <path d="M 150 300 Q 220 200 280 160 T 400 50" strokeWidth="1" strokeDasharray="4 4" />
                </svg>

                {/* Pin Point */}
                <div className="relative z-10 flex flex-col items-center animate-bounce">
                  <div className="w-10 h-10 rounded-full bg-[#C9A96E] flex items-center justify-center text-[#0D0F11] shadow-xl shadow-[#C9A96E]/30">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="mt-2 px-3 py-1 bg-[#0D0F11] border border-[#C9A96E]/50 text-[#FAF9F5] text-[11px] font-serif">
                    AURELIA ESTATE
                  </div>
                </div>

                {/* Surrounding Landmark Markers */}
                <div className="absolute top-8 left-8 text-[10px] text-[#A09D95] font-mono">
                  Arabian Sea · West Shore
                </div>
                <div className="absolute bottom-8 right-8 text-[10px] text-[#A09D95] font-mono">
                  Garden Ave · 18°58'N 72°49'E
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between text-xs text-[#A09D95]">
                <span>Valet parking available at estate main gate.</span>
                <span className="text-[#C9A96E]">Private Heliport Access</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
