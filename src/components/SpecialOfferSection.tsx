import React, { useState } from 'react';
import { Truck, Check, Sparkles, MessageCircle, Heart, Tag } from 'lucide-react';
import { BUSINESS_INFO } from '../data/designs';
import { EmptyFrameOpening } from './EmptyFrameOpening';
import { Discount33Option } from './Discount33Option';
import { RealCollageFramePicture } from './RealCollageFramePicture';

interface SpecialOfferSectionProps {
  onAddToCart: (item: {
    title: string;
    dimension: string;
    frameName: string;
    glassType: string;
    matBoard: string;
    price: number;
  }) => void;
  onCustomizeInStudio: (size: '8x11' | '8x12') => void;
  isDiscount33Applied: boolean;
  onToggleDiscount33: () => void;
}

export const SpecialOfferSection: React.FC<SpecialOfferSectionProps> = ({
  onAddToCart,
  onCustomizeInStudio,
  isDiscount33Applied,
  onToggleDiscount33,
}) => {
  const [selectedFinish, setSelectedFinish] = useState<'teak' | 'black' | 'walnut'>('teak');
  const [addedItem, setAddedItem] = useState<string | null>(null);

  const smallFramePrice = isDiscount33Applied ? 146 : 218;
  const largeFramePrice = isDiscount33Applied ? 219 : 327;

  const handleAdd = (size: '8x11' | '8x12', price: number, title: string) => {
    onAddToCart({
      title,
      dimension: size === '8x11' ? '8×11 in' : '8×12 in',
      frameName: selectedFinish === 'teak' ? 'Natural Burma Teak' : selectedFinish === 'black' ? 'Matte Charcoal Black' : 'Deep Walnut Hardwood',
      glassType: '2mm Polish Float Glass',
      matBoard: 'Archival Off-White Mat',
      price,
    });
    setAddedItem(size);
    setTimeout(() => setAddedItem(null), 2500);
  };

  return (
    <section id="special-offer" className="py-16 bg-[#f8fafd] border-b border-[#dadce0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#188038] bg-[#e6f4ea] px-3 py-1 rounded-full mb-3">
            <Truck className="w-3.5 h-3.5" />
            <span>Official Store Offer · Free Home Delivery in Agartala</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-[#202124]">
            Artisan Handcrafted Photo Frames
          </h2>
          <p className="mt-2 text-base text-[#5f6368]">
            Solid timber mouldings and crystal glass cut by master craftsmen in our Aralia workshop.
            Available in small portrait and large custom calendar/photo collage sizes with zero delivery fees across West Tripura.
          </p>

          {/* Finish selector */}
          <div className="mt-6 inline-flex p-1 bg-white border border-[#dadce0] rounded-xl shadow-2xs">
            <button
              onClick={() => setSelectedFinish('teak')}
              className={`px-4 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                selectedFinish === 'teak'
                  ? 'bg-[#1a73e8] text-white shadow-xs'
                  : 'text-[#5f6368] hover:text-[#202124]'
              }`}
            >
              Natural Teakwood
            </button>
            <button
              onClick={() => setSelectedFinish('black')}
              className={`px-4 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                selectedFinish === 'black'
                  ? 'bg-[#1a73e8] text-white shadow-xs'
                  : 'text-[#5f6368] hover:text-[#202124]'
              }`}
            >
              Matte Charcoal Black
            </button>
            <button
              onClick={() => setSelectedFinish('walnut')}
              className={`px-4 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                selectedFinish === 'walnut'
                  ? 'bg-[#1a73e8] text-white shadow-xs'
                  : 'text-[#5f6368] hover:text-[#202124]'
              }`}
            >
              Deep Walnut
            </button>
          </div>
        </div>

        {/* Between finish selector and photo frames: Interactive 33% Discount Banner */}
        <Discount33Option
          isApplied={isDiscount33Applied}
          onToggle={onToggleDiscount33}
          className="max-w-5xl mx-auto mb-8"
        />

        {/* Two Featured Offer Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Card 1: Small Frames 8x11 */}
          <div className="bg-white rounded-2xl border-2 border-[#dadce0] hover:border-[#1a73e8] p-6 sm:p-8 transition-all hover:shadow-lg flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-4 right-4 bg-[#e8f0fe] text-[#1a73e8] font-bold text-xs px-2.5 py-1 rounded-full z-20">
              Popular for Portraits
            </div>

            <div>
              {/* Visual Frame Simulation with Authentic Empty Frame */}
              <div className="aspect-4/3 w-full bg-[#f1f3f4] rounded-xl mb-4 flex items-center justify-center p-4 relative overflow-hidden border border-[#e8eaed]">
                {/* SVG/CSS Rendered Frame */}
                <div 
                  className="w-44 h-56 transition-all duration-300 shadow-xl flex items-center justify-center p-3 relative group-hover:scale-102"
                  style={{
                    backgroundColor: selectedFinish === 'teak' ? '#8B4513' : selectedFinish === 'black' ? '#1f1f1f' : '#4a2511',
                    borderRadius: '4px',
                    boxShadow: '0 12px 28px -6px rgba(0,0,0,0.3)',
                  }}
                >
                  {/* Inner Matting */}
                  <div className="w-full h-full bg-[#faf8f5] p-2 flex items-center justify-center border border-[#e5e0d8] shadow-inner relative overflow-hidden">
                    <EmptyFrameOpening dimensions="8 × 11 in" subtitle="Small Photo Frame" />
                  </div>
                </div>
              </div>

              {/* Between Photo Frame Picture and Details: 33% Option */}
              <Discount33Option
                isApplied={isDiscount33Applied}
                onToggle={onToggleDiscount33}
                compact={true}
                className="mb-4"
              />

              <div className="flex items-center gap-2 text-xs font-semibold text-[#1a73e8] uppercase tracking-wide">
                <span>Small Size · Standard Desk / Wall</span>
              </div>
              <h3 className="text-2xl font-bold text-[#202124] mt-1">
                Small Frame (8×11 in)
              </h3>
              <p className="text-xs text-[#5f6368] mt-1.5 leading-relaxed">
                Classic photo size ideal for portrait prints, school certificates, mandir deities, and study table frames. Complete with clear glass and mounting.
              </p>

              {/* Price Row */}
              <div className="mt-4 flex items-baseline gap-2 flex-wrap">
                <span className={`text-3xl font-bold tabular-nums ${isDiscount33Applied ? 'text-[#188038]' : 'text-[#202124]'}`}>
                  ₹{smallFramePrice}
                </span>
                <span className="text-sm line-through text-[#80868b] tabular-nums">
                  {isDiscount33Applied ? '₹218' : '₹280'}
                </span>
                {isDiscount33Applied ? (
                  <span className="text-xs font-bold text-white bg-[#188038] px-2 py-0.5 rounded shadow-2xs">
                    33% OFF Applied!
                  </span>
                ) : (
                  <span className="text-xs font-bold text-[#188038] bg-[#e6f4ea] px-2 py-0.5 rounded">
                    Save 22%
                  </span>
                )}
              </div>

              {/* Specification checklist */}
              <div className="mt-5 space-y-2 border-t border-[#f1f3f4] pt-4 text-xs text-[#3c4043]">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#188038] shrink-0" />
                  <span><strong>Size:</strong> 8 × 11 inches (Accommodates standard A4 / 8x10 prints)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#188038] shrink-0" />
                  <span><strong>Glass:</strong> 2mm Polish-edge clear float glass included</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#188038] shrink-0" />
                  <span><strong>Delivery:</strong> Free Home Delivery in Agartala 799004 & surrounds</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#188038] shrink-0" />
                  <span><strong>Hardware:</strong> Hanging clip & standing strut included</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-6 pt-4 border-t border-[#f1f3f4] flex flex-col sm:flex-row gap-2">
              <button
                onClick={() => handleAdd('8x11', smallFramePrice, 'Small Frame (8×11 in)')}
                className="flex-1 py-2.5 px-4 rounded-xl bg-[#1a73e8] hover:bg-[#1557bf] text-white text-xs font-bold shadow-xs hover:shadow transition-all cursor-pointer text-center"
              >
                {addedItem === '8x11' ? '✓ Added to Cart!' : `Order Now (₹${smallFramePrice})`}
              </button>
              <button
                onClick={() => onCustomizeInStudio('8x11')}
                className="py-2.5 px-4 rounded-xl border border-[#dadce0] hover:bg-[#f1f3f4] text-xs font-semibold text-[#3c4043] transition-colors cursor-pointer text-center whitespace-nowrap"
              >
                Customize in Studio
              </button>
            </div>
          </div>

          {/* Card 2: Large Frames 8x12 */}
          <div className="bg-white rounded-2xl border-2 border-[#1a73e8] p-6 sm:p-8 transition-all hover:shadow-lg flex flex-col justify-between relative overflow-hidden group shadow-xs">
            <div className="absolute top-4 right-4 bg-[#188038] text-white font-bold text-xs px-2.5 py-1 rounded-full flex items-center gap-1 shadow-xs z-20">
              <Sparkles className="w-3 h-3" />
              Best Value · Custom Birthday Bestseller
            </div>

            <div>
              {/* Visual Frame Simulation with Authentic Real Customer Frame */}
              <div className="w-full bg-[#f1f3f4] rounded-xl mb-4 flex flex-col items-center justify-center p-3 relative overflow-hidden border border-[#e8eaed]">
                <div className="w-full flex items-center justify-between text-[11px] mb-2 px-1">
                  <span className="font-bold text-[#188038] flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    Actual Customer Photo Frame (8×12 in)
                  </span>
                  <span className="text-[10px] font-semibold text-[#1a73e8] bg-[#e8f0fe] px-2 py-0.5 rounded-full">
                    ✓ Handcrafted in Aralia
                  </span>
                </div>

                <div className="w-full py-1 flex justify-center">
                  <RealCollageFramePicture showBadge={false} />
                </div>
              </div>

              {/* Between Photo Frame Picture and Details: 33% Option */}
              <Discount33Option
                isApplied={isDiscount33Applied}
                onToggle={onToggleDiscount33}
                compact={true}
                className="mb-4"
              />

              <div className="flex items-center gap-2 text-xs font-semibold text-[#188038] uppercase tracking-wide">
                <span>Large Size · Showcase Display & Gift Bestseller</span>
              </div>
              <h3 className="text-2xl font-bold text-[#202124] mt-1">
                Large Frame (8×12 in)
              </h3>
              <p className="text-xs text-[#5f6368] mt-1.5 leading-relaxed">
                Generous format crafted with wider solid moulding. Perfect for customized birthday calendar photo collages, bestie gifts, family portraits, and anniversaries.
              </p>

              {/* Price Row */}
              <div className="mt-4 flex items-baseline gap-2 flex-wrap">
                <span className={`text-3xl font-bold tabular-nums ${isDiscount33Applied ? 'text-[#188038]' : 'text-[#202124]'}`}>
                  ₹{largeFramePrice}
                </span>
                <span className="text-sm line-through text-[#80868b] tabular-nums">
                  {isDiscount33Applied ? '₹327' : '₹420'}
                </span>
                {isDiscount33Applied ? (
                  <span className="text-xs font-bold text-white bg-[#188038] px-2 py-0.5 rounded shadow-2xs">
                    33% OFF Applied!
                  </span>
                ) : (
                  <span className="text-xs font-bold text-[#188038] bg-[#e6f4ea] px-2 py-0.5 rounded">
                    Save 22%
                  </span>
                )}
              </div>

              {/* Specification checklist */}
              <div className="mt-5 space-y-2 border-t border-[#f1f3f4] pt-4 text-xs text-[#3c4043]">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#188038] shrink-0" />
                  <span><strong>Size:</strong> 8 × 12 inches (Full panoramic / collage proportions)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#188038] shrink-0" />
                  <span><strong>Glass:</strong> Heavy-gauge polish-edge float glass</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#188038] shrink-0" />
                  <span><strong>Delivery:</strong> Free Home Delivery directly to your doorstep in Agartala</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#188038] shrink-0" />
                  <span><strong>Hardware:</strong> Heavy-duty dual steel hooks (Horizontal & Vertical)</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-6 pt-4 border-t border-[#f1f3f4] flex flex-col sm:flex-row gap-2">
              <button
                onClick={() => handleAdd('8x12', largeFramePrice, 'Large Frame (8×12 in)')}
                className="flex-1 py-2.5 px-4 rounded-xl bg-[#1a73e8] hover:bg-[#1557bf] text-white text-xs font-bold shadow-xs hover:shadow transition-all cursor-pointer text-center"
              >
                {addedItem === '8x12' ? '✓ Added to Cart!' : `Order Now (₹${largeFramePrice})`}
              </button>
              <button
                onClick={() => onCustomizeInStudio('8x12')}
                className="py-2.5 px-4 rounded-xl border border-[#dadce0] hover:bg-[#f1f3f4] text-xs font-semibold text-[#3c4043] transition-colors cursor-pointer text-center whitespace-nowrap"
              >
                Customize in Studio
              </button>
            </div>
          </div>

        </div>

        {/* WhatsApp Fast Track Box */}
        <div className="mt-10 max-w-3xl mx-auto bg-white rounded-xl p-4 border border-[#dadce0] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#3c4043]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#25d366]/10 text-[#128c7e] flex items-center justify-center shrink-0">
              <MessageCircle className="w-5 h-5 text-[#25d366]" />
            </div>
            <div>
              <span className="font-bold text-[#202124] block">Direct WhatsApp Order & Custom Photo Fitting</span>
              <span className="text-[#5f6368]">Send your photos, birthdays, or required frame size directly to Suman Bhowmik at our Aralia workshop.</span>
            </div>
          </div>
          <a
            href={`https://wa.me/${BUSINESS_INFO.phoneNumeric}?text=Hello%20SBk%20Enterprise,%20I%20am%20interested%20in%20the%20Special%20Store%20Offer%20(8x11%20at%20Rs.218%20/%208x12%20at%20Rs.327)%20with%20custom%20photos.`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-[#25d366] hover:bg-[#1ebc57] text-white font-semibold rounded-lg shadow-2xs transition-colors whitespace-nowrap flex items-center gap-1.5"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};

