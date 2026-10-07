import { lazy, Suspense, useEffect, useRef } from 'react'
import { useReducedMotion } from './hooks/useReducedMotion'
import { useHashRoute } from './hooks/useHashRoute'
import { SiteHeader } from './components/SiteHeader/SiteHeader'
import { Footer } from './components/Footer/Footer'
import { HomePage } from './pages/HomePage'

const SystemDesignPage = lazy(() => import('./pages/SystemDesignPage'))
const FrontendDesignPage = lazy(() => import('./pages/FrontendDesignPage'))
const AiWorkflowPage = lazy(() => import('./pages/AiWorkflowPage'))

const TITLES = {
  '/': 'Eason Chen — Senior Frontend Developer',
  '/system-design': 'System Design: Scale from Zero to Millions — Eason Chen',
  '/frontend-system-design': 'Frontend System Design — Eason Chen',
  '/ai-workflow': 'AI Workflow — Eason Chen',
} as const

function App() {
  const reducedMotion = useReducedMotion()
  const { path, section } = useHashRoute()
  const mainRef = useRef<HTMLElement>(null)
  const previousPath = useRef(path)

  useEffect(() => {
    document.title = TITLES[path]
    if (previousPath.current === path) return
    previousPath.current = path
    // New page: start at the top and move focus so screen readers announce it.
    if (!section) window.scrollTo(0, 0)
    mainRef.current?.focus({ preventScroll: true })
  }, [path, section])

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <SiteHeader currentPath={path} />
      <main id="main-content" ref={mainRef} tabIndex={-1} className="site-main">
        {path === '/' && <HomePage section={section} reducedMotion={reducedMotion} />}
        <Suspense fallback={null}>
          {path === '/system-design' && (
            <SystemDesignPage section={section} reducedMotion={reducedMotion} />
          )}
          {path === '/frontend-system-design' && (
            <FrontendDesignPage section={section} reducedMotion={reducedMotion} />
          )}
          {path === '/ai-workflow' && (
            <AiWorkflowPage section={section} reducedMotion={reducedMotion} />
          )}
        </Suspense>
      </main>
      <Footer />
    </>
  )
}

export default App
