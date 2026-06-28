---
phase: 3
title: "Components"
status: completed
priority: P1
effort: "60m"
dependencies: [2]
---

# Phase 3: Components

## Overview

Build the core section components: Hero, About, Athletic Profile, Highlight Video, Stats, Achievements, Gallery, Academic Info, Contact. Each component consumes data from `AthleteProfile`.

## Requirements

### Functional
- Hero section with CTA and subtle animation
- About section with personal statement
- Athletic profile cards (grid layout)
- Highlight video embed (YouTube/Vimeo)
- Statistics table/cards
- Achievements timeline
- Image gallery with lightbox
- Academic information cards
- Contact form with validation

### Non-Functional
- Each section is self-contained component
- Framer Motion animations on scroll
- Mobile-responsive layouts
- Accessible (semantic HTML, ARIA)

## Architecture

### Section Components

```
src/components/sections/
├── hero-section.tsx          # Hero with animation
├── about-section.tsx         # Personal statement
├── athletic-profile-section.tsx  # Stats cards
├── highlight-video-section.tsx   # Video embed
├── statistics-section.tsx    # Season stats
├── achievements-section.tsx  # Timeline/cards
├── gallery-section.tsx       # Photo grid
├── academic-section.tsx      # Academic cards
└── contact-section.tsx       # Form + coach info
```

### Component Design Pattern

Each section:
1. Accepts relevant `AthleteProfile` props
2. Has consistent internal padding (via `SectionContainer`)
3. Optional Framer Motion `motion.*` wrapper
4. Responsive grid/flex layouts

## Related Code Files

### Create
- `src/components/sections/hero-section.tsx`
- `src/components/sections/about-section.tsx`
- `src/components/sections/athletic-profile-section.tsx`
- `src/components/sections/highlight-video-section.tsx`
- `src/components/sections/statistics-section.tsx`
- `src/components/sections/achievements-section.tsx`
- `src/components/sections/gallery-section.tsx`
- `src/components/sections/academic-section.tsx`
- `src/components/sections/contact-section.tsx`

### Modify
- `src/App.tsx` - Compose sections together

## Implementation Steps

1. **Hero Section**
   - Full viewport height (or close to it)
   - Name, Class of, Position, "NCAA Prospect"
   - "Watch Highlight" CTA button
   - Framer Motion: fade-in + slide-up on mount
   - Background: subtle gradient or pattern

2. **About Section**
   - Two-column layout (desktop)
   - Photo on left, text on right
   - Personal statement text

3. **Athletic Profile**
   - Grid of stat cards (Height, Weight, Position, Club, etc.)
   - Icon + label + value per card
   - Use Lucide icons

4. **Highlight Video**
   - Responsive YouTube/Vimeo embed
   - Handle aspect ratio (16:9)
   - Fallback if no video URL

5. **Statistics**
   - Table for season stats (Games, Goals, Assists, Minutes)
   - Alternative: stat cards per season
   - Highlight key metrics

6. **Achievements**
   - Timeline layout (vertical line with items)
   - Or card grid for achievements
   - Year + title + description

7. **Gallery**
   - Masonry or grid layout
   - Filter by category (action, team, awards)
   - Optional lightbox (click to expand)

8. **Academic Section**
   - Cards for GPA, SAT/ACT, Intended Major, High School
   - Clean, academic-focused design

9. **Contact Section**
   - Coach contact info (name, email, phone)
   - Simple contact form (optional - can use email link)
   - Social links (HUDL, Instagram if provided)

10. **Update App.tsx**
    - Compose all sections
    - Add smooth scroll between sections
    - Add fade-in on scroll (Framer Motion `useInView`)

## Success Criteria

- [x] All sections render with sample data
- [x] Hero animation plays smoothly on load
- [x] Video embed works on mobile + desktop
- [x] Gallery images load without layout shift
- [x] Contact form validates inputs (mailto link with encoding)
- [x] All sections responsive on 375px, 768px, 1024px+
- [x] No console errors

## Risk Assessment

| Risk | Mitigation |
|------|------------|
| Video embed fails on mobile | Test responsive iframe |
| Gallery layout shifts | Use aspect-ratio CSS |
| Form validation complex | Start with HTML5 validation, enhance later |
| Too many animations | Keep subtle, use `framer-motion` sparingly |

## Security Considerations

- Sanitize all user-generated content in form
- Validate URLs before embedding (prevent XSS)
- Use `rel="noopener noreferrer"` on external links

## Next Steps

Phase 4 (Content) - polish visual design, add real placeholder images, refine animations.
