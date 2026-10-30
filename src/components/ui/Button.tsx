import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

type Variant = 'primary' | 'accent' | 'outline' | 'glass' | 'secondary' | 'ghost'
type Size = 'md' | 'lg'

const variants: Record<Variant, string> = {
  primary: 'bg-brand-600 text-white shadow-lift hover:bg-brand-700',
  accent: 'bg-gold-400 text-ink-900 shadow-gold hover:bg-gold-300',
  outline: 'border border-white/25 text-white hover:border-white/50 hover:bg-white/10',
  glass: 'liquid-glass text-white hover:bg-white/5',
  secondary:
    'border border-ink-200 bg-white text-ink-800 shadow-soft hover:border-brand-300 hover:text-brand-600',
  ghost: 'text-ink-700 hover:text-brand-600',
}

const sizes: Record<Size, string> = {
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3.5 text-[15px]',
}

interface ButtonProps {
  children: ReactNode
  variant?: Variant
  size?: Size
  href?: string
  to?: string
  onClick?: () => void
  className?: string
  type?: 'button' | 'submit'
  disabled?: boolean
  icon?: ReactNode
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  to,
  onClick,
  className,
  type = 'button',
  disabled,
  icon,
}: ButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center gap-2 rounded-full font-semibold',
    'transition-all duration-200 ease-out active:scale-[0.98] disabled:pointer-events-none disabled:opacity-60',
    sizes[size],
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
    const external = href.startsWith('http')
    return (
      <a
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noreferrer' : undefined}
        className={classes}
      >
        {children}
        {icon}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
      {icon}
    </button>
  )
}
