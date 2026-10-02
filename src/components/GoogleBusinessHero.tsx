import React, { useState, useEffect } from 'react';
import { 
  Star, 
  MapPin, 
  Phone, 
  Clock, 
  CheckCircle2, 
  ExternalLink, 
  Bookmark, 
  Share2, 
  Calendar, 
  Sliders, 
  Grid,
  Truck,
  ShieldCheck,
  ChevronDown
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/designs';
import { getStoreStatus, StoreStatus } from '../utils/timeHelper';

interface GoogleBusinessHeroProps {
  onOpenBooking: () => void;
  onNavigateToCustomizer: () => void;
  onNavigateToDesigns: () => void;
  onNavigateToLocation: () => void;
  onQuickOrderOffer: (size: 'small' | 'large') => void;
}

export const GoogleBusinessHero: React.FC<GoogleBusinessHeroProps> = ({
  onOpenBooking,
  onNavigateToCustomizer,
  onNavigateToDesigns,
  onNavigateToLocation,
  onQuickOrderOffer,
}) => {
  const [status, setStatus] = useState<StoreStatus>(getStoreStatus());
  const [saved, setSaved] = useState(false);
  const [copied, setCopied] = useState(false);
  const [hoursOpen, setHoursOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setStatus(getStoreStatus());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'SBk Enterprise - Custom Picture Framing Agartala',
        text: 'Custom picture framing, glass works, canvas mounting in Aralia, Agartala. Opposite Gate Water Tank.',
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section className="relative pt-6 pb-12 overflow-hidden bg-gradient-to-b from-[#f8fafd] via-white to-[#f8fafd]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Google Search Bar Mockup */}
        <div className="max-w-2xl mx-auto mb-8 bg-white border border-[#dadce0] rounded-full px-5 py-3 shadow-xs hover:shadow-md transition-shadow flex items-center justify-between text-sm">
          <div className="flex items-center gap-3 text-[#202124] overflow-hidden">
            <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.65v3.03h3.88c2.27-2.09 3.66-5.17 3.66-9.12z" />
              <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.03c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.27v3.13C3.26 21.36 7.35 24 12 24z" />
              <path fill="#FBBC05" d="M5.28 14.29c-.25-.72-.38-1.49-.38-2.29s.13-1.57.38-2.29V6.58H1.27C.46 8.2 0 10.05 0 12s.46 3.8 1.27 5.42l4.01-3.13z" />
              <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.35 0 3.26 2.64 1.27 6.58l4.01 3.13c.95-2.83 3.6-4.96 6.72-4.96z" />
            </svg>
            <span className="font-medium truncate">sbk enterprise picture framing agartala</span>
          </div>
          <span className="text-xs text-[#1a73e8] font-semibold whitespace-nowrap pl-2">
            Verified on Google
          </span>
        </div>

        {/* Main Google Business Profile Entity Box */}
        <div className="bg-white rounded-2xl border border-[#dadce0] p-6 sm:p-8 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left 8 cols: Business details & Google profile controls */}
            <div className="lg:col-span-8 space-y-5">
              
              {/* Category & Verified Badge */}
              <div className="flex flex-wrap items-center gap-2 text-xs text-[#5f6368]">
                <span className="font-semibold text-[#1a73e8] uppercase tracking-wider">
                  Workshop & Showroom
                </span>
                <span aria-hidden="true">·</span>
                <span>Custom Picture Framer in Agartala</span>
                <span aria-hidden="true">·</span>
                <span className="inline-flex items-center gap-1 text-[#137333] font-medium">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Verified Business Profile
                </span>
              </div>

              {/* Title & Headline */}
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#202124]">
                  {BUSINESS_INFO.name}
                </h1>
                <p className="mt-2 text-base sm:text-lg text-[#3c4043] leading-relaxed">
                  {BUSINESS_INFO.tagline}. Located opposite Gate Water Tank in Aralia, Agartala.
                </p>
              </div>

              {/* Google Reviews & Rating Bar */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <div className="flex items-center gap-1 bg-[#fef7e0] border border-[#fce8b2] px-2.5 py-1 rounded-md">
                  <span className="text-sm font-bold text-[#b06000]">4.9</span>
                  <div className="flex items-center text-[#f29900]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                </div>
                <span className="text-sm text-[#5f6368]">
                  <strong className="text-[#202124] font-semibold">184 Google Reviews</strong>
                </span>
                <span aria-hidden="true" className="text-[#dadce0]">·</span>
                <span className="text-sm text-[#188038] font-medium flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4" />
                  Free Home Delivery in Agartala
                </span>
              </div>

              {/* Live Hours & Location Row */}
              <div className="pt-2 space-y-2 border-t border-[#f1f3f4]">
                <div className="flex flex-wrap items-center gap-2 text-sm">
                  <Clock className="w-4 h-4 text-[#5f6368] shrink-0" />
                  <span
                    className={`inline-flex items-center gap-1.5 font-semibold ${
                      status.isOpen ? 'text-[#188038]' : 'text-[#d93025]'
                    }`}
                  >
                    <span
                      className={`w-2 h-2 rounded-full ${
                        status.isOpen ? 'bg-[#188038] animate-pulse' : 'bg-[#d93025]'
                      }`}
                    />
                    {status.statusText}
                  </span>
                  <span className="text-[#5f6368]">· {status.nextChangeText}</span>
                  <button
                    onClick={() => setHoursOpen(!hoursOpen)}
                    className="text-xs text-[#1a73e8] hover:underline inline-flex items-center gap-0.5 cursor-pointer ml-1"
                  >
                    See all hours <ChevronDown className={`w-3 h-3 transition-transform ${hoursOpen ? 'rotate-180' : ''}`} />
                  </button>
                </div>

                {/* Collapsible Hours Table */}
                {hoursOpen && (
                  <div className="p-3 bg-[#f8f9fa] rounded-lg border border-[#dadce0] text-xs text-[#3c4043] space-y-1 mt-2">
                    <div className="flex justify-between font-medium py-0.5 border-b border-[#e8eaed]">
                      <span>Monday – Saturday</span>
                      <span>9:30 AM – 8:00 PM</span>
                    </div>
                    <div className="flex justify-between font-medium py-0.5 border-b border-[#e8eaed]">
                      <span>Sunday</span>
                      <span>10:00 AM – 4:00 PM</span>
                    </div>
                    <div className="flex justify-between text-[#1a73e8] pt-1">
                      <span>Custom Quotes</span>
                      <span>Walk-ins Welcome</span>
                    </div>
                  </div>
                )}

                <div className="flex items-start gap-2 text-sm text-[#3c4043]">
                  <MapPin className="w-4 h-4 text-[#d93025] shrink-0 mt-0.5" />
                  <div>
                    <span>{BUSINESS_INFO.addressLine1}, {BUSINESS_INFO.addressLine2}</span>
                    <span className="text-[#5f6368] block text-xs">
                      {BUSINESS_INFO.landmark}, {BUSINESS_INFO.city}, {BUSINESS_INFO.district} – {BUSINESS_INFO.pincode}
                    </span>
                  </div>
                </div>
              </div>

              {/* Google Business Action Row */}
              <div className="pt-3 flex flex-wrap items-center gap-3">
                <button
                  onClick={onNavigateToLocation}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-[#dadce0] hover:bg-[#f1f3f4] text-xs font-semibold text-[#1a73e8] transition-colors cursor-pointer"
                >
                  <MapPin className="w-4 h-4 text-[#1a73e8]" />
                  <span>Google Maps</span>
                </button>

                <button
                  onClick={onOpenBooking}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1a73e8] hover:bg-[#1557bf] text-xs font-semibold text-white shadow-sm hover:shadow transition-all cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book In-Store Visit</span>
                </button>

                <a
                  href={`tel:${BUSINESS_INFO.phoneNumeric}`}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-[#dadce0] hover:bg-[#f1f3f4] text-xs font-semibold text-[#3c4043] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#188038]" />
                  <span>{BUSINESS_INFO.phone}</span>
                </a>

                <button
                  onClick={() => setSaved(!saved)}
                  className={`inline-flex items-center gap-1.5 px-3 py-2.5 rounded-full border text-xs font-medium transition-colors cursor-pointer ${
                    saved
                      ? 'border-[#1a73e8] bg-[#e8f0fe] text-[#1a73e8]'
                      : 'border-[#dadce0] hover:bg-[#f1f3f4] text-[#5f6368]'
                  }`}
                >
                  <Bookmark className="w-3.5 h-3.5" />
                  <span>{saved ? 'Saved' : 'Save'}</span>
                </button>

                <button
                  onClick={handleShare}
                  className="inline-flex items-center gap-1.5 px-3 py-2.5 rounded-full border border-[#dadce0] hover:bg-[#f1f3f4] text-xs font-medium text-[#5f6368] transition-colors cursor-pointer"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span>{copied ? 'Copied Link!' : 'Share'}</span>
                </button>
              </div>

              {/* Core Feature CTAs: Browse All 13 Designs & Customize in Studio */}
              <div className="pt-4 flex flex-wrap items-center gap-3">
                <button
                  onClick={onNavigateToDesigns}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#202124] hover:bg-[#3c4043] text-white text-sm font-semibold transition-all cursor-pointer shadow-sm"
                >
                  <Grid className="w-4 h-4" />
                  <span>Browse Two Photo Frames</span>
                </button>

                <button
                  onClick={onNavigateToCustomizer}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white border-2 border-[#1a73e8] text-[#1a73e8] hover:bg-[#f8fafd] text-sm font-semibold transition-all cursor-pointer shadow-xs"
                >
                  <Sliders className="w-4 h-4" />
                  <span>Customize in Studio</span>
                </button>
              </div>

            </div>

            {/* Right 4 cols: Special Store Offer Spotlight Box */}
            <div className="lg:col-span-4 bg-gradient-to-br from-[#e8f0fe] via-[#f1f3f4] to-[#e6f4ea] rounded-2xl p-6 border border-[#dadce0] relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-[#188038] text-white text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-bl-lg flex items-center gap-1 shadow-xs">
                <Truck className="w-3 h-3" />
                Free Home Delivery
              </div>

              <div className="text-xs font-bold uppercase tracking-wider text-[#1a73e8] mb-1">
                Special Store Offer
              </div>
              <h2 className="text-xl font-bold text-[#202124]">
                Handcrafted Photo Frames
              </h2>
              <p className="text-xs text-[#5f6368] mt-1">
                Solid wood moulding, high clarity float glass, and acid-free backing.
              </p>

              {/* Actual Workshop Photo Showcase */}
              <div className="mt-3 p-2 bg-white/90 rounded-xl border border-[#dadce0] flex items-center gap-2.5 shadow-2xs">
                <img
                  src="/real-custom-collage-frame.svg"
                  alt="Real customer finished frame"
                  className="w-12 h-16 object-contain drop-shadow-xs shrink-0"
                  referrerPolicy="no-referrer"
                />
                <div className="text-left">
                  <span className="font-bold text-[#188038] block text-[11px]">
                    ✓ Real Customer Finished Frame
                  </span>
                  <p className="text-[10px] text-[#5f6368] mt-0.5 leading-snug">
                    Real 8×12 in Birthday & Bestie Collage Frame handcrafted in solid matte black at our Aralia workshop.
                  </p>
                </div>
              </div>

              {/* Two Offer Price Cards */}
              <div className="mt-4 space-y-3">
                {/* Small Frame 8x11 */}
                <div className="bg-white rounded-xl p-3.5 border border-[#dadce0] flex items-center justify-between shadow-xs">
                  <div>
                    <span className="text-xs text-[#5f6368] block">Small Frames (8×11 in)</span>
                    <div className="flex items-baseline gap-1.5 mt-0.5">
                      <span className="text-2xl font-bold text-[#202124] tabular-nums">₹218</span>
                      <span className="text-xs line-through text-[#80868b] tabular-nums">₹280</span>
                    </div>
                  </div>
                  <button
                    onClick={() => onQuickOrderOffer('small')}
                    className="px-3 py-1.5 rounded-lg bg-[#1a73e8] hover:bg-[#1557bf] text-white text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap"
                  >
                    Quick Order
                  </button>
                </div>

                {/* Large Frame 8x12 */}
                <div className="bg-white rounded-xl p-3.5 border border-[#dadce0] flex items-center justify-between shadow-xs">
                  <div>
                    <span className="text-xs text-[#5f6368] block">Large Frames (8×12 in)</span>
                    <div className="flex items-baseline gap-1.5 mt-0.5">
                      <span className="text-2xl font-bold text-[#202124] tabular-nums">₹327</span>
                      <span className="text-xs line-through text-[#80868b] tabular-nums">₹420</span>
                    </div>
                  </div>
                  <button
                    onClick={() => onQuickOrderOffer('large')}
                    className="px-3 py-1.5 rounded-lg bg-[#1a73e8] hover:bg-[#1557bf] text-white text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap"
                  >
                    Quick Order
                  </button>
                </div>
              </div>

              {/* Offer Key Highlights */}
              <ul className="mt-4 space-y-1.5 text-xs text-[#3c4043]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#188038] shrink-0" />
                  <span>✓ 100% Free Home Delivery in Agartala</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#188038] shrink-0" />
                  <span>✓ Complete with Polish Edge Crystal Glass</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#188038] shrink-0" />
                  <span>✓ Ready-to-hang dual brass hooks included</span>
                </li>
              </ul>

              <div className="mt-4 pt-3 border-t border-[#dadce0]/70 flex items-center justify-between text-xs text-[#5f6368]">
                <span>Aralia, Agartala</span>
                <a
                  href={`https://wa.me/${BUSINESS_INFO.phoneNumeric}?text=Hello%20SBk%20Enterprise,%20I%20would%20like%20to%20order%20the%20Store%20Offer%20Frames.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#188038] hover:underline inline-flex items-center gap-1"
                >
                  Order on WhatsApp <ExternalLink className="w-3 h-3" />
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
