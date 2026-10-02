import React, { useState } from 'react';
import { 
  CreditCard, 
  Truck, 
  Mail, 
  Send, 
  CheckCircle2, 
  Phone, 
  Sparkles, 
  ShieldCheck, 
  Clock, 
  FileText,
  BadgePercent,
  QrCode,
  ExternalLink
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/designs';

interface PvcCardInfo {
  id: string;
  nameBn: string;
  nameEn: string;
  badge: string;
  headerColor: string;
  gradient: string;
  accentColor: string;
  cardType: 'aadhaar' | 'pan' | 'voter' | 'ayushman' | 'abha';
  features: string[];
}

const PVC_CARDS: PvcCardInfo[] = [
  {
    id: 'aadhaar',
    nameBn: 'আধার কার্ড',
    nameEn: 'Aadhaar PVC Card',
    badge: 'সবচেয়ে জনপ্রিয়',
    headerColor: '#005b96',
    gradient: 'from-[#ff9933] via-[#ffffff] to-[#138808]',
    accentColor: '#005b96',
    cardType: 'aadhaar',
    features: ['সিকিউর QR কোড', 'হালকা ওয়াটারমার্ক', 'আজীবন দীর্ঘস্থায়ী'],
  },
  {
    id: 'voter',
    nameBn: 'ভোটার আইডি কার্ড',
    nameEn: 'Voter ID (EPIC) PVC',
    badge: 'নির্বাচন কমিশন',
    headerColor: '#1a365d',
    gradient: 'from-[#0f2027] via-[#203a43] to-[#2c5364]',
    accentColor: '#2b6cb0',
    cardType: 'voter',
    features: ['ডিজিটাল EPIC ফরম্যাট', 'হলোগ্রাফিক সিকিউরিটি', 'পকেট সাইজ'],
  },
  {
    id: 'pan',
    nameBn: 'প্যান কার্ড',
    nameEn: 'PAN PVC Smart Card',
    badge: 'ইনকাম ট্যাক্স ডিপার্টমেন্ট',
    headerColor: '#1e3a8a',
    gradient: 'from-[#1e3c72] via-[#2a5298] to-[#1e3c72]',
    accentColor: '#d97706',
    cardType: 'pan',
    features: ['গোল্ডেন ই-চিপ ইফেক্ট', 'হাই-রেজোলিউশন ছবি', 'ইউভি কোটিং'],
  },
  {
    id: 'ayushman',
    nameBn: 'আয়ুষ্মান ভারত কার্ড',
    nameEn: 'Ayushman Bharat (PM-JAY)',
    badge: '৫ লক্ষ টাকার স্বাস্থ্য সুবিধা',
    headerColor: '#15803d',
    gradient: 'from-[#0575e6] via-[#00f260] to-[#0575e6]',
    accentColor: '#16a34a',
    cardType: 'ayushman',
    features: ['পিএম-জেএওয়াই আইডি', 'হাসপাতালে সরাসরি গ্রহণযোগ্য', 'স্মার্ট বারকোড'],
  },
  {
    id: 'abha',
    nameBn: 'আভা কার্ড (ABHA)',
    nameEn: 'ABHA Health Card',
    badge: 'ডিজিটাল হেলথ রেকর্ড',
    headerColor: '#0284c7',
    gradient: 'from-[#00c6ff] to-[#0072ff]',
    accentColor: '#0284c7',
    cardType: 'abha',
    features: ['১৪ ডিজিট আভা নম্বর', 'স্মার্ট কিউআর কোড', 'স্মার্টফোন ফ্রেন্ডলি'],
  },
];

export const PvcCardServiceBanner: React.FC = () => {
  const [selectedCardId, setSelectedCardId] = useState<string>('aadhaar');

  const activeCard = PVC_CARDS.find((c) => c.id === selectedCardId) || PVC_CARDS[0];

  const handleWhatsAppOrder = (cardName: string) => {
    const text = encodeURIComponent(
      `নমস্কার SBk Enterprise! আমি বাড়িতে বসে PVC ${cardName} বানাতে চাই। আড়ালিয়া থেকে ৩ কিমি ফ্রী হোম ডেলিভারি / পোস্ট অফিসের সুবিধা বিস্তারিত জানান।`
    );
    window.open(`https://wa.me/${BUSINESS_INFO.phoneNumeric}?text=${text}`, '_blank');
  };

  return (
    <section id="pvc-service" className="relative bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white py-12 md:py-16 border-b-4 border-[#25d366] overflow-hidden">
      {/* Background glowing ambient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#1a73e8]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#25d366]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Announcement Tag */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#188038]/30 border border-[#25d366]/50 text-[#4ade80] text-xs font-bold tracking-wide shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#25d366] animate-pulse" />
            <span>নতুন অনলাইন সেবা · SBk Enterprise আগরতলা</span>
          </div>

          <div className="inline-flex items-center gap-2 text-xs font-semibold bg-white/10 px-3 py-1 rounded-full text-emerald-300 border border-white/15">
            <Truck className="w-3.5 h-3.5 text-[#25d366]" />
            <span>৩ কিলোমিটার পর্যন্ত সম্পূর্ণ ফ্রী হোম ডেলিভারি</span>
          </div>
        </div>

        {/* Main Grid: Left Banner Content, Right Realistic PVC Card Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left 7 Columns: Bengali Heading, Details & Action */}
          <div className="lg:col-span-7 space-y-5 text-left">
            <div className="space-y-2">
              <span className="text-[#38bdf8] text-xs font-bold tracking-wider uppercase flex items-center gap-1.5">
                <CreditCard className="w-4 h-4 text-[#38bdf8]" />
                অরিজিনাল এটিএম-কোয়ালিটি প্লাস্টিক পিভিসি কার্ড
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-snug">
                পিভিসি কার্ড করা হয় সাথে হোম ডেলিভারি —{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4ade80] via-[#38bdf8] to-[#fbbf24]">
                  ৩ কিমি পর্যন্ত সম্পূর্ণ ফ্রী!
                </span>
              </h2>
            </div>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              যেমন <strong className="text-white">প্যান কার্ড</strong>, <strong className="text-white">ভোটার কার্ড</strong>, <strong className="text-white">আয়ুষ্মান কার্ড</strong>, <strong className="text-white">আভা (ABHA) কার্ড</strong> এবং <strong className="text-white">আধার কার্ড</strong> — এখন আপনি বাড়িতে বসেই অনলাইনের মাধ্যমে খুব সহজে বানিয়ে নিতে পারবেন। আর এটি সরাসরি আপনার বাড়িতে চলে যাবে <strong className="text-[#4ade80]">ফ্রী হোম ডেলিভারি</strong> অথবা <strong className="text-[#38bdf8]">পোস্ট অফিসের মাধ্যমে</strong>!
            </p>

            {/* Service Highlights Box */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3 backdrop-blur-xs">
                <div className="w-8 h-8 rounded-lg bg-[#25d366]/20 text-[#25d366] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">১০০% ওয়াটারপ্রুফ প্লাস্টিক</h4>
                  <p className="text-[11px] text-slate-400 mt-0.5">রোদ বা পানিতে নষ্ট হবে না, এটিএম কার্ডের মতো শক্ত ও চকচকে।</p>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3 backdrop-blur-xs">
                <div className="w-8 h-8 rounded-lg bg-[#38bdf8]/20 text-[#38bdf8] flex items-center justify-center shrink-0 mt-0.5">
                  <Truck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">৩ কিমি ফ্রী হোম ডেলিভারি</h4>
                  <p className="text-[11px] text-slate-400 mt-0.5">আড়ালিয়া, প্রতাপগড়, বটতলা ও আগরতলা শহরের ৩ কিমিতে ডেলিভারি ফ্রী।</p>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3 backdrop-blur-xs">
                <div className="w-8 h-8 rounded-lg bg-[#fbbf24]/20 text-[#fbbf24] flex items-center justify-center shrink-0 mt-0.5">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">পোস্ট অফিসে হোম ডেলিভারি</h4>
                  <p className="text-[11px] text-slate-400 mt-0.5">দূরের গ্রাহকদের জন্য স্পিড পোস্টের মাধ্যমে সরাসরি বাড়ি পৌঁছে যাবে।</p>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3 backdrop-blur-xs">
                <div className="w-8 h-8 rounded-lg bg-[#a855f7]/20 text-[#c084fc] flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">ঘরে বসেই অনলাইন অর্ডার</h4>
                  <p className="text-[11px] text-slate-400 mt-0.5">লাইনে দাঁড়ানোর ঝামেলা নেই, WhatsApp-এ ডকুমেন্ট পাঠালেই তৈরি।</p>
                </div>
              </div>
            </div>

            {/* 3 Step Process */}
            <div className="p-3.5 rounded-xl bg-gradient-to-r from-slate-900 to-slate-800 border border-slate-700 text-xs">
              <span className="font-bold text-[#fbbf24] block mb-1.5 flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5" />
                অর্ডার করার সহজ ৩টি ধাপ:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[11px] text-slate-300">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center text-[10px] shrink-0">১</span>
                  <span>WhatsApp-এ কার্ডের PDF বা ফটো পাঠান</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-[10px] shrink-0">২</span>
                  <span>হাই-কোয়ালিটি PVC-তে প্রিন্ট হবে</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-amber-600 text-white font-bold flex items-center justify-center text-[10px] shrink-0">৩</span>
                  <span>ফ্রী হোম ডেলিভারি বা ডাকযোগে বাড়ি পৌঁছে যাবে</span>
                </div>
              </div>
            </div>

            {/* Direct Order CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={() => handleWhatsAppOrder(activeCard.nameBn)}
                className="px-6 py-3.5 rounded-xl bg-[#25d366] hover:bg-[#1ebc57] text-white font-bold text-sm shadow-lg hover:shadow-emerald-500/25 transition-all flex items-center gap-2 cursor-pointer active:scale-98"
              >
                <Send className="w-4 h-4" />
                <span>WhatsApp-এ অর্ডার করুন ({activeCard.nameBn})</span>
              </button>

              <a
                href={`tel:${BUSINESS_INFO.phoneNumeric}`}
                className="px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-sm border border-white/20 transition-all flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#38bdf8]" />
                <span>সরাসরি কল: {BUSINESS_INFO.phone}</span>
              </a>
            </div>

          </div>

          {/* Right 5 Columns: Realistic Interactive PVC Card Showcase */}
          <div className="lg:col-span-5 flex flex-col items-center">
            
            {/* Card Selector Tabs */}
            <div className="w-full flex items-center justify-start gap-1.5 overflow-x-auto pb-3 scrollbar-none mb-3">
              {PVC_CARDS.map((card) => (
                <button
                  key={card.id}
                  onClick={() => setSelectedCardId(card.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap cursor-pointer ${
                    selectedCardId === card.id
                      ? 'bg-[#38bdf8] text-slate-900 shadow-md font-bold'
                      : 'bg-white/10 text-slate-300 hover:bg-white/15'
                  }`}
                >
                  {card.nameBn}
                </button>
              ))}
            </div>

            {/* Hyper-realistic 3D Rendered PVC Plastic Card Display */}
            <div className="w-full max-w-sm perspective-1000 group">
              <div 
                className="relative rounded-2xl p-5 shadow-2xl transition-all duration-300 border-2 border-white/30 backdrop-blur-md overflow-hidden"
                style={{
                  minHeight: '220px',
                  background: selectedCardId === 'aadhaar'
                    ? 'linear-gradient(135deg, #ffffff 0%, #fff8f0 40%, #e6f4ea 100%)'
                    : selectedCardId === 'pan'
                    ? 'linear-gradient(135deg, #1e3c72 0%, #2a5298 50%, #1e3c72 100%)'
                    : selectedCardId === 'voter'
                    ? 'linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)'
                    : selectedCardId === 'ayushman'
                    ? 'linear-gradient(135deg, #0575e6 0%, #00f260 100%)'
                    : 'linear-gradient(135deg, #0072ff 0%, #00c6ff 100%)',
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7), inset 0 1px 1px rgba(255, 255, 255, 0.4)',
                }}
              >
                {/* Glossy Plastic Sheen Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/15 to-transparent pointer-events-none rounded-2xl" />

                {/* Holographic Security Strip on Top-Right */}
                <div className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-gradient-to-tr from-amber-400 via-emerald-300 to-purple-400 opacity-80 flex items-center justify-center shadow-inner border border-white/50 animate-pulse">
                  <ShieldCheck className="w-5 h-5 text-slate-800" />
                </div>

                {/* Card Header */}
                <div className="relative z-10 flex items-start gap-2.5 mb-3">
                  <div className="w-7 h-7 rounded-md bg-white/90 p-1 flex items-center justify-center shadow-xs">
                    <CreditCard className="w-5 h-5 text-[#005b96]" />
                  </div>
                  <div>
                    <span className={`text-[10px] font-black uppercase tracking-wider block ${selectedCardId === 'aadhaar' ? 'text-slate-800' : 'text-white'}`}>
                      GOVERNMENT OF INDIA · ভারত সরকার
                    </span>
                    <h3 className={`text-base font-extrabold leading-tight ${selectedCardId === 'aadhaar' ? 'text-[#005b96]' : 'text-white'}`}>
                      {activeCard.nameBn} ({activeCard.nameEn})
                    </h3>
                  </div>
                </div>

                {/* Card Body with Simulation of Photo, Chip & Details */}
                <div className="relative z-10 flex items-center gap-3.5 my-3">
                  {/* Photo Thumbnail */}
                  <div className="w-16 h-20 rounded-lg bg-slate-300/80 border-2 border-white shadow-md flex flex-col items-center justify-center text-slate-600 overflow-hidden relative">
                    <div className="w-6 h-6 rounded-full bg-slate-400 mb-1" />
                    <div className="w-10 h-6 rounded-t-full bg-slate-400" />
                    <span className="absolute bottom-0 inset-x-0 bg-black/60 text-[7px] text-white text-center py-0.5">
                      PHOTO
                    </span>
                  </div>

                  {/* Smart EMV Chip & Lines */}
                  <div className="flex-1 space-y-1.5">
                    {/* Metallic Golden Smart Chip */}
                    <div className="w-9 h-7 rounded-sm bg-gradient-to-br from-amber-200 via-amber-400 to-amber-500 border border-amber-600 shadow-xs flex items-center justify-center p-0.5">
                      <div className="w-full h-full border border-amber-600/40 rounded-xs grid grid-cols-2 gap-0.5 p-0.5">
                        <div className="border border-amber-700/30" />
                        <div className="border border-amber-700/30" />
                      </div>
                    </div>

                    <div className="space-y-1 pt-1">
                      <div className={`h-2 rounded ${selectedCardId === 'aadhaar' ? 'bg-slate-700/70 w-32' : 'bg-white/80 w-32'}`} />
                      <div className={`h-1.5 rounded ${selectedCardId === 'aadhaar' ? 'bg-slate-500/60 w-24' : 'bg-white/60 w-24'}`} />
                      <div className={`h-1.5 rounded ${selectedCardId === 'aadhaar' ? 'bg-slate-400/50 w-28' : 'bg-white/50 w-28'}`} />
                    </div>
                  </div>

                  {/* QR Code Simulation */}
                  <div className="w-12 h-12 bg-white rounded-md p-1 shadow-xs border border-slate-300 flex items-center justify-center">
                    <QrCode className="w-10 h-10 text-slate-800" />
                  </div>
                </div>

                {/* Card Bottom Number & Hologram Footer */}
                <div className="relative z-10 pt-2 border-t border-white/20 flex items-center justify-between text-[11px] font-mono">
                  <span className={`font-bold tracking-widest ${selectedCardId === 'aadhaar' ? 'text-slate-800' : 'text-white'}`}>
                    XXXX · XXXX · 7990
                  </span>
                  <span className="text-[10px] font-sans font-bold px-2 py-0.5 rounded bg-black/40 text-emerald-300 border border-emerald-400/40">
                    ✓ High-Gloss PVC
                  </span>
                </div>
              </div>

              {/* Card Feature Checklist */}
              <div className="mt-3 p-3 rounded-xl bg-white/5 border border-white/10 text-xs flex items-center justify-around text-slate-300">
                {activeCard.features.map((feat, idx) => (
                  <span key={idx} className="flex items-center gap-1 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#25d366]" />
                    <span>{feat}</span>
                  </span>
                ))}
              </div>

              {/* Bottom Quick Order Button for the selected PVC card */}
              <button
                onClick={() => handleWhatsAppOrder(activeCard.nameBn)}
                className="mt-3 w-full py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white text-xs font-bold shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>এই কার্ডটি ঘরে বসে অর্ডার করুন ({activeCard.nameBn})</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
