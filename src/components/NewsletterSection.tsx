import React, { useState } from 'react';
import { Mail, Check, ArrowRight, Sparkles } from 'lucide-react';

export const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;

    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 600);
  };

  return (
    <section className="py-24 bg-[#0D0F11] border-b border-white/5 relative">
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
        
        <div className="space-y-4 mb-8">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C9A96E] font-medium">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Aurelia Gazette</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#FAF9F5] font-light tracking-tight">
            “Stay in the know.”
          </h2>

          <p className="font-sans text-xs sm:text-sm text-[#A09D95] font-light max-w-xl mx-auto leading-relaxed">
            Receive occasional stories, seasonal private offers and new culinary experiences from Aurelia. We respect your privacy.
          </p>
        </div>

        {status === 'success' ? (
          <div className="p-6 bg-[#14171B] border border-[#C9A96E]/40 max-w-lg mx-auto flex items-center justify-center gap-3 text-sm text-[#FAF9F5] animate-in fade-in">
            <Check className="w-5 h-5 text-[#C9A96E]" />
            <span>Thank you for subscribing. We look forward to welcoming you.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Mail className="w-4 h-4 text-[#A09D95] absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="w-full bg-[#14171B] border border-white/15 text-[#FAF9F5] pl-11 pr-4 py-3.5 text-xs tracking-wider focus:outline-none focus:border-[#C9A96E] transition-colors placeholder:text-[#6C727F]"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'loading'}
              className="px-6 py-3.5 text-xs uppercase tracking-[0.2em] font-semibold text-[#0D0F11] bg-[#C9A96E] hover:bg-[#D9B97E] transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              <span>{status === 'loading' ? 'Joining...' : 'Subscribe'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </form>
        )}

      </div>
    </section>
  );
};
