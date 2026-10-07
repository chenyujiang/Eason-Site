import { NotesLayout } from '../components/Notes/NotesLayout'
import { ScaleDiagram } from '../components/ScaleDiagram/ScaleDiagram'
import { hrefFor } from '../routes'
import {
  stageFor,
  stages,
  systemDesignIntro,
} from '../data/systemDesign'
import styles from './SystemDesignPage.module.css'

/** Sections after the numbered steps get a symbol in the step index. */
const STEP_MARKS: Record<string, string> = { checklist: '✓', cloud: '☁︎' }

interface SystemDesignPageProps {
  section: string | null
  reducedMotion: boolean
}

export default function SystemDesignPage({ section, reducedMotion }: SystemDesignPageProps) {
  return (
    <NotesLayout
      path="/system-design"
      eyebrow="System design"
      title="Scale from zero to millions of users"
      intro={systemDesignIntro}
      sections={stages}
      section={section}
      reducedMotion={reducedMotion}
      numbered
      rail={(activeId) => (
        <div className={styles.rail}>
          <ScaleDiagram stage={stageFor(activeId)} reducedMotion={reducedMotion} />
          <nav aria-label="Steps">
            <ol className={styles.steps}>
              {stages.map((s, i) => (
                <li key={s.id}>
                  <a
                    href={hrefFor('/system-design', s.id)}
                    aria-current={s.id === activeId ? 'location' : undefined}
                    title={s.title}
                  >
                    {STEP_MARKS[s.id] ?? i + 1}
                    <span className="visually-hidden">{s.title}</span>
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </div>
      )}
      sectionLead={(s) => (
        <div className={styles.inlineDiagram}>
          <ScaleDiagram stage={stageFor(s.id)} reducedMotion />
        </div>
      )}
    />
  )
}
