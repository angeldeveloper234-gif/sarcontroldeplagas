'use client'

import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react'
import { FadeUp } from '@/components/animations/FadeUp'
import { SITE } from '@/lib/site'

const SERVICE_OPTIONS = ['Residencial', 'Comercial', 'Industrial', 'Preventivo periódico', 'No estoy seguro']
const PEST_OPTIONS = ['Cucarachas', 'Roedores', 'Chinches', 'Mosquitos / moscas', 'Arañas / alacranes', 'Abejas / avispas', 'Otra']

const WA_NUMBER = '524423225529'

export function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', service: '', pest: '', message: '' })
  const set = (k: string, v: string) => setForm((p) => ({ ...p, [k]: v }))

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    const text =
      `Hola SAR Control de Plagas, quiero cotizar un servicio.%0A%0A` +
      `*Nombre:* ${form.name}%0A` +
      `*Teléfono:* ${form.phone}%0A` +
      `*Tipo de servicio:* ${form.service || 'Por definir'}%0A` +
      `*Plaga:* ${form.pest || 'Por definir'}%0A` +
      `*Mensaje:* ${form.message || '—'}`
    window.open(`https://wa.me/${WA_NUMBER}?text=${text}`, '_blank')
  }

  const inputCls = 'w-full rounded-xl border border-border bg-white px-4 py-3 text-[0.9rem] text-navy outline-none transition-colors focus:border-brand focus:ring-2 focus:ring-brand/20'

  const CONTACT = [
    { Icon: Phone, label: 'Teléfono', value: SITE.phone, href: SITE.phoneHref },
    { Icon: Mail, label: 'Correo', value: SITE.email, href: `mailto:${SITE.email}` },
    { Icon: MapPin, label: 'Dirección', value: SITE.address },
    { Icon: Clock, label: 'Horario', value: SITE.hours },
  ]

  return (
    <section id="contacto" className="section-padding bg-navy relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)', backgroundSize: '28px 28px' }} />
      <div className="container relative grid lg:grid-cols-2 gap-10 lg:gap-14">
        {/* Info */}
        <FadeUp>
          <div className="text-white">
            <span className="eyebrow text-brand">Contáctanos</span>
            <h2 className="mt-4 text-white">Solicita tu cotización sin costo</h2>
            <p className="mt-4 text-white/70 max-w-md">
              Cuéntanos qué plaga necesitas controlar y en qué tipo de propiedad. Te respondemos a la
              brevedad con una propuesta a la medida, sin compromiso.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {CONTACT.map((c) => {
                const inner = (
                  <div className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl p-4 h-full">
                    <div className="size-10 rounded-lg bg-brand flex items-center justify-center shrink-0"><c.Icon className="size-5 text-white" /></div>
                    <div>
                      <span className="block text-[0.7rem] uppercase tracking-wide text-white/50">{c.label}</span>
                      <span className="block text-[0.9rem] font-semibold text-white mt-0.5">{c.value}</span>
                    </div>
                  </div>
                )
                return c.href ? <a key={c.label} href={c.href} className="block hover:opacity-90 transition-opacity">{inner}</a> : <div key={c.label}>{inner}</div>
              })}
            </div>

            {/* Mapa de ubicación */}
            <div className="mt-5 rounded-2xl overflow-hidden border border-white/10 relative group">
              <iframe
                src={SITE.mapsEmbed}
                title="Ubicación de SAR Control de Plagas en Google Maps"
                className="w-full h-56 border-0 grayscale-[30%] contrast-[95%] group-hover:grayscale-0 transition-all duration-500"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <a href={SITE.mapsUrl} target="_blank" rel="noopener noreferrer"
                className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 bg-white text-navy font-bold text-[0.72rem] px-3.5 py-2 rounded-full shadow-lg hover:bg-brand hover:text-white transition-colors">
                <MapPin className="size-3.5" /> Cómo llegar
              </a>
            </div>
          </div>
        </FadeUp>

        {/* Formulario */}
        <FadeUp delay={0.1}>
          <form onSubmit={submit} className="bg-white rounded-3xl p-6 sm:p-8 shadow-2xl">
            <h3 className="text-navy text-[1.3rem]">Cuéntanos tu caso</h3>
            <div className="mt-5 flex flex-col gap-3.5">
              <input required placeholder="Nombre completo" value={form.name} onChange={(e) => set('name', e.target.value)} className={inputCls} />
              <input required type="tel" placeholder="Teléfono / WhatsApp" value={form.phone} onChange={(e) => set('phone', e.target.value)} className={inputCls} />
              <div className="grid sm:grid-cols-2 gap-3.5">
                <select value={form.service} onChange={(e) => set('service', e.target.value)} className={inputCls}>
                  <option value="">Tipo de servicio</option>
                  {SERVICE_OPTIONS.map((o) => <option key={o} value={o}>{o}</option>)}
                </select>
                <select value={form.pest} onChange={(e) => set('pest', e.target.value)} className={inputCls}>
                  <option value="">Tipo de plaga</option>
                  {PEST_OPTIONS.map((o) => <option key={o} value={o}>{o}</option>)}
                </select>
              </div>
              <textarea rows={3} placeholder="Cuéntanos brevemente el problema (opcional)" value={form.message} onChange={(e) => set('message', e.target.value)} className={inputCls} />
              <button type="submit" className="mt-1 inline-flex items-center justify-center gap-2 bg-brand hover:bg-brand-dk text-white font-bold px-6 py-4 rounded-full transition-colors uppercase tracking-wide text-[0.85rem]">
                <Send className="size-4" /> Enviar por WhatsApp
              </button>
              <p className="text-center text-[0.72rem] text-muted-foreground">🔒 Sin costo. Sin compromiso. Respuesta el mismo día.</p>
            </div>
          </form>
        </FadeUp>
      </div>
    </section>
  )
}
