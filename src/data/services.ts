import type { LucideIcon } from 'lucide-react'
import { Briefcase, LayoutTemplate, Rocket, RefreshCw, Wrench, User } from 'lucide-react'

export interface Service {
  icon: LucideIcon
  title: string
  description: string
  features: string[]
}

export const services: Service[] = [
  {
    icon: Briefcase,
    title: 'Business Websites',
    description:
      'A professional website that tells customers who you are, what you offer, and why they should choose you.',
    features: ['Up to 6 pages', 'Mobile-friendly design', 'Contact & inquiry forms', 'Google Maps integration'],
  },
  {
    icon: User,
    title: 'Portfolio Websites',
    description:
      'A polished showcase for your work, built to help freelancers and creatives win their next client.',
    features: ['Project galleries', 'Case study layouts', 'Resume / CV section', 'Social proof & testimonials'],
  },
  {
    icon: LayoutTemplate,
    title: 'Landing Pages',
    description:
      'A focused, high-converting single page built for one goal — signups, sales, or bookings.',
    features: ['Conversion-focused layout', 'Fast load speed', 'A/B-test ready sections', 'Lead capture forms'],
  },
  {
    icon: RefreshCw,
    title: 'Website Redesign',
    description:
      'Already have a website that looks outdated or loads slowly? We rebuild it without losing your content or SEO.',
    features: ['Modern visual refresh', 'Improved page speed', 'SEO-safe migration', 'Mobile optimization'],
  },
  // {
  //   icon: Wrench,
  //   title: 'Website Maintenance',
  //   description:
  //     'Ongoing updates, fixes, and support so your website keeps running smoothly after launch.',
  //   features: ['Content updates', 'Security & backups', 'Bug fixes', 'Performance monitoring'],
  // },
  // {
  //   icon: Rocket,
  //   title: 'Custom Web Applications',
  //   description:
  //     'Need something beyond a standard website? We build custom tools tailored to your business workflow.',
  //   features: ['Custom features', 'Admin dashboards', 'Third-party integrations', 'Scalable architecture'],
  // },
  {
    icon: Wrench,
    title: 'Website Maintenance',
    description:
      'Ongoing updates, fixes, and support so your website keeps running smoothly after launch.',
    features: ['Content updates', 'Security & backups', 'Bug fixes', 'Performance monitoring'],
  },
  {
    icon: Rocket,
    title: 'Custom Web Applications',
    description:
      'Need something beyond a standard website? We build custom tools tailored to your business workflow.',
    features: ['Custom features', 'Admin dashboards', 'Third-party integrations', 'Scalable architecture'],
  },
]
