/**
 * Content model shared by the study-notes pages. Text fields accept
 * `==phrase==` for a highlighter mark.
 */
export type Block =
  | { kind: 'p'; text: string }
  | { kind: 'h3'; text: string }
  | { kind: 'list'; items: string[]; ordered?: boolean }
  | { kind: 'defs'; items: { term: string; text: string }[] }
  | { kind: 'table'; caption: string; head: string[]; rows: string[][] }
  | { kind: 'callout'; label: string; text: string }

export interface NoteSection {
  id: string
  title: string
  blocks: Block[]
}
