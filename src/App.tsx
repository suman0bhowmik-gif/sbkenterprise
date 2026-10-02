/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { TopWhatsAppBanner } from './components/TopWhatsAppBanner';
import { GoogleHeader } from './components/GoogleHeader';
import { PvcCardServiceBanner } from './components/PvcCardServiceBanner';
import { GoogleBusinessHero } from './components/GoogleBusinessHero';
import { SpecialOfferSection } from './components/SpecialOfferSection';
import { DesignsGallery } from './components/DesignsGallery';
import { FrameCustomizer } from './components/FrameCustomizer';
import { GoogleLocationCard } from './components/GoogleLocationCard';
import { GoogleReviews } from './components/GoogleReviews';
import { GoogleFooter } from './components/GoogleFooter';
import { BookingModal } from './components/BookingModal';
import { CartDrawer } from './components/CartDrawer';
import { CartItem, FrameDesign, CustomizerState } from './types';
import { BUSINESS_INFO } from './data/designs';
import { Phone, MessageCircle, Calendar } from 'lucide-react';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isDiscount33Applied, setIsDiscount33Applied] = useState(false);
  const handleToggleDiscount33 = () => setIsDiscount33Applied((prev) => !prev);

  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 'init-offer-1',
      title: 'Small Frame (8×11 in) · Store Offer',
      dimension: '8×11 in',
      frameName: 'Natural Burma Teak',
      glassType: '2mm Polish Float Glass',
      matBoard: 'Archival Off-White Mat',
      price: 218,
      quantity: 1,
    },
  ]);

  const [customizerInitial, setCustomizerInitial] = useState<Partial<CustomizerState>>({
    dimension: '8x11',
    frameColor: 'teak',
  });

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleAddToCart = (item: {
    title: string;
    dimension: string;
    frameName: string;
    glassType: string;
    matBoard: string;
    price: number;
    image?: string | null;
  }) => {
    const newItem: CartItem = {
      id: `cart-${Date.now()}-${Math.random()}`,
      title: item.title,
      dimension: item.dimension,
      frameName: item.frameName,
      glassType: item.glassType,
      matBoard: item.matBoard,
      price: item.price,
      quantity: 1,
      image: item.image,
    };

    setCartItems((prev) => [...prev, newItem]);
    setIsCartOpen(true);
  };

  const handleQuickOrderOffer = (size: 'small' | 'large') => {
    const basePrice = size === 'small' ? 218 : 327;
    const price = isDiscount33Applied ? (size === 'small' ? 146 : 219) : basePrice;
    const title = size === 'small'
      ? `Small Frame (8×11 in) · Store Offer${isDiscount33Applied ? ' (33% OFF)' : ''}`
      : `Large Frame (8×12 in) · Store Offer${isDiscount33Applied ? ' (33% OFF)' : ''}`;
    const dim = size === 'small' ? '8×11 in' : '8×12 in';

    handleAddToCart({
      title,
      dimension: dim,
      frameName: 'Natural Burma Teak',
      glassType: '2mm Polish Float Glass',
      matBoard: 'Archival Off-White Mat',
      price,
    });
  };

  const handleCustomizeDesign = (design: FrameDesign) => {
    let dim: '8x11' | '8x12' | '12x18' | '16x24' | 'custom' = '8x11';
    if (design.dimensions.includes('8×12')) dim = '8x12';
    else if (design.dimensions.includes('12×16') || design.dimensions.includes('12×18')) dim = '12x18';
    else if (design.dimensions.includes('16×24')) dim = '16x24';

    let colorId = 'teak';
    if (design.frameColor.includes('#1e1e1e') || design.frameColor.includes('#2b1d15')) colorId = 'black';
    else if (design.frameColor.includes('#cda250') || design.frameColor.includes('#c5b358')) colorId = 'gold';
    else if (design.frameColor.includes('#cfb590')) colorId = 'oak';
    else if (design.frameColor.includes('#4f1414')) colorId = 'rosewood';

    setCustomizerInitial({
      dimension: dim,
      frameColor: colorId,
    });

    handleNavigate('studio-customizer');
  };

  const handleCustomizeInStudioOffer = (size: '8x11' | '8x12') => {
    setCustomizerInitial({
      dimension: size,
      frameColor: 'teak',
    });
    handleNavigate('studio-customizer');
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafd] text-[#202124]">
      {/* Above all: Direct WhatsApp Photo Frame Collection Banner */}
      <TopWhatsAppBanner />

      {/* Google-like Clean Header */}
      <GoogleHeader
        onOpenBooking={() => setIsBookingOpen(true)}
        onOpenCart={() => setIsCartOpen(true)}
        cartCount={totalCartCount}
        onNavigate={handleNavigate}
      />

      <main className="flex-1">
        {/* Top Featured Bengali Showcase: PVC Smart Cards with 3KM Free Home Delivery */}
        <PvcCardServiceBanner />

        {/* Google Business Profile Hero Card */}
        <GoogleBusinessHero
          onOpenBooking={() => setIsBookingOpen(true)}
          onNavigateToCustomizer={() => handleNavigate('studio-customizer')}
          onNavigateToDesigns={() => handleNavigate('designs-gallery')}
          onNavigateToLocation={() => handleNavigate('hours-location')}
          onQuickOrderOffer={handleQuickOrderOffer}
        />

        {/* Store Offer Section (Small 8×11 ₹218, Large 8×12 ₹327, Free Home Delivery) */}
        <SpecialOfferSection
          onAddToCart={handleAddToCart}
          onCustomizeInStudio={handleCustomizeInStudioOffer}
          isDiscount33Applied={isDiscount33Applied}
          onToggleDiscount33={handleToggleDiscount33}
        />

        {/* Browse All 13 Designs Gallery */}
        <DesignsGallery
          onCustomizeDesign={handleCustomizeDesign}
          onAddToCart={handleAddToCart}
          isDiscount33Applied={isDiscount33Applied}
          onToggleDiscount33={handleToggleDiscount33}
        />

        {/* Customize in Studio (Interactive Picture Frame Visualizer) */}
        <FrameCustomizer
          onAddToCart={handleAddToCart}
          onOpenBooking={() => setIsBookingOpen(true)}
          initialState={customizerInitial}
          isDiscount33Applied={isDiscount33Applied}
          onToggleDiscount33={handleToggleDiscount33}
        />

        {/* Workshop & Showroom, Google Maps Location & Studio Hours */}
        <GoogleLocationCard
          onOpenBooking={() => setIsBookingOpen(true)}
        />

        {/* Google Reviews */}
        <GoogleReviews />
      </main>

      {/* Google-Style Footer */}
      <GoogleFooter
        onNavigate={handleNavigate}
        onOpenBooking={() => setIsBookingOpen(true)}
      />

      {/* Book In-Store Visit Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />

      {/* Cart & Free Delivery Checkout Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        isDiscount33Applied={isDiscount33Applied}
        onToggleDiscount33={handleToggleDiscount33}
      />

      {/* Floating Quick Action for Mobile / Fast Track */}
      <aside aria-label="Quick contact" className="fixed bottom-4 right-4 z-30 flex items-center gap-2">
        <a
          href={`https://wa.me/${BUSINESS_INFO.phoneNumeric}?text=Hello%20SBk%20Enterprise,%20I%20have%20an%20inquiry%20regarding%20custom%20picture%20framing.`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-[#25d366] hover:bg-[#1ebc57] text-white flex items-center justify-center shadow-lg transition-transform hover:scale-105"
          title="Chat with SBk Enterprise on WhatsApp"
        >
          <MessageCircle className="w-6 h-6" />
        </a>

        <button
          onClick={() => setIsBookingOpen(true)}
          className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#1a73e8] hover:bg-[#1557bf] text-white text-xs font-semibold shadow-lg transition-transform hover:scale-102 cursor-pointer"
        >
          <Calendar className="w-4 h-4" />
          <span>Book Visit</span>
        </button>
      </aside>
    </div>
  );
}
