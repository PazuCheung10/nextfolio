'use client'

import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'
import Button from '@/components/ui/Button'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type ContactForm = z.infer<typeof contactSchema>

export default function AboutPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = (data: ContactForm) => {
    console.log('Form submission:', data)
    // TODO: Implement actual form submission
    reset()
  }

  return (
    <Section id="contact" className="pt-16 md:pt-20 pb-24 md:pb-32">
      <Container>
        {/* About Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-cyan-400 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Me</span>
          </h1>
          <p className="mx-auto max-w-3xl text-center text-lg text-slate-300 leading-relaxed">
            I&apos;m a frontend-leaning full-stack developer focused on building reliable
            internal tools and enterprise web applications. I work primarily with React and
            Next.js, with a strong emphasis on authentication, authorization, and real-time features.
          </p>
        </div>

        <div className="contact-section">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -5 }}
            className="rounded-2xl bg-white/5 backdrop-blur p-8 md:p-10 hover:shadow-lg hover:shadow-black/30 hover:bg-white/10 group"
          >
            <h2 className="text-2xl font-semibold mb-6 text-cyan-400 group-hover:text-cyan-300 transition-colors">
              Let&apos;s Connect
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium mb-2">Email</h3>
                <a
                  href="mailto:hi@Pazu.dev"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  hi@Pazu.dev
                </a>
              </div>
              <div>
                <h3 className="font-medium mb-2">LinkedIn</h3>
                <a
                  href="https://www.linkedin.com/in/PazuC/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  linkedin.com/in/PazuC
                </a>
              </div>
              <div>
                <h3 className="font-medium mb-2">GitHub</h3>
                <a
                  href="https://github.com/PazuCheung10"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  github.com/PazuCheung10
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -5 }}
            className="rounded-2xl bg-white/5 backdrop-blur p-8 md:p-10 hover:shadow-lg hover:shadow-black/30 hover:bg-white/10 group"
          >
            <h2 className="text-2xl font-semibold mb-6 text-cyan-400 group-hover:text-cyan-300 transition-colors">
              Send a Message
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className="contact-form space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-3 text-slate-300"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  {...register('name')}
                  className="w-full p-3 rounded-lg bg-slate-700/50 border border-slate-600/50 focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 text-white placeholder-slate-400 transition-all duration-200 hover:border-slate-500/50"
                  placeholder="Your Name"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-3 text-slate-300"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  {...register('email')}
                  className="w-full p-3 rounded-lg bg-slate-700/50 border border-slate-600/50 focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 text-white placeholder-slate-400 transition-all duration-200 hover:border-slate-500/50"
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-3 text-slate-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  {...register('message')}
                  className="w-full p-3 rounded-lg bg-slate-700/50 border border-slate-600/50 focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 text-white placeholder-slate-400 transition-all duration-200 hover:border-slate-500/50 resize-none"
                  placeholder="Your message..."
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-sm text-red-400">{errors.message.message}</p>
                )}
              </div>
              <div className="pt-2">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}