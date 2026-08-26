import React from 'react';
import { MessageCircle, Calendar, Phone, Clock, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface CtaSectionProps {
  onOpenBooking: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onOpenBooking }) => {
  const whatsappUrl = `https://wa.me/${CLINIC_INFO.whatsapp.replace('+', '')}?text=${encodeURIComponent(
    'Hola! Quisiera solicitar un turno en 2020 Centro de Salud Visual.'
  )}`;

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-sky-50 via-sky-100/60 to-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-sky-200/50 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6 sm:space-y-8">
        
        {/* Pill: Tu turno */}
        <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white text-sky-800 text-xs font-bold uppercase tracking-wider shadow-sm border border-sky-200">
          Tu turno
        </div>

        {/* Main Headline */}
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight font-['Outfit']">
          Da el primer paso hacia una visión más clara.{' '}
          <span className="text-sky-600">
            Atención médica en la que podés confiar.
          </span>{' '}
          Reservá tu turno hoy.
        </h2>

        <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Elegí el medio que te resulte más cómodo: agendá online en 2 minutos o escribinos directamente por WhatsApp para coordinar tu día y horario preferido.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          
          {/* WhatsApp Primary Button as in Screenshot */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="cta-whatsapp-button"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#2557a7] hover:bg-[#1d4484] text-white font-bold text-base rounded-full shadow-xl shadow-blue-900/20 hover:shadow-blue-900/35 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <MessageCircle className="w-5 h-5 fill-white text-[#2557a7]" />
            <span>Escribinos por WhatsApp</span>
          </a>

          {/* Online Appointment Booking Button */}
          <button
            onClick={onOpenBooking}
            id="cta-online-booking-button"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-white hover:bg-slate-50 border border-slate-300 hover:border-slate-400 text-slate-800 font-bold text-base rounded-full shadow-md transition-all hover:shadow-lg transform hover:-translate-y-0.5"
          >
            <Calendar className="w-5 h-5 text-sky-600" />
            <span>Reservar Turno Online</span>
            <ArrowRight className="w-4 h-4 text-slate-400" />
          </button>

        </div>

        {/* Subtext */}
        <p className="text-xs sm:text-sm text-slate-500 font-medium pt-1">
          Respuesta rápida para agendar tu consulta · Atención en Bahía Blanca y Monte Hermoso
        </p>

        {/* Trust Badges */}
        <div className="pt-6 border-t border-sky-200/80 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-600">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-sky-600" />
            Sin demoras innecesarias
          </span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-sky-600" />
            Obras Sociales y Prepagas
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-sky-600" />
            Guardia oftalmológica activa
          </span>
        </div>

      </div>
    </section>
  );
};
