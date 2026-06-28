import { motion } from 'framer-motion'
import { Mail, Phone, MessageCircle } from 'lucide-react'
import { SectionContainer, SectionContent } from '@/components/layout/section-container'
import { athleteProfile } from '@/data'

export function ContactSection() {
  const handleEmailCoach = () => {
    const subject = `Recruitment Inquiry - ${athleteProfile.name}`
    const body = `Coach,\n\nI am interested in learning more about ${athleteProfile.name} and her potential fit for our program.\n\n[Your Name]\n[University/College]\n[Position]`
    window.location.href = `mailto:${athleteProfile.coachEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <SectionContainer id="contact" className="bg-neutral-50">
      <SectionContent>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-4 text-center">
            Contact
          </h2>
          <p className="text-neutral-600 text-center mb-12 max-w-2xl mx-auto">
            Get in touch with {athleteProfile.name.split(' ')[0]}'s coaching staff for recruitment inquiries
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Coach Contact */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-xl shadow-sm"
            >
              <h3 className="text-xl font-semibold text-neutral-900 mb-6">Club Coach</h3>

              <div className="space-y-4">
                <div>
                  <p className="text-sm text-neutral-600 mb-1">Coach Name</p>
                  <p className="font-medium text-neutral-900">{athleteProfile.coachName}</p>
                </div>

                <a
                  href={`mailto:${athleteProfile.coachEmail}`}
                  className="flex items-center gap-3 p-3 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors group"
                >
                  <Mail className="w-5 h-5 text-primary-600" />
                  <div>
                    <p className="text-sm text-neutral-600">Email</p>
                    <p className="font-medium text-primary-700 group-hover:underline">
                      {athleteProfile.coachEmail}
                    </p>
                  </div>
                </a>

                <a
                  href={`tel:${athleteProfile.coachPhone}`}
                  className="flex items-center gap-3 p-3 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors group"
                >
                  <Phone className="w-5 h-5 text-primary-600" />
                  <div>
                    <p className="text-sm text-neutral-600">Phone</p>
                    <p className="font-medium text-primary-700">
                      {athleteProfile.coachPhone}
                    </p>
                  </div>
                </a>
              </div>
            </motion.div>

            {/* Athlete Contact */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-xl shadow-sm"
            >
              <h3 className="text-xl font-semibold text-neutral-900 mb-6">Athlete Contact</h3>

              <div className="space-y-4">
                <div>
                  <p className="text-sm text-neutral-600 mb-1">Athlete Name</p>
                  <p className="font-medium text-neutral-900">{athleteProfile.name}</p>
                </div>

                <div>
                  <p className="text-sm text-neutral-600 mb-1">Location</p>
                  <p className="font-medium text-neutral-900">{athleteProfile.location}</p>
                </div>

                <div>
                  <p className="text-sm text-neutral-600 mb-1">High School</p>
                  <p className="font-medium text-neutral-900">{athleteProfile.highSchool}</p>
                </div>

                <div>
                  <p className="text-sm text-neutral-600 mb-1">Club Team</p>
                  <p className="font-medium text-neutral-900">{athleteProfile.clubTeam}</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12 text-center"
          >
            <button
              onClick={handleEmailCoach}
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2"
            >
              <MessageCircle className="w-5 h-5" />
              Email Coach for Recruitment Info
            </button>
            <p className="text-sm text-neutral-600 mt-4">
              College coaches: Request full game footage and additional references
            </p>
          </motion.div>
        </motion.div>
      </SectionContent>
    </SectionContainer>
  )
}
