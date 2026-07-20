import { useState } from 'react'
import { motion } from 'framer-motion'
import { OrchestrationGraph } from '../Hero/OrchestrationGraph'
import { focusIntro, focusNodes } from '../../data/agentFocus'
import styles from './AgentFocusSection.module.css'

export function AgentFocusSection({ reducedMotion }: { reducedMotion: boolean }) {
  const [activeId, setActiveId] = useState<string | null>(null)
  const active = focusNodes.find((n) => n.id === activeId) ?? focusNodes[0]

  return (
    <section className="section">
      <div className="container">
        <span className="eyebrow">How AI gets delegated</span>
        <h2 className={styles.heading}>The 4D model</h2>
        <p className={styles.intro}>{focusIntro}</p>

        <div className={styles.layout}>
          <div className={styles.graphWrap}>
            <OrchestrationGraph
              size={340}
              variant="compact"
              reducedMotion={reducedMotion}
              activeId={activeId}
              onNodeHover={setActiveId}
            />
          </div>

          <motion.div
            key={active.id}
            className={styles.detail}
            initial={reducedMotion ? undefined : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <span className={styles.detailLabel}>{active.label}</span>
            <p className={styles.detailText}>{active.description}</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
