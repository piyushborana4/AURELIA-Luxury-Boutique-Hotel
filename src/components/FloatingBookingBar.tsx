import React, { useState } from 'react';
import { Calendar, Users, BedDouble, Search, ChevronDown, Check } from 'lucide-react';

interface FloatingBookingBarProps {
  onCheckAvailability: (bookingParams: {
    checkIn: string;
    checkOut: string;
    adults: number;
    children: number;
    roomType: string;
  }) => void;
}

export const FloatingBookingBar: React.FC<FloatingBookingBarProps> = ({ onCheckAvailability }) => {
  // Default dates: tomorrow & 3 nights later
  const today = new Date();
  const defaultCheckIn = new Date(today.setDate(today.getDate() + 1)).toISOString().split('T')[0];
  const defaultCheckOut = new Date(today.setDate(today.getDate() + 3)).toISOString().split('T')[0];

  const [checkIn, setCheckIn] = useState(defaultCheckIn);
  const [checkOut, setCheckOut] = useState(defaultCheckOut);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [roomType, setRoomType] = useState('all');
  const [guestDropdownOpen, setGuestDropdownOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCheckAvailability({
      checkIn,
      checkOut,
      adults,
      children,
      roomType,
    });
  };

  return (
    <div className="relative z-30 max-w-6xl mx-auto px-4 -mt-16 md:-mt-20 mb-16">
      <div className="bg-[#14171B]/95 backdrop-blur-xl border border-white/15 p-5 md:p-6 shadow-2xl shadow-black/60">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-center">
          
          {/* Check-In Field */}
          <div className="relative border-b sm:border-b-0 sm:border-r border-white/10 pb-3 sm:pb-0 sm:pr-4">
            <label className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-[#C9A96E] font-semibold mb-1">
              <Calendar className="w-3.5 h-3.5" />
              <span>Check-In</span>
            </label>
            <input
              type="date"
              value={checkIn}
              min={new Date().toISOString().split('T')[0]}
              onChange={(e) => setCheckIn(e.target.value)}
              className="w-full bg-transparent text-[#FAF9F5] text-sm font-medium focus:outline-none focus:text-[#C9A96E] cursor-pointer"
              required
            />
          </div>

          {/* Check-Out Field */}
          <div className="relative border-b sm:border-b-0 lg:border-r border-white/10 pb-3 sm:pb-0 sm:pr-4">
            <label className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-[#C9A96E] font-semibold mb-1">
              <Calendar className="w-3.5 h-3.5" />
              <span>Check-Out</span>
            </label>
            <input
              type="date"
              value={checkOut}
              min={checkIn || new Date().toISOString().split('T')[0]}
              onChange={(e) => setCheckOut(e.target.value)}
              className="w-full bg-transparent text-[#FAF9F5] text-sm font-medium focus:outline-none focus:text-[#C9A96E] cursor-pointer"
              required
            />
          </div>

          {/* Guests Selector */}
          <div className="relative border-b sm:border-b-0 sm:border-r border-white/10 pb-3 sm:pb-0 sm:pr-4">
            <label className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-[#C9A96E] font-semibold mb-1">
              <Users className="w-3.5 h-3.5" />
              <span>Guests</span>
            </label>
            <button
              type="button"
              onClick={() => setGuestDropdownOpen(!guestDropdownOpen)}
              className="w-full text-left text-sm font-medium text-[#FAF9F5] flex items-center justify-between focus:outline-none cursor-pointer"
            >
              <span>{adults} Adult{adults > 1 ? 's' : ''}{children > 0 ? `, ${children} Child${children > 1 ? 'ren' : ''}` : ''}</span>
              <ChevronDown className="w-4 h-4 text-[#A09D95]" />
            </button>

            {/* Guest Dropdown */}
            {guestDropdownOpen && (
              <div className="absolute top-full left-0 mt-3 w-64 bg-[#1C2026] border border-white/15 p-4 z-50 shadow-2xl shadow-black space-y-4">
                <div className="flex items-center justify-between text-xs">
                  <div>
                    <span className="font-medium text-[#FAF9F5] block">Adults</span>
                    <span className="text-[10px] text-[#A09D95]">Ages 13+</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      disabled={adults <= 1}
                      onClick={() => setAdults(Math.max(1, adults - 1))}
                      className="w-7 h-7 flex items-center justify-center border border-white/20 text-[#FAF9F5] disabled:opacity-30 hover:border-[#C9A96E]"
                    >
                      -
                    </button>
                    <span className="font-mono text-sm">{adults}</span>
                    <button
                      type="button"
                      disabled={adults >= 6}
                      onClick={() => setAdults(Math.min(6, adults + 1))}
                      className="w-7 h-7 flex items-center justify-center border border-white/20 text-[#FAF9F5] disabled:opacity-30 hover:border-[#C9A96E]"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs pt-2 border-t border-white/10">
                  <div>
                    <span className="font-medium text-[#FAF9F5] block">Children</span>
                    <span className="text-[10px] text-[#A09D95]">Ages 0 - 12</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      disabled={children <= 0}
                      onClick={() => setChildren(Math.max(0, children - 1))}
                      className="w-7 h-7 flex items-center justify-center border border-white/20 text-[#FAF9F5] disabled:opacity-30 hover:border-[#C9A96E]"
                    >
                      -
                    </button>
                    <span className="font-mono text-sm">{children}</span>
                    <button
                      type="button"
                      disabled={children >= 4}
                      onClick={() => setChildren(Math.min(4, children + 1))}
                      className="w-7 h-7 flex items-center justify-center border border-white/20 text-[#FAF9F5] disabled:opacity-30 hover:border-[#C9A96E]"
                    >
                      +
                    </button>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setGuestDropdownOpen(false)}
                  className="w-full py-1.5 text-center text-[11px] uppercase tracking-wider bg-[#C9A96E] text-[#0D0F11] font-semibold"
                >
                  Apply
                </button>
              </div>
            )}
          </div>

          {/* Submit Action */}
          <div className="pt-2 sm:pt-0">
            <button
              type="submit"
              className="w-full py-3.5 px-6 text-xs uppercase tracking-[0.2em] font-semibold text-[#0D0F11] bg-[#C9A96E] hover:bg-[#D9B97E] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98]"
            >
              <Search className="w-4 h-4" />
              <span>Check Availability</span>
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};
