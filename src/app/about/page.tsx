'use client'

import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'
import { useState } from 'react'

export default function AboutPage() {
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

        {/* Contact Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          whileHover={{ y: -5 }}
          className="max-w-2xl mx-auto rounded-2xl bg-white/5 backdrop-blur p-8 md:p-10 hover:shadow-lg hover:shadow-black/30 hover:bg-white/10 group"
        >
          <h2 className="text-2xl font-semibold mb-4 text-cyan-400 group-hover:text-cyan-300 transition-colors">
            Get in Touch
          </h2>
          <p className="text-slate-300 mb-8 leading-relaxed">
            Feel free to reach out — I usually reply within 24 hours.
          </p>
          <div className="space-y-6">
            <div>
              <h3 className="font-medium mb-3 text-slate-200">Email</h3>
              <div className="flex items-center gap-3 flex-wrap">
                <a
                  href="mailto:hi@pazu.dev"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors text-lg"
                >
                  hi@pazu.dev
                </a>
                <CopyEmailButton email="hi@pazu.dev" />
              </div>
            </div>
            <div>
              <h3 className="font-medium mb-3 text-slate-200">LinkedIn</h3>
              <a
                href="https://www.linkedin.com/in/PazuC/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 transition-colors inline-flex items-center gap-2"
              >
                <span>linkedin.com/in/PazuC</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
            <div>
              <h3 className="font-medium mb-3 text-slate-200">GitHub</h3>
              <a
                href="https://github.com/PazuCheung10"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 transition-colors inline-flex items-center gap-2"
              >
                <span>github.com/PazuCheung10</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  )
}

function CopyEmailButton({ email }: { email: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy email:', err)
    }
  }

  return (
    <button
      onClick={handleCopy}
      className="px-3 py-1.5 text-xs font-medium rounded-lg bg-slate-700/50 hover:bg-slate-600/50 text-slate-300 hover:text-white transition-colors border border-slate-600/50 hover:border-cyan-500/50"
      aria-label="Copy email address"
    >
      {copied ? (
        <span className="flex items-center gap-1.5">
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          Copied!
        </span>
      ) : (
        <span className="flex items-center gap-1.5">
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
          Copy
        </span>
      )}
    </button>
  )
}