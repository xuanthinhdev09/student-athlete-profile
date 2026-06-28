---
phase: 1
title: "Setup"
status: completed
priority: P1
effort: "30m"
dependencies: []
---

# Phase 1: Setup

## Overview

Initialize React + Vite project with Tailwind CSS, shadcn/ui, and required dependencies. Scaffold the project structure for template architecture.

## Requirements

### Functional
- Create Vite + React + TypeScript project
- Configure Tailwind CSS with custom theme
- Install and configure shadcn/ui
- Install Framer Motion, Lucide Icons
- Set up folder structure for scalable template

### Non-Functional
- Fast dev server startup
- HMR working
- TypeScript strict mode
- ESLint + Prettier configured

## Architecture

```
athlete-modern/
├── src/
│   ├── components/       # Reusable UI components
│   │   ├── ui/          # shadcn/ui components
│   │   ├── sections/    # Page section components
│   │   └── layout/      # Layout components
│   ├── lib/             # Utilities, configs
│   ├── data/            # Sample data (easy to swap)
│   ├── assets/          # Images, videos
│   └── App.tsx
├── public/
├── tailwind.config.js
├── vite.config.ts
└── tsconfig.json
```

## Related Code Files

### Create
- `package.json` - Dependencies
- `vite.config.ts` - Vite config
- `tailwind.config.js` - Tailwind theme
- `tsconfig.json` - TypeScript config
- `.eslintrc.cjs` - ESLint
- `prettier.config.js` - Prettier
- `src/` - Source directory structure
- `components.json` - shadcn/ui config

## Implementation Steps

1. **Initialize Vite + React + TypeScript**
   ```bash
   npm create vite@latest . -- --template react-ts
   ```

2. **Install core dependencies**
   ```bash
   npm install tailwindcss postcss autoprefixer
   npm install framer-motion lucide-react clsx tailwind-merge
   ```

3. **Install shadcn/ui dependencies**
   ```bash
   npm install class-variance-authority
   npm install @radix-ui/react-slot
   ```

4. **Initialize Tailwind CSS**
   ```bash
   npx tailwindcss init -p
   ```

5. **Configure Tailwind**
   - Add `./index.css`, `./src/**/*.{ts,tsx}` to content
   - Add custom theme colors (college recruiting palette)

6. **Initialize shadcn/ui**
   ```bash
   npx shadcn-ui@latest init
   ```

7. **Create folder structure**
   ```bash
   mkdir -p src/components/{ui,sections,layout}
   mkdir -p src/{lib,data,assets}
   ```

8. **Create utility file**
   - `src/lib/utils.ts` - `cn()` helper for clsx + tailwind-merge

9. **Verify setup**
   - Run `npm run dev`
   - Confirm HMR works
   - Confirm TypeScript compiles

## Success Criteria

- [x] `npm run dev` starts without errors
- [x] Tailwind classes work in App.tsx
- [ ] shadcn/ui init created `components.json` (skipped - not required for v3)
- [x] Folder structure matches plan
- [x] TypeScript strict mode enabled
- [x] No console errors on load

## Risk Assessment

| Risk | Mitigation |
|------|------------|
| Node version mismatch | Use Node 18+ LTS |
| shadcn/ui init fails | Manually create config |
| Tailwind HMR slow | Check Vite config |

## Next Steps

Phase 2 (Foundation) - configure base styles, layout components, and data structure for easy customization.
