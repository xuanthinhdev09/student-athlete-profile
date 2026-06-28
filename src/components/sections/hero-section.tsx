import { motion } from 'framer-motion'
import { Play } from 'lucide-react'
import { athleteProfile } from '@/data'

export function HeroSection() {
  const scrollToHighlight = () => {
    const element = document.getElementById('highlight')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-b from-primary-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center"
        >
          {/* Sport icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-6"
          >
            <span className="text-6xl">⚽</span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-5xl sm:text-6xl md:text-7xl font-display font-bold text-neutral-900 mb-4"
          >
            {athleteProfile.name}
          </motion.h1>

          {/* Class year */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-xl md:text-2xl text-neutral-700 mb-3"
          >
            <span>Class of {athleteProfile.classOf}</span>
            <span className="hidden sm:inline text-neutral-400">•</span>
            <span className="hidden sm:inline">{athleteProfile.position}</span>
          </motion.div>

          {/* Position for mobile */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
            className="sm:hidden text-lg text-neutral-600 mb-3"
          >
            {athleteProfile.position}
          </motion.p>

          {/* NCAA Prospect badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="inline-block mb-8"
          >
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary-600 text-white font-semibold text-sm md:text-base">
              NCAA Prospect
            </span>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              onClick={scrollToHighlight}
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent-500 text-neutral-900 font-semibold rounded-lg hover:bg-accent-400 transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2"
            >
              <Play className="w-5 h-5" fill="currentColor" />
              Watch Highlight
            </button>

            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary-600 text-primary-600 font-semibold rounded-lg hover:bg-primary-50 transition-all focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2"
            >
              Contact Coach
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="animate-bounce">
          <svg
            className="w-6 h-6 text-neutral-400"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </motion.div>
    </section>
  )
}
