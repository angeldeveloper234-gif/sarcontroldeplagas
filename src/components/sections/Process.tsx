'use client'

import { Search, SprayCan, ShieldCheck } from 'lucide-react'
import { FadeUp } from '@/components/animations/FadeUp'

const STEPS = [
  {
    n: '01',
    Icon: Search,
    title: 'Inspeccionamos',
    desc: 'Un técnico certificado evalúa tu propiedad, identifica la plaga, su origen y los puntos de acceso para diseñar el plan correcto.',
  },
  {
    n: '02',
    Icon: SprayCan,
    title: 'Corregimos',
    desc: 'Aplicamos el tratamiento adecuado con soluciones menos tóxicas y técnicas específicas para eliminar la plaga de raíz.',
  },
  {
    n: '03',
    Icon: ShieldCheck,
    title: 'Protegemos',
    desc: 'Creamos una barrera de protección y damos seguimiento con un plan preventivo para que el problema no regrese.',
  },
]

export function Process() {
  return (
    <section id="proceso" className="section-padding bg-navy relative overflow-hidden">
      {/* Textura sutil */}
      <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)', backgroundSize: '28px 28px' }} />
      <div className="container relative">
        <FadeUp>
          <div className="text-center max-w-2xl mx-auto">
            <span className="eyebrow justify-center text-brand">Nuestro proceso</span>
            <h2 className="mt-4 text-white">Tres pasos hacia un ambiente saludable</h2>
            <p className="mt-4 text-white/70 mx-auto">
              Un método probado que resuelve el problema sin comprometer tu salud ni tu seguridad.
            </p>
          </div>
        </FadeUp>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {/* Línea conectora */}
          <div className="hidden md:block absolute top-10 left-[16%] right-[16%] border-t-2 border-dashed border-white/20" />
          {STEPS.map((s, i) => (
            <FadeUp key={s.n} delay={i * 0.12}>
              <div className="relative flex flex-col items-center text-center">
                <div className="relative size-20 rounded-2xl bg-brand flex items-center justify-center shadow-lg shadow-brand/30">
                  <s.Icon className="size-9 text-white" />
                  <span className="absolute -top-2 -right-2 size-8 rounded-full bg-gold text-navy font-heading font-extrabold text-sm flex items-center justify-center border-4 border-navy">{i + 1}</span>
                </div>
                <h3 className="mt-6 text-white text-[1.35rem]">{s.title}</h3>
                <p className="mt-3 text-white/70 text-[0.92rem] max-w-xs">{s.desc}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
