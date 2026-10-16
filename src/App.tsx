import { lazy, Suspense, useEffect, useRef, type ComponentType } from 'react'
import { domAnimation, LazyMotion } from 'framer-motion'
import { useReducedMotion } from './hooks/useReducedMotion'
import { useHashRoute } from './hooks/useHashRoute'
import { SiteHeader } from './components/SiteHeader/SiteHeader'
import { Footer } from './components/Footer/Footer'
import { PageLoadError, PageLoading } from './components/PageStatus/PageStatus'
import { HomePage } from './pages/HomePage'

// A failed chunk download (offline, or a deploy replaced the hashed file)
// resolves to an error page instead of throwing and blanking the whole app.
function lazyPage<P>(load: () => Promise<{ default: ComponentType<P> }>) {
  return lazy(() => load().catch(() => ({ default: PageLoadError as ComponentType<P> })))
}

const SystemDesignPage = lazyPage(() => import('./pages/SystemDesignPage'))
const FrontendDesignPage = lazyPage(() => import('./pages/FrontendDesignPage'))
const AiWorkflowPage = lazyPage(() => import('./pages/AiWorkflowPage'))

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
    // Components use the slim `m` elements; this supplies only the animation
    // features they need, so the full `motion` bundle stays out of the build.
    <LazyMotion features={domAnimation} strict>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <SiteHeader currentPath={path} />
      <main id="main-content" ref={mainRef} tabIndex={-1} className="site-main">
        {path === '/' && <HomePage section={section} reducedMotion={reducedMotion} />}
        <Suspense fallback={<PageLoading />}>
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
    </LazyMotion>
  )
}

export default App
