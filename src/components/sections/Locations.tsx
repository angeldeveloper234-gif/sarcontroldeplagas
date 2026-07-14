'use client'

import Image from 'next/image'
import { MapPin } from 'lucide-react'
import { FadeUp } from '@/components/animations/FadeUp'
import { SITE } from '@/lib/site'

/** Zonas del área metropolitana de Querétaro donde damos servicio. */
const ZONES = [
  'Querétaro Centro',
  'Juriquilla',
  'El Refugio',
  'Jurica',
  'Milenio III',
  'Zibatá',
  'Corregidora',
  'El Marqués',
  'Centro Sur',
  'Cumbres del Lago',
]

export function Locations() {
  return (
    <section id="zonas" className="section-padding bg-off overflow-hidden">
      <div className="container grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* ── Imagen con acentos diagonales verdes ── */}
        <FadeUp className="order-1">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            {/* Slashes verdes detrás (estilo NYE, mejorado) */}
            <div className="absolute -top-3 -right-3 sm:-right-5 w-2/3 h-full rounded-3xl bg-brand/25 rotate-6" aria-hidden />
            <div className="absolute -bottom-3 -left-3 sm:-left-5 w-1/2 h-2/3 rounded-3xl bg-brand rotate-[-6deg]" aria-hidden />
            {/* Foto */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] border-4 border-white">
              <Image
                src="/pest-control-2.jpg"
                alt="Técnico de SAR Control de Plagas dando servicio en Querétaro"
                fill
                className="object-cover object-center"
                sizes="(max-width:1024px) 90vw, 45vw"
              />
            </div>
            {/* Badge flotante */}
            <div className="absolute -bottom-4 right-4 sm:right-8 flex items-center gap-2 rounded-full bg-navy text-white px-5 py-2.5 shadow-xl">
              <MapPin className="size-4 text-brand" />
              <span className="text-[0.78rem] font-bold uppercase tracking-wide">Santiago de Querétaro</span>
            </div>
          </div>
        </FadeUp>

        {/* ── Contenido + chips ── */}
        <div className="order-2">
          <FadeUp>
            <span className="eyebrow">Zonas de servicio</span>
            <h2 className="mt-4">
              Expertos en control de plagas <span className="text-brand">en tu zona</span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-lg">
              Damos servicio a clientes <strong className="text-navy">residenciales, comerciales e industriales</strong> en
              todo el área metropolitana de Querétaro:
            </p>
          </FadeUp>

          <FadeUp delay={0.1}>
            <ul className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {ZONES.map((z) => (
                <li key={z}>
                  <span className="flex items-center gap-1.5 bg-brand hover:bg-brand-dk text-white rounded-lg px-3 py-2.5 text-[0.78rem] font-bold transition-colors">
                    <MapPin className="size-3.5 shrink-0" />
                    <span className="truncate">{z}</span>
                  </span>
                </li>
              ))}
            </ul>
          </FadeUp>

          <FadeUp delay={0.18}>
            <p className="mt-6 text-[0.92rem] text-navy">
              ¿No ves tu colonia? También cubrimos zonas aledañas.{' '}
              <a href={SITE.whatsappHref} target="_blank" rel="noopener noreferrer" className="font-bold text-brand-dk hover:underline">
                Escríbenos por WhatsApp
              </a>{' '}
              y confirmamos cobertura sin costo.
            </p>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}
