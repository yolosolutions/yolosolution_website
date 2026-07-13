export interface Testimonial {
  name: string
  role: string
  quote: string
}

export const testimonials: Testimonial[] = [
  {
    name: 'Aarav Mehta',
    role: 'Founder, Aarav Interiors',
    quote:
      'YOLO Solutions turned our outdated site into something we\u2019re genuinely proud to share with clients. Enquiries picked up within the first month.',
  },
  {
    name: 'Priya Kapoor',
    role: 'Freelance Photographer',
    quote:
      'They understood exactly what a portfolio needs to do. The site loads fast and my work finally gets the spotlight it deserves.',
  },
  {
    name: 'Rohan Shah',
    role: 'Co-founder, Nimbus Fitness Studio',
    quote:
      'Clear communication from start to finish. They kept us updated at every step and delivered exactly on schedule.',
  },
]
