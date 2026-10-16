export interface Role {
  title: string
  period: string
  bullets: string[]
}

export interface ExperienceEntry {
  id: string
  company: string
  period: string
  roles: Role[]
}

export const experience: ExperienceEntry[] = [
  {
    id: 'acumen',
    company: 'Acumen Online Ltd',
    period: 'Jul 2019 – Present',
    roles: [
      {
        title: 'Senior Frontend Developer',
        period: 'Oct 2021 – Present',
        bullets: [
          'Own frontend and technical architecture across all client projects as the sole senior frontend engineer, partnering directly with project managers to shape solutions, set standards, and resolve issues.',
          'Designed a reusable application skin framework that standardised frontend development, reduced duplicated effort, and accelerated delivery across multiple DNN implementations.',
          'Deliver client e-commerce builds across DNN, nopCommerce, and Shopify — nopCommerce themes and plugins, Shopify Liquid themes, and third-party API integrations.',
          'Architecting an internal delivery platform from the ground up with Next.js, React, TypeScript, and Tailwind CSS — task logging, project and test management, resourcing, and time tracking.',
          'Built an AI-assisted documentation platform in Python that converts PDF, DOCX, and PPTX into Markdown for MkDocs, with a Flask layer for authentication and category-level access control.',
          'Designed a spec-driven AI development workflow on Claude Code — agent skills, sub-agents, hooks, and MCP integrations — where each feature goes through a requirements interview, is recorded as decisions and a written spec, and is split into small tasks an agent can complete and verify on its own.',
          'Enforce quality gates inside that workflow: every task is built test-first, every change is reviewed against both the coding standards and the spec, and session retrospectives feed fixes back into project instructions, docs, and tooling.',
          'Used the same AI-assisted approach to pick up Power BI with no formal BI background, delivering semantic models, DAX measures, and Power Query transformations.',
          'Extend into the Microsoft ecosystem (Business Central AL extensions, Power Automate, Power Pages) and maintain a React Native app via Expo.',
          'Mentored and code-reviewed two junior developers while the team was at full strength.',
        ],
      },
      {
        title: 'Frontend Developer',
        period: 'Jul 2019 – Oct 2021',
        bullets: [
          'Led frontend development from the ground up for the multi-tenant SaaS e-commerce product (AngularJS), letting clients self-provision subscription storefronts on a shared platform-plus-plugin architecture.',
          'Developed B2B and B2C e-commerce solutions on DNN with pixel-accurate, tailored storefronts for enterprise clients.',
          'Built reusable components and interactive modules in Vue.js, AngularJS, React.js, and TypeScript.',
        ],
      },
    ],
  },
  {
    id: 'ora',
    company: 'Ora International Trading Limited',
    period: 'Jan 2018 – Jun 2019',
    roles: [
      {
        title: 'Full Stack Developer',
        period: 'Jan 2018 – Jun 2019',
        bullets: [
          'Built a custom ERP, CRM, and e-commerce platform from the ground up for an import/export retailer with seven Auckland stores and several hundred reseller agents.',
          'Delivered shelf- and bin-level warehouse inventory, supply-chain management, pricing, sales-driven stock allocation, inter-store transfers, and in-store POS.',
          'Extended OpenCart into a multi-tenant agent storefront: tiered pricing per agent, agent-managed customer tiers, ordering on customers’ behalf, and scheduled promotion sync.',
          'Owned frontend architecture end-to-end, establishing coding standards and a webpack build with automated deployment.',
          'Restructured the database for scalability and integrated third-party APIs, including POS.',
        ],
      },
    ],
  },
  {
    id: 'craftdog',
    company: 'Craftdog',
    period: 'Jan 2017 – Dec 2017',
    roles: [
      {
        title: 'Full Stack Developer',
        period: 'Jan 2017 – Dec 2017',
        bullets: [
          'Developed and maintained WordPress / WooCommerce, OpenCart, and Magento sites, building custom themes and plugins across PHP, MySQL, and JavaScript.',
        ],
      },
    ],
  },
  {
    id: 'moustache-republic',
    company: 'Moustache Republic',
    period: 'Apr 2016 – Dec 2016',
    roles: [
      {
        title: 'Web Developer',
        period: 'Apr 2016 – Dec 2016',
        bullets: [
          'Delivered Magento 1 & 2 theme and plugin development, upgrades, and maintenance with pixel-perfect responsive designs.',
        ],
      },
    ],
  },
  {
    id: '3a-print',
    company: '3A Print',
    period: 'Aug 2015 – Mar 2016',
    roles: [
      {
        title: 'Full Stack Developer',
        period: 'Aug 2015 – Mar 2016',
        bullets: [
          'Built custom WordPress themes, plugins, and WooCommerce stores, plus OpenCart themes, from supplied designs.',
          'Owned server, domain, and email administration for client sites.',
        ],
      },
    ],
  },
]
