import { useEffect, useState } from 'react'
import styles from './Footer.module.css'

const CAREER_START = new Date('2016-04-01T00:00:00')
const MS_PER_SECOND = 1000

function formatUptime(ms: number) {
  const totalSeconds = Math.floor(ms / MS_PER_SECOND)
  const years = Math.floor(totalSeconds / (365.25 * 24 * 3600))
  const remAfterYears = totalSeconds - Math.floor(years * 365.25 * 24 * 3600)
  const days = Math.floor(remAfterYears / (24 * 3600))
  const hours = Math.floor((remAfterYears % (24 * 3600)) / 3600)
  const minutes = Math.floor((remAfterYears % 3600) / 60)
  const seconds = remAfterYears % 60
  return `${years}y ${days}d ${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
}

export function Footer({ reducedMotion }: { reducedMotion: boolean }) {
  const [uptime, setUptime] = useState(() => formatUptime(Date.now() - CAREER_START.getTime()))

  useEffect(() => {
    if (reducedMotion) return
    const id = setInterval(() => {
      setUptime(formatUptime(Date.now() - CAREER_START.getTime()))
    }, 1000)
    return () => clearInterval(id)
  }, [reducedMotion])

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <span className={styles.readout}>
          career_uptime: <span className={styles.value}>{uptime}</span>
        </span>
        <span className={styles.copy}>Eason Chen — Auckland, New Zealand</span>
      </div>
    </footer>
  )
}
