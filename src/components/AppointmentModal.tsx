import React, { useState } from 'react';
import { DOCTORS, SPECIALTIES, BRANCHES, OBRAS_SOCIALES, CLINIC_INFO } from '../data/clinicData';
import { AppointmentBooking } from '../types';
import { X, Calendar, Clock, MapPin, User, Phone, Mail, Shield, CheckCircle2, MessageCircle, AlertCircle, ArrowRight, ArrowLeft, ExternalLink } from 'lucide-react';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialDoctorName?: string;
  initialSpecialtyId?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  initialDoctorName,
  initialSpecialtyId,
}) => {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);

  const [booking, setBooking] = useState<AppointmentBooking>({
    branch: 'Bahía Blanca (Beruti 128)',
    specialty: initialSpecialtyId
      ? SPECIALTIES.find((s) => s.id === initialSpecialtyId)?.name || 'Oftalmología General'
      : 'Oftalmología General',
    doctor: initialDoctorName || 'Sin preferencia (Primer turno disponible)',
    date: '2026-08-28',
    time: '10:30',
    patientName: '',
    patientDni: '',
    patientPhone: '',
    patientEmail: '',
    obraSocial: 'OSDE',
    affiliateNumber: '',
    notes: '',
  });

  const [confirmed, setConfirmed] = useState(false);

  if (!isOpen) return null;

  const timeSlots = [
    '08:30', '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00', '18:30', '19:00'
  ];

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep((prev) => (prev + 1) as any);
    } else {
      // Confirm booking
      setConfirmed(true);
      setStep(4);
    }
  };

  const handlePrev = () => {
    if (step > 1) setStep((prev) => (prev - 1) as any);
  };

  const whatsappMessage = `*Solicitud de Turno - 2020 Centro de Salud Visual*\n\n` +
    `👤 *Paciente:* ${booking.patientName}\n` +
    `📄 *DNI:* ${booking.patientDni}\n` +
    `🏥 *Sede:* ${booking.branch}\n` +
    `🩺 *Especialidad:* ${booking.specialty}\n` +
    `👨‍⚕️ *Profesional:* ${booking.doctor}\n` +
    `📅 *Fecha solicitada:* ${booking.date}\n` +
    `⏰ *Horario sugerido:* ${booking.time} hs\n` +
    `🛡️ *Obra Social / Prepaga:* ${booking.obraSocial} (N°: ${booking.affiliateNumber || 'Particular'})\n` +
    `📞 *Teléfono:* ${booking.patientPhone}\n` +
    (booking.notes ? `📝 *Motivo / Síntomas:* ${booking.notes}\n` : '') +
    `\nPor favor confirmar disponibilidad. Gracias!`;

  const whatsappUrl = `https://wa.me/${CLINIC_INFO.whatsapp.replace('+', '')}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-slate-200 relative my-8">
        
        {/* Modal Top Header */}
        <div className="bg-slate-900 text-white p-6 sm:p-7 flex items-center justify-between relative">
          <div className="space-y-1">
            <span className="text-xs text-sky-400 font-bold uppercase tracking-wider">
              2020 Centro de Salud Visual · Portal de Turnos
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-['Outfit']">
              {step === 4 ? '¡Turno Solicitado!' : 'Solicitar Turno Médico'}
            </h3>
            <p className="text-xs text-slate-300">
              Bahía Blanca (Beruti 128) · Monte Hermoso
            </p>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Indicator */}
        {step < 4 && (
          <div className="bg-slate-100 px-6 py-3 border-b border-slate-200 flex items-center justify-between text-xs font-semibold text-slate-600">
            <div className={`flex items-center gap-1.5 ${step >= 1 ? 'text-sky-600 font-bold' : ''}`}>
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[11px] ${step >= 1 ? 'bg-sky-600 text-white' : 'bg-slate-300'}`}>1</span>
              <span>Sede y Especialidad</span>
            </div>
            <div className={`flex items-center gap-1.5 ${step >= 2 ? 'text-sky-600 font-bold' : ''}`}>
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[11px] ${step >= 2 ? 'bg-sky-600 text-white' : 'bg-slate-300'}`}>2</span>
              <span>Fecha y Hora</span>
            </div>
            <div className={`flex items-center gap-1.5 ${step >= 3 ? 'text-sky-600 font-bold' : ''}`}>
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[11px] ${step >= 3 ? 'bg-sky-600 text-white' : 'bg-slate-300'}`}>3</span>
              <span>Datos del Paciente</span>
            </div>
          </div>
        )}

        {/* Form Body */}
        <div className="p-6 sm:p-8">

          {/* Direct link callout to https://turnos.revaicare.com/2020csv */}
          {step < 4 && (
            <div className="mb-6 p-4 rounded-2xl bg-sky-50 border border-sky-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-sky-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                    Portal de Turnos Online Oficial
                  </h4>
                  <p className="text-xs text-slate-600">
                    Podés seleccionar médico, día y horario directamente en nuestra plataforma web.
                  </p>
                </div>
              </div>
              <a
                href={CLINIC_INFO.appointmentUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold rounded-xl shrink-0 transition shadow-sm w-full sm:w-auto"
              >
                <span>Abrir turnos.revaicare.com</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          )}
          
          {/* STEP 1: Sede, Especialidad, Doctor */}
          {step === 1 && (
            <div className="space-y-5 animate-fadeIn">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                  1. Seleccioná la Sede
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {BRANCHES.map((b) => (
                    <button
                      type="button"
                      key={b.id}
                      onClick={() => setBooking({ ...booking, branch: b.name })}
                      className={`p-3.5 rounded-xl border text-left flex items-start gap-3 transition ${
                        booking.branch.includes(b.name) || booking.branch.includes(b.city)
                          ? 'border-sky-500 bg-sky-50/60 ring-2 ring-sky-500/20'
                          : 'border-slate-200 hover:border-slate-300 bg-slate-50/50'
                      }`}
                    >
                      <MapPin className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                      <div>
                        <div className="font-bold text-xs sm:text-sm text-slate-800">{b.name}</div>
                        <div className="text-xs text-slate-500">{b.address}</div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                  2. Especialidad / Motivo de Consulta
                </label>
                <select
                  value={booking.specialty}
                  onChange={(e) => setBooking({ ...booking, specialty: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-sm font-medium text-slate-800 focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none"
                >
                  {SPECIALTIES.map((s) => (
                    <option key={s.id} value={s.name}>
                      {s.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                  3. Profesional Preferido (Opcional)
                </label>
                <select
                  value={booking.doctor}
                  onChange={(e) => setBooking({ ...booking, doctor: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-sm font-medium text-slate-800 focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none"
                >
                  <option value="Sin preferencia (Primer turno disponible)">
                    Sin preferencia (Primer turno disponible)
                  </option>
                  {DOCTORS.map((d) => (
                    <option key={d.id} value={d.name}>
                      {d.name} — {d.specialty}
                    </option>
                  ))}
                </select>
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-sky-600 hover:bg-sky-500 text-white font-bold text-sm rounded-xl shadow-md transition"
                >
                  <span>Continuar a Fecha y Hora</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: Fecha y Horario */}
          {step === 2 && (
            <div className="space-y-5 animate-fadeIn">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                  Seleccioná la Fecha Estimada
                </label>
                <input
                  type="date"
                  value={booking.date}
                  onChange={(e) => setBooking({ ...booking, date: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-sm font-semibold text-slate-800 focus:ring-2 focus:ring-sky-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                  Seleccioná el Horario
                </label>
                <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
                  {timeSlots.map((slot) => (
                    <button
                      type="button"
                      key={slot}
                      onClick={() => setBooking({ ...booking, time: slot })}
                      className={`py-2 rounded-lg text-xs font-bold transition ${
                        booking.time === slot
                          ? 'bg-sky-600 text-white shadow'
                          : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-sky-50 p-4 rounded-xl border border-sky-200 text-xs text-sky-800 flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                <span>
                  El horario seleccionado es de referencia y será confirmado en minutos por el equipo de recepción según disponibilidad médica exacta.
                </span>
              </div>

              <div className="pt-4 flex items-center justify-between">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 text-slate-600 hover:text-slate-900 font-semibold text-sm rounded-xl transition"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Volver</span>
                </button>
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-sky-600 hover:bg-sky-500 text-white font-bold text-sm rounded-xl shadow-md transition"
                >
                  <span>Continuar a Datos Personales</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Datos del Paciente */}
          {step === 3 && (
            <form onSubmit={handleNext} className="space-y-4 animate-fadeIn">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Nombre y Apellido *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ej: Martín Gómez"
                    value={booking.patientName}
                    onChange={(e) => setBooking({ ...booking, patientName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-sky-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    DNI / Documento *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ej: 34.567.890"
                    value={booking.patientDni}
                    onChange={(e) => setBooking({ ...booking, patientDni: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-sky-500 outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Teléfono / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Ej: 291 4567890"
                    value={booking.patientPhone}
                    onChange={(e) => setBooking({ ...booking, patientPhone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-sky-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Correo Electrónico (Opcional)
                  </label>
                  <input
                    type="email"
                    placeholder="paciente@gmail.com"
                    value={booking.patientEmail}
                    onChange={(e) => setBooking({ ...booking, patientEmail: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-sky-500 outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Obra Social o Prepaga
                  </label>
                  <select
                    value={booking.obraSocial}
                    onChange={(e) => setBooking({ ...booking, obraSocial: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-sky-500 outline-none bg-white"
                  >
                    <option value="Particular">Particular (Sin obra social)</option>
                    {OBRAS_SOCIALES.map((os) => (
                      <option key={os.id} value={os.name}>
                        {os.name}
                      </option>
                    ))}
                    <option value="Otra">Otra obra social</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    N° de Afiliado / Plan
                  </label>
                  <input
                    type="text"
                    placeholder="Ej: 1234567-00"
                    value={booking.affiliateNumber}
                    onChange={(e) => setBooking({ ...booking, affiliateNumber: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-sky-500 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Motivo de consulta o síntomas (Opcional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Ej: Control anual, ardor de ojos, renovación de anteojos..."
                  value={booking.notes}
                  onChange={(e) => setBooking({ ...booking, notes: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-sky-500 outline-none resize-none"
                />
              </div>

              <div className="pt-4 flex items-center justify-between">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 text-slate-600 hover:text-slate-900 font-semibold text-sm rounded-xl transition"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Volver</span>
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-sky-600 to-blue-700 hover:from-sky-500 hover:to-blue-600 text-white font-bold text-sm rounded-xl shadow-lg transition"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Confirmar y Enviar Turno</span>
                </button>
              </div>
            </form>
          )}

          {/* STEP 4: Success & WhatsApp Sync */}
          {step === 4 && (
            <div className="text-center py-4 space-y-6 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-2">
                <h4 className="text-2xl font-bold text-slate-900 font-['Outfit']">
                  ¡Turno Registrado con Éxito!
                </h4>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  Gracias <strong className="text-slate-800">{booking.patientName || 'Paciente'}</strong>. Tu solicitud para <strong>{booking.specialty}</strong> en <strong>{booking.branch}</strong> fue guardada.
                </p>
              </div>

              {/* Summary Box */}
              <div className="bg-slate-50 p-4 sm:p-5 rounded-2xl border border-slate-200 text-left text-xs space-y-2 max-w-md mx-auto text-slate-700">
                <div className="flex justify-between">
                  <span className="text-slate-500">Fecha y Hora:</span>
                  <span className="font-bold">{booking.date} · {booking.time} hs</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Médico:</span>
                  <span className="font-semibold">{booking.doctor}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Obra Social:</span>
                  <span className="font-semibold">{booking.obraSocial}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Dirección:</span>
                  <span className="font-semibold">Beruti 128, Bahía Blanca</span>
                </div>
              </div>

              {/* Direct WhatsApp Confirmation Button */}
              <div className="space-y-3 pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 w-full max-w-md py-3.5 px-6 bg-[#2557a7] hover:bg-[#1d4484] text-white font-bold rounded-xl shadow-lg transition"
                >
                  <MessageCircle className="w-5 h-5 fill-white" />
                  <span>Enviar por WhatsApp a Recepción</span>
                </a>
                <p className="text-xs text-slate-400">
                  Tocá el botón para enviar los datos directamente a nuestro WhatsApp oficial y acelerar tu confirmación.
                </p>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="text-xs text-slate-500 hover:text-slate-800 underline font-semibold"
                >
                  Cerrar ventana
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
