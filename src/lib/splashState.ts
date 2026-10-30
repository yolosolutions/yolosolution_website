const KEY = 'yolo-splash-seen'

export function splashSeen() {
  try {
    return !!sessionStorage.getItem(KEY)
  } catch {
    return false
  }
}

export function markSplashSeen() {
  try {
    sessionStorage.setItem(KEY, '1')
  } catch {
    /* storage unavailable: the splash will simply show again next visit */
  }
}

function shouldShow() {
  if (typeof window === 'undefined') return false
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false
  return !splashSeen()
}

export const willShowSplash = shouldShow()

/** Seconds other entrance animations should wait while the splash is up; drops to 0 once it has played. */
export const splash = { delay: willShowSplash ? 1.55 : 0 }
