'use client'

import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Project } from '@/data/projects'

interface ProjectCardProps {
  project: Project
  index?: number
  className?: string
}

function ProjectCard({ project, index = 0, className }: ProjectCardProps) {
  const router = useRouter()

  const handleCardClick = () => {
    if (project.slug === 'accessly') {
      router.push('/projects/accessly')
    } else {
      // Open demo link in new tab for other projects
      window.open(project.links.demo, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      onClick={handleCardClick}
      className={cn(
        "flex h-full flex-col rounded-2xl bg-white/5 shadow-sm ring-1 ring-white/10 hover:shadow-md hover:shadow-black/20 hover:ring-white/20 transition-shadow overflow-hidden cursor-pointer",
        className
      )}
    >
      <div className="aspect-[16/9] w-full bg-white/[0.05]" />
      <div className="p-5 md:p-6 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-1">
          <h3 className="text-lg font-semibold text-white">{project.title}</h3>
        </div>
        <p className="mt-2 text-sm text-slate-300 leading-relaxed">{project.summary}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags?.map((tag) => (
            <span key={tag} className="rounded-full bg-white/10 px-3 py-1 text-xs text-slate-200 ring-1 ring-white/20 hover:bg-white/20 transition-colors">
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-auto pt-5 space-y-3">
          <div className="flex items-center justify-between">
            <a 
              className="text-cyan-300 hover:text-cyan-200 font-medium transition-colors" 
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              Live Demo
            </a>
            <a 
              className="text-slate-300 hover:text-white font-medium transition-colors" 
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              GitHub
            </a>
          </div>
          {project.slug === 'accessly' && (
            <div className="block text-center text-sm text-slate-400 hover:text-cyan-300 font-medium transition-colors">
              View Case Study →
            </div>
          )}
        </div>
      </div>
    </motion.article>
  )
}

export default ProjectCard