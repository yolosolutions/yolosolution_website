export interface ProcessStep {
  step: string
  title: string
  description: string
}

export const processSteps: ProcessStep[] = [
  {
    step: '01',
    title: 'Discover',
    description:
      'A short call to understand your business, your customers and what the project needs to achieve. You get a clear scope and a fair quote.',
  },
  {
    step: '02',
    title: 'Design',
    description:
      'We map the flow and design the key screens for your review before any code is written, so there are no surprises later.',
  },
  {
    step: '03',
    title: 'Build',
    description:
      'We develop in focused iterations, fast, responsive and reliable on every device, with a live preview you can open at any time.',
  },
  {
    step: '04',
    title: 'Review',
    description:
      'You test the live preview, request changes and confirm everything reads and works exactly as intended.',
  },
  {
    step: '05',
    title: 'Launch',
    description:
      'We deploy, connect your domain and verify everything works in production, then hand over what you need to run it.',
  },
  {
    step: '06',
    title: 'Support',
    description:
      'We stay available after launch for updates, fixes and new features, so your product keeps getting better.',
  },
]
