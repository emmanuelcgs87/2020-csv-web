import React, { useState, useEffect } from 'react';
import { Eye, Calendar, Menu, X, ArrowRight, AlertCircle, Clock, MapPin } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';
import { Logo } from './Logo';

interface HeaderProps {
  onOpenBooking: (doctorName?: string, specialtyId?: string) => void;
  onOpenUrgencias: () => void;
  onOpenVisionTest: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenBooking,
  onOpenUrgencias,
  onOpenVisionTest,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Especialidades', href: '#especialidades' },
    { name: 'Equipo', href: '#equipo' },
    { name: 'Testimonios', href: '#testimonios' },
    { name: 'Artículos', href: '#articulos' },
    { name: 'Sedes', href: '#sedes' },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-900/95 backdrop-blur-md py-3 shadow-lg border-b border-slate-800'
          : 'bg-gradient-to-b from-slate-950/80 via-slate-950/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo 2020 Centro de Salud Visual */}
          <a
            href="#"
            id="header-logo-link"
            className="flex items-center group focus:outline-none focus:ring-2 focus:ring-sky-400 rounded-lg p-1 transition-transform hover:scale-[1.02]"
          >
            <Logo variant="light" size="md" showSubtitle={true} />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-slate-200 hover:text-white hover:bg-white/10 rounded-full transition-all"
              >
                {link.name}
              </a>
            ))}

            {/* Urgencias Tab with pulse dot */}
            <button
              onClick={onOpenUrgencias}
              id="header-urgencias-button"
              className="px-3.5 py-1.5 text-xs font-semibold text-rose-300 hover:text-rose-100 bg-rose-500/15 hover:bg-rose-500/25 border border-rose-500/30 rounded-full flex items-center gap-1.5 transition-all ml-1"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
              </span>
              Urgencias 24h
            </button>

            {/* Test de Visión */}
            <button
              onClick={onOpenVisionTest}
              id="header-vision-test-button"
              className="px-3 py-1.5 text-xs font-medium text-cyan-200 hover:text-white bg-cyan-950/40 hover:bg-cyan-900/50 border border-cyan-500/30 rounded-full transition-all"
            >
              Test de Visión
            </button>
          </nav>

          {/* Actions: Pedir Turno */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={CLINIC_INFO.appointmentUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="header-cta-pedir-turno"
              className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-sky-600 to-blue-700 hover:from-sky-500 hover:to-blue-600 text-white font-medium text-sm rounded-full shadow-lg shadow-sky-600/30 hover:shadow-sky-500/40 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Calendar className="w-4 h-4 text-sky-200" />
              <span>Pedir Turno</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={CLINIC_INFO.appointmentUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="mobile-header-pedir-turno"
              className="px-3.5 py-1.5 bg-sky-600 text-white text-xs font-semibold rounded-full sm:hidden flex items-center gap-1"
            >
              <Calendar className="w-3.5 h-3.5" />
              Turno
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-toggle"
              aria-label="Abrir menú"
              className="p-2 rounded-lg text-slate-200 hover:text-white hover:bg-slate-800 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-900/98 backdrop-blur-xl border-b border-slate-800 px-4 pt-3 pb-6 space-y-3 mt-2 animate-fadeIn shadow-2xl">
          <div className="grid grid-cols-1 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 text-base font-medium text-slate-200 hover:text-white hover:bg-slate-800/80 rounded-xl transition"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-800 space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenUrgencias();
              }}
              className="w-full flex items-center justify-between px-4 py-2.5 bg-rose-500/15 border border-rose-500/30 text-rose-300 rounded-xl font-medium text-sm"
            >
              <span className="flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-rose-400" />
                Guardia Oftalmológica 24h
              </span>
              <span className="text-xs bg-rose-500 text-white px-2 py-0.5 rounded-full font-bold">URGENTE</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenVisionTest();
              }}
              className="w-full flex items-center gap-2 px-4 py-2.5 bg-cyan-950/40 border border-cyan-500/30 text-cyan-200 rounded-xl font-medium text-sm"
            >
              <Eye className="w-4 h-4 text-cyan-400" />
              Test Rápido de Síntomas & Ojo Seco
            </button>

            <a
              href={CLINIC_INFO.appointmentUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r from-sky-600 to-blue-700 text-white font-semibold rounded-xl shadow-md text-sm"
            >
              <Calendar className="w-4 h-4" />
              Solicitar Turno Online
              <ArrowRight className="w-4 h-4" />
            </a>

            <div className="flex items-center justify-between pt-2 px-2 text-xs text-slate-400">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-sky-400" /> Beruti 128, Bahía Blanca
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-sky-400" /> 8 a 20 hs
              </span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
