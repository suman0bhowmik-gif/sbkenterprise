import React from 'react';
import { Tag, Check, Sparkles, Percent } from 'lucide-react';

interface Discount33OptionProps {
  isApplied: boolean;
  onToggle: () => void;
  className?: string;
  compact?: boolean;
}

export const Discount33Option: React.FC<Discount33OptionProps> = ({
  isApplied,
  onToggle,
  className = '',
  compact = false,
}) => {
  if (compact) {
    return (
      <div
        className={`rounded-xl border p-2.5 transition-all ${
          isApplied
            ? 'bg-[#e6f4ea] border-[#188038] text-[#137333] shadow-xs'
            : 'bg-[#fef7e0] border-[#f9ab00] text-[#b06000] hover:bg-[#feefc3]'
        } ${className}`}
      >
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 text-xs font-bold">
            <Percent className="w-3.5 h-3.5 shrink-0" />
            <span>33% Store Discount Option</span>
          </div>
          <button
            type="button"
            onClick={onToggle}
            className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1 shadow-2xs ${
              isApplied
                ? 'bg-[#188038] text-white hover:bg-[#137333]'
                : 'bg-[#e37400] text-white hover:bg-[#b06000]'
            }`}
          >
            {isApplied ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>33% Applied</span>
              </>
            ) : (
              <>
                <Tag className="w-3.5 h-3.5" />
                <span>Apply 33%</span>
              </>
            )}
          </button>
        </div>
        <p className="text-[10px] mt-1 opacity-90">
          {isApplied
            ? '✓ 33% discount is active for this frame!'
            : 'Everyone can apply this 33% discount option.'}
        </p>
      </div>
    );
  }

  return (
    <div
      className={`rounded-2xl border-2 transition-all p-4 sm:p-5 relative overflow-hidden shadow-xs ${
        isApplied
          ? 'bg-gradient-to-r from-[#e6f4ea] via-[#f0fdf4] to-[#e8f0fe] border-[#188038]'
          : 'bg-gradient-to-r from-[#fef7e0] via-[#fff8e1] to-[#fef7e0] border-[#f9ab00]'
      } ${className}`}
    >
      {/* Decorative background glow */}
      <div className="absolute top-0 right-0 -mt-6 -mr-6 w-24 h-24 rounded-full bg-white/40 blur-xl pointer-events-none" />

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
        <div className="flex items-center gap-3.5 text-center sm:text-left">
          <div
            className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 shadow-xs ${
              isApplied
                ? 'bg-[#188038] text-white'
                : 'bg-[#ea8600] text-white'
            }`}
          >
            {isApplied ? (
              <Check className="w-7 h-7" />
            ) : (
              <Percent className="w-7 h-7" />
            )}
          </div>

          <div>
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
              <span
                className={`text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full ${
                  isApplied
                    ? 'bg-[#188038] text-white'
                    : 'bg-[#b06000] text-white'
                }`}
              >
                Special 33% Offer Option
              </span>
              <span className="text-xs font-semibold text-[#5f6368]">
                Open to Everyone
              </span>
            </div>

            <h3 className="text-base sm:text-lg font-bold text-[#202124] mt-0.5">
              {isApplied
                ? '🎉 33% Discount Applied to Photo Frames!'
                : 'Apply 33% Discount Option to Each Photo Frame'}
            </h3>

            <p className="text-xs text-[#5f6368] mt-0.5 leading-relaxed">
              {isApplied
                ? 'Great! Your 33% discount has been applied to both Small (8×11) and Large (8×12) photo frames.'
                : 'Everyone can apply this 33% discount. Click the button to apply 33% OFF on both photo frames right now.'}
            </p>
          </div>
        </div>

        {/* Action Button */}
        <div className="shrink-0 w-full sm:w-auto flex flex-col sm:items-end gap-1">
          <button
            type="button"
            onClick={onToggle}
            className={`w-full sm:w-auto px-6 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all shadow-sm hover:shadow flex items-center justify-center gap-2 cursor-pointer active:scale-98 ${
              isApplied
                ? 'bg-[#188038] hover:bg-[#137333] text-white'
                : 'bg-[#ea8600] hover:bg-[#d97706] text-white'
            }`}
          >
            {isApplied ? (
              <>
                <Check className="w-4 h-4 stroke-[3]" />
                <span>33% Discount Applied (Click to Remove)</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4" />
                <span>Apply 33% Discount Option</span>
              </>
            )}
          </button>
          <span className="text-[10px] text-center sm:text-right text-[#5f6368]">
            {isApplied ? '✓ 33% off active on all photo frames' : 'Instant 1-click apply for all customers'}
          </span>
        </div>
      </div>
    </div>
  );
};
