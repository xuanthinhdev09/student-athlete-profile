---
phase: 4
title: "Content"
status: completed
priority: P1
effort: "30m"
dependencies: [3]
---

# Phase 4: Content

## Overview

Polish the visual design, add placeholder images, refine animations, and ensure the template looks "demo-ready" for the client. This phase focuses on presentation quality.

## Requirements

### Functional
- Add placeholder images for gallery
- Add sample highlight video
- Refine typography hierarchy
- Polish spacing and alignment
- Add hover states and micro-interactions

### Non-Functional
- Visual polish matches "college admissions" aesthetic
- Clean, minimal, not over-designed
- Consistent color usage
- Smooth animations (not janky)

## Architecture

### Design Tokens (Already in Phase 2)

Refine:
- Color palette (primary, secondary, accent)
- Typography scale (h1-h6, body, small)
- Spacing scale (4px, 8px, 16px, 24px, 32px, 48px, 64px)
- Border radius scale

### Animation Strategy

- **Hero**: Fade in + slide up on mount (600ms)
- **Sections**: Fade in on scroll (using `useInView` from Framer Motion)
- **Cards**: Subtle scale on hover
- **Buttons**: Scale + color change on hover
- **Links**: Underline animation

## Related Code Files

### Modify
- `src/lib/constants.ts` - Refine design tokens
- `src/components/sections/hero-section.tsx` - Refine animation
- `src/components/sections/gallery-section.tsx` - Add placeholder images
- `src/index.css` - Add custom utilities if needed
- `src/data/athlete-profile.ts` - Update sample content

### Create
- `src/assets/` - Add placeholder images (or use URLs)

## Implementation Steps

1. **Refine color palette**
   - Primary: Deep blue or navy (trustworthy, academic)
   - Secondary: Light gray/white
   - Accent: Gold or muted accent color
   - Text: Slate grays for hierarchy

2. **Add placeholder content**
   - Sample highlight video (YouTube embed)
   - Gallery images (use Unsplash or placeholder service)
   - Realistic sample stats and achievements

3. **Polish typography**
   - Establish clear hierarchy (H1 > H2 > H3 > body)
   - Line height: 1.5-1.6 for body text
   - Font weights: 400 (regular), 500 (medium), 600 (semibold), 700 (bold)
   - Letter spacing for headings

4. **Refine animations**
   - Reduce duration if too slow (aim for 400-600ms)
   - Add easing curves (ease-out is default)
   - Test on mobile for performance

5. **Add hover states**
   - Buttons: scale(1.02), slight color shift
   - Cards: subtle lift effect
   - Links: underline animation

6. **Test responsiveness**
   - Check each section on 375px (mobile)
   - Check on 768px (tablet)
   - Check on 1024px+ (desktop)
   - Fix any layout issues

7. **Accessibility check**
   - Alt text on all images
   - ARIA labels where needed
   - Keyboard navigation works
   - Color contrast meets WCAG AA

## Success Criteria

- [x] Color palette is cohesive and professional
- [x] Typography hierarchy is clear
- [x] Animations feel smooth, not sluggish
- [x] Hover states are responsive
- [x] Mobile layout is flawless
- [x] Gallery images load without shift
- [x] Video embed works
- [x] No visual bugs or alignment issues

## Risk Assessment

| Risk | Mitigation |
|------|------------|
| Color palette too bold | Stick to muted, professional tones |
| Animations too slow | Keep under 600ms |
| Images fail to load | Use reliable placeholder service |
| Mobile layout breaks | Test early, use flex/grid carefully |

## Design Reference Aesthetic

- Think: college admissions website meets clean portfolio
- Avoid: sport brand aesthetics (neon colors, aggressive typography)
- Emulate: clean, airy layouts with strong whitespace

## Next Steps

Phase 5 (Deploy) - deploy to Cloudflare Pages and test live URL.
