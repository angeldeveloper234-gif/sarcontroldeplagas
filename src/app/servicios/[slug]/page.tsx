import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Check, ArrowRight } from 'lucide-react'
import { PageHero } from '@/components/layout/PageHero'
import { QuoteCard } from '@/components/layout/QuoteCard'
import { FaqList } from '@/components/ui/FaqList'
import { JsonLd } from '@/components/seo/JsonLd'
import { serviceSchema } from '@/lib/structured-data'
import { SERVICES, getService } from '@/lib/services-data'

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const s = getService(slug)
  if (!s) return {}
  return {
    title: s.seoTitle,
    description: s.description,
    keywords: s.keywords,
    alternates: { canonical: `/servicios/${s.slug}` },
    openGraph: { title: s.seoTitle, description: s.description },
  }
}

export default async function ServicioPage({ params }: Props) {
  const { slug } = await params
  const s = getService(slug)
  if (!s) notFound()

  return (
    <>
      <JsonLd data={serviceSchema({ name: s.name, description: s.description, path: `/servicios/${s.slug}` })} />
      <PageHero
        eyebrow={s.name}
        title={s.h1}
        subtitle={s.intro[0]}
        crumbs={[{ name: 'Servicios', path: '/servicios' }, { name: s.name, path: `/servicios/${s.slug}` }]}
      />

      <section className="section-padding bg-white">
        <div className="container grid lg:grid-cols-[minmax(0,1fr)_22rem] gap-12">
          {/* Contenido */}
          <article>
            {s.intro.slice(1).map((p) => (
              <p key={p.slice(0, 32)} className="text-ink text-[1.02rem] leading-relaxed mb-4">{p}</p>
            ))}

            <h2 className="mt-8 text-[1.5rem]">¿Qué incluye el servicio?</h2>
            <ul className="mt-4 space-y-2.5">
              {s.includes.map((it) => (
                <li key={it} className="flex items-start gap-3">
                  <span className="mt-0.5 size-5 rounded-full bg-brand flex items-center justify-center shrink-0"><Check className="size-3.5 text-white" /></span>
                  <span className="text-[0.95rem] text-navy">{it}</span>
                </li>
              ))}
            </ul>

            <h2 className="mt-10 text-[1.5rem]">¿Para quién es?</h2>
            <ul className="mt-4 flex flex-wrap gap-2.5">
              {s.forWho.map((w) => (
                <li key={w} className="text-[0.82rem] font-semibold text-navy bg-off border border-border rounded-full px-4 py-2">{w}</li>
              ))}
            </ul>

            <h2 className="mt-10 text-[1.5rem]">Beneficios de contratar con SAR</h2>
            <div className="mt-4 grid sm:grid-cols-2 gap-4">
              {s.benefits.map((b) => (
                <div key={b} className="rounded-2xl border border-border bg-off p-4 text-[0.9rem] text-navy font-medium">{b}</div>
              ))}
            </div>

            <div className="mt-12">
              <FaqList items={s.faq} title={`Preguntas frecuentes — ${s.name.toLowerCase()}`} />
            </div>

            {/* Interlinking */}
            <div className="mt-10 rounded-2xl bg-brand-lt/60 border border-brand/20 p-5">
              <p className="text-[0.88rem] text-navy">
                ¿Buscas el tratamiento de una plaga específica? Revisa nuestras páginas de{' '}
                <Link href="/plagas" className="font-bold text-brand-dk hover:underline">plagas que controlamos</Link>{' '}
                o lee las <Link href="/blog" className="font-bold text-brand-dk hover:underline">guías de nuestro blog</Link>.
              </p>
            </div>
          </article>

          {/* CTA lateral */}
          <QuoteCard topic={s.name.toLowerCase()} />
        </div>
      </section>

      {/* Otros servicios */}
      <section className="bg-off border-t border-border">
        <div className="container py-12">
          <h2 className="text-[1.3rem]">Otros servicios</h2>
          <div className="mt-5 grid sm:grid-cols-3 gap-4">
            {SERVICES.filter((x) => x.slug !== s.slug).map((x) => (
              <Link key={x.slug} href={`/servicios/${x.slug}`}
                className="group bg-white border border-border rounded-2xl p-5 hover:border-brand/50 hover:shadow-lg transition-all">
                <span className="font-bold text-navy text-[0.95rem] group-hover:text-brand-dk transition-colors">{x.name}</span>
                <span className="mt-2 flex items-center gap-1 text-[0.75rem] text-muted-foreground font-semibold">
                  Ver más <ArrowRight className="size-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
