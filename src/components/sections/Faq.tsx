'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { FadeUp } from '@/components/animations/FadeUp'
import { JsonLd } from '@/components/seo/JsonLd'
import { faqSchema } from '@/lib/structured-data'

export const FAQS = [
  { q: '¿Los productos que utilizan son seguros para mi familia y mascotas?', a: 'Sí. Trabajamos con soluciones menos tóxicas y de baja toxicidad, aplicadas por personal certificado siguiendo la NOM-256-SSA1-2012, priorizando la salud y seguridad de las personas y mascotas.' },
  { q: '¿En qué zonas dan servicio?', a: 'Brindamos servicio en Santiago de Querétaro y su zona metropolitana, para clientes residenciales, comerciales e industriales.' },
  { q: '¿Cuánto tarda en hacer efecto el tratamiento?', a: 'Depende del tipo de plaga y nivel de infestación. En la inspección inicial te indicamos el tiempo estimado y el plan de seguimiento adecuado para tu caso.' },
  { q: '¿Ofrecen servicio preventivo periódico?', a: 'Sí. Contamos con programas preventivos y correctivos periódicos para hogar, comercio e industria, con inspecciones programadas y reportes de seguimiento.' },
  { q: '¿Cómo solicito una cotización?', a: 'Puedes escribirnos por WhatsApp o llenar el formulario de contacto. Te respondemos a la brevedad con una cotización sin costo ni compromiso.' },
  { q: '¿Están certificados?', a: 'Sí. Nuestro personal está capacitado y certificado, y cumplimos con la regulación de COFEPRIS y la Secretaría de Salud (SSA).' },
]

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <section id="faq" className="section-padding bg-white">
      <JsonLd data={faqSchema(FAQS)} />
      <div className="container max-w-3xl">
        <FadeUp>
          <div className="text-center">
            <span className="eyebrow justify-center">Preguntas frecuentes</span>
            <h2 className="mt-4">Resolvemos tus dudas</h2>
          </div>
        </FadeUp>

        <div className="mt-10 flex flex-col gap-3">
          {FAQS.map((f, i) => (
            <FadeUp key={i} delay={i * 0.05}>
              <div className="border border-border rounded-2xl overflow-hidden bg-white">
                <button onClick={() => setOpen(open === i ? null : i)} className="flex items-center justify-between w-full text-left px-5 py-4 gap-4">
                  <span className="font-bold text-navy text-[0.95rem]">{f.q}</span>
                  <Plus className={`size-5 text-brand shrink-0 transition-transform duration-300 ${open === i ? 'rotate-45' : ''}`} />
                </button>
                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }} className="overflow-hidden">
                      <p className="px-5 pb-5 text-muted-foreground text-[0.9rem] leading-relaxed">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
