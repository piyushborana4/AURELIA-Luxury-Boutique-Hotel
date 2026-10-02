import React, { useState, useEffect } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight, Sparkles, ArrowUpRight } from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem } from '../data/hotelData';

export const GallerySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const filteredItems = selectedCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  const openLightbox = (index: number) => {
    setActiveLightboxIndex(index);
  };

  const closeLightbox = () => {
    setActiveLightboxIndex(null);
  };

  const nextImage = () => {
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex((activeLightboxIndex + 1) % filteredItems.length);
  };

  const prevImage = () => {
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex((activeLightboxIndex - 1 + filteredItems.length) % filteredItems.length);
  };

  // Keyboard controls for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeLightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeLightboxIndex, filteredItems.length]);

  return (
    <section id="gallery" className="py-24 md:py-32 bg-[#121519] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C9A96E] font-medium">
              <span className="w-6 h-[1px] bg-[#C9A96E]" />
              <span>Visual Chronicle</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#FAF9F5] font-light tracking-tight">
              Estate Gallery
            </h2>
            <p className="font-sans text-[#C4C0B6] text-base font-light leading-relaxed">
              Explore the textures, quiet spaces, and golden-hour atmosphere of Aurelia.
            </p>
          </div>

          {/* Category Filter */}
          <div className="inline-flex flex-wrap gap-1 p-1 bg-[#1A1E24] border border-white/10 self-start md:self-end">
            {['all', 'architecture', 'rooms', 'dining', 'wellness', 'moments'].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs uppercase tracking-wider font-medium transition-all duration-300 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#C9A96E] text-[#0D0F11] font-semibold'
                    : 'text-[#A09D95] hover:text-[#FAF9F5]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetric Masonry Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => openLightbox(idx)}
              className={`group relative overflow-hidden bg-[#171B21] border border-white/10 cursor-pointer ${item.spanClass}`}
              style={{ minHeight: '320px' }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6" />
              
              {/* Corner hover expand icon */}
              <div className="absolute top-4 right-4 p-2 bg-[#0D0F11]/80 backdrop-blur-md text-[#C9A96E] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowUpRight className="w-4 h-4" />
              </div>

              {/* Bottom text overlay on hover */}
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#C9A96E] block mb-1 font-semibold">
                  {item.category}
                </span>
                <h3 className="font-serif text-xl text-[#FAF9F5] mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-[#D8D4C8]/80 font-light">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Fullscreen Lightbox Modal */}
      {activeLightboxIndex !== null && filteredItems[activeLightboxIndex] && (
        <div className="fixed inset-0 z-50 bg-[#0D0F11]/95 backdrop-blur-xl flex flex-col justify-between p-6 md:p-12 animate-in fade-in duration-300">
          
          {/* Top Bar */}
          <div className="flex items-center justify-between text-xs text-[#D8D4C8] border-b border-white/10 pb-4">
            <div className="flex items-center gap-3">
              <span className="font-serif text-lg text-[#FAF9F5]">Aurelia Gallery</span>
              <span className="text-white/30">|</span>
              <span className="font-mono text-[#C9A96E]">
                {activeLightboxIndex + 1} / {filteredItems.length}
              </span>
            </div>

            <button
              onClick={closeLightbox}
              className="p-2 text-[#FAF9F5] hover:text-[#C9A96E] bg-white/5 hover:bg-white/10 border border-white/10 transition-colors cursor-pointer"
              aria-label="Close Lightbox"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Center Image Container */}
          <div className="relative flex-1 flex items-center justify-center my-4">
            <button
              onClick={prevImage}
              className="absolute left-2 md:left-6 p-3 bg-[#14171B]/80 hover:bg-[#C9A96E] text-[#FAF9F5] hover:text-[#0D0F11] border border-white/10 transition-colors z-10 cursor-pointer"
              aria-label="Previous Image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="max-w-4xl max-h-[70vh] overflow-hidden border border-white/15 shadow-2xl">
              <img
                src={filteredItems[activeLightboxIndex].image}
                alt={filteredItems[activeLightboxIndex].title}
                className="w-full h-full object-contain max-h-[70vh]"
                referrerPolicy="no-referrer"
              />
            </div>

            <button
              onClick={nextImage}
              className="absolute right-2 md:right-6 p-3 bg-[#14171B]/80 hover:bg-[#C9A96E] text-[#FAF9F5] hover:text-[#0D0F11] border border-white/10 transition-colors z-10 cursor-pointer"
              aria-label="Next Image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Bottom Caption */}
          <div className="text-center max-w-xl mx-auto border-t border-white/10 pt-4">
            <h4 className="font-serif text-xl text-[#FAF9F5]">
              {filteredItems[activeLightboxIndex].title}
            </h4>
            <p className="text-xs text-[#A09D95] font-light mt-1">
              {filteredItems[activeLightboxIndex].caption}
            </p>
          </div>

        </div>
      )}
    </section>
  );
};
