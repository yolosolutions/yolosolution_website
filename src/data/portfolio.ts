export interface Project {
  name: string
  category: string
  description: string
  url?: string
  live: boolean
}

export const projects: Project[] = [
  // {
  //   name: 'Aarav Interiors',
  //   category: 'Business Website',
  //   description:
  //     'A warm, image-led site for a home interiors studio, built to showcase past projects and drive consultation bookings.',
  //   url: 'https://example.com',
  //   live: true,
  // },
  // {
  //   name: 'Nimbus Fitness Studio',
  //   category: 'Business Website',
  //   description:
  //     'A bold, energetic website for a boutique gym, with class schedules, trainer profiles, and membership signup.',
  //   url: 'https://example.com',
  //   live: true,
  // },
  // {
  //   name: 'Priya Kapoor — Photographer',
  //   category: 'Portfolio Website',
  //   description:
  //     'A minimal, gallery-first portfolio built to let photography do the talking, with fast-loading image grids.',
  //   url: 'https://example.com',
  //   live: true,
  // },
  // {
  //   name: 'LaunchPad SaaS',
  //   category: 'Landing Page',
  //   description:
  //     'A conversion-focused landing page for an early-stage SaaS product, built to turn visitors into demo signups.',
  //   live: false,
  // },
  // {
  //   name: 'Spice Route Café',
  //   category: 'Business Website',
  //   description:
  //     'A friendly, menu-first website for a local café, with online ordering links and location details.',
  //   live: false,
  // },
  {
    name: 'Navigate Aviation Academy',
    category: 'Business Website',
    description:
      'A multi-section site for an aviation training institute in Trichy, covering courses, trainers, and student success stories, with a built-in enrollment form to convert visitors into applicants.',
    url: 'https://navigateaviationacademy.com/',
    live: true,
  },
  {
    name: 'Voyage Enterprises',
    category: 'Landing Page',
    description:
      'A conversion-focused landing page for a business finance company, built around a clear funding pitch, trust stats, and one-tap WhatsApp / call-to-apply for fast loan enquiries.',
    url: 'https://voyagenterprises.com/',
    live: true,
  },
]
