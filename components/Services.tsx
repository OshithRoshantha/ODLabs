'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaCode, FaBrain, FaCloud } from 'react-icons/fa'

interface Service {
  icon: React.ReactNode
  title: string
  description: string
  features: string[]
}

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const services: Service[] = [
    {
      icon: <FaCode className="text-4xl" />,
      title: 'Software Development',
      description:
        'Custom software solutions tailored to your business needs. From enterprise applications to complex systems, we build robust, scalable software that drives efficiency.',
      features: ['Custom Applications', 'API Integration', 'System Modernization'],
    },
    {
      icon: <FaCode className="text-4xl" />,
      title: 'Website Development',
      description:
        'Custom, responsive websites built with modern frameworks. From simple landing pages to complex web applications, we create digital experiences that engage and convert.',
      features: ['Responsive Design', 'E-commerce Solutions', 'Progressive Web Apps', 'CMS Development'],
    },
    {
      icon: <FaBrain className="text-4xl" />,
      title: 'AI/ML Solutions',
      description:
        'Harness the power of artificial intelligence and machine learning to automate processes, gain insights, and make data-driven decisions.',
      features: ['Predictive Analytics', 'Natural Language Processing', 'Computer Vision', 'Custom AI Models'],
    },
    {
      icon: <FaCloud className="text-4xl" />,
      title: 'Cloud Solutions',
      description:
        'Scalable, secure cloud infrastructure designed to grow with your business. We help you migrate, optimize, and manage your cloud resources efficiently.',
      features: ['Cloud Migration', 'DevOps & CI/CD', 'Cloud Security', 'Infrastructure as Code'],
    },
  ]

  return (
    <section id="services" className="section-padding bg-sectionBg" ref={ref}>
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-dark mb-4">
            Our Services
          </h2>
          <p className="text-lg md:text-xl text-bodyText">
            Comprehensive Solutions for Modern Businesses
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 group relative overflow-hidden border border-transparent hover:border-primary/20"
            >
              {/* Hover gradient effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-hover/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Icon */}
              <div className="relative w-16 h-16 bg-gradient-to-br from-primary to-hover rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg group-hover:shadow-xl">
                {service.icon}
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-hover rounded-xl blur-md opacity-50 group-hover:opacity-75 transition-opacity" />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-dark mb-4 relative group-hover:text-primary transition-colors duration-300">{service.title}</h3>

              {/* Description */}
              <p className="text-bodyText mb-6 leading-relaxed">{service.description}</p>

              {/* Features List */}
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-bodyText">
                    <span className="text-primary font-bold mt-1">→</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
