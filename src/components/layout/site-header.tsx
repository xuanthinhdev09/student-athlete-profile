import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { athleteProfile } from '@/data'

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Athletic Profile', href: '#athletic-profile' },
  { name: 'Highlight', href: '#highlight' },
  { name: 'Stats', href: '#stats' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Academics', href: '#academics' },
  { name: 'Contact', href: '#contact' },
]

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo / Name */}
          <div className="flex items-center">
            <a href="#" className="flex items-center space-x-2">
              <span className="text-xl font-bold text-primary-600">
                {athleteProfile.name.split(' ')[0]} {athleteProfile.name.split(' ')[1]}
              </span>
              <span className="hidden sm:inline text-sm text-neutral-600">
                Class of {athleteProfile.classOf}
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:items-center md:space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-neutral-600 transition-colors hover:text-primary-600"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg bg-primary-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-700"
            >
              Contact Coach
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-neutral-600 hover:bg-neutral-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open menu</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t">
          <div className="space-y-1 px-4 pb-3 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block rounded-lg px-3 py-2 text-base font-medium text-neutral-600 hover:bg-neutral-50 hover:text-primary-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="block rounded-lg px-3 py-2 text-base font-medium text-primary-600 hover:bg-neutral-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Coach
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
