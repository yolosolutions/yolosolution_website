export interface ProcessStep {
  step: string
  title: string
  description: string
}

export const processSteps: ProcessStep[] = [
  {
    step: '01',
    title: 'Requirement Discussion',
    description:
      'We start with a short call to understand your business, your customers, and what the website needs to achieve.',
  },
  {
    step: '02',
    title: 'Design',
    description:
      'We design a clean, on-brand layout for your review before any code is written, so there are no surprises later.',
  },
  {
    step: '03',
    title: 'Development',
    description:
      'We build your site to be fast, responsive, and reliable across every device, from phones to desktops.',
  },
  {
    step: '04',
    title: 'Review',
    description:
      'You review the live preview, request changes, and confirm everything reads and works exactly as intended.',
  },
  {
    step: '05',
    title: 'Launch',
    description:
      'We publish your website, connect your domain, and make sure everything is live and working correctly.',
  },
  {
    step: '06',
    title: 'Support',
    description:
      'We stay available after launch for updates, fixes, and questions — your site keeps running smoothly.',
  },
]
