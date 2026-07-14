import Link from 'next/link'
import { PestIcon } from '@/components/ui/pest-icons'
import { PESTS } from '@/lib/pests-data'

/** Cinta animada de plagas con iconos — firma visual, muestra la cobertura completa. */
export function PestMarquee() {
  const items = [...PESTS, ...PESTS] // duplicado para loop continuo
  return (
    <section aria-label="Plagas que combatimos" className="bg-navy-dk relative overflow-hidden border-y border-white/5">
      <div className="absolute inset-0 dots-light opacity-40" />
      <div className="relative py-6">
        <div className="marquee-mask overflow-hidden">
          <div className="animate-marquee gap-4">
            {items.map((p, i) => (
              <Link
                key={`${p.slug}-${i}`}
                href={`/plagas/${p.slug}`}
                className="group shrink-0 inline-flex items-center gap-3 rounded-full bg-white/8 hover:bg-brand border border-white/10 hover:border-brand px-5 py-2.5 transition-colors"
              >
                <PestIcon slug={p.slug} className="size-5 text-brand group-hover:text-white transition-colors" />
                <span className="text-white font-semibold text-[0.85rem] whitespace-nowrap">{p.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
