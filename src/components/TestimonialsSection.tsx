import React, { useState } from 'react';
import { TESTIMONIALS_DATA, TESTIMONIALS_SUMMARY } from '../data/testimonialsData';
import { Star, CheckCircle2, Quote, MapPin, Sparkles, MessageSquare, ThumbsUp, ArrowRight } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface TestimonialsSectionProps {
  onOpenBooking: (doctorName?: string, specialtyId?: string) => void;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ onOpenBooking }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');

  const categories = [
    { id: 'todos', label: 'Todos los testimonios' },
    { id: 'cirugias', label: 'Cirugías & Cataratas' },
    { id: 'ojo-seco', label: 'Ojo Seco (IPL)' },
    { id: 'protesis', label: 'Prótesis Oculares' },
    { id: 'pediatria', label: 'Oftalmopediatría' },
    { id: 'urgencias', label: 'Guardia & Urgencias' },
  ];

  const filteredTestimonials = selectedCategory === 'todos'
    ? TESTIMONIALS_DATA
    : TESTIMONIALS_DATA.filter((t) => t.category === selectedCategory);

  return (
    <section id="testimonios" className="py-16 sm:py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden">
      {/* Background soft ambient lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-sky-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-sky-600" />
              <span>Experiencias Reales</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-slate-900 tracking-tight leading-tight font-['Outfit']">
              La confianza de quienes nos eligen día a día
            </h2>
            
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Pacientes de Bahía Blanca, Monte Hermoso y toda la región comparten su experiencia con nuestros especialistas y tecnología de vanguardia.
            </p>
          </div>

          {/* Social Proof Trust Badge */}
          <div className="bg-white border border-slate-200/80 rounded-2xl p-4 sm:p-5 shadow-md flex items-center gap-4 shrink-0">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-amber-400 to-amber-500 text-white flex items-center justify-center shadow-md shadow-amber-400/20 font-bold text-xl">
              ★
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-2xl font-extrabold text-slate-900 font-['Outfit']">
                  {TESTIMONIALS_SUMMARY.averageRating}
                </span>
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
              <p className="text-xs text-slate-500 font-medium">
                En más de {TESTIMONIALS_SUMMARY.totalReviews} reseñas verificadas
              </p>
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-sky-600 text-white shadow-md shadow-sky-600/20'
                    : 'bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTestimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-7 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 relative"
            >
              <div className="space-y-4">
                {/* Header: Stars & Quote Icon */}
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400 gap-0.5">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-7 h-7 text-sky-200 group-hover:text-sky-300 transition-colors" />
                </div>

                {/* Treatment Pill */}
                <div className="inline-block px-3 py-1 rounded-lg bg-sky-50 text-sky-700 font-semibold text-xs border border-sky-100">
                  {item.treatment}
                </div>

                {/* Comment */}
                <p className="text-slate-700 text-sm sm:text-[15px] leading-relaxed italic">
                  "{item.comment}"
                </p>
              </div>

              {/* Patient Info Footer */}
              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-900 text-white font-bold text-xs flex items-center justify-center tracking-wider">
                    {item.avatarInitials}
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                        {item.name}
                      </h4>
                      {item.verified && (
                        <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 fill-sky-100" title="Paciente verificado" />
                      )}
                    </div>
                    <p className="text-[11px] text-slate-500 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-slate-400" />
                      <span>{item.location}</span>
                      <span>·</span>
                      <span>{item.date}</span>
                    </p>
                  </div>
                </div>

                {item.doctorAttended && (
                  <span className="text-[10px] bg-slate-50 border border-slate-200 text-slate-600 px-2 py-1 rounded-md text-right hidden sm:block">
                    {item.doctorAttended}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout Banner */}
        <div className="mt-12 bg-gradient-to-r from-slate-900 to-blue-950 rounded-3xl p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1.5 text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-bold font-['Outfit'] flex items-center justify-center sm:justify-start gap-2">
              <ThumbsUp className="w-5 h-5 text-sky-400" />
              <span>¿Ya te atendiste en 2020 Centro de Salud Visual?</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Tu opinión nos ayuda a seguir mejorando cada día. Si querés agendar tu próximo control preventivo o consulta con un especialista, hacelo de forma 100% online.
            </p>
          </div>

          <a
            href={CLINIC_INFO.appointmentUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-sky-600 hover:bg-sky-500 text-white font-bold text-sm rounded-full shadow-lg shadow-sky-600/30 transition transform hover:-translate-y-0.5 shrink-0"
          >
            <span>Reservar Turno Online</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
