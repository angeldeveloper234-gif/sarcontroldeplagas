'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown, Menu, X, Phone, MapPin, Search } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { SITE } from '@/lib/site'
import { SarLogo } from './SarLogo'

import { PESTS as PESTS_DATA } from '@/lib/pests-data'
import { PestIcon } from '@/components/ui/pest-icons'

const PESTS = [
  { slug: '', label: 'Todas las plagas', href: '/plagas' },
  ...PESTS_DATA.map((p) => ({ slug: p.slug, label: p.name, href: `/plagas/${p.slug}` })),
]

const SERVICES = [
  { label: 'Todos los servicios', desc: 'Conoce todo lo que hacemos.', href: '/servicios' },
  { label: 'Residencial', desc: 'Protección para tu hogar y familia.', href: '/servicios/residencial' },
  { label: 'Comercial', desc: 'Restaurantes, oficinas y locales.', href: '/servicios/comercial' },
  { label: 'Industrial', desc: 'Naves, almacenes y plantas.', href: '/servicios/industrial' },
  { label: 'Preventivo', desc: 'Programas periódicos de control.', href: '/servicios/preventivo' },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdown, setDropdown] = useState<string | null>(null)
  const [acc, setAcc] = useState<Record<string, boolean>>({})
  const toggleAcc = (k: string) => setAcc((p) => ({ ...p, [k]: !p[k] }))

  return (
    <>
      {/* ── TOP BAR ─────────────────────────────────────────── */}
      <div className="w-full bg-navy text-white">
        <div className="container flex items-center justify-between py-2 gap-4 text-[0.72rem]">
          <div className="hidden md:flex items-center gap-5 text-white/70">
            <a href={SITE.mapsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-white transition-colors">
              <MapPin className="size-3.5 text-brand" />{SITE.address}
            </a>
            <a href={SITE.mapsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 font-semibold text-white/85 hover:text-white transition-colors">
              <span className="text-[#FBBC05]">★</span> {SITE.rating.value} en Google
            </a>
          </div>
          <div className="flex items-center gap-2 ml-auto md:ml-0">
            <a href={SITE.phoneHref} className="inline-flex items-center gap-1.5 font-semibold hover:text-brand transition-colors">
              <Phone className="size-3.5 text-brand" />{SITE.phone}
            </a>
            <span className="text-white/25">|</span>
            <a href={SITE.whatsappHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-3 py-1 rounded-full transition-colors">
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* ── STICKY NAV ──────────────────────────────────────── */}
      <header className="sticky top-0 z-40 w-full border-b border-border bg-white/95 backdrop-blur-md shadow-sm">
        <div className="container flex items-center justify-between gap-6 py-3">
          <Link href="/" aria-label="SAR Control de Plagas — Inicio">
            <SarLogo priority />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7 text-[0.82rem] font-semibold text-navy">
            <Link href="/#inicio" className="hover:text-brand transition-colors">Inicio</Link>

            {/* Servicios dropdown */}
            <div className="relative py-2" onMouseEnter={() => setDropdown('serv')} onMouseLeave={() => setDropdown(null)}>
              <button className="flex items-center gap-1 hover:text-brand transition-colors cursor-pointer">
                Servicios <ChevronDown className={`size-3.5 transition-transform ${dropdown === 'serv' ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {dropdown === 'serv' && (
                  <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }} transition={{ duration: 0.15 }}
                    className="absolute left-0 mt-2 w-80 bg-white border border-border shadow-xl rounded-xl p-3 flex flex-col gap-1">
                    {SERVICES.map((s) => (
                      <Link key={s.label} href={s.href} onClick={() => setDropdown(null)} className="group flex flex-col gap-0.5 p-2.5 rounded-lg hover:bg-off transition-colors">
                        <span className="text-[0.85rem] font-bold text-navy group-hover:text-brand transition-colors">{s.label}</span>
                        <span className="text-[0.72rem] text-muted-foreground font-medium">{s.desc}</span>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Plagas dropdown */}
            <div className="relative py-2" onMouseEnter={() => setDropdown('pest')} onMouseLeave={() => setDropdown(null)}>
              <button className="flex items-center gap-1 hover:text-brand transition-colors cursor-pointer">
                Plagas <ChevronDown className={`size-3.5 transition-transform ${dropdown === 'pest' ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {dropdown === 'pest' && (
                  <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }} transition={{ duration: 0.15 }}
                    className="absolute left-0 mt-2 w-56 bg-white border border-border shadow-xl rounded-xl py-2 flex flex-col">
                    {PESTS.map((p) => (
                      <Link key={p.label} href={p.href} onClick={() => setDropdown(null)} className="group flex items-center gap-3 px-4 py-2 hover:bg-off transition-colors">
                        {p.slug ? (
                          <PestIcon slug={p.slug} className="size-4.5 text-navy/70 group-hover:text-brand transition-colors" />
                        ) : (
                          <Search className="size-4.5 text-navy/70 group-hover:text-brand transition-colors" />
                        )}
                        <span className="text-[0.82rem] font-semibold text-navy group-hover:text-brand transition-colors">{p.label}</span>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/nosotros" className="hover:text-brand transition-colors">Nosotros</Link>
            <Link href="/blog" className="hover:text-brand transition-colors">Blog</Link>
            <Link href="/#resenas" className="hover:text-brand transition-colors">Reseñas</Link>
            <Link href="/contacto" className="hover:text-brand transition-colors">Contacto</Link>
          </nav>

          <div className="flex items-center gap-3">
            <Link href="/contacto" className="hidden sm:inline-flex items-center gap-2 bg-brand hover:bg-brand-dk text-white font-bold text-[0.8rem] px-5 py-2.5 rounded-full transition-colors uppercase tracking-wide">
              Cotizar gratis
            </Link>
            <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden flex items-center justify-center size-11 text-navy" aria-label="Abrir menú">
              {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* ── MOBILE DRAWER ───────────────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.5 }} exit={{ opacity: 0 }} onClick={() => setMobileOpen(false)} className="fixed inset-0 bg-black z-40 lg:hidden" />
            <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'spring', damping: 26, stiffness: 220 }}
              className="fixed right-0 top-0 bottom-0 w-full max-w-[20rem] bg-white z-50 p-6 flex flex-col gap-4 shadow-2xl lg:hidden overflow-y-auto">
              <div className="flex items-center justify-between pb-4 border-b border-border">
                <span className="font-heading font-extrabold text-navy uppercase tracking-tight">Menú</span>
                <button onClick={() => setMobileOpen(false)} className="size-10 flex items-center justify-center text-navy"><X className="size-6" /></button>
              </div>

              <Link href="/#inicio" onClick={() => setMobileOpen(false)} className="py-2.5 font-bold text-navy">Inicio</Link>

              {[{ k: 'serv', label: 'Servicios', items: SERVICES }, { k: 'pest', label: 'Plagas', items: PESTS }].map((group) => (
                <div key={group.k} className="border-b border-border pb-2">
                  <button onClick={() => toggleAcc(group.k)} className="flex items-center justify-between w-full py-2.5 font-bold text-navy">
                    {group.label}<ChevronDown className={`size-4 transition-transform ${acc[group.k] ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence initial={false}>
                    {acc[group.k] && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }}
                        className="overflow-hidden pl-3 flex flex-col gap-1 border-l-2 border-brand-lt">
                        {group.items.map((it) => (
                          <Link key={it.label} href={it.href} onClick={() => setMobileOpen(false)} className="inline-flex items-center gap-2.5 py-2 text-[0.85rem] font-semibold text-navy hover:text-brand">
                            {'slug' in it && it.slug ? <PestIcon slug={it.slug} className="size-4 text-brand-dk" /> : null}
                            {it.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              <Link href="/nosotros" onClick={() => setMobileOpen(false)} className="py-2.5 font-bold text-navy border-b border-border">Nosotros</Link>
              <Link href="/blog" onClick={() => setMobileOpen(false)} className="py-2.5 font-bold text-navy border-b border-border">Blog</Link>
              <Link href="/contacto" onClick={() => setMobileOpen(false)} className="py-2.5 font-bold text-navy">Contacto</Link>

              <div className="flex flex-col gap-3 pt-4 mt-auto border-t border-border">
                <a href={SITE.phoneHref} className="w-full flex items-center justify-center gap-2 bg-navy text-white font-bold py-3 rounded-full">
                  <Phone className="size-4" />{SITE.phone}
                </a>
                <a href={SITE.whatsappHref} target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-2 bg-brand text-white font-bold py-3 rounded-full uppercase tracking-wide">
                  Cotizar gratis
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
