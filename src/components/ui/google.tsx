import { cn } from '@/lib/utils'

/** Logo "G" multicolor de Google. */
export function GoogleG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={cn('size-5', className)} aria-hidden="true">
      <path fill="#4285F4" d="M23.52 12.27c0-.85-.08-1.66-.22-2.45H12v4.63h6.46a5.52 5.52 0 0 1-2.4 3.62v3h3.88c2.27-2.09 3.58-5.17 3.58-8.8Z" />
      <path fill="#34A853" d="M12 24c3.24 0 5.96-1.07 7.94-2.91l-3.88-3a7.26 7.26 0 0 1-10.8-3.81H1.25v3.09A12 12 0 0 0 12 24Z" />
      <path fill="#FBBC05" d="M5.26 14.28a7.2 7.2 0 0 1 0-4.56V6.63H1.25a12 12 0 0 0 0 10.74l4.01-3.09Z" />
      <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.44-3.44A11.98 11.98 0 0 0 1.25 6.63l4.01 3.09A7.17 7.17 0 0 1 12 4.75Z" />
    </svg>
  )
}

/** Fila de estrellas (rating 0–5, admite medias). */
export function Stars({ rating = 5, className, starClass }: { rating?: number; className?: string; starClass?: string }) {
  return (
    <div className={cn('inline-flex items-center gap-0.5', className)} role="img" aria-label={`Calificación: ${rating} de 5`}>
      {[1, 2, 3, 4, 5].map((i) => {
        const fill = Math.min(Math.max(rating - (i - 1), 0), 1) // 0..1 por estrella
        return (
          <span key={i} className={cn('relative inline-block size-4', starClass)}>
            <StarSvg className="absolute inset-0 text-black/15" />
            <span className="absolute inset-0 overflow-hidden" style={{ width: `${fill * 100}%` }}>
              <StarSvg className="text-[#FBBC05]" />
            </span>
          </span>
        )
      })}
    </div>
  )
}

function StarSvg({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={cn('size-full fill-current', className)} aria-hidden="true">
      <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27Z" />
    </svg>
  )
}
