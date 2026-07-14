'use client'

import { ShieldCheck, BadgeCheck, FileCheck, HandCoins, Clock, Leaf, ArrowRight } from 'lucide-react'
import { FadeUp } from '@/components/animations/FadeUp'
import { SITE } from '@/lib/site'

/** Datos "de un vistazo" — concepto NYE "at a glance", superior. */
const GLANCE = [
  { Icon: BadgeCheck, text: 'Certificados COFEPRIS y SSA' },
  { Icon: FileCheck, text: 'Cumplimos NOM-256-SSA1-2012' },
  { Icon: Leaf, text: 'Soluciones de baja toxicidad (MIP)' },
  { Icon: Clock, text: 'Respuesta el mismo día' },
  { Icon: HandCoins, text: 'Cotización sin costo ni compromiso' },
  { Icon: ShieldCheck, text: 'Sin contratos forzosos' },
]

export function Guarantee() {
  return (
    <section className="section-padding bg-navy relative overflow-hidden">
      <div className="absolute inset-0 dots-light opacity-40" />
      <div className="absolute -bottom-32 -left-16 size-[28rem] rounded-full opacity-20 blur-3xl" style={{ background: 'radial-gradient(circle, #62B22F 0%, transparent 65%)' }} />

      <div className="container relative grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* ── Garantía ── */}
        <FadeUp>
          <div>
            <span className="eyebrow text-brand">Nuestra garantía</span>
            <h2 className="mt-4 text-white">
              Resolvemos el problema, <span className="text-brand">o volvemos sin costo</span>
            </h2>
            <p className="mt-5 text-white/75 max-w-lg leading-relaxed">
              Confiamos en nuestro trabajo. Si dentro del periodo de garantía la plaga regresa,
              volvemos a atender tu propiedad <strong className="text-white">sin ningún cargo adicional</strong>.
              Tu tranquilidad es el resultado que buscamos.
            </p>

            {/* Sello de garantía */}
            <div className="mt-8 inline-flex items-center gap-4 rounded-2xl bg-white/8 border border-white/12 px-6 py-4">
              <span className="size-14 rounded-full bg-brand flex items-center justify-center shrink-0 shadow-lg shadow-brand/30">
                <ShieldCheck className="size-7 text-white" />
              </span>
              <div>
                <span className="block font-heading font-extrabold text-white text-lg leading-none">Garantía de servicio</span>
                <span className="block text-white/60 text-[0.82rem] mt-1.5">Respaldada por más de 5,000 servicios realizados</span>
              </div>
            </div>

            <div className="mt-8">
              <a href={SITE.whatsappHref} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dk text-white font-bold px-7 py-3.5 rounded-full transition-colors uppercase tracking-wide text-[0.85rem]">
                Solicita tu cotización <ArrowRight className="size-4" />
              </a>
            </div>
          </div>
        </FadeUp>

        {/* ── SAR de un vistazo ── */}
        <FadeUp delay={0.12}>
          <div className="rounded-3xl bg-white p-7 sm:p-8 shadow-2xl">
            <div className="flex items-center gap-2.5 pb-4 border-b border-border">
              <span className="size-9 rounded-lg bg-brand-lt flex items-center justify-center">
                <BadgeCheck className="size-5 text-brand-dk" />
              </span>
              <h3 className="text-navy text-[1.2rem]">SAR de un vistazo</h3>
            </div>
            <ul className="mt-5 grid sm:grid-cols-2 gap-x-6 gap-y-4">
              {GLANCE.map((g) => (
                <li key={g.text} className="flex items-start gap-3">
                  <span className="mt-0.5 size-7 rounded-lg bg-brand-lt flex items-center justify-center shrink-0">
                    <g.Icon className="size-4 text-brand-dk" />
                  </span>
                  <span className="text-[0.88rem] text-navy font-medium leading-snug">{g.text}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-5 border-t border-border flex items-center justify-between gap-4">
              <span className="text-[0.8rem] text-muted-foreground">Hogar · Comercio · Industria en Querétaro</span>
              <a href={SITE.phoneHref} className="text-[0.82rem] font-bold text-brand-dk hover:underline whitespace-nowrap">{SITE.phone}</a>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
