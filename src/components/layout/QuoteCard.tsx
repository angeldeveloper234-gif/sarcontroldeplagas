import { Phone, Gift } from 'lucide-react'
import { GoogleG, Stars } from '@/components/ui/google'
import { SITE } from '@/lib/site'

/** Tarjeta de conversión para páginas interiores (sticky en desktop). */
export function QuoteCard({ topic }: { topic?: string }) {
  const wa = `https://wa.me/524423225529?text=${encodeURIComponent(
    `Hola SAR, quiero cotizar${topic ? ` el servicio de ${topic}` : ' un servicio de control de plagas'}.`,
  )}`
  return (
    <aside className="lg:sticky lg:top-28 rounded-3xl bg-navy text-white p-7 shadow-xl overflow-hidden relative">
      <div className="absolute inset-0 dots-light opacity-40" />
      <div className="relative">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-gold text-white text-[0.68rem] font-bold uppercase tracking-wider px-3.5 py-1.5">
          <Gift className="size-3.5" /> 10% en tu primer servicio
        </span>
        <h2 className="font-heading font-extrabold text-white text-[1.35rem] leading-tight mt-4">
          Cotización sin costo, el mismo día
        </h2>
        <p className="text-white/70 text-[0.85rem] mt-2">
          Cuéntanos tu problema y te respondemos de inmediato con un precio cerrado.
        </p>
        <div className="mt-5 flex flex-col gap-3">
          <a href={wa} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-brand hover:bg-brand-dk text-white font-bold px-6 py-3.5 rounded-full transition-colors uppercase tracking-wide text-[0.8rem]">
            Cotizar por WhatsApp
          </a>
          <a href={SITE.phoneHref}
            className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold px-6 py-3.5 rounded-full transition-colors uppercase tracking-wide text-[0.8rem]">
            <Phone className="size-4" /> {SITE.phone}
          </a>
        </div>
        <a href={SITE.mapsUrl} target="_blank" rel="noopener noreferrer"
          className="mt-5 flex items-center justify-center gap-2 text-[0.75rem] text-white/60 hover:text-white transition-colors">
          <GoogleG className="size-4" />
          <span className="font-bold text-white">{SITE.rating.value}</span>
          <Stars rating={SITE.rating.value} starClass="size-3" />
          <span>({SITE.rating.count} reseñas)</span>
        </a>
      </div>
    </aside>
  )
}
