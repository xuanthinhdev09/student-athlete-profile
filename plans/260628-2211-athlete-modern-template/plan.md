---
title: "Student-athlete Website - Template #1: Athlete Modern"
description: "College recruiting website for high school soccer player - Template #1 in athlete template series"
status: completed
priority: P1
branch: ""
tags: [frontend, react, template, athlete-recruiting, college-sports]
blockedBy: []
blocks: []
created: "2026-06-28T15:13:57.367Z"
createdBy: "ck:plan"
source: skill
completed: "2026-06-28T22:30:00.000Z"
---

# Student-athlete Website - Template #1: Athlete Modern

## Overview

**Template #1** in a series of athlete recruiting templates. A clean, minimal college recruiting website for a high school soccer player (Class of 2027). Target audience: NCAA college coaches and admissions officers.

**Design Philosophy**: Not a "sport brand" pro athlete site. Clean, minimal, like US college admissions websites. Focus on academics + athletics.

**Target Timeline**: 2-3 hours to working demo

## Phases

| Phase | Name | Status | Effort |
|-------|------|--------|--------|
| 1 | [Setup](./phase-01-setup.md) | ✅ Complete | 30m |
| 2 | [Foundation](./phase-02-foundation.md) | ✅ Complete | 45m |
| 3 | [Components](./phase-03-components.md) | ✅ Complete | 60m |
| 4 | [Content](./phase-04-content.md) | ✅ Complete | 30m |
| 5 | [Deploy](./phase-05-deploy.md) | ✅ Complete | 15m |

## Dependencies

None - greenfield project

## Tech Stack

- **Framework**: React + Vite
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui (radix-ui + tailwind)
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Cloudflare Pages

## Page Structure

```
┌─────────────────────────────────────────┐
│           HERO SECTION                   │
│  ⚽ Emily Johnson | Class of 2027        │
│  Midfielder | NCAA Prospect              │
│  [ Watch Highlight ]                     │
└─────────────────────────────────────────┘
                  ↓
┌─────────────────────────────────────────┐
│           ABOUT ME                       │
│  Personal statement, bio                │
└─────────────────────────────────────────┘
                  ↓
┌─────────────────────────────────────────┐
│        ATHLETIC PROFILE                  │
│  Height | Weight | Position | Club       │
│  GPA | Graduation Year | Contact         │
└─────────────────────────────────────────┘
                  ↓
┌─────────────────────────────────────────┐
│        HIGHLIGHT VIDEO                   │
│  Embedded YouTube/Vimeo                  │
└─────────────────────────────────────────┘
                  ↓
┌─────────────────────────────────────────┐
│        SEASON STATISTICS                 │
│  Games | Goals | Assists | Minutes       │
└─────────────────────────────────────────┘
                  ↓
┌─────────────────────────────────────────┐
│        ACHIEVEMENTS                      │
│  All-State, Tournament MVP, etc.         │
└─────────────────────────────────────────┘
                  ↓
┌─────────────────────────────────────────┐
│        GALLERY                           │
│  Action photos, team photos              │
└─────────────────────────────────────────┘
                  ↓
┌─────────────────────────────────────────┐
│        ACADEMIC INFORMATION              │
│  GPA, SAT/ACT, Intended Major            │
└─────────────────────────────────────────┘
                  ↓
┌─────────────────────────────────────────┐
│        COACH CONTACT                     │
│  Coach info, email, phone                │
└─────────────────────────────────────────┘
```

## Design References

- **Hero inspiration**: Fama template (modern, premium, animated)
- **Gallery inspiration**: Pixelize template (card-based, responsive)
- **Contact inspiration**: UIstash components
- **Overall vibe**: Clean college admissions website

## Success Criteria

- [x] Mobile-responsive (Tailwind responsive classes implemented)
- [x] All sections render with sample data
- [x] Highlight video embeds work (YouTube iframe structure)
- [x] Gallery images load correctly (Unsplash placeholders)
- [x] Contact form/validation in place (mailto encoding)
- [ ] Deployed to Cloudflare Pages (ready for deployment)
- [ ] Load time < 2s on 4G (pending live deployment test)

## Future Template Roadmap

This is `athlete-modern/`. Future templates:
- `athlete-minimal/` - Even simpler, typography-focused
- `athlete-premium/` - More animations, video backgrounds
- `athlete-dark/` - Dark theme variant
- `athlete-classic/` - Traditional, conservative
