import { ReactNode } from 'react'

interface SectionContainerProps {
  children: ReactNode
  className?: string
  id?: string
}

/**
 * Consistent section wrapper with max-width and padding
 * Use this for all major page sections
 */
export function SectionContainer({ children, className = '', id }: SectionContainerProps) {
  return (
    <section id={id} className={`w-full ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  )
}

/**
 * Inner container for section content with vertical padding
 */
export function SectionContent({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div className={`py-16 md:py-24 ${className}`}>
      {children}
    </div>
  )
}
