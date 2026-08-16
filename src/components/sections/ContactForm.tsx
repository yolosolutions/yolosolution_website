import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, Instagram, Mail, MessageCircle, Phone, Send } from 'lucide-react'
import { Container } from '@/components/ui/Container'

const fieldClasses =
  'w-full rounded-xl border border-charcoal-100 bg-white px-4 py-3 text-sm text-charcoal-800 placeholder:text-charcoal-300 transition-colors focus:border-royal-400 focus:outline-none'

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const body = new URLSearchParams()
    setSubmitError(false)
    body.append('form-name', 'contact')
    data.forEach((value, key) => body.append(key, value.toString()))

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: body.toString(),
    })
      .then((response) => {
        if (!response.ok) throw new Error('Form submission failed')
        setSubmitted(true)
      })
      .catch(() => setSubmitError(true))
  }

  return (
    <section className="py-16 sm:py-20">
      <Container className="grid grid-cols-1 gap-12 lg:grid-cols-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-3"
        >
          <div className="rounded-2xl border border-charcoal-100 bg-white p-7 shadow-soft sm:p-9">
            {submitted ? (
              <div className="flex flex-col items-center py-10 text-center">
                <CheckCircle2 className="h-12 w-12 text-royal-500" />
                <h3 className="mt-4 font-display text-xl font-semibold text-charcoal-800">
                  Thanks — we've got your message
                </h3>
                <p className="mt-2 max-w-sm text-sm text-charcoal-400">
                  We'll get back to you within one business day with your free quote.
                </p>
              </div>
            ) : (
              <form name="contact" onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-charcoal-700">
                      Name
                    </label>
                    <input id="name" name="name" type="text" required placeholder="Your name" className={fieldClasses} />
                  </div>
                  <div>
                    <label htmlFor="business" className="mb-1.5 block text-sm font-medium text-charcoal-700">
                      Business
                    </label>
                    <input id="business" name="business" type="text" placeholder="Business name" className={fieldClasses} />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-charcoal-700">
                      Email
                    </label>
                    <input id="email" name="email" type="email" required placeholder="you@business.com" className={fieldClasses} />
                  </div>
                  <div>
                    <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-charcoal-700">
                      Phone
                    </label>
                    <input id="phone" name="phone" type="tel" placeholder="+91 00000 00000" className={fieldClasses} />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-charcoal-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell us a bit about your business and what you need"
                    className={fieldClasses}
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-royal-500 px-6 py-3.5 text-sm font-semibold text-white shadow-glow transition-all duration-200 hover:bg-royal-600 active:scale-[0.98] sm:w-auto"
                >
                  Send Message <Send className="h-4 w-4" />
                </button>
                {submitError && (
                  <p role="alert" className="text-sm text-red-600">
                    We couldn't send your message. Please try again or contact us directly by WhatsApp, phone or email.
                  </p>
                )}
              </form>
            )}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-2"
        >
          <div className="h-full rounded-2xl bg-charcoal-900 p-7 text-white sm:p-9">
            <h3 className="font-display text-xl font-semibold">Prefer to reach out directly?</h3>
            <p className="mt-2 text-sm leading-relaxed text-charcoal-300">
              Pick whichever works best for you — we typically reply within a few hours.
            </p>
            <div className="mt-7 space-y-4">
              <a
                href="https://wa.me/916379293492"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-xl border border-white/10 px-4 py-3.5 text-sm transition-colors hover:border-gold-400 hover:text-gold-400"
              >
                <MessageCircle className="h-5 w-5" /> WhatsApp Us
              </a>
              <a
                href="tel:+916379293492"
                className="flex items-center gap-3 rounded-xl border border-white/10 px-4 py-3.5 text-sm transition-colors hover:border-gold-400 hover:text-gold-400"
              >
                <Phone className="h-5 w-5" /> +91 63792 93492
              </a>
              <a
                href="mailto:yolosolutions01@gmail.com"
                className="flex items-center gap-3 rounded-xl border border-white/10 px-4 py-3.5 text-sm transition-colors hover:border-gold-400 hover:text-gold-400"
              >
                <Mail className="h-5 w-5" /> yolosolutions01@gmail.com
              </a>
              <a
                href="https://instagram.com/yolosolutions"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-xl border border-white/10 px-4 py-3.5 text-sm transition-colors hover:border-gold-400 hover:text-gold-400"
              >
                <Instagram className="h-5 w-5" /> @yolosolutions
              </a>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
