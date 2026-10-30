export interface Project {
  name: string
  category: string
  description: string
  highlights: string[]
  tags: string[]
  /**
   * Live address. Some projects are on temporary *.workers.dev links for now:
   * when a client's real domain goes live, update `url` here and nothing else.
   */
  url: string
  image: string
  /** `artwork` = logo/illustration shown on the card; `screenshot` = page capture shown in a browser frame */
  preview: 'artwork' | 'screenshot'
  /** Background behind the preview so each one reads cleanly */
  surface: string
}

export const projects: Project[] = [
  {
    name: 'Navigate Aviation Academy',
    category: 'Business Website',
    description:
      'A multi-section website for an aviation training institute in Trichy, presenting courses, trainers and student success stories, with a built-in enrollment form that turns visitors into applicants.',
    highlights: ['Course and trainer showcase', 'Student success stories', 'Built-in enrollment form'],
    tags: ['Education', 'Lead generation', 'Responsive'],
    url: 'https://navigateaviationacademy.com/',
    image: '/projects/navigate-aviation-academy.jpg',
    preview: 'artwork',
    surface: 'bg-white',
  },
  {
    name: 'Voyage Enterprises',
    category: 'Landing Page',
    description:
      'A conversion-focused landing page for a business finance company, built around a clear funding pitch, trust indicators and one-tap WhatsApp or call-to-apply for fast loan enquiries.',
    highlights: ['Clear funding pitch', 'Trust stats section', 'One-tap WhatsApp / call to apply'],
    tags: ['Finance', 'Conversion-focused', 'Mobile-first'],
    url: 'https://voyagenterprises.com/',
    image: '/projects/voyage-enterprises.png',
    preview: 'artwork',
    surface: 'bg-brand-50',
  },
  {
    name: 'Venkateshwara Associates',
    category: 'Business Website',
    description:
      'A clear, compliance-minded website for a Chennai business-funding firm, explaining its loan options, funding range and five-step process, with responsible-lending promises and eligibility checks by form or WhatsApp.',
    highlights: ['Loan options and funding range at a glance', 'Five-step process and FAQ', 'Eligibility check and WhatsApp calls to action'],
    tags: ['Finance', 'Trust-focused', 'Lead generation'],
    url: 'https://venkateshwaraassociates.com/',
    image: '/projects/venkateshwara-associates.jpg',
    preview: 'screenshot',
    surface: 'bg-gradient-to-br from-emerald-50 to-brand-50',
  },
  {
    name: 'Mechelle Engineering',
    category: 'Industrial Website',
    description:
      'A trust-first B2B website for an automotive checking-fixtures and jigs manufacturer, presenting its products, six-step process and ISO 9001:2015 certification, with a language switcher and handy tools for engineers and buyers.',
    highlights: ['Product catalogue for car and bike fixtures', 'Drawing-to-delivery process explained', 'Fixture finder, weight calculator and unit converter'],
    tags: ['Manufacturing', 'B2B', 'Multilingual'],
    url: 'https://mechelle-engineering.yolosolutions01-6a6.workers.dev/',
    image: '/projects/mechelle-engineering.jpg',
    preview: 'screenshot',
    surface: 'bg-gradient-to-br from-brand-100 to-ink-100',
  },
  {
    name: 'Sasi Wonder Cakes',
    category: 'Booking Website',
    description:
      'A warm, patisserie-styled website for a Pondicherry home bakery, built around live online baking classes with a weekend schedule, live seat counts and a simple reservation flow with WhatsApp support.',
    highlights: ['Weekend class schedule with live seat counts', 'Three-step seat reservation', 'WhatsApp and Instagram contact'],
    tags: ['Food & classes', 'Online booking', 'Brand-led design'],
    url: 'https://sasi-wonder-cakes.yolosolutions01-6a6.workers.dev/',
    image: '/projects/sasi-wonder-cakes.jpg',
    preview: 'screenshot',
    surface: 'bg-gradient-to-br from-gold-100 to-gold-50',
  },
]
