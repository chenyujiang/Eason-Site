import { motion } from 'framer-motion'
import { experience, type DomainTag } from '../../data/experience'
import styles from './ExperienceLog.module.css'

const tagColor: Record<DomainTag, string> = {
  Frontend: 'var(--accent-cyan)',
  Backend: 'var(--accent-amber)',
  BI: 'var(--accent-cyan)',
  AI: 'var(--accent-amber)',
  'E-commerce': 'var(--text-muted)',
}

export function ExperienceLog({ reducedMotion }: { reducedMotion: boolean }) {
  return (
    <section className="section">
      <div className="container">
        <span className="eyebrow">Build log</span>
        <h2 className={styles.heading}>Experience</h2>

        <ol className={styles.log}>
          {experience.map((entry, index) => (
            <motion.li
              key={entry.id}
              className={styles.entry}
              initial={reducedMotion ? undefined : { opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, ease: 'easeOut', delay: reducedMotion ? 0 : index * 0.05 }}
            >
              <div className={styles.rail} aria-hidden="true">
                <span className={styles.node} />
              </div>
              <div className={styles.body}>
                <div className={styles.headRow}>
                  <span className={styles.period}>{entry.period}</span>
                  <div className={styles.tags}>
                    {entry.tags.map((tag) => (
                      <span
                        key={tag}
                        className={styles.tag}
                        style={{ color: tagColor[tag], borderColor: tagColor[tag] }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <h3 className={styles.role}>{entry.role}</h3>
                <p className={styles.company}>{entry.company}</p>
                <p className={styles.summary}>{entry.summary}</p>
                <ul className={styles.bullets}>
                  {entry.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}
