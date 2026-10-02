import React, { useState } from 'react';
import { 
  MapPin, 
  Navigation, 
  Phone, 
  Mail, 
  Clock, 
  CheckCircle2, 
  Copy, 
  Check, 
  Truck, 
  Calendar,
  ExternalLink,
  Info
} from 'lucide-react';
import { BUSINESS_INFO, AGARTALA_PINCODES } from '../data/designs';
import { getStoreStatus } from '../utils/timeHelper';

interface GoogleLocationCardProps {
  onOpenBooking: () => void;
}

export const GoogleLocationCard: React.FC<GoogleLocationCardProps> = ({ onOpenBooking }) => {
  const [copied, setCopied] = useState(false);
  const [pincodeInput, setPincodeInput] = useState('799004');
  const [pincodeResult, setPincodeResult] = useState<string | null>(
    '✓ Free Home Delivery Available in Aralia / Shib Mandir Para (Same-Day Dispatch)'
  );

  const status = getStoreStatus();

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(BUSINESS_INFO.fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCheckPincode = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanPin = pincodeInput.trim();
    const matched = AGARTALA_PINCODES.find((p) => p.code === cleanPin);

    if (matched) {
      setPincodeResult(`✓ Free Home Delivery Confirmed for ${matched.area}! Delivery within 24-48 hours.`);
    } else if (cleanPin.startsWith('799')) {
      setPincodeResult(`✓ Standard Tripura Free Delivery available for pincode ${cleanPin}.`);
    } else {
      setPincodeResult(`Outside Agartala local delivery zone. Please contact workshop directly at ${BUSINESS_INFO.phone}.`);
    }
  };

  return (
    <section id="hours-location" className="py-16 bg-[#f8fafd] border-b border-[#dadce0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#1a73e8] uppercase tracking-wide mb-1">
            <MapPin className="w-3.5 h-3.5" />
            <span>Workshop & Showroom</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-[#202124]">
            Visit Us in Aralia, Agartala
          </h2>
          <p className="mt-1 text-sm text-[#5f6368]">
            Experience wood mouldings, crystal glass clarity, and archival mat board textures in person at our dedicated workshop.
          </p>
        </div>

        {/* Main Location & Maps Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left 7 cols: Interactive Google Map & Landmark Guide */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-[#dadce0] overflow-hidden shadow-sm">
            
            {/* Map Header */}
            <div className="p-4 bg-[#f8f9fa] border-b border-[#dadce0] flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#d93025]" />
                <span className="text-xs font-bold text-[#202124]">
                  SBk Enterprise on Google Maps
                </span>
                <span className="text-[11px] text-[#5f6368]">
                  · Aralia, Agartala, 799004
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopyAddress}
                  className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium text-[#3c4043] bg-white border border-[#dadce0] hover:bg-[#f1f3f4] rounded-lg transition-colors cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-[#188038]" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied' : 'Copy Address'}</span>
                </button>

                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${BUSINESS_INFO.mapsQuery}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold text-white bg-[#1a73e8] hover:bg-[#1557bf] rounded-lg transition-colors shadow-2xs"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>

            {/* Embedded Google Map Iframe */}
            <div className="w-full h-80 sm:h-96 relative bg-[#e5e3df]">
              <iframe
                title="SBk Enterprise Google Maps Location"
                src={BUSINESS_INFO.mapsEmbedSrc}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />

              {/* Floating Landmark Overlay Badge */}
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-md bg-white/95 backdrop-blur-md p-3 rounded-xl border border-[#dadce0] shadow-md text-xs">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#d93025] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#202124] block">Opposite Gate Water Tank</span>
                    <span className="text-[#5f6368]">
                      Aralia, Shib Mandir Para (Near Dr. B.R. Ambedkar Vidya Bhaban School), Agartala – 799004
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Landmark & Parking Guide */}
            <div className="p-4 bg-white border-t border-[#f1f3f4] grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-[#3c4043]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#188038] shrink-0" />
                <span>Opposite Gate Water Tank</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#188038] shrink-0" />
                <span>Near Ambedkar School</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#188038] shrink-0" />
                <span>Customer Bike & Car Parking</span>
              </div>
            </div>

          </div>

          {/* Right 5 cols: Studio Hours, Free Home Delivery & Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Studio & Workshop Hours Card */}
            <div className="bg-white rounded-2xl border border-[#dadce0] p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-[#1a73e8]" />
                  <h3 className="font-bold text-[#202124] text-base">
                    Studio & Workshop Hours
                  </h3>
                </div>

                <span
                  className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full ${
                    status.isOpen
                      ? 'bg-[#e6f4ea] text-[#137333]'
                      : 'bg-[#fce8e6] text-[#c5221f]'
                  }`}
                >
                  <span
                    className={`w-2 h-2 rounded-full ${
                      status.isOpen ? 'bg-[#188038] animate-pulse' : 'bg-[#d93025]'
                    }`}
                  />
                  {status.statusText}
                </span>
              </div>

              <div className="space-y-3 text-xs">
                <div className="flex justify-between items-center py-2 border-b border-[#f1f3f4]">
                  <span className="font-semibold text-[#202124]">Monday – Saturday</span>
                  <span className="font-bold text-[#202124] tabular-nums">9:30 AM – 8:00 PM</span>
                </div>

                <div className="flex justify-between items-center py-2 border-b border-[#f1f3f4]">
                  <span className="font-semibold text-[#202124]">Sunday</span>
                  <span className="font-bold text-[#202124] tabular-nums">10:00 AM – 4:00 PM</span>
                </div>

                <div className="flex justify-between items-center pt-1">
                  <span className="text-[#5f6368]">Custom Quotes & Consultations</span>
                  <span className="font-semibold text-[#188038] bg-[#e6f4ea] px-2 py-0.5 rounded">
                    Walk-ins Welcome
                  </span>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-[#f1f3f4]">
                <button
                  onClick={onOpenBooking}
                  className="w-full py-2.5 rounded-xl bg-[#1a73e8] hover:bg-[#1557bf] text-white text-xs font-semibold shadow-xs hover:shadow transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book In-Store Visit</span>
                </button>
              </div>
            </div>

            {/* Free Home Delivery Checker */}
            <div className="bg-white rounded-2xl border border-[#dadce0] p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <Truck className="w-5 h-5 text-[#188038]" />
                <h3 className="font-bold text-[#202124] text-base">
                  Free Home Delivery Checker
                </h3>
              </div>
              <p className="text-xs text-[#5f6368] mb-4">
                We safely package and deliver framed artwork directly to homes across Agartala with zero shipping charges.
              </p>

              <form onSubmit={handleCheckPincode} className="flex gap-2">
                <input
                  type="text"
                  maxLength={6}
                  value={pincodeInput}
                  onChange={(e) => setPincodeInput(e.target.value)}
                  placeholder="Enter 6-digit Pincode (e.g. 799004)"
                  className="flex-1 px-3 py-2 text-xs rounded-xl border border-[#dadce0] bg-[#f8fafd] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1a73e8]"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#202124] hover:bg-[#3c4043] text-white text-xs font-semibold rounded-xl transition-colors cursor-pointer shrink-0"
                >
                  Check
                </button>
              </form>

              {pincodeResult && (
                <div className="mt-3 p-2.5 rounded-lg bg-[#e6f4ea] border border-[#ceead6] text-xs text-[#137333] font-medium flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 shrink-0 text-[#188038]" />
                  <span>{pincodeResult}</span>
                </div>
              )}
            </div>

            {/* Shop Contact Card */}
            <div className="bg-white rounded-2xl border border-[#dadce0] p-6 shadow-sm">
              <h3 className="font-bold text-[#202124] text-base mb-3">
                Shop Contact
              </h3>

              <div className="space-y-3 text-xs">
                <a
                  href={`tel:${BUSINESS_INFO.phoneNumeric}`}
                  className="flex items-center gap-3 p-2.5 rounded-xl border border-[#dadce0] hover:bg-[#f8fafd] transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#e8f0fe] text-[#1a73e8] flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <span className="text-[10px] text-[#5f6368] block">Direct Workshop Line / WhatsApp</span>
                    <span className="font-bold text-[#202124] group-hover:text-[#1a73e8] text-sm tabular-nums">
                      {BUSINESS_INFO.phone}
                    </span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-[#80868b]" />
                </a>

                <a
                  href={`mailto:${BUSINESS_INFO.email}`}
                  className="flex items-center gap-3 p-2.5 rounded-xl border border-[#dadce0] hover:bg-[#f8fafd] transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#fce8e6] text-[#d93025] flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <span className="text-[10px] text-[#5f6368] block">Email Inquiries & Quotes</span>
                    <span className="font-semibold text-[#202124] group-hover:text-[#1a73e8] text-xs">
                      {BUSINESS_INFO.email}
                    </span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-[#80868b]" />
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
