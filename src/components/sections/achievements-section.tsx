import { motion } from 'framer-motion'
import { Award } from 'lucide-react'
import { SectionContainer, SectionContent } from '@/components/layout/section-container'
import { athleteProfile } from '@/data'

export function AchievementsSection() {
  // Sort achievements by year (newest first)
  const sortedAchievements = [...athleteProfile.achievements].sort((a, b) => b.year - a.year)

  return (
    <SectionContainer id="achievements" className="bg-white">
      <SectionContent>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-4 text-center">
            Achievements
          </h2>
          <p className="text-neutral-600 text-center mb-12 max-w-2xl mx-auto">
            Recognition and accomplishments throughout {athleteProfile.name.split(' ')[0]}'s career
          </p>

          {/* Timeline style achievements */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-neutral-200 -translate-x-1/2 hidden md:block" />

            <div className="space-y-6">
              {sortedAchievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row gap-4 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="bg-neutral-50 p-6 rounded-xl">
                      <div className="flex items-center gap-3 mb-2 md:justify-start">
                        <Award className="w-5 h-5 text-accent-500 flex-shrink-0" />
                        <span className="text-sm font-semibold text-accent-600">{achievement.year}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-neutral-900 mb-2">{achievement.title}</h3>
                      <p className="text-neutral-700 text-sm">{achievement.description}</p>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 top-6 w-3 h-3 bg-accent-500 rounded-full -translate-x-1/2 ring-4 ring-white" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </SectionContent>
    </SectionContainer>
  )
}
