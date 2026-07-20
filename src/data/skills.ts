export interface SkillCategory {
  id: string
  label: string
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'microsoft-data',
    label: 'Microsoft & Data',
    skills: [
      'Dynamics 365 Business Central (AL)',
      'Power BI (Semantic Models, DAX, Power Query)',
      'Power Automate',
      'Power Apps',
      'Power Pages',
    ],
  },
  {
    id: 'ai-automation',
    label: 'AI & Automation',
    skills: [
      'Claude (skills, hooks, slash commands, agent teams, MCP)',
      'Multi-agent workflow design',
      'LLM-based automation',
      'Prompt engineering',
      'AI Fluency: Framework & Foundations',
    ],
  },
  {
    id: 'frontend',
    label: 'Frontend',
    skills: [
      'JavaScript / TypeScript',
      'React.js',
      'Vue.js',
      'AngularJS',
      'DNN (DotNetNuke)',
      'HTML / CSS',
      'Responsive UI',
    ],
  },
  {
    id: 'backend-integration',
    label: 'Backend & Integration',
    skills: [
      'PHP',
      'MySQL',
      'Node.js',
      'REST APIs',
      'Third-party API integration',
      'Multi-tenant system design',
    ],
  },
  {
    id: 'data-analytics',
    label: 'Data & Analytics',
    skills: [
      'SQL',
      'Python (Pandas)',
      'Dimensional modelling',
      'ETL/ELT',
      'Data quality & governance',
    ],
  },
  {
    id: 'tools-devops',
    label: 'Tools & DevOps',
    skills: ['Azure DevOps', 'Git', 'Jira', 'Agile / Scrum'],
  },
]
