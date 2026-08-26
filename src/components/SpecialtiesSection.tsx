import React, { useState } from 'react';
import { SPECIALTIES } from '../data/clinicData';
import { Specialty } from '../types';
import { Search, Eye, CheckCircle, Droplets, Shield, Sparkles, Zap, Users, ArrowRight, ChevronLeft, ChevronRight, Activity } from 'lucide-react';

interface SpecialtiesSectionProps {
  onSelectSpecialty: (specialtyId: string) => void;
  onOpenBooking: (doctorName?: string, specialtyId?: string) => void;
}

export const SpecialtiesSection: React.FC<SpecialtiesSectionProps> = ({
  onSelectSpecialty,
  onOpenBooking,
}) => {
  const [startIndex, setStartIndex] = useState(0);
  const [filterSede, setFilterSede] = useState<'Todas' | 'Bahía Blanca' | 'Monte Hermoso'>('Todas');

  const filteredSpecialties = SPECIALTIES.filter((s) => {
    if (filterSede === 'Todas') return true;
    return s.sedes.includes(filterSede);
  });

  const visibleCardsCount = 3;
  const maxIndex = Math.max(0, filteredSpecialties.length - visibleCardsCount);

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setStartIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  const getSpecialtyIcon = (iconName: string) => {
    switch (iconName) {
      case 'Search': return <Search className="w-5 h-5" />;
      case 'Eye': return <Eye className="w-5 h-5" />;
      case 'CheckCircle': return <CheckCircle className="w-5 h-5" />;
      case 'Droplets': return <Droplets className="w-5 h-5" />;
      case 'Shield': return <Shield className="w-5 h-5" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5" />;
      case 'Zap': return <Zap className="w-5 h-5" />;
      case 'Users': return <Users className="w-5 h-5" />;
      default: return <Activity className="w-5 h-5" />;
    }
  };

  return (
    <section id="especialidades" className="py-16 sm:py-24 bg-gradient-to-b from-sky-50/50 via-slate-50 to-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header with title and slider arrows */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-semibold uppercase tracking-wider">
              Nuestros Servicios
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-['Outfit']">
              Procedimientos y tratamientos <br className="hidden sm:inline" />
              <span className="text-sky-600">especializados</span>
            </h2>
          </div>

          {/* Sede Filter and Carousel Navigation Controls */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Filter pills */}
            <div className="bg-slate-200/70 p-1 rounded-full flex text-xs font-medium text-slate-600">
              {(['Todas', 'Bahía Blanca', 'Monte Hermoso'] as const).map((sede) => (
                <button
                  key={sede}
                  onClick={() => {
                    setFilterSede(sede);
                    setStartIndex(0);
                  }}
                  className={`px-3 py-1 rounded-full transition-all ${
                    filterSede === senderOrActive(filterSede, sede)
                      ? 'bg-white text-slate-900 font-bold shadow-sm'
                      : 'hover:text-slate-900'
                  }`}
                >
                  {sede}
                </button>
              ))}
            </div>

            {/* Carousel Arrows */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                disabled={startIndex === 0}
                aria-label="Especialidad anterior"
                className="w-10 h-10 rounded-full border border-slate-300 bg-white flex items-center justify-center text-slate-700 hover:bg-slate-100 hover:border-slate-400 disabled:opacity-40 disabled:cursor-not-allowed transition shadow-sm"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                disabled={startIndex >= maxIndex}
                aria-label="Especialidad siguiente"
                className="w-10 h-10 rounded-full border border-slate-300 bg-white flex items-center justify-center text-slate-700 hover:bg-slate-100 hover:border-slate-400 disabled:opacity-40 disabled:cursor-not-allowed transition shadow-sm"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Cards Grid / Carousel View */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredSpecialties.slice(startIndex, startIndex + visibleCardsCount).map((specialty) => (
            <div
              key={specialty.id}
              className="group bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-sky-300 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Icon Box */}
                <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600 group-hover:bg-sky-600 group-hover:text-white transition-colors duration-300">
                  {getSpecialtyIcon(specialty.iconName)}
                </div>

                {/* Title and description */}
                <div>
                  <h3 className="text-xl font-bold text-slate-900 tracking-tight font-['Outfit'] group-hover:text-sky-700 transition-colors">
                    {specialty.name}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 flex items-center gap-1 font-medium">
                    <span>Sedes: {specialty.sedes.join(' · ')}</span>
                  </p>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed min-h-[48px]">
                  {specialty.shortDesc}
                </p>

                {/* Ver Detalles link */}
                <button
                  onClick={() => onSelectSpecialty(specialty.id)}
                  className="inline-flex items-center gap-2 text-xs font-bold text-slate-800 hover:text-sky-600 transition group-hover:text-sky-700"
                >
                  <span className="w-5 h-5 rounded-full bg-slate-900 group-hover:bg-sky-600 text-white flex items-center justify-center text-[10px] transition-colors">
                    →
                  </span>
                  <span>Ver Detalles</span>
                </button>
              </div>

              {/* Card Bottom Thumbnail Image */}
              <div className="mt-5 pt-4 border-t border-slate-100">
                <div
                  onClick={() => onSelectSpecialty(specialty.id)}
                  className="h-36 sm:h-40 rounded-2xl overflow-hidden cursor-pointer relative group-hover:ring-2 group-hover:ring-sky-400/40 transition-all bg-slate-100"
                >
                  <img
                    src={specialty.image}
                    alt={specialty.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                    <span className="text-[11px] font-semibold text-white bg-slate-900/80 backdrop-blur-sm px-2.5 py-1 rounded-lg">
                      Ver equipamiento y técnicas
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA to view all specialties */}
        <div className="mt-12 text-center">
          <button
            onClick={() => onSelectSpecialty(SPECIALTIES[0].id)}
            id="ver-todas-especialidades-btn"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-slate-800 hover:bg-sky-600 text-white text-sm font-semibold rounded-full shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
          >
            <span>Ver todas las especialidades y estudios</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};

function senderOrActive(curr: string, target: string) {
  return curr === target ? curr : '';
}
