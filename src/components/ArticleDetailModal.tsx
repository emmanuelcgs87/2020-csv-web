import React from 'react';
import { BlogPost } from '../types';
import { CLINIC_INFO } from '../data/clinicData';
import { X, Calendar, Clock, User, CheckCircle2, ArrowRight, Share2, Sparkles, ExternalLink, BookOpen } from 'lucide-react';

interface ArticleDetailModalProps {
  article: BlogPost | null;
  onClose: () => void;
  onOpenBooking: () => void;
}

export const ArticleDetailModal: React.FC<ArticleDetailModalProps> = ({
  article,
  onClose,
  onOpenBooking,
}) => {
  if (!article) return null;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-3xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden relative my-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button Floating */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-slate-900/60 hover:bg-slate-900 text-white backdrop-blur-md flex items-center justify-center transition shadow-lg"
          aria-label="Cerrar artículo"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Image */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-slate-900">
          <img
            src={article.image}
            alt={article.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
          
          <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 bg-sky-600/90 backdrop-blur-md text-white text-xs font-bold rounded-full uppercase tracking-wider">
                {article.category}
              </span>
              <span className="text-xs text-slate-300 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {article.readTime}
              </span>
            </div>
            
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold leading-snug font-['Outfit']">
              {article.title}
            </h2>
          </div>
        </div>

        {/* Article Body Content */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
          
          {/* Author info & date bar */}
          <div className="flex items-center justify-between pb-6 border-b border-slate-100 gap-4 flex-wrap">
            <div className="flex items-center gap-3">
              {article.author.avatar ? (
                <img
                  src={article.author.avatar}
                  alt={article.author.name}
                  referrerPolicy="no-referrer"
                  className="w-11 h-11 rounded-full object-cover border border-sky-200"
                />
              ) : (
                <div className="w-11 h-11 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center font-bold">
                  <User className="w-5 h-5" />
                </div>
              )}
              <div>
                <h4 className="text-sm font-bold text-slate-900">{article.author.name}</h4>
                <p className="text-xs text-slate-500">{article.author.role}</p>
              </div>
            </div>

            <div className="text-xs text-slate-500 flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-slate-400" />
              <span>Publicado: {article.date}</span>
            </div>
          </div>

          {/* Intro highlight */}
          <p className="text-base sm:text-lg text-slate-700 font-medium leading-relaxed bg-sky-50/70 p-4 sm:p-5 rounded-2xl border border-sky-100">
            {article.content.intro}
          </p>

          {/* Sections */}
          <div className="space-y-5">
            {article.content.sections.map((sec, idx) => (
              <div key={idx} className="space-y-2">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 font-['Outfit']">
                  {sec.heading}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {sec.body}
                </p>
              </div>
            ))}
          </div>

          {/* Key Takeaways / Puntos Clave */}
          <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 space-y-3">
            <h4 className="text-xs font-bold text-sky-400 uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-4 h-4" />
              <span>Conclusiones Médicas Clave</span>
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-200">
              {article.content.takeaways.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="p-5 sm:p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 text-xs sm:text-sm font-semibold text-slate-600 hover:text-slate-900 transition text-center"
          >
            Volver a artículos
          </button>

          <a
            href={CLINIC_INFO.appointmentUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs sm:text-sm rounded-xl shadow-md transition"
          >
            <Calendar className="w-4 h-4" />
            <span>Agendar Consulta con Especialistas</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
