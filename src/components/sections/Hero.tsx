'use client'

import Image from 'next/image'
import { Phone, ArrowRight, Check, Leaf, ShieldCheck, Clock } from 'lucide-react'
import { FadeUp } from '@/components/animations/FadeUp'
import { GoogleG, Stars } from '@/components/ui/google'
import { SITE } from '@/lib/site'

const TRUST = [
  { Icon: Leaf, title: 'Soluciones menos tóxicas', desc: 'Productos de baja toxicidad, seguros para tu familia y mascotas.' },
  { Icon: Clock, title: 'Respuesta el mismo día', desc: 'Atendemos con prontitud en todo Querétaro, incluso en fin de semana.' },
  { Icon: ShieldCheck, title: 'Personal certificado', desc: 'Técnicos capacitados, COFEPRIS y NOM-256-SSA1-2012.' },
]

export function Hero() {
  return (
    <section id="inicio">
      <div className="relative overflow-hidden bg-navy-dk">
        {/* ── Atmósfera ── */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(105deg, #0A143B 0%, #101E52 46%, #16255E 100%)' }} />
        <div className="absolute inset-0 dots-light opacity-50" />
        <div className="absolute -top-40 left-[-6%] size-[34rem] rounded-full opacity-20 blur-3xl" style={{ background: 'radial-gradient(circle, #1F7EC4 0%, transparent 65%)' }} />

        {/* ── Visual derecho: cuña verde + técnico (bleed a pantalla) ── */}
        <div className="hidden lg:block absolute top-0 bottom-0 right-0 w-[47%] select-none" aria-hidden>
          {/* Blade relleno */}
          <div className="absolute inset-0" style={{ clipPath: 'polygon(24% 0, 100% 0, 100% 100%, 0 100%)', background: 'linear-gradient(155deg, #6EBF37 0%, #4E9124 100%)' }} />
          {/* Puntos sobre la cuña */}
          <div className="absolute inset-0 opacity-25" style={{ clipPath: 'polygon(24% 0, 100% 0, 100% 100%, 0 100%)', backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,.5) 1px, transparent 0)', backgroundSize: '22px 22px' }} />
          {/* Línea de acento del filo */}
          <div className="absolute inset-y-0" style={{ left: 0, right: 0, clipPath: 'polygon(24% 0, 25.6% 0, 1.6% 100%, 0 100%)', background: 'rgba(255,255,255,.35)' }} />
          {/* Glow detrás del técnico */}
          <div className="absolute bottom-0 right-[8%] size-[26rem] rounded-full opacity-40 blur-2xl" style={{ background: 'radial-gradient(circle, #ffffff 0%, transparent 60%)' }} />
        </div>

        {/* Técnico (encima de todo, bleed inferior) */}
        <div className="hidden lg:block absolute bottom-0 right-[3%] xl:right-[6%] h-[90%] max-h-[44rem] z-10" aria-hidden>
          <Image
            src="/person-fumigation.png"
            alt="Técnico certificado de SAR Control de Plagas"
            width={481}
            height={549}
            priority
            className="h-full w-auto object-contain object-bottom drop-shadow-[0_18px_35px_rgba(10,20,59,0.5)]"
            sizes="30rem"
          />
        </div>

        {/* Pill flotante de certificación */}
        <div className="hidden lg:flex absolute z-20 left-[49%] bottom-[16%] items-center gap-2 rounded-full bg-white pl-2 pr-4 py-2 shadow-xl">
          <span className="size-7 rounded-full bg-brand flex items-center justify-center"><Check className="size-4 text-white" /></span>
          <span className="text-[0.78rem] font-bold text-navy leading-tight">Técnicos<br />certificados</span>
        </div>

        {/* ── Contenido izquierdo ── */}
        <div className="container relative">
          <div className="max-w-xl lg:max-w-[35rem] py-14 lg:py-16">
            <FadeUp>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/8 border border-white/15 backdrop-blur px-4 py-1.5 text-white/85 text-[0.7rem] font-semibold uppercase tracking-[0.16em]">
                <span className="size-1.5 rounded-full bg-brand animate-pulse" />
                Control de plagas en Santiago de Querétaro
              </span>
            </FadeUp>

            <FadeUp delay={0.06}>
              <p className="mt-6 text-brand font-heading font-extrabold uppercase tracking-[0.14em] text-[0.82rem]">
                Inspeccionamos · Corregimos · Protegemos
              </p>
            </FadeUp>

            <FadeUp delay={0.12}>
              <h1 className="mt-2.5 text-white font-black leading-[1.02] tracking-tight text-[clamp(2.5rem,5.4vw,4rem)]">
                Elimina las plagas de raíz,{' '}
                <span className="relative inline-block text-brand">
                  sin riesgos
                  <svg className="absolute -bottom-1 left-0 w-full" height="10" viewBox="0 0 200 10" preserveAspectRatio="none" aria-hidden>
                    <path d="M2 7 C 50 2, 150 2, 198 6" stroke="#62B22F" strokeWidth="3.5" fill="none" strokeLinecap="round" />
                  </svg>
                </span>{' '}
                para tu familia
              </h1>
            </FadeUp>

            <FadeUp delay={0.18}>
              <p className="mt-6 text-white/75 text-lg leading-relaxed">
                Control de plagas profesional en Querétaro con soluciones de baja toxicidad.
                Inspección y cotización <strong className="text-white">sin costo</strong>, con respuesta el mismo día.
              </p>
            </FadeUp>

            {/* Tarjeta de reseñas Google */}
            <FadeUp delay={0.24}>
              <a href={SITE.mapsUrl} target="_blank" rel="noopener noreferrer"
                className="mt-7 inline-flex items-center gap-4 rounded-2xl bg-white/95 backdrop-blur pl-4 pr-5 py-3 shadow-xl hover:-translate-y-0.5 transition-transform">
                <GoogleG className="size-8 shrink-0" />
                <span className="h-9 w-px bg-border" />
                <span className="flex flex-col leading-none">
                  <span className="flex items-center gap-2">
                    <span className="font-heading font-black text-navy text-lg">{SITE.rating.value}</span>
                    <Stars rating={SITE.rating.value} />
                  </span>
                  <span className="text-[0.72rem] text-muted-foreground mt-1 font-medium">{SITE.rating.count} reseñas verificadas en Google</span>
                </span>
              </a>
            </FadeUp>

            {/* CTAs */}
            <FadeUp delay={0.3}>
              <div className="mt-7 flex flex-col sm:flex-row gap-3.5">
                <a href={SITE.whatsappHref} target="_blank" rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2.5 bg-brand hover:bg-brand-dk text-white font-bold px-7 py-4 rounded-full shadow-xl shadow-brand/25 transition-all hover:-translate-y-0.5 uppercase tracking-wide text-[0.88rem]">
                  Agendar por WhatsApp
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <a href={SITE.phoneHref}
                  className="inline-flex items-center justify-center gap-2.5 bg-white/8 hover:bg-white/15 border border-white/25 text-white font-bold px-7 py-4 rounded-full backdrop-blur transition-all uppercase tracking-wide text-[0.88rem]">
                  <Phone className="size-4" /> {SITE.phone}
                </a>
              </div>
            </FadeUp>

            {/* Nota de oferta (una línea, ligera) */}
            <FadeUp delay={0.36}>
              <p className="mt-6 text-white/55 text-[0.82rem]">
                Cotización sin costo · <span className="text-brand font-semibold">10% de descuento</span> en tu primer servicio
              </p>
            </FadeUp>

            {/* Técnico en mobile (panel con proporción, anclado al fondo) */}
            <FadeUp delay={0.42} className="lg:hidden">
              <div className="mt-10 relative mx-auto w-full max-w-[19rem]">
                <div
                  className="relative aspect-[4/5] rounded-[1.75rem] overflow-hidden border border-white/15 shadow-2xl"
                  style={{ background: 'linear-gradient(160deg, #6EBF37 0%, #4E9124 100%)' }}
                >
                  <div className="absolute inset-0 dots-light opacity-25" />
                  {/* Glow blanco detrás del técnico */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 size-52 rounded-full bg-white/30 blur-2xl" />
                  <Image
                    src="/person-fumigation.png"
                    alt="Técnico certificado de SAR Control de Plagas"
                    fill
                    priority
                    className="relative object-contain object-bottom drop-shadow-[0_12px_25px_rgba(10,20,59,0.4)]"
                    sizes="19rem"
                  />
                </div>
                {/* Pill de certificación flotante */}
                <div className="absolute -left-2 bottom-6 flex items-center gap-2 rounded-full bg-white pl-1.5 pr-3.5 py-1.5 shadow-xl">
                  <span className="size-6 rounded-full bg-brand flex items-center justify-center"><Check className="size-3.5 text-white" /></span>
                  <span className="text-[0.72rem] font-bold text-navy leading-none">Técnicos<br />certificados</span>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>

      {/* ── Tarjetas de confianza superpuestas ── */}
      <div className="bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 relative z-30 -mt-12 pb-4">
            {TRUST.map((c, i) => (
              <FadeUp key={c.title} delay={0.1 + i * 0.08}>
                <div className="group bg-white border border-border shadow-xl rounded-2xl p-6 flex items-start gap-4 h-full transition-all hover:-translate-y-1 hover:shadow-2xl hover:border-brand/40">
                  <div className="size-12 rounded-xl bg-brand-lt flex items-center justify-center shrink-0 group-hover:bg-brand transition-colors">
                    <c.Icon className="size-6 text-brand-dk group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy text-[1rem] leading-tight">{c.title}</h3>
                    <p className="text-muted-foreground text-[0.86rem] mt-1.5 leading-relaxed">{c.desc}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
