import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { AlertTriangle, Check, ArrowRight, Bug } from 'lucide-react'
import { PageHero } from '@/components/layout/PageHero'
import { QuoteCard } from '@/components/layout/QuoteCard'
import { PestIcon } from '@/components/ui/pest-icons'
import { FaqList } from '@/components/ui/FaqList'
import { JsonLd } from '@/components/seo/JsonLd'
import { serviceSchema } from '@/lib/structured-data'
import { PESTS, getPest } from '@/lib/pests-data'

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return PESTS.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const p = getPest(slug)
  if (!p) return {}
  return {
    title: p.seoTitle,
    description: p.description,
    keywords: p.keywords,
    alternates: { canonical: `/plagas/${p.slug}` },
    openGraph: { title: p.seoTitle, description: p.description },
  }
}

export default async function PlagaPage({ params }: Props) {
  const { slug } = await params
  const p = getPest(slug)
  if (!p) notFound()

  return (
    <>
      <JsonLd data={serviceSchema({ name: `Control de ${p.name}`, description: p.description, path: `/plagas/${p.slug}` })} />
      <PageHero
        eyebrow={p.name}
        title={p.h1}
        subtitle={p.intro[0]}
        crumbs={[{ name: 'Plagas', path: '/plagas' }, { name: p.name, path: `/plagas/${p.slug}` }]}
      />

      <section className="section-padding bg-white">
        <div className="container grid lg:grid-cols-[minmax(0,1fr)_22rem] gap-12">
          <article>
            {p.intro.slice(1).map((t) => (
              <p key={t.slice(0, 32)} className="text-ink text-[1.02rem] leading-relaxed mb-4">{t}</p>
            ))}

            <h2 className="mt-8 text-[1.5rem]">{p.speciesTitle}</h2>
            <ul className="mt-4 space-y-2.5">
              {p.species.map((sp) => (
                <li key={sp} className="flex items-start gap-3">
                  <Bug className="size-5 text-brand mt-0.5 shrink-0" />
                  <span className="text-[0.95rem] text-navy">{sp}</span>
                </li>
              ))}
            </ul>

            <h2 className="mt-10 text-[1.5rem]">Riesgos de no atenderla</h2>
            <div className="mt-4 flex flex-col gap-3">
              {p.risks.map((r) => (
                <div key={r} className="flex items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-4">
                  <AlertTriangle className="size-5 text-amber-600 mt-0.5 shrink-0" />
                  <span className="text-[0.9rem] text-navy">{r}</span>
                </div>
              ))}
            </div>

            <h2 className="mt-10 text-[1.5rem]">¿Cómo la eliminamos?</h2>
            <ol className="mt-4 space-y-3">
              {p.treatment.map((t, i) => (
                <li key={t} className="flex items-start gap-3.5">
                  <span className="size-7 rounded-full bg-navy text-white font-heading font-bold text-[0.8rem] flex items-center justify-center shrink-0">{i + 1}</span>
                  <span className="text-[0.95rem] text-navy pt-0.5">{t}</span>
                </li>
              ))}
            </ol>

            <div className="mt-6 flex items-start gap-3 rounded-2xl bg-brand-lt/60 border border-brand/20 p-4">
              <Check className="size-5 text-brand-dk mt-0.5 shrink-0" />
              <p className="text-[0.88rem] text-navy">
                Todos nuestros tratamientos usan <strong>productos de baja toxicidad con registro COFEPRIS</strong>,
                aplicados por técnicos certificados conforme a la NOM-256-SSA1-2012.
              </p>
            </div>

            <div className="mt-12">
              <FaqList items={p.faq} title={`Preguntas frecuentes sobre ${p.name.toLowerCase()}`} />
            </div>
          </article>

          <QuoteCard topic={`control de ${p.name.toLowerCase()}`} />
        </div>
      </section>

      {/* Otras plagas */}
      <section className="bg-off border-t border-border">
        <div className="container py-12">
          <h2 className="text-[1.3rem]">Otras plagas que controlamos</h2>
          <div className="mt-5 flex flex-wrap gap-3">
            {PESTS.filter((x) => x.slug !== p.slug).map((x) => (
              <Link key={x.slug} href={`/plagas/${x.slug}`}
                className="group inline-flex items-center gap-2 bg-white border border-border rounded-full px-4 py-2.5 text-[0.85rem] font-semibold text-navy hover:border-brand hover:text-brand-dk transition-colors">
                <PestIcon slug={x.slug} className="size-4 text-brand-dk" /> {x.name}
                <ArrowRight className="size-3.5 opacity-0 -ml-1 group-hover:opacity-100 group-hover:ml-0 transition-all" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
