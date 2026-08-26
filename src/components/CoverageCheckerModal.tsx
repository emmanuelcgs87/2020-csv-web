import React, { useState } from 'react';
import { OBRAS_SOCIALES } from '../data/clinicData';
import { ObraSocial } from '../types';
import { X, Search, ShieldCheck, Check, AlertCircle, FileText, Calendar } from 'lucide-react';

interface CoverageCheckerModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialObraSocial?: ObraSocial;
  onOpenBooking: () => void;
}

export const CoverageCheckerModal: React.FC<CoverageCheckerModalProps> = ({
  isOpen,
  onClose,
  initialObraSocial,
  onOpenBooking,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedOS, setSelectedOS] = useState<ObraSocial | null>(initialObraSocial || null);

  if (!isOpen) return null;

  const filtered = OBRAS_SOCIALES.filter((os) =>
    os.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    os.planInfo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-slate-200 relative my-8">
        
        {/* Top bar */}
        <div className="bg-slate-900 text-white p-6 sm:p-7 flex items-center justify-between">
          <div className="space-y-1">
            <span className="text-xs text-sky-400 font-bold uppercase tracking-wider">
              Convenios & Coberturas
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-['Outfit']">
              Obras Sociales y Prepagas
            </h3>
            <p className="text-xs text-slate-300">
              Consultá los requisitos para tu plan en 2020 Centro de Salud Visual
            </p>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
          
          {/* Search bar */}
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar obra social o prepaga (ej: OSDE, Swiss, IOMA, PAMI...)"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 bg-slate-50 focus:bg-white text-sm focus:ring-2 focus:ring-sky-500 outline-none"
            />
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {filtered.map((os) => {
              const isSelected = selectedOS?.id === os.id;
              return (
                <button
                  key={os.id}
                  onClick={() => setSelectedOS(os)}
                  className={`p-4 rounded-2xl border text-left transition ${
                    isSelected
                      ? 'border-sky-500 bg-sky-50/60 ring-2 ring-sky-500/20'
                      : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-bold text-sm text-slate-900">{os.name}</span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      os.coverageLevel === 'Completa'
                        ? 'bg-emerald-100 text-emerald-800'
                        : 'bg-amber-100 text-amber-800'
                    }`}>
                      {os.coverageLevel}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 line-clamp-2">{os.planInfo}</p>
                </button>
              );
            })}
          </div>

          {/* Selected OS Details Box */}
          {selectedOS && (
            <div className="p-5 rounded-2xl bg-sky-50/70 border border-sky-200 space-y-3 animate-fadeIn">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-sky-600" />
                <h4 className="font-bold text-slate-900 text-base">
                  Detalles para afiliados de {selectedOS.name}
                </h4>
              </div>

              <div className="text-xs space-y-2 text-slate-700">
                <div className="flex items-start gap-2">
                  <span className="font-semibold text-slate-900 w-28 shrink-0">Planes cubiertos:</span>
                  <span>{selectedOS.planInfo}</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-semibold text-slate-900 w-28 shrink-0">Tipo de cobertura:</span>
                  <span>{selectedOS.coverageLevel} para consultas generales y estudios de rutina</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-semibold text-slate-900 w-28 shrink-0">Orden médica:</span>
                  <span>
                    {selectedOS.requiresOrder
                      ? '⚠️ Requiere orden médica previa autorizada o bono de consulta.'
                      : '✅ Atención directa con credencial digital o física sin orden previa.'}
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* General Policy Note */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-1">
            <span className="font-bold text-slate-800 flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5 text-sky-600" />
              ¿Qué documentación traer el día de la consulta?
            </span>
            <p>1. Documento Nacional de Identidad (DNI)</p>
            <p>2. Credencial física o digital vigente de la obra social / prepaga</p>
            <p>3. Últimos anteojos o estudios oftalmológicos previos si disponés de ellos</p>
          </div>

          {/* Action */}
          <div className="pt-2 flex items-center justify-between">
            <button
              onClick={onClose}
              className="text-xs font-semibold text-slate-500 hover:text-slate-800"
            >
              Cerrar
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenBooking();
              }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs sm:text-sm rounded-xl shadow transition"
            >
              <Calendar className="w-4 h-4" />
              <span>Solicitar Turno con mi Obra Social</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
