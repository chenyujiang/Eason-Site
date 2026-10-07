import { hrefFor } from '../../routes'
import { Section } from '../Section/Section'
import styles from './Notebook.module.css'

const entries = [
  {
    path: '/system-design',
    source: 'System Design Interview, Alex Xu — Chapter 1',
    title: 'Scale from zero to millions of users',
    summary:
      'One server grows into a sharded, multi–data center system, one bottleneck at a time. Step through the architecture as it evolves.',
  },
  {
    path: '/frontend-system-design',
    source: 'System Design Handbook — Frontend guide',
    title: 'Frontend system design',
    summary:
      'Rendering strategies, state ownership, data fetching, performance, and resilience — and how to reason about them in a 45-minute interview.',
  },
] as const

export function Notebook() {
  return (
    <Section
      id="notebook"
      eyebrow="Notebook"
      title="Study notes"
      intro="What I’m reading on system design, written up as notes."
    >
      <ul className={styles.list}>
        {entries.map((entry) => (
          <li key={entry.path}>
            <a href={hrefFor(entry.path)} className={styles.card}>
              <span className={styles.source}>{entry.source}</span>
              <span className={styles.title}>{entry.title}</span>
              <span className={styles.summary}>{entry.summary}</span>
              <span className={styles.cta} aria-hidden="true">
                Read the notes →
              </span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  )
}
