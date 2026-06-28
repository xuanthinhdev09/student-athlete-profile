import { motion } from 'framer-motion'
import { SectionContainer, SectionContent } from '@/components/layout/section-container'
import { athleteProfile } from '@/data'

export function StatisticsSection() {
  return (
    <SectionContainer id="stats" className="bg-neutral-50">
      <SectionContent>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-4 text-center">
            Season Statistics
          </h2>
          <p className="text-neutral-600 text-center mb-12 max-w-2xl mx-auto">
            Performance metrics across competitive seasons
          </p>

          {/* Stats table */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-neutral-100 border-b">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-neutral-900">Season</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-neutral-900">Team</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-neutral-900">Games</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-neutral-900">Goals</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-neutral-900">Assists</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-neutral-900">Minutes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100">
                  {athleteProfile.seasonStats.map((season, index) => (
                    <motion.tr
                      key={season.season}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="hover:bg-neutral-50 transition-colors"
                    >
                      <td className="px-6 py-4 font-medium text-neutral-900">{season.season}</td>
                      <td className="px-6 py-4 text-neutral-700">{season.team}</td>
                      <td className="px-6 py-4 text-center text-neutral-900 font-semibold">{season.games}</td>
                      <td className="px-6 py-4 text-center">
                        <span className="inline-flex items-center justify-center w-8 h-8 bg-accent-100 text-accent-700 rounded-full font-semibold">
                          {season.goals}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="inline-flex items-center justify-center w-8 h-8 bg-primary-100 text-primary-700 rounded-full font-semibold">
                          {season.assists}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center text-neutral-700">{season.minutes.toLocaleString()}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Career totals */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <p className="text-3xl font-bold text-primary-600">
                {athleteProfile.seasonStats.reduce((sum, s) => sum + s.games, 0)}
              </p>
              <p className="text-sm text-neutral-600 mt-1">Career Games</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <p className="text-3xl font-bold text-accent-600">
                {athleteProfile.seasonStats.reduce((sum, s) => sum + s.goals, 0)}
              </p>
              <p className="text-sm text-neutral-600 mt-1">Career Goals</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <p className="text-3xl font-bold text-primary-600">
                {athleteProfile.seasonStats.reduce((sum, s) => sum + s.assists, 0)}
              </p>
              <p className="text-sm text-neutral-600 mt-1">Career Assists</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <p className="text-3xl font-bold text-accent-600">
                {athleteProfile.seasonStats.reduce((sum, s) => sum + s.goals + s.assists, 0)}
              </p>
              <p className="text-sm text-neutral-600 mt-1">Points</p>
            </div>
          </motion.div>
        </motion.div>
      </SectionContent>
    </SectionContainer>
  )
}
