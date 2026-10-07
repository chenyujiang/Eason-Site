import type { NoteSection } from './notes'

export interface WorkflowStep extends NoteSection {
  /** What this step hands to the next one. */
  output: string
}

export const aiWorkflowIntro =
  'A coding agent is only as good as the process it follows. Left to guess, it writes code that looks right and slowly makes the codebase worse. So I work in a fixed loop, from idea to shipped code, where ==each step’s output is the next step’s input==. Improving one step improves everything after it.'

export const aiWorkflowSteps: WorkflowStep[] = [
  {
    id: 'talk-it-through',
    title: 'Talk the idea through first',
    output: 'Agreed decisions, written down',
    blocks: [
      {
        kind: 'p',
        text: 'Before any code, the agent questions me about the plan, one question at a time, until there are no fuzzy parts left. What exactly are we building? What happens at the edges? What are we deliberately not doing?',
      },
      {
        kind: 'p',
        text: 'Most bad code starts as a vague idea. Getting questioned exposes the gaps ==while they are still cheap to fix== — in a conversation, not in a pull request.',
      },
      {
        kind: 'callout',
        label: 'Keep',
        text: 'Every decision we settle gets written down, along with the words we agreed to use for things, so the next session doesn’t have to rediscover them.',
      },
    ],
  },
  {
    id: 'write-it-down',
    title: 'Turn the conversation into a plan on paper',
    output: 'A written spec',
    blocks: [
      {
        kind: 'p',
        text: 'Once we agree, the conversation becomes a short written spec: what it should do, how we’ll know it works, and what’s out of scope.',
      },
      {
        kind: 'p',
        text: 'A chat disappears; a document doesn’t. The spec becomes ==the single source of truth== the build and the review are both checked against, so nobody — human or agent — has to remember what was said.',
      },
    ],
  },
  {
    id: 'break-it-up',
    title: 'Cut the plan into small pieces',
    output: 'Small, independent tasks',
    blocks: [
      {
        kind: 'p',
        text: 'The spec is split into small tasks, each one something an agent can finish in a single go and that can be checked on its own.',
      },
      {
        kind: 'list',
        items: [
          'Small tasks keep the agent focused, so it doesn’t wander off or lose track halfway through.',
          'Each piece is easy to review, and easy to throw away if it goes wrong.',
          'Progress is visible: done means done, not “mostly there”.',
        ],
      },
    ],
  },
  {
    id: 'build-test-first',
    title: 'Build it, tests first',
    output: 'Working code with tests',
    blocks: [
      {
        kind: 'p',
        text: 'For each task the agent first writes a test that fails, then writes just enough code to make it pass, then tidies up — and repeats.',
      },
      {
        kind: 'p',
        text: 'The test is the agent’s ==proof that it actually works==, not just a claim that it does. It also stops later changes from quietly breaking what already worked.',
      },
    ],
  },
  {
    id: 'review',
    title: 'Review against the rules and the plan',
    output: 'Fixes, or a green light',
    blocks: [
      {
        kind: 'p',
        text: 'The finished change is reviewed twice over: does it meet our coding standards, and does it actually do what the spec said?',
      },
      {
        kind: 'p',
        text: 'Code can be clean and still build the wrong thing, or do the right thing badly. Checking both catches each kind of mistake ==before it ships==.',
      },
    ],
  },
  {
    id: 'look-back',
    title: 'Look back and improve the setup',
    output: 'A better starting point next time',
    blocks: [
      {
        kind: 'p',
        text: 'After a session, the agent looks back at what went wrong or took too long, and suggests changes to the project’s instructions, docs, and tooling.',
      },
      {
        kind: 'p',
        text: 'This closes the loop. Instead of fixing the same problem every time, ==the environment gets smarter==, so every future session starts from a better place.',
      },
    ],
  },
]
