export interface SkillGroup {
  id: string
  label: string
  skills: string[]
  /** Skills worth calling out with a highlighter mark. */
  core?: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    id: 'frontend',
    label: 'Frontend',
    core: ['React.js', 'Next.js', 'TypeScript'],
    skills: [
      'React.js',
      'Next.js',
      'TypeScript',
      'JavaScript (ES6+)',
      'Vue.js',
      'AngularJS',
      'HTML5',
      'CSS3',
      'SCSS',
      'LESS',
      'Tailwind CSS',
      'Bootstrap',
      'jQuery',
      'Responsive UI',
    ],
  },
  {
    id: 'ai',
    label: 'AI-Augmented Engineering',
    core: ['Claude Code'],
    skills: [
      'Claude Code',
      'Spec-driven agent workflow',
      'Multi-agent / sub-agent design',
      'Custom skills, hooks & slash commands',
      'MCP server integrations',
      'Prompt engineering',
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    skills: ['Node.js', 'Python', 'PHP', 'MVC architecture', 'REST & third-party API integration'],
  },
  {
    id: 'data',
    label: 'Databases & Data',
    skills: ['MSSQL', 'MySQL', 'GraphQL', 'SQLite'],
  },
  {
    id: 'testing',
    label: 'Testing',
    skills: ['Component & end-to-end testing', 'Vitest', 'Playwright', 'Test-driven development'],
  },
  {
    id: 'cloud',
    label: 'Cloud & DevOps',
    skills: ['Azure', 'AWS', 'Docker', 'CI/CD & automated deployment', 'Azure DevOps'],
  },
  {
    id: 'platforms',
    label: 'Platforms & E-commerce',
    skills: [
      'DNN (DotNetNuke)',
      'Magento 1 & 2',
      'WordPress / WooCommerce',
      'OpenCart',
      'nopCommerce',
      'Shopify (Liquid)',
      'Odoo (learning)',
      'React Native / Expo',
    ],
  },
  {
    id: 'enterprise',
    label: 'Enterprise & Reporting',
    skills: [
      'Dynamics 365 Business Central (AL)',
      'Power Automate',
      'Power Apps',
      'Power Pages',
      'Power BI (AI-accelerated report delivery)',
    ],
  },
  {
    id: 'practice',
    label: 'Leadership, Tools & Practices',
    skills: [
      'Frontend architecture & standards',
      'Mentoring & code review',
      'Stakeholder / PM communication',
      'Git',
      'Vite',
      'webpack',
    ],
  },
]
