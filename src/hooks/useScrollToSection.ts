import { useEffect } from 'react'

/**
 * Scrolls the element with id `section` into view once the page that owns it
 * has mounted.
 */
export function useScrollToSection(section: string | null, reducedMotion: boolean) {
  useEffect(() => {
    if (!section) return
    const target = document.getElementById(section)
    if (!target) return
    target.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth', block: 'start' })
  }, [section, reducedMotion])
}
