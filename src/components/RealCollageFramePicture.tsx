import React from 'react';
import { Sparkles, Heart, Check, ZoomIn } from 'lucide-react';

interface RealCollageFramePictureProps {
  className?: string;
  showBadge?: boolean;
}

export const RealCollageFramePicture: React.FC<RealCollageFramePictureProps> = ({
  className = '',
  showBadge = true,
}) => {
  return (
    <div className={`relative w-full max-w-[340px] mx-auto select-none ${className}`}>
      {/* Outer shadow and hand-held frame simulation */}
      <div className="relative rounded-lg shadow-2xl p-2.5 transition-transform duration-300 hover:scale-[1.02]">
        
        {/* Hand holding the frame silhouette on the left (as in original photo) */}
        <div 
          className="absolute -left-3 top-1/3 w-8 h-28 rounded-r-2xl bg-gradient-to-r from-[#e3b498] via-[#eec5ab] to-[#dca587] shadow-lg border-r border-[#c28f73] z-30 pointer-events-none transform -rotate-2"
          title="Hand-crafted in Aralia Workshop"
        >
          {/* Thumb holding frame edge */}
          <div className="absolute top-2 -right-2.5 w-6 h-9 rounded-full bg-gradient-to-br from-[#edd0be] to-[#cca084] shadow-md border-r border-[#ba876a]" />
          {/* Subtle skin highlights */}
          <div className="absolute inset-y-2 left-1 w-1 bg-white/20 rounded-full blur-[1px]" />
        </div>

        {/* Real Solid Matte Black Moulding */}
        <div 
          className="relative bg-[#171717] rounded-sm p-4 shadow-[0_16px_36px_rgba(0,0,0,0.45)] border-t border-l border-[#2e2e2e] border-b border-r border-[#0d0d0d]"
          style={{
            boxShadow: 'inset 0 2px 4px rgba(255,255,255,0.1), inset 0 -3px 6px rgba(0,0,0,0.8), 0 20px 40px -10px rgba(0,0,0,0.6)',
          }}
        >
          {/* Mitred 45-degree corner lines subtle effect */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-white/20 pointer-events-none" />
          <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-white/20 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-white/20 pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-white/20 pointer-events-none" />

          {/* Inner Frame Bevel Rim */}
          <div className="relative rounded-xs overflow-hidden border border-[#2b2b2b] shadow-inner bg-slate-900">

            {/* The Actual Real Custom Birthday / Friendship Collage Artwork */}
            <div className="relative aspect-[3/4] w-full bg-[#f8f9fa] overflow-hidden">
              
              {/* Photo Tile Grid */}
              <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-[2px] bg-slate-200 p-[2px]">
                
                {/* Tile 1: Top-Left (Green suit & Violet saree) */}
                <div className="relative overflow-hidden bg-gradient-to-br from-[#1b4332] via-[#2d6a4f] to-[#40916c] flex flex-col justify-end p-1">
                  <div className="absolute inset-0 flex items-center justify-around opacity-95">
                    {/* Girl 1 */}
                    <div className="w-6 h-14 bg-gradient-to-b from-[#081c15] via-[#1b4332] to-[#081c15] rounded-t-full flex flex-col items-center">
                      <div className="w-3.5 h-3.5 rounded-full bg-[#eec5ab] mt-0.5 border border-amber-300" />
                      <div className="w-5 h-8 bg-[#2d6a4f] rounded-t-sm mt-0.5" />
                    </div>
                    {/* Girl 2 */}
                    <div className="w-6 h-14 bg-gradient-to-b from-[#4a0e4e] via-[#6a1b9a] to-[#4a0e4e] rounded-t-full flex flex-col items-center">
                      <div className="w-3.5 h-3.5 rounded-full bg-[#f1cfbe] mt-0.5 border border-amber-300" />
                      <div className="w-5 h-8 bg-[#8e24aa] rounded-t-sm mt-0.5" />
                    </div>
                  </div>
                  <span className="relative z-10 text-[6px] text-white/90 font-bold bg-black/40 px-1 rounded-xs backdrop-blur-2xs">Bestie</span>
                </div>

                {/* Tile 2: Top-Center (Festive Silk Saree with Gold Necklace) */}
                <div className="relative overflow-hidden bg-gradient-to-br from-[#4a148c] via-[#7b1fa2] to-[#ab47bc] flex flex-col justify-end p-1">
                  <div className="absolute inset-0 flex items-center justify-around">
                    <div className="w-7 h-14 bg-[#4a148c] rounded-t-full flex flex-col items-center">
                      <div className="w-4 h-4 rounded-full bg-[#f5d0b5] mt-0.5 relative">
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-300 absolute -top-0.5 left-1" />
                      </div>
                      <div className="w-5 h-2 bg-amber-400 rounded-full mt-0.5" />
                      <div className="w-6 h-7 bg-[#6a1b9a] mt-0.5" />
                    </div>
                  </div>
                  <span className="relative z-10 text-[6px] text-amber-200 font-bold bg-black/40 px-1 rounded-xs backdrop-blur-2xs">Moments</span>
                </div>

                {/* Tile 3: Top-Right (Lilac dress & Black kurti) */}
                <div className="relative overflow-hidden bg-gradient-to-br from-[#c8b6ff] via-[#b8c0ff] to-[#bbd0ff] flex flex-col justify-end p-1">
                  <div className="absolute inset-0 flex items-center justify-around">
                    <div className="w-6 h-14 bg-[#b8c0ff] rounded-t-full flex flex-col items-center">
                      <div className="w-3.5 h-3.5 rounded-full bg-[#eed2c2] mt-0.5" />
                      <div className="w-5 h-8 bg-[#d8bbff] rounded-t-sm mt-0.5" />
                    </div>
                    <div className="w-6 h-14 bg-[#212529] rounded-t-full flex flex-col items-center">
                      <div className="w-3.5 h-3.5 rounded-full bg-[#eed2c2] mt-0.5" />
                      <div className="w-5 h-8 bg-[#343a40] rounded-t-sm mt-0.5" />
                    </div>
                  </div>
                  <span className="relative z-10 text-[6px] text-slate-900 font-bold bg-white/70 px-1 rounded-xs">Forever</span>
                </div>

                {/* Tile 4: Middle-Left (Lavender saree & Black outfit) */}
                <div className="relative overflow-hidden bg-gradient-to-br from-[#e0aaff] via-[#c77dff] to-[#9d4edd] flex flex-col justify-end p-1">
                  <div className="absolute inset-0 flex items-center justify-around">
                    <div className="w-6 h-14 bg-[#7b2cbf] rounded-t-full flex flex-col items-center">
                      <div className="w-3.5 h-3.5 rounded-full bg-[#eed2c2] mt-0.5" />
                      <div className="w-5 h-8 bg-[#9d4edd] mt-0.5" />
                    </div>
                    <div className="w-6 h-14 bg-[#111111] rounded-t-full flex flex-col items-center">
                      <div className="w-3.5 h-3.5 rounded-full bg-[#eed2c2] mt-0.5" />
                      <div className="w-5 h-8 bg-[#212529] mt-0.5" />
                    </div>
                  </div>
                  <span className="relative z-10 text-[6px] text-white font-bold bg-black/40 px-1 rounded-xs">Memories</span>
                </div>

                {/* Tile 5: Middle-Center (Warm smiles together) */}
                <div className="relative overflow-hidden bg-gradient-to-br from-[#ffd166] via-[#f78c6b] to-[#ef476f] flex flex-col justify-end p-1">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-8 h-12 rounded-t-full bg-white/90 flex flex-col items-center pt-1 shadow-xs">
                      <div className="w-4 h-4 rounded-full bg-[#f4cfb8]" />
                      <div className="w-6 h-6 bg-gradient-to-br from-purple-700 to-pink-600 rounded-t-sm mt-1" />
                    </div>
                  </div>
                  <span className="relative z-10 text-[6px] text-white font-bold bg-black/40 px-1 rounded-xs">Together</span>
                </div>

                {/* Tile 6: Middle-Right (Pink floral & Lime green blazer) */}
                <div className="relative overflow-hidden bg-gradient-to-br from-[#ff70a6] via-[#ff9770] to-[#ffd670] flex flex-col justify-end p-1">
                  <div className="absolute inset-0 flex items-center justify-around">
                    <div className="w-6 h-14 bg-[#ff70a6] rounded-t-full flex flex-col items-center">
                      <div className="w-3.5 h-3.5 rounded-full bg-[#eed2c2] mt-0.5" />
                      <div className="w-5 h-8 bg-[#e91e63] mt-0.5" />
                    </div>
                    <div className="w-6 h-14 bg-[#a7c957] rounded-t-full flex flex-col items-center">
                      <div className="w-3.5 h-3.5 rounded-full bg-[#eed2c2] mt-0.5" />
                      <div className="w-5 h-8 bg-[#6a994e] mt-0.5" />
                    </div>
                  </div>
                  <span className="relative z-10 text-[6px] text-white font-bold bg-black/40 px-1 rounded-xs">Celebration</span>
                </div>

                {/* Tile 7: Bottom-Left (Purple kurti & dark attire) */}
                <div className="relative overflow-hidden bg-gradient-to-br from-[#e0aaff] via-[#9d4edd] to-[#5a189a] flex flex-col justify-end p-1">
                  <div className="absolute inset-0 flex items-center justify-around">
                    <div className="w-6 h-12 bg-[#5a189a] rounded-t-full flex flex-col items-center">
                      <div className="w-3.5 h-3.5 rounded-full bg-[#eed2c2] mt-0.5" />
                      <div className="w-5 h-7 bg-[#7b2cbf] mt-0.5" />
                    </div>
                    <div className="w-6 h-12 bg-[#1b1b1e] rounded-t-full flex flex-col items-center">
                      <div className="w-3.5 h-3.5 rounded-full bg-[#eed2c2] mt-0.5" />
                      <div className="w-5 h-7 bg-[#343a40] mt-0.5" />
                    </div>
                  </div>
                  <span className="relative z-10 text-[6px] text-white font-bold bg-black/40 px-1 rounded-xs">Sisters</span>
                </div>

                {/* Tile 8: Bottom-Center (Centerpiece background) */}
                <div className="relative overflow-hidden bg-gradient-to-br from-[#7209b7] via-[#560bad] to-[#3a0ca3] flex flex-col justify-end p-1">
                  <span className="relative z-10 text-[6px] text-amber-300 font-bold bg-black/40 px-1 rounded-xs">Friendship</span>
                </div>

                {/* Tile 9: Bottom-Right (Blue kurti & Silk saree) */}
                <div className="relative overflow-hidden bg-gradient-to-br from-[#0077b6] via-[#023e8a] to-[#7209b7] flex flex-col justify-end p-1">
                  <div className="absolute inset-0 flex items-center justify-around">
                    <div className="w-6 h-12 bg-[#023e8a] rounded-t-full flex flex-col items-center">
                      <div className="w-3.5 h-3.5 rounded-full bg-[#eed2c2] mt-0.5" />
                      <div className="w-5 h-7 bg-[#0077b6] mt-0.5" />
                    </div>
                    <div className="w-6 h-12 bg-[#7209b7] rounded-t-full flex flex-col items-center">
                      <div className="w-3.5 h-3.5 rounded-full bg-[#eed2c2] mt-0.5" />
                      <div className="w-5 h-7 bg-[#9d4edd] mt-0.5" />
                    </div>
                  </div>
                  <span className="relative z-10 text-[6px] text-white font-bold bg-black/40 px-1 rounded-xs">Joy</span>
                </div>

              </div>

              {/* Signature Center Cutout Feature (Maroon saree & Golden shimmer saree) */}
              <div className="absolute inset-x-8 bottom-6 top-24 z-20 flex items-end justify-center pointer-events-none drop-shadow-[0_8px_16px_rgba(0,0,0,0.6)]">
                <div className="w-28 h-36 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent rounded-2xl flex items-end justify-center gap-1 p-1">
                  {/* Friend 1: Wine Maroon Saree */}
                  <div className="w-12 h-32 bg-gradient-to-b from-[#67001f] via-[#980043] to-[#49001b] rounded-t-2xl flex flex-col items-center border border-amber-300/40 shadow-md">
                    <div className="w-5 h-5 rounded-full bg-[#f4d1bd] mt-1 relative border border-amber-300">
                      <div className="w-1.5 h-1.5 bg-black rounded-full absolute top-1 left-1.5" />
                    </div>
                    <div className="w-7 h-3 bg-amber-400/80 rounded-full mt-0.5" />
                    <div className="w-10 h-20 bg-[#67001f] rounded-t-md mt-1 border-t border-amber-400" />
                  </div>
                  {/* Friend 2: Golden Beige Shimmer Saree */}
                  <div className="w-12 h-32 bg-gradient-to-b from-[#d4af37] via-[#f3e5ab] to-[#c5a059] rounded-t-2xl flex flex-col items-center border border-amber-200/50 shadow-md">
                    <div className="w-5 h-5 rounded-full bg-[#f4d1bd] mt-1 relative border border-amber-200">
                      <div className="w-1.5 h-1.5 bg-black rounded-full absolute top-1 left-1.5" />
                    </div>
                    <div className="w-7 h-3 bg-amber-300 rounded-full mt-0.5" />
                    <div className="w-10 h-20 bg-[#d4af37] rounded-t-md mt-1 border-t border-amber-200" />
                  </div>
                </div>
              </div>

              {/* Bottom Watermark Caption exactly like real frame */}
              <div className="absolute bottom-1.5 inset-x-2 z-30 flex items-center justify-between px-2 py-0.5 bg-black/60 rounded backdrop-blur-2xs text-[8px] text-white/90 font-medium">
                <span className="tracking-wide flex items-center gap-1 font-mono">
                  <span>realme</span>
                  <span className="opacity-75">· SBk Custom Collage</span>
                </span>
                <span className="text-red-400 flex items-center gap-0.5">
                  <Heart className="w-2.5 h-2.5 fill-current" />
                </span>
              </div>

              {/* Glass Reflection Glare Streak Across the Glass */}
              <div 
                className="absolute inset-0 pointer-events-none z-40"
                style={{
                  background: 'linear-gradient(125deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.08) 35%, transparent 55%, rgba(255,255,255,0.18) 100%)',
                }}
              />

            </div>

          </div>

        </div>

        {/* Real Customer Frame Authenticity Tag */}
        {showBadge && (
          <div className="mt-3 bg-white rounded-xl p-2.5 shadow-sm border border-[#dadce0] flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#188038] animate-pulse" />
              <span className="font-bold text-[#202124]">Real Workshop Photo</span>
              <span className="text-[10px] text-[#5f6368]">(8×12 in Birthday Bestseller)</span>
            </div>
            <span className="text-[11px] font-bold text-[#188038] bg-[#e6f4ea] px-2 py-0.5 rounded flex items-center gap-1">
              <Check className="w-3 h-3" />
              <span>Matte Black Frame</span>
            </span>
          </div>
        )}

      </div>
    </div>
  );
};
