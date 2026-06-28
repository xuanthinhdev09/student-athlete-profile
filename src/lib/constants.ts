/**
 * Design constants and tokens
 * Centralized for easy theme customization
 */

export const SITE_NAME = 'Emily Johnson'
export const SITE_TAGLINE = 'Class of 2027 • Midfielder • NCAA Prospect'

// Color palette (already in tailwind.config.js, exported here for JS access)
export const colors = {
  primary: {
    50: '#e6f0f9',
    100: '#cce1f3',
    200: '#99c3e7',
    300: '#66a5db',
    400: '#3387cf',
    500: '#0069c2',
    600: '#0054a0',
    700: '#00407e',
    800: '#002c5c',
    900: '#00183a',
  },
  accent: {
    50: '#fff8e6',
    100: '#fff1cc',
    200: '#ffe399',
    300: '#ffd566',
    400: '#ffc733',
    500: '#ffb900',
    600: '#cca300',
    700: '#998700',
    800: '#666600',
    900: '#333300',
  },
  neutral: {
    50: '#fafafa',
    100: '#f5f5f4',
    200: '#e7e5e4',
    300: '#d6d3d1',
    400: '#a8a29e',
    500: '#78716c',
    600: '#57534e',
    700: '#44403c',
    800: '#292524',
    900: '#1c1917',
  },
} as const

// Breakpoints (matching Tailwind defaults)
export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const

// Spacing scale (4px base unit)
export const spacing = {
  xs: '0.25rem',   // 4px
  sm: '0.5rem',    // 8px
  md: '1rem',      // 16px
  lg: '1.5rem',    // 24px
  xl: '2rem',      // 32px
  '2xl': '3rem',   // 48px
  '3xl': '4rem',   // 64px
} as const

// Animation durations
export const animations = {
  fast: '0.2s',
  normal: '0.3s',
  slow: '0.5s',
  slower: '0.6s',
} as const
