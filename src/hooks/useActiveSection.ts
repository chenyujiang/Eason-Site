import { useEffect, useState } from 'react'

/** Reading line, as a share of the viewport height below its top edge */
const READING_LINE = 0.2

/**
 * Tracks which of the given section ids is currently being read: the last
 * section whose top has passed the reading line. At the bottom of the page
 * the last section wins, so short closing sections can still become active.
 */
export function useActiveSection(ids: readonly string[]): string {
  const [active, setActive] = useState(ids[0] ?? '')

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)
    if (elements.length === 0) return

    const update = () => {
      const root = document.documentElement
      const atBottom = window.innerHeight + window.scrollY >= root.scrollHeight - 2
      if (atBottom) {
        setActive(elements[elements.length - 1].id)
        return
      }

      const line = window.innerHeight * READING_LINE
      let current = elements[0]
      for (const el of elements) {
        if (el.getBoundingClientRect().top <= line) current = el
        else break
      }
      setActive(current.id)
    }

    let frame = 0
    const schedule = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
    }
  }, [ids])

  return active
}
