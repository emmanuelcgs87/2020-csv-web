import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark' | 'color';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  showSubtitle?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'light',
  size = 'md',
  className = '',
  showSubtitle = false,
}) => {
  const isLight = variant === 'light'; // White/bright text on dark backgrounds

  // Sizing configurations
  const sizes = {
    sm: {
      emblemW: 'w-7',
      emblemH: 'h-7',
      boxW: 'w-7',
      boxH: 'h-3.5',
      numSize: 'text-[9px]',
      titleLine1: 'text-[10px]',
      titleLine2: 'text-[12px]',
      gap: 'gap-2',
    },
    md: {
      emblemW: 'w-9',
      emblemH: 'h-9',
      boxW: 'w-9',
      boxH: 'h-4.5',
      numSize: 'text-[11px]',
      titleLine1: 'text-[11px]',
      titleLine2: 'text-[15px]',
      gap: 'gap-2.5',
    },
    lg: {
      emblemW: 'w-12',
      emblemH: 'h-12',
      boxW: 'w-12',
      boxH: 'h-6',
      numSize: 'text-[15px]',
      titleLine1: 'text-[13px]',
      titleLine2: 'text-[19px]',
      gap: 'gap-3',
    },
  };

  const s = sizes[size] || sizes.md;

  return (
    <div className={`flex items-center ${s.gap} select-none ${className}`}>
      {/* 20 20 Stacked Emblem matching 2020-logo-white-white@2x.png */}
      <div className="flex flex-col rounded-md overflow-hidden shadow-sm shrink-0 border border-white/20">
        {/* Top box: White bg with dark text */}
        <div
          className={`${s.boxW} ${s.boxH} bg-white flex items-center justify-center font-black ${s.numSize} text-slate-950 leading-none tracking-tighter`}
          style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
        >
          20
        </div>
        {/* Bottom box: Dark bg with white text */}
        <div
          className={`${s.boxW} ${s.boxH} ${
            isLight ? 'bg-slate-950 text-white' : 'bg-slate-900 text-white'
          } flex items-center justify-center font-black ${s.numSize} leading-none tracking-tighter border-t border-white/30`}
          style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
        >
          20
        </div>
      </div>

      {/* Typography: "Centro de" & "Salud Visual" */}
      <div className="flex flex-col leading-none">
        <span
          className={`font-medium ${s.titleLine1} tracking-wide ${
            isLight ? 'text-slate-200' : 'text-slate-600'
          }`}
        >
          Centro de
        </span>
        <span
          className={`font-black ${s.titleLine2} tracking-tight ${
            isLight ? 'text-white' : 'text-slate-900'
          } mt-0.5`}
          style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
        >
          Salud Visual
        </span>
        {showSubtitle && (
          <span className="text-[10px] tracking-wider uppercase text-sky-400 font-semibold mt-0.5">
            Bahía Blanca · Monte Hermoso
          </span>
        )}
      </div>
    </div>
  );
};
