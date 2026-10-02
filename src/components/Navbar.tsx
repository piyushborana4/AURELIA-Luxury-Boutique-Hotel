import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, Phone, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Stay', href: '#rooms' },
    { name: 'Experiences', href: '#experiences' },
    { name: 'Dining', href: '#dining' },
    { name: 'Wellness', href: '#wellness' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'About', href: '#about' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#0D0F11]/90 backdrop-blur-md py-3.5 border-b border-white/10 shadow-lg shadow-black/20'
            : 'bg-gradient-to-b from-black/80 via-black/30 to-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Zone 1: Wordmark */}
          <a
            href="#"
            className="group flex flex-col items-start focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C9A96E]"
            aria-label="Aurelia Boutique Hotel"
          >
            <span className="font-serif text-2xl md:text-3xl tracking-[0.28em] text-[#F7F4EE] font-light group-hover:text-[#C9A96E] transition-colors duration-300">
              AURELIA
            </span>
          </a>

          {/* Zone 2: Navigation Links */}
          <nav
            aria-label="Main Navigation"
            className="hidden lg:flex items-center gap-8 text-xs uppercase tracking-[0.2em] font-medium text-[#D8D4C8]"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="hover-gold-line py-1 hover:text-[#F7F4EE] transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Zone 3: Action Buttons */}
          <div className="flex items-center gap-4">
            <a
              href="tel:+919876543210"
              className="hidden sm:inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-[#D8D4C8]/80 hover:text-[#C9A96E] transition-colors duration-300 pr-2"
              title="Call Concierge"
            >
              <Phone className="w-3.5 h-3.5 text-[#C9A96E]" />
              <span className="hidden xl:inline">+91 98765 43210</span>
            </a>

            <button
              onClick={onOpenBooking}
              className="group relative inline-flex items-center gap-2.5 px-5 py-2.5 text-xs uppercase tracking-[0.18em] font-semibold text-[#0D0F11] bg-[#F7F4EE] hover:bg-[#C9A96E] transition-all duration-300 shadow-sm rounded-none active:scale-[0.98] cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5 transition-transform duration-300 group-hover:scale-110" />
              <span>Book Your Stay</span>
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#F7F4EE] hover:text-[#C9A96E] transition-colors focus:outline-none"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Mobile Navigation Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#0D0F11]/98 backdrop-blur-xl flex flex-col justify-between p-8 pt-28 lg:hidden animate-in fade-in duration-300">
          <div className="flex flex-col space-y-6">
            <span className="text-xs uppercase tracking-[0.3em] text-[#C9A96E]/80 mb-2">Navigation</span>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="font-serif text-3xl text-[#EDE8E1] hover:text-[#C9A96E] transition-colors flex items-center justify-between border-b border-white/5 pb-3"
              >
                <span>{link.name}</span>
                <ArrowUpRight className="w-5 h-5 text-[#C9A96E]/60" />
              </a>
            ))}
          </div>

          <div className="space-y-4 pt-6 border-t border-white/10">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-4 text-center text-xs uppercase tracking-[0.2em] font-semibold text-[#0D0F11] bg-[#C9A96E] hover:bg-[#D8B97E] transition-colors"
            >
              Reserve Your Stay
            </button>
            <div className="flex items-center justify-between text-xs text-[#A09D95] pt-2">
              <span>Mumbai, Maharashtra</span>
              <a href="tel:+919876543210" className="hover:text-[#C9A96E] transition-colors">
                +91 98765 43210
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
