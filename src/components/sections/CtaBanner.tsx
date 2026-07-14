'use client'

import Image from 'next/image'
import { Phone, Gift } from 'lucide-react'
import { FadeUp } from '@/components/animations/FadeUp'
import { SITE } from '@/lib/site'

export function CtaBanner() {
  return (
    <section className="bg-brand relative">
      {/* Textura de puntos */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)', backgroundSize: '26px 26px' }} />
      {/* Glow navy para profundidad */}
      <div className="absolute inset-y-0 right-0 w-1/2 opacity-30" style={{ background: 'radial-gradient(ellipse at 80% 60%, #101E52 0%, transparent 65%)' }} />

      <div className="container relative grid lg:grid-cols-[1fr_auto] gap-8 items-stretch">
        {/* Texto + CTAs */}
        <div className="py-14 md:py-20 self-center text-center lg:text-left">
          <FadeUp>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 border border-white/25 px-4 py-1.5 text-white text-[0.72rem] font-bold uppercase tracking-[0.14em]">
              <Gift className="size-3.5" /> 10% de descuento en tu primer servicio
            </span>
            <h2 className="mt-5 text-white text-[clamp(1.7rem,4vw,2.6rem)] max-w-2xl mx-auto lg:mx-0">
              No esperes más para disfrutar de un ambiente saludable
            </h2>
            <p className="mt-4 text-white/90 max-w-xl mx-auto lg:mx-0">
              Llámanos hoy y comienza a proteger tu hogar, comercio o industria con SAR Control de Plagas.
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <a href={SITE.phoneHref} className="inline-flex items-center justify-center gap-2 bg-white text-brand-dk font-bold px-7 py-4 rounded-full hover:bg-white/90 transition-colors uppercase tracking-wide text-[0.85rem] shadow-lg">
                <Phone className="size-4" /> {SITE.phone}
              </a>
              <a href={SITE.whatsappHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-navy text-white font-bold px-7 py-4 rounded-full hover:bg-navy-dk transition-colors uppercase tracking-wide text-[0.85rem] shadow-lg">
                Escríbenos por WhatsApp
              </a>
            </div>
          </FadeUp>
        </div>

        {/* Técnico fumigador (torso hacia arriba) — anclado al borde inferior del banner */}
        <div className="hidden lg:flex items-end justify-center relative w-[19rem] xl:w-[22rem]">
          <Image
            src="/person-fumigation.png"
            alt="Técnico de SAR Control de Plagas con equipo de protección mostrando aprobación"
            width={481}
            height={549}
            className="relative z-10 w-full h-auto object-contain object-bottom -mb-px drop-shadow-[0_16px_30px_rgba(16,30,82,0.4)]"
            sizes="(min-width:1280px) 22rem, 19rem"
          />
        </div>
      </div>
    </section>
  )
}
