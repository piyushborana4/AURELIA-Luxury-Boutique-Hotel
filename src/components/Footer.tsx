import React from 'react';
import { ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0A0C0E] text-[#D8D4C8] border-t border-white/10 pt-20 pb-12 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <span className="font-serif text-3xl md:text-4xl tracking-[0.25em] text-[#FAF9F5] block">
              AURELIA
            </span>
            <p className="font-serif italic text-[#C9A96E] text-base">
              “Where Every Stay Becomes a Story.”
            </p>
            <p className="font-sans text-xs text-[#8E8B83] max-w-sm leading-relaxed font-light">
              An intimate luxury retreat uniting timeless architecture, pristine botanical gardens, and discreet personal hospitality.
            </p>

            {/* Social Channels */}
            <div className="pt-2 flex items-center gap-4 text-xs text-[#A09D95]">
              <a href="#" className="hover:text-[#C9A96E] transition-colors">Instagram</a>
              <span>·</span>
              <a href="#" className="hover:text-[#C9A96E] transition-colors">Facebook</a>
              <span>·</span>
              <a href="#" className="hover:text-[#C9A96E] transition-colors">YouTube</a>
              <span>·</span>
              <a href="#" className="hover:text-[#C9A96E] transition-colors">Pinterest</a>
            </div>
          </div>

          {/* Explore Column */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#C9A96E] font-semibold block mb-4">
              Explore
            </span>
            <ul className="space-y-2.5 text-xs text-[#A09D95]">
              <li><a href="#rooms" className="hover:text-[#FAF9F5] transition-colors">Rooms & Suites</a></li>
              <li><a href="#experiences" className="hover:text-[#FAF9F5] transition-colors">Curated Experiences</a></li>
              <li><a href="#dining" className="hover:text-[#FAF9F5] transition-colors">Ember Dining & Hearth</a></li>
              <li><a href="#wellness" className="hover:text-[#FAF9F5] transition-colors">Wellness Sanctuary & Spa</a></li>
              <li><a href="#gallery" className="hover:text-[#FAF9F5] transition-colors">Estate Gallery</a></li>
            </ul>
          </div>

          {/* Hotel Column */}
          <div className="lg:col-span-2 space-y-3">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#C9A96E] font-semibold block mb-4">
              Hotel
            </span>
            <ul className="space-y-2.5 text-xs text-[#A09D95]">
              <li><a href="#about" className="hover:text-[#FAF9F5] transition-colors">About Aurelia</a></li>
              <li><a href="#location" className="hover:text-[#FAF9F5] transition-colors">Location & Access</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); onOpenBooking(); }} className="hover:text-[#FAF9F5] transition-colors">Private Reservations</a></li>
              <li><a href="#" className="hover:text-[#FAF9F5] transition-colors">Press & Awards</a></li>
              <li><a href="#" className="hover:text-[#FAF9F5] transition-colors">Privacy & Terms</a></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#C9A96E] font-semibold block mb-4">
              Contact & Inquiries
            </span>
            <div className="space-y-2 text-xs text-[#A09D95]">
              <p className="text-[#FAF9F5]">12 Garden Avenue, Off Seaface Road</p>
              <p>Mumbai, Maharashtra 400050</p>
              <p className="pt-2">
                <a href="tel:+919876543210" className="text-[#C9A96E] hover:underline">
                  +91 98765 43210
                </a>
              </p>
              <p>
                <a href="mailto:stay@aureliahotel.com" className="hover:text-[#FAF9F5]">
                  stay@aureliahotel.com
                </a>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#6C727F] gap-4">
          <div>
            © 2026 Aurelia Boutique Hotel. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs text-[#A09D95] hover:text-[#C9A96E] transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
