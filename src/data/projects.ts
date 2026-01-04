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
  status?: 'in-progress' | 'archived' | 'completed'
  statusLabel?: string
  roadmap?: {
    unresolved?: string[]
    whyNotFinished?: string
    nextSteps?: string[]
  }
}

export const projects: Project[] = [
  {
    id: '6',
    title: 'Accessly',
    slug: 'accessly',
    summary: 'Enterprise internal workspace with RBAC, realtime chat, and SSR dashboards.',
    description: 'A full-stack enterprise application featuring NextAuth authentication, role-based access control (RBAC), real-time chat with Socket.io, and server-side rendered dashboards. Demonstrates production-ready patterns for authentication, authorization, and real-time collaboration.',
    tags: ['Next.js', 'NextAuth', 'Prisma', 'Socket.io', 'TypeScript', 'PostgreSQL'],
    links: {
      demo: 'https://accessly.vercel.app',
      github: 'https://github.com/PazuCheung10/accessly',
    },
    featured: true,
    status: 'completed',
  },
  {
    id: '3',
    title: 'TaskZen',
    slug: 'taskzen',
    summary: 'Smooth Kanban with drag-and-drop and global store.',
    description: 'A lightweight yet powerful Kanban board application with intuitive drag-and-drop functionality, persistent storage, and smooth micro-animations. Perfect for personal and team task management.',
    tags: ['React', 'TypeScript', 'Zustand', 'React DnD'],
    links: {
      demo: 'https://taskzen.vercel.app',
      github: 'https://github.com/PazuCheung10/taskzen',
    },
    featured: true,
    status: 'completed',
  },
  {
    id: '5',
    title: 'ShopVerse',
    slug: 'shopverse',
    summary: 'Full e-commerce flow from product list to Stripe checkout.',
    description: 'A complete e-commerce demonstration covering the full shopping journey from product discovery to secure checkout. Features product catalog, cart management, wishlist, and Stripe integration with form validation.',
    tags: ['Next.js', 'Stripe', 'Prisma', 'Zod', 'React Hook Form'],
    links: {
      demo: 'https://shopverse.vercel.app',
      github: 'https://github.com/PazuCheung10/shopverse',
    },
    featured: true,
    status: 'completed',
  },
  {
    id: '4',
    title: 'WeatherFlow',
    slug: 'weatherflow',
    summary: 'Map-based weather search with dynamic visuals.',
    description: 'An immersive weather application combining location-based forecasts with interactive maps. Features city search, geolocation, animated weather icons, and beautiful visual transitions.',
    tags: ['React', 'TypeScript', 'OpenWeather API', 'Leaflet'],
    links: {
      demo: 'https://weatherflow.vercel.app',
      github: 'https://github.com/PazuCheung10/weatherflow',
    },
    featured: false,
    status: 'completed',
  },
  {
    id: '2',
    title: 'InsightBoard',
    slug: 'insightboard',
    summary: 'Crypto dashboard with charts and watchlist (demo with sample data).',
    description: 'A cryptocurrency tracking dashboard featuring interactive charts, custom watchlists, and advanced filtering. Currently using sample data for demonstration purposes. Built with data visualization and caching logic for optimal performance.',
    tags: ['Next.js', 'TypeScript', 'TanStack Query', 'Recharts'],
    links: {
      demo: 'https://insightboard.vercel.app',
      github: 'https://github.com/PazuCheung10/insightboard',
    },
    featured: false,
    status: 'archived',
    statusLabel: 'Demo Mode (Sample Data)',
  },
  {
    id: '1',
    title: 'Nextfolio',
    slug: 'nextfolio',
    summary: 'Personal portfolio with unified design and project showcase.',
    description: 'A comprehensive personal portfolio showcasing projects with smooth animations, case studies, and professional presentation. Features unified design system, responsive layout, and optimized performance.',
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'Framer Motion', 'Vercel'],
    links: {
      demo: 'https://nextfolio.dev',
      github: 'https://github.com/PazuCheung10/nextfolio',
    },
    featured: false,
    status: 'completed',
  },
  {
    id: '7',
    title: 'MotionCanvas',
    slug: 'motioncanvas',
    summary: 'Interactive generative art for creative flair.',
    description: 'A creative showcase of generative art and interactive visuals demonstrating advanced frontend capabilities. Features canvas-based graphics, mouse/touch interactions, and AI-driven parameter controls.',
    tags: ['React', 'Canvas API', 'Three.js', 'Framer Motion'],
    links: {
      demo: 'https://motioncanvas.vercel.app',
      github: 'https://github.com/PazuCheung10/motioncanvas',
    },
    featured: false,
    status: 'completed',
  },
]
