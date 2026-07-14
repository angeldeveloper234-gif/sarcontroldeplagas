import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Clock, ArrowRight } from 'lucide-react'
import { PageHero } from '@/components/layout/PageHero'
import { CtaBanner } from '@/components/sections/CtaBanner'
import { POSTS } from '@/lib/blog-data'

export const metadata: Metadata = {
  title: 'Blog de Control de Plagas | Guías y Consejos — SAR Querétaro',
  description:
    'Guías prácticas sobre control de plagas en Querétaro: precios de fumigación, alacranes, cucarachas, chinches, roedores y normativa COFEPRIS para negocios.',
  alternates: { canonical: '/blog' },
  keywords: ['blog control de plagas', 'consejos fumigación', 'guías plagas Querétaro'],
}

const fmt = (iso: string) =>
  new Date(`${iso}T12:00:00`).toLocaleDateString('es-MX', { day: 'numeric', month: 'long', year: 'numeric' })

export default function BlogPage() {
  const [featured, ...rest] = POSTS
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Guías y consejos de control de plagas"
        subtitle="Contenido práctico escrito por nuestros técnicos: cómo detectar plagas a tiempo, qué esperar de un servicio profesional y cómo cumplir la normativa."
        crumbs={[{ name: 'Blog', path: '/blog' }]}
      />

      <section className="section-padding bg-off">
        <div className="container">
          {/* Destacado */}
          <Link href={`/blog/${featured.slug}`}
            className="group grid md:grid-cols-2 bg-white border border-border rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow">
            <div className="relative aspect-[16/10] md:aspect-auto md:min-h-[20rem]">
              <Image src={featured.image} alt={featured.title} fill className="object-cover transition-transform duration-500 group-hover:scale-[1.03]" sizes="(max-width:768px) 100vw, 50vw" />
            </div>
            <div className="p-8 lg:p-10 flex flex-col justify-center">
              <span className="inline-flex w-fit rounded-full bg-brand-lt text-brand-dk text-[0.7rem] font-bold uppercase tracking-wider px-3 py-1">{featured.category}</span>
              <h2 className="mt-4 text-[1.6rem] group-hover:text-brand-dk transition-colors">{featured.title}</h2>
              <p className="mt-3 text-muted-foreground text-[0.95rem]">{featured.excerpt}</p>
              <div className="mt-5 flex items-center gap-4 text-[0.78rem] text-muted-foreground">
                <span>{fmt(featured.date)}</span>
                <span className="inline-flex items-center gap-1"><Clock className="size-3.5" />{featured.readMinutes} min</span>
              </div>
            </div>
          </Link>

          {/* Grid */}
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}`}
                className="group bg-white border border-border rounded-3xl overflow-hidden flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all">
                <div className="relative aspect-[16/9]">
                  <Image src={p.image} alt={p.title} fill className="object-cover transition-transform duration-500 group-hover:scale-[1.04]" sizes="(max-width:640px) 100vw, 33vw" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <span className="inline-flex w-fit rounded-full bg-brand-lt text-brand-dk text-[0.66rem] font-bold uppercase tracking-wider px-2.5 py-1">{p.category}</span>
                  <h2 className="mt-3 text-[1.1rem] leading-snug group-hover:text-brand-dk transition-colors">{p.title}</h2>
                  <p className="mt-2 text-muted-foreground text-[0.84rem] line-clamp-2 flex-grow">{p.excerpt}</p>
                  <div className="mt-4 flex items-center justify-between text-[0.74rem] text-muted-foreground">
                    <span>{fmt(p.date)}</span>
                    <span className="inline-flex items-center gap-1 text-brand-dk font-bold">Leer <ArrowRight className="size-3.5" /></span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
