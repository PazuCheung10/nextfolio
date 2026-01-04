# All Current Descriptions Across Portfolio

This document contains all current text descriptions from every page and component in the portfolio.

---

## Hero Section (`/components/home/Hero.tsx`)

### Main Heading
```
I build enterprise web applications with auth, RBAC, and realtime features.
```

### Subtitle/Description
```
Full-stack developer specializing in authentication, role-based access control, and real-time collaboration. Building Accessly—an enterprise platform with NextAuth, Socket.io, and SSR dashboards.
```

---

## Highlights Section (`/components/home/Highlights.tsx`)

### Selected Work Heading
```
Selected Work
```

### Selected Work Description
```
Featured projects showcasing enterprise authentication, task management, and e-commerce development.
```

### Tech Stack Section Heading
```
What I Use
```

### Tech Stack Description
```
Technologies and tools I work with to build modern web applications.
```

---

## Projects Page (`/app/projects/page.tsx`)

### Page Heading
```
My Projects
```

### Page Description
```
A collection of full-stack projects demonstrating enterprise patterns, authentication systems, and real-time features. Accessly leads as the flagship project, showcasing production-ready auth, RBAC, and collaboration tools. Additional projects highlight e-commerce flows, task management, and API integrations.
```

---

## All Projects (`/data/projects.ts`)

### 1. Accessly (ID: 6) - Featured ✅

**Summary:**
```
Enterprise auth platform with RBAC, realtime chat, and SSR dashboards.
```

**Description:**
```
A full-stack enterprise application featuring NextAuth authentication, role-based access control (RBAC), real-time chat with Socket.io, and server-side rendered dashboards. Demonstrates production-ready patterns for authentication, authorization, and real-time collaboration.
```

**Tags:**
- Next.js
- NextAuth
- Prisma
- Socket.io
- TypeScript
- PostgreSQL

**Links:**
- Demo: https://accessly.vercel.app
- GitHub: https://github.com/PazuCheung10/accessly

**Status:** Completed | Featured: Yes

---

### 2. TaskZen (ID: 3) - Featured ✅

**Summary:**
```
Smooth Kanban with drag-and-drop and global store.
```

**Description:**
```
A lightweight yet powerful Kanban board application with intuitive drag-and-drop functionality, persistent storage, and smooth micro-animations. Perfect for personal and team task management.
```

**Tags:**
- React
- TypeScript
- Zustand
- React DnD

**Links:**
- Demo: https://taskzen.vercel.app
- GitHub: https://github.com/PazuCheung10/taskzen

**Status:** Completed | Featured: Yes

---

### 3. ShopVerse (ID: 5) - Featured ✅

**Summary:**
```
Full e-commerce flow from product list to Stripe checkout.
```

**Description:**
```
A complete e-commerce demonstration covering the full shopping journey from product discovery to secure checkout. Features product catalog, cart management, wishlist, and Stripe integration with form validation.
```

**Tags:**
- Next.js
- Stripe
- Prisma
- Zod
- React Hook Form

**Links:**
- Demo: https://shopverse.vercel.app
- GitHub: https://github.com/PazuCheung10/shopverse

**Status:** Completed | Featured: Yes

---

### 4. WeatherFlow (ID: 4)

**Summary:**
```
Map-based weather search with dynamic visuals.
```

**Description:**
```
An immersive weather application combining location-based forecasts with interactive maps. Features city search, geolocation, animated weather icons, and beautiful visual transitions.
```

**Tags:**
- React
- TypeScript
- OpenWeather API
- Leaflet

**Links:**
- Demo: https://weatherflow.vercel.app
- GitHub: https://github.com/PazuCheung10/weatherflow

**Status:** Completed | Featured: No

---

### 5. InsightBoard (ID: 2) - Archived

**Summary:**
```
Crypto dashboard with charts and watchlist (demo with sample data).
```

**Description:**
```
A cryptocurrency tracking dashboard featuring interactive charts, custom watchlists, and advanced filtering. Currently using sample data for demonstration purposes. Built with data visualization and caching logic for optimal performance.
```

**Tags:**
- Next.js
- TypeScript
- TanStack Query
- Recharts

**Links:**
- Demo: https://insightboard.vercel.app
- GitHub: https://github.com/PazuCheung10/insightboard

**Status:** Archived | Featured: No | Status Label: "Demo Mode (Sample Data)"

---

### 6. Nextfolio (ID: 1)

**Summary:**
```
Personal portfolio with unified design and project showcase.
```

**Description:**
```
A comprehensive personal portfolio showcasing projects with smooth animations, case studies, and professional presentation. Features unified design system, responsive layout, and optimized performance.
```

**Tags:**
- Next.js
- TypeScript
- Tailwind
- Framer Motion
- Vercel

**Links:**
- Demo: https://nextfolio.dev
- GitHub: https://github.com/PazuCheung10/nextfolio

**Status:** Completed | Featured: No

---

### 7. MotionCanvas (ID: 7)

**Summary:**
```
Interactive generative art for creative flair.
```

**Description:**
```
A creative showcase of generative art and interactive visuals demonstrating advanced frontend capabilities. Features canvas-based graphics, mouse/touch interactions, and AI-driven parameter controls.
```

**Tags:**
- React
- Canvas API
- Three.js
- Framer Motion

**Links:**
- Demo: https://motioncanvas.vercel.app
- GitHub: https://github.com/PazuCheung10/motioncanvas

**Status:** Completed | Featured: No

---

## About Page (`/app/about/page.tsx`)

### About Section Description
```
I'm a passionate frontend developer with a love for creating beautiful, functional web experiences that users love to interact with. With expertise in React, Next.js, and modern web technologies, I build applications that are not only visually appealing but also performant, accessible, and maintainable.
```

---

## Project Card Component (`/components/projects/ProjectCard.tsx`)

**Note:** The ProjectCard component displays:
- Project title
- Project summary (from projects.ts)
- Project tags
- Status labels (if applicable)
- Links to demo and GitHub

The card uses the `summary` field from the project data, not the full `description`.

---

## Summary

### Pages with Descriptions:
1. **Hero Section** - Main landing page introduction
2. **Highlights Section** - Selected work showcase
3. **Projects Page** - Full projects listing page
4. **About Page** - Personal introduction
5. **Individual Project Cards** - Each project's summary and description

### Featured Projects (shown in Highlights):
- Accessly (ID: 6)
- TaskZen (ID: 3)
- ShopVerse (ID: 5)

### Total Projects: 7
- Featured: 3
- Completed: 6
- Archived: 1

