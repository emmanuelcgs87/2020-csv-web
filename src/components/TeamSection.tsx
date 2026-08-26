import React from 'react';
import { DOCTORS } from '../data/clinicData';
import { Doctor } from '../types';
import { User, Calendar, Award, ArrowRight, Stethoscope, ChevronRight } from 'lucide-react';

interface TeamSectionProps {
  onSelectDoctor: (doctor: Doctor) => void;
  onBookWithDoctor: (doctorName: string) => void;
}

export const TeamSection: React.FC<TeamSectionProps> = ({ onSelectDoctor, onBookWithDoctor }) => {
  return (
    <section id="equipo" className="py-16 sm:py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider">
            Nuestro Equipo
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-['Outfit']">
            Especialistas comprometidos <br className="hidden sm:inline" />
            <span className="text-sky-600">con tu visión</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Conocé al equipo de profesionales altamente capacitados que trabaja día a día para cuidar tu salud ocular en Bahía Blanca y Monte Hermoso.
          </p>
        </div>

        {/* 6 Doctor Cards Grid (3 columns on desktop, matching screenshot) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {DOCTORS.map((doctor) => (
            <div
              key={doctor.id}
              className="group bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-sky-300 transition-all duration-300 flex flex-col"
            >
              {/* Doctor Image Container */}
              <div
                onClick={() => onSelectDoctor(doctor)}
                className="relative aspect-[4/4.2] overflow-hidden bg-slate-100 cursor-pointer"
              >
                <img
                  src={doctor.image}
                  alt={`${doctor.name} - ${doctor.specialty} en 2020 Oftalmología`}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="text-xs font-semibold text-white bg-sky-600/90 backdrop-blur-sm px-3 py-1.5 rounded-lg flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5" />
                    Ver trayectoria y formación
                  </span>
                </div>

                {/* Sede badge */}
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-slate-700 text-[11px] font-semibold px-2.5 py-1 rounded-full shadow-sm">
                  {doctor.sede.includes('Monte Hermoso') ? 'Bahía & Monte' : 'Bahía Blanca'}
                </div>
              </div>

              {/* Doctor Details */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between text-center space-y-4">
                <div className="space-y-1">
                  <h3
                    onClick={() => onSelectDoctor(doctor)}
                    className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight font-['Outfit'] hover:text-sky-600 cursor-pointer transition-colors"
                  >
                    {doctor.name}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-sky-700">
                    {doctor.specialty}
                  </p>
                  <p className="text-xs text-slate-500">
                    {doctor.role}
                  </p>
                </div>

                {/* Subspecialty chips */}
                <div className="flex flex-wrap justify-center gap-1.5 pt-1">
                  {doctor.subspecialties.slice(0, 2).map((sub, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] bg-slate-100 text-slate-600 px-2.5 py-0.5 rounded-full"
                    >
                      {sub}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                  <button
                    onClick={() => onSelectDoctor(doctor)}
                    className="flex-1 text-xs font-semibold text-slate-600 hover:text-sky-600 py-2 rounded-xl hover:bg-slate-50 transition"
                  >
                    Ver Perfil
                  </button>
                  <button
                    onClick={() => onBookWithDoctor(doctor.name)}
                    className="flex-1 text-xs font-semibold bg-sky-50 hover:bg-sky-600 text-sky-700 hover:text-white py-2 px-3 rounded-xl transition-all shadow-sm flex items-center justify-center gap-1"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Pedir Turno</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
