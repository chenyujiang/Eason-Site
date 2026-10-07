import { routes, hrefFor, type RoutePath } from '../../routes'
import styles from './SiteHeader.module.css'

interface SiteHeaderProps {
  currentPath: RoutePath
}

export function SiteHeader({ currentPath }: SiteHeaderProps) {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <a href={hrefFor('/')} className={styles.brand}>
          <span className={styles.monogram} aria-hidden="true">
            EC
          </span>
          <span>Eason Chen</span>
        </a>
        <nav aria-label="Site" className={styles.navWrap}>
          <ul className={styles.nav}>
            {routes.map((route) => {
              const current = route.path === currentPath
              return (
                <li key={route.path}>
                  <a
                    href={hrefFor(route.path)}
                    className={styles.link}
                    aria-current={current ? 'page' : undefined}
                  >
                    <span className={styles.full}>{route.label}</span>
                    <span className={styles.short} aria-hidden="true">
                      {route.short}
                    </span>
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </header>
  )
}
