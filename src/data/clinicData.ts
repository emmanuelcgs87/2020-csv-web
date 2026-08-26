import { Doctor, Specialty, ObraSocial, Branch } from '../types';

export const CLINIC_INFO = {
  name: "2020 Centro de Salud Visual",
  legalName: "2020 Centro de Salud Visual",
  slogan: "Cuidamos tu visión con diagnóstico preciso y tratamiento adecuado.",
  description: "Clínica oftalmológica de alta complejidad en Bahía Blanca y Monte Hermoso. Diagnóstico por imágenes, cirugías ambulatorias y guardia oftalmológica.",
  phone: "(0291) 407-3618",
  whatsapp: "+5492914073618",
  whatsappDisplay: "+54 9 291 407-3618",
  email: "turnos@2020oftalmologia.com.ar",
  emergencyPhone: "(0291) 154-073618",
  instagram: "https://www.instagram.com/2020csvisual/",
  hoursWeekdays: "Lunes a Viernes: 8:00 a 20:00 hs",
  hoursSaturday: "Sábados: 10:00 a 14:00 hs",
  guardia24: "Guardia activa y pasiva 24 horas",
};

export const BRANCHES: Branch[] = [
  {
    id: "bahia-blanca",
    name: "Sede Central Bahía Blanca",
    address: "Beruti 128",
    city: "Bahía Blanca, Buenos Aires",
    phone: "(0291) 407-3618",
    whatsapp: "+5492914073618",
    schedule: "Lun a Vie: 08:00 a 20:00 hs | Sáb: 10:00 a 14:00 hs",
    guardia: "Guardia activa y pasiva permanente",
    googleMapsUrl: "https://maps.google.com/?q=Beruti+128+Bahia+Blanca",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "monte-hermoso",
    name: "Sede Monte Hermoso",
    address: "Av. Costanera 450",
    city: "Monte Hermoso, Buenos Aires",
    phone: "(02921) 48-1290",
    whatsapp: "+5492914073618",
    schedule: "Martes, Jueves y Sábados: 09:00 a 18:00 hs",
    guardia: "Atención programada y urgencias estacionales",
    googleMapsUrl: "https://maps.google.com/?q=Monte+Hermoso+Buenos+Aires",
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1000&q=80",
  },
];

export const DOCTORS: Doctor[] = [
  {
    id: "dr-esteban-yanez",
    name: "Dr. Esteban Yañez",
    role: "Médico Especialista",
    specialty: "Segmento Anterior & Catarata",
    subspecialties: ["Cirugía de Catarata por Facoemulsificación", "Lentes Intraoculares Premium", "Córnea", "Miopía y Astigmatismo"],
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80",
    bio: "Especialista en segmento anterior y microcirugía ocular con más de 15 años de trayectoria. Formado en centros de alta complejidad nacionales e internacionales, lidera la unidad quirúrgica de facoemulsificación en Bahía Blanca.",
    education: [
      "Médico - Universidad de Buenos Aires (UBA)",
      "Especialista en Oftalmología - Consejo Argentino de Oftalmología (CAO)",
      "Fellowship en Segmento Anterior y Cirugía Refractiva",
      "Miembro de la Sociedad Argentina de Oftalmología (SAO)"
    ],
    days: "Lunes, Miércoles y Viernes",
    sede: "Bahía Blanca y Monte Hermoso"
  },
  {
    id: "dr-emmanuel-rodriguez",
    name: "Dr. Emmanuel Rodríguez",
    role: "Médico Especialista",
    specialty: "Oftalmología General & Ojo Seco",
    subspecialties: ["Tratamiento Integral de Ojo Seco", "Diagnóstico por Imágenes", "Topografía Corneal", "Control Preventivo"],
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=800&q=80",
    bio: "Especialista en oftalmología clínica y pionero en la implementación del protocolo de alta tecnología para el diagnóstico y tratamiento del ojo seco severo y disfunción de glándulas de Meibomio.",
    education: [
      "Médico - Universidad Nacional de La Plata (UNLP)",
      "Residencia en Oftalmología en Hospital Municipal de Bahía Blanca",
      "Postgrado en Superficie Ocular y Ojo Seco",
      "Miembro Activo CAO"
    ],
    days: "Martes y Jueves",
    sede: "Bahía Blanca"
  },
  {
    id: "dra-estefania-mata",
    name: "Dra. Estefanía Mata",
    role: "Cirujana Especialista",
    specialty: "Retina & Cirugía Vítreo-Retiniana",
    subspecialties: ["Desprendimiento de Retina", "Maculopatías y Degeneración Macular (DMRE)", "Retinopatía Diabética", "Inyecciones Intravítreas (Antiangiogénicos)"],
    image: "https://images.unsplash.com/photo-1594824813580-04331000574a?auto=format&fit=crop&w=800&q=80",
    bio: "Cirujana especialista en retina y vítreo. Cuenta con amplia experiencia en vitrectomías de microincisión, tratamiento con láser y terapia médica de patologías vasculares retinianas complejas.",
    education: [
      "Médica - Universidad Nacional del Sur (UNS)",
      "Especialización en Retina Médica y Quirúrgica - Hospital Santa Lucía",
      "Master en Patología Retiniana",
      "Miembro de la Sociedad Panamericana de Retina y Vítreo"
    ],
    days: "Lunes, Martes y Jueves",
    sede: "Bahía Blanca"
  },
  {
    id: "dr-pablo-koll",
    name: "Dr. Pablo Koll",
    role: "Médico Cirujano",
    specialty: "Cirugía Ocular & Glaucoma",
    subspecialties: ["Cirugía de Glaucoma (Trabeculectomía, Implantes valvulares)", "Láser SLT / YAG", "Cirugía Refractiva Láser", "Control de Presión Ocular"],
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=800&q=80",
    bio: "Médico cirujano dedicado al diagnóstico precoz y control avanzado del glaucoma. Implementa tratamientos con láser selective laser trabeculoplasty (SLT) y técnicas quirúrgicas mínimamente invasivas (MIGS).",
    education: [
      "Médico - Universidad de Buenos Aires (UBA)",
      "Especialista en Glaucoma Quirúrgico",
      "Docente e Investigador en Ciencias Visuales",
      "Miembro de la Asociación Argentina de Glaucoma (ASAG)"
    ],
    days: "Miércoles y Viernes",
    sede: "Bahía Blanca"
  },
  {
    id: "dr-andres-coria",
    name: "Dr. Andres Coria",
    role: "Médico Especialista",
    specialty: "Oftalmología General & Prótesis Oculares",
    subspecialties: ["Rehabilitación Ocular", "Adaptación de Prótesis Oculares", "Plástica Ocular", "Ectropion y Entropion"],
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=800&q=80",
    bio: "Referente regional en rehabilitación con prótesis oculares y cirugía reconstructiva. Su trabajo devuelve calidad de vida, estética y funcionalidad a pacientes con traumatismos y anomalías congénitas.",
    education: [
      "Médico - Universidad Nacional de Córdoba (UNC)",
      "Especialista Universitario en Oftalmología",
      "Certificación en Anaplastología y Prótesis Oculares",
      "Miembro de la Sociedad Argentina de Plástica Ocular"
    ],
    days: "Lunes a Viernes",
    sede: "Bahía Blanca y Monte Hermoso"
  },
  {
    id: "dra-angelica-florez-blanco",
    name: "Dra. Angélica Florez Blanco",
    role: "Médica Especialista",
    specialty: "Oftalmología General & Oftalmopediatría",
    subspecialties: ["Salud Visual Pediátrica", "Estrabismo y Ambliopía (Ojo Vago)", "Fondo de Ojo en Recién Nacidos", "Control Escolar Visual"],
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80",
    bio: "Dedicada a la atención oftalmológica integral infantil y de adultos. Desarrolla programas de detección temprana de defectos refractivos y ambliopía en niños y adolescentes de la región.",
    education: [
      "Médica - Universidad Nacional de La Plata (UNLP)",
      "Postgrado en Oftalmología Infantil y Estrabismo",
      "Miembro del Centro Argentino de Estrabismo",
      "Médica de Guardia en Urgencias Oftalmológicas"
    ],
    days: "Martes, Jueves y Sábados",
    sede: "Bahía Blanca y Monte Hermoso"
  },
];

export const SPECIALTIES: Specialty[] = [
  {
    id: "oftalmologia-general",
    name: "Oftalmología General",
    shortDesc: "Control anual, atención de urgencias, consulta primera vez en Bahía Blanca y Monte Hermoso.",
    fullDesc: "Examen oftalmológico exhaustivo que incluye agudeza visual, biomicroscopía en lámpara de hendidura, medición de presión intraocular (tonometría) y fondo de ojos con dilatación pupilar.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80",
    procedures: [
      "Control Anual Preventivo",
      "Fondo de Ojo con dilatación",
      "Tonometría / Control de Presión Ocular",
      "Prescripción de Lentes Aéreos y de Contacto",
      "Atención de Urgencias y Cuerpos Extraños"
    ],
    equipmentUsed: ["Lámpara de Hendidura de Alta Definición", "Tonómetro de Goldman y de Aire", "Autorrefractómetro Computarizado"],
    symptoms: ["Visión borrosa", "Dolor ocular", "Ojo rojo persistente", "Cansancio visual frente a pantallas", "Prescripción de anteojos"],
    iconName: "Search",
    sedes: ["Bahía Blanca", "Monte Hermoso"]
  },
  {
    id: "catarata",
    name: "Catarata",
    shortDesc: "Facoemulsificación con implante de lentes intraoculares premium (monofocales, tóricas y multifocales).",
    fullDesc: "Cirugía ambulatoria de mínima incisión y recuperación inmediata. Reemplazamos el cristalino opaco por una lente intraocular de última tecnología que corrige también presbicia y astigmatismo.",
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80",
    procedures: [
      "Facoemulsificación ultrasónica moderna",
      "Implante de Lentes Multifocales / Trifocales",
      "Lentes Tóricas para corrección de astigmatismo",
      "Cirugía bilateral secuencial",
      "Biometría ocular de alta precisión"
    ],
    equipmentUsed: ["Facoemulsificador Alcon / Centurion", "Biómetro Óptico IOL Master", "Microscopio Quirúrgico Zeiss"],
    symptoms: ["Visión nublada o amarillenta", "Deslumbramiento con luces de autos de noche", "Dificultad para leer con anteojos habituales", "Pérdida de nitidez y contraste"],
    iconName: "Eye",
    sedes: ["Bahía Blanca"]
  },
  {
    id: "glaucoma",
    name: "Glaucoma",
    shortDesc: "Diagnóstico precoz y tratamiento integral. Tratamiento LÁSER (SLT) y diagnóstico por imagen específico.",
    fullDesc: "El glaucoma es el 'ladrón silencioso de la visión'. Nuestro centro combina Campimetría Computarizada Humphrey, Tomografía de Coherencia Óptica (OCT de nervio óptico y capa de fibras nerviosas) y Paquimetría.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
    procedures: [
      "Curva diaria de presión intraocular",
      "Trabeculoplastia Láser Selectiva (SLT)",
      "Iridotomía Láser YAG preventiva",
      "Cirugía filtrante (Trabeculectomía)",
      "Implantes de válvulas de drenaje"
    ],
    equipmentUsed: ["OCT Spectralis / Cirrus", "Campímetro Computarizado Humphrey", "Láser YAG / SLT"],
    symptoms: ["Pérdida lenta de la visión periférica", "Visión en túnel", "Dolor ocular agudo con halos de colores (glaucoma agudo)", "Antecedentes familiares de glaucoma"],
    iconName: "CheckCircle",
    sedes: ["Bahía Blanca"]
  },
  {
    id: "ojo-seco",
    name: "Alta Tecnología en Ojo Seco",
    shortDesc: "Enfoque integral con diagnóstico por imágenes, meibografía y múltiples alternativas terapéuticas.",
    fullDesc: "Evaluamos con precisión la calidad y cantidad de lágrima, inflamación de la superficie ocular y disfunción de glándulas de Meibomio (MGD). Tratamiento con luz pulsada (IPL), calor térmico y colirios autólogos.",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80",
    procedures: [
      "Interferometría de capa lipídica",
      "Meibografía no invasiva HD",
      "Test de Schirmer y BUT con fluoresceína",
      "Tratamiento con Luz Pulsada Intensa (IPL)",
      "Tapones lagrimales y suero autólogo"
    ],
    equipmentUsed: ["Ocular Surface Analyzer (OSA)", "Plataforma IPL Oftalmológica", "Topógrafo con film lagrimal"],
    symptoms: ["Sensación de arenilla o cuerpo extraño", "Ardor y lagrimeo excesivo paradójico", "Enrojecimiento ocular al usar pantallas", "Sensibilidad molesta a la luz"],
    iconName: "Droplets",
    sedes: ["Bahía Blanca", "Monte Hermoso"]
  },
  {
    id: "protesis-oculares",
    name: "Rehabilitación con Prótesis Oculares",
    shortDesc: "Centro de referencia exclusivo: plástica y reconstrucción ocular, adaptación estética y funcional.",
    fullDesc: "Diseño, fabricación y adaptación personalizada de prótesis oculares y cascarillas esclerales hechas a medida y pintadas a mano con fidelidad cromática al ojo contralateral.",
    image: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80",
    procedures: [
      "Conformación de cavidad anoftálmica",
      "Adaptación de prótesis individualizadas a medida",
      "Cascarillas cosméticas ultrafinas",
      "Mantenimiento, pulido y desinfección",
      "Acompañamiento psicológico y estético"
    ],
    equipmentUsed: ["Biomateriales biocompatibles de grado médico PMMA", "Pigmentación artesanal de iris"],
    symptoms: ["Pérdida ocular por traumatismo o patología", "Atrofia ocular (ptisis bulbi)", "Incomodidad o desgaste de prótesis previa"],
    iconName: "Shield",
    sedes: ["Bahía Blanca"]
  },
  {
    id: "retina-vitreo",
    name: "Retina y Vítreo",
    shortDesc: "Cirugía vitreorretiniana, inyecciones intravítreas antiangiogénicas y fotocoagulación láser.",
    fullDesc: "Diagnóstico y tratamiento de patologías graves del fondo de ojo como desprendimiento de retina, maculopatía asociada a la edad (DMRE), retinopatía diabética y trombosis venosas.",
    image: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&w=800&q=80",
    procedures: [
      "Vitrectomía microincisional 23G/25G",
      "Aplicación de Antiangiogénicos (Lucentis, Eylea, Beovu)",
      "Fotocoagulación Láser Argón / Multipunto",
      "Angiografía digital con fluoresceína (FAG)",
      "Cirugía de agujero macular y membrana epirretiniana"
    ],
    equipmentUsed: ["OCT de Mácula Spectralis", "Retinógrafo Digital Angiógrafo", "Láser Verde 532nm"],
    symptoms: ["Mancha fija oscura en el centro de la visión", "Líneas rectas que se ven onduladas (metamorfopsia)", "Destellos de luz o 'flashes' repentinos", "Lluvia de moscas volantes o sombras"],
    iconName: "Sparkles",
    sedes: ["Bahía Blanca"]
  },
  {
    id: "cirugia-refractiva",
    name: "Cirugía Refractiva Láser",
    shortDesc: "Corrección definitiva de miopía, astigmatismo e hipermetropía con láser de femtosegundo y Excimer.",
    fullDesc: "Liberate de anteojos y lentes de contacto. Procedimiento indoloro con anestesia en gotas, que dura menos de 15 minutos con recuperación visual al día siguiente.",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80",
    procedures: [
      "Técnica LASIK guiada por topografía",
      "PRK / Lasek personalizada",
      "Implante de lentes fáquicas ICL",
      "Estudio aberrométrico y paquimetría corneal"
    ],
    equipmentUsed: ["Láser Excimer Allegretto Wave", "Láser de Femtosegundo Ziemer", "Topógrafo Pentacam HR"],
    symptoms: ["Dependencia total de anteojos o lentes de contacto", "Miopía, hipermetropía o astigmatismo estabilizado", "Deseo de practicar deportes sin gafas"],
    iconName: "Zap",
    sedes: ["Bahía Blanca"]
  },
  {
    id: "oftalmopediatria",
    name: "Oftalmopediatría y Estrabismo",
    shortDesc: "Salud visual infantil, despistaje temprano de ambliopía (ojo vago) y corrección de desviación ocular.",
    fullDesc: "Atención cálida y especializada para bebés, niños y adolescentes. Controles pediátricos de ingreso escolar, tratamiento con parches, toxina botulínica y cirugía de estrabismo.",
    image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=800&q=80",
    procedures: [
      "Screening visual neonatal y pediátrico",
      "Tratamiento de ambliopía y prescripción óptica infantil",
      "Cirugía correctora de estrabismo en niños y adultos",
      "Tratamiento de obstrucción de vía lagrimal congénita"
    ],
    equipmentUsed: ["Autorrefractómetro Pediátrico Plusoptix", "Test de Mirada Preferencial de Teller", "Test de Estereopsis Titmus"],
    symptoms: ["Desviación de uno o ambos ojos", "Se acerca mucho a la televisión o pantallas", "Inclina la cabeza para fijar la mirada", "Frotamiento frecuente de ojos o parpadeo excesivo"],
    iconName: "Users",
    sedes: ["Bahía Blanca", "Monte Hermoso"]
  }
];

export const OBRAS_SOCIALES: ObraSocial[] = [
  { id: "osde", name: "OSDE", planInfo: "Planes 210, 310, 410, 450 y 510", coverageLevel: "Completa", requiresOrder: false, color: "#006494" },
  { id: "swiss-medical", name: "Swiss Medical", planInfo: "Planes SMG20, SMG30, SMG50, Qualitas", coverageLevel: "Completa", requiresOrder: false, color: "#e63946" },
  { id: "ioma", name: "IOMA", planInfo: "Afiliados obligatorios y voluntarios de la Pcia. de Bs. As.", coverageLevel: "Con Coseguro", requiresOrder: true, color: "#2a9d8f" },
  { id: "pami", name: "PAMI", planInfo: "Atención a jubilados y pensionados mediante derivación / cápita", coverageLevel: "Completa", requiresOrder: true, color: "#1d3557" },
  { id: "galeno", name: "Galeno", planInfo: "Planes Plata, Oro y Azul", coverageLevel: "Completa", requiresOrder: false, color: "#457b9d" },
  { id: "medife", name: "Medifé", planInfo: "Planes Bronce, Plata y Oro", coverageLevel: "Completa", requiresOrder: false, color: "#e76f51" },
  { id: "accord", name: "Accord Salud", planInfo: "Planes 110, 210, 310", coverageLevel: "Completa", requiresOrder: false, color: "#6a4c93" },
  { id: "sancor", name: "Sancor Salud", planInfo: "Planes Serie 1000, 2000, 3000, 4000", coverageLevel: "Completa", requiresOrder: false, color: "#0077b6" },
  { id: "prevencion", name: "Prevención Salud", planInfo: "Planes A1, A2, A4, A5", coverageLevel: "Completa", requiresOrder: false, color: "#1982c4" },
  { id: "omint", name: "OMINT", planInfo: "Planes Génesis, Skill, Premium", coverageLevel: "Completa", requiresOrder: false, color: "#023e8a" },
  { id: "federada", name: "Federada Salud", planInfo: "Planes 2000, 3000, 4000", coverageLevel: "Completa", requiresOrder: false, color: "#283618" },
  { id: "ospe", name: "OSPE", planInfo: "Obra Social Petroleros y Empresas", coverageLevel: "Con Coseguro", requiresOrder: true, color: "#588157" },
];

export const WHY_CHOOSE_US_ITEMS = [
  {
    number: "01",
    title: "Atención personalizada",
    subtitle: "Cada paciente es único y recibe un plan médico a su medida",
    description: "Evaluamos minuciosamente tu salud ocular desde la primera consulta, dedicando el tiempo necesario para explicarte cada detalle y responder todas tus dudas con empatía y claridad médica.",
    bullets: [
      "Tiempo de consulta sin apuros ni esperas prolongadas",
      "Seguimiento personalizado pre y post quirúrgico",
      "Historia clínica digital integrada entre sedes"
    ]
  },
  {
    number: "02",
    title: "Diagnóstico avanzado",
    subtitle: "Resolución integral en una sola consulta",
    description: "Contamos con tecnología de diagnóstico por imágenes de última generación en la misma clínica: OCT de alta resolución, Campimetría Humphrey, Biometría Óptica y Topografía Corneal Pentacam.",
    bullets: [
      "Estudios y consulta en el mismo día",
      "Informes digitales con entrega inmediata",
      "Precisión micrométrica para toma de decisiones quirúrgicas"
    ]
  },
  {
    number: "03",
    title: "Obras sociales y prepagas",
    subtitle: "Amplia cobertura para que accedas a la mejor atención",
    description: "Mantenemos convenios activos con las principales prepagas y obras sociales de la región (OSDE, Swiss Medical, IOMA, PAMI, Galeno, Sancor Salud, entre otras), facilitando autorizaciones directas.",
    bullets: [
      "Validación de credencial en línea sin trámites engorrosos",
      "Planes de financiación para lentes premium y cirugías",
      "Asesoramiento administrativo especializado"
    ]
  },
  {
    number: "04",
    title: "Guardia Oftalmológica",
    subtitle: "Atención médica de urgencias visuales las 24 horas",
    description: "Contamos con un servicio de guardia para traumatismos oculares, cuerpos extraños, pérdida súbita de visión, quemaduras químicas o dolor agudo en Beruti 128, Bahía Blanca.",
    bullets: [
      "Médico oftalmólogo disponible para urgencias",
      "Quirófano ambulatorio equipado para emergencias",
      "Línea de contacto directo y derivación rápida"
    ]
  }
];
