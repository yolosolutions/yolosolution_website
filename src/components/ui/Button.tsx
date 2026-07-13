import { cn } from '@/lib/utils'
import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost'

const variants: Record<Variant, string> = {
  primary:
    'bg-royal-500 text-white shadow-glow hover:bg-royal-600 hover:shadow-softLg',
  secondary:
    'bg-white text-charcoal-800 border border-charcoal-100 hover:border-royal-300 hover:text-royal-600 shadow-soft',
  ghost: 'text-charcoal-700 hover:text-royal-600',
}

interface ButtonProps {
  children: ReactNode
  variant?: Variant
  href?: string
  to?: string
  onClick?: () => void
  className?: string
  type?: 'button' | 'submit'
  icon?: ReactNode
}

export function Button({
  children,
  variant = 'primary',
  href,
  to,
  onClick,
  className,
  type = 'button',
  icon,
}: ButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold',
    'transition-all duration-200 ease-out active:scale-[0.98]',
    variants[variant],
    className
  )

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
        {icon}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className={classes}>
        {children}
        {icon}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
      {icon}
    </button>
  )
}
