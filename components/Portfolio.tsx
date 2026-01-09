'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaShoppingCart, FaChartBar, FaMobileAlt } from 'react-icons/fa'

interface Project {
  icon: React.ReactNode
  title: string
  description: string
  tags: string[]
}

const Portfolio = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const projects: Project[] = [
    {
      icon: <FaShoppingCart className="text-7xl" />,
      title: 'E-commerce Platform',
      description: 'Built a scalable e-commerce platform with AI-powered recommendations',
      tags: ['React', 'Node.js', 'AWS'],
    },
    {
      icon: <FaChartBar className="text-7xl" />,
      title: 'Analytics Dashboard',
      description: 'Real-time analytics platform with machine learning insights',
      tags: ['Python', 'TensorFlow', 'GCP'],
    },
    {
      icon: <FaMobileAlt className="text-7xl" />,
      title: 'Mobile Banking App',
      description: 'Secure mobile banking solution with biometric authentication',
      tags: ['React Native', 'FastAPI', 'Azure'],
    },
  ]

  return (
    <section id="portfolio" className="section-padding bg-sectionBg" ref={ref}>
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-dark mb-4">
            Our Work
          </h2>
          <p className="text-lg md:text-xl text-bodyText">
            Recent Projects & Success Stories
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 group relative border border-transparent hover:border-primary/20"
            >
              {/* Image Placeholder */}
              <div className="h-64 bg-gradient-to-br from-primary via-blue-600 to-hover flex items-center justify-center text-white overflow-hidden relative">
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-blue-600 to-hover animate-gradient" style={{ backgroundSize: '200% 200%' }} />
                
                {/* Icon with scale and rotation */}
                <div className="opacity-80 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 relative z-10">
                  {project.icon}
                </div>
                
                {/* Glow effect */}
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Content */}
              <div className="p-8 relative">
                <h3 className="text-2xl font-bold text-dark mb-3 group-hover:text-primary transition-colors duration-300">{project.title}</h3>
                <p className="text-bodyText mb-6 leading-relaxed">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-sectionBg text-primary rounded-full text-sm font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
