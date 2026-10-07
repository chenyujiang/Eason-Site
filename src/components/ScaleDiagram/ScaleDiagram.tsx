import { useId } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { diagramEdges, diagramNodes, finalStage, stages, type DiagramNode } from '../../data/systemDesign'
import styles from './ScaleDiagram.module.css'

interface ScaleDiagramProps {
  stage: number
  reducedMotion: boolean
}

const visibleAt = (stage: number) => (item: { from: number; until?: number }) =>
  item.from <= stage && (item.until === undefined || stage < item.until)

function Node({ node, isNew }: { node: DiagramNode; isNew: boolean }) {
  const cx = node.x + node.w / 2

  if (node.kind === 'note') {
    return (
      <text x={cx} y={node.y + 14} textAnchor="middle" className={styles.note}>
        {node.label}
      </text>
    )
  }

  if (node.kind === 'frame') {
    return (
      <>
        <rect x={node.x + 6} y={node.y + 6} width={node.w} height={node.h} rx={8} className={styles.frameBack} />
        <rect x={node.x} y={node.y} width={node.w} height={node.h} rx={8} className={styles.frame} />
        <text x={node.x + 10} y={node.y + node.h + 20} className={styles.frameLabel}>
          {node.label}
          {node.sub && <tspan className={styles.note}> · {node.sub}</tspan>}
        </text>
      </>
    )
  }

  const labelY = node.sub ? node.y + node.h / 2 - 3 : node.y + node.h / 2 + 4
  return (
    <>
      <rect
        x={node.x}
        y={node.y}
        width={node.w}
        height={node.h}
        rx={4}
        className={isNew ? styles.boxNew : styles.box}
      />
      <text x={cx} y={labelY} textAnchor="middle" className={styles.label}>
        {node.label}
      </text>
      {node.sub && (
        <text x={cx} y={labelY + 14} textAnchor="middle" className={styles.sub}>
          {node.sub}
        </text>
      )}
    </>
  )
}

export function ScaleDiagram({ stage, reducedMotion }: ScaleDiagramProps) {
  // Unique per instance: several diagrams can be on the page at once.
  const arrowId = useId()
  const nodes = diagramNodes.filter(visibleAt(stage))
  const edges = diagramEdges.filter(visibleAt(stage))
  const added = nodes.filter((n) => n.from === stage && n.kind !== 'note')
  const fade = reducedMotion
    ? { initial: false as const, animate: { opacity: 1 }, exit: { opacity: 0, transition: { duration: 0 } } }
    : {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] as const },
      }

  return (
    <figure className={styles.figure}>
      <svg
        viewBox="0 0 480 462"
        className={styles.svg}
        role="img"
        aria-label={`Architecture after step ${stage}: ${stages[stage - 1].title}. Components: ${nodes
          .filter((n) => n.kind !== 'note' && n.kind !== 'frame')
          .map((n) => n.label)
          .join(', ')}.`}
      >
        <defs>
          <marker id={arrowId} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" className={styles.arrowHead} />
          </marker>
        </defs>
        <AnimatePresence>
          {edges.map((edge) => {
            const [x1, y1, x2, y2] = edge.points
            return (
              <motion.line
                key={edge.id}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                className={styles.edge}
                markerEnd={`url(#${arrowId})`}
                {...fade}
              />
            )
          })}
          {nodes.map((node) => (
            <motion.g key={node.id} {...fade}>
              <Node node={node} isNew={node.from === stage && stage > 1} />
            </motion.g>
          ))}
        </AnimatePresence>
      </svg>
      <figcaption className={styles.caption}>
        <span className={styles.step}>
          Step {stage} of {finalStage}
        </span>
        {stage > 1 && added.length > 0 && (
          <span>
            <span className={styles.swatch} aria-hidden="true" /> Added: {[...new Set(added.map((n) => n.label))].join(', ')}
          </span>
        )}
      </figcaption>
    </figure>
  )
}
