export interface FrameDesign {
  id: string;
  name: string;
  category: 'wooden' | 'canvas' | 'glass' | 'shadowbox' | 'certificate';
  description: string;
  dimensions: string;
  price: number;
  originalPrice?: number;
  material: string;
  finish: string;
  glassOption: string;
  isOffer?: boolean;
  offerLabel?: string;
  rating: number;
  reviewsCount: number;
  popularFor: string;
  frameColor: string;
  borderStyle: string;
  innerBorder?: string;
  matColor: string;
  sampleArtworkType: 'portrait' | 'landscape' | 'canvas' | 'minimal' | 'vintage' | 'temple' | 'certificate';
}

export type GlassType = 'clear' | 'anti-glare' | 'acrylic' | 'none';

export type FrameColorOption = {
  id: string;
  name: string;
  color: string;
  borderColor: string;
  texture: string;
  priceMultiplier: number;
};

export interface CustomizerState {
  dimension: '8x11' | '8x12' | '12x18' | '16x24' | 'custom';
  customWidth: number;
  customHeight: number;
  frameColor: string;
  frameWidth: number; // in inches
  matBoard: 'none' | 'off-white' | 'cream' | 'charcoal' | 'linen';
  matWidth: number; // in inches
  glassType: GlassType;
  wallBackdrop: 'gallery-cream' | 'modern-slate' | 'warm-wood' | 'minimal-white';
  orientation: 'portrait' | 'landscape';
  userImage: string | null;
  sampleArtIndex: number;
}

export interface BookingFormData {
  name: string;
  phone: string;
  email: string;
  date: string;
  timeSlot: string;
  service: string;
  notes: string;
}

export interface CartItem {
  id: string;
  title: string;
  dimension: string;
  frameName: string;
  glassType: string;
  matBoard: string;
  price: number;
  quantity: number;
  image?: string | null;
}
