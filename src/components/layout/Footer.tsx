import { Link } from 'react-router-dom'
import { ArrowUpRight, Instagram, Mail, MessageCircle, Phone } from 'lucide-react'
import { Logo } from '@/components/icons/Logo'
import { Container } from '@/components/ui/Container'
import { services } from '@/data/services'
import { navLinks, site } from '@/data/site'

const linkClass = 'text-sm text-brand-100/70 transition-colors hover:text-gold-400'
const headingClass = 'font-display text-xs font-semibold uppercase tracking-[0.14em] text-white'

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-brand-950">
      <div className="pointer-events-none absolute inset-0 bg-grid-dark bg-grid opacity-40 [mask-image:linear-gradient(to_bottom,black,transparent_70%)]" />

      <Container className="relative grid grid-cols-1 gap-12 py-16 sm:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-3">
          <Logo onDark className="h-14" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-brand-100/70">
            A digital agency building websites, web &amp; mobile applications and smart automation for
            businesses in India and worldwide.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:border-gold-400 hover:text-gold-400"
            >
              <MessageCircle className="h-4 w-4" />
            </a>
            <a
              href={site.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:border-gold-400 hover:text-gold-400"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${site.email}`}
              aria-label="Email"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:border-gold-400 hover:text-gold-400"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="lg:col-span-2">
          <h3 className={headingClass}>Company</h3>
          <ul className="mt-5 space-y-3">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className={linkClass}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h3 className={headingClass}>Services</h3>
          <ul className="mt-5 space-y-3">
            {services.slice(0, 6).map((service) => (
              <li key={service.id}>
                <Link to={`/services#${service.id}`} className={linkClass}>
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-4">
          <h3 className={headingClass}>Get in touch</h3>
          <ul className="mt-5 space-y-3.5 text-sm text-brand-100/70">
            <li>
              <a href={`mailto:${site.email}`} className="flex items-center gap-2.5 transition-colors hover:text-gold-400">
                <Mail className="h-4 w-4 shrink-0" /> <span>{site.email}</span>
              </a>
            </li>
            <li>
              <a href={site.phoneHref} className="flex items-center gap-2.5 transition-colors hover:text-gold-400">
                <Phone className="h-4 w-4 shrink-0" /> {site.phone}
              </a>
            </li>
            <li>
              <a
                href={site.instagram}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 transition-colors hover:text-gold-400"
              >
                <Instagram className="h-4 w-4 shrink-0" /> {site.instagramHandle}
              </a>
            </li>
          </ul>
          <Link
            to="/contact"
            className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-400 hover:text-gold-300"
          >
            Start a project <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </Container>

      <div className="relative border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-2 py-6 sm:flex-row">
          <p className="text-xs text-brand-100/50">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="text-xs text-brand-100/50">Est. {site.founded} · {site.location}</p>
        </Container>
      </div>
    </footer>
  )
}
