---
phase: 2
title: "Foundation"
status: completed
priority: P1
effort: "45m"
dependencies: [1]
---

# Phase 2: Foundation

## Overview

Establish the foundation layer: base styles, layout components, and data structure. Create the template architecture that makes it easy to swap data for different athletes.

## Requirements

### Functional
- Base layout components (Header, Footer, Main)
- Responsive navigation
- Data structure for athlete profile
- Sample data for Emily Johnson
- Base typography and spacing system

### Non-Functional
- Mobile-first responsive design
- Accessible (ARIA labels, semantic HTML)
- Consistent spacing scale (4px base)
- Typography hierarchy

## Architecture

### Data Structure (Easy to Swap)

```typescript
// src/data/athlete-profile.ts
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
```

### Layout Components

```
src/components/layout/
├── site-header.tsx      # Nav with CTA
├── site-footer.tsx      # Minimal footer
├── section-container.tsx # Consistent spacing
└── mobile-nav.tsx       # Mobile menu
```

## Related Code Files

### Create
- `src/data/athlete-profile.ts` - Data types and sample data
- `src/lib/constants.ts` - Colors, spacing, breakpoints
- `src/components/layout/site-header.tsx`
- `src/components/layout/site-footer.tsx`
- `src/components/layout/section-container.tsx`
- `src/index.css` - Base styles, Tailwind directives

### Modify
- `src/App.tsx` - Add layout structure

## Implementation Steps

1. **Create data structure**
   - Define `AthleteProfile` interface
   - Add sample data for Emily Johnson
   - Create `src/data/index.ts` to export profile

2. **Set up base styles**
   - Configure Tailwind colors (custom palette)
   - Add typography scale in `tailwind.config.js`
   - Create `index.css` with Tailwind directives

3. **Create layout components**
   - `site-header.tsx`: Logo + Nav + CTA button
   - `site-footer.tsx`: Copyright + minimal links
   - `section-container.tsx`: Max-width + padding wrapper

4. **Add responsive navigation**
   - Desktop: horizontal menu
   - Mobile: hamburger menu (use shadcn/ui Sheet or Dialog)

5. **Update App.tsx**
   - Wrap content in layout components
   - Add smooth scroll behavior

## Success Criteria

- [x] Data structure compiles with TypeScript
- [x] Sample data loads without errors
- [x] Layout components render on mobile + desktop
- [x] Navigation works on all screen sizes
- [x] Smooth scroll to sections works
- [x] No horizontal scroll on mobile

## Risk Assessment

| Risk | Mitigation |
|------|------------|
| Data structure inflexible | Use interfaces, keep it flat |
| Nav component complex | Start simple, enhance later |
| Mobile menu UX issues | Test on real device, use proven shadcn patterns |

## Security Considerations

- Sanitize user inputs in contact form (later phase)
- Validate external URLs (YouTube, HUDL links)

## Next Steps

Phase 3 (Components) - build individual section components using the data structure.
