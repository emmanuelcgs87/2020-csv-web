import React, { useState, useEffect } from 'react';
import { Eye, Phone, Calendar, Menu, X, ArrowRight, AlertCircle, Clock, MapPin } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

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
    { name: 'Nosotros', href: '#por-que-elegirnos' },
    { name: 'Sedes', href: '#sedes' },
    { name: 'Contacto', href: '#contacto' },
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
          {/* Logo */}
          <a
            href="#"
            id="header-logo-link"
            className="flex items-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-sky-400 rounded-lg p-1"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-sky-600 to-cyan-400 flex items-center justify-center shadow-md shadow-sky-500/20 group-hover:scale-105 transition-transform">
              <Eye className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-white flex items-center gap-1.5 font-['Outfit']">
                2020 <span className="font-light text-slate-200">Oftalmología</span>
              </span>
              <span className="text-[10px] tracking-wider uppercase text-sky-400 font-semibold -mt-1 hidden sm:block">
                Bahía Blanca · Monte Hermoso
              </span>
            </div>
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

          {/* Actions: Phone & Pedir Turno */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${CLINIC_INFO.phone}`}
              id="header-phone-link"
              className="hidden xl:flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700/80 px-3 py-2 rounded-full border border-slate-700 transition"
              title="Llamar a recepción"
            >
              <Phone className="w-3.5 h-3.5 text-sky-400" />
              <span>(0291) 407-3618</span>
            </a>

            <button
              onClick={() => onOpenBooking()}
              id="header-cta-pedir-turno"
              className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-sky-600 to-blue-700 hover:from-sky-500 hover:to-blue-600 text-white font-medium text-sm rounded-full shadow-lg shadow-sky-600/30 hover:shadow-sky-500/40 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Calendar className="w-4 h-4 text-sky-200" />
              <span>Pedir Turno</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => onOpenBooking()}
              id="mobile-header-pedir-turno"
              className="px-3.5 py-1.5 bg-sky-600 text-white text-xs font-semibold rounded-full sm:hidden flex items-center gap-1"
            >
              <Calendar className="w-3.5 h-3.5" />
              Turno
            </button>
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

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r from-sky-600 to-blue-700 text-white font-semibold rounded-xl shadow-md text-sm"
            >
              <Calendar className="w-4 h-4" />
              Solicitar Turno Online
              <ArrowRight className="w-4 h-4" />
            </button>

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
