import { Plus } from 'lucide-react'
import { JsonLd } from '@/components/seo/JsonLd'
import { faqSchema } from '@/lib/structured-data'
import type { Faq } from '@/lib/pests-data'

/** FAQ accesible sin JS (details/summary) + schema FAQPage. Server component. */
export function FaqList({ items, title = 'Preguntas frecuentes' }: { items: Faq[]; title?: string }) {
  if (!items.length) return null
  return (
    <div>
      <JsonLd data={faqSchema(items)} />
      <h2 className="text-[1.5rem]">{title}</h2>
      <div className="mt-5 flex flex-col gap-3">
        {items.map((f) => (
          <details key={f.q} className="group border border-border rounded-2xl bg-white overflow-hidden">
            <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer list-none font-bold text-navy text-[0.95rem] [&::-webkit-details-marker]:hidden">
              {f.q}
              <Plus className="size-5 text-brand shrink-0 transition-transform duration-200 group-open:rotate-45" />
            </summary>
            <p className="px-5 pb-5 text-muted-foreground text-[0.9rem] leading-relaxed">{f.a}</p>
          </details>
        ))}
      </div>
    </div>
  )
}
