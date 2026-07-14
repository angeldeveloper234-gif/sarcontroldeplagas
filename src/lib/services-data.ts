/** Servicios — contenido SEO para /servicios y /servicios/[slug]. */

import type { Faq } from './pests-data'

export type Service = {
  slug: string
  name: string
  /** Nombre del icono lucide (mapeado en los componentes). */
  icon: 'home' | 'building' | 'factory' | 'shield'
  seoTitle: string
  description: string
  h1: string
  intro: string[]
  includes: string[]
  forWho: string[]
  benefits: string[]
  faq: Faq[]
  keywords: string[]
}

export const SERVICES: Service[] = [
  {
    slug: 'residencial',
    name: 'Fumigación Residencial',
    icon: 'home',
    seoTitle: 'Fumigación Residencial en Querétaro | Casas y Departamentos',
    description:
      'Fumigación de casas y departamentos en Querétaro con productos de baja toxicidad, seguros para tu familia y mascotas. Cotización sin costo y 10% en tu primer servicio.',
    h1: 'Fumigación residencial en Querétaro',
    intro: [
      'Tu casa debe ser el lugar más seguro para tu familia. Nuestro servicio residencial elimina cucarachas, hormigas, arañas, alacranes, roedores y demás plagas urbanas con soluciones menos tóxicas, aplicadas por técnicos certificados.',
      'Trabajamos casas, departamentos, condominios y jardines en todo Santiago de Querétaro, con horarios flexibles —incluidos fines de semana— y resultados visibles desde los primeros días.',
    ],
    includes: [
      'Inspección completa de la propiedad sin costo',
      'Tratamiento interior y perimetral con productos de baja toxicidad',
      'Control de insectos rastreros, voladores y roedores',
      'Recomendaciones personalizadas de prevención',
      'Garantía de servicio y visita de seguimiento',
    ],
    forWho: ['Casas y residencias', 'Departamentos', 'Condominios y privadas', 'Jardines y patios'],
    benefits: [
      'Productos seguros para niños y mascotas',
      'Técnicos certificados COFEPRIS / NOM-256-SSA1-2012',
      'Atención el mismo día, incluso domingos',
      '10% de descuento en tu primer servicio',
    ],
    faq: [
      { q: '¿Cuánto cuesta fumigar una casa en Querétaro?', a: 'Depende del tamaño de la propiedad y el tipo de plaga. La inspección y cotización son sin costo: escríbenos por WhatsApp con el tamaño aproximado de tu casa y te damos un precio el mismo día.' },
      { q: '¿Cada cuánto debo fumigar mi casa?', a: 'Como prevención, recomendamos un tratamiento cada 3–4 meses. En temporada de calor y lluvias (alacranes, mosquitos) puede convenir un intervalo menor.' },
      { q: '¿Tengo que sacar a mis mascotas?', a: 'Solo durante la aplicación y el tiempo de ventilado (1–2 horas en la mayoría de los casos). Te damos indicaciones precisas según el tratamiento.' },
    ],
    keywords: ['fumigación residencial Querétaro', 'fumigar casa Querétaro', 'fumigación departamentos', 'control de plagas hogar'],
  },
  {
    slug: 'comercial',
    name: 'Control de Plagas Comercial',
    icon: 'building',
    seoTitle: 'Control de Plagas Comercial en Querétaro | Restaurantes y Oficinas',
    description:
      'Control de plagas para restaurantes, hoteles, oficinas y comercios en Querétaro. Servicio discreto, cumplimiento COFEPRIS y constancias para auditorías.',
    h1: 'Control de plagas para negocios en Querétaro',
    intro: [
      'En un negocio, una plaga no solo es un problema sanitario: es un riesgo directo para tu reputación y tu operación. Un solo avistamiento puede costarte clientes, reseñas negativas o una clausura.',
      'Nuestro servicio comercial está diseñado para operar sin interrumpir tu negocio: horarios discretos, productos de baja toxicidad aptos para áreas de alimentos y toda la documentación que exigen las autoridades sanitarias.',
    ],
    includes: [
      'Programa de control adaptado a tu giro y horario',
      'Tratamientos aptos para áreas de manejo de alimentos',
      'Constancia de servicio, bitácoras y hojas de seguridad',
      'Monitoreo periódico con reportes',
      'Atención de emergencias entre visitas',
    ],
    forWho: ['Restaurantes, cafeterías y bares', 'Hoteles y hospedaje', 'Oficinas y corporativos', 'Comercios y retail', 'Escuelas y consultorios'],
    benefits: [
      'Cumplimiento NOM-256-SSA1-2012 y COFEPRIS',
      'Servicio discreto: tu cliente no lo nota, tú sí',
      'Documentación lista para inspecciones sanitarias',
      'Planes mensuales con tarifa preferente',
    ],
    faq: [
      { q: '¿Entregan certificado de fumigación?', a: 'Sí. Cada servicio incluye constancia con productos aplicados, dosis y licencias, válida para auditorías de COFEPRIS, distintivos y certificaciones.' },
      { q: '¿Pueden dar servicio de noche o en domingo?', a: 'Sí. Programamos el servicio en el horario que menos afecte tu operación, incluidos horarios nocturnos y fines de semana.' },
    ],
    keywords: ['control de plagas restaurantes Querétaro', 'fumigación comercial', 'certificado fumigación COFEPRIS', 'control de plagas oficinas'],
  },
  {
    slug: 'industrial',
    name: 'Control de Plagas Industrial',
    icon: 'factory',
    seoTitle: 'Control de Plagas Industrial en Querétaro | Naves y Plantas',
    description:
      'Manejo integrado de plagas para naves industriales, almacenes y plantas de alimentos en Querétaro. Bitácoras, mapas de estaciones y soporte para auditorías.',
    h1: 'Control de plagas industrial y manejo integrado (MIP)',
    intro: [
      'La industria exige más que fumigar: exige un programa documentado de Manejo Integrado de Plagas (MIP) que soporte auditorías de clientes, certificadoras y autoridades.',
      'Implementamos programas MIP completos para naves, almacenes, centros de distribución y plantas de manufactura o alimentos en el Bajío: estaciones numeradas y mapeadas, bitácoras, análisis de tendencias y acciones correctivas.',
    ],
    includes: [
      'Diagnóstico inicial y mapa de riesgo de la planta',
      'Estaciones de control numeradas y georreferenciadas',
      'Bitácoras, hojas de seguridad y licencias del personal',
      'Reportes de tendencia y acciones correctivas',
      'Soporte en auditorías (clientes, BRC, distintivo H, COFEPRIS)',
    ],
    forWho: ['Naves industriales y almacenes', 'Plantas de alimentos y bebidas', 'Centros de distribución y logística', 'Agroindustria', 'Manufactura'],
    benefits: [
      'Programa MIP documentado de punta a punta',
      'Técnicos capacitados y certificados',
      'Continuidad operativa: servicio en paros programados',
      'Un solo proveedor para todas tus plagas',
    ],
    faq: [
      { q: '¿Su documentación pasa auditorías de inocuidad?', a: 'Sí. Entregamos el expediente completo: licencia sanitaria, programa MIP, mapas, bitácoras, hojas de seguridad, fichas técnicas y evidencia de capacitación del personal.' },
      { q: '¿Atienden plantas fuera de Querétaro capital?', a: 'Atendemos parques industriales de la zona metropolitana y el corredor del Bajío. Consúltanos por tu ubicación específica.' },
    ],
    keywords: ['control de plagas industrial Querétaro', 'manejo integrado de plagas', 'MIP', 'fumigación naves industriales', 'control de plagas planta de alimentos'],
  },
  {
    slug: 'preventivo',
    name: 'Servicio Preventivo',
    icon: 'shield',
    seoTitle: 'Servicio Preventivo de Control de Plagas en Querétaro | Planes',
    description:
      'Planes preventivos de control de plagas en Querétaro para hogar, comercio e industria. Inspecciones programadas y protección todo el año. 10% en tu primer servicio.',
    h1: 'Servicio preventivo: protección todo el año',
    intro: [
      'La forma más económica de controlar una plaga es evitar que se instale. Nuestro servicio preventivo mantiene tu hogar o negocio protegido todo el año contra los insectos y arácnidos más comunes del entorno urbano.',
      'Con visitas programadas, monitoreo constante y tratamientos de mantenimiento, detectamos cualquier actividad a tiempo — antes de que se convierta en una infestación costosa.',
    ],
    includes: [
      'Calendario de visitas según tu nivel de riesgo (mensual, bimestral o trimestral)',
      'Inspección y monitoreo en cada visita',
      'Tratamiento preventivo perimetral e interior',
      'Atención prioritaria ante cualquier brote entre visitas',
      'Historial de servicio y recomendaciones continuas',
    ],
    forWho: ['Hogares que quieren cero sorpresas', 'Restaurantes y comercios con normativa', 'Condominios y administraciones', 'Industria con programas MIP'],
    benefits: [
      'Hasta 40% más económico que tratar infestaciones ya establecidas',
      'Tarifa fija y prioridad de agenda',
      'Protección continua contra plagas de temporada',
      'Documentación al día para negocios',
    ],
    faq: [
      { q: '¿Qué frecuencia de visitas necesito?', a: 'Depende del giro y el entorno: para hogar suele bastar un servicio trimestral; restaurantes y negocios de alimentos requieren visitas mensuales por normativa.' },
      { q: '¿Qué pasa si aparece una plaga entre visitas?', a: 'Tu plan incluye atención prioritaria sin costo adicional para brotes de las plagas cubiertas. Nos avisas y vamos.' },
    ],
    keywords: ['plan preventivo plagas Querétaro', 'servicio preventivo fumigación', 'mantenimiento control de plagas', 'contrato fumigación mensual'],
  },
]

export const getService = (slug: string) => SERVICES.find((s) => s.slug === slug)
