export interface Testimonial {
  name: string
  role: string
  quote: string
}

// Add only verified client feedback here. The homepage intentionally does not
// render this section until real testimonials are available.
export const testimonials: Testimonial[] = []
