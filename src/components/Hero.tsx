import React from 'react';
import { MapPin, ArrowRight, CheckCircle2, ShieldCheck, Sparkles, UserCheck, Stethoscope } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface HeroProps {
  onOpenBooking: () => void;
  onScrollToSpecialties: () => void;
  onOpenUrgencias: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenBooking,
  onScrollToSpecialties,
  onOpenUrgencias,
}) => {
  return (
    <section id="hero-section" className="relative min-h-[90vh] lg:min-h-[95vh] flex items-center pt-24 pb-16 lg:py-32 overflow-hidden">
      {/* Background Image with Dark Vignette Overlay for Crisp White Typography */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=2000&q=85"
          alt="2020 Centro de Salud Visual Bahía Blanca fachada e instalaciones"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center transform scale-105"
        />
        {/* Multilayer gradient for optimal contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/75 to-slate-900/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/60" />
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Main Content */}
          <div className="lg:col-span-8 text-white space-y-6">
            
            {/* Location Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-medium text-slate-200 shadow-sm animate-fadeIn">
              <MapPin className="w-3.5 h-3.5 text-sky-400" />
              <span>Bahía Blanca · Monte Hermoso</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12] text-white font-['Outfit'] max-w-3xl">
              Cuidamos tu visión con{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-sky-200 to-white">
                diagnóstico preciso
              </span>{' '}
              y tratamiento adecuado.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-200 font-normal leading-relaxed max-w-2xl">
              Integramos diagnóstico, estudios y tratamiento para resolver tu problema visual sin demoras.
            </p>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 pt-2">
              <a
                href={CLINIC_INFO.appointmentUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-cta-solicitar-turno"
                className="group inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 bg-sky-600 hover:bg-sky-500 text-white font-semibold text-sm sm:text-base rounded-full shadow-xl shadow-sky-600/30 hover:shadow-sky-500/50 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Solicitar Turno</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={onScrollToSpecialties}
                id="hero-cta-especialidades"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 sm:py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/25 text-white font-medium text-sm sm:text-base rounded-full transition-all hover:border-white/40"
              >
                <span>Nuestras Especialidades</span>
              </button>
            </div>

            {/* Value Tags / Pills (Evaluación completa, Alta Tecnología, Especialistas) */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-4 text-xs sm:text-sm text-slate-200">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-900/60 backdrop-blur-sm border border-slate-700/60 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" />
                Evaluación completa
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-900/60 backdrop-blur-sm border border-slate-700/60 font-medium">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                Alta Tecnología
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-900/60 backdrop-blur-sm border border-slate-700/60 font-medium">
                <UserCheck className="w-3.5 h-3.5 text-blue-400" />
                Especialistas
              </span>
            </div>

          </div>

          {/* Right Floating Card (Evaluación Integral as in screenshot) */}
          <div className="lg:col-span-4 flex flex-col justify-center items-start lg:items-end">
            <div className="w-full max-w-sm rounded-2xl bg-white/10 backdrop-blur-xl border border-white/25 p-5 sm:p-6 shadow-2xl space-y-3.5 transform lg:hover:translate-y-[-4px] transition-all duration-300">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-sky-500/20 border border-sky-400/40 flex items-center justify-center text-sky-300">
                  <CheckCircle2 className="w-5 h-5 text-sky-300" />
                </div>
                <h2 className="text-base sm:text-lg font-bold text-white tracking-tight">
                  Evaluación Integral
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                Plan de tratamiento claro desde la primera consulta, con acceso directo a subespecialistas y estudios en el día.
              </p>
              <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs text-slate-300">
                <span className="flex items-center gap-1 text-sky-300 font-medium">
                  <Stethoscope className="w-3.5 h-3.5" /> Turnos disponibles
                </span>
                <a
                  href={CLINIC_INFO.appointmentUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-sky-300 font-semibold underline underline-offset-2 transition"
                >
                  Agendar hoy →
                </a>
              </div>
            </div>

            {/* Quick Sede Hours Card on Mobile/Tablet */}
            <div className="mt-4 w-full max-w-sm rounded-xl bg-slate-900/70 backdrop-blur-md border border-slate-700/60 p-3.5 flex items-center justify-between text-xs text-slate-300">
              <div>
                <span className="font-semibold text-white block">Sede Bahía Blanca: Beruti 128</span>
                <span className="text-slate-400">Lun a Vie 8:00 - 20:00 | Sáb 10:00 - 14:00</span>
              </div>
              <button
                onClick={onOpenUrgencias}
                className="px-2.5 py-1 bg-rose-500/20 hover:bg-rose-500/30 border border-rose-500/40 text-rose-300 font-bold rounded-lg transition"
              >
                Guardia 24h
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
