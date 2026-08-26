import React from 'react';
import { MapPin, Phone, Mail, Instagram, Clock, ShieldCheck, Heart } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';
import { Logo } from './Logo';

interface FooterProps {
  onOpenBooking: () => void;
  onOpenUrgencias: () => void;
  onOpenCoverageModal: () => void;
  onSelectSpecialty: (id: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenBooking,
  onOpenUrgencias,
  onOpenCoverageModal,
  onSelectSpecialty,
}) => {
  return (
    <footer id="contacto" className="bg-[#1b2a47] text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 4 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-700/60">
          
          {/* Column 1: Brand & Mission */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center">
              <Logo variant="light" size="lg" />
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm">
              Cuidamos tu visión con tecnología de última generación y el mejor equipo de especialistas de Bahía Blanca y la región.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={CLINIC_INFO.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram de 2020 Centro de Salud Visual"
                className="w-9 h-9 rounded-full bg-slate-800 hover:bg-sky-600 text-slate-300 hover:text-white flex items-center justify-center transition shadow-sm"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={CLINIC_INFO.instagram}
                target="_blank"
                rel="noreferrer"
                className="text-xs text-slate-300 hover:text-white font-medium transition"
              >
                @2020csvisual
              </a>
            </div>
          </div>

          {/* Column 2: Servicios */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Servicios
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <button
                  onClick={() => onSelectSpecialty('cirugia-refractiva')}
                  className="hover:text-white transition text-slate-300 text-left"
                >
                  Cirugía Refractiva Láser
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectSpecialty('catarata')}
                  className="hover:text-white transition text-slate-300 text-left"
                >
                  Cirugía de Cataratas
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectSpecialty('glaucoma')}
                  className="hover:text-white transition text-slate-300 text-left"
                >
                  Glaucoma
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectSpecialty('retina-vitreo')}
                  className="hover:text-white transition text-slate-300 text-left"
                >
                  Retina y Vítreo
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectSpecialty('oftalmopediatria')}
                  className="hover:text-white transition text-slate-300 text-left"
                >
                  Oftalmología Pediátrica
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectSpecialty('ojo-seco')}
                  className="hover:text-white transition text-slate-300 text-left"
                >
                  Tratamiento de Ojo Seco
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectSpecialty('protesis-oculares')}
                  className="hover:text-white transition text-slate-300 text-left"
                >
                  Prótesis Oculares
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Institucional */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Institucional
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#equipo" className="hover:text-white transition text-slate-300">
                  Nuestro Equipo
                </a>
              </li>
              <li>
                <a href="#testimonios" className="hover:text-white transition text-slate-300">
                  Testimonios
                </a>
              </li>
              <li>
                <a href="#articulos" className="hover:text-white transition text-slate-300">
                  Artículos & Blog
                </a>
              </li>
              <li>
                <a href="#por-que-elegirnos" className="hover:text-white transition text-slate-300">
                  Tecnología
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenCoverageModal}
                  className="hover:text-white transition text-slate-300 text-left"
                >
                  Obras Sociales
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenUrgencias}
                  className="text-rose-400 hover:text-rose-300 font-semibold transition text-left"
                >
                  Guardia Oftalmológica
                </button>
              </li>
              <li>
                <a
                  href={CLINIC_INFO.appointmentUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition text-slate-300 text-left block"
                >
                  Portal de Turnos Online
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contacto */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Contacto
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>
                  Beruti 128, Bahía Blanca<br />
                  Buenos Aires, Argentina
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <a href={`tel:${CLINIC_INFO.phone}`} className="hover:text-white transition">
                  {CLINIC_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <a href={`mailto:${CLINIC_INFO.email}`} className="hover:text-white transition">
                  {CLINIC_INFO.email}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 2020 Centro de Salud Visual. Todos los derechos reservados.</p>
          <div className="flex items-center gap-4">
            <span>Bahía Blanca & Monte Hermoso</span>
            <span>·</span>
            <a
              href={CLINIC_INFO.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="text-slate-400 hover:text-white transition"
            >
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
