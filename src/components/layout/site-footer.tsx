import { athleteProfile } from '@/data'

export function SiteFooter() {
  return (
    <footer className="border-t bg-neutral-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright */}
          <div className="text-sm text-neutral-600">
            © {new Date().getFullYear()} {athleteProfile.name}. All rights reserved.
          </div>

          {/* Additional links */}
          <div className="flex space-x-6 text-sm">
            <a href="#about" className="text-neutral-600 hover:text-primary-600 transition-colors">
              About
            </a>
            <a href="#contact" className="text-neutral-600 hover:text-primary-600 transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
