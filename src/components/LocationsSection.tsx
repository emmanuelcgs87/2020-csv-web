import React, { useState } from 'react';
import { BRANCHES, CLINIC_INFO } from '../data/clinicData';
import { MapPin, Phone, Clock, MessageSquare, ExternalLink, ShieldAlert, Navigation, Car } from 'lucide-react';

interface LocationsSectionProps {
  onOpenUrgencias: () => void;
  onOpenBooking: () => void;
}

export const LocationsSection: React.FC<LocationsSectionProps> = ({ onOpenUrgencias, onOpenBooking }) => {
  const [selectedBranch, setSelectedBranch] = useState<string>('bahia-blanca');

  const activeBranch = BRANCHES.find((b) => b.id === selectedBranch) || BRANCHES[0];

  return (
    <section id="sedes" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider">
            Nuestras Sedes
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-['Outfit']">
            Cerca tuyo en <span className="text-sky-600">Bahía Blanca</span> y <span className="text-sky-600">Monte Hermoso</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Instalaciones modernas diseñadas para tu confort y bioseguridad, con quirófano ambulatorio, consultorios equipados y salas de estudios.
          </p>
        </div>

        {/* Branch Selector Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-slate-100 p-1.5 rounded-2xl flex gap-2 border border-slate-200">
            {BRANCHES.map((b) => (
              <button
                key={b.id}
                onClick={() => setSelectedBranch(b.id)}
                className={`px-5 sm:px-8 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                  selectedBranch === b.id
                    ? 'bg-sky-600 text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                }`}
              >
                <MapPin className="w-4 h-4" />
                <span>{b.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Branch Detail Card & Interactive Map Area */}
        <div className="bg-slate-50 rounded-3xl border border-slate-200/90 overflow-hidden shadow-lg grid grid-cols-1 lg:grid-cols-12 items-stretch">
          
          {/* Left Info Panel */}
          <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold tracking-wider uppercase text-sky-600">
                  {activeBranch.city}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-['Outfit'] mt-1">
                  {activeBranch.name}
                </h3>
              </div>

              {/* Info Items */}
              <div className="space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Dirección</h4>
                    <p className="text-sm sm:text-base font-semibold text-slate-800">{activeBranch.address}</p>
                    <p className="text-xs text-slate-500">{activeBranch.city}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Horario de Atención</h4>
                    <p className="text-sm font-semibold text-slate-800">{activeBranch.schedule}</p>
                    <p className="text-xs text-emerald-600 font-medium">{activeBranch.guardia}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Teléfono & Turnos</h4>
                    <p className="text-sm font-semibold text-slate-800">{activeBranch.phone}</p>
                    <p className="text-xs text-slate-500">Líneas rotativas para atención rápida</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Car className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Accesibilidad</h4>
                    <p className="text-xs text-slate-600">Rampa de acceso, ascensor camillero y estacionamiento cercano.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-6 border-t border-slate-200 flex flex-wrap gap-3">
              <a
                href={activeBranch.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs sm:text-sm font-semibold shadow transition"
              >
                <Navigation className="w-4 h-4 text-sky-400" />
                <span>Cómo llegar (Google Maps)</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>

              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-sky-600 hover:bg-sky-500 text-white rounded-xl text-xs sm:text-sm font-semibold shadow transition"
              >
                <span>Pedir Turno en esta sede</span>
              </button>
            </div>
          </div>

          {/* Right Image / Facility Preview */}
          <div className="lg:col-span-6 relative min-h-[300px] lg:min-h-full bg-slate-800">
            <img
              src={activeBranch.image}
              alt={activeBranch.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-6 sm:p-8">
              <div className="text-white space-y-1">
                <span className="text-xs text-sky-300 font-semibold uppercase tracking-wider">
                  Instalaciones de primer nivel
                </span>
                <h4 className="text-lg sm:text-xl font-bold">
                  {activeBranch.id === 'bahia-blanca' ? 'Quirófano propio y centro de diagnóstico' : 'Consultorios con aparatología completa'}
                </h4>
                <p className="text-xs text-slate-300">
                  {activeBranch.id === 'bahia-blanca' ? 'Beruti 128 · A pocas cuadras de Plaza Rivadavia' : 'Av. Costanera 450 · Atención permanente'}
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
