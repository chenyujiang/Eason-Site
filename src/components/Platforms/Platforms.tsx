import { motion } from 'framer-motion'
import { platforms } from '../../data/platforms'
import { Section } from '../Section/Section'
import styles from './Platforms.module.css'

interface PlatformsProps {
  reducedMotion: boolean
}

export function Platforms({ reducedMotion }: PlatformsProps) {
  return (
    <Section
      id="platforms"
      eyebrow="Built from zero"
      title="Three platforms, each built from the ground up"
      intro="Not themes or plugins on someone else’s system — whole platforms, from the data model to the storefront."
    >
      <ol className={styles.track}>
        {platforms.map((platform, i) => (
          <motion.li
            key={platform.id}
            className={styles.card}
            initial={reducedMotion ? undefined : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 }}
          >
            <div className={styles.cardHead}>
              <span className={styles.when}>{platform.when}</span>
              {platform.status && <span className={styles.status}>{platform.status}</span>}
            </div>
            <h3 className={styles.name}>{platform.name}</h3>
            <p className={styles.context}>{platform.context}</p>
            <ul className={styles.modules} aria-label="Modules">
              {platform.modules.map((module) => (
                <li key={module}>{module}</li>
              ))}
            </ul>
            <p className={styles.stack}>{platform.stack}</p>
          </motion.li>
        ))}
      </ol>
    </Section>
  )
}
