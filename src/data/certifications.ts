export interface CertGroup {
  issuer: string
  items: string[]
}

export const certifications: CertGroup[] = [
  {
    issuer: 'Microsoft',
    items: [
      'Dynamics 365 Business Central Developer Associate',
      'Power Platform Fundamentals (PL-900)',
    ],
  },
  {
    issuer: 'Anthropic / Claude',
    items: [
      'AI Fluency — Framework & Foundations',
      'Claude 101',
      'Claude Code 101',
      'Claude Code in Action',
      'Claude Platform 101',
      'Introduction to Claude Cowork',
      'Introduction to Agent Skills',
    ],
  },
]

export const totalCertifications = certifications.reduce(
  (sum, group) => sum + group.items.length,
  0,
)

export const interests = [
  'AI Automation & Agent Development',
  'Business Intelligence & Data Analytics',
  'Microsoft Business Applications',
  'Enterprise E-Commerce Architecture',
  'Modern Web Engineering',
]
