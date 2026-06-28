import { SiteHeader } from './components/layout/site-header'
import { SiteFooter } from './components/layout/site-footer'
import { HeroSection } from './components/sections/hero-section'
import { AboutSection } from './components/sections/about-section'
import { AthleticProfileSection } from './components/sections/athletic-profile-section'
import { HighlightVideoSection } from './components/sections/highlight-video-section'
import { StatisticsSection } from './components/sections/statistics-section'
import { AchievementsSection } from './components/sections/achievements-section'
import { GallerySection } from './components/sections/gallery-section'
import { AcademicSection } from './components/sections/academic-section'
import { ContactSection } from './components/sections/contact-section'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <AthleticProfileSection />
        <HighlightVideoSection />
        <StatisticsSection />
        <AchievementsSection />
        <GallerySection />
        <AcademicSection />
        <ContactSection />
      </main>

      <SiteFooter />
    </div>
  )
}

export default App
