import { motion } from 'framer-motion'
import { profile } from '../../data/profile'
import { Marked } from '../Marked/Marked'
import styles from './Hero.module.css'

interface HeroProps {
  reducedMotion: boolean
}

export function Hero({ reducedMotion }: HeroProps) {
  const rise = (delay: number) =>
    reducedMotion
      ? {}
      : {
          initial: { opacity: 0, y: 14 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as const, delay },
        }

  return (
    <section id="about" className={styles.hero} data-animate={!reducedMotion || undefined}>
      <div className="container">
        <motion.p className="eyebrow" {...rise(0)}>
          {profile.role} · {profile.discipline}
        </motion.p>
        <motion.h1 className={styles.name} {...rise(0.06)}>
          Eason <span className={styles.surname}>Chen</span>
        </motion.h1>

        <div className={styles.body}>
          <motion.div className={styles.summary} {...rise(0.14)}>
            {profile.summary.map((paragraph, i) => (
              <p key={i} className={i === 0 ? styles.lead : undefined}>
                <Marked text={paragraph} />
              </p>
            ))}
          </motion.div>

          <motion.aside className={styles.notes} aria-label="At a glance" {...rise(0.22)}>
            <dl>
              <div>
                <dt>Based in</dt>
                <dd>
                  {profile.location}
                  <br />
                  {profile.citizenship}
                </dd>
              </div>
              <div>
                <dt>Currently</dt>
                <dd>Senior Frontend Developer, Acumen Online</dd>
              </div>
              <div>
                <dt>Reach me</dt>
                <dd>
                  <a href={`mailto:${profile.email}`}>{profile.email}</a>
                  <br />
                  <a href={profile.links.linkedin.href}>{profile.links.linkedin.label}</a>
                  <br />
                  <a href={profile.links.github.href}>{profile.links.github.label}</a>
                </dd>
              </div>
            </dl>
          </motion.aside>
        </div>
      </div>
    </section>
  )
}
