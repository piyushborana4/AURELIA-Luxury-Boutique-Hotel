/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FloatingBookingBar } from './components/FloatingBookingBar';
import { Introduction } from './components/Introduction';
import { RoomsSection } from './components/RoomsSection';
import { FeaturedRoom } from './components/FeaturedRoom';
import { ExperiencesSection } from './components/ExperiencesSection';
import { DiningSection } from './components/DiningSection';
import { WellnessSection } from './components/WellnessSection';
import { AmenitiesSection } from './components/AmenitiesSection';
import { GallerySection } from './components/GallerySection';
import { AboutSection } from './components/AboutSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { SpecialOffersSection } from './components/SpecialOffersSection';
import { LocationSection } from './components/LocationSection';
import { NewsletterSection } from './components/NewsletterSection';
import { Footer } from './components/Footer';

// Modals
import { BookingModal } from './components/BookingModal';
import { RoomDetailModal } from './components/RoomDetailModal';
import { TableReservationModal } from './components/TableReservationModal';
import { ExperienceReservationModal } from './components/ExperienceReservationModal';

import { Room, Experience, ROOMS_DATA } from './data/hotelData';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedRoomForBooking, setSelectedRoomForBooking] = useState<Room | null>(null);
  const [selectedRoomForDetail, setSelectedRoomForDetail] = useState<Room | null>(null);
  const [tableModalOpen, setTableModalOpen] = useState(false);
  const [experienceModalOpen, setExperienceModalOpen] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null);

  // Filter params from FloatingBar
  const [bookingDates, setBookingDates] = useState<{
    checkIn?: string;
    checkOut?: string;
    adults?: number;
    children?: number;
  }>({});

  // Scroll Progress Bar
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercent = (totalScroll / windowHeight) * 100;
      setScrollProgress(scrollPercent);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenBooking = (room?: Room) => {
    setSelectedRoomForBooking(room || null);
    setBookingModalOpen(true);
  };

  const handleSelectRoomDetail = (room: Room) => {
    setSelectedRoomForDetail(room);
  };

  const handleBookFromDetail = (room: Room) => {
    setSelectedRoomForDetail(null);
    setSelectedRoomForBooking(room);
    setBookingModalOpen(true);
  };

  const handleCheckAvailability = (params: {
    checkIn: string;
    checkOut: string;
    adults: number;
    children: number;
    roomType: string;
  }) => {
    setBookingDates({
      checkIn: params.checkIn,
      checkOut: params.checkOut,
      adults: params.adults,
      children: params.children,
    });
    // Scroll to rooms and open booking modal
    const roomsSection = document.getElementById('rooms');
    if (roomsSection) {
      roomsSection.scrollIntoView({ behavior: 'smooth' });
    }
    setBookingModalOpen(true);
  };

  const handleExplore = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleReserveExperience = (exp: Experience) => {
    setSelectedExperience(exp);
    setExperienceModalOpen(true);
  };

  const handleReserveTable = () => {
    setTableModalOpen(true);
  };

  const handleClaimOffer = () => {
    setSelectedRoomForBooking(ROOMS_DATA[1]); // Signature Suite default
    setBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0D0F11] text-[#E8E4DC] relative selection:bg-[#C9A96E]/30 selection:text-[#FAF9F5]">
      
      {/* Scroll Progress Indicator */}
      <div
        className="fixed top-0 left-0 h-[2.5px] bg-[#C9A96E] z-50 transition-all duration-100 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Navigation */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* Main Content Sections */}
      <main id="main-content">
        {/* 1. Fullscreen Hero Section */}
        <Hero
          onOpenBooking={() => handleOpenBooking()}
          onExplore={handleExplore}
        />

        {/* 2. Floating Booking Bar */}
        <FloatingBookingBar onCheckAvailability={handleCheckAvailability} />

        {/* 3. Introduction Section (Asymmetrical layout) */}
        <Introduction />

        {/* 4. Rooms & Suites Grid */}
        <RoomsSection
          onSelectRoom={handleSelectRoomDetail}
          onBookRoom={handleOpenBooking}
        />

        {/* 5. Featured Room Experience (The Signature Suite) */}
        <FeaturedRoom
          onDiscover={handleSelectRoomDetail}
          onBook={handleOpenBooking}
        />

        {/* 6. Curated Experiences Section */}
        <ExperiencesSection onReserveExperience={handleReserveExperience} />

        {/* 7. Dining Experience (Ember Restaurant) */}
        <DiningSection onReserveTable={handleReserveTable} />

        {/* 8. Wellness & Spa Section */}
        <WellnessSection onBookSpa={() => handleReserveExperience(ROOMS_DATA ? {
          id: 'spa-ritual',
          title: 'Aurelia Signature Spa Ritual',
          category: 'Rejuvenation',
          duration: '90 Minutes',
          timing: 'By Reservation',
          description: 'Customized therapeutic body massage and skin restoration using rare Himalayan cedarwood, jasmine, and cold-pressed cold oils.',
          image: '/src/assets/images/wellness_spa_pool_1790869781996.jpg',
          highlights: ['Hot Basalt Stones', 'Organic Himalayan Botanicals', 'Private Hydrotherapy Suite']
        } : null as any)} />

        {/* 9. Hotel Amenities (Clean Icon Grid) */}
        <AmenitiesSection />

        {/* 10. Asymmetric Masonry Gallery with Lightbox */}
        <GallerySection />

        {/* 11. Storytelling & Animated Stats */}
        <AboutSection />

        {/* 12. Guest Testimonials Carousel */}
        <TestimonialsSection />

        {/* 13. Special Curated Offers */}
        <SpecialOffersSection onClaimOffer={handleClaimOffer} />

        {/* 14. Location & Map Section */}
        <LocationSection />

        {/* 15. Minimalist Newsletter */}
        <NewsletterSection />
      </main>

      {/* Footer */}
      <Footer onOpenBooking={() => handleOpenBooking()} />

      {/* Modals */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialRoom={selectedRoomForBooking}
        initialCheckIn={bookingDates.checkIn}
        initialCheckOut={bookingDates.checkOut}
        initialAdults={bookingDates.adults}
        initialChildren={bookingDates.children}
      />

      <RoomDetailModal
        room={selectedRoomForDetail}
        isOpen={Boolean(selectedRoomForDetail)}
        onClose={() => setSelectedRoomForDetail(null)}
        onBook={handleBookFromDetail}
      />

      <TableReservationModal
        isOpen={tableModalOpen}
        onClose={() => setTableModalOpen(false)}
      />

      <ExperienceReservationModal
        experience={selectedExperience}
        isOpen={experienceModalOpen}
        onClose={() => setExperienceModalOpen(false)}
      />

    </div>
  );
}
