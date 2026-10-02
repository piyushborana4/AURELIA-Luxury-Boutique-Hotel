import { IMAGES } from '../assets/images';

export interface Room {
  id: string;
  name: string;
  subtitle: string;
  tagline: string;
  size: string;
  bed: string;
  view: string;
  capacity: string;
  pricePerNight: number;
  featured?: boolean;
  image: string;
  gallery: string[];
  description: string;
  features: string[];
  amenities: string[];
}

export interface Experience {
  id: string;
  title: string;
  category: string;
  duration: string;
  timing: string;
  description: string;
  image: string;
  highlights: string[];
}

export interface Testimonial {
  id: string;
  author: string;
  location: string;
  rating: number;
  text: string;
  stayDate: string;
  roomType: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'architecture' | 'rooms' | 'dining' | 'wellness' | 'moments';
  caption: string;
  image: string;
  spanClass: string;
}

export const ROOMS_DATA: Room[] = [
  {
    id: 'aurelia-deluxe',
    name: 'Aurelia Deluxe',
    subtitle: 'Intimate Serenity',
    tagline: 'A sanctuary of quiet comfort with botanical garden panoramas.',
    size: '420 sq ft',
    bed: 'King Bed',
    view: 'Garden View',
    capacity: '2 Guests',
    pricePerNight: 18000,
    featured: false,
    image: IMAGES.room,
    gallery: [
      IMAGES.room,
      IMAGES.hero,
      IMAGES.wellness
    ],
    description: 'Designed for effortless repose, the Aurelia Deluxe blends soft natural textures with tailored millwork. Wake up to floor-to-ceiling garden greenery, bespoke Italian linen, and custom herbal tea selections.',
    features: ['Plush King Bed', 'En-Suite Rain Shower', 'Handcrafted Teak Wardrobes', 'Bose Sound System'],
    amenities: ['Artisanal Breakfast Included', 'High-Speed Wi-Fi', 'Diptique Bath Amenities', 'Daily Botanical Turndown', 'Smart Climate Control', 'Nespresso Atelier Station']
  },
  {
    id: 'signature-suite',
    name: 'Signature Suite',
    subtitle: 'The Architectural Jewel',
    tagline: 'Your private retreat above the city with an expansive open terrace.',
    size: '650 sq ft',
    bed: 'King Bed',
    view: 'Private Balcony & Skyline',
    capacity: '2 Guests',
    pricePerNight: 28000,
    featured: true,
    image: IMAGES.room,
    gallery: [
      IMAGES.room,
      IMAGES.hero,
      IMAGES.lounge
    ],
    description: 'Our most sought-after accommodation. The Signature Suite features an open architectural layout with a dedicated reading nook, deep soaking bathtub, and a private teak terrace overlooking the sunset horizon.',
    features: ['650 sq ft Living Space', 'Private Teak Balcony', 'Freestanding Soaking Bathtub', 'Walk-in Dressing Room'],
    amenities: ['Complimentary Gourmet Breakfast', 'Sunset Cocktail Hour Access', 'Personalized Pillow Menu', 'Bang & Olufsen Acoustics', 'Luxury Butler Assistance', 'Priority Dining Reservations']
  },
  {
    id: 'grand-terrace-suite',
    name: 'Grand Terrace Suite',
    subtitle: 'Unrivaled Luxury',
    tagline: 'Expansive private terrace with outdoor lounge and handcrafted marble bath.',
    size: '900 sq ft',
    bed: 'King Bed',
    view: 'Private Terrace & Pool',
    capacity: '2 - 3 Guests',
    pricePerNight: 42000,
    featured: false,
    image: IMAGES.hero,
    gallery: [
      IMAGES.hero,
      IMAGES.room,
      IMAGES.wellness
    ],
    description: 'A masterpiece of contemporary hospitality. Spread across 900 square feet, the Grand Terrace Suite boasts a secluded sun deck with private daybeds, a separate parlor for intimate dining, and marble bathroom suite.',
    features: ['900 sq ft of Space', 'Secluded Sun Deck', 'Hand-Carved Stone Bathtub', 'Private Dining Parlor'],
    amenities: ['Round-trip Airport Chauffeur', 'Daily In-Suite Spa Treatment', 'Champagne on Arrival', '24/7 Dedicated Concierge', 'Complimentary Minibar Refresh', 'Late Check-out Guarantee']
  },
  {
    id: 'aurelia-penthouse',
    name: 'Aurelia Royal Residence',
    subtitle: 'Intimate Masterwork',
    tagline: 'Top-tier dual level villa with heated private plunge pool and dedicated chef service.',
    size: '1,400 sq ft',
    bed: '2 King Beds',
    view: '360° Garden & Horizon',
    capacity: '4 Guests',
    pricePerNight: 68000,
    featured: false,
    image: IMAGES.wellness,
    gallery: [
      IMAGES.wellness,
      IMAGES.hero,
      IMAGES.room
    ],
    description: 'The pinnacle of exclusivity. The Royal Residence occupies an isolated garden wing featuring a private heated plunge pool, dual primary suites, wine cellar showcase, and full private culinary service.',
    features: ['1,400 sq ft Dual Suite', 'Heated Private Plunge Pool', 'Dedicated Private Butler', 'Sommelier Curated Wine Cellar'],
    amenities: ['Private Chef Tastings', 'Luxury Chauffeur Service', 'Unlimited Spa Sanctuary Access', 'Bespoke In-Suite Check-in', 'Private Terrace Dining']
  }
];

export const EXPERIENCES_DATA: Experience[] = [
  {
    id: 'sunrise-yoga',
    title: 'Sunrise Yoga & Meditation',
    category: 'Wellness',
    duration: '75 Minutes',
    timing: '06:30 AM Daily',
    description: 'Begin the day with guided pranayama and vinyasa yoga on our open-air pavilion overlooking the morning mist gardens.',
    image: IMAGES.wellness,
    highlights: ['Certified Master Yogis', 'Singing Bowl Sound Bath', 'Botanical Herbal Elixirs']
  },
  {
    id: 'private-dining',
    title: 'Chef\'s Hearth Private Dining',
    category: 'Culinary',
    duration: '2.5 Hours',
    timing: '7:30 PM & 9:00 PM',
    description: 'An exclusive multi-course dining journey created personally by Chef Vikram, featuring wood-fired heirloom ingredients and vintage wine pairings.',
    image: IMAGES.dining,
    highlights: ['7-Course Seasonal Menu', 'Sommelier Cellar Selection', 'Private Candlelit Courtyard']
  },
  {
    id: 'sunset-lounge',
    title: 'Golden Hour Sunset Lounge',
    category: 'Social & Nightlife',
    duration: 'Evenings',
    timing: '05:30 PM - 08:30 PM',
    description: 'Craft cocktails, acoustic vinyl sessions, and golden-hour reflections across the horizon infinity pool.',
    image: IMAGES.lounge,
    highlights: ['Artisanal Botanical Cocktails', 'Acoustic Vinyl Curations', 'Open Fire Table Ambience']
  },
  {
    id: 'spa-ritual',
    title: 'Aurelia Signature Spa Ritual',
    category: 'Rejuvenation',
    duration: '90 Minutes',
    timing: 'By Reservation',
    description: 'Customized therapeutic body massage and skin restoration using rare Himalayan cedarwood, jasmine, and cold-pressed cold oils.',
    image: IMAGES.wellness,
    highlights: ['Hot Basalt Stones', 'Organic Himalayan Botanicals', 'Private Hydrotherapy Suite']
  },
  {
    id: 'city-discovery',
    title: 'Curated Heritage Discovery',
    category: 'Exploration',
    duration: '3.5 Hours',
    timing: '09:00 AM & 03:00 PM',
    description: 'A private chauffeur-driven insider journey into Mumbai\'s architectural landmarks, hidden art galleries, and historic coastal paths.',
    image: IMAGES.hero,
    highlights: ['Private Luxury Chauffeur', 'Local Architectural Historian', 'Curated Artisan Tastings']
  },
  {
    id: 'nature-walk',
    title: 'Botanical Estate Walk',
    category: 'Nature',
    duration: '60 Minutes',
    timing: '07:30 AM & 05:00 PM',
    description: 'Slow down and reconnect along guided pathways through 4 acres of mature banyan groves, orchid gardens, and tranquil water features.',
    image: IMAGES.room,
    highlights: ['Over 120 Native Flora Species', 'Naturalist Guide', 'Bird Watching Station']
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'The Evening Reflection Pool',
    category: 'architecture',
    caption: 'Travertine stone terraces illuminated at golden hour.',
    image: IMAGES.hero,
    spanClass: 'col-span-1 md:col-span-2 row-span-2'
  },
  {
    id: 'gal-2',
    title: 'The Signature Suite Living Quarters',
    category: 'rooms',
    caption: 'Natural linen, warm teak, and floor-to-ceiling greenery.',
    image: IMAGES.room,
    spanClass: 'col-span-1 md:col-span-1 row-span-1'
  },
  {
    id: 'gal-3',
    title: 'Ember Open Hearth Dining',
    category: 'dining',
    caption: 'Wood-fired gastronomy in an intimate, moody setting.',
    image: IMAGES.dining,
    spanClass: 'col-span-1 md:col-span-1 row-span-1'
  },
  {
    id: 'gal-4',
    title: 'Infinity Wellness Sanctuary',
    category: 'wellness',
    caption: 'Indoor-outdoor heated stone plunge pool and relaxation arcade.',
    image: IMAGES.wellness,
    spanClass: 'col-span-1 md:col-span-1 row-span-2'
  },
  {
    id: 'gal-5',
    title: 'The Rooftop Firepit Lounge',
    category: 'moments',
    caption: 'Handcrafted mixology against sunset skies.',
    image: IMAGES.lounge,
    spanClass: 'col-span-1 md:col-span-2 row-span-1'
  },
  {
    id: 'gal-6',
    title: 'Botanical Courtyard Morning Light',
    category: 'architecture',
    caption: 'Calm water features connecting the guest villas.',
    image: IMAGES.hero,
    spanClass: 'col-span-1 md:col-span-1 row-span-1'
  }
];


export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'rev-1',
    author: 'Riya Mehta',
    location: 'Mumbai & London',
    rating: 5,
    text: 'From the moment we arrived, everything felt effortless. The calm architecture, delicate fragrance of jasmine in the corridors, and the dinner at Ember were unforgettable.',
    stayDate: 'Stayed in Signature Suite',
    roomType: 'Signature Suite'
  },
  {
    id: 'rev-2',
    author: 'Daniel Carter',
    location: 'San Francisco, CA',
    rating: 5,
    text: 'One of the most peaceful hotel experiences we\'ve ever had. Every single detail felt deeply intentional — from the acoustic stillness of the suite to the morning sunrise yoga.',
    stayDate: 'Stayed in Grand Terrace Suite',
    roomType: 'Grand Terrace Suite'
  },
  {
    id: 'rev-3',
    author: 'Sophia Williams',
    location: 'Melbourne, Australia',
    rating: 5,
    text: 'The room, food, and genuine hospitality were beyond exceptional. Aurelia doesn\'t feel like a standard luxury chain — it feels like an intimate, private residence of high taste.',
    stayDate: 'Stayed in Aurelia Deluxe',
    roomType: 'Aurelia Deluxe'
  },
  {
    id: 'rev-4',
    author: 'Aarav & Devika Kapoor',
    location: 'New Delhi, India',
    rating: 5,
    text: 'We celebrated our anniversary here and were blown away. The private terrace dinner and the attentiveness of the team made us feel completely cherished without ever intruding.',
    stayDate: 'Stayed in Aurelia Royal Residence',
    roomType: 'Royal Residence'
  }
];

export const STATS_DATA = [
  { label: 'Rooms & Suites', value: 42, suffix: '' },
  { label: 'Years of Hospitality', value: 18, suffix: '' },
  { label: 'Guests Hosted', value: 27, suffix: 'K+' },
  { label: 'Guest Rating', value: 4.9, suffix: ' / 5.0' },
];
