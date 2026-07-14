import { Star } from 'lucide-react'
import { GoogleG } from '@/components/ui/google'
import { SITE } from '@/lib/site'

/** Cifras del negocio (copy original del sitio) + reseña Google. */
const STATS = [
  { value: '5,000+', label: 'Servicios realizados' },
  { value: '658', label: 'Clientes satisfechos' },
  { value: '97%', label: 'Efectividad en el control' },
  { value: '8+', label: 'Especialistas certificados' },
]

export function ImpactStats() {
  return (
    <section aria-label="Resultados de SAR Control de Plagas" className="bg-brand relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)', backgroundSize: '26px 26px' }} />
      <div className="container relative py-12 lg:py-14">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 divide-y-0 lg:divide-x divide-white/15">
          {STATS.map((s) => (
            <div key={s.label} className="text-center lg:px-4">
              <span className="block font-heading font-black text-white leading-none text-[clamp(2.2rem,5vw,3.2rem)] tabular-nums">{s.value}</span>
              <span className="block text-white/85 text-[0.82rem] font-medium mt-2">{s.label}</span>
            </div>
          ))}
        </div>

        {/* Reseña Google al pie */}
        <div className="mt-10 pt-8 border-t border-white/15 flex flex-col sm:flex-row items-center justify-center gap-3 text-white">
          <a href={SITE.mapsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 rounded-full bg-white/12 hover:bg-white/20 border border-white/20 px-5 py-2.5 transition-colors">
            <GoogleG className="size-5" />
            <span className="font-heading font-bold text-lg">{SITE.rating.value}</span>
            <span className="flex text-[#FFD54A]">{[...Array(5)].map((_, i) => <Star key={i} className="size-4 fill-current" />)}</span>
            <span className="text-white/80 text-[0.82rem]">{SITE.rating.count} reseñas en Google</span>
          </a>
        </div>
      </div>
    </section>
  )
}
