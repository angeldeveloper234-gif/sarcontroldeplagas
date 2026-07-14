import Link from 'next/link'
import { PestIcon } from '@/components/ui/pest-icons'
import { PESTS } from '@/lib/pests-data'

/**
 * Cinta animada de plagas con iconos — firma visual, muestra la cobertura completa.
 * Loop infinito preciso: el contenido se duplica exactamente y se anima a -50%.
 * El espaciado va como margen por elemento (no flex-gap) para que el corte sea exacto.
 */
export function PestMarquee() {
  const items = [...PESTS, ...PESTS] // duplicado exacto para loop continuo
  return (
    <section aria-label="Plagas que combatimos" className="bg-navy-dk relative overflow-hidden border-y border-white/5">
      <div className="absolute inset-0 dots-light opacity-40" />
      <div className="relative py-6">
        <div className="marquee-mask overflow-hidden">
          <div className="animate-marquee" style={{ animationDuration: '60s' }}>
            {items.map((p, i) => (
              <Link
                key={`${p.slug}-${i}`}
                href={`/plagas/${p.slug}`}
                className="group shrink-0 inline-flex items-center gap-2.5 mr-10 sm:mr-14"
              >
                <PestIcon slug={p.slug} className="size-6 text-brand transition-transform group-hover:scale-110" />
                <span className="text-white/85 group-hover:text-white font-semibold text-[0.9rem] whitespace-nowrap transition-colors">{p.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
