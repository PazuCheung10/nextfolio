export interface Project {
  id: string
  title: string
  slug: string
  summary: string
  description: string
  tags: string[]
  links: {
    demo: string
    github: string
  }
  image?: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    id: '6',
    title: 'Accessly',
    slug: 'accessly',
    summary: 'Enterprise internal workspace with RBAC, realtime chat, and SSR dashboards.',
    description: 'A full-stack enterprise application featuring NextAuth authentication, role-based access control (RBAC), real-time chat with Socket.io, and server-side rendered dashboards. Demonstrates production-ready patterns for authentication, authorization, and real-time collaboration.',
    tags: ['Next.js', 'NextAuth', 'Prisma', 'Socket.io', 'TypeScript', 'PostgreSQL', 'Zustand', 'Tailwind CSS'],
    links: {
      demo: 'https://accessly-pvsc.onrender.com',
      github: 'https://github.com/PazuCheung10/accessly',
    },
    image: '/projects/accessly.png',
    featured: true,
  },
  {
    id: '3',
    title: 'TaskZen',
    slug: 'taskzen',
    summary: 'Smooth Kanban with drag-and-drop and global store.',
    description: 'A lightweight yet powerful Kanban board application with intuitive drag-and-drop functionality, persistent storage, and smooth micro-animations. Perfect for personal and team task management.',
    tags: ['Next.js', 'TypeScript', 'Zustand', '@dnd-kit', 'Tailwind CSS'],
    links: {
      demo: 'https://taskzen-bice.vercel.app',
      github: 'https://github.com/PazuCheung10/taskzen',
    },
    image: '/projects/taskzen.png',
    featured: true,
  },
  {
    id: '5',
    title: 'ShopVerse',
    slug: 'shopverse',
    summary: 'Full e-commerce flow from product list to Stripe checkout.',
    description:
      'A minimal e-commerce demo focused on production-grade checkout concerns: server-trusted pricing, strict validation, and webhook-driven persistence (Stripe Checkout → DB order receipt). Covers catalog → cart → checkout → receipt.',
    tags: ['Next.js', 'Stripe', 'Prisma', 'PostgreSQL', 'Zod', 'React Hook Form', 'Tailwind CSS'],
    links: {
      demo: 'https://shopverse-snowy-five.vercel.app',
      github: 'https://github.com/PazuCheung10/shopverse',
    },
    image: '/projects/shopverse.png',
    featured: true,
  },
  {
    id: '4',
    title: 'WeatherFlow',
    slug: 'weatherflow',
    summary: 'Map-based weather search with dynamic visuals.',
    description: 'An immersive weather application combining location-based forecasts with interactive maps. Features city search, geolocation, animated weather icons, and beautiful visual transitions.',
    tags: ['Next.js', 'TypeScript', 'TanStack Query', 'Open‑Meteo', 'Leaflet', 'Recharts', 'Framer Motion', 'React Hook Form', 'Tailwind CSS'],
    links: {
      demo: 'https://weatherflow-teal.vercel.app',
      github: 'https://github.com/PazuCheung10/weatherflow',
    },
    image: '/projects/weatherflow.png',
    featured: false,
  },
  {
    id: '2',
    title: 'InsightBoard',
    slug: 'insightboard',
    summary: 'Crypto dashboard with charts and watchlist (demo with sample data).',
    description: 'A cryptocurrency tracking dashboard featuring interactive charts, custom watchlists, and advanced filtering. Currently using sample data for demonstration purposes. Built with data visualization and caching logic for optimal performance.',
    tags: ['Next.js', 'TypeScript', 'TanStack Query', 'Recharts', 'Zod', 'Tailwind CSS'],
    links: {
      demo: 'https://insightboard-three.vercel.app',
      github: 'https://github.com/PazuCheung10/insightboard',
    },
    image: '/projects/Insightboard.png',
    featured: false,
  },
  {
    id: '1',
    title: 'Nextfolio',
    slug: 'nextfolio',
    summary: 'Personal portfolio with unified design and project showcase.',
    description: 'A comprehensive personal portfolio showcasing projects with smooth animations, case studies, and professional presentation. Features unified design system, responsive layout, and optimized performance.',
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'Framer Motion', 'Vercel'],
    links: {
      demo: 'https://pazu.dev',
      github: 'https://github.com/PazuCheung10/nextfolio',
    },
    image: '/projects/nextfolio.png',
    featured: false,
  },
  {
    id: '7',
    title: 'OrbitLab',
    slug: 'orbitlab',
    summary: 'Interactive gravity playground with editable physics.',
    description:
      'Orbit Lab is an interactive gravity simulation playground: click/drag to create stars, switch physics modes, tweak parameters live, and save/load universes. Built as a real-time Canvas UI to make simulation rules visible and explorable.',
    tags: ['Next.js', 'TypeScript', 'Canvas API', 'Physics'],
    links: {
      demo: 'https://orbitlab-seven.vercel.app/',
      github: 'https://github.com/PazuCheung10/orbitlab',
    },
    image: '/projects/orbitlab.png',
    featured: false,
  },
]
