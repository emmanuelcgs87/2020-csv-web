import React from 'react';
import { Doctor } from '../types';
import { X, Calendar, MapPin, Award, BookOpen, Clock, CheckCircle2, Stethoscope, ArrowRight } from 'lucide-react';

interface DoctorDetailModalProps {
  doctor: Doctor | null;
  onClose: () => void;
  onBookWithDoctor: (doctorName: string) => void;
}

export const DoctorDetailModal: React.FC<DoctorDetailModalProps> = ({
  doctor,
  onClose,
  onBookWithDoctor,
}) => {
  if (!doctor) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-slate-200 relative my-8">
        
        {/* Top bar */}
        <div className="bg-slate-900 text-white p-6 sm:p-7 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Stethoscope className="w-5 h-5 text-sky-400" />
            <span className="text-xs font-bold uppercase tracking-wider text-sky-400">
              Equipo Médico · 2020 Oftalmología
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Doctor Header Profile */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
            <img
              src={doctor.image}
              alt={doctor.name}
              className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl object-cover shadow-md border-2 border-sky-100"
            />
            <div className="text-center sm:text-left space-y-1">
              <h3 className="text-2xl font-bold text-slate-900 font-['Outfit']">
                {doctor.name}
              </h3>
              <p className="text-sm font-bold text-sky-700">{doctor.specialty}</p>
              <p className="text-xs text-slate-500">{doctor.role}</p>

              <div className="pt-2 flex flex-wrap justify-center sm:justify-start gap-2">
                <span className="inline-flex items-center gap-1 text-xs bg-slate-100 text-slate-700 px-2.5 py-1 rounded-full font-medium">
                  <MapPin className="w-3 h-3 text-sky-500" />
                  {doctor.sede}
                </span>
                <span className="inline-flex items-center gap-1 text-xs bg-sky-50 text-sky-800 px-2.5 py-1 rounded-full font-medium">
                  <Clock className="w-3 h-3 text-sky-600" />
                  {doctor.days}
                </span>
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Perfil Profesional
            </h4>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {doctor.bio}
            </p>
          </div>

          {/* Subspecialties */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Áreas de Enfoque y Subespecialidades
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {doctor.subspecialties.map((sub, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 bg-slate-50 p-2.5 rounded-xl border border-slate-200/80">
                  <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                  <span className="font-medium">{sub}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-sky-600" />
              Formación Académica y Membresías
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-600">
              {doctor.education.map((edu, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-sky-500 font-bold">•</span>
                  <span>{edu}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Actions */}
          <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
            <button
              onClick={onClose}
              className="text-xs font-semibold text-slate-500 hover:text-slate-800"
            >
              Cerrar
            </button>
            <button
              onClick={() => {
                onClose();
                onBookWithDoctor(doctor.name);
              }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs sm:text-sm rounded-xl shadow-md transition"
            >
              <Calendar className="w-4 h-4" />
              <span>Solicitar Turno con {doctor.name.split(' ')[1] || doctor.name}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
