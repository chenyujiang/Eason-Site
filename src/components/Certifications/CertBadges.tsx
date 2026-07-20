import { motion } from 'framer-motion'
import { certifications } from '../../data/certifications'
import styles from './CertBadges.module.css'

export function CertBadges({ reducedMotion }: { reducedMotion: boolean }) {
  return (
    <section className="section">
      <div className="container">
        <span className="eyebrow">Credentials</span>
        <h2 className={styles.heading}>Certifications</h2>

        <div className={styles.groups}>
          {certifications.map((group) => (
            <div key={group.issuer} className={styles.group}>
              <h3 className={styles.issuer}>{group.issuer}</h3>
              <ul className={styles.badgeGrid}>
                {group.items.map((item, i) => (
                  <motion.li
                    key={item}
                    className={styles.badge}
                    initial={reducedMotion ? undefined : { opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.35, ease: 'easeOut', delay: reducedMotion ? 0 : i * 0.04 }}
                  >
                    <span className={styles.badgeDot} aria-hidden="true" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
