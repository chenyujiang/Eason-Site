import { motion } from 'framer-motion'
import styles from './ContactTerminal.module.css'

const lines = [
  { flag: '--email', value: 'nz.eason.chen@gmail.com', href: 'mailto:nz.eason.chen@gmail.com' },
  { flag: '--phone', value: '021 028 66801', href: 'tel:+642102866801' },
  {
    flag: '--linkedin',
    value: 'linkedin.com/in/chenyujiang',
    href: 'https://linkedin.com/in/chenyujiang',
  },
  { flag: '--location', value: 'Auckland, New Zealand', href: null },
]

export function ContactTerminal({ reducedMotion }: { reducedMotion: boolean }) {
  return (
    <section className="section">
      <div className="container">
        <span className="eyebrow">Get in touch</span>
        <h2 className={styles.heading}>Contact</h2>

        <motion.div
          className={styles.terminal}
          initial={reducedMotion ? undefined : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          <div className={styles.titlebar}>
            <span className={styles.dot} style={{ background: '#e5484d' }} />
            <span className={styles.dot} style={{ background: '#f5a623' }} />
            <span className={styles.dot} style={{ background: '#4fd1c5' }} />
            <span className={styles.titlebarLabel}>contact.sh</span>
          </div>
          <div className={styles.body}>
            <p className={styles.command}>
              <span className={styles.prompt}>$</span> contact
            </p>
            {lines.map((line) => (
              <p key={line.flag} className={styles.line}>
                <span className={styles.flag}>{line.flag}</span>{' '}
                {line.href ? (
                  <a href={line.href} className={styles.value}>
                    {line.value}
                  </a>
                ) : (
                  <span className={styles.value}>{line.value}</span>
                )}
              </p>
            ))}
            <p className={styles.command}>
              <span className={styles.prompt}>$</span>
              <span className={styles.cursor} aria-hidden="true" />
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
