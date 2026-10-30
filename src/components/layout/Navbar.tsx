import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { Logo } from '@/components/icons/Logo'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { Magnetic } from '@/components/ui/Magnetic'
import { navLinks } from '@/data/site'
import { cn } from '@/lib/utils'

/**
 * Every page opens with a dark hero, so the bar starts transparent with the
 * light logo and turns into a white bar once the page is scrolled.
 */
export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  const light = scrolled || open

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        light ? 'border-b border-ink-100 bg-white/90 shadow-soft backdrop-blur-lg' : 'border-b border-transparent bg-transparent'
      )}
    >
      <Container className="flex h-[72px] items-center justify-between">
        <NavLink to="/" aria-label="YOLO Solutions home">
          <Logo tone={light ? 'color' : 'light'} />
        </NavLink>

        <nav
          className={cn(
            'hidden items-center gap-1 rounded-full p-1.5 lg:flex',
            !light && 'liquid-glass'
          )}
          aria-label="Primary"
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                cn(
                  'rounded-full px-4 py-2 text-sm font-medium transition-colors',
                  light
                    ? isActive
                      ? 'bg-brand-50 text-brand-600'
                      : 'text-ink-600 hover:text-brand-600'
                    : isActive
                      ? 'bg-white/10 text-white'
                      : 'text-white/75 hover:text-white'
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Magnetic strength={0.25}>
            <Button to="/contact" variant={light ? 'primary' : 'accent'}>
              Start a Project
            </Button>
          </Magnetic>
        </div>

        <button
          className={cn('rounded-full p-2 lg:hidden', light ? 'text-ink-800' : 'text-white')}
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden border-t border-ink-100 bg-white lg:hidden"
          >
            <Container className="flex flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    cn(
                      'rounded-xl px-4 py-3 text-[15px] font-medium text-ink-700',
                      isActive && 'bg-brand-50 text-brand-600'
                    )
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <Button to="/contact" variant="primary" size="lg" className="mt-3 w-full">
                Start a Project
              </Button>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
