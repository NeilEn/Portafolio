'use client'

export const dynamic = 'force-dynamic'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, ArrowRight } from 'lucide-react'
import { HeroAnimation } from '@/components/hero-animation'
import { useLanguage } from '@/contexts/LanguageContext'
import { getTranslation } from '@/lib/i18n'

export default function HomePage() {
  const projectsRef = useRef<HTMLDivElement>(null)
  const { language } = useLanguage()

  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
          <HeroAnimation />
        </div>

        {/* Fondo galáctico adicional */}
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary-900/20 via-cosmic-900/30 to-galaxy-900/40"></div>
        
        {/* Patrón de estrellas */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-20 w-2 h-2 bg-white rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-32 w-1 h-1 bg-cosmic-300 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-60 left-1/3 w-1.5 h-1.5 bg-galaxy-300 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-80 right-1/4 w-1 h-1 bg-primary-300 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute top-96 left-1/2 w-1.5 h-1.5 bg-white rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6"
            >
              <span className="text-white drop-shadow-2xl shadow-black">
                {getTranslation(language, 'hero.title')}
              </span>
              <br />
              <span className="text-secondary-200 drop-shadow-lg">
                {getTranslation(language, 'hero.subtitle')}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg sm:text-xl lg:text-2xl text-secondary-100 mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-lg"
            >
              {getTranslation(language, 'hero.description')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <button 
                onClick={scrollToProjects}
                className="bg-gradient-to-r from-primary-600 to-cosmic-600 hover:from-primary-700 hover:to-cosmic-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl animate-glow"
              >
                {getTranslation(language, 'hero.viewProjects')}
                <ArrowRight className="ml-2 h-5 w-5 inline-block" />
              </button>
              <a 
                href="/contact"
                className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 border-2 border-white/30 hover:border-white/50"
              >
                {getTranslation(language, 'hero.contact')}
              </a>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <button
              onClick={scrollToProjects}
              className="flex flex-col items-center text-white hover:text-primary-300 transition-colors duration-300"
            >
              <span className="text-sm mb-2 drop-shadow-lg">{getTranslation(language, 'hero.scrollMore')}</span>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <ChevronDown className="h-6 w-6" />
              </motion.div>
            </button>
          </motion.div>
        </div>
      </section>

      {/* Key Metrics Section */}
      <section ref={projectsRef} className="py-20 bg-gradient-to-b from-secondary-50 to-white dark:from-secondary-900 dark:to-secondary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-secondary-900 dark:text-white">
              {getTranslation(language, 'metrics.title').split(' ').map((word: string, index: number) => 
                index === 1 ? (
                  <span key={index} className="bg-gradient-to-r from-primary-500 to-cosmic-500 bg-clip-text text-transparent"> {word} </span>
                ) : (
                  <span key={index}>{index === 0 ? word : ` ${word}`}</span>
                )
              )}
            </h2>
            <p className="text-lg text-secondary-700 dark:text-secondary-300 max-w-2xl mx-auto">
              {getTranslation(language, 'metrics.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '98%', label: getTranslation(language, 'metrics.delivery.label'), description: getTranslation(language, 'metrics.delivery.description'), color: 'from-galaxy-500 to-galaxy-600' },
              { number: '27%', label: getTranslation(language, 'metrics.costs.label'), description: getTranslation(language, 'metrics.costs.description'), color: 'from-primary-500 to-primary-600' },
              { number: '40%', label: getTranslation(language, 'metrics.errors.label'), description: getTranslation(language, 'metrics.errors.description'), color: 'from-cosmic-500 to-cosmic-600' },
              { number: '15%', label: getTranslation(language, 'metrics.b2b.label'), description: getTranslation(language, 'metrics.b2b.description'), color: 'from-galaxy-500 to-galaxy-600' },
            ].map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-secondary-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-secondary-200 dark:border-secondary-700 p-6 text-center hover:animate-glow"
              >
                <div className={`text-3xl font-bold bg-gradient-to-r ${metric.color} bg-clip-text text-transparent mb-2`}>
                  {metric.number}
                </div>
                <div className="text-lg font-semibold text-secondary-900 dark:text-white mb-2">
                  {metric.label}
                </div>
                <div className="text-sm text-secondary-700 dark:text-secondary-300">
                  {metric.description}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Preview */}
      <section className="py-20 bg-white dark:bg-secondary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-secondary-900 dark:text-white">
              {getTranslation(language, 'skills.title').split(' ').map((word: string, index: number) => 
                index === 1 ? (
                  <span key={index} className="bg-gradient-to-r from-primary-500 to-cosmic-500 bg-clip-text text-transparent"> {word} </span>
                ) : (
                  <span key={index}>{index === 0 ? word : ` ${word}`}</span>
                )
              )}
            </h2>
            <p className="text-lg text-secondary-700 dark:text-secondary-300 max-w-2xl mx-auto">
              {getTranslation(language, 'skills.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: getTranslation(language, 'skills.projectManagement.title'),
                skills: getTranslation(language, 'skills.projectManagement.skills'),
                color: 'from-primary-500 to-primary-600'
              },
              {
                title: getTranslation(language, 'skills.digitalTools.title'),
                skills: getTranslation(language, 'skills.digitalTools.skills'),
                color: 'from-cosmic-500 to-cosmic-600'
              },
              {
                title: getTranslation(language, 'skills.communication.title'),
                skills: getTranslation(language, 'skills.communication.skills'),
                color: 'from-galaxy-500 to-galaxy-600'
              }
            ].map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-secondary-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-secondary-200 dark:border-secondary-700 p-6 hover:animate-glow"
              >
                <h3 className={`text-xl font-bold mb-4 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                  {category.title}
                </h3>
                <ul className="space-y-2">
                  {category.skills.map((skill: string, skillIndex: number) => (
                    <li key={skillIndex} className="text-secondary-700 dark:text-secondary-300 flex items-center">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color} mr-3`}></div>
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
} 