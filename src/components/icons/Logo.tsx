import { cn } from '@/lib/utils'

/**
 * Brand logo. `onDark` swaps to a light version (white wordmark, gold chevron)
 * for use on navy backgrounds; both are cropped from /public/logo.png.
 */
export function Logo({ className, onDark = false }: { className?: string; onDark?: boolean }) {
  return (
    <img
      src={onDark ? '/logo-light.png' : '/logo-mark.png'}
      alt="YOLO Solutions"
      width={472}
      height={190}
      className={cn('h-11 w-auto object-contain sm:h-12', className)}
    />
  )
}
