import { experience } from '../../data/experience'
import { Section } from '../Section/Section'
import styles from './Experience.module.css'

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Ten years of shipping in New Zealand"
    >
      <ol className={styles.timeline}>
        {experience.map((entry) => (
          <li key={entry.id} className={styles.entry}>
            <div className={styles.meta}>
              <h3 className={styles.company}>{entry.company}</h3>
              <p className={styles.period}>{entry.period}</p>
            </div>
            <div className={styles.roles}>
              {entry.roles.map((role) => (
                <article key={role.title} className={styles.role}>
                  <header className={styles.roleHead}>
                    <h4 className={styles.roleTitle}>{role.title}</h4>
                    {entry.roles.length > 1 && (
                      <span className={styles.rolePeriod}>{role.period}</span>
                    )}
                  </header>
                  <ul className={styles.bullets}>
                    {role.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
