import type { LucideIcon } from 'lucide-react'
import { Bot, Code2, LayoutTemplate, RefreshCw, ShoppingCart, Wrench } from 'lucide-react'

export interface Service {
  icon: LucideIcon
  title: string
  description: string
  features: string[]
}

export const services: Service[] = [
  {
    icon: Code2,
    title: 'Web Development',
    description:
      'Modern, responsive websites built to improve business credibility and make it easier for customers to enquire.',
    features: ['Business websites', 'Landing pages', 'Responsive development', 'Enquiry-focused layouts'],
  },
  {
    icon: ShoppingCart,
    title: 'E-Commerce Development',
    description:
      'Online stores and e-commerce experiences designed around products, usability and conversions.',
    features: ['Product-focused design', 'Mobile shopping experience', 'Storefront development', 'Conversion-ready structure'],
  },
  {
    icon: Bot,
    title: 'AI & Business Automation',
    description:
      'Smart automation for repetitive workflows, enquiries, lead handling and business operations.',
    features: ['Workflow automation', 'Enquiry handling', 'Lead routing', 'Business process support'],
  },
  {
    icon: LayoutTemplate,
    title: 'Landing Pages',
    description:
      'Focused landing pages designed around a single campaign, offer or enquiry goal.',
    features: ['Conversion-focused layout', 'Fast load speed', 'Campaign-ready sections', 'Lead capture forms'],
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
    icon: Code2,
    title: 'Custom Web Applications',
    description:
      'Need something beyond a standard website? We build custom tools tailored to your business workflow.',
    features: ['Custom features', 'Admin dashboards', 'Third-party integrations', 'Scalable architecture'],
  },
]
