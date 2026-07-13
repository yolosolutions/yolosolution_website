import { cn } from '@/lib/utils'

/**
 * Real brand logo — served from /public/logo.png.
 * The wordmark is baked into the artwork itself, so no separate text label
 * is rendered alongside it. The `dark` prop is accepted for API-compatibility
 * with places the logo sits on a dark background, since the artwork already
 * has a transparent background and reads fine on both.
 */
export function Logo({ className }: { className?: string; dark?: boolean }) {
  return (
    <img
      src="/logo.png"
      alt="YOLO Solutions"
      className={cn('h-12 w-auto object-contain', className)}
    />
  )
}
