import type { Metadata } from 'next'
import { PageHero } from '@/components/layout/PageHero'
import { Contact } from '@/components/sections/Contact'
import { Faq } from '@/components/sections/Faq'

export const metadata: Metadata = {
  title: 'Contacto y Cotización Sin Costo | SAR Control de Plagas Querétaro',
  description:
    'Cotiza tu servicio de fumigación en Querétaro sin costo: WhatsApp 442 322 5529, ventas@sarcontroldeplagas.com.mx. Respuesta el mismo día y 10% en tu primer servicio.',
  alternates: { canonical: '/contacto' },
  keywords: ['cotizar fumigación Querétaro', 'contacto control de plagas', 'presupuesto fumigación', 'fumigadores cerca de mí'],
}

export default function ContactoPage() {
  return (
    <>
      <PageHero
        eyebrow="Contacto"
        title="Cotiza tu servicio sin costo"
        subtitle="Escríbenos por WhatsApp, llámanos o llena el formulario: te respondemos el mismo día con un precio cerrado y sin compromiso."
        crumbs={[{ name: 'Contacto', path: '/contacto' }]}
      />
      <Contact />
      <Faq />
    </>
  )
}
