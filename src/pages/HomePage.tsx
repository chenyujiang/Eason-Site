import { useScrollToSection } from '../hooks/useScrollToSection'
import { HomeNav } from '../components/HomeNav/HomeNav'
import { Hero } from '../components/Hero/Hero'
import { Platforms } from '../components/Platforms/Platforms'
import { Experience } from '../components/Experience/Experience'
import { Skills } from '../components/Skills/Skills'
import { Credentials } from '../components/Credentials/Credentials'
import { Contact } from '../components/Contact/Contact'
import styles from './HomePage.module.css'

const NAV_ITEMS = [
  { id: 'about', label: 'About' },
  { id: 'platforms', label: 'Platforms' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'credentials', label: 'Credentials' },
  { id: 'contact', label: 'Contact' },
] as const

interface HomePageProps {
  section: string | null
  reducedMotion: boolean
}

export function HomePage({ section, reducedMotion }: HomePageProps) {
  useScrollToSection(section, reducedMotion)

  return (
    <div className={styles.page}>
      <HomeNav items={NAV_ITEMS} />
      <Hero reducedMotion={reducedMotion} />
      <Platforms reducedMotion={reducedMotion} />
      <Experience />
      <Skills />
      <Credentials />
      <Contact />
    </div>
  )
}
