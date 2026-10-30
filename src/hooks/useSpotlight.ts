import type { MouseEvent } from 'react'

/** Writes the cursor position into `--mx` / `--my` so CSS can draw a spotlight that follows it. */
export function spotlight(e: MouseEvent<HTMLElement>) {
  const el = e.currentTarget
  const r = el.getBoundingClientRect()
  el.style.setProperty('--mx', `${e.clientX - r.left}px`)
  el.style.setProperty('--my', `${e.clientY - r.top}px`)
}
