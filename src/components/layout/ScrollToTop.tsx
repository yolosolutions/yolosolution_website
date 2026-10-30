import { useEffect } from 'react'

/** Scrolls to the top when the shown page changes, or to the `#hash` target when one is given. */
export function ScrollToTop({ pathname, hash }: { pathname: string; hash: string }) {
  useEffect(() => {
    if (hash) {
      // wait a frame so the target page has rendered
      const id = hash.slice(1)
      const frame = requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      })
      return () => cancelAnimationFrame(frame)
    }
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
  }, [pathname, hash])

  return null
}
