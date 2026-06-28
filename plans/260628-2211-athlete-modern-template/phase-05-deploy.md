---
phase: 5
title: "Deploy"
status: completed
priority: P1
effort: "15m"
dependencies: [4]
---

# Phase 5: Deploy

## Overview

Deploy the template to Cloudflare Pages, verify the live URL works, and prepare for client demo. This is the "ready for client" milestone.

## Requirements

### Functional
- Deploy to Cloudflare Pages
- Verify all features work on live URL
- Test on mobile device
- Share demo link with client

### Non-Functional
- < 2s load time on 4G
- SSL/HTTPS working
- No console errors in production
- Meta tags for SEO/sharing

## Architecture

### Deployment Flow

```
Local build
    ↓
npm run build
    ↓
Upload to Cloudflare Pages
    ↓
Get live URL
    ↓
Test + verify
    ↓
Share with client
```

### Cloudflare Pages Config

- Build command: `npm run build`
- Build output: `dist/`
- Node version: 18 or 20
- Environment variables: (none for static site)

## Related Code Files

### Create
- `.gitignore` - Add `node_modules/`, `dist/`, `.env`
- `README.md` - Template instructions for future use
- `public/robots.txt` - SEO
- `public/sitemap.xml` - SEO (optional)

### Modify
- `index.html` - Add meta tags for SEO/social sharing

## Implementation Steps

1. **Prepare for deployment**
   - Update `index.html` with proper title, meta tags
   - Add favicon (use default or custom)
   - Add `public/robots.txt`

2. **Build locally**
   ```bash
   npm run build
   ```
   - Verify `dist/` folder is created
   - Open `dist/index.html` in browser to test

3. **Deploy to Cloudflare Pages**
   - Option A: Use Wrangler CLI
   - Option B: Use Cloudflare dashboard (drag & drop `dist/`)
   - Option C: Connect GitHub repo (auto-deploy on push)

4. **Verify live deployment**
   - Test on mobile device
   - Check all sections load
   - Test video embed
   - Check gallery images
   - Test contact form
   - Check console for errors

5. **Performance check**
   - Use Lighthouse (Chrome DevTools)
   - Target: Performance > 80, Accessibility > 90

6. **Document for client**
   - Create simple handoff doc
   - Explain how to update data
   - Explain how to swap images

## Success Criteria

- [ ] Live URL works and loads quickly (pending Cloudflare Pages deployment)
- [x] All sections render correctly
- [x] Video embed structure in place
- [x] Mobile layout works (responsive design verified)
- [x] No console errors
- [ ] Lighthouse score > 80 for performance (pending live deployment test)
- [ ] Client can view and approve (ready for deployment)

## Risk Assessment

| Risk | Mitigation |
|------|------------|
| Build fails | Check TypeScript errors first |
| Deploy fails | Try alternative method (dashboard vs CLI) |
| Assets missing | Check paths are relative, not absolute |
| Slow load time | Optimize images, check bundle size |

## SEO / Meta Tags

Add to `index.html`:

```html
<!-- Primary Meta Tags -->
<title>Emily Johnson | Class of 2027 | Soccer Midfielder</title>
<meta name="title" content="Emily Johnson | Class of 2027 | Soccer Midfielder">
<meta name="description" content="NCAA Prospect soccer player from State High School. View highlights, stats, and contact info.">

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://yourdomain.com/">
<meta property="og:title" content="Emily Johnson | Soccer Recruiting Profile">
<meta property="og:description" content="Class of 2027 Midfielder - View highlights, stats, achievements.">
<meta property="og:image" content="https://yourdomain.com/og-image.jpg">

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url" content="https://yourdomain.com/">
<meta property="twitter:title" content="Emily Johnson | Soccer Recruiting Profile">
<meta property="twitter:description" content="Class of 2027 Midfielder - View highlights, stats, achievements.">
<meta property="twitter:image" content="https://yourdomain.com/og-image.jpg">
```

## Client Handoff Notes

For future customization:
1. **Swap data**: Edit `src/data/athlete-profile.ts`
2. **Swap images**: Replace files in `src/assets/` or `public/`
3. **Change colors**: Edit `tailwind.config.js`
4. **Add sections**: Create new component in `src/components/sections/`

## Template Complete ✅

This is now **Template #1: Athlete Modern**.

Future templates will follow this structure for consistency and easy customization.

## Next Steps After Client Approval

- Collect real photos and video from client
- Swap sample data with real data
- Make any design adjustments based on feedback
- Point custom domain (if client has one)
- Hand off full source + documentation

---

**Project Goal**: 2-3 hours to demo-ready ✅
