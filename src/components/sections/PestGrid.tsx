'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { FadeUp } from '@/components/animations/FadeUp'
import { PestIcon } from '@/components/ui/pest-icons'
import { PESTS } from '@/lib/pests-data'

export function PestGrid() {
  return (
    <section id="plagas" className="section-padding bg-white">
      <div className="container">
        <FadeUp>
          <div className="text-center max-w-2xl mx-auto">
            <span className="eyebrow justify-center">Plagas que controlamos</span>
            <h2 className="mt-4">Combatimos las plagas urbanas más comunes</h2>
            <p className="mt-4 text-muted-foreground mx-auto">
              Identificamos la plaga, su origen y el tratamiento adecuado. Entra a cada una para
              conocer riesgos, especies y cómo la eliminamos.
            </p>
          </div>
        </FadeUp>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {PESTS.map((p, i) => (
            <FadeUp key={p.slug} delay={(i % 4) * 0.06}>
              <Link href={`/plagas/${p.slug}`}
                className="group flex flex-col text-left w-full h-full bg-white border border-border rounded-2xl p-5 transition-all hover:-translate-y-1 hover:shadow-xl hover:border-brand hover:bg-brand-lt/40">
                <span className="size-14 rounded-xl bg-navy group-hover:bg-brand transition-colors flex items-center justify-center">
                  <PestIcon slug={p.slug} className="size-8 text-white" />
                </span>
                <h3 className="mt-3 text-[1.05rem] text-navy group-hover:text-brand-dk transition-colors">{p.name}</h3>
                <p className="mt-1.5 text-muted-foreground text-[0.8rem] leading-relaxed line-clamp-3 flex-grow">{p.description}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-[0.72rem] font-bold uppercase tracking-wide text-brand-dk opacity-0 group-hover:opacity-100 transition-opacity">
                  Ver tratamiento <ArrowRight className="size-3" />
                </span>
              </Link>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.1}>
          <div className="mt-8 text-center">
            <Link href="/plagas" className="inline-flex items-center gap-2 text-brand-dk font-bold text-[0.85rem] uppercase tracking-wide hover:underline">
              Ver todas las plagas que controlamos <ArrowRight className="size-4" />
            </Link>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
