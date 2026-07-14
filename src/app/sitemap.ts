import { MetadataRoute } from 'next'
import { SITE } from '@/lib/site'
import { PESTS } from '@/lib/pests-data'
import { SERVICES } from '@/lib/services-data'
import { POSTS } from '@/lib/blog-data'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: SITE.url, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${SITE.url}/servicios`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE.url}/plagas`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE.url}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${SITE.url}/nosotros`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE.url}/contacto`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
  ]

  const serviceRoutes: MetadataRoute.Sitemap = SERVICES.map((s) => ({
    url: `${SITE.url}/servicios/${s.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.85,
  }))

  const pestRoutes: MetadataRoute.Sitemap = PESTS.map((p) => ({
    url: `${SITE.url}/plagas/${p.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.85,
  }))

  const blogRoutes: MetadataRoute.Sitemap = POSTS.map((p) => ({
    url: `${SITE.url}/blog/${p.slug}`,
    lastModified: new Date(`${p.dateModified}T12:00:00`),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [...staticRoutes, ...serviceRoutes, ...pestRoutes, ...blogRoutes]
}
