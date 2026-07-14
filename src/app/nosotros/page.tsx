import type { Metadata } from 'next'
import { PageHero } from '@/components/layout/PageHero'
import { About } from '@/components/sections/About'
import { Certifications } from '@/components/sections/Certifications'
import { Process } from '@/components/sections/Process'
import { CtaBanner } from '@/components/sections/CtaBanner'

export const metadata: Metadata = {
  title: 'Nosotros | SAR Control de Plagas — Expertos en Querétaro',
  description:
    'Conoce a SAR Control de Plagas: empresa queretana certificada COFEPRIS con más de 5,000 servicios realizados, 658 clientes felices y un equipo de 8+ especialistas.',
  alternates: { canonical: '/nosotros' },
  keywords: ['empresa de fumigación Querétaro', 'SAR control de plagas', 'fumigadores certificados', 'quiénes somos'],
}

/** Cifras del negocio (copy original del sitio). */
const STATS = [
  { v: '97%', l: 'Efectividad en control de plagas' },
  { v: '658', l: 'Clientes felices' },
  { v: '8+', l: 'Especialistas certificados' },
  { v: '5k+', l: 'Servicios realizados' },
]

export default function NosotrosPage() {
  return (
    <>
      <PageHero
        eyebrow="Quiénes somos"
        title="Expertos queretanos en control de plagas"
        subtitle="Inspeccionamos, corregimos y protegemos. Somos reconocidos por la rapidez de nuestra respuesta, nuestra experiencia y nuestra profesionalidad."
        crumbs={[{ name: 'Nosotros', path: '/nosotros' }]}
      />

      {/* Cifras */}
      <section className="bg-navy relative overflow-hidden">
        <div className="absolute inset-0 dots-light opacity-40" />
        <div className="container relative py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((s) => (
            <div key={s.l} className="text-center">
              <span className="block font-heading font-black text-brand text-[2.6rem] leading-none">{s.v}</span>
              <span className="block text-white/65 text-[0.8rem] mt-2 font-medium">{s.l}</span>
            </div>
          ))}
        </div>
      </section>

      <About />
      <Certifications />
      <Process />
      <CtaBanner />
    </>
  )
}
