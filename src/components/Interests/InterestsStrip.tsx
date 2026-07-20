import { interests } from '../../data/certifications'
import styles from './InterestsStrip.module.css'

export function InterestsStrip() {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <span className="eyebrow">Professional interests</span>
        <ul className={styles.list}>
          {interests.map((interest) => (
            <li key={interest} className={styles.item}>
              {interest}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
