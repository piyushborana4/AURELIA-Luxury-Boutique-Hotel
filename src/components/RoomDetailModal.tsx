import React, { useState } from 'react';
import { X, Maximize2, Users, Bed, Check, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import { Room } from '../data/hotelData';

interface RoomDetailModalProps {
  room: Room | null;
  isOpen: boolean;
  onClose: () => void;
  onBook: (room: Room) => void;
}

export const RoomDetailModal: React.FC<RoomDetailModalProps> = ({
  room,
  isOpen,
  onClose,
  onBook,
}) => {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);

  if (!isOpen || !room) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#0D0F11]/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-300">
      <div className="relative w-full max-w-4xl bg-[#14171B] border border-white/15 my-8 shadow-2xl max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10 shrink-0 bg-[#0D0F11]">
          <div>
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#C9A96E] font-semibold block">
              {room.subtitle}
            </span>
            <h3 className="font-serif text-2xl text-[#FAF9F5]">
              {room.name}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#FAF9F5] hover:text-[#C9A96E] border border-white/10 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 md:p-8 overflow-y-auto flex-1 space-y-8">
          
          {/* Main Photo Gallery View */}
          <div className="space-y-3">
            <div className="aspect-[16/9] sm:aspect-[21/9] overflow-hidden border border-white/10">
              <img
                src={room.gallery[selectedPhotoIndex] || room.image}
                alt={room.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Thumbnail Row */}
            <div className="flex gap-3 overflow-x-auto pb-1">
              {room.gallery.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedPhotoIndex(idx)}
                  className={`w-20 h-14 shrink-0 overflow-hidden border transition-all cursor-pointer ${
                    selectedPhotoIndex === idx ? 'border-[#C9A96E]' : 'border-white/15 opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt={`${room.name} preview ${idx}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Quick Specs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-[#0D0F11] border border-white/10 text-xs">
            <div>
              <span className="text-[#A09D95] block text-[10px] uppercase">Space</span>
              <span className="font-serif text-base text-[#FAF9F5]">{room.size}</span>
            </div>
            <div>
              <span className="text-[#A09D95] block text-[10px] uppercase">Bedding</span>
              <span className="font-serif text-base text-[#FAF9F5]">{room.bed}</span>
            </div>
            <div>
              <span className="text-[#A09D95] block text-[10px] uppercase">Outlook</span>
              <span className="font-serif text-base text-[#FAF9F5]">{room.view}</span>
            </div>
            <div>
              <span className="text-[#A09D95] block text-[10px] uppercase">Occupancy</span>
              <span className="font-serif text-base text-[#FAF9F5]">{room.capacity}</span>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <h4 className="font-serif text-xl text-[#FAF9F5]">Design & Architecture</h4>
            <p className="font-sans text-xs sm:text-sm text-[#C4C0B6] font-light leading-relaxed">
              {room.description}
            </p>
          </div>

          {/* Features & Amenities List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4 border-t border-white/10">
            <div>
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#C9A96E] font-semibold block mb-3">
                Key Architectural Highlights
              </span>
              <ul className="space-y-2 text-xs text-[#E8E4DC]">
                {room.features.map((feat, i) => (
                  <li key={i} className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#C9A96E] shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#C9A96E] font-semibold block mb-3">
                Curated Suite Amenities
              </span>
              <ul className="space-y-2 text-xs text-[#E8E4DC]">
                {room.amenities.map((amenity, i) => (
                  <li key={i} className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#C9A96E] shrink-0" />
                    <span>{amenity}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="p-6 border-t border-white/10 shrink-0 bg-[#0D0F11] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-[10px] uppercase tracking-wider text-[#A09D95] block">Nightly Rate</span>
            <div className="flex items-baseline gap-2">
              <span className="font-serif text-3xl text-[#FAF9F5] font-light">
                ₹{room.pricePerNight.toLocaleString('en-IN')}
              </span>
              <span className="text-xs text-[#A09D95]">+ 18% taxes</span>
            </div>
          </div>

          <button
            onClick={() => {
              onClose();
              onBook(room);
            }}
            className="w-full sm:w-auto px-8 py-3.5 text-xs uppercase tracking-[0.2em] font-semibold text-[#0D0F11] bg-[#C9A96E] hover:bg-[#D9B97E] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xl"
          >
            <span>Reserve {room.name}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
};
