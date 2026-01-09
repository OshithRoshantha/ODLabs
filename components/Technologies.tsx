'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  FaReact,
  FaVuejs,
  FaPython,
  FaJava,
  FaAws,
  FaMicrosoft,
  FaDocker,
  FaDatabase,
  FaJenkins,
} from 'react-icons/fa'
import {
  SiNextdotjs,
  SiTypescript,
  SiDjango,
  SiFastapi,
  SiSpring,
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
  SiOpenai,
  SiKeras,
  SiKubernetes,
  SiMongodb,
  SiRedis,
  SiOracle,
} from 'react-icons/si'

interface TechItem {
  icon: React.ReactNode
  name: string
}

interface TechCategory {
  title: string
  items: TechItem[]
  color: string
}

const Technologies = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [activeTab, setActiveTab] = useState(0)

  const techStack: TechCategory[] = [
    {
      title: 'Frontend',
      color: 'from-blue-500 to-cyan-500',
      items: [
        { icon: <FaReact />, name: 'React' },
        { icon: <FaVuejs />, name: 'Vue.js' },
        { icon: <SiNextdotjs />, name: 'Next.js' },
        { icon: <SiTypescript />, name: 'TypeScript' },
      ],
    },
    {
      title: 'Backend',
      color: 'from-green-500 to-emerald-500',
      items: [
        { icon: <FaPython />, name: 'Python' },
        { icon: <FaJava />, name: 'Java' },
        { icon: <SiDjango />, name: 'Django' },
        { icon: <SiFastapi />, name: 'FastAPI' },
        { icon: <SiSpring />, name: 'Spring Boot' },
      ],
    },
    {
      title: 'AI/ML',
      color: 'from-purple-500 to-pink-500',
      items: [
        { icon: <SiTensorflow />, name: 'TensorFlow' },
        { icon: <SiPytorch />, name: 'PyTorch' },
        { icon: <SiScikitlearn />, name: 'Scikit-learn' },
        { icon: <SiOpenai />, name: 'OpenAI' },
        { icon: <SiKeras />, name: 'Keras' },
      ],
    },
    {
      title: 'Cloud & DevOps',
      color: 'from-orange-500 to-red-500',
      items: [
        { icon: <FaAws />, name: 'AWS' },
        { icon: <FaDocker />, name: 'Docker' },
        { icon: <SiKubernetes />, name: 'Kubernetes' },
        { icon: <FaJenkins />, name: 'Jenkins' },
      ],
    },
    {
      title: 'Databases',
      color: 'from-yellow-500 to-amber-500',
      items: [
        { icon: <SiOracle />, name: 'Oracle Database' },
        { icon: <SiMongodb />, name: 'MongoDB' },
        { icon: <SiRedis />, name: 'Redis' },
      ],
    },
  ]

  return (
    <section id="technologies" className="section-padding bg-white" ref={ref}>
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-dark mb-4">
            Our Tech Stack
          </h2>
          <p className="text-lg md:text-xl text-bodyText">
            Powered by Industry-Leading Technologies
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {techStack.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-3 rounded-full font-semibold text-sm md:text-base transition-all duration-300 ${
                activeTab === index
                  ? 'bg-gradient-to-r from-primary to-hover text-white shadow-lg scale-105'
                  : 'bg-sectionBg text-bodyText hover:bg-gray-200'
              }`}
            >
              {category.title}
            </button>
          ))}
        </motion.div>

        {/* Tech Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="flex flex-wrap justify-center gap-6"
          >
            {techStack[activeTab].items.map((tech, techIndex) => (
              <motion.div
                key={techIndex}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.3,
                  delay: techIndex * 0.05,
                }}
                className="w-40 bg-gradient-to-br from-white to-sectionBg rounded-2xl p-6 flex flex-col items-center gap-4 shadow-md hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 group relative overflow-hidden border-2 border-transparent hover:border-primary/30"
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${techStack[activeTab].color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* Icon container */}
                <div className="relative text-5xl text-primary group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                  {tech.icon}
                </div>
                
                {/* Name */}
                <span className="text-sm font-bold text-dark text-center group-hover:text-primary transition-colors duration-300 relative z-10">
                  {tech.name}
                </span>
                
                {/* Particle effect */}
                <div className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping" />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* All Technologies Count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-bodyText">
            <span className="text-3xl font-bold bg-gradient-to-r from-primary to-hover bg-clip-text text-transparent">
              {techStack.reduce((acc, cat) => acc + cat.items.length, 0)}+
            </span>{' '}
            <span className="text-lg">Technologies in Our Arsenal</span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Technologies
