import { SITE, absoluteUrl } from './site'

/** Negocio local de control de plagas — para la home. */
export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'PestControlService',
    '@id': `${SITE.url}/#business`,
    name: SITE.name,
    legalName: SITE.legalName,
    url: SITE.url,
    image: absoluteUrl(SITE.logo),
    logo: absoluteUrl(SITE.logo),
    description: SITE.description,
    telephone: SITE.phone,
    email: SITE.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Terrazas del Mirador 304',
      addressLocality: 'Santiago de Querétaro',
      addressRegion: 'Querétaro',
      addressCountry: 'MX',
    },
    areaServed: { '@type': 'City', name: SITE.areaServed },
    openingHours: 'Mo-Sa 08:00-19:00',
    priceRange: '$$',
    hasMap: SITE.mapsUrl,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: SITE.rating.value,
      reviewCount: SITE.rating.count,
      bestRating: 5,
    },
    ...(SITE.socials.length ? { sameAs: SITE.socials } : {}),
  }
}

/** Sitio web. */
export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE.url}/#website`,
    url: SITE.url,
    name: SITE.name,
    description: SITE.description,
    inLanguage: SITE.lang,
    publisher: { '@id': `${SITE.url}/#business` },
  }
}

/** FAQ estructurada. items: [{q, a}] */
export function faqSchema(items: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  }
}

/** Miga de pan. items: [{name, path}] */
export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  }
}

/** Servicio ofrecido (páginas de servicio y de plaga). */
export function serviceSchema(opts: { name: string; description: string; path: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${absoluteUrl(opts.path)}#service`,
    name: opts.name,
    description: opts.description,
    url: absoluteUrl(opts.path),
    serviceType: 'Control de plagas',
    areaServed: { '@type': 'City', name: SITE.areaServed },
    provider: { '@id': `${SITE.url}/#business` },
  }
}

/** Artículo de blog. */
export function articleSchema(post: {
  slug: string
  title: string
  description: string
  image: string
  category: string
  date: string
  dateModified: string
}) {
  const url = absoluteUrl(`/blog/${post.slug}`)
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${url}#article`,
    headline: post.title,
    description: post.description,
    image: absoluteUrl(post.image),
    articleSection: post.category,
    datePublished: post.date,
    dateModified: post.dateModified,
    inLanguage: SITE.lang,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    author: { '@type': 'Organization', name: SITE.name, url: SITE.url },
    publisher: {
      '@type': 'Organization',
      name: SITE.name,
      logo: { '@type': 'ImageObject', url: absoluteUrl(SITE.logo) },
    },
  }
}
