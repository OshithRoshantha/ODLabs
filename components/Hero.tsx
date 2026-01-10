'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaChevronDown } from 'react-icons/fa'

const Hero = () => {
  const [counters, setCounters] = useState({ projects: 0, clients: 0, success: 0 })

  useEffect(() => {
    const animateCounter = (target: number, key: 'projects' | 'clients' | 'success') => {
      let current = 0
      const increment = target / 50
      const timer = setInterval(() => {
        current += increment
        if (current >= target) {
          current = target
          clearInterval(timer)
        }
        setCounters(prev => ({ ...prev, [key]: Math.floor(current) }))
      }, 30)
    }

    animateCounter(25, 'projects')
    animateCounter(10, 'clients')
    animateCounter(100, 'success')
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-sectionBg via-blue-50 to-sectionBg -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-hover/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-gradient-to-br from-primary/20 to-hover/20 rounded-full blur-2xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 left-1/4 w-40 h-40 bg-gradient-to-br from-hover/15 to-primary/15 rounded-full blur-2xl animate-pulse-slow" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-5xl mx-auto"
        >
          {/* Hero Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 tracking-tight">
            <span className="text-dark">OD</span>
            <span className="text-primary">LABS</span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-2xl md:text-3xl lg:text-4xl font-semibold text-dark mb-4"
          >
            Transforming Ideas into Digital Reality
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-base md:text-lg lg:text-xl text-bodyText max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            We specialize in cutting-edge Website & Software Development, AI/ML Solutions, and Cloud Infrastructure to accelerate your business growth
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Link href="#contact" className="btn btn-primary">
              Get Started
            </Link>
            <Link href="#services" className="btn btn-secondary">
              Our Services
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mt-12"
          >
            <div className="text-center group">
              <div className="text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-primary to-hover bg-clip-text text-transparent mb-2 transition-transform group-hover:scale-110">
                {counters.projects}+
              </div>
              <div className="text-sm md:text-base text-bodyText font-medium">Projects Completed</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-primary to-hover bg-clip-text text-transparent mb-2 transition-transform group-hover:scale-110">
                {counters.clients}+
              </div>
              <div className="text-sm md:text-base text-bodyText font-medium">Happy Clients</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-primary to-hover bg-clip-text text-transparent mb-2 transition-transform group-hover:scale-110">
                {counters.success}%
              </div>
              <div className="text-sm md:text-base text-bodyText font-medium">Success Rate</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <FaChevronDown className="text-primary text-2xl animate-pulse-slow" />
      </motion.div>
    </section>
  )
}

export default Hero
