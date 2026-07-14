# SAR Control de Plagas — Sitio web (rediseño 2026)

Rediseño del sitio [sarcontroldeplagas.com.mx](https://sarcontroldeplagas.com.mx/).
Landing profesional orientada a conversión para control de plagas en Santiago de Querétaro.

> ⚠️ **Nota de carpeta:** el proyecto vive en la carpeta `Moshield/` por el flujo de trabajo
> original, pero **el sitio es de SAR Control de Plagas**. Conviene renombrar la carpeta a `sar`.

## Stack

- **Next.js 16** (App Router) · **React 19** · **TypeScript**
- **Tailwind CSS v4** + shadcn (base-nova)
- **framer-motion** (animaciones on-scroll)
- **lucide-react** (iconos)

## Desarrollo

```bash
npm run dev     # servidor local (http://localhost:3000)
npm run build   # build de producción
npm run start   # servir build
```

## Estructura (multi-página SEO)

```
src/
  app/
    page.tsx               # home
    servicios/             # hub + /servicios/[slug] (4 servicios)
    plagas/                # hub + /plagas/[slug] (8 plagas)
    blog/                  # índice + /blog/[slug] (6 artículos)
    nosotros/  contacto/   # páginas estáticas
    sitemap.ts  robots.ts  # 24 URLs indexables
  components/
    layout/                # Header, Footer, SarLogo, WhatsAppFab, PageHero, QuoteCard
    sections/              # Hero, Services, PestGrid, Process, About, GoogleReviews,
                           #   Faq, BlogTeaser, CtaBanner, Contact, Certifications
    ui/                    # google.tsx (logo G + estrellas), FaqList
  lib/
    site.ts                # contacto / redes / maps / rating centralizados
    pests-data.ts          # contenido SEO de las 8 plagas
    services-data.ts       # contenido SEO de los 4 servicios
    blog-data.ts           # 6 artículos del blog
    structured-data.ts     # schema.org (LocalBusiness, Service, BlogPosting,
                           #   FAQPage, BreadcrumbList, AggregateRating)
public/llms.txt            # GEO: resumen del negocio para motores generativos
```

### SEO implementado

- Title/description/canonical/keywords únicos por página (orientados a búsqueda local Querétaro)
- JSON-LD por tipo de página + breadcrumbs visibles y estructurados
- Interlinking: home → servicios/plagas/blog → páginas hermanas → contacto
- Sitemap dinámico (24 URLs), robots.txt, Open Graph (type article en blog)
- `llms.txt` para motores generativos (ChatGPT, Perplexity, AI Overviews)

## Datos de contacto (en `src/lib/site.ts`)

| Campo     | Valor                                            |
|-----------|--------------------------------------------------|
| Teléfono  | 442 322 5529                                     |
| WhatsApp  | 442 322 5529                                     |
| Email     | ventas@sarcontroldeplagas.com.mx                 |
| Dirección | Terrazas del Mirador 304, Santiago de Querétaro  |

El formulario de contacto **no requiere backend**: arma un mensaje prellenado y abre WhatsApp.

## Contenido real ya integrado

- [x] **Logo oficial**: `public/SAR-CONTROL-DE-PLAGAS-logo.webp` (header y footer).
- [x] **Favicon**: `public/SAR-FAVICON.png` → `src/app/icon.png` + `apple-icon.png`.
- [x] **Redes sociales**: Facebook y TikTok reales (`site.ts`).
- [x] **Reseñas de Google**: sección `GoogleReviews` con 6 reseñas reales (4.7★, 42 reseñas)
      y enlaces a Google Maps.
- [x] **Ubicación**: enlace + mapa embebido de Google Maps en Contacto.

## Pendientes antes del deploy

- [ ] **Imágenes**: `public/hero/*.jpg` y `public/images/about-image1.jpg` son fotos genéricas
      heredadas del stack base — sustituir por fotos propias de SAR.
- [ ] **OG image**: `public/og-default.jpg` es del stack base — generar una con el logo SAR.
- [ ] **Horario**: confirmar el horario real (actualmente "Lun a Sáb · 8:00 a 19:00").
- [ ] **Rating**: el 4.7★/42 reseñas está fijo en `site.ts → rating`; actualizarlo si cambia
      (o integrar el widget de Elfsight del sitio anterior si prefieren datos en vivo).

---
*Rediseño · Angel Design Studio*
