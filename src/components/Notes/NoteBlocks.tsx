import type { Block } from '../../data/notes'
import { Marked } from '../Marked/Marked'
import styles from './NoteBlocks.module.css'

function NoteBlock({ block }: { block: Block }) {
  switch (block.kind) {
    case 'p':
      return (
        <p className={styles.p}>
          <Marked text={block.text} />
        </p>
      )
    case 'h3':
      return <h3 className={styles.h3}>{block.text}</h3>
    case 'list': {
      const List = block.ordered ? 'ol' : 'ul'
      return (
        <List className={block.ordered ? styles.ordered : styles.list}>
          {block.items.map((item) => (
            <li key={item}>
              <Marked text={item} />
            </li>
          ))}
        </List>
      )
    }
    case 'defs':
      return (
        <dl className={styles.defs}>
          {block.items.map((item) => (
            <div key={item.term}>
              <dt>{item.term}</dt>
              <dd>
                <Marked text={item.text} />
              </dd>
            </div>
          ))}
        </dl>
      )
    case 'table':
      return (
        <div className={styles.tableWrap} role="region" aria-label={block.caption} tabIndex={0}>
          <table className={styles.table}>
            <caption>{block.caption}</caption>
            <thead>
              <tr>
                {block.head.map((cell) => (
                  <th key={cell} scope="col">
                    {cell}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row) => (
                <tr key={row[0]}>
                  {row.map((cell, i) =>
                    i === 0 ? (
                      <th key={i} scope="row">
                        {cell}
                      </th>
                    ) : (
                      <td key={i}>{cell}</td>
                    ),
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
    case 'callout':
      return (
        <aside className={styles.callout}>
          <p className={styles.calloutLabel}>{block.label}</p>
          <p>
            <Marked text={block.text} />
          </p>
        </aside>
      )
  }
}

export function NoteBlocks({ blocks }: { blocks: Block[] }) {
  return (
    <div className={styles.blocks}>
      {blocks.map((block, i) => (
        <NoteBlock key={i} block={block} />
      ))}
    </div>
  )
}
