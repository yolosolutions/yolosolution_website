import { useEffect } from 'react'

const SUFFIX = 'YOLO Solutions'

/** Sets the document title and meta description for the current route. */
export function usePageMeta(title: string, description: string) {
  useEffect(() => {
    document.title = title === SUFFIX ? title : `${title} | ${SUFFIX}`
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', description)
  }, [title, description])
}
