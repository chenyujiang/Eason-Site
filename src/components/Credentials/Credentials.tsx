import { certifications, education } from '../../data/credentials'
import { Section } from '../Section/Section'
import styles from './Credentials.module.css'

export function Credentials() {
  return (
    <Section id="credentials" eyebrow="Credentials" title="Certifications & education">
      <div className={styles.columns}>
        <div>
          <h3 className={styles.heading}>Certifications</h3>
          <dl className={styles.list}>
            {certifications.map((group) => (
              <div key={group.issuer} className={styles.item}>
                <dt>{group.issuer}</dt>
                {group.items.map((item) => (
                  <dd key={item}>{item}</dd>
                ))}
              </div>
            ))}
          </dl>
        </div>
        <div>
          <h3 className={styles.heading}>Education</h3>
          <dl className={styles.list}>
            {education.map((degree) => (
              <div key={degree.degree} className={styles.item}>
                <dt>{degree.years}</dt>
                <dd className={styles.degree}>{degree.degree}</dd>
                <dd>{degree.school}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Section>
  )
}
