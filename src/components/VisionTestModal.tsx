import React, { useState } from 'react';
import { X, Eye, CheckCircle2, AlertCircle, Sparkles, RefreshCw, Calendar, ArrowRight } from 'lucide-react';

interface VisionTestModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBooking: (doctorName?: string, specialtyId?: string) => void;
}

export const VisionTestModal: React.FC<VisionTestModalProps> = ({
  isOpen,
  onClose,
  onOpenBooking,
}) => {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const questions = [
    {
      id: 1,
      text: "¿Sentís sensación de arenilla, ardor o sequedad en los ojos al estar frente a pantallas o al final del día?",
    },
    {
      id: 2,
      text: "¿Experimentás visión borrosa intermitente que mejora momentáneamente al parpadear varias veces?",
    },
    {
      id: 3,
      text: "¿Te molestan las luces de noche (conduciendo) o tenés dificultad para enfocar de cerca para leer?",
    },
    {
      id: 4,
      text: "¿Tus ojos se ponen rojos con frecuencia, te pican o lagrimean de manera excesiva e involuntaria?",
    },
    {
      id: 5,
      text: "¿Pasó más de un año desde tu último control oftalmológico o fondo de ojos completo?",
    },
  ];

  const handleSelect = (qId: number, score: number) => {
    setAnswers((prev) => ({ ...prev, [qId]: score }));
  };

  const calculateResult = (): number => {
    const vals = Object.values(answers) as number[];
    let sum = 0;
    for (const val of vals) {
      sum += Number(val) || 0;
    }
    return sum;
  };

  const score = calculateResult();
  const answeredCount = Object.keys(answers).length;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-slate-200 relative my-8">
        
        {/* Top bar */}
        <div className="bg-slate-900 text-white p-6 sm:p-7 flex items-center justify-between">
          <div className="space-y-1">
            <span className="text-xs text-cyan-400 font-bold uppercase tracking-wider">
              Orientación Médica Rápida
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-['Outfit']">
              Test de Salud Visual & Ojo Seco
            </h3>
            <p className="text-xs text-slate-300">
              Evaluá tus síntomas en 1 minuto antes de solicitar tu consulta
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
          
          {!submitted ? (
            <div className="space-y-6">
              <div className="space-y-4">
                {questions.map((q) => (
                  <div key={q.id} className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
                    <p className="text-xs sm:text-sm font-semibold text-slate-800">
                      {q.id}. {q.text}
                    </p>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { label: 'Nunca / Rara vez', score: 0 },
                        { label: 'A veces', score: 1 },
                        { label: 'Frecuente / Siempre', score: 2 },
                      ].map((opt) => (
                        <button
                          key={opt.score}
                          type="button"
                          onClick={() => handleSelect(q.id, opt.score)}
                          className={`py-2 px-2 rounded-xl text-xs font-semibold transition ${
                            answers[q.id] === opt.score
                              ? 'bg-sky-600 text-white shadow'
                              : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
                          }`}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2 flex items-center justify-between">
                <span className="text-xs text-slate-500 font-medium">
                  Respondidas: {answeredCount} de {questions.length}
                </span>

                <button
                  type="button"
                  disabled={answeredCount < 3}
                  onClick={() => setSubmitted(true)}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-sky-600 hover:bg-sky-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold text-xs sm:text-sm rounded-xl shadow transition"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Ver Evaluación y Recomendación</span>
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-6 animate-fadeIn">
              {/* Result card */}
              <div className={`p-6 rounded-3xl border ${
                score >= 6
                  ? 'bg-rose-50 border-rose-200 text-rose-950'
                  : score >= 3
                  ? 'bg-amber-50 border-amber-200 text-amber-950'
                  : 'bg-emerald-50 border-emerald-200 text-emerald-950'
              }`}>
                <div className="flex items-center gap-2.5 font-bold text-lg mb-2">
                  <CheckCircle2 className="w-6 h-6" />
                  <span>
                    {score >= 6
                      ? 'Recomendación: Evaluación Especializada Prioritaria'
                      : score >= 3
                      ? 'Recomendación: Control Clínico & Estudio de Superficie Ocular'
                      : 'Recomendación: Control Preventivo Anual'}
                  </span>
                </div>

                <p className="text-xs sm:text-sm leading-relaxed opacity-90">
                  {score >= 6
                    ? 'Tus síntomas coinciden con patrones de Ojo Seco moderado/severo o fatiga visual acentuada. Te sugerimos realizar un test de diagnóstico por imágenes (Meibografía HD / Film lagrimal) y control con un especialista.'
                    : score >= 3
                    ? 'Presentás signos incipientes de sequedad o cambio en tu graduación visual. Una consulta oftalmológica completa permitirá descartar afecciones corneales o presbicia.'
                    : 'Tus ojos parecen estar en buen estado general. Recordá realizar tu examen de rutina y fondo de ojo anual preventivo en 2020 Oftalmología.'}
                </p>
              </div>

              {/* Specialty suggestions */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Especialidades sugeridas para tu caso:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 font-semibold text-slate-800">
                    💧 Alta Tecnología en Ojo Seco & IPL
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 font-semibold text-slate-800">
                    👁️ Control General y Agudeza Visual
                  </div>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setAnswers({});
                    setSubmitted(false);
                  }}
                  className="text-xs font-semibold text-slate-500 hover:text-slate-800 flex items-center gap-1"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  Rehacer test
                </button>

                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onOpenBooking(undefined, score >= 4 ? 'ojo-seco' : 'oftalmologia-general');
                  }}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs sm:text-sm rounded-xl shadow transition"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Agendar Consulta Ahora</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
