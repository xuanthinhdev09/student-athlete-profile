import { motion } from 'framer-motion'
import { Ruler, Weight, Footprints, Users, Trophy } from 'lucide-react'
import { SectionContainer, SectionContent } from '@/components/layout/section-container'
import { athleteProfile } from '@/data'

export function AthleticProfileSection() {
  const profileItems = [
    { label: 'Height', value: athleteProfile.height, icon: Ruler },
    { label: 'Weight', value: athleteProfile.weight, icon: Weight },
    { label: 'Position', value: athleteProfile.position, icon: Trophy },
    { label: 'Dominant Foot', value: athleteProfile.dominantFoot, icon: Footprints },
    { label: 'Club Team', value: athleteProfile.clubTeam, icon: Users },
  ]

  return (
    <SectionContainer id="athletic-profile" className="bg-neutral-50">
      <SectionContent>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-4 text-center">
            Athletic Profile
          </h2>
          <p className="text-neutral-600 text-center mb-12 max-w-2xl mx-auto">
            Key athletic information and credentials
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {profileItems.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary-100 rounded-lg">
                      <Icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-neutral-600 mb-1">{item.label}</p>
                      <p className="font-semibold text-neutral-900 text-lg">{item.value}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Coach info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 bg-white p-6 rounded-xl shadow-sm"
          >
            <h3 className="font-semibold text-neutral-900 mb-4">Club Coach Contact</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div>
                <p className="text-neutral-600">Name</p>
                <p className="font-medium text-neutral-900">{athleteProfile.coachName}</p>
              </div>
              <div>
                <p className="text-neutral-600">Email</p>
                <a
                  href={`mailto:${athleteProfile.coachEmail}`}
                  className="font-medium text-primary-600 hover:text-primary-700"
                >
                  {athleteProfile.coachEmail}
                </a>
              </div>
              <div>
                <p className="text-neutral-600">Phone</p>
                <a
                  href={`tel:${athleteProfile.coachPhone}`}
                  className="font-medium text-neutral-900"
                >
                  {athleteProfile.coachPhone}
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </SectionContent>
    </SectionContainer>
  )
}
