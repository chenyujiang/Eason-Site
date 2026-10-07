import { profile } from '../../data/profile'
import styles from './Footer.module.css'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <span>
          {profile.name} — {profile.location}
        </span>
        <span className={styles.links}>
          <a href={profile.links.github.href}>GitHub</a>
          <a href={profile.links.linkedin.href}>LinkedIn</a>
          <a href={`mailto:${profile.email}`}>Email</a>
        </span>
      </div>
    </footer>
  )
}
