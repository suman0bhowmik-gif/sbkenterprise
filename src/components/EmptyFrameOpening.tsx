import React from 'react';

interface EmptyFrameOpeningProps {
  dimensions?: string;
  subtitle?: string;
  className?: string;
  dark?: boolean;
}

export const EmptyFrameOpening: React.FC<EmptyFrameOpeningProps> = ({
  dimensions,
  subtitle = 'Archival Photo Mount',
  className = 'w-full h-full',
  dark = false,
}) => {
  return (
    <div
      className={`relative w-full h-full flex flex-col items-center justify-center p-3 select-none overflow-hidden transition-colors ${
        dark ? 'bg-[#18191c] text-slate-300' : 'bg-[#faf8f5] text-[#5f6368]'
      } ${className}`}
      style={{
        boxShadow: dark
          ? 'inset 0 2px 6px rgba(0,0,0,0.6)'
          : 'inset 0 2px 5px rgba(0,0,0,0.08), inset 0 0 0 1px rgba(0,0,0,0.05)',
      }}
    >
      {/* 4 Archival Corner Photo Mounting Tabs */}
      <div
        className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 opacity-40 pointer-events-none"
        style={{ borderColor: dark ? '#cbd5e1' : '#8c7862' }}
      />
      <div
        className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 opacity-40 pointer-events-none"
        style={{ borderColor: dark ? '#cbd5e1' : '#8c7862' }}
      />
      <div
        className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 opacity-40 pointer-events-none"
        style={{ borderColor: dark ? '#cbd5e1' : '#8c7862' }}
      />
      <div
        className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 opacity-40 pointer-events-none"
        style={{ borderColor: dark ? '#cbd5e1' : '#8c7862' }}
      />

      {/* Subtle Fine Center Crosshair */}
      <div
        className={`absolute inset-x-6 top-1/2 h-[1px] ${
          dark ? 'bg-white/10' : 'bg-black/6'
        } pointer-events-none`}
      />
      <div
        className={`absolute inset-y-6 left-1/2 w-[1px] ${
          dark ? 'bg-white/10' : 'bg-black/6'
        } pointer-events-none`}
      />

      {/* Clean Dimensional Callout Box in Center */}
      <div
        className={`relative z-10 px-3 py-1.5 rounded text-center border backdrop-blur-xs shadow-2xs ${
          dark
            ? 'bg-black/40 border-white/10 text-white'
            : 'bg-white/85 border-[#e5e0d8] text-[#202124]'
        }`}
      >
        {dimensions && (
          <span className="font-bold text-xs tracking-wider block tabular-nums">
            {dimensions}
          </span>
        )}
        <span
          className={`text-[9px] tracking-wide block uppercase font-medium ${
            dark ? 'text-slate-400' : 'text-[#80868b]'
          }`}
        >
          {subtitle}
        </span>
      </div>

      {/* Diagonal Glass Sheen Reflection */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent pointer-events-none transform -skew-x-12" />
    </div>
  );
};
