'use client'

import Link from 'next/link'
import { Home, Building2, Factory, ShieldCheck, ArrowRight } from 'lucide-react'
import { FadeUp } from '@/components/animations/FadeUp'
import { SITE } from '@/lib/site'

const SERVICES = [
  {
    Icon: Home,
    title: 'Residencial',
    href: '/servicios/residencial',
    desc: 'Protegemos casas, condominios y departamentos contra los insectos y arácnidos más comunes, con productos seguros para tu familia y mascotas.',
    points: ['Casas y departamentos', 'Jardines y áreas comunes', 'Tratamientos de baja toxicidad'],
  },
  {
    Icon: Building2,
    title: 'Comercial',
    href: '/servicios/comercial',
    desc: 'Servicio discreto y eficaz para restaurantes, hoteles, oficinas y locales. Cuidamos tu operación, tu reputación y el cumplimiento sanitario.',
    points: ['Restaurantes y bares', 'Oficinas y comercios', 'Hoteles y condominios'],
  },
  {
    Icon: Factory,
    title: 'Industrial',
    href: '/servicios/industrial',
    desc: 'Programas de manejo integrado de plagas para naves, almacenes y plantas de manufactura o alimentos, bajo normatividad COFEPRIS.',
    points: ['Naves y almacenes', 'Plantas de alimentos', 'Documentación y bitácoras'],
  },
  {
    Icon: ShieldCheck,
    title: 'Preventivo',
    href: '/servicios/preventivo',
    desc: 'Servicio preventivo y correctivo periódico para mantener tus espacios libres de plagas todo el año, con inspecciones programadas.',
    points: ['Inspecciones periódicas', 'Estaciones de monitoreo', 'Reportes de seguimiento'],
  },
]

export function Services() {
  return (
    <section id="servicios" className="section-padding bg-off">
      <div className="container">
        <FadeUp>
          <div className="text-center max-w-2xl mx-auto">
            <span className="eyebrow justify-center">Nuestros servicios</span>
            <h2 className="mt-4">Soluciones a la medida de cada espacio</h2>
            <p className="mt-4 text-muted-foreground mx-auto">
              En SAR Control de Plagas proporcionamos servicios y tratamientos eficaces para el control
              de plagas urbanas, adaptados al tipo de propiedad y al nivel de infestación.
            </p>
          </div>
        </FadeUp>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map((s, i) => (
            <FadeUp key={s.title} delay={i * 0.08}>
              <Link href={s.href} className="group relative h-full bg-white border border-border rounded-2xl p-6 flex flex-col overflow-hidden transition-all hover:-translate-y-1 hover:shadow-xl hover:border-brand/40">
                {/* Barra de acento superior */}
                <span className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand to-blue scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
                <span className="absolute top-4 right-5 font-heading font-black text-[2.6rem] leading-none text-off select-none" aria-hidden>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="size-14 rounded-xl bg-navy flex items-center justify-center group-hover:bg-brand transition-colors">
                  <s.Icon className="size-7 text-white" />
                </div>
                <h3 className="mt-5 text-[1.25rem]">{s.title}</h3>
                <p className="mt-2.5 text-muted-foreground text-[0.9rem] leading-relaxed flex-grow">{s.desc}</p>
                <ul className="mt-4 space-y-1.5">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-[0.82rem] text-navy font-medium">
                      <span className="size-1.5 rounded-full bg-brand shrink-0" />{p}
                    </li>
                  ))}
                </ul>
                <span className="mt-4 inline-flex items-center gap-1.5 text-brand-dk font-bold text-[0.75rem] uppercase tracking-wide">
                  Ver servicio <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.1}>
          <div className="mt-10 text-center">
            <Link href="/contacto" className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dk text-white font-bold px-7 py-3.5 rounded-full transition-colors uppercase tracking-wide text-[0.85rem]">
              Solicita tu cotización sin costo <ArrowRight className="size-4" />
            </Link>
            <p className="mt-3 text-[0.8rem] text-muted-foreground">¿Emergencia? Escríbenos por WhatsApp al {SITE.whatsapp}</p>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
