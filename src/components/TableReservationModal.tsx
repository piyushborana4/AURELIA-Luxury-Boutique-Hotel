import React, { useState } from 'react';
import { X, Calendar, Clock, Users, UtensilsCrossed, Check, Sparkles } from 'lucide-react';

interface TableReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TableReservationModal: React.FC<TableReservationModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [time, setTime] = useState('19:30');
  const [guests, setGuests] = useState(2);
  const [seatingArea, setSeatingArea] = useState('Main Hearth Dining');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [resCode, setResCode] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone) return;

    setResCode(`EMB-${Math.floor(1000 + Math.random() * 9000)}`);
    setIsSuccess(true);
  };

  const handleClose = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#0D0F11]/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-300">
      <div className="relative w-full max-w-lg bg-[#14171B] border border-white/15 my-8 shadow-2xl">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10 bg-[#0D0F11]">
          <div>
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#C9A96E] font-semibold block">
              Ember Restaurant & Bar
            </span>
            <h3 className="font-serif text-2xl text-[#FAF9F5]">
              {isSuccess ? 'Table Reserved' : 'Reserve a Table'}
            </h3>
          </div>
          <button
            onClick={handleClose}
            className="p-2 text-[#FAF9F5] hover:text-[#C9A96E] border border-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          {isSuccess ? (
            <div className="space-y-6 text-center py-4">
              <div className="w-14 h-14 mx-auto rounded-full bg-[#C9A96E]/20 border border-[#C9A96E] flex items-center justify-center text-[#C9A96E]">
                <Check className="w-7 h-7" />
              </div>

              <div className="space-y-2">
                <h4 className="font-serif text-2xl text-[#FAF9F5]">“We look forward to hosting you.”</h4>
                <p className="text-xs text-[#A09D95]">
                  Reservation confirmation has been sent to <strong className="text-[#FAF9F5]">{email}</strong>.
                </p>
              </div>

              <div className="p-4 bg-[#0D0F11] border border-white/10 text-xs space-y-2 font-mono text-left">
                <div className="flex justify-between">
                  <span className="text-[#A09D95]">Table Code:</span>
                  <span className="text-[#C9A96E] font-bold">{resCode}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#A09D95]">Date & Time:</span>
                  <span className="text-[#FAF9F5]">{date} at {time}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#A09D95]">Guests:</span>
                  <span className="text-[#FAF9F5]">{guests} Persons</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#A09D95]">Seating:</span>
                  <span className="text-[#FAF9F5]">{seatingArea}</span>
                </div>
              </div>

              <button
                onClick={handleClose}
                className="w-full py-3 text-xs uppercase tracking-[0.2em] font-semibold text-[#0D0F11] bg-[#C9A96E] hover:bg-[#D9B97E] transition-colors cursor-pointer"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs text-[#A09D95] block mb-1">Date</label>
                  <input
                    type="date"
                    required
                    value={date}
                    min={new Date().toISOString().split('T')[0]}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full bg-[#0D0F11] border border-white/15 p-2.5 text-xs text-[#FAF9F5] focus:outline-none focus:border-[#C9A96E]"
                  />
                </div>
                <div>
                  <label className="text-xs text-[#A09D95] block mb-1">Time</label>
                  <select
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full bg-[#0D0F11] border border-white/15 p-2.5 text-xs text-[#FAF9F5] focus:outline-none focus:border-[#C9A96E]"
                  >
                    <option value="12:30">12:30 PM (Lunch)</option>
                    <option value="13:30">01:30 PM (Lunch)</option>
                    <option value="19:00">07:00 PM (Dinner)</option>
                    <option value="19:30">07:30 PM (Dinner)</option>
                    <option value="20:30">08:30 PM (Dinner)</option>
                    <option value="21:30">09:30 PM (Dinner)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs text-[#A09D95] block mb-1">Party Size</label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(Number(e.target.value))}
                    className="w-full bg-[#0D0F11] border border-white/15 p-2.5 text-xs text-[#FAF9F5] focus:outline-none focus:border-[#C9A96E]"
                  >
                    {[1, 2, 3, 4, 5, 6, 8, 10].map((num) => (
                      <option key={num} value={num}>{num} Guest{num > 1 ? 's' : ''}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-xs text-[#A09D95] block mb-1">Seating Area</label>
                  <select
                    value={seatingArea}
                    onChange={(e) => setSeatingArea(e.target.value)}
                    className="w-full bg-[#0D0F11] border border-white/15 p-2.5 text-xs text-[#FAF9F5] focus:outline-none focus:border-[#C9A96E]"
                  >
                    <option value="Main Hearth Dining">Main Hearth Dining</option>
                    <option value="Courtyard Garden Terrace">Courtyard Garden Terrace</option>
                    <option value="Private Wine Cellar">Private Wine Cellar</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs text-[#A09D95] block mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Vikram Malhotra"
                  className="w-full bg-[#0D0F11] border border-white/15 p-2.5 text-xs text-[#FAF9F5] focus:outline-none focus:border-[#C9A96E]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs text-[#A09D95] block mb-1">Email</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="vikram@example.com"
                    className="w-full bg-[#0D0F11] border border-white/15 p-2.5 text-xs text-[#FAF9F5] focus:outline-none focus:border-[#C9A96E]"
                  />
                </div>
                <div>
                  <label className="text-xs text-[#A09D95] block mb-1">Phone</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 00000"
                    className="w-full bg-[#0D0F11] border border-white/15 p-2.5 text-xs text-[#FAF9F5] focus:outline-none focus:border-[#C9A96E]"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs text-[#A09D95] block mb-1">Dietary Preferences or Special Occasion</label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Allergies, anniversary, quiet corner table..."
                  className="w-full bg-[#0D0F11] border border-white/15 p-2.5 text-xs text-[#FAF9F5] focus:outline-none focus:border-[#C9A96E] resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 text-xs uppercase tracking-[0.2em] font-semibold text-[#0D0F11] bg-[#C9A96E] hover:bg-[#D9B97E] transition-colors cursor-pointer mt-2"
              >
                Confirm Table Reservation
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
