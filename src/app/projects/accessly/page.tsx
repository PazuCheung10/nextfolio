import Link from 'next/link'
import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'
import Button from '@/components/ui/Button'
import { projects } from '@/data/projects'

const accesslyProject = projects.find(p => p.slug === 'accessly')

const demoItems = [
  { title: 'Realtime issue chat', description: 'Socket.io-powered collaboration' },
  { title: 'Role-based access', description: 'Admin and user permission management' },
  { title: 'Admin metrics dashboard', description: 'Response time and issue analytics' },
  { title: 'Issue assignment workflow', description: 'Team collaboration and task management' },
  { title: 'AI-assisted summaries', description: 'Automated issue summarization' },
]

export const metadata = {
  title: 'Accessly - Case Study',
  description: 'Accessly is a custom-built internal collaboration and issue management system designed for teams.',
}

export default function AccesslyCaseStudy() {
  return (
    <>
      {/* Hero / Intro */}
      <Section className="pt-16 md:pt-20 pb-12 md:pb-16">
        <Container>
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-cyan-400 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Accessly</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed">
              Accessly is a custom-built internal collaboration and issue management system{' '}
              <span className="text-slate-100 font-medium">for internal teams.</span>
            </p>
          </div>
        </Container>
      </Section>

      {/* Problem / Context */}
      <Section className="pt-12 md:pt-16 pb-8 md:pb-12">
        <Container>
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-white">Problem / Context</h2>
            <p className="text-lg text-slate-300 leading-relaxed">
              <span className="text-slate-100 font-medium">
                Fragmented internal tools slow teams down.
              </span>{' '}
              Separate chat applications, issue trackers, and admin dashboards don&apos;t communicate with each other. Accessly replaces this complexity with one unified system that handles authentication, role-based permissions, real-time collaboration, and administrative oversight all in one place.
            </p>
          </div>
        </Container>
      </Section>

      {/* Core Workflow Section */}
      <Section className="pt-12 md:pt-16 pb-8 md:pb-12">
        <Container>
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-white">Core Workflow</h2>
            <div className="space-y-8">
              {demoItems.map((item, index) => (
                <div key={index} className="rounded-lg overflow-hidden bg-white/5 ring-1 ring-white/10">
                  <div className="aspect-video bg-white/[0.05] relative">
                    <div className="absolute inset-0 flex items-center justify-center text-slate-400 text-base md:text-lg">
                      Placeholder for {item.title}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-base text-slate-400">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Key Capabilities */}
      <Section className="pt-12 md:pt-16 pb-8 md:pb-12">
        <Container>
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-white">Key Capabilities</h2>
            <ul className="space-y-4 text-lg text-slate-300">
              <li className="flex items-start">
                <span className="text-cyan-400 mr-3">•</span>
                <span>
                  <span className="text-slate-100 font-medium">
                    Secure role-based access
                  </span>{' '}
                  (Admin / User)
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-3">•</span>
                <span>
                  <span className="text-slate-100 font-medium">
                    Real-time collaboration
                  </span>{' '}
                  via Socket.io
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-3">•</span>
                <span>
                  <span className="text-slate-100 font-medium">
                    Streamlined issue management
                  </span>{' '}
                  with assignments
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-3">•</span>
                <span>
                  <span className="text-slate-100 font-medium">
                    AI-assisted summaries
                  </span>{' '}
                  for faster issue resolution
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-3">•</span>
                <span>
                  <span className="text-slate-100 font-medium">
                    Admin dashboard
                  </span>{' '}
                  with response time metrics
                </span>
              </li>
            </ul>
          </div>
        </Container>
      </Section>

      {/* Tech Stack */}
      <Section className="py-6 md:py-8">
        <Container>
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-white">Tech Stack</h2>
            <div className="flex flex-wrap gap-3">
              {accesslyProject?.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-white/10 px-4 py-2 text-sm text-slate-200 ring-1 ring-white/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Links */}
      <Section className="py-6 md:py-8 pb-20 md:pb-24">
        <Container>
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-white">Links</h2>
            <div className="flex flex-col sm:flex-row gap-4">
              {accesslyProject && (
                <>
                  <Button
                    asChild
                    size="lg"
                    className="px-8 !text-white font-semibold"
                  >
                    <Link href={accesslyProject.links.demo} target="_blank" rel="noopener noreferrer">
                      Live Demo
                    </Link>
                  </Button>
                  <Button asChild variant="ghost" size="lg" className="px-8">
                    <Link href={accesslyProject.links.github} target="_blank" rel="noopener noreferrer">
                      View Source on GitHub
                    </Link>
                  </Button>
                </>
              )}
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
