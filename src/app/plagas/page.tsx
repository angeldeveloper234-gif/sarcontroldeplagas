import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { PageHero } from '@/components/layout/PageHero'
import { CtaBanner } from '@/components/sections/CtaBanner'
import { PESTS } from '@/lib/pests-data'

export const metadata: Metadata = {
  title: 'Plagas que Controlamos en Querétaro | Cucarachas, Roedores, Chinches',
  description:
    'Conoce las plagas urbanas que eliminamos en Querétaro: cucarachas, chinches de cama, roedores, alacranes, mosquitos, abejas y fauna urbana. Cotiza sin costo.',
  alternates: { canonical: '/plagas' },
  keywords: ['plagas comunes Querétaro', 'tipos de plagas', 'insectos rastreros', 'insectos voladores', 'control de plagas urbanas'],
}

export default function PlagasPage() {
  return (
    <>
      <PageHero
        eyebrow="Plagas que controlamos"
        title="Plagas urbanas que eliminamos en Querétaro"
        subtitle="Plagas comunes, insectos rastreros y voladores, roedores y manejo de fauna. Identificamos la especie, su origen y aplicamos el tratamiento correcto."
        crumbs={[{ name: 'Plagas', path: '/plagas' }]}
      />

      <section className="section-padding bg-off">
        <div className="container grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PESTS.map((p) => (
            <Link key={p.slug} href={`/plagas/${p.slug}`}
              className="group bg-white border border-border rounded-2xl p-6 transition-all hover:-translate-y-1 hover:shadow-xl hover:border-brand/50">
              <span className="text-4xl block">{p.emoji}</span>
              <h2 className="mt-3 text-[1.1rem] text-navy group-hover:text-brand-dk transition-colors">{p.name}</h2>
              <p className="mt-2 text-muted-foreground text-[0.82rem] leading-relaxed line-clamp-3">{p.intro[0]}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-brand-dk font-bold text-[0.75rem] uppercase tracking-wide">
                Ver tratamiento <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
