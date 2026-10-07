import { NotesLayout } from '../components/Notes/NotesLayout'
import { hrefFor } from '../routes'
import { aiWorkflowIntro, aiWorkflowSteps } from '../data/aiWorkflow'
import styles from './AiWorkflowPage.module.css'

interface AiWorkflowPageProps {
  section: string | null
  reducedMotion: boolean
}

const outputFor = new Map(aiWorkflowSteps.map((step) => [step.id, step.output]))

export default function AiWorkflowPage({ section, reducedMotion }: AiWorkflowPageProps) {
  return (
    <NotesLayout
      path="/ai-workflow"
      eyebrow="How I work with coding agents"
      title="From idea to shipped code"
      intro={aiWorkflowIntro}
      sections={aiWorkflowSteps}
      section={section}
      reducedMotion={reducedMotion}
      numbered
      rail={(activeId) => (
        <nav aria-label="Workflow steps">
          <ol className={styles.pipeline}>
            {aiWorkflowSteps.map((step) => (
              <li key={step.id}>
                <a
                  href={hrefFor('/ai-workflow', step.id)}
                  className={styles.stage}
                  aria-current={step.id === activeId ? 'location' : undefined}
                >
                  <span className={styles.stageTitle}>{step.title}</span>
                  <span className={styles.stageOutput}>{step.output}</span>
                </a>
              </li>
            ))}
          </ol>
          <p className={styles.loop}>↺ What you learn feeds the next round</p>
        </nav>
      )}
      sectionLead={(s) => (
        <p className={styles.handoff}>
          <span className={styles.handoffLabel}>Hands on</span> {outputFor.get(s.id)}
        </p>
      )}
    />
  )
}
