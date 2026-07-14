import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { JsonLd } from '@/components/seo/JsonLd'
import { breadcrumbSchema } from '@/lib/structured-data'

export type Crumb = { name: string; path: string }

/** Hero interior con breadcrumbs (navy + patrón de puntos + glow). Server component. */
export function PageHero({
  eyebrow,
  title,
  subtitle,
  crumbs,
}: {
  eyebrow: string
  title: string
  subtitle?: string
  crumbs: Crumb[]
}) {
  const all: Crumb[] = [{ name: 'Inicio', path: '/' }, ...crumbs]
  return (
    <section className="relative overflow-hidden bg-navy-dk">
      <JsonLd data={breadcrumbSchema(all)} />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(105deg, #0A143B 0%, #101E52 55%, #182A6B 100%)' }} />
      <div className="absolute -top-32 right-[-8%] size-[26rem] rounded-full opacity-20 blur-3xl" style={{ background: 'radial-gradient(circle, #62B22F 0%, transparent 65%)' }} />
      <div className="absolute inset-0 dots-light opacity-50" />

      <div className="relative container py-14 lg:py-20">
        {/* Breadcrumbs */}
        <nav aria-label="Miga de pan" className="flex flex-wrap items-center gap-1.5 text-[0.75rem] text-white/55">
          {all.map((c, i) => (
            <span key={c.path} className="inline-flex items-center gap-1.5">
              {i > 0 && <ChevronRight className="size-3 text-white/30" />}
              {i === all.length - 1 ? (
                <span className="text-white/85 font-medium">{c.name}</span>
              ) : (
                <Link href={c.path} className="hover:text-brand transition-colors">{c.name}</Link>
              )}
            </span>
          ))}
        </nav>

        <span className="eyebrow text-brand mt-6">{eyebrow}</span>
        <h1 className="mt-3 text-white max-w-3xl text-[clamp(1.9rem,4.5vw,3.1rem)] leading-[1.06]">{title}</h1>
        {subtitle && <p className="mt-4 text-white/70 max-w-2xl text-[1.02rem] leading-relaxed">{subtitle}</p>}
      </div>
    </section>
  )
}
