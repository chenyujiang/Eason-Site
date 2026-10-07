export interface Platform {
  id: string
  when: string
  name: string
  context: string
  stack: string
  modules: string[]
  status?: string
}

/** The three platform-scale systems built from the ground up, oldest first. */
export const platforms: Platform[] = [
  {
    id: 'ora-erp',
    when: '2018',
    name: 'ERP, CRM & e-commerce platform',
    context: 'Ora International Trading — 7 Auckland retail stores, several hundred reseller agents',
    stack: 'OpenCart · custom MVC · webpack',
    modules: [
      'Warehouse inventory (shelf & bin)',
      'Supply chain & CRM',
      'Stock allocation & transfers',
      'In-store POS',
      'Multi-tenant agent storefronts',
      'Tiered agent pricing',
    ],
  },
  {
    id: 'acumen-saas',
    when: '2019',
    name: 'Multi-tenant SaaS storefront',
    context: 'Acumen Online — clients self-provision subscription storefronts',
    stack: 'AngularJS · platform + plugin architecture',
    modules: [
      'Self-provisioning',
      'Subscription storefronts',
      'Shared platform core',
      'Plugin architecture',
    ],
  },
  {
    id: 'acumen-delivery',
    when: 'Now',
    name: 'Internal delivery platform',
    context: 'Acumen Online — the agency’s own operations tool',
    stack: 'Next.js · React · TypeScript · Tailwind CSS',
    modules: [
      'Client task logging',
      'Project & test management',
      'Resourcing',
      'Time tracking',
    ],
    status: 'In active development',
  },
]
