'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Button from '@/components/ui/Button'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
}

const itemVariants = {
  hidden: { y: 8, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut' as const,
    },
  },
}

const floatingVariants = {
  animate: {
    y: [-3, 3, -3],
    transition: {
      duration: 12,
      repeat: Infinity,
      ease: 'easeInOut' as const,
    },
  },
}

function Hero() {
  const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (prefersReducedMotion) {
    return (
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-2xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-2xl" />
          <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-blue-500/10 rounded-full blur-xl" />
        </div>

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 leading-tight">
              I craft{' '}
              <span className="text-cyan-400 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">responsive</span>,{' '}
              <span className="text-cyan-400 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">interactive</span> web experiences
              with React & Next.js.
            </h1>

            <p className="text-lg md:text-xl lg:text-2xl text-slate-300 mb-16 max-w-4xl mx-auto leading-relaxed">
              Specializing in modern frontend development, I build applications
              that are fast, accessible, and delightful to use. Explore 7 diverse projects showcasing everything from crypto dashboards to generative art.
            </p>

            <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-8 justify-center items-center">
              <Button asChild size="lg" className="px-10 py-5 text-lg min-w-[180px] bg-white/10 hover:bg-white/20 text-white border border-white/20">
                <Link href="/projects">View Projects</Link>
              </Button>
              <Button asChild variant="ghost" size="lg" className="px-10 py-5 text-lg min-w-[180px]">
                <Link href="/about#contact">Contact Me</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-2xl"
          variants={floatingVariants}
          animate="animate"
          style={{ willChange: 'transform, opacity' }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-2xl"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 2 }}
          style={{ willChange: 'transform, opacity' }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 4 }}
          style={{ willChange: 'transform, opacity' }}
        />
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ willChange: 'transform, opacity' }}
        >
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 leading-tight"
            variants={itemVariants}
            style={{ willChange: 'transform, opacity' }}
          >
            I craft{' '}
            <span className="text-cyan-400 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">responsive</span>,{' '}
            <span className="text-cyan-400 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">interactive</span> web experiences
            with React & Next.js.
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl lg:text-2xl text-slate-300 mb-16 max-w-4xl mx-auto leading-relaxed"
            variants={itemVariants}
            style={{ willChange: 'transform, opacity' }}
          >
            Specializing in modern frontend development, I build applications
            that are fast, accessible, and delightful to use.
          </motion.p>

              <motion.div
                className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-8 justify-center items-center"
                variants={itemVariants}
                style={{ willChange: 'transform, opacity' }}
              >
                <Button asChild size="lg" className="px-10 py-5 text-lg min-w-[180px] bg-white/10 hover:bg-white/20 text-white border border-white/20">
                  <Link href="/projects">View Projects</Link>
                </Button>
                <Button asChild variant="ghost" size="lg" className="px-10 py-5 text-lg min-w-[180px]">
                  <Link href="/about#contact">Contact Me</Link>
                </Button>
              </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero