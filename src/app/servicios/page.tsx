import type { Metadata } from 'next'
import Link from 'next/link'
import { Home, Building2, Factory, ShieldCheck, ArrowRight } from 'lucide-react'
import { PageHero } from '@/components/layout/PageHero'
import { CtaBanner } from '@/components/sections/CtaBanner'
import { SERVICES } from '@/lib/services-data'

export const metadata: Metadata = {
  title: 'Servicios de Control de Plagas en Querétaro | Fumigación Profesional',
  description:
    'Fumigación residencial, comercial, industrial y planes preventivos en Querétaro. Soluciones menos tóxicas, personal certificado COFEPRIS y cotización sin costo.',
  alternates: { canonical: '/servicios' },
  keywords: ['servicios de fumigación Querétaro', 'control de plagas Querétaro', 'fumigación profesional', 'empresa de fumigación'],
}

const ICONS = { home: Home, building: Building2, factory: Factory, shield: ShieldCheck } as const

export default function ServiciosPage() {
  return (
    <>
      <PageHero
        eyebrow="Nuestros servicios"
        title="Servicios de control de plagas en Querétaro"
        subtitle="Soluciones a la medida de cada espacio: hogar, comercio, industria y planes preventivos todo el año. Personal certificado y productos de baja toxicidad."
        crumbs={[{ name: 'Servicios', path: '/servicios' }]}
      />

      <section className="section-padding bg-off">
        <div className="container grid sm:grid-cols-2 gap-6">
          {SERVICES.map((s) => {
            const Icon = ICONS[s.icon]
            return (
              <Link key={s.slug} href={`/servicios/${s.slug}`}
                className="group relative bg-white border border-border rounded-3xl p-8 overflow-hidden transition-all hover:-translate-y-1 hover:shadow-xl hover:border-brand/40">
                <span className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand to-blue scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
                <div className="size-14 rounded-xl bg-navy flex items-center justify-center group-hover:bg-brand transition-colors">
                  <Icon className="size-7 text-white" />
                </div>
                <h2 className="mt-5 text-[1.4rem] group-hover:text-brand-dk transition-colors">{s.name}</h2>
                <p className="mt-3 text-muted-foreground text-[0.92rem] leading-relaxed">{s.intro[0]}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {s.forWho.slice(0, 3).map((w) => (
                    <li key={w} className="text-[0.72rem] font-semibold text-navy bg-off border border-border rounded-full px-3 py-1">{w}</li>
                  ))}
                </ul>
                <span className="mt-5 inline-flex items-center gap-1.5 text-brand-dk font-bold text-[0.82rem] uppercase tracking-wide">
                  Ver servicio <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            )
          })}
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
