export const routes = [
  { path: '/', label: 'Profile', short: 'Profile' },
  { path: '/system-design', label: 'System Design', short: 'System' },
  { path: '/frontend-system-design', label: 'Frontend System Design', short: 'Frontend' },
] as const

export type RoutePath = (typeof routes)[number]['path']

export function isRoutePath(value: string): value is RoutePath {
  return routes.some((route) => route.path === value)
}

/** Builds a hash link, optionally deep-linking to a section on that page. */
export function hrefFor(path: RoutePath, section?: string): string {
  if (!section) return `#${path}`
  return path === '/' ? `#/${section}` : `#${path}/${section}`
}
