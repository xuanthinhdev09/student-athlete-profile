import { motion } from 'framer-motion'
import { Play } from 'lucide-react'
import { SectionContainer, SectionContent } from '@/components/layout/section-container'
import { athleteProfile } from '@/data'

export function HighlightVideoSection() {
  if (!athleteProfile.highlightVideo) {
    return null
  }

  return (
    <SectionContainer id="highlight" className="bg-white">
      <SectionContent>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-4 text-center">
            Highlight Video
          </h2>
          <p className="text-neutral-600 text-center mb-12 max-w-2xl mx-auto">
            Watch {athleteProfile.name.split(' ')[0]}'s best moments on the field
          </p>

          <div className="relative aspect-video bg-neutral-900 rounded-xl overflow-hidden shadow-lg">
            <iframe
              src={athleteProfile.highlightVideo}
              title="Highlight Video"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-8 text-center"
          >
            <p className="text-sm text-neutral-600 mb-4">
              Full highlight reel available upon request
            </p>
            <a
              href={athleteProfile.hudl || '#contact'}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-all hover:scale-105"
            >
              <Play className="w-4 h-4" fill="currentColor" />
              View on HUDL
            </a>
          </motion.div>
        </motion.div>
      </SectionContent>
    </SectionContainer>
  )
}
