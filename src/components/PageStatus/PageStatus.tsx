import { hrefFor } from '../../routes'
import styles from './PageStatus.module.css'

/** Suspense fallback for a notes page; stays invisible on fast loads. */
export function PageLoading() {
  return (
    <div className={`container ${styles.status} ${styles.loading}`} role="status">
      Loading page…
    </div>
  )
}

/**
 * Stands in for a notes page whose chunk failed to download (offline, or a
 * deploy replaced the hashed file). A reload fetches the current build.
 */
export function PageLoadError() {
  return (
    <div className={`container ${styles.status}`} role="alert">
      <h1 className={styles.title}>This page didn't load</h1>
      <p className={styles.body}>
        Check your connection, then reload. The site may also have just been updated.
      </p>
      <div className={styles.actions}>
        <button type="button" className={styles.button} onClick={() => window.location.reload()}>
          Reload page
        </button>
        <a href={hrefFor('/')}>Back to profile</a>
      </div>
    </div>
  )
}
