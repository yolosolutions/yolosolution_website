import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'

export function Card({
  children,
  className,
  hover = true,
}: {
  children: ReactNode
  className?: string
  hover?: boolean
}) {
  return (
    <div
      className={cn(
        'rounded-2xl border border-charcoal-100 bg-white p-6 shadow-soft',
        hover && 'transition-all duration-300 hover:-translate-y-1 hover:border-royal-200 hover:shadow-softLg',
        className
      )}
    >
      {children}
    </div>
  )
}
