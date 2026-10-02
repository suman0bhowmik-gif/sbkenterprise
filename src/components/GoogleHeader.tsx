import React from 'react';
import { Phone, Calendar, ShoppingBag } from 'lucide-react';
import { BUSINESS_INFO } from '../data/designs';

interface GoogleHeaderProps {
  onOpenBooking: () => void;
  onOpenCart: () => void;
  cartCount: number;
  onNavigate: (sectionId: string) => void;
}

export const GoogleHeader: React.FC<GoogleHeaderProps> = ({
  onOpenBooking,
  onOpenCart,
  cartCount,
  onNavigate,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#dadce0] transition-shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Zone 1: Brand Zone - Single text element wordmark */}
        <div className="flex items-center gap-3">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-xl font-bold tracking-tight text-[#202124] hover:text-[#1a73e8] transition-colors flex items-center gap-2"
          >
            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#1a73e8] text-white font-bold text-sm shadow-sm">
              SBk
            </span>
            <span>Enterprise</span>
          </a>
        </div>

        {/* Zone 2: 4–6 nav links, 1–2 word labels, single-line */}
        <nav className="hidden md:flex items-center gap-5 text-sm font-medium text-[#5f6368]">
          <button
            onClick={() => onNavigate('pvc-service')}
            className="text-emerald-700 bg-emerald-50 hover:bg-emerald-100 px-2.5 py-1 rounded-full font-bold transition-colors whitespace-nowrap cursor-pointer flex items-center gap-1.5 border border-emerald-200 text-xs shadow-2xs"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>PVC কার্ড (ফ্রী ডেলিভারি)</span>
          </button>
          <button
            onClick={() => onNavigate('special-offer')}
            className="hover:text-[#1a73e8] transition-colors whitespace-nowrap cursor-pointer py-1"
          >
            Special Offer
          </button>
          <button
            onClick={() => onNavigate('designs-gallery')}
            className="hover:text-[#1a73e8] transition-colors whitespace-nowrap cursor-pointer py-1"
          >
            Photo Frames
          </button>
          <button
            onClick={() => onNavigate('studio-customizer')}
            className="hover:text-[#1a73e8] transition-colors whitespace-nowrap cursor-pointer py-1"
          >
            Studio Customizer
          </button>
          <button
            onClick={() => onNavigate('hours-location')}
            className="hover:text-[#1a73e8] transition-colors whitespace-nowrap cursor-pointer py-1"
          >
            Hours & Location
          </button>
          <button
            onClick={() => onNavigate('reviews')}
            className="hover:text-[#1a73e8] transition-colors whitespace-nowrap cursor-pointer py-1"
          >
            Google Reviews
          </button>
        </nav>

        {/* Zone 3: 1–2 primary actions */}
        <div className="flex items-center gap-3">
          {/* Cart Icon */}
          <button
            onClick={onOpenCart}
            aria-label="View Order Cart"
            className="relative p-2 text-[#5f6368] hover:text-[#202124] hover:bg-[#f1f3f4] rounded-full transition-colors cursor-pointer"
          >
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#d93025] text-white text-[11px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>

          {/* Quick Call */}
          <a
            href={`tel:${BUSINESS_INFO.phoneNumeric}`}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#1a73e8] bg-[#e8f0fe] hover:bg-[#d2e3fc] rounded-full transition-colors whitespace-nowrap"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Call Shop</span>
          </a>

          {/* Book In-Store Visit */}
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-[#1a73e8] hover:bg-[#1557bf] rounded-full shadow-sm hover:shadow transition-all whitespace-nowrap cursor-pointer active:scale-98"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Book In-Store Visit</span>
          </button>
        </div>
      </div>
    </header>
  );
};
