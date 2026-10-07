import { useMemo, type ReactNode } from 'react'
import type { NoteSection, NoteSource } from '../../data/notes'
import { hrefFor, type RoutePath } from '../../routes'
import { useActiveSection } from '../../hooks/useActiveSection'
import { useScrollToSection } from '../../hooks/useScrollToSection'
import { Marked } from '../Marked/Marked'
import { NoteBlocks } from './NoteBlocks'
import styles from './NotesLayout.module.css'

interface NotesLayoutProps {
  path: RoutePath
  eyebrow: string
  title: string
  intro: string
  source: NoteSource
  sections: NoteSection[]
  section: string | null
  reducedMotion: boolean
  /** Replaces the table of contents in the sticky desktop rail. */
  rail?: (activeId: string) => ReactNode
  /** Extra content rendered at the top of each section, e.g. an inline diagram. */
  sectionLead?: (section: NoteSection) => ReactNode
  /** Number the sections — only when they form a real sequence. */
  numbered?: boolean
}

export function NotesLayout({
  path,
  eyebrow,
  title,
  intro,
  source,
  sections,
  section,
  reducedMotion,
  rail,
  sectionLead,
  numbered = false,
}: NotesLayoutProps) {
  const ids = useMemo(() => sections.map((s) => s.id), [sections])
  const activeId = useActiveSection(ids)
  useScrollToSection(section, reducedMotion)

  const toc = (
    <ol className={numbered ? styles.tocNumbered : styles.toc}>
      {sections.map((s) => (
        <li key={s.id}>
          <a
            href={hrefFor(path, s.id)}
            aria-current={s.id === activeId ? 'location' : undefined}
          >
            {s.title}
          </a>
        </li>
      ))}
    </ol>
  )

  return (
    <div className={styles.page}>
      <header className={`container ${styles.header}`}>
        <p className="eyebrow">{eyebrow}</p>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.intro}>
          <Marked text={intro} />
        </p>
        <p className={styles.source}>
          Source:{' '}
          {source.href ? <a href={source.href}>{source.title}</a> : <cite>{source.title}</cite>}
          {' — '}
          {source.detail}
        </p>
      </header>

      <div className={`container ${styles.body}`}>
        <details className={styles.mobileToc}>
          <summary>On this page</summary>
          {toc}
        </details>

        <article className={styles.article}>
          {sections.map((s, i) => (
            <section key={s.id} id={s.id} className={styles.section} aria-labelledby={`${s.id}-h`}>
              <h2 id={`${s.id}-h`} className={styles.sectionTitle}>
                {numbered && <span className={styles.number}>{String(i + 1).padStart(2, '0')}</span>}
                {s.title}
              </h2>
              {sectionLead?.(s)}
              <NoteBlocks blocks={s.blocks} />
            </section>
          ))}
        </article>

        <aside className={styles.rail} aria-label="On this page">
          {rail ? rail(activeId) : toc}
        </aside>
      </div>
    </div>
  )
}
