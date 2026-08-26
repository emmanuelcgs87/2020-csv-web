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

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  treatment: string;
  category: 'cirugias' | 'ojo-seco' | 'protesis' | 'urgencias' | 'general' | 'pediatria';
  rating: number;
  date: string;
  comment: string;
  doctorAttended?: string;
  avatarInitials: string;
  verified: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  excerpt: string;
  author: {
    name: string;
    role: string;
    avatar?: string;
  };
  content: {
    intro: string;
    sections: {
      heading: string;
      body: string;
    }[];
    takeaways: string[];
  };
}
