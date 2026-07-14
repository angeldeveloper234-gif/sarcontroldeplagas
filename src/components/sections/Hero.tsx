'use client'

import { useState, useEffect } from 'react'
import { Phone, ShieldCheck, Leaf, Clock, ArrowRight, BadgeCheck } from 'lucide-react'
import { FadeUp } from '@/components/animations/FadeUp'
import { GoogleG, Stars } from '@/components/ui/google'
import { SITE } from '@/lib/site'

const IMAGES = ['/hero/1.jpg', '/hero/2.jpg', '/hero/3.jpg']

const PEST_OPTIONS = ['Cucarachas', 'Roedores', 'Chinches', 'Mosquitos / moscas', 'Arañas / alacranes', 'Abejas / avispas', 'Otra plaga']

const TRUST = [
  { Icon: Leaf, title: 'Soluciones menos tóxicas', desc: 'Productos de baja toxicidad, seguros para tu familia y mascotas.' },
  { Icon: Clock, title: 'Respuesta rápida', desc: 'Atendemos con prontitud en todo Querétaro, incluso en fin de semana.' },
  { Icon: ShieldCheck, title: 'Personal certificado', desc: 'Técnicos capacitados, COFEPRIS y NOM-256-SSA1-2012.' },
]

export function Hero() {
  const [bg, setBg] = useState(0)
  const [pest, setPest] = useState('')
  const [name, setName] = useState('')

  useEffect(() => {
    const t = setInterval(() => setBg((p) => (p + 1) % IMAGES.length), 6000)
    return () => clearInterval(t)
  }, [])

  const quickQuote = (e: React.FormEvent) => {
    e.preventDefault()
    const text =
      `Hola SAR Control de Plagas, quiero una cotización.%0A` +
      `*Nombre:* ${name || '—'}%0A*Plaga:* ${pest || 'Por definir'}`
    window.open(`https://wa.me/524423225529?text=${text}`, '_blank')
  }

  return (
    <section id="inicio">
      <div className="relative overflow-hidden bg-navy-dk">
        {/* Fondos rotativos */}
        {IMAGES.map((img, i) => (
          <div key={img} className="absolute inset-0 bg-cover bg-center" aria-hidden
            style={{ backgroundImage: `url('${img}')`, opacity: i === bg ? 0.55 : 0, transition: 'opacity 1400ms ease-in-out' }} />
        ))}
        {/* Capas de atmósfera: gradiente navy + glow verde + puntos */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(102deg, #0A143BF5 0%, #101E52E8 42%, #182A6B99 78%, #182A6B66 100%)' }} />
        <div className="absolute -top-40 right-[-10%] size-[36rem] rounded-full opacity-25 blur-3xl" style={{ background: 'radial-gradient(circle, #62B22F 0%, transparent 65%)' }} />
        <div className="absolute inset-0 dots-light opacity-60" />

        <div className="relative container pt-16 pb-24 lg:pt-24 lg:pb-32">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* ── Columna izquierda: mensaje ── */}
            <div className="lg:col-span-7">
              <FadeUp>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/8 border border-white/15 backdrop-blur px-4 py-1.5 text-white/85 text-[0.7rem] font-semibold uppercase tracking-[0.16em]">
                  <span className="size-1.5 rounded-full bg-brand animate-pulse" />
                  Control de plagas en Santiago de Querétaro
                </span>
              </FadeUp>

              <FadeUp delay={0.08}>
                <h1 className="mt-6 text-white font-black leading-[0.98] tracking-tight text-[clamp(2.6rem,6.5vw,4.6rem)]">
                  Inspeccionamos.
                  <br />Corregimos.
                  <br /><span className="sar-wordmark">Protegemos.</span>
                </h1>
              </FadeUp>

              <FadeUp delay={0.16}>
                <p className="mt-6 text-white/75 text-lg max-w-xl leading-relaxed">
                  {SITE.tagline}. Eliminamos el problema de raíz —sin comprometer tu salud ni tu
                  seguridad— con <strong className="text-white font-semibold">manejo integrado de plagas</strong> para
                  hogar, comercio e industria.
                </p>
              </FadeUp>

              <FadeUp delay={0.24}>
                <div className="mt-8 flex flex-col sm:flex-row gap-3.5">
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

              {/* Prueba social Google */}
              <FadeUp delay={0.32}>
                <a href={SITE.mapsUrl} target="_blank" rel="noopener noreferrer"
                  className="mt-9 inline-flex items-center gap-3.5 rounded-2xl bg-white/95 backdrop-blur px-5 py-3 shadow-xl hover:-translate-y-0.5 transition-transform">
                  <GoogleG className="size-7" />
                  <div className="flex flex-col leading-none">
                    <span className="flex items-center gap-2">
                      <span className="font-heading font-black text-navy text-xl">{SITE.rating.value}</span>
                      <Stars rating={SITE.rating.value} />
                    </span>
                    <span className="text-[0.72rem] text-muted-foreground mt-1 font-medium">
                      {SITE.rating.count} reseñas en Google · Querétaro
                    </span>
                  </div>
                </a>
              </FadeUp>
            </div>

            {/* ── Columna derecha: mini-cotizador flotante ── */}
            <div className="hidden lg:block lg:col-span-5">
              <FadeUp delay={0.2}>
                <form onSubmit={quickQuote}
                  className="relative ml-auto max-w-sm rounded-3xl bg-white p-7 shadow-2xl shadow-black/40 rotate-1 hover:rotate-0 transition-transform duration-300">
                  <span className="absolute -top-3.5 left-6 inline-flex items-center gap-1.5 rounded-full bg-gold text-white text-[0.68rem] font-bold uppercase tracking-wider px-3.5 py-1.5 shadow-md">
                    <BadgeCheck className="size-3.5" /> Cotización sin costo
                  </span>
                  <h2 className="font-heading font-extrabold text-navy text-[1.35rem] leading-tight mt-2">
                    ¿Qué plaga necesitas eliminar?
                  </h2>
                  <p className="text-muted-foreground text-[0.82rem] mt-1.5">Respondemos el mismo día por WhatsApp.</p>
                  <div className="mt-5 flex flex-col gap-3">
                    <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Tu nombre"
                      className="w-full rounded-xl border border-border bg-off px-4 py-3 text-[0.9rem] text-navy outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 transition-colors" />
                    <select value={pest} onChange={(e) => setPest(e.target.value)} required
                      className="w-full rounded-xl border border-border bg-off px-4 py-3 text-[0.9rem] text-navy outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 transition-colors">
                      <option value="">Selecciona la plaga…</option>
                      {PEST_OPTIONS.map((o) => <option key={o} value={o}>{o}</option>)}
                    </select>
                    <button type="submit"
                      className="inline-flex items-center justify-center gap-2 bg-navy hover:bg-navy-dk text-white font-bold px-6 py-3.5 rounded-full transition-colors uppercase tracking-wide text-[0.8rem]">
                      Cotizar ahora <ArrowRight className="size-4" />
                    </button>
                    <p className="text-center text-[0.68rem] text-muted-foreground">🔒 Sin compromiso · 100% confidencial</p>
                    <p className="text-center text-[0.72rem] font-bold text-brand-dk bg-brand-lt rounded-full py-1.5">🎁 10% de descuento en tu primer servicio</p>
                  </div>
                </form>
              </FadeUp>
            </div>
          </div>

          {/* ── Franja de stats ── */}
          <FadeUp delay={0.4}>
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-white/12 pt-8">
              {[
                { v: `${SITE.rating.value}★`, l: 'Calificación en Google' },
                { v: `${SITE.rating.count}+`, l: 'Reseñas de clientes' },
                { v: 'COFEPRIS', l: 'Normatividad sanitaria' },
                { v: 'Mismo día', l: 'Tiempo de respuesta' },
              ].map((s) => (
                <div key={s.l}>
                  <span className="block font-heading font-black text-white text-[1.5rem] leading-none">{s.v}</span>
                  <span className="block text-white/55 text-[0.75rem] mt-1.5 font-medium">{s.l}</span>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </div>

      {/* Tarjetas de confianza superpuestas */}
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
