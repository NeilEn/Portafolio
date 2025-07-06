'use client'

import { motion } from 'framer-motion'
import { X, Calendar, Target, CheckCircle, Tool, TrendingUp, Users } from 'lucide-react'

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
}

interface ProjectModalProps {
  project: Project
  onClose: () => void
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="bg-white dark:bg-secondary-800 rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="relative h-48 bg-gradient-to-br from-primary-400 to-primary-600 rounded-t-xl">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-white text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-10 w-10" />
              </div>
              <h2 className="text-2xl font-bold">{project.company}</h2>
            </div>
          </div>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-white/20 hover:bg-white/30 rounded-full transition-colors duration-200"
          >
            <X className="h-6 w-6 text-white" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Project Info */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-primary-600 font-medium">{project.company}</span>
              <div className="flex items-center space-x-2 text-secondary-500">
                <Calendar className="h-4 w-4" />
                <span className="text-sm">{project.period}</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">
              {project.title}
            </h3>
            <p className="text-secondary-600 dark:text-secondary-400 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {project.metrics.map((metric, index) => (
              <div key={index} className="text-center p-4 bg-secondary-50 dark:bg-secondary-700 rounded-lg">
                <div className="text-2xl font-bold text-primary-600 mb-1">{metric.value}</div>
                <div className="text-sm text-secondary-600 dark:text-secondary-400">{metric.label}</div>
              </div>
            ))}
          </div>

          {/* Achievements */}
          <div className="mb-8">
            <h4 className="text-lg font-semibold text-secondary-900 dark:text-white mb-4 flex items-center">
              <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
              Logros Principales
            </h4>
            <ul className="space-y-2">
              {project.achievements.map((achievement, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-secondary-700 dark:text-secondary-300">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tools */}
          <div className="mb-8">
            <h4 className="text-lg font-semibold text-secondary-900 dark:text-white mb-4 flex items-center">
              <Tool className="h-5 w-5 text-blue-500 mr-2" />
              Herramientas y Tecnologías
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-sm rounded-full"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Challenges and Solutions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-semibold text-secondary-900 dark:text-white mb-4 flex items-center">
                <TrendingUp className="h-5 w-5 text-orange-500 mr-2" />
                Desafíos
              </h4>
              <ul className="space-y-2">
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-secondary-700 dark:text-secondary-300 text-sm">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-secondary-900 dark:text-white mb-4 flex items-center">
                <Users className="h-5 w-5 text-green-500 mr-2" />
                Soluciones Implementadas
              </h4>
              <ul className="space-y-2">
                {project.solutions.map((solution, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-secondary-700 dark:text-secondary-300 text-sm">{solution}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
} 