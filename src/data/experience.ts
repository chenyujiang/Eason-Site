export type DomainTag = 'Frontend' | 'Backend' | 'BI' | 'AI' | 'E-commerce'

export interface ExperienceEntry {
  id: string
  role: string
  company: string
  period: string
  tags: DomainTag[]
  summary: string
  bullets: string[]
}

export const experience: ExperienceEntry[] = [
  {
    id: 'acumen-senior',
    role: 'Senior Software Engineer (Frontend & Enterprise Applications)',
    company: 'Acumen Online Ltd',
    period: 'Oct 2021 – Present',
    tags: ['Frontend', 'BI', 'AI'],
    summary:
      'Promoted into ownership of frontend architecture, then expanded into full Microsoft ecosystem delivery — Business Central, Power Platform, and Power BI — for a company building B2B and B2C e-commerce on the DNN platform.',
    bullets: [
      'Sole senior frontend engineer across multiple client projects, maintaining and extending DNN-based e-commerce solutions with React, Vue.js, AngularJS, and TypeScript.',
      'Built and upgraded Dynamics 365 Business Central extensions and internal tooling; earned the Microsoft Certified: Dynamics 365 Business Central Developer Associate certification.',
      'Designed end-to-end BI solutions in Power BI — semantic models, DAX measures, Power Query transformations — cleaning and validating source data with Python/Pandas and structuring it with dimensional modelling for high-performance analytics.',
      'Applies AI across the full implementation spectrum (automation → augmentation → agency) using Anthropic’s 4D model: builds project-aware, multi-agent Claude workflows spanning frontend, backend, design, and testing, authoring custom skills, hooks, and slash commands, and integrating MCP servers to connect Claude directly to tools and data.',
      'Manages delivery through Azure DevOps.',
    ],
  },
  {
    id: 'acumen-frontend',
    role: 'Frontend Developer',
    company: 'Acumen Online Ltd',
    period: 'Jul 2019 – Oct 2021',
    tags: ['Frontend'],
    summary:
      'Delivered pixel-accurate, responsive DNN storefronts and reusable interactive modules for e-commerce clients.',
    bullets: [
      'Developed and customised DNN themes and skins to match design specifications precisely.',
      'Built reusable interactive modules using Vue.js, React.js, and AngularJS.',
      'Developed TypeScript-based internal plugins integrated into Azure DevOps pipelines.',
      'Managed development workflows and collaboration through Azure DevOps.',
    ],
  },
  {
    id: 'ora',
    role: 'Full Stack Developer',
    company: 'ORA International Trading Limited',
    period: 'Jan 2018 – Jun 2019',
    tags: ['Backend', 'E-commerce'],
    summary:
      'Led secondary development of a commercial multi-tenant e-commerce platform built on OpenCart, architecting the multi-storefront system underneath it.',
    bullets: [
      'Architected an agent-based storefront system letting agents register, launch sub-storefronts, and run independent online stores under centralised product and module management.',
      'Restructured the database schema to support the extended multi-tenant architecture.',
      'Developed and integrated third-party APIs to extend platform functionality.',
    ],
  },
  {
    id: 'craftdog',
    role: 'Full Stack Developer',
    company: 'Craftdog',
    period: 'Jan 2017 – Dec 2017',
    tags: ['Frontend', 'Backend'],
    summary:
      'Delivered full-stack client work spanning custom WordPress builds and lightweight web applications.',
    bullets: [
      'Built and customised WordPress themes and plugins tailored to client requirements.',
      'Developed lightweight web applications using React.js and Node.js.',
      'Delivered full-stack solutions across HTML, CSS, JavaScript, PHP, and MySQL.',
    ],
  },
  {
    id: 'moustache-republic',
    role: 'Junior Web Developer (Magento)',
    company: 'Moustache Republic',
    period: 'Apr 2016 – Dec 2016',
    tags: ['E-commerce'],
    summary:
      'Started out building pixel-perfect Magento storefronts from design mockups.',
    bullets: [
      'Developed and customised Magento 1 & 2 e-commerce storefronts, matching design mockups precisely.',
      'Built custom Magento modules and performed platform upgrades and patch management.',
      'Worked across HTML, CSS, JavaScript, jQuery, PHP, and MySQL with Git for version control.',
    ],
  },
]
