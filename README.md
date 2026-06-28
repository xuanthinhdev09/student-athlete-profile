# Athlete Modern - Student-Athlete Recruiting Website

**Template #1: Athlete Modern**

A clean, professional college recruiting website template for high school student-athletes. Designed to impress college coaches and admissions officers with a minimal, academic-inspired aesthetic.

## Features

- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Clean, professional design
- ✅ All essential recruiting sections
- ✅ Easy data customization
- ✅ Smooth animations
- ✅ Fast loading
- ✅ Accessible

## Tech Stack

- React + Vite + TypeScript
- Tailwind CSS
- Framer Motion
- Lucide Icons

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Customization Guide

### 1. Update Athlete Data

Edit `src/data/athlete-profile.ts`:

```typescript
export const athleteProfile: AthleteProfile = {
  name: 'Your Name',
  classOf: '2027',
  position: 'Your Position',
  // ... update all fields
}
```

### 2. Replace Images

Update the `gallery` array in `src/data/athlete-profile.ts` with your own image URLs:

```typescript
gallery: [
  {
    src: 'https://your-image-url.jpg',
    alt: 'Description',
    category: 'action',
  },
  // ... more images
]
```

### 3. Update Highlight Video

Replace the YouTube/Video URL in the data file:

```typescript
highlightVideo: 'https://www.youtube.com/embed/YOUR_VIDEO_ID'
```

### 4. Customize Colors

Edit `tailwind.config.js` to update the color palette:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Your primary colors
      },
      accent: {
        // Your accent colors
      }
    }
  }
}
```

## Page Structure

1. **Hero** - Name, class, position, CTA buttons
2. **About** - Personal statement and quick facts
3. **Athletic Profile** - Physical stats and coach info
4. **Highlight Video** - Embedded video player
5. **Statistics** - Season stats table
6. **Achievements** - Awards and recognition timeline
7. **Gallery** - Photo gallery with lightbox
8. **Academic Information** - GPA, test scores, intended major
9. **Contact** - Coach and athlete contact info

## Deployment

### Cloudflare Pages

```bash
# Build
npm run build

# Deploy dist/ folder to Cloudflare Pages
```

### Other Platforms

The `dist/` folder can be deployed to:
- Netlify
- Vercel
- GitHub Pages
- Any static hosting service

## License

MIT License - Use freely for your recruiting website needs.

## Support

For questions or customization help, contact the developer.
