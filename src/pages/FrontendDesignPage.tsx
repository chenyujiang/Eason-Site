import { NotesLayout } from '../components/Notes/NotesLayout'
import {
  frontendDesignIntro,
  frontendDesignSource,
  frontendSections,
} from '../data/frontendDesign'

interface FrontendDesignPageProps {
  section: string | null
  reducedMotion: boolean
}

export default function FrontendDesignPage({ section, reducedMotion }: FrontendDesignPageProps) {
  return (
    <NotesLayout
      path="/frontend-system-design"
      eyebrow="Frontend system design · Notebook"
      title="Frontend system design"
      intro={frontendDesignIntro}
      source={frontendDesignSource}
      sections={frontendSections}
      section={section}
      reducedMotion={reducedMotion}
    />
  )
}
