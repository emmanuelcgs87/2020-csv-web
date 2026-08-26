import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ObrasSocialesBar } from './components/ObrasSocialesBar';
import { HighlightFeatures } from './components/HighlightFeatures';
import { SpecialtiesSection } from './components/SpecialtiesSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { TeamSection } from './components/TeamSection';
import { CtaSection } from './components/CtaSection';
import { LocationsSection } from './components/LocationsSection';
import { Footer } from './components/Footer';

import { AppointmentModal } from './components/AppointmentModal';
import { DoctorDetailModal } from './components/DoctorDetailModal';
import { SpecialtyDetailModal } from './components/SpecialtyDetailModal';
import { UrgenciasModal } from './components/UrgenciasModal';
import { CoverageCheckerModal } from './components/CoverageCheckerModal';
import { VisionTestModal } from './components/VisionTestModal';

import { Doctor, ObraSocial } from './types';
import { CLINIC_INFO } from './data/clinicData';
import { MessageCircle, Phone, ArrowUp, Calendar, AlertCircle } from 'lucide-react';

export default function App() {
  // Modal states
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedDoctorForBooking, setSelectedDoctorForBooking] = useState<string | undefined>(undefined);
  const [selectedSpecialtyForBooking, setSelectedSpecialtyForBooking] = useState<string | undefined>(undefined);

  const [selectedDoctorDetail, setSelectedDoctorDetail] = useState<Doctor | null>(null);
  const [selectedSpecialtyDetailId, setSelectedSpecialtyDetailId] = useState<string | null>(null);

  const [urgenciasOpen, setUrgenciasOpen] = useState(false);
  const [coverageOpen, setCoverageOpen] = useState(false);
  const [selectedObraSocialForModal, setSelectedObraSocialForModal] = useState<ObraSocial | undefined>(undefined);
  const [visionTestOpen, setVisionTestOpen] = useState(false);

  const handleOpenBooking = (doctorName?: string, specialtyId?: string) => {
    setSelectedDoctorForBooking(doctorName);
    setSelectedSpecialtyForBooking(specialtyId);
    setBookingOpen(true);
  };

  const handleScrollToSpecialties = () => {
    const el = document.getElementById('especialidades');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenCoverage = (os?: ObraSocial) => {
    setSelectedObraSocialForModal(os);
    setCoverageOpen(true);
  };

  const whatsappDirectUrl = `https://wa.me/${CLINIC_INFO.whatsapp.replace('+', '')}?text=${encodeURIComponent(
    'Hola! Quisiera realizar una consulta en 2020 Oftalmología.'
  )}`;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col selection:bg-sky-500 selection:text-white relative font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Top Header */}
      <Header
        onOpenBooking={handleOpenBooking}
        onOpenUrgencias={() => setUrgenciasOpen(true)}
        onOpenVisionTest={() => setVisionTestOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Section with clinic facade background & floating card */}
        <Hero
          onOpenBooking={() => handleOpenBooking()}
          onScrollToSpecialties={handleScrollToSpecialties}
          onOpenUrgencias={() => setUrgenciasOpen(true)}
        />

        {/* Obras Sociales and Prepagas Bar */}
        <ObrasSocialesBar onOpenCoverageModal={handleOpenCoverage} />

        {/* Únicos en Bahía Blanca: Ojo Seco & Prótesis Oculares */}
        <HighlightFeatures
          onSelectSpecialty={(id) => setSelectedSpecialtyDetailId(id)}
          onOpenBooking={handleOpenBooking}
        />

        {/* Nuestros Servicios: Procedimientos y Tratamientos Especializados */}
        <SpecialtiesSection
          onSelectSpecialty={(id) => setSelectedSpecialtyDetailId(id)}
          onOpenBooking={handleOpenBooking}
        />

        {/* Por Qué Elegirnos: Tecnología de vanguardia para tu salud visual */}
        <WhyChooseUs
          onOpenBooking={() => handleOpenBooking()}
          onOpenUrgencias={() => setUrgenciasOpen(true)}
        />

        {/* Nuestro Equipo: Especialistas comprometidos con tu visión */}
        <TeamSection
          onSelectDoctor={(doc) => setSelectedDoctorDetail(doc)}
          onBookWithDoctor={(docName) => handleOpenBooking(docName)}
        />

        {/* Tu Turno: Da el primer paso hacia una visión más clara */}
        <CtaSection onOpenBooking={() => handleOpenBooking()} />

        {/* Sedes: Bahía Blanca & Monte Hermoso */}
        <LocationsSection
          onOpenUrgencias={() => setUrgenciasOpen(true)}
          onOpenBooking={() => handleOpenBooking()}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenBooking={() => handleOpenBooking()}
        onOpenUrgencias={() => setUrgenciasOpen(true)}
        onOpenCoverageModal={() => handleOpenCoverage()}
        onSelectSpecialty={(id) => setSelectedSpecialtyDetailId(id)}
      />

      {/* Floating Action Buttons: WhatsApp & Urgencias */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
        {/* Floating Urgencias hotline indicator */}
        <button
          onClick={() => setUrgenciasOpen(true)}
          className="pointer-events-auto group px-3.5 py-2 rounded-full bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold shadow-lg shadow-rose-600/30 flex items-center gap-2 transition-all transform hover:-translate-x-1"
          aria-label="Guardia de Urgencias"
        >
          <span className="w-2 h-2 rounded-full bg-white animate-ping" />
          <span>Guardia 24h</span>
        </button>

        {/* Floating WhatsApp Button */}
        <a
          href={whatsappDirectUrl}
          target="_blank"
          rel="noreferrer"
          className="pointer-events-auto w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-2xl shadow-emerald-600/40 hover:scale-110 active:scale-95 transition-all"
          aria-label="Contactar por WhatsApp"
          title="Escribinos por WhatsApp"
        >
          <MessageCircle className="w-8 h-8 fill-white text-[#25D366]" />
        </a>
      </div>

      {/* Modals & Dialogs */}
      <AppointmentModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        initialDoctorName={selectedDoctorForBooking}
        initialSpecialtyId={selectedSpecialtyForBooking}
      />

      <DoctorDetailModal
        doctor={selectedDoctorDetail}
        onClose={() => setSelectedDoctorDetail(null)}
        onBookWithDoctor={(name) => handleOpenBooking(name)}
      />

      <SpecialtyDetailModal
        specialtyId={selectedSpecialtyDetailId}
        onClose={() => setSelectedSpecialtyDetailId(null)}
        onOpenBooking={handleOpenBooking}
      />

      <UrgenciasModal
        isOpen={urgenciasOpen}
        onClose={() => setUrgenciasOpen(false)}
      />

      <CoverageCheckerModal
        isOpen={coverageOpen}
        onClose={() => setCoverageOpen(false)}
        initialObraSocial={selectedObraSocialForModal}
        onOpenBooking={() => handleOpenBooking()}
      />

      <VisionTestModal
        isOpen={visionTestOpen}
        onClose={() => setVisionTestOpen(false)}
        onOpenBooking={handleOpenBooking}
      />
    </div>
  );
}
