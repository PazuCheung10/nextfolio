import ProjectGrid from '@/components/projects/ProjectGrid'
import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'

export const metadata = {
  title: 'Projects',
  description: 'Explore my portfolio of web development projects built with modern technologies.',
}

export default function ProjectsPage() {
  return (
        <Section className="pt-16 md:pt-20 pb-24 md:pb-32">
      <Container>
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="text-cyan-400 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Projects</span>
          </h1>
          <p className="mx-auto max-w-3xl text-center text-lg text-slate-300 leading-relaxed">
            Seven diverse projects showcasing frontend development, data visualization, full-stack integration, and creative coding. From crypto dashboards to generative art, each project demonstrates different aspects of modern web development.
          </p>
        </div>
        <ProjectGrid />
      </Container>
    </Section>
  )
}