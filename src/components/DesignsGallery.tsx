import React, { useState, useMemo } from 'react';
import { 
  Grid, 
  Search, 
  Sparkles, 
  Sliders, 
  Check, 
  Star, 
  ExternalLink,
  Tag,
  MessageCircle
} from 'lucide-react';
import { ALL_13_DESIGNS, BUSINESS_INFO } from '../data/designs';
import { FrameDesign } from '../types';
import { EmptyFrameOpening } from './EmptyFrameOpening';
import { Discount33Option } from './Discount33Option';

interface DesignsGalleryProps {
  onCustomizeDesign: (design: FrameDesign) => void;
  onAddToCart: (item: {
    title: string;
    dimension: string;
    frameName: string;
    glassType: string;
    matBoard: string;
    price: number;
  }) => void;
  isDiscount33Applied: boolean;
  onToggleDiscount33: () => void;
}

export const DesignsGallery: React.FC<DesignsGalleryProps> = ({
  onCustomizeDesign,
  onAddToCart,
  isDiscount33Applied,
  onToggleDiscount33,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [addedDesignId, setAddedDesignId] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'All Photo Frames (2)', count: 2 },
    { id: 'small', label: 'Small Frame (8×11)', count: 1 },
    { id: 'large', label: 'Large Frame (8×12)', count: 1 },
  ];

  const filteredDesigns = useMemo(() => {
    return ALL_13_DESIGNS.filter((design) => {
      const matchesCategory =
        selectedCategory === 'all' ||
        (selectedCategory === 'small' && design.id === 'design-1') ||
        (selectedCategory === 'large' && design.id === 'design-2');

      const matchesSearch =
        design.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        design.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        design.material.toLowerCase().includes(searchQuery.toLowerCase()) ||
        design.popularFor.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleQuickAdd = (design: FrameDesign) => {
    const finalPrice = isDiscount33Applied
      ? design.id === 'design-1'
        ? 146
        : 219
      : design.price;

    onAddToCart({
      title: design.name,
      dimension: design.dimensions.split(' ')[0],
      frameName: design.material,
      glassType: design.glassOption,
      matBoard: design.matColor !== 'transparent' ? 'Archival Matting' : 'None',
      price: finalPrice,
    });
    setAddedDesignId(design.id);
    setTimeout(() => setAddedDesignId(null), 2500);
  };

  return (
    <section id="designs-gallery" className="py-16 bg-white border-b border-[#dadce0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#1a73e8] uppercase tracking-wide mb-1">
              <Grid className="w-3.5 h-3.5" />
              <span>Two Photo Frames Collection</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-[#202124]">
              Two Handcrafted Photo Frames
            </h2>
            <p className="mt-1 text-sm text-[#5f6368]">
              Special store collection of solid seasoned Burma Teakwood photo frames in 8×11 and 8×12 standard sizes with crystal float glass and free home delivery in Agartala.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-[#80868b] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search wood, canvas, glass..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs rounded-full border border-[#dadce0] bg-[#f8fafd] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1a73e8] transition-all"
            />
          </div>
        </div>

        {/* Above all: Direct WhatsApp Category Banner */}
        <div className="mb-6 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#e6f4ea] via-[#f0fdf4] to-[#e8f0fe] border-2 border-[#25d366]/50 flex flex-col md:flex-row items-center justify-between gap-4 shadow-xs">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-[#25d366] text-white flex items-center justify-center shrink-0 shadow-sm">
              <MessageCircle className="w-7 h-7 fill-current" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#128c7e] bg-white px-2 py-0.5 rounded border border-[#25d366]/30">
                  Featured WhatsApp Category
                </span>
                <span className="text-xs font-semibold text-[#188038]">Direct Chat: +91 7005843906</span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#202124] mt-1">
                If you want to see the photo frame collection then click here
              </h3>
              <p className="text-xs text-[#5f6368]">
                Get our exclusive custom photo frame catalogue, custom sizes, and fresh workshop photos sent directly to your WhatsApp.
              </p>
            </div>
          </div>

          <a
            href={`https://wa.me/${BUSINESS_INFO.phoneNumeric}?text=Hello%20SBk%20Enterprise,%20I%20want%20to%20see%20the%20photo%20frame%20collection.`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto px-5 py-3 rounded-xl bg-[#25d366] hover:bg-[#1ebc57] text-white text-xs font-bold shadow-sm hover:shadow transition-all whitespace-nowrap flex items-center justify-center gap-2 shrink-0 active:scale-98"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Click Here for Photo Frame Collection</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {/* Direct WhatsApp Category Button */}
          <a
            href={`https://wa.me/${BUSINESS_INFO.phoneNumeric}?text=Hello%20SBk%20Enterprise,%20I%20want%20to%20see%20the%20photo%20frame%20collection.`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-1.5 text-xs font-bold rounded-full bg-[#25d366] hover:bg-[#1ebc57] text-white transition-all whitespace-nowrap shadow-2xs hover:shadow-xs flex items-center gap-1.5 shrink-0"
            title="Chat on WhatsApp (+91 7005843906)"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-current" />
            <span>If you want to see the photo frame collection then click here</span>
            <ExternalLink className="w-3 h-3 opacity-80" />
          </a>

          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-colors whitespace-nowrap cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#1a73e8] text-white shadow-2xs font-semibold'
                  : 'bg-[#f1f3f4] text-[#3c4043] hover:bg-[#e8eaed]'
              }`}
            >
              {cat.label} ({cat.count})
            </button>
          ))}
        </div>

        {/* Between category tabs and photo frames: 33% Discount Banner */}
        <Discount33Option
          isApplied={isDiscount33Applied}
          onToggle={onToggleDiscount33}
          className="max-w-4xl mx-auto mb-8"
        />

        {/* Two Photo Frames Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {filteredDesigns.map((design, index) => (
            <div
              key={design.id}
              className="bg-white rounded-2xl border border-[#dadce0] hover:border-[#1a73e8] hover:shadow-md transition-all flex flex-col justify-between overflow-hidden group"
            >
              {/* Top Visual Preview Area */}
              <div className="relative aspect-4/3 bg-[#f8f9fa] border-b border-[#f1f3f4] p-5 flex items-center justify-center overflow-hidden">
                {/* Special Offer Ribbon if applicable */}
                {design.isOffer && (
                  <span className="absolute top-2.5 left-2.5 z-10 bg-[#188038] text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-xs flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    {design.offerLabel}
                  </span>
                )}

                {/* Index tag */}
                <span className="absolute bottom-2 left-2.5 text-[10px] text-[#80868b] font-mono">
                  Frame #{index + 1 < 10 ? `0${index + 1}` : index + 1}
                </span>

                {/* Simulated Realistic Picture Frame or Real Customer Frame */}
                {design.id === 'design-2' ? (
                  <div className="w-full h-full flex flex-col items-center justify-center p-2 relative">
                    <span className="absolute top-2 right-2 z-10 text-[9px] font-bold text-white bg-[#171717] px-2 py-0.5 rounded shadow-xs">
                      ✓ Real Photo Frame
                    </span>
                    <img
                      src="/real-custom-collage-frame.svg"
                      alt="Real Customer Custom Birthday Collage Frame"
                      className="max-h-52 w-auto object-contain drop-shadow-md transition-transform duration-300 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ) : (
                  <div
                    className="w-36 h-44 transition-transform duration-300 group-hover:scale-105 flex items-center justify-center p-2.5 relative shadow-md"
                    style={{
                      backgroundColor: design.frameColor,
                      border: design.borderStyle === 'double' ? '3px double #d4af37' : 'none',
                      borderRadius: '3px',
                      boxShadow: '0 8px 16px -2px rgba(0, 0, 0, 0.25)',
                    }}
                  >
                    {/* Optional Inner Fillet */}
                    {design.innerBorder && (
                      <div 
                        className="absolute inset-2 border pointer-events-none"
                        style={{ borderColor: design.innerBorder }}
                      />
                    )}

                    {/* Matting Board */}
                    <div
                      className="w-full h-full p-1.5 flex items-center justify-center shadow-inner relative overflow-hidden"
                      style={{
                        backgroundColor: design.matColor !== 'transparent' ? design.matColor : '#fff',
                      }}
                    >
                      {/* Authentic Empty Photo Frame Opening */}
                      <div className="w-full h-full relative overflow-hidden shadow-xs">
                        <EmptyFrameOpening
                          dimensions={design.dimensions.split(' ')[0]}
                          subtitle={
                            design.category === 'canvas'
                              ? 'Canvas Mount'
                              : design.category === 'glass'
                              ? 'Glass Float'
                              : design.category === 'certificate'
                              ? 'Certificate Mat'
                              : design.category === 'shadowbox'
                              ? 'Deep Shadow Box'
                              : 'Photo Mount'
                          }
                          dark={design.id === 'design-3' || design.id === 'design-8'}
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Between Photo Frame Picture and Details: 33% Option */}
              <div className="px-4 pt-3">
                <Discount33Option
                  isApplied={isDiscount33Applied}
                  onToggle={onToggleDiscount33}
                  compact={true}
                />
              </div>

              {/* Card Details */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs text-[#5f6368] mb-1">
                    <span className="capitalize font-medium text-[#1a73e8]">
                      {design.category}
                    </span>
                    <div className="flex items-center gap-1 text-[#f29900]">
                      <Star className="w-3 h-3 fill-current" />
                      <span className="font-bold text-[#202124] text-[11px]">
                        {design.rating}
                      </span>
                      <span className="text-[#80868b] text-[10px]">({design.reviewsCount})</span>
                    </div>
                  </div>

                  <h3 className="font-bold text-[#202124] text-sm group-hover:text-[#1a73e8] transition-colors line-clamp-1">
                    {design.name}
                  </h3>
                  
                  <p className="text-xs text-[#5f6368] mt-1 line-clamp-2 leading-relaxed">
                    {design.description}
                  </p>

                  <div className="mt-2 text-[11px] text-[#3c4043] bg-[#f8f9fa] p-1.5 rounded border border-[#f1f3f4]">
                    <span className="text-[#80868b] block text-[9px] uppercase tracking-wider font-semibold">Recommended for</span>
                    <span className="font-medium text-[#202124] line-clamp-1">{design.popularFor}</span>
                  </div>
                </div>

                {/* Price and Buttons */}
                <div className="mt-4 pt-3 border-t border-[#f1f3f4]">
                  <div className="flex items-baseline justify-between mb-3 flex-wrap gap-1">
                    <div className="flex items-baseline gap-1.5 flex-wrap">
                      <span className={`text-xl font-bold tabular-nums ${isDiscount33Applied ? 'text-[#188038]' : 'text-[#202124]'}`}>
                        ₹{isDiscount33Applied ? (design.id === 'design-1' ? 146 : 219) : design.price}
                      </span>
                      {isDiscount33Applied ? (
                        <span className="text-xs line-through text-[#80868b] tabular-nums">
                          ₹{design.price}
                        </span>
                      ) : design.originalPrice ? (
                        <span className="text-xs line-through text-[#80868b] tabular-nums">
                          ₹{design.originalPrice}
                        </span>
                      ) : null}
                      {isDiscount33Applied && (
                        <span className="text-[10px] font-bold text-white bg-[#188038] px-1.5 py-0.2 rounded shadow-2xs">
                          33% OFF
                        </span>
                      )}
                    </div>
                    <span className="text-[10px] font-semibold text-[#188038] bg-[#e6f4ea] px-1.5 py-0.5 rounded">
                      ✓ Free Delivery
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => onCustomizeDesign(design)}
                      className="py-1.5 px-2 rounded-lg border border-[#dadce0] hover:bg-[#f1f3f4] text-[11px] font-semibold text-[#1a73e8] transition-colors cursor-pointer flex items-center justify-center gap-1"
                    >
                      <Sliders className="w-3 h-3" />
                      <span>Studio</span>
                    </button>
                    <button
                      onClick={() => handleQuickAdd(design)}
                      className="py-1.5 px-2 rounded-lg bg-[#1a73e8] hover:bg-[#1557bf] text-white text-[11px] font-semibold transition-colors cursor-pointer text-center"
                    >
                      {addedDesignId === design.id ? '✓ Added' : 'Quick Add'}
                    </button>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Need custom size banner */}
        <div className="mt-12 bg-[#f8fafd] rounded-2xl border border-[#dadce0] p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="font-bold text-[#202124] text-base">
              Need non-standard custom dimensions or oversized framing?
            </h4>
            <p className="text-xs text-[#5f6368] mt-0.5">
              Our workshop opposite Gate Water Tank in Aralia cuts custom glass, mountings, and wood frames up to 60 inches.
            </p>
          </div>
          <a
            href={`https://wa.me/${BUSINESS_INFO.phoneNumeric}?text=Hello%20SBk%20Enterprise,%20I%20need%20a%20custom%20frame%20size%20quote.`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-white border border-[#dadce0] hover:bg-[#f1f3f4] text-[#1a73e8] text-xs font-semibold rounded-xl transition-colors whitespace-nowrap flex items-center gap-1.5 shrink-0"
          >
            <span>Ask for Custom Quote</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
