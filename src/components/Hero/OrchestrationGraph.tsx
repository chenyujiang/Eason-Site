import { useMemo, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { focusNodes } from '../../data/agentFocus'
import styles from './OrchestrationGraph.module.css'

interface OrchestrationGraphProps {
  size?: number
  variant?: 'hero' | 'compact'
  reducedMotion: boolean
  activeId?: string | null
  onNodeHover?: (id: string | null) => void
}

const toRad = (deg: number) => (deg * Math.PI) / 180

export function OrchestrationGraph({
  size = 480,
  variant = 'hero',
  reducedMotion,
  activeId = null,
  onNodeHover,
}: OrchestrationGraphProps) {
  const wrapRef = useRef<HTMLDivElement>(null)
  const [hovered, setHovered] = useState<string | null>(null)
  const active = activeId ?? hovered

  const cx = size / 2
  const cy = size / 2
  const radius = size * 0.32
  const nodeR = variant === 'hero' ? size * 0.028 : size * 0.034
  const centerR = variant === 'hero' ? size * 0.05 : size * 0.06

  const nodes = useMemo(
    () =>
      focusNodes.map((n) => ({
        ...n,
        x: cx + radius * Math.cos(toRad(n.angle)),
        y: cy + radius * Math.sin(toRad(n.angle)),
      })),
    [cx, cy, radius],
  )

  const pointerX = useMotionValue(0)
  const pointerY = useMotionValue(0)
  const springX = useSpring(pointerX, { stiffness: 60, damping: 18 })
  const springY = useSpring(pointerY, { stiffness: 60, damping: 18 })
  const rotateX = useTransform(springY, [-1, 1], [6, -6])
  const rotateY = useTransform(springX, [-1, 1], [-6, 6])

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (reducedMotion || variant !== 'hero') return
    const rect = wrapRef.current?.getBoundingClientRect()
    if (!rect) return
    pointerX.set(((e.clientX - rect.left) / rect.width) * 2 - 1)
    pointerY.set(((e.clientY - rect.top) / rect.height) * 2 - 1)
  }

  const handlePointerLeave = () => {
    pointerX.set(0)
    pointerY.set(0)
  }

  const setActive = (id: string | null) => {
    setHovered(id)
    onNodeHover?.(id)
  }

  return (
    <div
      ref={wrapRef}
      className={styles.wrap}
      style={{ perspective: 1200 }}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <motion.div
        style={
          variant === 'hero' && !reducedMotion ? { rotateX, rotateY } : undefined
        }
      >
        <svg
          viewBox={`0 0 ${size} ${size}`}
          width="100%"
          height="100%"
          role="img"
          aria-label="Diagram of the 4D model — Delegation, Description, Discernment, Diligence — orbiting Eason Chen"
        >
          <circle
            cx={cx}
            cy={cy}
            r={radius}
            fill="none"
            stroke="var(--hairline)"
            strokeWidth={1}
            strokeDasharray="2 6"
          />

          {nodes.map((n) => {
            const isActive = active === n.id
            return (
              <motion.line
                key={`line-${n.id}`}
                x1={cx}
                y1={cy}
                x2={n.x}
                y2={n.y}
                stroke={isActive ? 'var(--accent-amber)' : 'var(--accent-cyan)'}
                strokeWidth={isActive ? 2 : 1}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{
                  pathLength: 1,
                  opacity: reducedMotion ? 0.6 : isActive ? 0.9 : [0.25, 0.55, 0.25],
                }}
                transition={
                  reducedMotion
                    ? { duration: 0.01 }
                    : isActive
                      ? { duration: 0.01 }
                      : {
                          pathLength: { duration: 1, ease: 'easeOut' },
                          opacity: { duration: 3.2, repeat: Infinity, ease: 'easeInOut' },
                        }
                }
              />
            )
          })}

          {!reducedMotion && (
            <g className={styles.orbitGroup} style={{ transformOrigin: `${cx}px ${cy}px` }}>
              <circle cx={cx + radius} cy={cy} r={3} fill="var(--accent-amber)" />
            </g>
          )}

          <circle cx={cx} cy={cy} r={centerR} fill="var(--surface-raised)" stroke="var(--accent-cyan)" strokeWidth={1.5} />
          <text
            x={cx}
            y={cy + (variant === 'hero' ? 5 : 4)}
            textAnchor="middle"
            className={styles.centerLabel}
          >
            EC
          </text>

          {nodes.map((n) => {
            const isActive = active === n.id
            return (
              <g
                key={n.id}
                className={styles.node}
                onPointerEnter={() => setActive(n.id)}
                onPointerLeave={() => setActive(null)}
                onFocus={() => setActive(n.id)}
                onBlur={() => setActive(null)}
                tabIndex={0}
                aria-label={n.label}
              >
                <circle
                  cx={n.x}
                  cy={n.y}
                  r={nodeR + (isActive ? 3 : 0)}
                  fill={isActive ? 'var(--accent-amber)' : 'var(--surface-raised)'}
                  stroke={isActive ? 'var(--accent-amber)' : 'var(--accent-cyan)'}
                  strokeWidth={1.5}
                  style={{ transition: 'r 160ms var(--ease-out), fill 160ms var(--ease-out)' }}
                />
                <text
                  x={n.x}
                  y={n.y + nodeR + (variant === 'hero' ? 18 : 16)}
                  textAnchor="middle"
                  className={isActive ? styles.nodeLabelActive : styles.nodeLabel}
                >
                  {n.label}
                </text>
              </g>
            )
          })}
        </svg>
      </motion.div>
    </div>
  )
}
