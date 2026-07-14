import Link from 'next/link'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { SITE } from '@/lib/site'
import { SarLogo } from './SarLogo'
import { GoogleG, Stars } from '@/components/ui/google'

const SERVICIOS = [
  { label: 'Residencial', href: '/servicios/residencial' },
  { label: 'Comercial', href: '/servicios/comercial' },
  { label: 'Industrial', href: '/servicios/industrial' },
  { label: 'Preventivo', href: '/servicios/preventivo' },
]
const PLAGAS = [
  { label: 'Cucarachas', href: '/plagas/cucarachas' },
  { label: 'Roedores', href: '/plagas/roedores' },
  { label: 'Chinches de cama', href: '/plagas/chinches-de-cama' },
  { label: 'Mosquitos y moscas', href: '/plagas/mosquitos-y-moscas' },
  { label: 'Arañas y alacranes', href: '/plagas/aranas-y-alacranes' },
]
const NAV = [
  { label: 'Inicio', href: '/' },
  { label: 'Servicios', href: '/servicios' },
  { label: 'Plagas', href: '/plagas' },
  { label: 'Nosotros', href: '/nosotros' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contacto', href: '/contacto' },
]

export function Footer() {
  const year = 2026
  return (
    <footer className="bg-navy-dk text-white/70">
      <div className="container py-14 grid grid-cols-2 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="col-span-2 md:col-span-1">
          <div className="bg-white/95 rounded-xl px-3 py-2.5 inline-block">
            <SarLogo className="h-12 md:h-12" />
          </div>
          <p className="mt-4 text-[0.85rem] leading-relaxed">{SITE.tagline}.</p>

          {/* Rating Google */}
          <a href={SITE.mapsUrl} target="_blank" rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2.5 bg-white/8 border border-white/10 rounded-xl px-3.5 py-2.5 hover:bg-white/12 transition-colors">
            <GoogleG className="size-5" />
            <span className="font-heading font-bold text-white text-[0.95rem]">{SITE.rating.value}</span>
            <Stars rating={SITE.rating.value} starClass="size-3.5" />
            <span className="text-[0.7rem] text-white/60">({SITE.rating.count})</span>
          </a>

          <div className="mt-4 flex gap-3">
            <a href={SITE.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook de SAR Control de Plagas"
              className="size-9 rounded-lg bg-white/10 hover:bg-brand flex items-center justify-center transition-colors">
              <svg viewBox="0 0 24 24" className="size-4 fill-white"><path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5H17V3.6c-.3-.04-1.3-.13-2.46-.13-2.43 0-4.1 1.49-4.1 4.22V9.9H7.7V13h2.74v8h3.06Z"/></svg>
            </a>
            <a href={SITE.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok de SAR Control de Plagas"
              className="size-9 rounded-lg bg-white/10 hover:bg-brand flex items-center justify-center transition-colors">
              <svg viewBox="0 0 24 24" className="size-4 fill-white"><path d="M16.5 2h-3v13.5a3 3 0 1 1-2.4-2.94V9.5a6 6 0 1 0 5.4 5.97V8.66a6.5 6.5 0 0 0 3.5 1.02V6.7a3.5 3.5 0 0 1-3.5-3.5V2Z"/></svg>
            </a>
            <a href={SITE.mapsUrl} target="_blank" rel="noopener noreferrer" aria-label="Ubicación en Google Maps"
              className="size-9 rounded-lg bg-white/10 hover:bg-brand flex items-center justify-center transition-colors">
              <MapPin className="size-4 text-white" />
            </a>
          </div>
        </div>

        {/* Servicios */}
        <div>
          <h3 className="text-white text-[0.95rem] font-bold uppercase tracking-wide">Servicios</h3>
          <ul className="mt-4 space-y-2.5 text-[0.85rem]">
            {SERVICIOS.map((s) => <li key={s.label}><Link href={s.href} className="hover:text-brand transition-colors">{s.label}</Link></li>)}
          </ul>
        </div>

        {/* Plagas */}
        <div>
          <h3 className="text-white text-[0.95rem] font-bold uppercase tracking-wide">Plagas</h3>
          <ul className="mt-4 space-y-2.5 text-[0.85rem]">
            {PLAGAS.map((p) => <li key={p.label}><Link href={p.href} className="hover:text-brand transition-colors">{p.label}</Link></li>)}
          </ul>
        </div>

        {/* Contacto */}
        <div className="col-span-2 md:col-span-1">
          <h3 className="text-white text-[0.95rem] font-bold uppercase tracking-wide">Contacto</h3>
          <ul className="mt-4 space-y-3 text-[0.85rem]">
            <li><a href={SITE.phoneHref} className="flex items-start gap-2.5 hover:text-brand transition-colors"><Phone className="size-4 text-brand mt-0.5 shrink-0" />{SITE.phone}</a></li>
            <li><a href={`mailto:${SITE.email}`} className="flex items-start gap-2.5 hover:text-brand transition-colors"><Mail className="size-4 text-brand mt-0.5 shrink-0" />{SITE.email}</a></li>
            <li><a href={SITE.mapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2.5 hover:text-brand transition-colors"><MapPin className="size-4 text-brand mt-0.5 shrink-0" />{SITE.address}</a></li>
            <li className="flex items-start gap-2.5"><Clock className="size-4 text-brand mt-0.5 shrink-0" />{SITE.hours}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-[0.78rem]">
          <span>© {year} {SITE.name}. Todos los derechos reservados.</span>
          <nav className="flex flex-wrap gap-x-5 gap-y-1 justify-center">
            {NAV.map((n) => <Link key={n.label} href={n.href} className="hover:text-brand transition-colors">{n.label}</Link>)}
          </nav>
          <span>
            Hecho por{' '}
            <a href="https://www.angelstudio.design/" target="_blank" rel="noopener noreferrer" className="font-semibold text-white/85 hover:text-brand transition-colors">
              Angel Design Studio
            </a>
          </span>
        </div>
      </div>
    </footer>
  )
}
