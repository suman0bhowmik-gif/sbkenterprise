import React from 'react';
import { MapPin, Phone, Mail, Clock, ShieldCheck, Heart } from 'lucide-react';
import { BUSINESS_INFO } from '../data/designs';

interface GoogleFooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenBooking: () => void;
}

export const GoogleFooter: React.FC<GoogleFooterProps> = ({ onNavigate, onOpenBooking }) => {
  return (
    <footer className="bg-white border-t border-[#dadce0] text-xs text-[#5f6368] pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-column footer layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-[#dadce0]">
          
          {/* Col 1: Business Identity */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-[#1a73e8] text-white font-bold text-xs shadow-xs">
                SBk
              </span>
              <span className="font-bold text-base text-[#202124]">
                {BUSINESS_INFO.name}
              </span>
            </div>
            <p className="text-xs text-[#5f6368] leading-relaxed">
              {BUSINESS_INFO.tagline}. Handcrafted in Agartala, West Tripura with high-clarity glass, precision miter cuts, and solid timbers.
            </p>
            <div className="pt-1 flex items-center gap-1.5 text-[11px] text-[#137333] font-medium">
              <ShieldCheck className="w-4 h-4 text-[#188038]" />
              <span>Verified Local Business on Google</span>
            </div>
          </div>

          {/* Col 2: Workshop & Showroom Address */}
          <div className="space-y-2">
            <h4 className="font-bold text-xs uppercase tracking-wider text-[#202124]">
              Workshop & Showroom
            </h4>
            <div className="flex items-start gap-2 text-[#3c4043]">
              <MapPin className="w-4 h-4 text-[#d93025] shrink-0 mt-0.5" />
              <div>
                <span>{BUSINESS_INFO.addressLine1}</span>
                <span className="block">{BUSINESS_INFO.addressLine2}</span>
                <span className="text-[#5f6368] text-[11px] block">{BUSINESS_INFO.landmark}</span>
                <span className="block font-medium">{BUSINESS_INFO.city}, {BUSINESS_INFO.district} – {BUSINESS_INFO.pincode}</span>
              </div>
            </div>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${BUSINESS_INFO.mapsQuery}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1a73e8] hover:underline inline-block pt-1 text-[11px] font-medium"
            >
              Open in Google Maps →
            </a>
          </div>

          {/* Col 3: Hours & Support */}
          <div className="space-y-2">
            <h4 className="font-bold text-xs uppercase tracking-wider text-[#202124]">
              Hours & Custom Quotes
            </h4>
            <div className="space-y-1 text-[#3c4043]">
              <div className="flex justify-between">
                <span>Mon – Sat:</span>
                <span className="font-medium tabular-nums">9:30 AM – 8:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday:</span>
                <span className="font-medium tabular-nums">10:00 AM – 4:00 PM</span>
              </div>
              <div className="flex justify-between text-[#188038] pt-1">
                <span>Walk-ins:</span>
                <span className="font-medium">Welcome anytime</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="text-[#1a73e8] hover:underline text-[11px] font-semibold cursor-pointer"
              >
                Schedule an In-Store Consultation →
              </button>
            </div>
          </div>

          {/* Col 4: Contact & Free Delivery */}
          <div className="space-y-2">
            <h4 className="font-bold text-xs uppercase tracking-wider text-[#202124]">
              Direct Contact
            </h4>
            <div className="space-y-1.5">
              <a
                href={`tel:${BUSINESS_INFO.phoneNumeric}`}
                className="flex items-center gap-2 text-[#202124] hover:text-[#1a73e8] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#188038]" />
                <span className="font-bold tabular-nums">{BUSINESS_INFO.phone}</span>
              </a>

              <a
                href={`mailto:${BUSINESS_INFO.email}`}
                className="flex items-center gap-2 text-[#5f6368] hover:text-[#1a73e8] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#d93025]" />
                <span>{BUSINESS_INFO.email}</span>
              </a>
            </div>

            <div className="p-2.5 rounded-lg bg-[#f8fafd] border border-[#dadce0] mt-3">
              <span className="font-bold text-[#188038] block text-[11px]">✓ Free Home Delivery</span>
              <span className="text-[10px] text-[#5f6368]">Applicable to both photo frame sizes in Agartala.</span>
            </div>
          </div>

        </div>

        {/* Quiet Bottom Copyright Row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#80868b]">
          <div>
            © {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <button onClick={() => onNavigate('special-offer')} className="hover:text-[#202124]">Store Offer (₹218)</button>
            <span aria-hidden="true">·</span>
            <button onClick={() => onNavigate('designs-gallery')} className="hover:text-[#202124]">Photo Frames</button>
            <span aria-hidden="true">·</span>
            <button onClick={() => onNavigate('studio-customizer')} className="hover:text-[#202124]">Studio</button>
            <span aria-hidden="true">·</span>
            <button onClick={() => onNavigate('hours-location')} className="hover:text-[#202124]">Aralia Workshop</button>
          </div>
        </div>

      </div>
    </footer>
  );
};
