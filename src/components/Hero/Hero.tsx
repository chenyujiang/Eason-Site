import { motion } from 'framer-motion'
import { OrchestrationGraph } from './OrchestrationGraph'
import styles from './Hero.module.css'

interface HeroProps {
  reducedMotion: boolean
}

export function Hero({ reducedMotion }: HeroProps) {
  return (
    <section className={styles.hero}>
      <div className={`${styles.inner} container`}>
        <motion.div
          className={styles.copy}
          initial={reducedMotion ? undefined : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <span className="eyebrow">System online</span>
          <h1 className={styles.name}>Eason Chen</h1>
          <p className={styles.title}>
            Senior Software Engineer — Enterprise Applications · Business
            Intelligence · AI Automation
          </p>
          <p className={styles.location}>Auckland, New Zealand</p>
        </motion.div>

        <motion.div
          className={styles.graph}
          initial={reducedMotion ? undefined : { opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
        >
          <OrchestrationGraph size={520} variant="hero" reducedMotion={reducedMotion} />
        </motion.div>
      </div>

      <div className={styles.scrollCue} aria-hidden="true">
        <span />
      </div>
    </section>
  )
}
