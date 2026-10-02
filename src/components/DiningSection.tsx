import React, { useState } from 'react';
import { Flame, UtensilsCrossed, Wine, Clock, Sparkles, ArrowRight } from 'lucide-react';

interface DiningSectionProps {
  onReserveTable: () => void;
}

export const DiningSection: React.FC<DiningSectionProps> = ({ onReserveTable }) => {
  const [activeMenuTab, setActiveMenuTab] = useState<'dinner' | 'breakfast' | 'cellar'>('dinner');

  const menuItems = {
    dinner: [
      { name: 'Wood-Fired Morel Risotto', desc: 'Aged Carnaroli, roasted wild morels, black truffle butter, parmesan crisp', price: '₹1,850' },
      { name: 'Charcoal Smoked Sea Bass', desc: 'Coastal kokum reduction, pickled fennel, compressed cucumber & citrus oil', price: '₹2,400' },
      { name: 'Heirloom Beet Tartare', desc: 'Fermented goat curd, smoked walnut crumble, dehydrated hibiscus cracker', price: '₹1,450' },
      { name: 'Roasted Lamb Shank with Saffron Jus', desc: 'Slow braised 12 hours, smoked marrow pomme puree, rosemary glaze', price: '₹2,900' }
    ],
    breakfast: [
      { name: 'Artisanal Brioche French Toast', desc: 'Organic wild honeycomb, vanilla bean mascarpone, spiced berry compote', price: '₹950' },
      { name: 'Avocado & Truffle Poached Eggs', desc: 'Toasted sourdough, confit heirloom cherry tomatoes, cold-pressed olive oil', price: '₹1,150' },
      { name: 'Cardamom & Rose Granola Bowl', desc: 'House fermented coconut yogurt, chia seeds, fresh Himalayan figs', price: '₹850' }
    ],
    cellar: [
      { name: 'Domaine Leflaive Puligny-Montrachet', desc: '2020 · Burgundy, France · Crisp minerality, toasted hazelnut notes', price: '₹18,500' },
      { name: 'Tenuta San Guido Sassicaia', desc: '2019 · Bolgheri, Italy · Dark cassis, cedar, velvety tannins', price: '₹34,000' },
      { name: 'Botanical Amber Negroni (House Cocktail)', desc: 'Smoked oak gin, sweet vermouth, gentian amaro, torched orange peel', price: '₹1,250' }
    ]
  };

  return (
    <section id="dining" className="py-24 md:py-32 bg-[#0D0F11] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Top Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C9A96E] font-medium">
              <Flame className="w-3.5 h-3.5" />
              <span>Culinary Excellence</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#FAF9F5] font-light leading-tight">
              “Taste the <span className="italic text-[#C9A96E]">Extraordinary.”</span>
            </h2>

            <div className="space-y-2">
              <span className="font-serif text-2xl text-[#C9A96E] block tracking-wide">EMBER RESTAURANT & BAR</span>
              <p className="font-sans text-[#C4C0B6] text-base font-light leading-relaxed">
                A contemporary dining experience built around seasonal ingredients, open-fire cooking and locally inspired flavors. Led by Executive Chef Vikram Sen.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 border-y border-white/10 text-xs text-[#E8E4DC]">
              <div>
                <span className="text-[10px] uppercase text-[#A09D95] block">Breakfast</span>
                <span className="font-medium">07:00 – 10:30</span>
              </div>
              <div>
                <span className="text-[10px] uppercase text-[#A09D95] block">Lunch</span>
                <span className="font-medium">12:30 – 15:30</span>
              </div>
              <div>
                <span className="text-[10px] uppercase text-[#A09D95] block">Dinner</span>
                <span className="font-medium">19:00 – 23:30</span>
              </div>
              <div>
                <span className="text-[10px] uppercase text-[#A09D95] block">Bar</span>
                <span className="font-medium">Till 01:00 AM</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={onReserveTable}
                className="px-6 py-3.5 text-xs uppercase tracking-[0.2em] font-semibold text-[#0D0F11] bg-[#C9A96E] hover:bg-[#D9B97E] transition-colors flex items-center gap-2 cursor-pointer"
              >
                <span>Reserve a Table</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-6 relative group">
            <div className="aspect-[4/3] overflow-hidden border border-white/10 shadow-2xl">
              <img
                src="/src/assets/images/dining_ember_restaurant_1790869771840.jpg"
                alt="Ember Fine Dining Restaurant at Aurelia"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>

            <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#14171B]/90 backdrop-blur-md border border-white/10 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2 text-[#FAF9F5]">
                <UtensilsCrossed className="w-4 h-4 text-[#C9A96E]" />
                <span className="font-serif text-sm">Farm-to-Fire Seasonal Tasting Menu</span>
              </div>
              <span className="text-[#C9A96E] font-mono text-[11px]">Daily 7-Course</span>
            </div>
          </div>
        </div>

        {/* Menu Preview Interactive Section */}
        <div className="bg-[#14171B] border border-white/10 p-8 md:p-12 shadow-xl">
          <div className="flex flex-col sm:flex-row items-center justify-between border-b border-white/10 pb-6 mb-8 gap-4">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-[#C9A96E] font-medium block">
                Tasting & A La Carte
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#FAF9F5]">
                Curated Menu Highlights
              </h3>
            </div>

            {/* Menu Tabs */}
            <div className="inline-flex p-1 bg-[#1F242C] border border-white/10">
              <button
                onClick={() => setActiveMenuTab('dinner')}
                className={`px-4 py-2 text-xs uppercase tracking-wider font-medium transition-colors cursor-pointer ${
                  activeMenuTab === 'dinner' ? 'bg-[#C9A96E] text-[#0D0F11] font-semibold' : 'text-[#A09D95] hover:text-[#FAF9F5]'
                }`}
              >
                Dinner Hearth
              </button>
              <button
                onClick={() => setActiveMenuTab('breakfast')}
                className={`px-4 py-2 text-xs uppercase tracking-wider font-medium transition-colors cursor-pointer ${
                  activeMenuTab === 'breakfast' ? 'bg-[#C9A96E] text-[#0D0F11] font-semibold' : 'text-[#A09D95] hover:text-[#FAF9F5]'
                }`}
              >
                Morning Harvest
              </button>
              <button
                onClick={() => setActiveMenuTab('cellar')}
                className={`px-4 py-2 text-xs uppercase tracking-wider font-medium transition-colors cursor-pointer ${
                  activeMenuTab === 'cellar' ? 'bg-[#C9A96E] text-[#0D0F11] font-semibold' : 'text-[#A09D95] hover:text-[#FAF9F5]'
                }`}
              >
                Wine & Spirits
              </button>
            </div>
          </div>

          {/* Menu Items List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {menuItems[activeMenuTab].map((item, index) => (
              <div key={index} className="space-y-1 pb-4 border-b border-white/5">
                <div className="flex items-baseline justify-between">
                  <h4 className="font-serif text-lg text-[#FAF9F5]">{item.name}</h4>
                  <span className="font-mono text-sm text-[#C9A96E] ml-4 shrink-0">{item.price}</span>
                </div>
                <p className="text-xs text-[#A09D95] font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="pt-8 text-center border-t border-white/10 mt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#A09D95]">
            <span>Dietary preferences & bespoke vegan pairings prepared with 24-hour advance notice.</span>
            <button
              onClick={onReserveTable}
              className="hover-gold-line text-[#C9A96E] font-medium mt-2 sm:mt-0 cursor-pointer"
            >
              Book Dinner Table Online →
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
