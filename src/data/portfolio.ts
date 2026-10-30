export interface Project {
  name: string
  category: string
  description: string
  highlights: string[]
  tags: string[]
  url: string
  image: string
  /** Background behind the artwork so each screenshot reads cleanly */
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
    surface: 'bg-brand-50',
  },
]
