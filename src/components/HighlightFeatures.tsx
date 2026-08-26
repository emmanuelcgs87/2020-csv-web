import React from 'react';
import { Eye, Droplets, Shield, ArrowRight, Sparkles, CheckCircle2, Activity } from 'lucide-react';
import { Specialty } from '../types';

interface HighlightFeaturesProps {
  onSelectSpecialty: (specialtyId: string) => void;
  onOpenBooking: (doctorName?: string, specialtyId?: string) => void;
}

export const HighlightFeatures: React.FC<HighlightFeaturesProps> = ({
  onSelectSpecialty,
  onOpenBooking,
}) => {
  return (
    <section className="py-16 sm:py-24 bg-slate-50 relative overflow-hidden">
      {/* Background soft gradients */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-sky-100 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2 pointer-events-none opacity-60" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-sky-100/80 text-sky-800 text-xs font-bold uppercase tracking-wider border border-sky-200 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-sky-600" />
            Únicos en Bahía Blanca
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-[40px] font-extrabold text-slate-900 tracking-tight leading-tight font-['Outfit']">
            Resolución completa en{' '}
            <span className="text-sky-600 font-extrabold underline decoration-sky-300 decoration-wavy underline-offset-4">
              una sola consulta
            </span>
            . Diagnóstico por imágenes y alternativas terapéuticas.
          </h2>

          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Equipamiento de alta complejidad propio para realizar consulta clínica, estudios especializados y definición de tratamiento en el mismo día, sin traslados.
          </p>
        </div>

        {/* Two Featured Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          
          {/* Card 1: Alta Tecnología en Ojo Seco */}
          <div className="group bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-sky-300 transition-all duration-300 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-sky-50 rounded-bl-full pointer-events-none -z-0 group-hover:scale-110 transition-transform" />
            
            <div className="relative z-10 space-y-5">
              {/* Icon Container */}
              <div className="w-14 h-14 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600 shadow-sm group-hover:bg-sky-600 group-hover:text-white transition-colors duration-300">
                <Droplets className="w-7 h-7" />
              </div>

              <div className="space-y-2.5">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight font-['Outfit'] group-hover:text-sky-700 transition-colors">
                  Alta Tecnología en Ojo Seco
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Tratamos el ojo seco con un enfoque integral: diagnóstico por imágenes y múltiples alternativas terapéuticas según cada caso. Evaluamos la causa del problema y combinamos diferentes tratamientos para lograr un resultado real.
                </p>
              </div>

              {/* Badges */}
              <div className="pt-2 flex flex-wrap gap-2 text-xs">
                <span className="bg-slate-100 text-slate-700 font-medium px-3 py-1 rounded-full flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-500" />
                  Meibografía HD
                </span>
                <span className="bg-slate-100 text-slate-700 font-medium px-3 py-1 rounded-full flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-500" />
                  Luz Pulsada (IPL)
                </span>
                <span className="bg-slate-100 text-slate-700 font-medium px-3 py-1 rounded-full flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-500" />
                  Film Lagrimal
                </span>
              </div>
            </div>

            <div className="relative z-10 pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
              <button
                onClick={() => onSelectSpecialty('ojo-seco')}
                className="inline-flex items-center gap-2 text-sm font-bold text-sky-600 hover:text-sky-800 transition group-hover:translate-x-1"
              >
                <span>Conocer tratamiento y estudios</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onOpenBooking(undefined, 'ojo-seco')}
                className="text-xs bg-sky-50 hover:bg-sky-100 text-sky-700 font-semibold px-3 py-1.5 rounded-lg transition"
              >
                Pedir Turno
              </button>
            </div>
          </div>

          {/* Card 2: Rehabilitación con Prótesis Oculares */}
          <div className="group bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-sky-300 transition-all duration-300 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-bl-full pointer-events-none -z-0 group-hover:scale-110 transition-transform" />

            <div className="relative z-10 space-y-5">
              {/* Badge & Icon */}
              <div className="flex items-center justify-between">
                <div className="w-14 h-14 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 shadow-sm group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                  <Shield className="w-7 h-7" />
                </div>
                <span className="inline-flex items-center gap-1 text-[11px] font-bold tracking-wider uppercase bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full border border-indigo-100">
                  Centro de referencia exclusivo
                </span>
              </div>

              <div className="space-y-2.5">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight font-['Outfit'] group-hover:text-indigo-700 transition-colors">
                  Rehabilitación con Prótesis Oculares
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Plástica y reconstrucción ocular: cirugía y adaptación de prótesis según cada caso, devolviendo estética y funcionalidad. Diseño personalizado y acompañamiento médico integral.
                </p>
              </div>

              {/* Badges */}
              <div className="pt-2 flex flex-wrap gap-2 text-xs">
                <span className="bg-slate-100 text-slate-700 font-medium px-3 py-1 rounded-full flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-indigo-500" />
                  Prótesis a medida
                </span>
                <span className="bg-slate-100 text-slate-700 font-medium px-3 py-1 rounded-full flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-indigo-500" />
                  Cascarillas esclerales
                </span>
                <span className="bg-slate-100 text-slate-700 font-medium px-3 py-1 rounded-full flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-indigo-500" />
                  Plástica ocular
                </span>
              </div>
            </div>

            <div className="relative z-10 pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
              <button
                onClick={() => onSelectSpecialty('protesis-oculares')}
                className="inline-flex items-center gap-2 text-sm font-bold text-indigo-600 hover:text-indigo-800 transition group-hover:translate-x-1"
              >
                <span>Conocer más</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onOpenBooking(undefined, 'protesis-oculares')}
                className="text-xs bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-semibold px-3 py-1.5 rounded-lg transition"
              >
                Consultar
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
