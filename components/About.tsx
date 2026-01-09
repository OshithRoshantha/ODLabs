'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaCheckCircle, FaRocket } from 'react-icons/fa'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const features = [
    'Cutting-edge Technologies',
    'Agile Development Process',
    '24/7 Support & Maintenance',
    'Scalable Solutions',
  ]

  return (
    <section id="about" className="section-padding bg-white" ref={ref}>
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-dark mb-4">
            About OD Labs
          </h2>
          <p className="text-lg md:text-xl text-bodyText">
            Your Trusted Technology Partner
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-dark mb-6">
              Innovation Meets Excellence
            </h3>
            <p className="text-bodyText mb-4 leading-relaxed">
              At OD Labs, we're passionate about leveraging the latest technologies to create
              transformative digital solutions. Our experienced dedicated team works collaboratively to deliver exceptional results.
            </p>
            <p className="text-bodyText mb-8 leading-relaxed">
              We believe in building long-term partnerships with our clients, understanding their
              unique challenges, and crafting tailored solutions that drive real business value.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <FaCheckCircle className="text-primary text-xl flex-shrink-0" />
                  <span className="text-bodyText font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image/Icon Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center"
          >
            <div className="relative w-full max-w-md aspect-square group">
              {/* Animated glow ring */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-hover rounded-3xl blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500 animate-pulse-slow" />
              
              {/* Background card with rotation */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-blue-600 to-hover rounded-3xl shadow-2xl transform rotate-3 group-hover:rotate-6 transition-all duration-500 animate-gradient" style={{ backgroundSize: '200% 200%' }} />
              
              {/* Main card */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-blue-600 to-hover rounded-3xl shadow-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                <FaRocket className="text-white text-8xl md:text-9xl opacity-90 animate-float group-hover:scale-110 transition-transform duration-500" />
                
                {/* Sparkle effects */}
                <div className="absolute top-10 right-10 w-3 h-3 bg-white rounded-full animate-ping" />
                <div className="absolute bottom-20 left-10 w-2 h-2 bg-white rounded-full animate-pulse" />
                <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-white/70 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
