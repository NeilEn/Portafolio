'use client'

export const dynamic = 'force-dynamic'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ExternalLink, Calendar, Users, Target, TrendingUp, Globe, Leaf, Code, Database, BarChart3 } from 'lucide-react'
import { ProjectModal } from '@/components/project-modal'
import { useLanguage } from '@/contexts/LanguageContext'
import { getTranslation } from '@/lib/i18n'

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const { language } = useLanguage()

  const projects: Project[] = [
    {
      id: 1,
      title: getTranslation(language, 'projectsData.website.title'),
      company: 'Inca Explorers',
      period: getTranslation(language, 'projectsData.website.period'),
      description: getTranslation(language, 'projectsData.website.description'),
      detailedDescription: getTranslation(language, 'projectsData.website.detailedDescription'),
      image: '/images/inca-website.jpg',
      website: 'https://incaexplorers.com/',
      achievements: getTranslation(language, 'projectsData.website.achievements'),
      tools: getTranslation(language, 'projectsData.website.tools'),
      metrics: getTranslation(language, 'projectsData.website.metrics'),
      challenges: getTranslation(language, 'projectsData.website.challenges'),
      solutions: getTranslation(language, 'projectsData.website.solutions'),
    },
    {
      id: 2,
      title: getTranslation(language, 'projectsData.logistics.title'),
      company: 'Inca Explorers',
      period: getTranslation(language, 'projectsData.logistics.period'),
      description: getTranslation(language, 'projectsData.logistics.description'),
      detailedDescription: getTranslation(language, 'projectsData.logistics.detailedDescription'),
      image: '/images/logistics-optimization.jpg',
      achievements: getTranslation(language, 'projectsData.logistics.achievements'),
      tools: getTranslation(language, 'projectsData.logistics.tools'),
      metrics: getTranslation(language, 'projectsData.logistics.metrics'),
      challenges: getTranslation(language, 'projectsData.logistics.challenges'),
      solutions: getTranslation(language, 'projectsData.logistics.solutions'),
    },
    {
      id: 3,
      title: getTranslation(language, 'projectsData.marketing.title'),
      company: 'Inca Explorers',
      period: getTranslation(language, 'projectsData.marketing.period'),
      description: getTranslation(language, 'projectsData.marketing.description'),
      detailedDescription: getTranslation(language, 'projectsData.marketing.detailedDescription'),
      image: '/images/marketing-analytics.jpg',
      achievements: getTranslation(language, 'projectsData.marketing.achievements'),
      tools: getTranslation(language, 'projectsData.marketing.tools'),
      metrics: getTranslation(language, 'projectsData.marketing.metrics'),
      challenges: getTranslation(language, 'projectsData.marketing.challenges'),
      solutions: getTranslation(language, 'projectsData.marketing.solutions'),
    },
    {
      id: 4,
      title: getTranslation(language, 'projectsData.catering.title'),
      company: 'Pamu Catering',
      period: getTranslation(language, 'projectsData.catering.period'),
      description: getTranslation(language, 'projectsData.catering.description'),
      detailedDescription: getTranslation(language, 'projectsData.catering.detailedDescription'),
      image: '/images/pamu-catering.jpg',
      achievements: getTranslation(language, 'projectsData.catering.achievements'),
      tools: getTranslation(language, 'projectsData.catering.tools'),
      metrics: getTranslation(language, 'projectsData.catering.metrics'),
      challenges: getTranslation(language, 'projectsData.catering.challenges'),
      solutions: getTranslation(language, 'projectsData.catering.solutions'),
    },
    {
      id: 5,
      title: getTranslation(language, 'projectsData.biohuertos.title'),
      company: 'Pacchanta Biohuertos Initiative',
      period: getTranslation(language, 'projectsData.biohuertos.period'),
      description: getTranslation(language, 'projectsData.biohuertos.description'),
      detailedDescription: getTranslation(language, 'projectsData.biohuertos.detailedDescription'),
      image: '/images/bio-huertos-pacchanta.jpg',
      achievements: getTranslation(language, 'projectsData.biohuertos.achievements'),
      tools: getTranslation(language, 'projectsData.biohuertos.tools'),
      metrics: getTranslation(language, 'projectsData.biohuertos.metrics'),
      challenges: getTranslation(language, 'projectsData.biohuertos.challenges'),
      solutions: getTranslation(language, 'projectsData.biohuertos.solutions'),
    },
    {
      id: 6,
      title: getTranslation(language, 'projectsData.portfolio.title'),
      company: 'Neil Endicott Portfolio',
      period: getTranslation(language, 'projectsData.portfolio.period'),
      description: getTranslation(language, 'projectsData.portfolio.description'),
      detailedDescription: getTranslation(language, 'projectsData.portfolio.detailedDescription'),
      image: '/images/portfolio-web.jpg',
      website: 'https://neil-endicott-portfolio.vercel.app/',
      achievements: getTranslation(language, 'projectsData.portfolio.achievements'),
      tools: getTranslation(language, 'projectsData.portfolio.tools'),
      metrics: getTranslation(language, 'projectsData.portfolio.metrics'),
      challenges: getTranslation(language, 'projectsData.portfolio.challenges'),
      solutions: getTranslation(language, 'projectsData.portfolio.solutions'),
    },
  ]

  const getProjectIcon = (projectId: number) => {
    switch(projectId) {
      case 1: return <Code className="h-8 w-8" />
      case 2: return <Database className="h-8 w-8" />
      case 3: return <BarChart3 className="h-8 w-8" />
      case 4: return <Target className="h-8 w-8" />
      case 5: return <Leaf className="h-8 w-8" />
      case 6: return <Code className="h-8 w-8" />
      default: return <Target className="h-8 w-8" />
    }
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-secondary-900 dark:to-secondary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              {getTranslation(language, 'projects.title').split(' ').map((word: string, index: number) => 
                index === 1 ? (
                  <span key={index} className="gradient-text"> {word} </span>
                ) : (
                  <span key={index}>{index === 0 ? word : ` ${word}`}</span>
                )
              )}
            </h1>
            <p className="text-xl text-secondary-600 dark:text-secondary-400 max-w-3xl mx-auto leading-relaxed">
              {getTranslation(language, 'projects.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group"
                onClick={() => setSelectedProject(project)}
              >
                {/* Project Image */}
                <div className="h-48 bg-gradient-to-br from-primary-400 to-primary-600 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        {getProjectIcon(project.id)}
                      </div>
                      <h3 className="text-lg font-semibold">{project.company}</h3>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-primary-600 font-medium">{project.company}</span>
                    <div className="flex items-center space-x-2 text-secondary-500">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">{project.period}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-3 group-hover:text-primary-600 transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-secondary-600 dark:text-secondary-400 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tools */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tools.slice(0, 3).map((tool, toolIndex) => (
                      <span
                        key={toolIndex}
                        className="px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 text-xs rounded-full"
                      >
                        {tool}
                      </span>
                    ))}
                    {project.tools.length > 3 && (
                      <span className="px-2 py-1 bg-secondary-100 dark:bg-secondary-800 text-secondary-600 dark:text-secondary-400 text-xs rounded-full">
                        +{project.tools.length - 3} más
                      </span>
                    )}
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-2">
                    {project.metrics.slice(0, 2).map((metric, metricIndex) => (
                      <div key={metricIndex} className="text-center">
                        <div className="text-lg font-bold text-primary-600">{metric.value}</div>
                        <div className="text-xs text-secondary-500">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </div>
  )
}

interface Project {
  id: number
  title: string
  company: string
  period: string
  description: string
  image: string
  achievements: string[]
  tools: string[]
  metrics: Array<{ label: string; value: string }>
  challenges: string[]
  solutions: string[]
  website?: string
  detailedDescription?: string
} 