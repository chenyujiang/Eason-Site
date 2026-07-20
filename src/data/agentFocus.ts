export interface FocusNode {
  id: string
  label: string
  angle: number
  description: string
}

export const focusNodes: FocusNode[] = [
  {
    id: 'delegation',
    label: 'Delegation',
    angle: -90,
    description:
      'Deciding what to hand to an agent versus what stays human — from trigger-driven automation that removes manual busywork, to fully autonomous multi-step agents that plan and act on their own.',
  },
  {
    id: 'description',
    label: 'Description',
    angle: 0,
    description:
      'Giving agents the context they need to act well: project-aware Claude workflows, custom skills, hooks, and slash commands authored for each codebase.',
  },
  {
    id: 'discernment',
    label: 'Discernment',
    angle: 90,
    description:
      'Judging agent output critically before it ships — the difference between augmentation that amplifies judgement and automation that quietly gets it wrong.',
  },
  {
    id: 'diligence',
    label: 'Diligence',
    angle: 180,
    description:
      'Staying accountable for what agents produce: composing specialised agent teams and MCP integrations, then verifying the result against real requirements.',
  },
]

export const focusIntro =
  'Grounded in Anthropic’s AI Fluency: Framework & Foundations, the 4D model shapes how AI gets deployed across the full implementation spectrum — automation, augmentation, and agency.'
