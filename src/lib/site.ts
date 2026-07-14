/**
 * Configuración central del sitio SAR Control de Plagas (SEO / branding / contacto).
 * Rediseño 2026 — Angel Design Studio.
 */

export const SITE = {
  name: 'SAR Control de Plagas',
  legalName: 'SAR Control de Plagas',
  url: (process.env.SITE_URL || 'https://sarcontroldeplagas.com.mx').replace(/\/$/, ''),
  locale: 'es_MX',
  lang: 'es',
  description:
    'Control de plagas profesional en Querétaro. Soluciones menos tóxicas contra cucarachas, roedores, chinches, mosquitos y fauna. Inspeccionamos, corregimos y protegemos tu hogar, comercio e industria. Cotización sin costo.',
  slogan: 'Inspeccionamos · Corregimos · Protegemos',
  tagline: 'Soluciones menos tóxicas para el control de plagas',
  logo: '/og-default.jpg',
  ogImage: '/og-default.jpg',
  phone: '442 322 5529',
  phoneHref: 'tel:+524423225529',
  whatsapp: '442 322 5529',
  whatsappHref: 'https://wa.me/524423225529?text=Hola%20SAR%2C%20quiero%20cotizar%20un%20servicio%20de%20control%20de%20plagas.',
  email: 'ventas@sarcontroldeplagas.com.mx',
  address: 'Terrazas del Mirador 304, Santiago de Querétaro, Qro.',
  areaServed: 'Santiago de Querétaro',
  hours: 'Lun a Sáb · 8:00 a 19:00',
  socials: [
    'https://www.facebook.com/sarcontroldeplagas',
    'https://www.tiktok.com/@sarcontroldeplagas',
  ] as string[],
  facebook: 'https://www.facebook.com/sarcontroldeplagas',
  tiktok: 'https://www.tiktok.com/@sarcontroldeplagas',
  mapsUrl:
    'https://www.google.com/maps/place/SAR+Control+de+Plagas+%7C+Fumigaci%C3%B3n+Quer%C3%A9taro/@20.660551,-100.4093391,17z/data=!3m1!4b1!4m6!3m5!1s0x85d350614c3183c5:0xb91e8a7d65579e0a!8m2!3d20.660551!4d-100.4067642!16s%2Fg%2F11bx1qtkc0',
  mapsEmbed:
    'https://www.google.com/maps?q=SAR+Control+de+Plagas+Fumigaci%C3%B3n+Quer%C3%A9taro&output=embed',
  rating: { value: 4.7, count: 42 },
  certifications: ['COFEPRIS', 'SSA', 'NOM-256-SSA1-2012'],
  keywords: [
    'control de plagas Querétaro',
    'fumigación Querétaro',
    'control de plagas',
    'fumigación',
    'control de cucarachas',
    'control de roedores',
    'control de chinches',
    'fumigación de mosquitos',
    'manejo integrado de plagas',
    'control de plagas residencial',
    'control de plagas industrial',
    'control de plagas comercial',
    'SAR control de plagas',
  ],
} as const

export const absoluteUrl = (path = '') =>
  `${SITE.url}${path.startsWith('/') ? path : `/${path}`}`
