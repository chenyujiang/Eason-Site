import { skillGroups } from '../../data/skills'
import { Section } from '../Section/Section'
import styles from './Skills.module.css'

export function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="What I work with">
      <div className={styles.grid}>
        {skillGroups.map((group) => (
          <section key={group.id} className={styles.group} aria-labelledby={`skills-${group.id}`}>
            <h3 id={`skills-${group.id}`} className={styles.label}>
              {group.label}
            </h3>
            <ul className={styles.list}>
              {group.skills.map((skill) => (
                <li key={skill}>
                  {group.core?.includes(skill) ? <mark className="mark">{skill}</mark> : skill}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </Section>
  )
}
