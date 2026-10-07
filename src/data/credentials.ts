export interface Certification {
  issuer: string
  items: string[]
}

export interface Degree {
  degree: string
  school: string
  years: string
}

export const certifications: Certification[] = [
  {
    issuer: 'Microsoft',
    items: [
      'Dynamics 365 Business Central Developer Associate',
      'Power Platform Fundamentals (PL-900)',
    ],
  },
  {
    issuer: 'Anthropic',
    items: [
      '7 certificates of completion across Claude Code, Claude Platform, Agent Skills, and AI Fluency',
    ],
  },
]

export const education: Degree[] = [
  {
    degree: 'Master’s Degree, Computer and Information Sciences',
    school: 'Auckland University of Technology',
    years: '2014 – 2015',
  },
  {
    degree: 'BSc, Computer Software Engineering',
    school: 'Asia Pacific University of Technology and Innovation (APU/APIIT)',
    years: '2009 – 2012',
  },
]
