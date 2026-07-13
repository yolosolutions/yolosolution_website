import { Link } from 'react-router-dom'
import { Instagram, Mail, MessageCircle, Phone } from 'lucide-react'
import { Logo } from '@/components/icons/Logo'
import { Container } from '@/components/ui/Container'

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Contact', to: '/contact' },
]

const serviceLinks = [
  { label: 'Business Websites', to: '/services' },
  { label: 'Portfolio Websites', to: '/services' },
  { label: 'Landing Pages', to: '/services' },
  { label: 'Website Redesign', to: '/services' },
]

export function Footer() {
  return (
    <footer className="border-t border-charcoal-100 bg-charcoal-900">
      <Container className="grid grid-cols-1 gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo dark />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-charcoal-300">
            We design and build websites that help small businesses and startups
            look credible online and win more customers.
          </p>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
            Quick Links
          </h3>
          <ul className="mt-4 space-y-3">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.to}
                  className="text-sm text-charcoal-300 transition-colors hover:text-gold-400"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
            Services
          </h3>
          <ul className="mt-4 space-y-3">
            {serviceLinks.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.to}
                  className="text-sm text-charcoal-300 transition-colors hover:text-gold-400"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
            Contact
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-charcoal-300">
            <li>
              <a href="mailto:yolosolutions01@gmail.com" className="flex items-center gap-2 hover:text-gold-400">
                <Mail className="h-4 w-4" /> yolosolutions01@gmail.com
              </a>
            </li>
            <li>
              <a href="tel:+916379293492" className="flex items-center gap-2 hover:text-gold-400">
                <Phone className="h-4 w-4" /> +91 63792 93492
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/916379293492"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-gold-400"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp Us
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/yolosolutions"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-gold-400"
              >
                <Instagram className="h-4 w-4" /> @yolosolutions
              </a>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-2 py-6 sm:flex-row">
          <p className="text-xs text-charcoal-400">
            © {new Date().getFullYear()} YOLO Solutions. All rights reserved.
          </p>
          <p className="text-xs text-charcoal-400">Built with care, in India.</p>
        </Container>
      </div>
    </footer>
  )
}
