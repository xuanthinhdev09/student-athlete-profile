/**
 * Athlete profile data structure
 * Easy to swap for different athletes
 */

export interface AthleteProfile {
  // Personal
  name: string
  classOf: string
  position: string
  sport: string
  graduatingYear: number

  // Contact
  email: string
  phone: string
  location: string

  // Athletics
  height: string
  weight: string
  dominantFoot: string
  clubTeam: string
  coachName: string
  coachEmail: string
  coachPhone: string

  // Academics
  gpa: string
  sat?: number
  act?: number
  intendedMajor: string
  highSchool: string

  // Links
  highlightVideo?: string // YouTube/Vimeo URL
  hudl?: string
  instagram?: string

  // Stats
  seasonStats: SeasonStats[]

  // Achievements
  achievements: Achievement[]

  // Gallery
  gallery: GalleryImage[]

  // About
  about: string
}

export interface SeasonStats {
  season: string
  team: string
  games: number
  goals: number
  assists: number
  minutes: number
}

export interface Achievement {
  title: string
  year: number
  description: string
}

export interface GalleryImage {
  src: string
  alt: string
  category: string
}

/**
 * Sample data for Emily Johnson
 * Replace with real data when deploying for client
 */
export const athleteProfile: AthleteProfile = {
  // Personal
  name: 'Emily Johnson',
  classOf: '2027',
  position: 'Midfielder',
  sport: 'Soccer',
  graduatingYear: 2027,

  // Contact
  email: 'emily.johnson@email.com',
  phone: '(555) 123-4567',
  location: 'Springfield, IL',

  // Athletics
  height: "5'7\"",
  weight: '135 lbs',
  dominantFoot: 'Right',
  clubTeam: 'Springfield United SC',
  coachName: 'Michael Martinez',
  coachEmail: 'coach.martinez@springfieldunited.com',
  coachPhone: '(555) 987-6543',

  // Academics
  gpa: '3.8',
  sat: 1250,
  act: 28,
  intendedMajor: 'Kinesiology / Sports Medicine',
  highSchool: 'Springfield High School',

  // Links
  highlightVideo: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Sample video
  hudl: 'https://hudl.com',
  instagram: 'https://instagram.com',

  // Stats
  seasonStats: [
    {
      season: '2024',
      team: 'Springfield United SC U17',
      games: 28,
      goals: 12,
      assists: 18,
      minutes: 2100,
    },
    {
      season: '2023',
      team: 'Springfield United SC U16',
      games: 24,
      goals: 8,
      assists: 14,
      minutes: 1800,
    },
  ],

  // Achievements
  achievements: [
    {
      title: 'First Team All-State',
      year: 2024,
      description: 'Recognized as one of top midfielders in Illinois',
    },
    {
      title: 'Tournament MVP - Midwest Showcase',
      year: 2024,
      description: 'Led team to championship, 3 goals and 2 assists',
    },
    {
      title: 'All-Conference First Team',
      year: 2023,
      description: 'Unanimous selection for conference first team',
    },
    {
      title: 'ODP Regional Team',
      year: 2023,
      description: 'Selected for Olympic Development Program regional team',
    },
  ],

  // Gallery - placeholder images
  gallery: [
    {
      src: 'https://images.unsplash.com/photo-1518091043644-c1d4457512c6?w=800&h=600&fit=crop',
      alt: 'Emily in action during a game',
      category: 'action',
    },
    {
      src: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=600&fit=crop',
      alt: 'Springfield United team photo',
      category: 'team',
    },
    {
      src: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=800&h=600&fit=crop',
      alt: 'Emily with trophy',
      category: 'awards',
    },
    {
      src: 'https://images.unsplash.com/photo-1551966775-a4ddc8df0522?w=800&h=600&fit=crop',
      alt: 'Training session',
      category: 'action',
    },
  ],

  // About
  about: `I'm a rising senior at Springfield High School with a passion for soccer and academic excellence. I've been playing competitive soccer since age 8 and have dedicated myself to becoming the best midfielder I can be.

My playing style focuses on vision, distribution, and two-way midfield work. I pride myself on my work rate, soccer IQ, and ability to read the game. On the field, I'm a vocal leader who communicates constantly with teammates.

Beyond soccer, I maintain a 3.8 GPA while taking AP courses. I'm interested in pursuing kinesiology or sports medicine in college, combining my love for athletics with my academic interests.

I'm looking for a competitive college program where I can contribute both on the field and in the classroom. I'm open to all divisions and prioritize finding the right fit academically, athletically, and socially.`,
}
