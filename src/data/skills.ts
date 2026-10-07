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
      'Multi-agent workflow design',
      'Custom skills, hooks & slash commands',
      'MCP server integrations',
      'Prompt engineering',
      'AI-assisted upskilling',
    ],
  },
  {
    id: 'backend',
    label: 'Backend & Data',
    skills: ['Python', 'PHP', 'MySQL', 'MVC architecture', 'REST & third-party API integration'],
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
      'Power BI',
    ],
  },
  {
    id: 'practice',
    label: 'Leadership & Practice',
    skills: [
      'Frontend architecture & standards',
      'Mentoring & code review',
      'Stakeholder / PM communication',
      'Git',
      'Azure DevOps',
      'Vite',
      'webpack',
      'CI/CD & automated deployment',
    ],
  },
]
