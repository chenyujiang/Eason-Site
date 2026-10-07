import { useMemo } from 'react'
import { hrefFor } from '../../routes'
import { useActiveSection } from '../../hooks/useActiveSection'
import styles from './HomeNav.module.css'

export interface HomeNavItem {
  id: string
  label: string
}

interface HomeNavProps {
  items: readonly HomeNavItem[]
}

/** Fixed side rail for jumping between profile sections (wide screens only). */
export function HomeNav({ items }: HomeNavProps) {
  const ids = useMemo(() => items.map((item) => item.id), [items])
  const activeId = useActiveSection(ids)

  return (
    <nav className={styles.rail} aria-label="Profile sections">
      <p className={styles.label}>On this page</p>
      <ol className={styles.list}>
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={hrefFor('/', item.id)}
              className={styles.link}
              aria-current={item.id === activeId ? 'location' : undefined}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  )
}
