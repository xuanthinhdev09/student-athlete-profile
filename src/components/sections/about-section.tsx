import { motion } from 'framer-motion'
import { SectionContainer, SectionContent } from '@/components/layout/section-container'
import { athleteProfile } from '@/data'

export function AboutSection() {
  return (
    <SectionContainer id="about" className="bg-white">
      <SectionContent>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-6 text-center">
            About {athleteProfile.name.split(' ')[0]}
          </h2>

          <div className="prose prose-lg max-w-none">
            {athleteProfile.about.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-neutral-700 leading-relaxed mb-4">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Quick facts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            <div className="text-center p-4 bg-neutral-50 rounded-lg">
              <p className="text-sm text-neutral-600 mb-1">High School</p>
              <p className="font-semibold text-neutral-900">{athleteProfile.highSchool}</p>
            </div>
            <div className="text-center p-4 bg-neutral-50 rounded-lg">
              <p className="text-sm text-neutral-600 mb-1">Location</p>
              <p className="font-semibold text-neutral-900">{athleteProfile.location}</p>
            </div>
            <div className="text-center p-4 bg-neutral-50 rounded-lg">
              <p className="text-sm text-neutral-600 mb-1">Intended Major</p>
              <p className="font-semibold text-neutral-900">{athleteProfile.intendedMajor}</p>
            </div>
            <div className="text-center p-4 bg-neutral-50 rounded-lg">
              <p className="text-sm text-neutral-600 mb-1">Graduation</p>
              <p className="font-semibold text-neutral-900">Class of {athleteProfile.classOf}</p>
            </div>
          </motion.div>
        </motion.div>
      </SectionContent>
    </SectionContainer>
  )
}
