import { useState, type FormEvent } from 'react'
import {
  CheckCircle2,
  Clock,
  Instagram,
  Loader2,
  Mail,
  MessageCircle,
  Phone,
  Send,
} from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { services } from '@/data/services'
import { site } from '@/data/site'
import { cn } from '@/lib/utils'

const fieldClasses =
  'w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-sm text-ink-900 placeholder:text-ink-300 transition-colors focus:border-brand-500 focus:outline-none focus:ring-4 focus:ring-brand-100'

const labelClasses = 'mb-1.5 block text-sm font-medium text-ink-700'

type Errors = Partial<Record<'name' | 'email' | 'message', string>>

const contactLinks = [
  { icon: MessageCircle, label: 'WhatsApp us', href: site.whatsapp, external: true },
  { icon: Phone, label: site.phone, href: site.phoneHref, external: false },
  { icon: Mail, label: site.email, href: `mailto:${site.email}`, external: false },
  { icon: Instagram, label: site.instagramHandle, href: site.instagram, external: true },
]

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [errors, setErrors] = useState<Errors>({})

  function validate(data: FormData): Errors {
    const next: Errors = {}
    if (!String(data.get('name') ?? '').trim()) next.name = 'Please tell us your name.'
    const email = String(data.get('email') ?? '').trim()
    if (!email) next.email = 'Please enter your email.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = 'That email address looks incorrect.'
    if (!String(data.get('message') ?? '').trim()) next.message = 'Tell us a little about your project.'
    return next
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const found = validate(data)
    setErrors(found)
    if (Object.keys(found).length > 0) return

    setStatus('sending')
    const body = new URLSearchParams()
    body.append('form-name', 'contact')
    data.forEach((value, key) => body.append(key, value.toString()))

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: body.toString(),
    })
      .then((response) => {
        if (!response.ok) throw new Error('Form submission failed')
        setStatus('sent')
      })
      .catch(() => setStatus('error'))
  }

  return (
    <section className="bg-ink-50 py-16 sm:py-24">
      <Container className="grid grid-cols-1 gap-8 lg:grid-cols-5">
        <Reveal className="lg:col-span-3">
          <div className="rounded-3xl border border-ink-200 bg-white p-6 shadow-soft sm:p-10">
            {status === 'sent' ? (
              <div className="flex flex-col items-center py-12 text-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50">
                  <CheckCircle2 className="h-9 w-9 text-emerald-600" />
                </span>
                <h3 className="mt-5 font-display text-2xl font-bold text-ink-900">Thanks, we&rsquo;ve got your message</h3>
                <p className="mt-2 max-w-sm text-sm leading-relaxed text-ink-500">
                  We&rsquo;ll get back to you within one business day with next steps and your free quote.
                </p>
              </div>
            ) : (
              <>
                <h2 className="font-display text-2xl font-bold text-ink-900">Tell us about your project</h2>
                <p className="mt-1.5 text-sm text-ink-500">
                  Fill in the form and we&rsquo;ll reply with a free, no-obligation quote.
                </p>

                <form
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                  className="mt-8 space-y-5"
                  noValidate
                >
                  <p className="hidden">
                    <label>
                      Don&rsquo;t fill this out: <input name="bot-field" tabIndex={-1} autoComplete="off" />
                    </label>
                  </p>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className={labelClasses}>
                        Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        placeholder="Your name"
                        aria-invalid={!!errors.name}
                        className={cn(fieldClasses, errors.name && 'border-red-400')}
                      />
                      {errors.name && <p className="mt-1.5 text-xs text-red-600">{errors.name}</p>}
                    </div>
                    <div>
                      <label htmlFor="business" className={labelClasses}>
                        Business / Company
                      </label>
                      <input
                        id="business"
                        name="business"
                        type="text"
                        autoComplete="organization"
                        placeholder="Business name"
                        className={fieldClasses}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className={labelClasses}>
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="you@business.com"
                        aria-invalid={!!errors.email}
                        className={cn(fieldClasses, errors.email && 'border-red-400')}
                      />
                      {errors.email && <p className="mt-1.5 text-xs text-red-600">{errors.email}</p>}
                    </div>
                    <div>
                      <label htmlFor="phone" className={labelClasses}>
                        Phone / WhatsApp
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        placeholder="+91 00000 00000"
                        className={fieldClasses}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className={labelClasses}>
                      What do you need?
                    </label>
                    <select id="service" name="service" defaultValue="" className={fieldClasses}>
                      <option value="">Select a service (optional)</option>
                      {services.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                      <option value="Not sure yet">Not sure yet, need advice</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className={labelClasses}>
                      Project details <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Tell us about your business, what you want to build and any timeline in mind"
                      aria-invalid={!!errors.message}
                      className={cn(fieldClasses, errors.message && 'border-red-400')}
                    />
                    {errors.message && <p className="mt-1.5 text-xs text-red-600">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-600 px-7 py-3.5 text-[15px] font-semibold text-white shadow-lift transition-all duration-200 hover:bg-brand-700 active:scale-[0.98] disabled:opacity-70 sm:w-auto"
                  >
                    {status === 'sending' ? (
                      <>
                        Sending <Loader2 className="h-4 w-4 animate-spin" />
                      </>
                    ) : (
                      <>
                        Send message <Send className="h-4 w-4" />
                      </>
                    )}
                  </button>

                  {status === 'error' && (
                    <p role="alert" className="text-sm text-red-600">
                      We couldn&rsquo;t send your message. Please try again, or reach us directly on WhatsApp,
                      phone or email.
                    </p>
                  )}
                </form>
              </>
            )}
          </div>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-2">
          <div className="relative h-full overflow-hidden rounded-3xl bg-brand-950 p-7 text-white sm:p-10">
            <div className="glow-blue pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full opacity-60" />
            <div className="relative">
              <h3 className="font-display text-xl font-bold">Prefer to talk directly?</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-100/75">
                Pick whichever channel suits you. WhatsApp is usually the fastest.
              </p>

              <div className="mt-7 space-y-3">
                {contactLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.external ? '_blank' : undefined}
                    rel={item.external ? 'noreferrer' : undefined}
                    className="group flex items-center gap-3.5 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-sm transition-colors hover:border-gold-400/60 hover:bg-white/[0.08]"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10 text-gold-400">
                      <item.icon className="h-4 w-4" />
                    </span>
                    <span className="break-all">{item.label}</span>
                  </a>
                ))}
              </div>

              <div className="mt-8 flex items-start gap-3 border-t border-white/10 pt-6 text-sm text-brand-100/75">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                <p>We typically reply within a few hours, and always within one business day.</p>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
