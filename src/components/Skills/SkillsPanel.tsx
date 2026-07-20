import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { skillCategories } from '../../data/skills'
import styles from './SkillsPanel.module.css'

export function SkillsPanel({ reducedMotion }: { reducedMotion: boolean }) {
  const [activeId, setActiveId] = useState(skillCategories[0].id)
  const active = skillCategories.find((c) => c.id === activeId)!

  return (
    <section className="section">
      <div className="container">
        <span className="eyebrow">Core skills</span>
        <h2 className={styles.heading}>Active modules</h2>

        <div className={styles.tabs} role="tablist" aria-label="Skill categories">
          {skillCategories.map((category) => {
            const isActive = category.id === activeId
            return (
              <button
                key={category.id}
                role="tab"
                aria-selected={isActive}
                className={isActive ? styles.tabActive : styles.tab}
                onClick={() => setActiveId(category.id)}
              >
                <span className={isActive ? styles.ledOn : styles.led} aria-hidden="true" />
                {category.label}
              </button>
            )
          })}
        </div>

        <div className={styles.panel} role="tabpanel">
          <AnimatePresence mode="wait">
            <motion.ul
              key={active.id}
              className={styles.tagList}
              initial={reducedMotion ? undefined : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reducedMotion ? undefined : { opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
            >
              {active.skills.map((skill, i) => (
                <motion.li
                  key={skill}
                  className={styles.tag}
                  initial={reducedMotion ? undefined : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: reducedMotion ? 0 : i * 0.04 }}
                >
                  {skill}
                </motion.li>
              ))}
            </motion.ul>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
