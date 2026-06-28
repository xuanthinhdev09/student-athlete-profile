import { motion } from 'framer-motion'
import { GraduationCap, BookOpen, Brain, Scale } from 'lucide-react'
import { SectionContainer, SectionContent } from '@/components/layout/section-container'
import { athleteProfile } from '@/data'

export function AcademicSection() {
  const academicItems = [
    {
      label: 'GPA',
      value: athleteProfile.gpa,
      icon: GraduationCap,
      description: 'Weighted GPA',
    },
    {
      label: 'SAT Score',
      value: athleteProfile.sat ? athleteProfile.sat.toString() : 'N/A',
      icon: Scale,
      description: 'Total Score',
    },
    {
      label: 'ACT Score',
      value: athleteProfile.act ? athleteProfile.act.toString() : 'N/A',
      icon: BookOpen,
      description: 'Composite Score',
    },
    {
      label: 'Intended Major',
      value: athleteProfile.intendedMajor,
      icon: Brain,
      description: 'Academic Focus',
    },
  ]

  return (
    <SectionContainer id="academics" className="bg-white">
      <SectionContent>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-4 text-center">
            Academic Information
          </h2>
          <p className="text-neutral-600 text-center mb-12 max-w-2xl mx-auto">
            Excellence in the classroom matches excellence on the field
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {academicItems.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-neutral-50 p-6 rounded-xl text-center hover:bg-neutral-100 transition-colors"
                >
                  <Icon className="w-8 h-8 text-primary-600 mx-auto mb-3" />
                  <p className="text-sm text-neutral-600 mb-1">{item.label}</p>
                  <p className="text-2xl font-bold text-neutral-900 mb-1">{item.value}</p>
                  <p className="text-xs text-neutral-500">{item.description}</p>
                </motion.div>
              )
            })}
          </div>

          {/* High School info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-primary-50 p-8 rounded-xl text-center"
          >
            <GraduationCap className="w-12 h-12 text-primary-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-neutral-900 mb-2">
              {athleteProfile.highSchool}
            </h3>
            <p className="text-neutral-700">
              Class of {athleteProfile.graduatingYear} • College Preparatory Curriculum
            </p>
          </motion.div>
        </motion.div>
      </SectionContent>
    </SectionContainer>
  )
}
