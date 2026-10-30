export interface TechGroup {
  label: string
  items: string[]
}

export const techGroups: TechGroup[] = [
  { label: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'] },
  { label: 'Backend', items: ['Node.js', 'Express', 'Python', 'REST APIs', 'Authentication'] },
  { label: 'Mobile', items: ['React Native', 'Flutter', 'Android', 'iOS'] },
  { label: 'Data & Cloud', items: ['PostgreSQL', 'MongoDB', 'Firebase', 'Netlify', 'Vercel', 'AWS'] },
  { label: 'Commerce & CMS', items: ['Shopify', 'WooCommerce', 'WordPress', 'Headless CMS', 'Payment gateways'] },
  { label: 'Automation & AI', items: ['n8n / Zapier', 'WhatsApp API', 'AI chatbots', 'CRM integrations'] },
]

/** Short list shown in the scrolling strip beneath the hero */
export const marqueeItems = [
  'Business Websites',
  'Web Applications',
  'Mobile Apps',
  'E-Commerce Stores',
  'SaaS Platforms',
  'Dashboards & Portals',
  'AI & Automation',
  'APIs & Integrations',
  'UI/UX Design',
]
