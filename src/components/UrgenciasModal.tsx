import React from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { X, AlertTriangle, Phone, MapPin, Clock, ShieldAlert, Navigation, Droplets, EyeOff, Flame } from 'lucide-react';

interface UrgenciasModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const UrgenciasModal: React.FC<UrgenciasModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const emergencies = [
    {
      icon: <EyeOff className="w-5 h-5 text-rose-600" />,
      title: "Pérdida Súbita de Visión",
      desc: "Disminución repentina de la agudeza visual, aparición de una 'cortina' o sombra negra o destellos luminosos intensos (posible desprendimiento de retina u oclusión vascular)."
    },
    {
      icon: <Flame className="w-5 h-5 text-amber-600" />,
      title: "Salpicadura Química / Ácidos / Alcalinos",
      desc: "¡URGENCIA INMEDIATA! Lavá el ojo inmediatamente bajo la canilla con abundante agua limpia durante al menos 15 minutos continuos sin frotar y concurrí a la clínica de inmediato."
    },
    {
      icon: <AlertTriangle className="w-5 h-5 text-red-600" />,
      title: "Cuerpos Extraños y Virutas de Metal",
      desc: "Molestia punzante al parpadear por uso de amoladora, soldadura o viento. NO intentes retirarlo con pinzas, pañuelos ni frotar el ojo. Ocluí suavemente."
    },
    {
      icon: <Droplets className="w-5 h-5 text-rose-600" />,
      title: "Dolor Ocular Severo con Ojo Rojo y Náuseas",
      desc: "Sospecha de glaucoma agudo por cierre angular. Requiere atención médica urgente para descenso de presión intraocular."
    }
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-rose-200 relative my-8">
        
        {/* Urgent Header */}
        <div className="bg-gradient-to-r from-rose-600 via-rose-700 to-red-800 text-white p-6 sm:p-7 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-white/20 flex items-center justify-center">
              <ShieldAlert className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-[11px] font-extrabold uppercase tracking-widest bg-rose-900/60 px-2.5 py-0.5 rounded-full border border-rose-400/40">
                Atención 24 Horas
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-['Outfit'] mt-0.5">
                Guardia Oftalmológica
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-black/20 hover:bg-black/40 text-white flex items-center justify-center transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
          
          {/* Quick Call Box */}
          <div className="bg-rose-50 border-2 border-rose-200 rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left space-y-1">
              <span className="text-xs font-bold text-rose-800 uppercase tracking-wider">
                Línea Directa de Urgencias
              </span>
              <h4 className="text-2xl font-extrabold text-slate-900">
                {CLINIC_INFO.phone}
              </h4>
              <p className="text-xs text-slate-600">
                Médico oftalmólogo de guardia en Sede Bahía Blanca
              </p>
            </div>

            <a
              href={`tel:${CLINIC_INFO.phone}`}
              className="w-full sm:w-auto px-6 py-3.5 bg-rose-600 hover:bg-rose-700 text-white font-bold rounded-xl shadow-md transition flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 animate-bounce" />
              <span>Llamar Ahora</span>
            </a>
          </div>

          {/* Location & Access */}
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-2">
            <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
              <MapPin className="w-4 h-4 text-sky-600" />
              <span>Sede de Guardia: Beruti 128, Bahía Blanca</span>
            </div>
            <p className="text-xs text-slate-600">
              Ubicación céntrica con acceso directo de ambulancias y vehículos particulares.
            </p>
            <div className="pt-1">
              <a
                href="https://maps.google.com/?q=Beruti+128+Bahia+Blanca"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-700 hover:underline"
              >
                <Navigation className="w-3.5 h-3.5" />
                Cómo llegar con GPS (Google Maps) →
              </a>
            </div>
          </div>

          {/* Triage Cases */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
              ¿Qué hacer en caso de traumatismo o urgencia?
            </h4>
            <div className="grid grid-cols-1 gap-3">
              {emergencies.map((em, idx) => (
                <div key={idx} className="p-3.5 rounded-xl border border-slate-200 bg-white space-y-1">
                  <div className="flex items-center gap-2 font-bold text-xs sm:text-sm text-slate-900">
                    {em.icon}
                    <span>{em.title}</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed pl-7">
                    {em.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Golden Rules */}
          <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-900 space-y-1.5">
            <strong className="block font-bold">⚠️ RECOMENDACIONES CLAVE ANTES DE LLEGAR:</strong>
            <ul className="list-disc pl-4 space-y-1 text-slate-700">
              <li>NO te frotes el ojo bajo ninguna circunstancia.</li>
              <li>NO te apliques colirios o gotas que tengas en casa sin indicación médica.</li>
              <li>Si usás lentes de contacto, retiralos inmediatamente si no causa dolor extremo.</li>
              <li>Traé tu DNI y carnet de Obra Social si los tenés a mano.</li>
            </ul>
          </div>

        </div>

        {/* Footer */}
        <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-slate-800 hover:bg-slate-900 text-white rounded-xl text-xs font-semibold"
          >
            Entendido, cerrar
          </button>
        </div>

      </div>
    </div>
  );
};
