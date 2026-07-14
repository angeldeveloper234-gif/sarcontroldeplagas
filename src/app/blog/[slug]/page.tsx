import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { Clock, CalendarDays, ArrowRight } from 'lucide-react'
import { PageHero } from '@/components/layout/PageHero'
import { QuoteCard } from '@/components/layout/QuoteCard'
import { FaqList } from '@/components/ui/FaqList'
import { JsonLd } from '@/components/seo/JsonLd'
import { articleSchema } from '@/lib/structured-data'
import { POSTS, getPost } from '@/lib/blog-data'

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return {}
  return {
    title: post.seoTitle,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: 'article',
      title: post.seoTitle,
      description: post.description,
      images: [{ url: post.image }],
      publishedTime: post.date,
      modifiedTime: post.dateModified,
    },
  }
}

const fmt = (iso: string) =>
  new Date(`${iso}T12:00:00`).toLocaleDateString('es-MX', { day: 'numeric', month: 'long', year: 'numeric' })

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

  return (
    <>
      <JsonLd data={articleSchema(post)} />
      <PageHero
        eyebrow={post.category}
        title={post.title}
        crumbs={[{ name: 'Blog', path: '/blog' }, { name: post.title, path: `/blog/${post.slug}` }]}
      />

      <section className="section-padding bg-white">
        <div className="container grid lg:grid-cols-[minmax(0,1fr)_22rem] gap-12">
          <article>
            {/* Meta + imagen */}
            <div className="flex items-center gap-5 text-[0.8rem] text-muted-foreground">
              <span className="inline-flex items-center gap-1.5"><CalendarDays className="size-4 text-brand" />{fmt(post.date)}</span>
              <span className="inline-flex items-center gap-1.5"><Clock className="size-4 text-brand" />{post.readMinutes} min de lectura</span>
            </div>
            <div className="relative aspect-[16/8] rounded-3xl overflow-hidden mt-5 border border-border">
              <Image src={post.image} alt={post.title} fill className="object-cover" priority sizes="(max-width:1024px) 100vw, 60vw" />
            </div>

            {/* Secciones */}
            {post.sections.map((sec) => (
              <div key={sec.h2} className="mt-9">
                <h2 className="text-[1.45rem]">{sec.h2}</h2>
                {sec.body.map((b) => (
                  <p key={b.slice(0, 32)} className="mt-3.5 text-ink text-[1rem] leading-relaxed">{b}</p>
                ))}
                {sec.list && (
                  <ul className="mt-4 space-y-2.5">
                    {sec.list.map((li) => (
                      <li key={li} className="flex items-start gap-3">
                        <span className="mt-[0.55rem] size-1.5 rounded-full bg-brand shrink-0" />
                        <span className="text-[0.95rem] text-navy">{li}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            {post.faq && (
              <div className="mt-12">
                <FaqList items={post.faq} />
              </div>
            )}

            {/* Interlinking a servicios/plagas */}
            {post.related.length > 0 && (
              <div className="mt-10 rounded-2xl bg-brand-lt/60 border border-brand/20 p-6">
                <h2 className="text-[1.05rem]">Te puede interesar</h2>
                <div className="mt-3 flex flex-wrap gap-3">
                  {post.related.map((r) => (
                    <Link key={`${r.type}-${r.slug}`} href={`/${r.type}/${r.slug}`}
                      className="inline-flex items-center gap-1.5 bg-white border border-border rounded-full px-4 py-2 text-[0.82rem] font-bold text-navy hover:border-brand hover:text-brand-dk transition-colors">
                      {r.label} <ArrowRight className="size-3.5" />
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </article>

          <QuoteCard />
        </div>
      </section>

      {/* Más artículos */}
      <section className="bg-off border-t border-border">
        <div className="container py-12">
          <h2 className="text-[1.3rem]">Más artículos del blog</h2>
          <div className="mt-5 grid sm:grid-cols-3 gap-4">
            {POSTS.filter((x) => x.slug !== post.slug).slice(0, 3).map((x) => (
              <Link key={x.slug} href={`/blog/${x.slug}`}
                className="group bg-white border border-border rounded-2xl p-5 hover:border-brand/50 hover:shadow-lg transition-all">
                <span className="text-[0.66rem] font-bold uppercase tracking-wider text-brand-dk">{x.category}</span>
                <span className="mt-1.5 block font-bold text-navy text-[0.92rem] leading-snug group-hover:text-brand-dk transition-colors">{x.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
