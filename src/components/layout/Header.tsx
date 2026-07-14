'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronDown, Menu, X, Phone, MapPin, Search, Star } from 'lucide-react'
import { cn } from '@/lib/utils'
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

function FacebookMark({ className }: { className?: string }) {
  return <svg viewBox="0 0 24 24" className={className} fill="currentColor"><path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5H17V3.6c-.3-.04-1.3-.13-2.46-.13-2.43 0-4.1 1.49-4.1 4.22V9.9H7.7V13h2.74v8h3.06Z" /></svg>
}
function TiktokMark({ className }: { className?: string }) {
  return <svg viewBox="0 0 24 24" className={className} fill="currentColor"><path d="M16.5 2h-3v13.5a3 3 0 1 1-2.4-2.94V9.5a6 6 0 1 0 5.4 5.97V8.66a6.5 6.5 0 0 0 3.5 1.02V6.7a3.5 3.5 0 0 1-3.5-3.5V2Z" /></svg>
}

const SOCIALS = [
  { label: 'Facebook', href: SITE.facebook, Mark: FacebookMark },
  { label: 'TikTok', href: SITE.tiktok, Mark: TiktokMark },
  { label: 'Google Maps', href: SITE.mapsUrl, Mark: MapPin },
]

export function Header() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdown, setDropdown] = useState<string | null>(null)
  const [acc, setAcc] = useState<Record<string, boolean>>({})
  const [scrolled, setScrolled] = useState(false)
  const toggleAcc = (k: string) => setAcc((p) => ({ ...p, [k]: !p[k] }))
  const closeMobile = () => setMobileOpen(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Bloquea el scroll del body mientras el drawer está abierto
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname.startsWith(href))

  return (
    <>
      {/* ── TOP BAR (degradado navy→teal) ─────────────────────── */}
      <div className="w-full text-white" style={{ background: 'linear-gradient(100deg, #0F1C48 0%, #16265E 55%, #1B4A46 100%)' }}>
        <div className="container flex items-center justify-between py-2 gap-4 text-[0.72rem]">
          <div className="hidden md:flex items-center gap-4 text-white/75">
            <a href={SITE.mapsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-white transition-colors">
              <MapPin className="size-3.5 text-brand" />{SITE.address}
            </a>
            <span className="text-white/20">|</span>
            <a href={SITE.mapsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 font-semibold text-white/85 hover:text-white transition-colors">
              <Star className="size-3.5 fill-[#FBBC05] text-[#FBBC05]" /> {SITE.rating.value} en Google
            </a>
          </div>

          <div className="flex items-center gap-2.5 ml-auto md:ml-0">
            <div className="hidden sm:flex items-center gap-1.5 mr-1">
              {SOCIALS.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                  className="size-6 rounded-full bg-white/10 hover:bg-brand flex items-center justify-center transition-colors">
                  <s.Mark className="size-3 text-white" />
                </a>
              ))}
              <span className="text-white/20 ml-1">|</span>
            </div>
            <a href={SITE.phoneHref} className="inline-flex items-center gap-1.5 font-semibold hover:text-brand transition-colors">
              <Phone className="size-3.5 text-brand" />{SITE.phone}
            </a>
            <a href={SITE.whatsappHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-3 py-1 rounded-full transition-colors">
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* ── NAV STICKY ─────────────────────────────────────────── */}
      <header className={cn(
        'sticky top-0 z-40 w-full border-b bg-white/95 backdrop-blur-md transition-all duration-300',
        scrolled ? 'border-border shadow-lg py-2' : 'border-transparent shadow-sm py-3',
      )}>
        <div className="container flex items-center justify-between gap-6">
          <Link href="/" aria-label="SAR Control de Plagas — Inicio" className="shrink-0">
            <SarLogo priority className={cn('transition-all', scrolled ? 'h-12 md:h-14' : 'h-14 md:h-16')} />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1 text-[0.82rem] font-semibold text-navy">
            <NavLink href="/" active={isActive('/')}>Inicio</NavLink>

            <Dropdown label="Servicios" active={isActive('/servicios')}
              open={dropdown === 'serv'} onEnter={() => setDropdown('serv')} onLeave={() => setDropdown(null)}>
              <div className="w-80 p-3 flex flex-col gap-1">
                {SERVICES.map((s) => (
                  <Link key={s.label} href={s.href} onClick={() => setDropdown(null)} className="group flex flex-col gap-0.5 p-2.5 rounded-lg hover:bg-off transition-colors">
                    <span className="text-[0.85rem] font-bold text-navy group-hover:text-brand transition-colors">{s.label}</span>
                    <span className="text-[0.72rem] text-muted-foreground font-medium">{s.desc}</span>
                  </Link>
                ))}
              </div>
            </Dropdown>

            <Dropdown label="Plagas" active={isActive('/plagas')}
              open={dropdown === 'pest'} onEnter={() => setDropdown('pest')} onLeave={() => setDropdown(null)}>
              <div className="w-64 py-2 flex flex-col">
                {PESTS.map((p) => (
                  <Link key={p.label} href={p.href} onClick={() => setDropdown(null)} className="group flex items-center gap-3 px-4 py-2 hover:bg-off transition-colors">
                    {p.slug ? <PestIcon slug={p.slug} className="size-4.5 text-navy/70 group-hover:text-brand transition-colors" /> : <Search className="size-4.5 text-navy/70 group-hover:text-brand transition-colors" />}
                    <span className="text-[0.82rem] font-semibold text-navy group-hover:text-brand transition-colors">{p.label}</span>
                  </Link>
                ))}
              </div>
            </Dropdown>

            <NavLink href="/nosotros" active={isActive('/nosotros')}>Nosotros</NavLink>
            <NavLink href="/blog" active={isActive('/blog')}>Blog</NavLink>
            <NavLink href="/contacto" active={isActive('/contacto')}>Contacto</NavLink>
          </nav>

          {/* Acciones */}
          <div className="flex items-center gap-2.5">
            <a href={SITE.phoneHref} aria-label={`Llamar ${SITE.phone}`}
              className="hidden lg:flex size-11 rounded-full border border-border text-navy hover:border-brand hover:text-brand transition-colors items-center justify-center">
              <Phone className="size-4" />
            </a>
            <Link href="/contacto"
              className="hidden sm:inline-flex relative overflow-hidden items-center gap-2 bg-brand hover:bg-brand-dk text-white font-bold text-[0.8rem] pl-5 pr-6 py-3 rounded-full transition-colors uppercase tracking-wide shadow-lg shadow-brand/20">
              Cotizar gratis
              <span className="absolute -bottom-2.5 -right-2.5 size-5 rotate-45 bg-gold" aria-hidden />
            </Link>
            <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden flex items-center justify-center size-11 text-navy" aria-label="Abrir menú" aria-expanded={mobileOpen}>
              {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* ── OVERLAY + DRAWER (transform inline, fiable) ────────── */}
      <div
        onClick={closeMobile}
        aria-hidden
        style={{ opacity: mobileOpen ? 0.5 : 0 }}
        className={cn('fixed inset-0 bg-black z-40 lg:hidden transition-opacity duration-300', !mobileOpen && 'pointer-events-none')}
      />
      <div
        style={{ transform: mobileOpen ? 'translateX(0)' : 'translateX(100%)' }}
        className="fixed right-0 top-0 bottom-0 w-full max-w-[21rem] bg-white z-50 flex flex-col shadow-2xl lg:hidden transition-transform duration-300 ease-out will-change-transform"
        aria-hidden={!mobileOpen}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-border">
          <SarLogo className="h-11" />
          <button onClick={closeMobile} className="size-10 flex items-center justify-center text-navy" aria-label="Cerrar menú"><X className="size-6" /></button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-4 flex flex-col gap-1">
          <Link href="/" onClick={closeMobile} className={cn('py-2.5 font-bold', isActive('/') ? 'text-brand' : 'text-navy')}>Inicio</Link>

          {[{ k: 'serv', label: 'Servicios', items: SERVICES }, { k: 'pest', label: 'Plagas', items: PESTS }].map((group) => (
            <div key={group.k} className="border-b border-border pb-1">
              <button onClick={() => toggleAcc(group.k)} className="flex items-center justify-between w-full py-2.5 font-bold text-navy" aria-expanded={!!acc[group.k]}>
                {group.label}<ChevronDown className={cn('size-4 transition-transform', acc[group.k] && 'rotate-180')} />
              </button>
              <div className="overflow-hidden transition-all duration-300 ease-out" style={{ maxHeight: acc[group.k] ? '22rem' : '0', opacity: acc[group.k] ? 1 : 0 }}>
                <div className="pt-1">
                  <div className="pl-3 pb-2 flex flex-col gap-1 border-l-2 border-brand-lt">
                    {group.items.map((it) => (
                      <Link key={it.label} href={it.href} onClick={closeMobile} className="inline-flex items-center gap-2.5 py-2 text-[0.85rem] font-semibold text-navy hover:text-brand">
                        {'slug' in it && it.slug ? <PestIcon slug={it.slug} className="size-4 text-brand-dk" /> : null}
                        {it.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}

          <Link href="/nosotros" onClick={closeMobile} className={cn('py-2.5 font-bold border-b border-border', isActive('/nosotros') ? 'text-brand' : 'text-navy')}>Nosotros</Link>
          <Link href="/blog" onClick={closeMobile} className={cn('py-2.5 font-bold border-b border-border', isActive('/blog') ? 'text-brand' : 'text-navy')}>Blog</Link>
          <Link href="/contacto" onClick={closeMobile} className={cn('py-2.5 font-bold', isActive('/contacto') ? 'text-brand' : 'text-navy')}>Contacto</Link>

          <a href={SITE.mapsUrl} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-2 text-[0.8rem] text-muted-foreground">
            <Star className="size-4 fill-[#FBBC05] text-[#FBBC05]" /> <span className="font-bold text-navy">{SITE.rating.value}</span> en Google · {SITE.rating.count} reseñas
          </a>
          <div className="mt-3 flex gap-2">
            {SOCIALS.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                className="size-9 rounded-lg bg-off hover:bg-brand hover:text-white text-navy flex items-center justify-center transition-colors">
                <s.Mark className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="px-6 py-4 border-t border-border flex flex-col gap-3">
          <a href={SITE.phoneHref} className="w-full flex items-center justify-center gap-2 bg-navy text-white font-bold py-3 rounded-full">
            <Phone className="size-4" />{SITE.phone}
          </a>
          <a href={SITE.whatsappHref} target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-2 bg-brand text-white font-bold py-3 rounded-full uppercase tracking-wide">
            Cotizar por WhatsApp
          </a>
        </div>
      </div>
    </>
  )
}

/* ── Subcomponentes ─────────────────────────────────────────── */

function NavLink({ href, active, children }: { href: string; active: boolean; children: React.ReactNode }) {
  return (
    <Link href={href} className={cn('relative px-3 py-2 rounded-lg transition-colors hover:text-brand', active ? 'text-brand' : 'text-navy')}>
      {children}
      <span className={cn('absolute left-3 right-3 -bottom-0.5 h-0.5 rounded-full bg-brand transition-transform duration-200 origin-left', active ? 'scale-x-100' : 'scale-x-0')} />
    </Link>
  )
}

function Dropdown({
  label, active, open, onEnter, onLeave, children,
}: {
  label: string; active: boolean; open: boolean; onEnter: () => void; onLeave: () => void; children: React.ReactNode
}) {
  return (
    <div className="relative py-2" onMouseEnter={onEnter} onMouseLeave={onLeave}>
      <button className={cn('flex items-center gap-1 px-3 py-2 rounded-lg transition-colors hover:text-brand cursor-pointer', active ? 'text-brand' : 'text-navy')} aria-expanded={open}>
        {label}
        <ChevronDown className={cn('size-3.5 transition-transform', open && 'rotate-180')} />
        <span className={cn('absolute left-3 right-7 -bottom-0.5 h-0.5 rounded-full bg-brand transition-transform duration-200 origin-left', active ? 'scale-x-100' : 'scale-x-0')} />
      </button>
      {/* Panel (fade + slide inline, siempre en el DOM para transición fiable) */}
      <div
        style={{ opacity: open ? 1 : 0, transform: open ? 'translateY(0)' : 'translateY(-4px)' }}
        className={cn('absolute left-0 top-full pt-2 transition-all duration-150', !open && 'invisible pointer-events-none')}
      >
        <div className="bg-white border border-border shadow-xl rounded-xl overflow-hidden">
          {children}
        </div>
      </div>
    </div>
  )
}
