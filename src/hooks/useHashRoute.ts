import { useSyncExternalStore } from 'react'
import { isRoutePath, type RoutePath } from '../routes'

export interface HashRoute {
  path: RoutePath
  section: string | null
}

// Only hashes shaped like "#/..." are routes. Plain anchors such as the
// skip link's "#main-content" leave the current route in place.
let lastRouteHash = '#/'

function getSnapshot(): string {
  const { hash } = window.location
  if (hash === '' || hash === '#') lastRouteHash = '#/'
  else if (hash.startsWith('#/')) lastRouteHash = hash
  return lastRouteHash
}

function subscribe(onChange: () => void) {
  window.addEventListener('hashchange', onChange)
  return () => window.removeEventListener('hashchange', onChange)
}

function parse(hash: string): HashRoute {
  const segments = hash.slice(2).split('/').filter(Boolean)
  const [first, second] = segments
  const asPage = `/${first ?? ''}`

  if (isRoutePath(asPage)) {
    return { path: asPage, section: second ?? null }
  }
  // "#/experience" — a section on the profile page
  return { path: '/', section: first ?? null }
}

export function useHashRoute(): HashRoute {
  const hash = useSyncExternalStore(subscribe, getSnapshot, () => '#/')
  return parse(hash)
}
