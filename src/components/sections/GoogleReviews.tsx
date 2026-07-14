'use client'

import { ExternalLink, PenLine } from 'lucide-react'
import { FadeUp } from '@/components/animations/FadeUp'
import { GoogleG, Stars } from '@/components/ui/google'
import { SITE } from '@/lib/site'

/** Reseñas reales de Google Maps — SAR Control de Plagas, Querétaro. */
const REVIEWS = [
  {
    name: 'Daniela Estrada',
    time: 'hace 14 días',
    text: 'Un excelente servicio, te explican a detalle el tratamiento que se requiere de acuerdo a la plaga, además de que se ven los resultados desde los primeros días. Sin duda seguiremos contratando con ellos 👏🏼',
  },
  {
    name: 'Yessenia Gomez',
    time: 'hace 2 meses',
    text: '¡Excelente atención! Se comunicaron muy rápido conmigo, tuve presencia de ratón y me urgía que me ayudaran. Me atendieron sin problema en domingo; Emmanuel, muy profesional, inspeccionó muy bien mi casa y logró atrapar al roedor. Siempre muy atento y resolviendo todas mis dudas.',
  },
  {
    name: 'Andy Gallardo',
    time: 'hace 2 meses',
    text: 'Muy atento, paciente y súper profesional 🫶🏻 100% recomendado para cualquier inquilino no deseado en sus casas.',
  },
  {
    name: 'Sergio Paulo Guzman',
    time: 'hace 3 meses',
    text: 'Llegaron muy puntuales a la cita. El señor que nos atendió fue muy amable y realizó un excelente trabajo. Nos ayudó a sacar una rata de la estufa, batalló bastante pero lo logró. La verdad los recomiendo ampliamente.',
  },
  {
    name: 'Pris Cisneros',
    time: 'hace 3 meses',
    text: 'El mejor servicio de fumigación para empresas y casas, con muy buenos productos 👍🏻',
  },
  {
    name: 'Fatima Raya',
    time: 'hace 1 mes',
    text: 'Excelente servicio.',
  },
]

const AVATAR_BG = ['bg-brand', 'bg-navy', 'bg-gold', 'bg-blue', 'bg-brand-dk', 'bg-navy-dk']

function ReviewCard({ r, i }: { r: (typeof REVIEWS)[number]; i: number }) {
  return (
    <article className="w-[19.5rem] shrink-0 bg-white border border-border rounded-2xl p-5 shadow-sm flex flex-col">
      <div className="flex items-center gap-3">
        <span className={`size-10 rounded-full ${AVATAR_BG[i % AVATAR_BG.length]} text-white font-heading font-bold flex items-center justify-center text-[0.95rem] shrink-0`}>
          {r.name.charAt(0)}
        </span>
        <div className="min-w-0">
          <span className="block font-bold text-navy text-[0.9rem] truncate">{r.name}</span>
          <span className="block text-[0.72rem] text-muted-foreground">{r.time}</span>
        </div>
        <GoogleG className="size-4.5 ml-auto shrink-0" />
      </div>
      <Stars rating={5} className="mt-3" />
      <p className="mt-2.5 text-ink text-[0.85rem] leading-relaxed line-clamp-5 flex-grow">{r.text}</p>
      <a href={SITE.mapsUrl} target="_blank" rel="noopener noreferrer nofollow"
        className="mt-3.5 inline-flex items-center gap-1.5 text-[0.72rem] font-semibold text-muted-foreground hover:text-brand-dk transition-colors">
        Ver en Google <ExternalLink className="size-3" />
      </a>
    </article>
  )
}

export function GoogleReviews() {
  return (
    <section id="resenas" className="section-padding bg-off overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-[20rem_minmax(0,1fr)] gap-10 lg:gap-14 items-center">
          {/* ── Resumen de calificación ── */}
          <FadeUp>
            <div>
              <span className="eyebrow">Reseñas verificadas</span>
              <div className="mt-5 flex items-end gap-4">
                <span className="font-heading font-black text-navy leading-none text-[4.5rem]">{SITE.rating.value}</span>
                <div className="pb-2">
                  <Stars rating={SITE.rating.value} starClass="size-5" />
                  <span className="mt-1.5 flex items-center gap-1.5 text-[0.82rem] text-muted-foreground font-medium">
                    <GoogleG className="size-4" /> {SITE.rating.count} reseñas en Google
                  </span>
                </div>
              </div>
              <p className="mt-4 text-muted-foreground text-[0.95rem]">
                La confianza se gana visita a visita. Esto es lo que dicen nuestros clientes reales
                de Querétaro.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row lg:flex-col gap-3">
                <a href={SITE.mapsUrl} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-navy hover:bg-navy-dk text-white font-bold px-6 py-3.5 rounded-full transition-colors text-[0.82rem] uppercase tracking-wide">
                  <PenLine className="size-4" /> Déjanos una reseña
                </a>
                <a href={SITE.mapsUrl} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border border-border bg-white hover:border-brand text-navy font-bold px-6 py-3.5 rounded-full transition-colors text-[0.82rem] uppercase tracking-wide">
                  Ver todas en Google
                </a>
              </div>
            </div>
          </FadeUp>

          {/* ── Marquee de reseñas ── */}
          <FadeUp delay={0.12} className="min-w-0">
            <div className="marquee-mask overflow-hidden">
              <div className="animate-marquee gap-5 py-2">
                {[...REVIEWS, ...REVIEWS].map((r, i) => (
                  <ReviewCard key={`${r.name}-${i}`} r={r} i={i} />
                ))}
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}
