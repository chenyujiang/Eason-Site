import { NotesLayout } from '../components/Notes/NotesLayout'
import { frontendDesignIntro, frontendSections } from '../data/frontendDesign'

interface FrontendDesignPageProps {
  section: string | null
  reducedMotion: boolean
}

export default function FrontendDesignPage({ section, reducedMotion }: FrontendDesignPageProps) {
  return (
    <NotesLayout
      path="/frontend-system-design"
      eyebrow="Frontend architecture"
      title="Frontend system design"
      intro={frontendDesignIntro}
      sections={frontendSections}
      section={section}
      reducedMotion={reducedMotion}
    />
  )
}
