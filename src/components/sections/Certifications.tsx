'use client'

import { BadgeCheck, ShieldCheck, Leaf, FileCheck } from 'lucide-react'
import { FadeUp } from '@/components/animations/FadeUp'

const ITEMS = [
  { Icon: BadgeCheck, title: 'COFEPRIS', desc: 'Operamos conforme a la regulación sanitaria federal.' },
  { Icon: FileCheck, title: 'NOM-256-SSA1-2012', desc: 'Cumplimos la norma para el control de plagas urbanas.' },
  { Icon: ShieldCheck, title: 'SSA', desc: 'Alineados a los lineamientos de la Secretaría de Salud.' },
  { Icon: Leaf, title: 'Menos tóxicos', desc: 'Productos de baja toxicidad, seguros y responsables.' },
]

export function Certifications() {
  return (
    <section className="bg-brand-lt/50 border-y border-border">
      <div className="container py-10">
        <FadeUp>
          <p className="text-center text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-brand-dk mb-6">
            Respaldo, cumplimiento y responsabilidad
          </p>
        </FadeUp>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {ITEMS.map((it, i) => (
            <FadeUp key={it.title} delay={i * 0.06}>
              <div className="flex items-center gap-3 bg-white rounded-xl border border-border px-4 py-3.5 h-full">
                <it.Icon className="size-8 text-brand shrink-0" />
                <div>
                  <span className="block font-bold text-navy text-[0.9rem] leading-tight">{it.title}</span>
                  <span className="block text-[0.72rem] text-muted-foreground leading-snug mt-0.5">{it.desc}</span>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
