import React, { useState, useRef } from 'react';
import { 
  Sliders, 
  Upload, 
  RefreshCw, 
  RotateCw, 
  Sparkles, 
  Truck, 
  Check, 
  ShoppingBag, 
  Share2, 
  MessageCircle,
  Eye
} from 'lucide-react';
import { FRAME_COLORS, SAMPLE_ARTWORKS, BUSINESS_INFO } from '../data/designs';
import { CustomizerState, GlassType } from '../types';
import { EmptyFrameOpening } from './EmptyFrameOpening';
import { Discount33Option } from './Discount33Option';

interface FrameCustomizerProps {
  onAddToCart: (item: {
    title: string;
    dimension: string;
    frameName: string;
    glassType: string;
    matBoard: string;
    price: number;
    image?: string | null;
  }) => void;
  onOpenBooking: () => void;
  initialState?: Partial<CustomizerState>;
  isDiscount33Applied: boolean;
  onToggleDiscount33: () => void;
}

export const FrameCustomizer: React.FC<FrameCustomizerProps> = ({
  onAddToCart,
  onOpenBooking,
  initialState,
  isDiscount33Applied,
  onToggleDiscount33,
}) => {
  const [dimension, setDimension] = useState<'8x11' | '8x12' | '12x18' | '16x24' | 'custom'>(
    initialState?.dimension || '8x11'
  );
  const [customWidth, setCustomWidth] = useState<number>(initialState?.customWidth || 10);
  const [customHeight, setCustomHeight] = useState<number>(initialState?.customHeight || 14);
  const [frameColorId, setFrameColorId] = useState<string>(initialState?.frameColor || 'teak');
  const [frameWidth, setFrameWidth] = useState<number>(initialState?.frameWidth || 1.2);
  const [matBoard, setMatBoard] = useState<'none' | 'off-white' | 'cream' | 'charcoal' | 'linen'>(
    initialState?.matBoard || 'off-white'
  );
  const [matWidth, setMatWidth] = useState<number>(initialState?.matWidth || 1.5);
  const [glassType, setGlassType] = useState<GlassType>(initialState?.glassType || 'clear');
  const [wallBackdrop, setWallBackdrop] = useState<'gallery-cream' | 'modern-slate' | 'warm-wood' | 'minimal-white'>(
    'gallery-cream'
  );
  const [orientation, setOrientation] = useState<'portrait' | 'landscape'>('portrait');
  const [sampleIndex, setSampleIndex] = useState<number>(0);
  const [userImage, setUserImage] = useState<string | null>(null);
  const [added, setAdded] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const selectedFrameColor = FRAME_COLORS.find((f) => f.id === frameColorId) || FRAME_COLORS[0];
  const currentSample = SAMPLE_ARTWORKS[sampleIndex];

  // Price Calculation Engine
  const calculatePrice = (): number => {
    // If standard offer sizes:
    if (dimension === '8x11') {
      let base = 218; // Special offer base!
      if (glassType === 'anti-glare') base += 90;
      if (glassType === 'acrylic') base += 60;
      if (selectedFrameColor.id === 'gold') base += 50;
      return Math.round(base);
    }
    if (dimension === '8x12') {
      let base = 327; // Special offer base!
      if (glassType === 'anti-glare') base += 110;
      if (glassType === 'acrylic') base += 75;
      if (selectedFrameColor.id === 'gold') base += 60;
      return Math.round(base);
    }
    if (dimension === '12x18') {
      let base = 580 * selectedFrameColor.priceMultiplier;
      if (matBoard !== 'none') base += 80;
      if (glassType === 'anti-glare') base += 180;
      return Math.round(base);
    }
    if (dimension === '16x24') {
      let base = 940 * selectedFrameColor.priceMultiplier;
      if (matBoard !== 'none') base += 140;
      if (glassType === 'anti-glare') base += 280;
      return Math.round(base);
    }
    // Custom calculation:
    const sqInches = customWidth * customHeight;
    const perimeter = (customWidth + customHeight) * 2;
    let base = perimeter * 12 * selectedFrameColor.priceMultiplier + sqInches * 1.5;
    if (matBoard !== 'none') base += sqInches * 0.8;
    if (glassType === 'anti-glare') base += sqInches * 1.4;
    return Math.max(250, Math.round(base));
  };

  const rawPrice = calculatePrice();
  const totalPrice = isDiscount33Applied ? Math.round(rawPrice * 0.67) : rawPrice;

  const dimDisplay =
    dimension === '8x11'
      ? '8 × 11 in'
      : dimension === '8x12'
      ? '8 × 12 in'
      : dimension === '12x18'
      ? '12 × 18 in'
      : dimension === '16x24'
      ? '16 × 24 in'
      : `${customWidth} × ${customHeight} in`;

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setUserImage(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddToCart = () => {
    const dimLabel =
      dimension === '8x11'
        ? '8×11 in (Small Offer)'
        : dimension === '8x12'
        ? '8×12 in (Large Offer)'
        : dimension === '12x18'
        ? '12×18 in'
        : dimension === '16x24'
        ? '16×24 in'
        : `${customWidth}×${customHeight} in (Custom)`;

    onAddToCart({
      title: `Custom ${selectedFrameColor.name} Frame`,
      dimension: dimLabel,
      frameName: selectedFrameColor.name,
      glassType:
        glassType === 'clear'
          ? '2mm Polish Float Glass'
          : glassType === 'anti-glare'
          ? 'Tru-Vue Anti-Reflective Glass'
          : glassType === 'acrylic'
          ? 'Shatter-Resistant Acrylic'
          : 'Canvas Stretched (No Glass)',
      matBoard:
        matBoard === 'none'
          ? 'No Mat'
          : `${matBoard} Mat (${matWidth} in)`,
      price: totalPrice,
      image: userImage,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2500);
  };

  const handleWhatsAppShare = () => {
    const dimLabel =
      dimension === '8x11'
        ? '8x11 in'
        : dimension === '8x12'
        ? '8x12 in'
        : dimension === '12x18'
        ? '12x18 in'
        : dimension === '16x24'
        ? '16x24 in'
        : `${customWidth}x${customHeight} in`;

    const text = encodeURIComponent(
      `Hello SBk Enterprise! I customized a frame on your website studio:\n- Frame: ${selectedFrameColor.name}\n- Dimensions: ${dimLabel}\n- Matting: ${matBoard} (${matWidth} in)\n- Glass: ${glassType}\n- Estimated Price: ₹${totalPrice}\n- Free Delivery to Agartala.\nPlease confirm availability.`
    );
    window.open(`https://wa.me/${BUSINESS_INFO.phoneNumeric}?text=${text}`, '_blank');
  };

  // Wall Backdrop Styles
  const wallColors = {
    'gallery-cream': 'bg-[#f4efe6]',
    'modern-slate': 'bg-[#2b303c]',
    'warm-wood': 'bg-[#e2d5c3]',
    'minimal-white': 'bg-[#fafafa]',
  };

  // Mat Board Colors
  const matColors = {
    none: 'transparent',
    'off-white': '#faf8f5',
    cream: '#f5eee1',
    charcoal: '#262626',
    linen: '#eae4d8',
  };

  return (
    <section id="studio-customizer" className="py-16 bg-[#f8fafd] border-b border-[#dadce0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#1a73e8] uppercase tracking-wide mb-1">
            <Sliders className="w-3.5 h-3.5" />
            <span>Interactive Studio Visualizer</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-[#202124]">
            Customize in Studio
          </h2>
          <p className="mt-1 text-sm text-[#5f6368]">
            Preview your artwork or photos in real-time with authentic solid wood mouldings, archival mats, and precision glass works.
          </p>
        </div>

        {/* Studio Workspace Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left 7 cols: Live Interactive Visualizer Viewport */}
          <div className="lg:col-span-7 flex flex-col space-y-4">
            
            {/* Viewport Control Bar */}
            <div className="bg-white rounded-xl border border-[#dadce0] p-3 flex flex-wrap items-center justify-between gap-3 text-xs shadow-2xs">
              
              {/* Wall backdrop switcher */}
              <div className="flex items-center gap-2">
                <span className="text-[#5f6368] font-medium">Wall:</span>
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => setWallBackdrop('gallery-cream')}
                    title="Gallery Cream Wall"
                    className={`w-5 h-5 rounded-full border border-[#dadce0] bg-[#f4efe6] transition-transform ${wallBackdrop === 'gallery-cream' ? 'ring-2 ring-[#1a73e8] scale-110' : ''}`}
                  />
                  <button
                    onClick={() => setWallBackdrop('modern-slate')}
                    title="Modern Slate Wall"
                    className={`w-5 h-5 rounded-full border border-[#dadce0] bg-[#2b303c] transition-transform ${wallBackdrop === 'modern-slate' ? 'ring-2 ring-[#1a73e8] scale-110' : ''}`}
                  />
                  <button
                    onClick={() => setWallBackdrop('warm-wood')}
                    title="Warm Wall"
                    className={`w-5 h-5 rounded-full border border-[#dadce0] bg-[#e2d5c3] transition-transform ${wallBackdrop === 'warm-wood' ? 'ring-2 ring-[#1a73e8] scale-110' : ''}`}
                  />
                  <button
                    onClick={() => setWallBackdrop('minimal-white')}
                    title="Minimal White Wall"
                    className={`w-5 h-5 rounded-full border border-[#dadce0] bg-[#fafafa] transition-transform ${wallBackdrop === 'minimal-white' ? 'ring-2 ring-[#1a73e8] scale-110' : ''}`}
                  />
                </div>
              </div>

              {/* Orientation toggle */}
              <button
                onClick={() => setOrientation(orientation === 'portrait' ? 'landscape' : 'portrait')}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg border border-[#dadce0] hover:bg-[#f1f3f4] text-[#3c4043] font-medium transition-colors cursor-pointer"
              >
                <RotateCw className="w-3.5 h-3.5" />
                <span className="capitalize">{orientation}</span>
              </button>

              {/* Image switcher */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#e8f0fe] hover:bg-[#d2e3fc] text-[#1a73e8] font-medium transition-colors cursor-pointer"
                >
                  <Upload className="w-3.5 h-3.5" />
                  <span>Upload Photo</span>
                </button>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleImageUpload}
                  accept="image/*"
                  className="hidden"
                />

                <button
                  onClick={() => {
                    setUserImage(null);
                    setSampleIndex((sampleIndex + 1) % SAMPLE_ARTWORKS.length);
                  }}
                  className="p-1 text-[#5f6368] hover:text-[#202124] rounded cursor-pointer"
                  title="Cycle Sample Artwork"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

            {/* Simulated Gallery Wall Viewport */}
            <div
              className={`w-full min-h-[440px] sm:min-h-[520px] rounded-2xl p-8 flex items-center justify-center border border-[#dadce0] relative overflow-hidden transition-colors duration-300 ${wallColors[wallBackdrop]}`}
            >
              {/* Subtle ambient wall shadow */}
              <div className="absolute inset-0 bg-radial from-transparent via-transparent to-black/10 pointer-events-none" />

              {/* The Dynamic Picture Frame */}
              <div
                className="transition-all duration-300 relative flex items-center justify-center shadow-2xl"
                style={{
                  width: orientation === 'portrait' ? '280px' : '360px',
                  height: orientation === 'portrait' ? '360px' : '280px',
                  backgroundColor: selectedFrameColor.color,
                  backgroundImage: selectedFrameColor.texture,
                  border: `1px solid ${selectedFrameColor.borderColor}`,
                  padding: `${frameWidth * 14}px`,
                  borderRadius: '3px',
                  boxShadow: '0 24px 48px -12px rgba(0, 0, 0, 0.45), 0 0 0 1px rgba(0,0,0,0.15)',
                }}
              >
                {/* Frame inner bevel line */}
                <div className="absolute inset-0 border border-white/20 pointer-events-none" />

                {/* Mat Board Layer */}
                <div
                  className="w-full h-full relative transition-all duration-300 flex items-center justify-center shadow-inner"
                  style={{
                    backgroundColor: matBoard === 'none' ? 'transparent' : matColors[matBoard],
                    padding: matBoard === 'none' ? '0px' : `${matWidth * 12}px`,
                    boxShadow: matBoard !== 'none' ? 'inset 0 2px 6px rgba(0,0,0,0.2)' : 'none',
                  }}
                >
                  {/* Artwork / Blank Opening Container */}
                  <div className="w-full h-full relative overflow-hidden bg-white shadow-xs flex items-center justify-center">
                    {userImage ? (
                      <img
                        src={userImage}
                        alt="Custom preview"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <EmptyFrameOpening
                        dimensions={dimDisplay}
                        subtitle="Photo Opening"
                        dark={matBoard === 'charcoal'}
                      />
                    )}

                    {/* Glass Reflection Simulation */}
                    {glassType !== 'none' && (
                      <div
                        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
                        style={{
                          background:
                            glassType === 'clear'
                              ? 'linear-gradient(135deg, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.05) 45%, rgba(255,255,255,0.2) 100%)'
                              : glassType === 'anti-glare'
                              ? 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.01) 100%)'
                              : 'linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0) 60%)',
                        }}
                      />
                    )}
                  </div>
                </div>

                {/* Stamped craft mark badge */}
                <div className="absolute -bottom-3 right-4 bg-white/95 text-[#202124] text-[9px] font-mono px-2 py-0.5 rounded shadow border border-[#dadce0]">
                  SBk Agartala
                </div>
              </div>
            </div>

            {/* Photo Preview & Frame Mode Status Bar */}
            <div className="bg-white rounded-xl border border-[#dadce0] p-3 shadow-2xs flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2">
                <span className="font-bold text-[#202124]">Photo Display:</span>
                <span className="text-[#5f6368]">
                  {userImage
                    ? 'Custom uploaded photo preview active'
                    : 'Clean blank archival mount (Ready for your photo)'}
                </span>
              </div>
              <div className="flex items-center gap-2">
                {userImage ? (
                  <button
                    onClick={() => setUserImage(null)}
                    className="px-3 py-1 rounded-lg border border-[#dadce0] hover:bg-[#fce8e6] text-[#d93025] font-medium transition-colors cursor-pointer"
                  >
                    Clear Photo (View Blank Frame)
                  </button>
                ) : (
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="px-3 py-1 rounded-lg bg-[#e8f0fe] hover:bg-[#d2e3fc] text-[#1a73e8] font-medium transition-colors cursor-pointer flex items-center gap-1.5"
                  >
                    <Upload className="w-3.5 h-3.5" />
                    <span>Upload Your Photo</span>
                  </button>
                )}
              </div>
            </div>

            {/* Between Frame Simulation and Controls: 33% Discount Option */}
            <Discount33Option
              isApplied={isDiscount33Applied}
              onToggle={onToggleDiscount33}
              className="mt-3"
            />

            {/* Spec readout caption */}
            <div className="text-center text-xs text-[#5f6368] flex items-center justify-center gap-3">
              <span>{selectedFrameColor.name}</span>
              <span aria-hidden="true">·</span>
              <span>
                {dimension === '8x11'
                  ? '8×11 in (Small Frame Offer)'
                  : dimension === '8x12'
                  ? '8×12 in (Large Frame Offer)'
                  : dimension === '12x18'
                  ? '12×18 in'
                  : dimension === '16x24'
                  ? '16×24 in'
                  : `${customWidth}×${customHeight} in Custom`}
              </span>
              <span aria-hidden="true">·</span>
              <span className="text-[#188038] font-medium">✓ Free Home Delivery</span>
            </div>

          </div>

          {/* Right 5 cols: Customization Controls & Instant Pricing Box */}
          <div className="lg:col-span-5 bg-white rounded-2xl border border-[#dadce0] p-6 shadow-sm space-y-6">
            
            {/* Control 1: Dimension Selection */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold text-[#202124] uppercase tracking-wide">
                  1. Select Dimensions
                </label>
                {(dimension === '8x11' || dimension === '8x12') && (
                  <span className="text-[10px] font-bold text-[#188038] bg-[#e6f4ea] px-2 py-0.5 rounded">
                    Store Offer Active
                  </span>
                )}
              </div>

              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setDimension('8x11')}
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                    dimension === '8x11'
                      ? 'border-[#1a73e8] bg-[#e8f0fe] ring-1 ring-[#1a73e8]'
                      : 'border-[#dadce0] hover:bg-[#f8f9fa]'
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <span className="text-sm font-bold text-[#202124]">8 × 11 in</span>
                    <span className="text-xs text-[#188038] font-bold">₹218</span>
                  </div>
                  <span className="text-[11px] text-[#5f6368] block mt-0.5 font-medium">Small Photo Frame</span>
                  <span className="text-[10px] text-[#188038] font-semibold block mt-1">✓ Free Delivery</span>
                </button>

                <button
                  onClick={() => setDimension('8x12')}
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                    dimension === '8x12'
                      ? 'border-[#1a73e8] bg-[#e8f0fe] ring-1 ring-[#1a73e8]'
                      : 'border-[#dadce0] hover:bg-[#f8f9fa]'
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <span className="text-sm font-bold text-[#202124]">8 × 12 in</span>
                    <span className="text-xs text-[#188038] font-bold">₹327</span>
                  </div>
                  <span className="text-[11px] text-[#5f6368] block mt-0.5 font-medium">Large Photo Frame</span>
                  <span className="text-[10px] text-[#188038] font-semibold block mt-1">✓ Free Delivery</span>
                </button>
              </div>
            </div>

            {/* Control 2: Wood Moulding / Finish */}
            <div>
              <label className="text-xs font-bold text-[#202124] uppercase tracking-wide block mb-2">
                2. Solid Wood Moulding Finish
              </label>
              <div className="grid grid-cols-3 gap-2">
                {FRAME_COLORS.map((frame) => (
                  <button
                    key={frame.id}
                    onClick={() => setFrameColorId(frame.id)}
                    className={`p-2 rounded-xl border flex flex-col items-center text-center transition-all cursor-pointer ${
                      frameColorId === frame.id
                        ? 'border-[#1a73e8] bg-[#e8f0fe] ring-1 ring-[#1a73e8]'
                        : 'border-[#dadce0] hover:bg-[#f8f9fa]'
                    }`}
                  >
                    <div
                      className="w-8 h-8 rounded-full border border-black/10 shadow-2xs mb-1"
                      style={{ backgroundColor: frame.color, backgroundImage: frame.texture }}
                    />
                    <span className="text-[10px] font-medium text-[#202124] line-clamp-1">
                      {frame.name.split(' ')[0]}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Control 3: Mat Board / Mount */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold text-[#202124] uppercase tracking-wide">
                  3. Archival Mat Board
                </label>
                <span className="text-[10px] text-[#5f6368]">
                  {matBoard === 'none' ? 'Full Bleed' : `${matWidth}" Border`}
                </span>
              </div>
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
                {(['none', 'off-white', 'cream', 'charcoal', 'linen'] as const).map((m) => (
                  <button
                    key={m}
                    onClick={() => setMatBoard(m)}
                    className={`px-3 py-1.5 rounded-lg border text-xs font-medium capitalize transition-colors whitespace-nowrap cursor-pointer ${
                      matBoard === m
                        ? 'border-[#1a73e8] bg-[#e8f0fe] text-[#1a73e8] font-bold'
                        : 'border-[#dadce0] hover:bg-[#f8f9fa] text-[#5f6368]'
                    }`}
                  >
                    {m === 'none' ? 'No Mat' : m}
                  </button>
                ))}
              </div>
            </div>

            {/* Control 4: Glass Works */}
            <div>
              <label className="text-xs font-bold text-[#202124] uppercase tracking-wide block mb-2">
                4. Glass Works & Protection
              </label>
              <div className="space-y-1.5">
                {[
                  {
                    id: 'clear',
                    title: '2mm Polish Edge Float Glass',
                    note: 'High clarity crystal glass, standard included',
                  },
                  {
                    id: 'anti-glare',
                    title: 'Tru-Vue Anti-Reflective UV Glass',
                    note: 'Reduces reflections by 80%, archival protection',
                  },
                  {
                    id: 'acrylic',
                    title: 'Shatter-Resistant Acrylic Sheet',
                    note: 'Lightweight & safe for children rooms',
                  },
                  {
                    id: 'none',
                    title: 'Stretched Canvas (No Glass)',
                    note: 'For textured oil or acrylic canvas art',
                  },
                ].map((g) => (
                  <button
                    key={g.id}
                    onClick={() => setGlassType(g.id as GlassType)}
                    className={`w-full p-2.5 rounded-xl border text-left transition-all flex items-center justify-between cursor-pointer ${
                      glassType === g.id
                        ? 'border-[#1a73e8] bg-[#e8f0fe] ring-1 ring-[#1a73e8]'
                        : 'border-[#dadce0] hover:bg-[#f8f9fa]'
                    }`}
                  >
                    <div>
                      <span className="text-xs font-bold text-[#202124] block">
                        {g.title}
                      </span>
                      <span className="text-[10px] text-[#5f6368]">{g.note}</span>
                    </div>
                    {glassType === g.id && (
                      <Check className="w-4 h-4 text-[#1a73e8] shrink-0" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Summary & Checkout Action */}
            <div className="pt-4 border-t border-[#dadce0]">
              <div className="flex items-baseline justify-between mb-1">
                <span className="text-xs text-[#5f6368]">Total Custom Estimate:</span>
                <div className="text-right flex items-baseline gap-2">
                  <span className={`text-2xl font-bold tabular-nums ${isDiscount33Applied ? 'text-[#188038]' : 'text-[#202124]'}`}>
                    ₹{totalPrice}
                  </span>
                  {isDiscount33Applied && (
                    <>
                      <span className="text-xs line-through text-[#80868b] tabular-nums">
                        ₹{rawPrice}
                      </span>
                      <span className="text-[10px] font-bold text-white bg-[#188038] px-1.5 py-0.5 rounded">
                        -33% OFF
                      </span>
                    </>
                  )}
                </div>
              </div>

              <div className="flex items-center justify-between text-[11px] text-[#188038] mb-4">
                <span>Free Home Delivery across Agartala</span>
                <span className="font-semibold">✓ Included (₹0)</span>
              </div>

              <div className="space-y-2">
                <button
                  onClick={handleAddToCart}
                  className="w-full py-3 rounded-xl bg-[#1a73e8] hover:bg-[#1557bf] text-white font-bold text-xs shadow-sm hover:shadow transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>
                    {added ? '✓ Added to Order!' : `Order Frame · ₹${totalPrice}`}
                  </span>
                </button>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={handleWhatsAppShare}
                    className="py-2 px-3 rounded-xl bg-[#e6f4ea] hover:bg-[#ceead6] text-[#137333] text-xs font-semibold transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-[#188038]" />
                    <span>WhatsApp Quote</span>
                  </button>

                  <button
                    onClick={onOpenBooking}
                    className="py-2 px-3 rounded-xl border border-[#dadce0] hover:bg-[#f1f3f4] text-xs font-semibold text-[#3c4043] transition-colors flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <span>In-Store Fitting</span>
                  </button>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
