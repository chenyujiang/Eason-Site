import { useReducedMotion } from './hooks/useReducedMotion'
import { Hero } from './components/Hero/Hero'
import { StatusReadout } from './components/StatusReadout/StatusReadout'
import { SkillsPanel } from './components/Skills/SkillsPanel'
import { AgentFocusSection } from './components/AgentFocus/AgentFocusSection'
import { ExperienceLog } from './components/Experience/ExperienceLog'
import { CertBadges } from './components/Certifications/CertBadges'
import { InterestsStrip } from './components/Interests/InterestsStrip'
import { ContactTerminal } from './components/Contact/ContactTerminal'
import { Footer } from './components/Footer/Footer'

function App() {
  const reducedMotion = useReducedMotion()

  return (
    <>
      <main>
        <Hero reducedMotion={reducedMotion} />
        <StatusReadout reducedMotion={reducedMotion} />
        <SkillsPanel reducedMotion={reducedMotion} />
        <AgentFocusSection reducedMotion={reducedMotion} />
        <ExperienceLog reducedMotion={reducedMotion} />
        <CertBadges reducedMotion={reducedMotion} />
        <InterestsStrip />
        <ContactTerminal reducedMotion={reducedMotion} />
      </main>
      <Footer reducedMotion={reducedMotion} />
    </>
  )
}

export default App
