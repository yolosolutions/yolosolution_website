import type { LucideIcon } from 'lucide-react'
import {
  AppWindow,
  Bot,
  Globe,
  LifeBuoy,
  PenTool,
  Plug,
  ShoppingCart,
  Smartphone,
} from 'lucide-react'

export interface Service {
  id: string
  icon: LucideIcon
  title: string
  summary: string
  description: string
  features: string[]
  idealFor: string
}

export const services: Service[] = [
  {
    id: 'websites',
    icon: Globe,
    title: 'Website Development',
    summary: 'Fast, SEO-ready websites that build trust and turn visitors into enquiries.',
    description:
      'Business sites, landing pages and portfolios designed to look credible on day one and stay easy to update. Every site is responsive, quick to load and structured so search engines can understand it.',
    features: [
      'Business & corporate websites',
      'Landing pages for campaigns and offers',
      'Portfolio & personal-brand sites',
      'Redesigns that keep your content and SEO',
      'Enquiry forms and WhatsApp / call buttons',
    ],
    idealFor: 'Local businesses, institutes, consultants and professionals',
  },
  {
    id: 'web-apps',
    icon: AppWindow,
    title: 'Web Applications',
    summary: 'Custom platforms, portals and dashboards built around how you actually work.',
    description:
      'When a template will not do, we build tailor-made web software: from an MVP you can put in front of users to internal tools that replace spreadsheets and manual follow-ups.',
    features: [
      'SaaS products and MVPs',
      'Admin dashboards & internal tools',
      'Customer, student and vendor portals',
      'Authentication and role-based access',
      'Booking, billing and workflow systems',
    ],
    idealFor: 'Startups, growing teams and operations-heavy businesses',
  },
  {
    id: 'mobile-apps',
    icon: Smartphone,
    title: 'Mobile App Development',
    summary: 'Android and iOS apps with a smooth, native feel for your customers or your team.',
    description:
      'From customer-facing apps to field-team tools, we design and build mobile experiences that are fast, simple to use and connected to a reliable backend.',
    features: [
      'Android & iOS apps',
      'Cross-platform builds from one codebase',
      'Push notifications and offline support',
      'Backend and API integration',
      'Store listing and release support',
    ],
    idealFor: 'Product companies, service businesses and field operations',
  },
  {
    id: 'ecommerce',
    icon: ShoppingCart,
    title: 'E-Commerce',
    summary: 'Online stores designed around your products, your buyers and your checkout.',
    description:
      'We build stores that are easy to browse on a phone, simple to manage and ready to take payments, using a platform or a fully custom build, whichever suits your catalogue and budget.',
    features: [
      'Custom and platform-based stores',
      'Catalogues, variants and inventory',
      'Secure checkout and payment gateways',
      'Order and customer management',
      'Mobile-first shopping experience',
    ],
    idealFor: 'Retailers, brands and D2C businesses going online',
  },
  {
    id: 'ui-ux',
    icon: PenTool,
    title: 'UI/UX Design',
    summary: 'Clear, modern interfaces you approve before a single line of code is written.',
    description:
      'Good software is easy to use. We map the user journey, prototype the key screens and design a consistent visual system that matches your brand, then hand it straight to development.',
    features: [
      'User flows and wireframes',
      'Clickable prototypes',
      'Brand-aligned design systems',
      'Responsive layouts for every screen',
      'Usability review before build',
    ],
    idealFor: 'Anyone building a new product or refreshing an old one',
  },
  {
    id: 'ai-automation',
    icon: Bot,
    title: 'AI & Business Automation',
    summary: 'Automate repetitive work so your team can focus on growth.',
    description:
      'We connect your tools and add intelligent automation to the tasks that eat up time: handling enquiries, routing leads, generating reports and keeping systems in sync.',
    features: [
      'Workflow and process automation',
      'AI chatbots and assistants',
      'Lead capture and routing',
      'Data sync and automated reporting',
      'WhatsApp, email and CRM automations',
    ],
    idealFor: 'Teams drowning in manual follow-ups and data entry',
  },
  {
    id: 'integrations',
    icon: Plug,
    title: 'APIs & Integrations',
    summary: 'Make your software talk to the tools and services you already rely on.',
    description:
      'We design clean APIs and wire up third-party services so your website, app and back-office share data instead of duplicating it.',
    features: [
      'REST API design and development',
      'Payment, SMS and WhatsApp integrations',
      'CRM and ERP connections',
      'Webhooks and data pipelines',
      'Third-party service integrations',
    ],
    idealFor: 'Businesses with several disconnected tools',
  },
  {
    id: 'maintenance',
    icon: LifeBuoy,
    title: 'Maintenance & Support',
    summary: 'We stay on after launch so everything keeps running smoothly.',
    description:
      'Software needs care after it ships. We handle updates, fixes and improvements so you can focus on your business instead of your website or app.',
    features: [
      'Content and feature updates',
      'Security updates and backups',
      'Performance monitoring',
      'Bug fixes and priority support',
      'Hosting and domain management',
    ],
    idealFor: 'Every site and app we build, and ones we inherit',
  },
]
