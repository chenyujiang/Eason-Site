import { useScrollToSection } from '../hooks/useScrollToSection'
import { Hero } from '../components/Hero/Hero'
import { Platforms } from '../components/Platforms/Platforms'
import { Experience } from '../components/Experience/Experience'
import { Skills } from '../components/Skills/Skills'
import { Credentials } from '../components/Credentials/Credentials'
import { Notebook } from '../components/Notebook/Notebook'
import { Contact } from '../components/Contact/Contact'

interface HomePageProps {
  section: string | null
  reducedMotion: boolean
}

export function HomePage({ section, reducedMotion }: HomePageProps) {
  useScrollToSection(section, reducedMotion)

  return (
    <>
      <Hero reducedMotion={reducedMotion} />
      <Platforms reducedMotion={reducedMotion} />
      <Experience />
      <Skills />
      <Credentials />
      <Notebook />
      <Contact />
    </>
  )
}
