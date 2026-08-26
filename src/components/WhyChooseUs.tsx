import React, { useState } from 'react';
import { WHY_CHOOSE_US_ITEMS } from '../data/clinicData';
import { MapPin, ChevronDown, Check, ShieldCheck, Sparkles, Clock, Calendar, ArrowRight } from 'lucide-react';

interface WhyChooseUsProps {
  onOpenBooking: () => void;
  onOpenUrgencias: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onOpenBooking, onOpenUrgencias }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <section id="por-que-elegirnos" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider">
            Por Qué Elegirnos
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-['Outfit']">
            Tecnología de vanguardia <br className="hidden sm:inline" />
            <span className="text-sky-600">para tu salud visual</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Contamos con equipamiento de última generación y un equipo altamente capacitado para brindar la mejor atención oftalmológica de Bahía Blanca y la región.
          </p>
        </div>

        {/* Content Layout: Left Accordion & Right Equipment Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Numbered Interactive Accordion */}
          <div className="lg:col-span-6 space-y-3">
            {WHY_CHOOSE_US_ITEMS.map((item, idx) => {
              const isActive = activeIndex === idx;
              return (
                <div
                  key={item.number}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isActive
                      ? 'border-sky-500 bg-sky-50/40 shadow-md ring-1 ring-sky-500/20'
                      : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50/50'
                  }`}
                >
                  <button
                    onClick={() => setActiveIndex(idx)}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none"
                    aria-expanded={isActive}
                  >
                    <div className="flex items-baseline gap-3">
                      <span className={`text-base sm:text-lg font-bold transition-colors ${
                        isActive ? 'text-sky-600' : 'text-slate-400'
                      }`}>
                        {item.number}/
                      </span>
                      <div>
                        <h3 className={`text-lg sm:text-xl font-bold tracking-tight transition-colors ${
                          isActive ? 'text-slate-900' : 'text-slate-700'
                        }`}>
                          {item.title}
                        </h3>
                        {!isActive && (
                          <p className="text-xs text-slate-500 mt-0.5 hidden sm:block">
                            {item.subtitle}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                      isActive ? 'bg-sky-600 text-white rotate-180' : 'bg-slate-100 text-slate-500'
                    }`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {/* Expanded content */}
                  {isActive && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 space-y-4 border-t border-sky-100/70 animate-fadeIn">
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                        {item.subtitle}
                      </p>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {item.description}
                      </p>

                      {/* Bullet points */}
                      <ul className="space-y-2 pt-2">
                        {item.bullets.map((b, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2 text-xs text-slate-700">
                            <Check className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Action context button */}
                      <div className="pt-3">
                        {idx === 3 ? (
                          <button
                            onClick={onOpenUrgencias}
                            className="inline-flex items-center gap-1.5 text-xs font-bold text-rose-600 hover:text-rose-700 underline"
                          >
                            <Clock className="w-3.5 h-3.5" />
                            Ver protocolo de guardia y teléfono de urgencias →
                          </button>
                        ) : (
                          <button
                            onClick={onOpenBooking}
                            className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-600 hover:text-sky-700 underline"
                          >
                            <Calendar className="w-3.5 h-3.5" />
                            Agendar consulta con nuestros especialistas →
                          </button>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: High-tech Medical Equipment Image with Floating Badge */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 aspect-[4/3] sm:aspect-[16/11] bg-slate-900 group">
              <img
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80"
                alt="Equipamiento oftalmológico de alta complejidad en 2020 Oftalmología Bahía Blanca"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

              {/* Floating Bottom Card: Beruti 128 Bahía Blanca */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6">
                <div className="bg-slate-900/85 backdrop-blur-md border border-white/20 rounded-2xl p-4 sm:p-5 text-white shadow-xl flex items-center justify-between gap-3">
                  <div className="space-y-0.5">
                    <span className="text-xs text-slate-300 font-medium">Centro ubicado en</span>
                    <h4 className="text-base sm:text-xl font-bold text-white tracking-tight">
                      Bahía Blanca
                    </h4>
                    <div className="flex items-center gap-1.5 text-xs text-sky-300 pt-0.5">
                      <MapPin className="w-3.5 h-3.5 shrink-0" />
                      <span>Beruti 128. Fácil acceso y estacionamiento.</span>
                    </div>
                  </div>

                  <a
                    href="https://maps.google.com/?q=Beruti+128+Bahia+Blanca"
                    target="_blank"
                    rel="noreferrer"
                    className="shrink-0 px-3.5 py-2 bg-white/15 hover:bg-white/25 border border-white/30 rounded-xl text-xs font-semibold text-white transition flex items-center gap-1"
                  >
                    <span>Ver mapa</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* Subtle background glow */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-sky-200 rounded-full blur-3xl -z-10 opacity-40" />
          </div>

        </div>

      </div>
    </section>
  );
};
