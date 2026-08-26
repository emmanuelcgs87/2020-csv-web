export interface Doctor {
  id: string;
  name: string;
  role: string;
  specialty: string;
  subspecialties: string[];
  image: string;
  bio: string;
  education: string[];
  days: string;
  sede: string;
}

export interface Specialty {
  id: string;
  name: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  procedures: string[];
  equipmentUsed: string[];
  symptoms: string[];
  iconName: string;
  sedes: string[];
}

export interface ObraSocial {
  id: string;
  name: string;
  planInfo: string;
  coverageLevel: 'Completa' | 'Con Coseguro' | 'Reintegro' | 'Planes Seleccionados';
  requiresOrder: boolean;
  color: string;
}

export interface Branch {
  id: string;
  name: string;
  address: string;
  city: string;
  phone: string;
  whatsapp: string;
  schedule: string;
  guardia: string;
  googleMapsUrl: string;
  image: string;
}

export interface AppointmentBooking {
  branch: string;
  specialty: string;
  doctor: string;
  date: string;
  time: string;
  patientName: string;
  patientDni: string;
  patientPhone: string;
  patientEmail: string;
  obraSocial: string;
  affiliateNumber: string;
  notes: string;
}
