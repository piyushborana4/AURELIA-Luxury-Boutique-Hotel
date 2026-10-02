import React, { useState } from 'react';
import { ArrowRight, Maximize2, Users, Bed, Eye, Sparkles } from 'lucide-react';
import { ROOMS_DATA, Room } from '../data/hotelData';

interface RoomsSectionProps {
  onSelectRoom: (room: Room) => void;
  onBookRoom: (room: Room) => void;
}

export const RoomsSection: React.FC<RoomsSectionProps> = ({ onSelectRoom, onBookRoom }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'rooms' | 'suites'>('all');

  const filteredRooms = ROOMS_DATA.filter((room) => {
    if (activeFilter === 'rooms') return room.id.includes('deluxe');
    if (activeFilter === 'suites') return !room.id.includes('deluxe');
    return true;
  });

  return (
    <section id="rooms" className="py-24 md:py-32 bg-[#121519] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C9A96E] font-medium">
              <span className="w-6 h-[1px] bg-[#C9A96E]" />
              <span>Rooms & Suites</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#FAF9F5] font-light tracking-tight">
              “Stay Your Way.”
            </h2>
            <p className="font-sans text-[#C4C0B6] text-base md:text-lg font-light leading-relaxed">
              Thoughtfully designed spaces where modern comfort meets timeless character.
            </p>
          </div>

          {/* Filter tabs */}
          <div className="inline-flex p-1 bg-[#1A1E24] border border-white/10 self-start md:self-end">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 text-xs uppercase tracking-[0.16em] font-medium transition-all duration-300 cursor-pointer ${
                activeFilter === 'all'
                  ? 'bg-[#C9A96E] text-[#0D0F11] font-semibold'
                  : 'text-[#A09D95] hover:text-[#FAF9F5]'
              }`}
            >
              All Accommodations
            </button>
            <button
              onClick={() => setActiveFilter('suites')}
              className={`px-4 py-2 text-xs uppercase tracking-[0.16em] font-medium transition-all duration-300 cursor-pointer ${
                activeFilter === 'suites'
                  ? 'bg-[#C9A96E] text-[#0D0F11] font-semibold'
                  : 'text-[#A09D95] hover:text-[#FAF9F5]'
              }`}
            >
              Suites & Villas
            </button>
            <button
              onClick={() => setActiveFilter('rooms')}
              className={`px-4 py-2 text-xs uppercase tracking-[0.16em] font-medium transition-all duration-300 cursor-pointer ${
                activeFilter === 'rooms'
                  ? 'bg-[#C9A96E] text-[#0D0F11] font-semibold'
                  : 'text-[#A09D95] hover:text-[#FAF9F5]'
              }`}
            >
              Deluxe Rooms
            </button>
          </div>
        </div>

        {/* Room Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredRooms.map((room) => (
            <div
              key={room.id}
              className="group bg-[#171B21] border border-white/10 flex flex-col justify-between hover:border-[#C9A96E]/50 transition-all duration-500 shadow-xl"
            >
              {/* Room Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#171B21] via-transparent to-transparent opacity-80" />
                
                {/* View Room Quick Button */}
                <button
                  onClick={() => onSelectRoom(room)}
                  className="absolute top-4 right-4 p-2.5 bg-[#0D0F11]/80 backdrop-blur-md text-[#FAF9F5] hover:text-[#C9A96E] hover:bg-[#0D0F11] border border-white/15 transition-all duration-300 opacity-0 group-hover:opacity-100 cursor-pointer"
                  title="View Details"
                  aria-label={`View details for ${room.name}`}
                >
                  <Eye className="w-4 h-4" />
                </button>

                {/* Tag */}
                {room.featured && (
                  <div className="absolute top-4 left-4 px-3 py-1 bg-[#C9A96E] text-[#0D0F11] text-[10px] uppercase tracking-[0.2em] font-bold">
                    Signature Choice
                  </div>
                )}
              </div>

              {/* Room Content */}
              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs uppercase tracking-[0.2em] text-[#C9A96E] font-medium">
                      {room.subtitle}
                    </span>
                    <span className="text-xs text-[#A09D95] font-light">
                      {room.view}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl md:text-3xl text-[#FAF9F5] group-hover:text-[#C9A96E] transition-colors mb-3">
                    {room.name}
                  </h3>

                  <p className="text-xs text-[#A09D95] leading-relaxed line-clamp-2 mb-6 font-light">
                    {room.description}
                  </p>

                  {/* Room Specs */}
                  <div className="grid grid-cols-3 gap-2 py-4 border-y border-white/10 text-center text-xs text-[#D8D4C8]">
                    <div className="flex flex-col items-center">
                      <Maximize2 className="w-3.5 h-3.5 text-[#C9A96E] mb-1" />
                      <span className="font-mono text-[11px]">{room.size}</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <Bed className="w-3.5 h-3.5 text-[#C9A96E] mb-1" />
                      <span className="text-[11px]">{room.bed}</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <Users className="w-3.5 h-3.5 text-[#C9A96E] mb-1" />
                      <span className="text-[11px]">{room.capacity}</span>
                    </div>
                  </div>
                </div>

                {/* Price & Actions */}
                <div className="space-y-4 pt-2">
                  <div className="flex items-baseline justify-between">
                    <span className="text-[11px] uppercase tracking-wider text-[#A09D95]">Rate per night</span>
                    <div className="text-right">
                      <span className="font-serif text-2xl text-[#FAF9F5] font-light">
                        ₹{room.pricePerNight.toLocaleString('en-IN')}
                      </span>
                      <span className="text-[10px] text-[#A09D95] block">+ taxes</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => onSelectRoom(room)}
                      className="w-full py-3 text-center text-xs uppercase tracking-[0.16em] font-medium text-[#FAF9F5] border border-white/20 hover:border-[#C9A96E] hover:text-[#C9A96E] transition-colors cursor-pointer"
                    >
                      View Details
                    </button>
                    <button
                      onClick={() => onBookRoom(room)}
                      className="w-full py-3 text-center text-xs uppercase tracking-[0.16em] font-semibold text-[#0D0F11] bg-[#C9A96E] hover:bg-[#D9B97E] transition-colors cursor-pointer"
                    >
                      Book Room
                    </button>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
