'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import ProjectGrid from '@/components/projects/ProjectGrid'
import { Chip } from '@/components/ui/Chip'
import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'

const techStack = [
  'React',
  'Next.js',
  'TypeScript',
  'Tailwind',
  'Framer Motion',
  'TanStack Query',
  'Zod',
  'Zustand',
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut' as const,
    },
  },
}

function Highlights() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <Section>
      <Container>
        <div ref={ref}>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            {/* Selected Work Section */}
            <motion.div className="mb-20" variants={itemVariants}>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Selected <span className="text-cyan-400">Work</span>
                </h2>
                <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                  Featured projects showcasing data visualization, task management, and e-commerce development.
                </p>
              </div>
              <ProjectGrid projectIds={['2', '3', '5']} />
              <div className="text-center mt-8">
                <Link
                  href="/projects"
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                >
                  View all projects
                  <svg
                    className="ml-2 h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </motion.div>

            {/* Tech Stack Section */}
            <motion.div variants={itemVariants}>
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  What I <span className="text-cyan-400">Use</span>
                </h2>
                <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                  Technologies and tools I work with to build modern web
                  applications.
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                {techStack.map((tech) => (
                  <Chip key={tech} variant="secondary">
                    {tech}
                  </Chip>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}

export default Highlights