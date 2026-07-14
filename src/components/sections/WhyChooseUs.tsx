'use client'

import Image from 'next/image'
import { BadgeCheck, Leaf, Clock, FileCheck } from 'lucide-react'
import { FadeUp } from '@/components/animations/FadeUp'
import { GoogleG, Stars } from '@/components/ui/google'
import { SITE } from '@/lib/site'

const LEFT = [
  {
    Icon: BadgeCheck,
    title: 'Certificados y regulados',
    desc: 'Licencia sanitaria vigente, técnicos capacitados y cumplimiento de COFEPRIS, SSA y NOM-256-SSA1-2012.',
  },
  {
    Icon: Leaf,
    title: 'Soluciones menos tóxicas',
    desc: 'Productos de baja toxicidad con registro sanitario, seguros para tu familia, mascotas y clientes.',
  },
]

const RIGHT = [
  {
    Icon: Clock,
    title: 'Respuesta el mismo día',
    desc: 'Atendemos con rapidez en todo Querétaro — incluso domingos. Nuestras reseñas lo confirman.',
  },
  {
    Icon: FileCheck,
    title: 'Enfoque científico (MIP)',
    desc: 'Manejo integrado de plagas: inspección, corrección y prevención documentada con bitácoras para auditorías.',
  },
]

function Feature({ f, align }: { f: (typeof LEFT)[number]; align: 'left' | 'right' }) {
  return (
    <div className={`flex flex-col gap-3 ${align === 'right' ? 'lg:items-end lg:text-right' : ''}`}>
      <span className="size-12 rounded-xl bg-brand flex items-center justify-center shadow-lg shadow-brand/25">
        <f.Icon className="size-6 text-white" />
      </span>
      <h3 className="text-white text-[1.1rem]">{f.title}</h3>
      <p className="text-white/65 text-[0.88rem] leading-relaxed max-w-xs">{f.desc}</p>
    </div>
  )
}

/** "¿Por qué SAR?" — 4 diferenciadores alrededor del técnico (inspirado en NYE, versión SAR). */
export function WhyChooseUs() {
  return (
    <section id="por-que-sar" className="section-padding bg-navy-dk relative overflow-hidden">
      <div className="absolute inset-0 dots-light opacity-50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[30rem] rounded-full opacity-20 blur-3xl" style={{ background: 'radial-gradient(circle, #62B22F 0%, transparent 65%)' }} />

      <div className="container relative">
        <FadeUp>
          <div className="text-center max-w-2xl mx-auto">
            <span className="eyebrow justify-center text-brand">La diferencia SAR</span>
            <h2 className="mt-4 text-white">¿Por qué elegir SAR Control de Plagas?</h2>
          </div>
        </FadeUp>

        <div className="mt-14 grid lg:grid-cols-[1fr_auto_1fr] gap-10 lg:gap-8 items-center">
          {/* Columna izquierda */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-10 order-2 lg:order-1">
            {LEFT.map((f, i) => (
              <FadeUp key={f.title} delay={i * 0.1}>
                <Feature f={f} align="right" />
              </FadeUp>
            ))}
          </div>

          {/* Equipo al centro, en marco con acento */}
          <FadeUp delay={0.1} className="order-1 lg:order-2 justify-self-center">
            <div className="relative">
              <div className="absolute -inset-3 rounded-3xl bg-brand/15 blur-xl" />
              <div className="relative w-[17rem] sm:w-[20rem] aspect-[4/5] rounded-3xl overflow-hidden border-2 border-white/15 shadow-2xl">
                <Image
                  src="/team-sar.png"
                  alt="Equipo de técnicos certificados de SAR Control de Plagas"
                  fill
                  className="object-cover object-center"
                  sizes="20rem"
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(16,30,82,0.55), transparent 45%)' }} />
              </div>
              {/* Badge flotante */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 rounded-full bg-brand text-white px-5 py-2.5 shadow-xl">
                <BadgeCheck className="size-4" />
                <span className="text-[0.78rem] font-bold uppercase tracking-wide">Equipo certificado</span>
              </div>
            </div>
          </FadeUp>

          {/* Columna derecha */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-10 order-3">
            {RIGHT.map((f, i) => (
              <FadeUp key={f.title} delay={0.15 + i * 0.1}>
                <Feature f={f} align="left" />
              </FadeUp>
            ))}
          </div>
        </div>

        {/* Prueba social al pie */}
        <FadeUp delay={0.2}>
          <div className="mt-14 flex justify-center">
            <a href={SITE.mapsUrl} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-white/8 border border-white/15 px-6 py-3 hover:bg-white/12 transition-colors">
              <GoogleG className="size-5" />
              <span className="font-heading font-bold text-white">{SITE.rating.value}</span>
              <Stars rating={SITE.rating.value} starClass="size-4" />
              <span className="text-white/60 text-[0.82rem]">{SITE.rating.count} reseñas de clientes en Querétaro</span>
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
