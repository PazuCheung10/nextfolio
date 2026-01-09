'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Section from '@/components/ui/Section'
import Container from '@/components/ui/Container'
import { Chip } from '@/components/ui/Chip'

// Note: metadata export moved to layout.tsx for client component

const skillCategories = [
  {
    title: 'Auth & Permissions',
    skills: [
      { name: 'NextAuth (Auth.js v5)', description: 'Authentication framework' },
      { name: 'Session Management', description: 'User session handling' },
      { name: 'Role-based Access', description: 'Permission systems' },
      { name: 'JWT Tokens', description: 'Secure token handling' },
    ],
  },
  {
    title: 'Realtime & Integration',
    skills: [
      { name: 'Socket.io', description: 'Real-time communication' },
      { name: 'Stripe', description: 'Payment processing' },
      { name: 'REST APIs', description: 'API integration patterns' },
      { name: 'Open-Meteo', description: 'Weather data API' },
    ],
  },
  {
    title: 'Deployment & DevOps',
    skills: [
      { name: 'Vercel', description: 'Frontend deployment' },
      { name: 'Railway', description: 'Full-stack deployment platform' },
      { name: 'GitHub Actions', description: 'CI/CD pipelines' },
      { name: 'Docker', description: 'Containerization' },
      { name: 'Vitest', description: 'Testing framework' },
      { name: 'Environment Management', description: 'Config & secrets' },
    ],
  },
  {
    title: 'Frontend Core',
    skills: [
      { name: 'React', description: 'Component-based UI library' },
      { name: 'Next.js', description: 'App Router & full-stack framework' },
      { name: 'TypeScript', description: 'Type-safe JavaScript' },
      { name: 'Tailwind CSS', description: 'Utility-first CSS framework' },
      { name: 'Framer Motion', description: 'Animation & interaction library' },
      { name: 'PWA', description: 'Progressive Web App capabilities' },
    ],
  },
  {
    title: 'Database & Backend',
    skills: [
      { name: 'Prisma', description: 'Database ORM' },
      { name: 'PostgreSQL', description: 'Relational database' },
      { name: 'Neon', description: 'Serverless PostgreSQL' },
    ],
  },
  {
    title: 'State & Data',
    skills: [
      { name: 'TanStack Query', description: 'Server state management' },
      { name: 'Zustand', description: 'Client state management' },
      { name: 'localStorage', description: 'Browser persistence' },
      { name: 'Zod', description: 'Schema validation' },
      { name: 'React Hook Form', description: 'Form handling' },
      { name: '@dnd-kit', description: 'Drag and drop library' },
    ],
  },
  {
    title: 'Visualization',
    skills: [
      { name: 'Recharts', description: 'React chart library' },
      { name: 'Chart.js', description: 'Canvas-based charts' },
      { name: 'Canvas API', description: 'Custom graphics rendering' },
    ],
  },
  {
    title: 'Mapping & Location',
    skills: [
      { name: 'Leaflet', description: 'Interactive maps' },
      { name: 'Geolocation API', description: 'Location services' },
    ],
  },
]

export default function TechPage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <Section className="pt-16 md:pt-20 pb-24 md:pb-32">
      <Container>
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Tech & <span className="text-cyan-400 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Skills</span>
          </h1>
          <p className="mx-auto max-w-3xl text-center text-lg text-slate-300 leading-relaxed">
            A production-focused tech stack emphasizing authentication, authorization, real-time systems, and deployment. Core expertise in NextAuth, RBAC patterns, Socket.io, and server-side rendering. Supporting skills in data visualization, state management, and API integrations.
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-slate-700/50 hover:shadow-lg hover:shadow-black/30 hover:border-cyan-500/30 group"
                >
                  <h3 className="text-xl font-semibold mb-5 text-cyan-400 group-hover:text-cyan-300 transition-colors">
                    {category.title}
                  </h3>
              <div className="space-y-2">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="p-1">
                    <div className="flex items-center gap-2 mb-1">
                      <Chip variant="secondary" size="sm">
                        {skill.name}
                      </Chip>
                    </div>
                    <p className="text-sm text-slate-400 leading-relaxed">{skill.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  )
}