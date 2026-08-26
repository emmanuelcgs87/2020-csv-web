import { BlogPost } from '../types';

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'primera-consulta-oftalmologica',
    title: 'Qué esperar durante tu primera consulta oftalmológica completa',
    category: 'Salud Visual',
    date: '14 de Mayo, 2026',
    readTime: '4 min de lectura',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    excerpt: '¿Estás por realizar tu control visual? Te contamos paso a paso qué estudios realizamos en una sola visita: biomicroscopía, refracción, toma de presión intraocular y fondo de ojo.',
    author: {
      name: 'Dr. Emmanuel Rodríguez',
      role: 'Director Médico · Oftalmólogo',
      avatar: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=300&q=80',
    },
    content: {
      intro: 'Un control oftalmológico completo es mucho más que revisar si necesitás lentes nuevos. Es una evaluación médica integral que permite detectar a tiempo patologías silenciosas como el glaucoma, afecciones de la retina o alteraciones corneales antes de que provoquen pérdida visual irreversible.',
      sections: [
        {
          heading: '1. Agudeza visual y refracción computarizada',
          body: 'Medimos con exactitud la capacidad de enfoque de cada ojo mediante autorrefractómetros de última generación, evaluando miopía, hipermetropía, astigmatismo y presbicia.',
        },
        {
          heading: '2. Examen con lámpara de hendidura (Biomicroscopía)',
          body: 'Analizamos con aumentos microscópicos la córnea, la película lagrimal, el iris y el cristalino para descartar inflamaciones, cataratas o alteraciones en las glándulas de Meibomio.',
        },
        {
          heading: '3. Tonometría: Control de la Presión Intraocular',
          body: 'Fundamental a partir de los 40 años para la detección precoz del glaucoma, una patología que no suele dar síntomas en etapas tempranas.',
        },
        {
          heading: '4. Fondo de Ojo con dilatación pupilar',
          body: 'Permite examinar la retina, la mácula y el nervio óptico, siendo clave en personas con diabetes, hipertensión o antecedentes familiares de afecciones retinianas.',
        },
      ],
      takeaways: [
        'Realizá un control oftalmológico al menos una vez al año.',
        'Si te dilatan las pupilas, es conveniente venir acompañado y con gafas de sol.',
        'En 2020 Centro de Salud Visual completamos todos los estudios en la misma consulta.',
      ],
    },
  },
  {
    id: '5-habitos-fatiga-visual-ojo-seco',
    title: '5 hábitos simples para una visión descansada y libre de ojo seco',
    category: 'Prevención & Ojo Seco',
    date: '2 de Mayo, 2026',
    readTime: '5 min de lectura',
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=80',
    excerpt: 'El uso continuo de computadoras y celulares reduce el parpadeo en un 60%. Conocé las pautas médicas para proteger tu película lagrimal y evitar el ardor ocular a diario.',
    author: {
      name: 'Dra. María Elena Ramos',
      role: 'Especialista en Ojo Seco & Superficie Ocular',
      avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=300&q=80',
    },
    content: {
      intro: 'Pasar muchas horas frente a pantallas de computadoras, tablets y smartphones altera drásticamente la frecuencia y calidad de nuestro parpadeo. Al parpadear menos, las lágrimas se evaporan rápidamente y las glándulas de Meibomio se obstruyen, provocando sensación de arenilla, enrojecimiento y visión borrosa fluctuante.',
      sections: [
        {
          heading: '1. Aplicá la regla 20-20-20',
          body: 'Cada 20 minutos de trabajo continuo frente a una pantalla, desviá la mirada hacia un punto distante (unos 6 metros o 20 pies) durante 20 segundos. Esto relaja el músculo ciliar del ojo.',
        },
        {
          heading: '2. Parpadeo consciente y completo',
          body: 'Hacé pausas intencionales para cerrar suavemente los párpados de forma completa. El parpadeo incompleto es la causa número uno de evaporación lagrimal en usuarios de tecnología.',
        },
        {
          heading: '3. Ajustá la ergonomía y la iluminación ambiental',
          body: 'Ubicá el monitor a una distancia de 50-70 cm y ligeramente por debajo de la línea de los ojos. Evitá reflejos directos y aires acondicionados apuntando hacia la cara.',
        },
        {
          heading: '4. Lubricación con lágrimas artificiales sin conservantes',
          body: 'Consultá siempre con un oftalmólogo para elegir el tipo de gota lubricante adecuado para tu tipo de película lagrimal (acuosa o lipídica).',
        },
        {
          heading: '5. Diagnóstico avanzado con Meibografía y Luz Pulsada (IPL)',
          body: 'Si el ardor persiste, en 2020 contamos con el sistema de diagnóstico HD y terapia Thermaeye para desbloquear las glándulas de forma indolora y duradera.',
        },
      ],
      takeaways: [
        'Parpadeá con mayor frecuencia cuando estés concentrado en el celular o monitor.',
        'Evitá frotarte los ojos cuando sientas picazón o ardor.',
        'Un test de Ojo Seco en consulta define si tu molestia requiere tratamiento térmico o luz pulsada.',
      ],
    },
  },
  {
    id: 'cirugia-de-cataratas-procedimiento-moderno',
    title: 'Cirugía de cataratas moderna: cómo es el procedimiento sin internación',
    category: 'Cirugías',
    date: '20 de Abril, 2026',
    readTime: '6 min de lectura',
    image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1200&q=80',
    excerpt: 'La facoemulsificación con implante de lente intraocular premium permite recuperar una visión nítida en solo 15 a 20 minutos, con anestesia en gotas y regreso inmediato a casa.',
    author: {
      name: 'Dr. Emmanuel Rodríguez',
      role: 'Cirujano Oftalmólogo de Polo Anterior',
      avatar: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=300&q=80',
    },
    content: {
      intro: 'La catarata es la opacificación progresiva del cristalino natural del ojo, común con el paso de los años. Hoy en día, gracias a las microincisiones y las lentes intraoculares multifocales y tóricas, es uno de los procedimientos quirúrgicos más seguros, predecibles y reconfortantes de la medicina moderna.',
      sections: [
        {
          heading: '¿Cómo se realiza la intervención?',
          body: 'A través de una microincisión milimétrica que no requiere puntos de sutura, se aplica ultrasonido suave para disolver el cristalino opaco y se coloca una lente intraocular transparente y personalizada que dura de por vida.',
        },
        {
          heading: '¿Cuánto dura y cómo es la anestesia?',
          body: 'El procedimiento toma entre 15 y 20 minutos por ojo. Se utiliza anestesia tópica (en gotas) con una leve sedación para total confort del paciente.',
        },
        {
          heading: 'Lentes Intraoculares Monofocales vs Multifocales / EDOF',
          body: 'Según las necesidades de cada paciente, es posible corregir simultáneamente la presbicia o el astigmatismo, reduciendo o eliminando la dependencia de anteojos para leer o manejar.',
        },
      ],
      takeaways: [
        'Procedimiento 100% ambulatorio sin requerir internación.',
        'La visión comienza a recuperarse dentro de las primeras 24 a 48 horas.',
        'Evaluamos cada caso con biometría óptica de alta precisión.',
      ],
    },
  },
  {
    id: 'protesis-oculares-personalizadas-guia',
    title: 'Prótesis oculares personalizadas: estética y calidad de vida',
    category: 'Innovación & Ocularística',
    date: '5 de Abril, 2026',
    readTime: '4 min de lectura',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80',
    excerpt: 'Conocé cómo se realiza el modelado anatómico y la pintura artística artesanal del iris para lograr una adaptación perfecta, simétrica y con movimiento natural.',
    author: {
      name: 'Equipo de Ocularística',
      role: '2020 Centro de Salud Visual',
      avatar: 'https://images.unsplash.com/photo-1594824813689-53a59593282b?auto=format&fit=crop&w=300&q=80',
    },
    content: {
      intro: 'La confección de una prótesis ocular o cascarilla escleral a medida combina precisión médica y técnica artística para devolver la simetría facial, la protección de la cavidad orbitaria y la confianza personal de cada paciente.',
      sections: [
        {
          heading: 'Toma de impresión anatómica de la cavidad',
          body: 'Se obtiene un molde exacto de la cavidad para asegurar que la prótesis apoye uniformemente, evitando molestias o secreciones.',
        },
        {
          heading: 'Pintura del iris y reproducción vascular mano a mano',
          body: 'Con el paciente presente, el ocularista reproduce los colores exactos, matices, destellos del iris y vasos sanguíneos de la esclerótica del ojo sano.',
        },
        {
          heading: 'Materiales biocompatibles de grado médico',
          body: 'Utilizamos polímeros de altísima pureza con pulido espejo para evitar adherencias y garantizar una tolerancia prolongada.',
        },
      ],
      takeaways: [
        'Atención personalizada y exclusiva en Bahía Blanca para toda la región.',
        'Mantenimiento periódico y controles de pulido cada 6 a 12 meses.',
        'Asesoramiento integral y seguimiento continuo.',
      ],
    },
  },
];
