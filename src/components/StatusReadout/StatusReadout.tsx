import { motion } from 'framer-motion'
import { totalCertifications } from '../../data/certifications'
import { skillCategories } from '../../data/skills'
import { experience } from '../../data/experience'
import styles from './StatusReadout.module.css'

interface Stat {
  label: string
  value: string
}

const stats: Stat[] = [
  { label: 'experience', value: '9+ yrs' },
  { label: 'certifications', value: String(totalCertifications) },
  { label: 'skill domains', value: String(skillCategories.length) },
  { label: 'roles held', value: String(experience.length) },
]

export function StatusReadout({ reducedMotion }: { reducedMotion: boolean }) {
  return (
    <section className={`section ${styles.readout}`}>
      <div className="container">
        <motion.dl
          className={styles.grid}
          initial={reducedMotion ? undefined : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              className={styles.stat}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            >
              <dt className={styles.label}>{stat.label}</dt>
              <dd className={styles.value}>{stat.value}</dd>
            </motion.div>
          ))}
        </motion.dl>
      </div>
    </section>
  )
}
