'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaRocket, FaUsers, FaShieldAlt, FaClock, FaChartLine } from 'react-icons/fa'

interface Reason {
  icon: React.ReactNode
  title: string
  description: string
}

const WhyChooseUs = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const reasons: Reason[] = [
    {
      icon: <FaRocket className="text-4xl" />,
      title: 'Innovation First',
      description:
        'We leverage the latest technologies and methodologies to deliver cutting-edge solutions that keep you ahead of the competition.',
    },
    {
      icon: <FaUsers className="text-4xl" />,
      title: 'Expert Team',
      description:
        'Our talented developers, designers, and consultants bring years of experience and diverse expertise to every project.',
    },
    {
      icon: <FaShieldAlt className="text-4xl" />,
      title: 'Quality Assurance',
      description:
        'Rigorous testing and quality control processes ensure that every solution we deliver meets the highest standards of excellence.',
    },
    {
      icon: <FaClock className="text-4xl" />,
      title: 'On-Time Delivery',
      description:
        'We understand the importance of deadlines. Our agile approach ensures timely delivery without compromising quality.',
    },
    {
      icon: <FaChartLine className="text-4xl" />,
      title: 'Scalable Solutions',
      description:
        'Build for today, scale for tomorrow. Our solutions are designed to grow seamlessly with your business needs.',
    },
  ]

  return (
    <section id="why-choose-us" className="section-padding bg-white" ref={ref}>
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-dark mb-4">
            Why Choose OD Labs?
          </h2>
          <p className="text-lg md:text-xl text-bodyText max-w-3xl mx-auto">
            We combine technical excellence with business understanding to deliver solutions that drive real results
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="bg-gradient-to-br from-sectionBg to-white rounded-2xl p-8 h-full border-2 border-transparent hover:border-primary/20 transition-all duration-500 hover:shadow-2xl">
                {/* Icon Container */}
                <div className="relative w-16 h-16 bg-gradient-to-br from-primary to-hover rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-all duration-500 shadow-lg">
                  {reason.icon}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-hover rounded-xl blur-md opacity-50 group-hover:opacity-75 transition-opacity" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-dark mb-4 group-hover:text-primary transition-colors duration-300">
                  {reason.title}
                </h3>
                <p className="text-bodyText leading-relaxed">
                  {reason.description}
                </p>

                {/* Hover Effect Line */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-primary to-hover group-hover:w-full transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-bodyText mb-6">
            Ready to transform your business with cutting-edge technology?
          </p>
          <a
            href="#contact"
            className="inline-block bg-gradient-to-r from-primary to-hover text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Get Started Today
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default WhyChooseUs
