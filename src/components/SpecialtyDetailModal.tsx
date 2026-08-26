import React from 'react';
import { SPECIALTIES } from '../data/clinicData';
import { Specialty } from '../types';
import { X, Calendar, CheckCircle2, Stethoscope, Sparkles, MapPin, AlertCircle, ArrowRight } from 'lucide-react';

interface SpecialtyDetailModalProps {
  specialtyId: string | null;
  onClose: () => void;
  onOpenBooking: (doctorName?: string, specialtyId?: string) => void;
}

export const SpecialtyDetailModal: React.FC<SpecialtyDetailModalProps> = ({
  specialtyId,
  onClose,
  onOpenBooking,
}) => {
  if (!specialtyId) return null;

  const specialty = SPECIALTIES.find((s) => s.id === specialtyId) || SPECIALTIES[0];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl border border-slate-200 relative my-8">
        
        {/* Header with image cover */}
        <div className="relative h-48 sm:h-56 bg-slate-900 overflow-hidden">
          <img
            src={specialty.image}
            alt={specialty.name}
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white flex items-center justify-center transition border border-white/20 z-10"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6 text-white space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-400 bg-sky-950/70 px-2.5 py-0.5 rounded-full border border-sky-500/30">
              Especialidad Médica
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-['Outfit']">
              {specialty.name}
            </h3>
            <p className="text-xs text-slate-300">
              Disponible en: {specialty.sedes.join(' y ')}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[65vh] overflow-y-auto">
          
          {/* Full description */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Descripción Clínica
            </h4>
            <p className="text-sm text-slate-700 leading-relaxed">
              {specialty.fullDesc}
            </p>
          </div>

          {/* Procedures */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-sky-600" />
              Procedimientos y Estudios Incluidos
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {specialty.procedures.map((p, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                  <span className="text-sky-600 font-bold">✓</span>
                  <span>{p}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Symptoms Treated */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
              <AlertCircle className="w-4 h-4 text-amber-600" />
              ¿Cuándo consultar? Síntomas Frecuentes
            </h4>
            <div className="flex flex-wrap gap-2">
              {specialty.symptoms.map((symp, idx) => (
                <span key={idx} className="text-xs bg-amber-50 text-amber-900 border border-amber-200 px-3 py-1 rounded-full font-medium">
                  {symp}
                </span>
              ))}
            </div>
          </div>

          {/* Equipment Used */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-sky-600" />
              Tecnología de Diagnóstico Utilizada
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-600">
              {specialty.equipmentUsed.map((eq, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                  <span>{eq}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Bottom Actions */}
          <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
            <button
              onClick={onClose}
              className="text-xs font-semibold text-slate-500 hover:text-slate-800"
            >
              Volver
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenBooking(undefined, specialty.id);
              }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs sm:text-sm rounded-xl shadow-md transition"
            >
              <Calendar className="w-4 h-4" />
              <span>Solicitar Turno para {specialty.name}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
