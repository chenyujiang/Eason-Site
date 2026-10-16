import type { ReactNode } from 'react'
import styles from './Section.module.css'

interface SectionProps {
  id: string
  title: ReactNode
  intro?: ReactNode
  children: ReactNode
}

export function Section({ id, title, intro, children }: SectionProps) {
  const headingId = `${id}-heading`
  return (
    <section id={id} className={styles.section} aria-labelledby={headingId}>
      <div className="container">
        <header className={styles.header}>
          <h2 id={headingId} className={styles.title}>
            {title}
          </h2>
          {intro && <p className={styles.intro}>{intro}</p>}
        </header>
        {children}
      </div>
    </section>
  )
}
