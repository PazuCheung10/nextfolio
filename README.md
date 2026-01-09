# Nextfolio – Personal Portfolio

A modern, production-ready personal portfolio showcasing front-end development skills, freelance readiness, and design clarity. Built with Next.js (App Router), TypeScript, and TailwindCSS to demonstrate clean architecture, modular code patterns, and aesthetic UI design principles.

---

## Purpose

This portfolio is designed as both a personal website and a living codebase that demonstrates how I structure, scale, and maintain modern front-end applications. The focus is clarity, consistency, and production-ready patterns rather than experimental features.

---

## Tech Stack

| Layer | Tech |
|-------|------|
| **Framework** | Next.js (App Router) |
| **Language** | TypeScript |
| **Styling** | TailwindCSS + class-variance-authority + clsx |
| **Motion** | Framer Motion |
| **Data** | TanStack Query (API fetch), Zustand (state) |
| **Forms** | React Hook Form + Zod |
| **Deployment** | Vercel |
| **Lint/Format** | ESLint + Prettier + prettier-plugin-tailwindcss |

---

## Architecture

```
src/
├── app/
│   ├── (site)/
│   │   ├── layout.tsx      # Site shell with Header/Footer
│   │   └── page.tsx        # Home page
│   ├── projects/
│   │   └── page.tsx        # Projects showcase
│   ├── tech/
│   │   └── page.tsx        # Skills & technologies
│   ├── about/
│   │   ├── layout.tsx      # About page metadata
│   │   └── page.tsx        # About & contact form
│   ├── layout.tsx          # Root layout with fonts
│   ├── page.tsx            # Root page (redirects to home)
│   └── globals.css         # Global styles & design tokens
│
├── components/
│   ├── ui/                 # Atomic UI components
│   │   ├── Button.tsx      # Variant-based button component
│   │   ├── Card.tsx        # Reusable card container
│   │   ├── Chip.tsx        # Tag/chip component
│   │   ├── Container.tsx   # Layout wrapper
│   │   └── Section.tsx     # Section spacing component
│   ├── nav/
│   │   ├── Header.tsx      # Navigation with mobile menu
│   │   └── Footer.tsx      # Footer with social links
│   ├── home/
│   │   ├── Hero.tsx        # Animated hero section
│   │   └── Highlights.tsx  # Project highlights + tech stack
│   └── projects/
│       ├── ProjectCard.tsx # Individual project display
│       └── ProjectGrid.tsx # Responsive project grid
│
├── data/
│   └── projects.ts         # Project metadata & links
│
├── lib/
│   ├── seo.ts              # SEO metadata helpers
│   └── utils.ts            # Utility functions (cn helper)
│
└── types/
    └── index.ts            # Shared TypeScript interfaces
```

### File Organization

Files are grouped by **feature and responsibility**:
- **App Router**: Route-based organization with co-located layouts
- **Components**: Feature-based folders with atomic UI components
- **Data**: Centralized project metadata for easy content management
- **Lib**: Shared utilities and configuration helpers
- **Types**: Centralized TypeScript interfaces for type safety

---

## Path Aliases

Configured in `tsconfig.json` for cleaner imports:

```json
{
  "compilerOptions": {
    "baseUrl": "./src",
    "paths": {
      "@/*": ["*"]
    }
  }
}
```

All imports use absolute aliases:
- `@/components/...` for UI components
- `@/lib/...` for utilities
- `@/types/...` for shared interfaces
- `@/data/...` for static data

---

## Design Notes

### Theme & Colors
- **Background**: Dark slate (`#0f172a`) for modern, professional feel
- **Accent**: Cyan (`#22d3ee`, `#06b6d4`) for interactive elements
- **Typography**: Inter font family for clean, readable text
- **Motion**: Framer Motion for smooth reveal animations and hover transitions

### Layout Principles
- **Mobile-first**: Responsive design using Tailwind breakpoints
- **Grid System**: CSS Grid and Flexbox for flexible layouts
- **Spacing**: Consistent spacing scale using Tailwind utilities
- **Accessibility**: Focus-visible rings, ARIA labels, and reduced-motion support

### Global Styles (`src/app/globals.css`)
Imports Tailwind layers and defines design tokens:
```css
@import "tailwindcss";

:root {
  /* Spacing scale */
  --space-xs: 0.25rem;
  --space-sm: 0.5rem;
  /* ... more tokens */
}
```

---

## Naming Conventions

- **Components** → PascalCase (e.g. `ProjectCard.tsx`)
- **Hooks / Utils** → camelCase (e.g. `useScrollReveal.ts`)
- **Folders** → lowercase by feature (`nav`, `projects`, `lib`)
- **Files** → descriptive, kebab-case for utilities (`next-sitemap.config.js`)

---

## Logic & Patterns

### Component Architecture
- **Typed Props**: Full TypeScript coverage with no `any` types
- **Conditional Classes**: `clsx` utility for dynamic className composition
- **Atomic Design**: Reusable UI components with variant-based styling
- **Composition**: Higher-order components for layout and functionality

### Data Management
- **API Fetching**: TanStack Query for caching, loading states, and error handling
- **Form Validation**: React Hook Form + Zod for type-safe form handling
- **Global State**: Zustand for lightweight state management (TaskZen demo)
- **Static Data**: TypeScript interfaces for project metadata

### SEO & Performance
- **Metadata**: Next.js metadata API for dynamic SEO configuration
- **Sitemap**: Automatic sitemap generation with next-sitemap
- **Performance**: Optimized bundle size with Next.js code splitting
- **Accessibility**: WCAG 2.1 compliant with semantic HTML

---

## Setup & Commands

### Prerequisites
- Node.js 18+
- npm or pnpm

### Installation
```bash
# Clone repository
git clone <repository-url>
cd nextfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint errors
npm run format       # Format code with Prettier
npm run type-check   # Run TypeScript type checking
```

### Development Server
Open [http://localhost:3000](http://localhost:3000) to view the portfolio (or http://localhost:3001 if port 3000 is in use).

**Deploy easily to Vercel for production.**

---

## Next.js Configuration

The project uses `next.config.ts` with App Router enabled:
```typescript
const nextConfig = {
  experimental: { appDir: true },
  // Additional configuration...
}
```

---

## Roadmap

- [ ] Add Crypto Tracker demo (CoinGecko API)
- [ ] Add TaskZen Kanban demo (Zustand)
- [ ] Add Feedback Wall API route
- [ ] Add blog/notes route using MDX (optional)
- [ ] Add dynamic project pages (/projects/[slug])
- [ ] Polish SEO and metadata
- [ ] Write case-study markdowns for each project

---

## 🤖 Cursor Notes

- Keep README.md as the single source of truth for project structure and logic.
- When prompting Cursor, always prefix with:
  "Refer to README.md for architecture context."
- To save tokens, ask for partial updates (e.g. "add animation in Hero.tsx") instead of regenerating full files.

---

## Author / License

© 2025 Pazu – Freelance Front-End Developer

Built for educational & professional showcase purposes.

Licensed under the MIT License.

---
Built by Pazu
https://pazu.dev