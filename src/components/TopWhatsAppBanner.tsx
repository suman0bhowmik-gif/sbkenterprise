import React from 'react';
import { MessageCircle, ExternalLink, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/designs';

export const TopWhatsAppBanner: React.FC = () => {
  return (
    <aside aria-label="WhatsApp collection link" className="w-full bg-[#075e54] text-white transition-colors border-b border-[#128c7e]/40 sticky top-0 z-50 shadow-xs">
      <a
        href={`https://wa.me/${BUSINESS_INFO.phoneNumeric}?text=Hello%20SBk%20Enterprise,%20I%20want%20to%20see%20the%20photo%20frame%20collection.`}
        target="_blank"
        rel="noopener noreferrer"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex flex-wrap items-center justify-center sm:justify-between gap-2 text-xs sm:text-sm font-semibold hover:bg-[#128c7e] transition-colors group cursor-pointer"
      >
        <div className="flex items-center gap-2 text-center sm:text-left">
          <div className="w-6 h-6 rounded-full bg-[#25d366] text-white flex items-center justify-center shrink-0 shadow-2xs">
            <MessageCircle className="w-3.5 h-3.5 fill-current" />
          </div>
          <span>If you want to see the photo frame collection then click here</span>
        </div>

        <div className="inline-flex items-center gap-2 text-xs font-bold text-white bg-[#25d366] hover:bg-[#1ebc57] px-3.5 py-1 rounded-full shadow-2xs transition-transform group-hover:scale-102">
          <span>WhatsApp: {BUSINESS_INFO.phone}</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </div>
      </a>
    </aside>
  );
};
