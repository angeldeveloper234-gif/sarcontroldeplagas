import Image from 'next/image'
import { cn } from '@/lib/utils'

/**
 * Logo oficial de SAR Control de Plagas.
 * Wordmark horizontal con fondo transparente (gota + "SAR" + "CONTROL DE PLAGAS" + tagline).
 * `className` controla la ALTURA (el ancho se ajusta manteniendo proporción).
 */
export function SarLogo({ className, priority = false }: { className?: string; priority?: boolean }) {
  return (
    <Image
      src="/SAR-CONTROL-DE-PLAGAS-logo.webp"
      alt="SAR Control de Plagas — Inspeccionar, Corregir, Proteger"
      width={620}
      height={230}
      priority={priority}
      className={cn('h-14 w-auto md:h-16', className)}
    />
  )
}
