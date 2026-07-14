'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Clock } from 'lucide-react'
import { FadeUp } from '@/components/animations/FadeUp'
import { POSTS } from '@/lib/blog-data'

/** Últimos artículos del blog en la home — interlinking SEO. */
export function BlogTeaser() {
  const posts = POSTS.slice(0, 3)
  return (
    <section id="blog" className="section-padding bg-white">
      <div className="container">
        <FadeUp>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="eyebrow">Del blog</span>
              <h2 className="mt-4">Guías y consejos de nuestros técnicos</h2>
            </div>
            <Link href="/blog" className="inline-flex items-center gap-2 text-brand-dk font-bold text-[0.85rem] uppercase tracking-wide hover:underline shrink-0">
              Ver todos los artículos <ArrowRight className="size-4" />
            </Link>
          </div>
        </FadeUp>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((p, i) => (
            <FadeUp key={p.slug} delay={i * 0.08}>
              <Link href={`/blog/${p.slug}`}
                className="group bg-white border border-border rounded-3xl overflow-hidden flex flex-col h-full hover:shadow-xl hover:-translate-y-1 transition-all">
                <div className="relative aspect-[16/9]">
                  <Image src={p.image} alt={p.title} fill className="object-cover transition-transform duration-500 group-hover:scale-[1.04]" sizes="(max-width:640px) 100vw, 33vw" />
                  <span className="absolute top-3 left-3 rounded-full bg-white/95 text-brand-dk text-[0.66rem] font-bold uppercase tracking-wider px-2.5 py-1">{p.category}</span>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-[1.05rem] leading-snug group-hover:text-brand-dk transition-colors">{p.title}</h3>
                  <p className="mt-2 text-muted-foreground text-[0.84rem] line-clamp-2 flex-grow">{p.excerpt}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-[0.74rem] text-muted-foreground">
                    <Clock className="size-3.5" /> {p.readMinutes} min de lectura
                  </span>
                </div>
              </Link>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
