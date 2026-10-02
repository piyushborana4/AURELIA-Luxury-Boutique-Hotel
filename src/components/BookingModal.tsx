import React, { useState, useEffect } from 'react';
import { X, Calendar, Users, BedDouble, Check, Sparkles, ShieldCheck, Download, Printer } from 'lucide-react';
import { ROOMS_DATA, Room } from '../data/hotelData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialRoom?: Room | null;
  initialCheckIn?: string;
  initialCheckOut?: string;
  initialAdults?: number;
  initialChildren?: number;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialRoom,
  initialCheckIn,
  initialCheckOut,
  initialAdults = 2,
  initialChildren = 0,
}) => {
  const today = new Date();
  const defaultIn = initialCheckIn || new Date(today.setDate(today.getDate() + 1)).toISOString().split('T')[0];
  const defaultOut = initialCheckOut || new Date(today.setDate(today.getDate() + 3)).toISOString().split('T')[0];

  const [checkIn, setCheckIn] = useState(defaultIn);
  const [checkOut, setCheckOut] = useState(defaultOut);
  const [adults, setAdults] = useState(initialAdults);
  const [children, setChildren] = useState(initialChildren);
  const [selectedRoomId, setSelectedRoomId] = useState<string>(initialRoom?.id || ROOMS_DATA[1].id);
  
  // Guest Details
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [specialRequest, setSpecialRequest] = useState('');
  
  // Optional curated add-ons
  const [addSpaCredit, setAddSpaCredit] = useState(false);
  const [addAirportTransfer, setAddAirportTransfer] = useState(false);
  const [addChampagne, setAddChampagne] = useState(false);

  // Booking outcome state
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  useEffect(() => {
    if (initialRoom) {
      setSelectedRoomId(initialRoom.id);
    }
  }, [initialRoom]);

  if (!isOpen) return null;

  const selectedRoom = ROOMS_DATA.find((r) => r.id === selectedRoomId) || ROOMS_DATA[0];

  // Calculate nights
  const calculateNights = () => {
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const diffTime = Math.abs(end.getTime() - start.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 1;
  };

  const nights = calculateNights();
  const baseRoomPrice = selectedRoom.pricePerNight * nights;
  
  let addOnsTotal = 0;
  if (addSpaCredit) addOnsTotal += 6500;
  if (addAirportTransfer) addOnsTotal += 4500;
  if (addChampagne) addOnsTotal += 7800;

  const subtotal = baseRoomPrice + addOnsTotal;
  const taxes = Math.round(subtotal * 0.18); // 18% Luxury GST
  const total = subtotal + taxes;

  const handleConfirm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !phone) return;
    
    // Generate luxury booking reference
    const randomCode = Math.floor(1000 + Math.random() * 9000);
    setBookingRef(`AUR-2026-${randomCode}`);
    setIsConfirmed(true);
  };

  const resetAndClose = () => {
    setIsConfirmed(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#0D0F11]/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-[#14171B] border border-white/15 my-8 shadow-2xl max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10 shrink-0 bg-[#0D0F11]">
          <div>
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#C9A96E] font-semibold block">
              Aurelia Reservations
            </span>
            <h3 className="font-serif text-2xl text-[#FAF9F5]">
              {isConfirmed ? 'Reservation Confirmed' : 'Reserve Your Stay'}
            </h3>
          </div>
          <button
            onClick={resetAndClose}
            className="p-2 text-[#FAF9F5] hover:text-[#C9A96E] border border-white/10 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 md:p-8 overflow-y-auto flex-1">
          {isConfirmed ? (
            /* Confirmation Success State */
            <div className="space-y-8 text-center py-6">
              <div className="w-16 h-16 mx-auto rounded-full bg-[#C9A96E]/20 border border-[#C9A96E] flex items-center justify-center text-[#C9A96E]">
                <Check className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <span className="text-xs uppercase tracking-[0.25em] text-[#C9A96E] font-semibold">
                  Intimate Hospitality Awaits
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#FAF9F5]">
                  “Your stay is reserved.”
                </h2>
                <p className="text-xs sm:text-sm text-[#A09D95] max-w-md mx-auto">
                  A personalized booking confirmation and itinerary details have been sent to <strong className="text-[#FAF9F5]">{email}</strong>.
                </p>
              </div>

              <div className="p-6 bg-[#0D0F11] border border-white/10 max-w-md mx-auto text-left space-y-3 font-mono text-xs">
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-[#A09D95]">Booking Reference:</span>
                  <span className="text-[#C9A96E] font-bold">{bookingRef}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#A09D95]">Primary Guest:</span>
                  <span className="text-[#FAF9F5]">{fullName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#A09D95]">Accommodation:</span>
                  <span className="text-[#FAF9F5]">{selectedRoom.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#A09D95]">Stay Duration:</span>
                  <span className="text-[#FAF9F5]">{nights} Night{nights > 1 ? 's' : ''} ({checkIn} to {checkOut})</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#A09D95]">Guests:</span>
                  <span className="text-[#FAF9F5]">{adults} Adults{children > 0 ? `, ${children} Children` : ''}</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-white/10 font-sans text-sm">
                  <span className="text-[#A09D95]">Total Amount:</span>
                  <span className="font-serif text-lg text-[#C9A96E]">₹{total.toLocaleString('en-IN')}</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                <button
                  onClick={resetAndClose}
                  className="px-8 py-3.5 text-xs uppercase tracking-[0.2em] font-semibold text-[#0D0F11] bg-[#C9A96E] hover:bg-[#D9B97E] transition-colors cursor-pointer"
                >
                  Return to Website
                </button>
              </div>
            </div>
          ) : (
            /* Booking Form */
            <form onSubmit={handleConfirm} className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Left Column: Form Fields */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* Stay Dates & Guests */}
                <div className="space-y-4">
                  <span className="text-[11px] uppercase tracking-[0.2em] text-[#C9A96E] font-semibold block">
                    1. Stay Details
                  </span>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs text-[#A09D95] block mb-1">Check-In Date</label>
                      <input
                        type="date"
                        required
                        value={checkIn}
                        min={new Date().toISOString().split('T')[0]}
                        onChange={(e) => setCheckIn(e.target.value)}
                        className="w-full bg-[#0D0F11] border border-white/15 p-3 text-xs text-[#FAF9F5] focus:outline-none focus:border-[#C9A96E]"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-[#A09D95] block mb-1">Check-Out Date</label>
                      <input
                        type="date"
                        required
                        value={checkOut}
                        min={checkIn}
                        onChange={(e) => setCheckOut(e.target.value)}
                        className="w-full bg-[#0D0F11] border border-white/15 p-3 text-xs text-[#FAF9F5] focus:outline-none focus:border-[#C9A96E]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs text-[#A09D95] block mb-1">Adults</label>
                      <select
                        value={adults}
                        onChange={(e) => setAdults(Number(e.target.value))}
                        className="w-full bg-[#0D0F11] border border-white/15 p-3 text-xs text-[#FAF9F5] focus:outline-none focus:border-[#C9A96E]"
                      >
                        {[1, 2, 3, 4, 5, 6].map((num) => (
                          <option key={num} value={num}>{num} Adult{num > 1 ? 's' : ''}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="text-xs text-[#A09D95] block mb-1">Children</label>
                      <select
                        value={children}
                        onChange={(e) => setChildren(Number(e.target.value))}
                        className="w-full bg-[#0D0F11] border border-white/15 p-3 text-xs text-[#FAF9F5] focus:outline-none focus:border-[#C9A96E]"
                      >
                        {[0, 1, 2, 3, 4].map((num) => (
                          <option key={num} value={num}>{num} Children</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Accommodation Selection */}
                <div className="space-y-3 pt-2">
                  <span className="text-[11px] uppercase tracking-[0.2em] text-[#C9A96E] font-semibold block">
                    2. Select Accommodation
                  </span>
                  
                  <div className="space-y-2">
                    {ROOMS_DATA.map((r) => (
                      <div
                        key={r.id}
                        onClick={() => setSelectedRoomId(r.id)}
                        className={`p-3.5 border transition-all cursor-pointer flex items-center justify-between ${
                          selectedRoomId === r.id
                            ? 'bg-[#1C2026] border-[#C9A96E]'
                            : 'bg-[#0D0F11] border-white/10 hover:border-white/30'
                        }`}
                      >
                        <div>
                          <span className="font-serif text-base text-[#FAF9F5] block">{r.name}</span>
                          <span className="text-[11px] text-[#A09D95]">{r.size} · {r.view} · {r.capacity}</span>
                        </div>
                        <div className="text-right">
                          <span className="font-mono text-xs text-[#C9A96E] font-semibold block">
                            ₹{r.pricePerNight.toLocaleString('en-IN')}
                          </span>
                          <span className="text-[10px] text-[#6C727F]">/ night</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Guest Details */}
                <div className="space-y-4 pt-2">
                  <span className="text-[11px] uppercase tracking-[0.2em] text-[#C9A96E] font-semibold block">
                    3. Guest Details
                  </span>

                  <div>
                    <label className="text-xs text-[#A09D95] block mb-1">Full Name</label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Priya Sharma"
                      className="w-full bg-[#0D0F11] border border-white/15 p-3 text-xs text-[#FAF9F5] focus:outline-none focus:border-[#C9A96E]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs text-[#A09D95] block mb-1">Email Address</label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="priya@example.com"
                        className="w-full bg-[#0D0F11] border border-white/15 p-3 text-xs text-[#FAF9F5] focus:outline-none focus:border-[#C9A96E]"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-[#A09D95] block mb-1">Phone Number</label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 98765 00000"
                        className="w-full bg-[#0D0F11] border border-white/15 p-3 text-xs text-[#FAF9F5] focus:outline-none focus:border-[#C9A96E]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs text-[#A09D95] block mb-1">Special Requests or Dietary Notes (Optional)</label>
                    <textarea
                      rows={2}
                      value={specialRequest}
                      onChange={(e) => setSpecialRequest(e.target.value)}
                      placeholder="High floor, early check-in, dietary restrictions..."
                      className="w-full bg-[#0D0F11] border border-white/15 p-3 text-xs text-[#FAF9F5] focus:outline-none focus:border-[#C9A96E] resize-none"
                    />
                  </div>
                </div>

                {/* Optional Curated Add-ons */}
                <div className="space-y-3 pt-2">
                  <span className="text-[11px] uppercase tracking-[0.2em] text-[#C9A96E] font-semibold block">
                    4. Enhance Your Stay (Optional)
                  </span>

                  <div className="space-y-2 text-xs">
                    <label className="flex items-center justify-between p-3 bg-[#0D0F11] border border-white/10 cursor-pointer hover:border-white/20">
                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          checked={addSpaCredit}
                          onChange={(e) => setAddSpaCredit(e.target.checked)}
                          className="accent-[#C9A96E]"
                        />
                        <span>90-min Signature Spa Treatment Credit</span>
                      </div>
                      <span className="text-[#C9A96E] font-mono">+₹6,500</span>
                    </label>

                    <label className="flex items-center justify-between p-3 bg-[#0D0F11] border border-white/10 cursor-pointer hover:border-white/20">
                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          checked={addAirportTransfer}
                          onChange={(e) => setAddAirportTransfer(e.target.checked)}
                          className="accent-[#C9A96E]"
                        />
                        <span>Private Chauffeur Airport Transfer (Round-trip)</span>
                      </div>
                      <span className="text-[#C9A96E] font-mono">+₹4,500</span>
                    </label>

                    <label className="flex items-center justify-between p-3 bg-[#0D0F11] border border-white/10 cursor-pointer hover:border-white/20">
                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          checked={addChampagne}
                          onChange={(e) => setAddChampagne(e.target.checked)}
                          className="accent-[#C9A96E]"
                        />
                        <span>Vintage Champagne & Artisanal Treats on Arrival</span>
                      </div>
                      <span className="text-[#C9A96E] font-mono">+₹7,800</span>
                    </label>
                  </div>
                </div>

              </div>

              {/* Right Column: Sticky Booking Summary */}
              <div className="lg:col-span-5 space-y-6">
                <div className="p-6 bg-[#0D0F11] border border-white/15 sticky top-0 space-y-4">
                  <span className="text-[11px] uppercase tracking-[0.2em] text-[#C9A96E] font-semibold block border-b border-white/10 pb-3">
                    Booking Summary
                  </span>

                  <div className="space-y-3 text-xs">
                    <div className="flex justify-between">
                      <span className="text-[#A09D95]">Room:</span>
                      <span className="font-serif text-sm text-[#FAF9F5] text-right">{selectedRoom.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#A09D95]">Duration:</span>
                      <span className="text-[#FAF9F5]">{nights} Night{nights > 1 ? 's' : ''}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#A09D95]">Dates:</span>
                      <span className="text-[#FAF9F5]">{checkIn} → {checkOut}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#A09D95]">Guests:</span>
                      <span className="text-[#FAF9F5]">{adults} Adults{children > 0 ? `, ${children} Children` : ''}</span>
                    </div>
                  </div>

                  {/* Pricing Breakdown */}
                  <div className="space-y-2 pt-4 border-t border-white/10 text-xs">
                    <div className="flex justify-between">
                      <span className="text-[#A09D95]">Accommodation ({nights}N @ ₹{selectedRoom.pricePerNight.toLocaleString('en-IN')}):</span>
                      <span className="font-mono text-[#FAF9F5]">₹{baseRoomPrice.toLocaleString('en-IN')}</span>
                    </div>

                    {addOnsTotal > 0 && (
                      <div className="flex justify-between">
                        <span className="text-[#A09D95]">Curated Add-ons:</span>
                        <span className="font-mono text-[#FAF9F5]">₹{addOnsTotal.toLocaleString('en-IN')}</span>
                      </div>
                    )}

                    <div className="flex justify-between">
                      <span className="text-[#A09D95]">Taxes & Luxury Cess (18%):</span>
                      <span className="font-mono text-[#FAF9F5]">₹{taxes.toLocaleString('en-IN')}</span>
                    </div>

                    <div className="flex justify-between pt-3 border-t border-white/10 items-baseline">
                      <span className="font-medium text-[#FAF9F5]">Total Price:</span>
                      <span className="font-serif text-2xl text-[#C9A96E] font-medium">
                        ₹{total.toLocaleString('en-IN')}
                      </span>
                    </div>
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-full py-4 text-xs uppercase tracking-[0.2em] font-semibold text-[#0D0F11] bg-[#C9A96E] hover:bg-[#D9B97E] transition-colors shadow-xl cursor-pointer"
                    >
                      Confirm Booking
                    </button>
                    <div className="mt-3 flex items-center justify-center gap-1.5 text-[10px] text-[#A09D95]">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#C9A96E]" />
                      <span>Complimentary cancellation up to 48 hours prior</span>
                    </div>
                  </div>

                </div>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
