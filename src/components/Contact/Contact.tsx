import { profile } from '../../data/profile'
import styles from './Contact.module.css'

export function Contact() {
  return (
    <section id="contact" className={styles.contact} aria-labelledby="contact-heading">
      <div className={`container ${styles.inner}`}>
        <div>
          <p className="eyebrow">Contact</p>
          <h2 id="contact-heading" className={styles.heading}>
            Building something on the frontend? Let’s talk.
          </h2>
        </div>
        <ul className={styles.channels}>
          <li>
            <span className={styles.label}>Email</span>
            <a href={`mailto:${profile.email}`} className={styles.primary}>
              {profile.email}
            </a>
          </li>
          <li>
            <span className={styles.label}>Phone</span>
            <a href={profile.phone.href}>{profile.phone.label}</a>
          </li>
          <li>
            <span className={styles.label}>LinkedIn</span>
            <a href={profile.links.linkedin.href}>{profile.links.linkedin.label}</a>
          </li>
          <li>
            <span className={styles.label}>GitHub</span>
            <a href={profile.links.github.href}>{profile.links.github.label}</a>
          </li>
        </ul>
      </div>
    </section>
  )
}
