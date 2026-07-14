/**
 * Blog SEO — artículos orientados a búsquedas locales de alta intención.
 * Objetivo: posicionar en Google (SEO) y en motores generativos (GEO) para
 * "fumigación / control de plagas + Querétaro" y long-tails informacionales.
 */

import type { Faq } from './pests-data'

export type BlogSection = { h2: string; body: string[]; list?: string[] }

export type BlogPost = {
  slug: string
  title: string
  seoTitle: string
  description: string
  category: string
  date: string // ISO
  dateModified: string
  readMinutes: number
  image: string
  excerpt: string
  sections: BlogSection[]
  faq?: Faq[]
  keywords: string[]
  /** Slugs de plagas/servicios relacionados para interlinking. */
  related: { type: 'plagas' | 'servicios'; slug: string; label: string }[]
}

export const POSTS: BlogPost[] = [
  {
    slug: 'cuanto-cuesta-fumigar-una-casa-en-queretaro',
    title: '¿Cuánto cuesta fumigar una casa en Querétaro? Guía de precios 2026',
    seoTitle: '¿Cuánto Cuesta Fumigar una Casa en Querétaro? Precios 2026',
    description:
      'Guía real de precios de fumigación en Querétaro 2026: qué incluye un servicio profesional, qué factores cambian el costo y cómo evitar cobros ocultos.',
    category: 'Guías',
    date: '2026-07-01',
    dateModified: '2026-07-10',
    readMinutes: 6,
    image: '/images/blog-guide.png',
    excerpt: 'Los factores que realmente determinan el precio de una fumigación profesional y los rangos que puedes esperar en Querétaro este año.',
    sections: [
      {
        h2: 'Qué determina el precio de una fumigación',
        body: [
          'No existe una tarifa única: el costo de fumigar una casa en Querétaro depende de cuatro factores principales que cualquier empresa seria debe evaluar antes de darte un precio.',
        ],
        list: [
          'Tamaño de la propiedad — no cuesta lo mismo un departamento de 60 m² que una casa con jardín de 300 m²',
          'Tipo de plaga — una aspersión general preventiva es más económica que un protocolo de chinches de cama o un control de roedores',
          'Nivel de infestación — un problema detectado a tiempo requiere menos aplicaciones',
          'Frecuencia — los planes preventivos periódicos reducen el costo por visita hasta un 40%',
        ],
      },
      {
        h2: 'Rangos de referencia en Querétaro (2026)',
        body: [
          'Como referencia general del mercado local: una fumigación preventiva de casa habitación suele ubicarse entre $600 y $1,500 MXN según el tamaño; tratamientos especializados (chinches, roedores, alacranes) van de $1,200 a $3,500 MXN; y los planes preventivos anuales prorratean visitas desde $450 MXN mensuales.',
          'Desconfía de precios extremadamente bajos: suelen implicar productos de dudosa procedencia, personal sin certificar o aplicaciones "exprés" que no atacan el origen del problema.',
        ],
      },
      {
        h2: 'Qué debe incluir un servicio profesional',
        body: ['Antes de contratar, verifica que el precio incluya lo mínimo indispensable de un servicio conforme a la NOM-256-SSA1-2012:'],
        list: [
          'Inspección previa y diagnóstico de la plaga',
          'Productos con registro COFEPRIS y fichas técnicas disponibles',
          'Técnicos capacitados y constancia de servicio',
          'Garantía por escrito y visita de seguimiento',
        ],
      },
      {
        h2: 'Cotiza sin costo (y sin sorpresas)',
        body: [
          'En SAR Control de Plagas la inspección y la cotización no tienen costo: nos escribes por WhatsApp, nos cuentas el problema y el tamaño de tu propiedad, y te damos un precio cerrado el mismo día. Además, tu primer servicio tiene 10% de descuento.',
        ],
      },
    ],
    faq: [
      { q: '¿La cotización tiene algún costo?', a: 'No. En SAR la inspección y cotización son totalmente gratuitas y sin compromiso, en todo Santiago de Querétaro.' },
      { q: '¿El precio incluye garantía?', a: 'Sí. Todos nuestros tratamientos incluyen garantía por escrito y visita de seguimiento según el tipo de plaga.' },
    ],
    keywords: ['cuánto cuesta fumigar una casa', 'precio fumigación Querétaro', 'costo control de plagas', 'fumigación barata Querétaro'],
    related: [
      { type: 'servicios', slug: 'residencial', label: 'Fumigación residencial' },
      { type: 'servicios', slug: 'preventivo', label: 'Planes preventivos' },
    ],
  },
  {
    slug: 'alacranes-en-queretaro-temporada-y-prevencion',
    title: 'Alacranes en Querétaro: temporada, riesgos y cómo proteger tu casa',
    seoTitle: 'Alacranes en Querétaro: Temporada 2026 y Cómo Proteger tu Casa',
    description:
      'Querétaro es zona de alacranes. Conoce la temporada de mayor actividad, qué hacer ante una picadura y cómo blindar tu casa con control profesional.',
    category: 'Prevención',
    date: '2026-05-18',
    dateModified: '2026-05-18',
    readMinutes: 5,
    image: '/hero/2.jpg',
    excerpt: 'De marzo a septiembre los avistamientos de alacranes se disparan en Querétaro. Esto es lo que toda familia debe saber.',
    sections: [
      {
        h2: 'Por qué Querétaro es zona de alacranes',
        body: [
          'El clima semiseco del estado es el hábitat ideal del alacrán (Centruroides spp.). Con el calor de marzo a septiembre salen de sus refugios en busca de alimento y pareja — y muchas veces ese recorrido termina dentro de las casas: entre ropa, calzado, camas y rincones oscuros.',
        ],
      },
      {
        h2: 'Qué hacer ante una picadura',
        body: ['La picadura de alacrán es una urgencia médica, especialmente en niños y adultos mayores. Los pasos correctos:'],
        list: [
          'Mantén la calma y retira anillos o accesorios de la zona afectada',
          'NO cortes, succiones ni apliques remedios caseros',
          'Acude de inmediato al centro de salud más cercano — en Querétaro cuentan con antiveneno',
          'Si es posible, fotografía al alacrán para su identificación',
        ],
      },
      {
        h2: 'Cómo blindar tu casa',
        body: ['La prevención combina hábitos y control profesional:'],
        list: [
          'Sella grietas en muros, zoclos y marcos de puertas',
          'Sacude ropa, toallas y calzado antes de usarlos',
          'Evita acumular escombro, leña o cartón pegado a la casa',
          'Contrata una aspersión perimetral profesional antes y durante la temporada (marzo–septiembre)',
        ],
      },
      {
        h2: 'Tratamiento profesional en Querétaro',
        body: [
          'En SAR aplicamos aspersión perimetral e interior dirigida a los refugios del alacrán, y reducimos los insectos-presa que lo atraen. Un tratamiento a inicio de temporada protege tu casa los meses críticos.',
        ],
      },
    ],
    faq: [
      { q: '¿Cada cuánto fumigar contra alacranes?', a: 'Recomendamos un tratamiento al inicio de la temporada de calor (marzo) y un refuerzo a mitad de temporada. En zonas de alta incidencia, cada 2–3 meses.' },
    ],
    keywords: ['alacranes en Querétaro', 'temporada de alacranes', 'picadura de alacrán qué hacer', 'fumigación alacranes Querétaro'],
    related: [
      { type: 'plagas', slug: 'aranas-y-alacranes', label: 'Control de alacranes y arañas' },
      { type: 'servicios', slug: 'residencial', label: 'Fumigación residencial' },
    ],
  },
  {
    slug: 'senales-de-roedores-en-casa-o-negocio',
    title: '7 señales de que tienes roedores en casa o en tu negocio',
    seoTitle: '7 Señales de Roedores en Casa o Negocio | Detéctalos a Tiempo',
    description:
      'Ruidos nocturnos, heces, roeduras… aprende a detectar ratas y ratones a tiempo, antes de que dañen tu instalación o contaminen alimentos.',
    category: 'Detección',
    date: '2026-04-22',
    dateModified: '2026-04-22',
    readMinutes: 4,
    image: '/images/blog-heating.png',
    excerpt: 'Los roedores son expertos en esconderse. Estas 7 evidencias delatan su presencia mucho antes de que veas uno.',
    sections: [
      {
        h2: 'Las 7 señales inequívocas',
        body: ['Un roedor evita mostrarse, pero deja rastros. Si detectas dos o más de estas señales, ya hay actividad establecida:'],
        list: [
          '1. Heces: pequeñas, oscuras y ahusadas, concentradas cerca de alimento',
          '2. Ruidos nocturnos en techos falsos, muros o entrepisos',
          '3. Roeduras en empaques, cables, madera o plástico',
          '4. Sendas de grasa: marcas oscuras a lo largo de zoclos y tuberías',
          '5. Olor a orina persistente en áreas cerradas',
          '6. Madrigueras o huecos nuevos en jardines y bodegas',
          '7. Tu mascota vigila fija un punto del muro o techo',
        ],
      },
      {
        h2: 'Por qué actuar rápido',
        body: [
          'Una pareja de ratones puede generar más de 200 crías en un año. Además del riesgo sanitario (leptospirosis, salmonelosis, hantavirus), los roedores roen cableado eléctrico — una causa frecuente de cortos e incendios — y en negocios de alimentos implican incumplimiento normativo inmediato.',
        ],
      },
      {
        h2: 'El control profesional correcto',
        body: [
          'El control moderno de roedores no es "poner veneno": es un programa de manejo integrado con estaciones de cebado seguras, trampeo, sellado de accesos (exclusión) y monitoreo documentado. Así se elimina la población actual y se evita la reinfestación.',
        ],
      },
    ],
    keywords: ['señales de ratas en casa', 'cómo saber si tengo ratones', 'control de roedores Querétaro', 'ruidos en el techo de noche'],
    related: [
      { type: 'plagas', slug: 'roedores', label: 'Control de roedores' },
      { type: 'servicios', slug: 'comercial', label: 'Control de plagas comercial' },
    ],
  },
  {
    slug: 'chinches-de-cama-como-detectarlas-y-eliminarlas',
    title: 'Chinches de cama: cómo detectarlas y por qué los remedios caseros fallan',
    seoTitle: 'Chinches de Cama: Cómo Detectarlas y Eliminarlas | Guía SAR',
    description:
      'Aprende a detectar chinches de cama (ronchas, manchas, puntos negros), por qué los remedios caseros no funcionan y cómo es el tratamiento profesional.',
    category: 'Detección',
    date: '2026-03-30',
    dateModified: '2026-03-30',
    readMinutes: 5,
    image: '/images/blog-organic.png',
    excerpt: 'Llegan en maletas y muebles, no dependen de la limpieza y resisten los aerosoles comunes. Guía completa contra la chinche de cama.',
    sections: [
      {
        h2: 'Cómo detectarlas a tiempo',
        body: ['La chinche de cama (Cimex lectularius) mide 4–7 mm y actúa de noche. Búscala con lámpara en costuras de colchón, cabeceras y zoclos. Señales clave:'],
        list: [
          'Ronchas alineadas o agrupadas en piel expuesta al dormir',
          'Manchas de sangre pequeñas en sábanas',
          'Puntos negros (excremento) en costuras y esquinas del colchón',
          'Mudas de piel translúcidas y olor dulzón en infestaciones grandes',
        ],
      },
      {
        h2: 'Por qué los remedios caseros fallan',
        body: [
          'Los aerosoles domésticos matan por contacto directo, pero las chinches se ocultan en grietas milimétricas donde el producto no llega, y sus huevecillos son resistentes a la mayoría de insecticidas de mostrador. El resultado: la población "desaparece" unos días y regresa multiplicada.',
          'Peor aún: los tratamientos mal aplicados dispersan la infestación a otras habitaciones.',
        ],
      },
      {
        h2: 'El protocolo profesional',
        body: ['Un tratamiento serio contra chinches sigue un protocolo en dos fases:'],
        list: [
          'Inspección exhaustiva de la habitación y adyacentes',
          'Aplicación dirigida en todos los refugios (colchón, base, cabecera, zoclos, enchufes)',
          'Manejo de textiles: lavado a alta temperatura y aislamiento',
          'Segunda aplicación a los 10–14 días para eliminar huevecillos eclosionados',
        ],
      },
    ],
    faq: [
      { q: '¿Las chinches transmiten enfermedades?', a: 'No se ha comprobado transmisión de enfermedades, pero sus picaduras causan reacciones alérgicas, insomnio y afectación emocional significativa.' },
    ],
    keywords: ['chinches de cama cómo detectarlas', 'eliminar chinches de cama', 'ronchas al dormir', 'tratamiento chinches Querétaro'],
    related: [
      { type: 'plagas', slug: 'chinches-de-cama', label: 'Eliminación de chinches de cama' },
    ],
  },
  {
    slug: 'control-de-plagas-para-restaurantes-cofepris',
    title: 'Control de plagas para restaurantes: lo que COFEPRIS te va a pedir',
    seoTitle: 'Control de Plagas para Restaurantes | Requisitos COFEPRIS 2026',
    description:
      'Bitácoras, constancias, licencia sanitaria del proveedor: la documentación de control de plagas que COFEPRIS exige a restaurantes y cómo cumplirla.',
    category: 'Negocios',
    date: '2026-02-25',
    dateModified: '2026-06-05',
    readMinutes: 6,
    image: '/images/blog-mist.png',
    excerpt: 'Si manejas alimentos, el control de plagas no es opcional: es un requisito normativo. Esta es la documentación que te van a pedir.',
    sections: [
      {
        h2: 'El marco normativo',
        body: [
          'Todo establecimiento que prepara o vende alimentos en México debe acreditar un programa de control de plagas conforme a la NOM-251-SSA1-2009 (prácticas de higiene) y contratarlo con empresas que operen bajo la NOM-256-SSA1-2012, que regula los servicios urbanos de control de plagas.',
        ],
      },
      {
        h2: 'La documentación que te pedirán en una visita',
        body: ['En una verificación sanitaria, el inspector revisará como mínimo:'],
        list: [
          'Licencia sanitaria vigente de la empresa de control de plagas',
          'Constancias de cada servicio con productos, dosis y registro COFEPRIS',
          'Bitácora de control con fechas, hallazgos y acciones',
          'Fichas técnicas y hojas de seguridad de los productos aplicados',
          'Croquis o mapa de estaciones (roedores) cuando aplique',
        ],
      },
      {
        h2: 'Frecuencia recomendada',
        body: [
          'Para cocinas y áreas de manejo de alimentos, el estándar del sector es servicio mensual con monitoreo continuo de estaciones. Giros de menor riesgo pueden operar con visitas bimestrales. Lo importante: que el programa sea continuo y esté documentado — un "certificado" aislado de hace 8 meses no pasa una verificación.',
        ],
      },
      {
        h2: 'Cómo lo resolvemos en SAR',
        body: [
          'Nuestro plan comercial entrega el expediente completo listo para auditoría, con servicio en horarios que no afectan tu operación (nocturnos y fines de semana incluidos). Un solo proveedor, todas las plagas, cero pendientes con COFEPRIS.',
        ],
      },
    ],
    keywords: ['control de plagas restaurantes', 'COFEPRIS fumigación requisitos', 'bitácora control de plagas', 'certificado fumigación restaurante'],
    related: [
      { type: 'servicios', slug: 'comercial', label: 'Control de plagas comercial' },
      { type: 'servicios', slug: 'industrial', label: 'Programas MIP industriales' },
    ],
  },
  {
    slug: 'como-eliminar-cucarachas-definitivamente',
    title: 'Cómo eliminar cucarachas definitivamente (y por qué siguen volviendo)',
    seoTitle: 'Cómo Eliminar Cucarachas Definitivamente | Guía Profesional',
    description:
      'Por qué las cucarachas sobreviven a los insecticidas caseros y cuál es el método profesional que las elimina de raíz: gel-cebo, control de focos y sellado.',
    category: 'Guías',
    date: '2026-06-12',
    dateModified: '2026-06-12',
    readMinutes: 5,
    image: '/hero/3.jpg',
    excerpt: 'Matas diez y aparecen veinte. La explicación está en el nido — y en el método equivocado. Así se eliminan de verdad.',
    sections: [
      {
        h2: 'Por qué "siguen volviendo"',
        body: [
          'Por cada cucaracha que ves, puede haber decenas escondidas. La cucaracha alemana —la más común en cocinas— se refugia en grietas, bisagras, motores de electrodomésticos y drenajes, donde los aerosoles no penetran. Además, una sola ooteca (cápsula de huevos) contiene hasta 40 crías.',
          'Los insecticidas de mostrador matan a las que caminan por la superficie, pero no tocan el nido ni los huevos. Días después, la población se recupera — y con mayor resistencia al producto.',
        ],
      },
      {
        h2: 'El método profesional',
        body: ['El control profesional ataca a la colonia completa:'],
        list: [
          'Inspección para ubicar nidos y nivel de infestación',
          'Gel-cebo de transferencia: las cucarachas lo consumen, regresan al nido y contaminan al resto',
          'Aspersión residual de baja toxicidad en focos y rutas',
          'Sellado de grietas y corrección de fugas de agua (su fuente de vida)',
          'Seguimiento a las 2–3 semanas para verificar el control',
        ],
      },
      {
        h2: 'Hábitos que hacen la diferencia',
        body: ['El tratamiento profesional se potencia con hábitos simples: no dejar trastes sucios de un día para otro, guardar alimento en recipientes cerrados, sacar la basura por la noche y reparar fugas. Sin agua ni comida, la cocina deja de ser un hotel de cucarachas.'],
      },
    ],
    keywords: ['cómo eliminar cucarachas', 'eliminar cucarachas definitivamente', 'gel para cucarachas', 'fumigación cucarachas Querétaro'],
    related: [
      { type: 'plagas', slug: 'cucarachas', label: 'Fumigación de cucarachas' },
      { type: 'servicios', slug: 'preventivo', label: 'Planes preventivos' },
    ],
  },
]

export const getPost = (slug: string) => POSTS.find((p) => p.slug === slug)
