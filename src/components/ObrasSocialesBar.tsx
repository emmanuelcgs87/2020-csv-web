import React, { useState } from 'react';
import { OBRAS_SOCIALES } from '../data/clinicData';
import { ObraSocial } from '../types';
import { Check, Info, ShieldCheck, ChevronRight } from 'lucide-react';

interface ObrasSocialesBarProps {
  onOpenCoverageModal: (obraSocial?: ObraSocial) => void;
}

export const ObrasSocialesBar: React.FC<ObrasSocialesBarProps> = ({ onOpenCoverageModal }) => {
  const [selectedOS, setSelectedOS] = useState<ObraSocial | null>(null);

  return (
    <section className="bg-white border-y border-slate-200/80 py-8 shadow-sm relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-2 mb-6">
          <p className="text-[11px] sm:text-xs uppercase tracking-widest text-slate-500 font-bold">
            Trabajamos con las principales obras sociales y prepagas
          </p>
          <p className="text-xs text-slate-400">
            Hacé clic en tu prepaga u obra social para consultar cobertura y planes atendidos
          </p>
        </div>

        {/* Logos / Badges Grid with smooth scroll on mobile */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 md:gap-6">
          {OBRAS_SOCIALES.map((os) => (
            <button
              key={os.id}
              onClick={() => onOpenCoverageModal(os)}
              className="group px-4 py-2.5 rounded-xl border border-slate-200/80 bg-slate-50/70 hover:bg-white hover:border-sky-300 hover:shadow-md transition-all duration-200 flex items-center gap-2 text-slate-700 hover:text-sky-700"
            >
              <div
                className="w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: os.color }}
              />
              <span className="font-semibold text-xs sm:text-sm tracking-tight group-hover:scale-105 transition-transform">
                {os.name}
              </span>
              <span className="text-[10px] bg-slate-200/80 group-hover:bg-sky-100 text-slate-600 group-hover:text-sky-700 font-medium px-1.5 py-0.5 rounded">
                {os.coverageLevel === 'Completa' ? '100%' : 'Convenio'}
              </span>
            </button>
          ))}
        </div>

        <div className="mt-5 text-center">
          <button
            onClick={() => onOpenCoverageModal()}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-700 hover:text-sky-800 underline underline-offset-4"
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            Ver listado completo de coberturas, coseguros y reintegros
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
