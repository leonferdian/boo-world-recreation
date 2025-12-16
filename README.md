# Boo World Recreation

This is a pixel-perfect recreation of a question page from boo.world, built with Next.js and Tailwind CSS. The project was completed in approximately 2 hours with comprehensive improvements and full functionality.

## Features

- Responsive layout with sidebar navigation (80px minimized / 256px expanded)
- Question display with tags and engagement metrics
- Comments section with user avatars and interactions
- Related posts grid with proper alignment
- Dark theme with smooth animations and glowing effects
- Universes card with 34 categories and soul counts
- SignInModal popup covering entire page
- All buttons functional with links to original Boo.world
- Official Boo.world favicon
- App store links (Google Play & Apple App Store) with UTM parameters

## Tech Stack

- Next.js (Pages Router)
- React 18
- Tailwind CSS
- Lucide Icons

## Getting Started

1. Clone the repository
2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

- `/components` - Reusable UI components
- `/lib` - Mock data and utilities
- `/pages` - Application routes and API endpoints
- `/public` - Static assets
- `/styles` - Global styles and Tailwind configuration


## Project Improvements & Features

### Core Improvements Made (2-hour development)

**Layout & Design**
- Fixed responsive sidebar with smooth transitions (80px minimized / 256px expanded)
- Implemented proper three-column layout with Universes card between sidebar and question
- Fixed all offset and alignment issues in question card and related posts
- Added proper spacing and flex utilities to prevent layout shifts

**Universes System**
- Complete Universes card with all 34 categories from original Boo.world
- Proper hashtag formatting with icons and soul counts
- Scrollable content with gradient mask effect
- All universe buttons link to `https://boo.world/u/{universe}`

**Interactive Components**
- SignInModal popup covering entire page with z-index fix
- Three sign-in options (Apple, Google, Email) linking to signup page
- Header SIGN IN button and QuestionCard JOIN NOW button trigger modal
- Glowing button animations using CSS keyframes

**Navigation & Links**
- All buttons functional with proper links to original Boo.world
- Google Play link: `https://play.google.com/store/apps/details?id=enterprises.dating.boo&utm_source=website&utm_medium=owned&utm_campaign=websiteandroid`
- Apple App Store link configured
- Universe buttons, navigation, and action buttons all link to correct URLs

**Styling & Theme**
- Dark theme with cyan accents matching original design
- Official Boo.world favicon: `https://boo.world/icon.png`
- Proper hover states and transitions
- Responsive breakpoints for mobile, tablet, and desktop

**Data & Content**
- Updated mockData.js with complete universe list (34 categories)
- Added user profiles with avatars, personality types, zodiac signs
- Proper comment structure with likes, replies, and GIFs
- Related posts with correct engagement metrics

**Technical Fixes**
- Fixed hydration and runtime errors in components
- Proper client-side number formatting with toLocaleString
- Image error handling with fallback initials
- Proper z-index layering for modal overlay

## Deployment

This project can be deployed on Vercel, Netlify, or any other platform that supports Next.js applications.

## License

MIT
