'use client'

import Image from 'next/image'
import { Check, Target, Eye } from 'lucide-react'
import { FadeUp } from '@/components/animations/FadeUp'

const REASONS = [
  'Personal técnico certificado, capacitado y con amplia experiencia.',
  'Rapidez y profesionalismo en cada respuesta.',
  'Enfoque de manejo integrado de plagas (MIP).',
  'Soluciones menos tóxicas, enfocadas en salud y seguridad.',
  'Cumplimiento de COFEPRIS, SSA y NOM-256-SSA1-2012.',
]

/** Cifras reales del negocio (copy original del sitio). */
const STATS = [
  { value: '97%', label: 'Efectividad en control' },
  { value: '658', label: 'Clientes felices' },
  { value: '8+', label: 'Especialistas' },
  { value: '5k+', label: 'Servicios realizados' },
]

export function About() {
  return (
    <section id="nosotros" className="section-padding bg-white">
      <div className="container grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Imagen + badge */}
        <FadeUp>
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
              <Image src="/images/about-image1.jpg" alt="Técnico de SAR Control de Plagas realizando un servicio" fill className="object-cover" sizes="(max-width:1024px) 100vw, 50vw" />
            </div>
            <div className="absolute -bottom-6 -right-4 sm:right-6 bg-navy text-white rounded-2xl px-6 py-5 shadow-xl">
              <span className="block font-heading font-extrabold text-3xl text-brand leading-none">SAR</span>
              <span className="block text-[0.72rem] text-white/70 mt-1 uppercase tracking-wide">Querétaro</span>
            </div>
          </div>
        </FadeUp>

        {/* Texto */}
        <div>
          <FadeUp>
            <span className="eyebrow">Quiénes somos</span>
            <h2 className="mt-4">Expertos locales en control de plagas en Querétaro</h2>
            <p className="mt-4 text-muted-foreground">
              En SAR Control de Plagas proporcionamos servicios y tratamientos eficaces para el control de
              plagas urbanas. Somos reconocidos por la rapidez de nuestra respuesta, así como por nuestra
              experiencia y profesionalidad. Nuestro objetivo principal es eliminar el problema sin
              comprometer tu salud ni tu seguridad.
            </p>
          </FadeUp>

          {/* Misión / Visión */}
          <FadeUp delay={0.08}>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-border p-5 bg-off">
                <Target className="size-6 text-brand" />
                <h3 className="mt-3 text-[1.05rem]">Misión</h3>
                <p className="mt-1.5 text-[0.84rem] text-muted-foreground">Brindar soluciones efectivas y sostenibles que garantizan un entorno saludable y seguro.</p>
              </div>
              <div className="rounded-2xl border border-border p-5 bg-off">
                <Eye className="size-6 text-brand" />
                <h3 className="mt-3 text-[1.05rem]">Visión</h3>
                <p className="mt-1.5 text-[0.84rem] text-muted-foreground">Ser líderes en el mercado del control de plagas con soluciones innovadoras y sostenibles.</p>
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.16}>
            <ul className="mt-6 space-y-2.5">
              {REASONS.map((r) => (
                <li key={r} className="flex items-start gap-3">
                  <span className="mt-0.5 size-5 rounded-full bg-brand flex items-center justify-center shrink-0"><Check className="size-3.5 text-white" /></span>
                  <span className="text-[0.92rem] text-navy">{r}</span>
                </li>
              ))}
            </ul>
          </FadeUp>

          <FadeUp delay={0.24}>
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-border pt-6">
              {STATS.map((s) => (
                <div key={s.label}>
                  <span className="block font-heading font-extrabold text-navy text-[1.4rem] leading-none">{s.value}</span>
                  <span className="block text-[0.72rem] text-muted-foreground mt-1.5">{s.label}</span>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}
