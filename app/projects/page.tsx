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
      achievements: [
        'Reducción del 36% en tiempo de carga del sitio web',
        'Incremento del 17% en tráfico orgánico',
        'Gestión de 300+ ciclos de sprint con Jira',
        'Cumplimiento de SLA y métricas de satisfacción del cliente'
      ],
      tools: ['Agile (Scrum)', 'Jira', 'Google Analytics', 'Data Studio', 'Power BI', 'WBS'],
      metrics: [
        { label: 'Reducción Tiempo Carga', value: '36%' },
        { label: 'Incremento Tráfico', value: '17%' },
        { label: 'Ciclos Sprint', value: '300+' },
        { label: 'Presupuesto Gestionado', value: 'S/200K' }
      ],
      challenges: [
        'Optimización de rendimiento web en entorno turístico complejo',
        'Coordinación de equipos cross-funcionales de desarrolladores y diseñadores',
        'Mantenimiento de métricas de satisfacción del cliente'
      ],
      solutions: [
        'Implementación de metodologías Agile con sprints bimensuales',
        'Sistema de dashboards en tiempo real con Jira',
        'Framework de gestión de riesgos con KPI dashboards'
      ]
    },
    {
      id: 2,
      title: getTranslation(language, 'projectsData.logistics.title'),
      company: 'Inca Explorers',
      period: getTranslation(language, 'projectsData.logistics.period'),
      description: getTranslation(language, 'projectsData.logistics.description'),
      detailedDescription: getTranslation(language, 'projectsData.logistics.detailedDescription'),
      image: '/images/logistics-optimization.jpg',
      achievements: [
        'Reducción del 27% en costos operativos',
        'Mapeo completo de procesos logísticos',
        'Talleres de stakeholders implementados',
        'Varianza de costos mantenida dentro de ±5%'
      ],
      tools: ['Process Mapping', 'Stakeholder Workshops', 'Budget Management', 'Vendor Contracts', 'KPI Dashboards'],
      metrics: [
        { label: 'Reducción Costos', value: '27%' },
        { label: 'Varianza Costos', value: '±5%' },
        { label: 'Procesos Mapeados', value: '15+' },
        { label: 'Talleres Realizados', value: '8' }
      ],
      challenges: [
        'Optimización de procesos logísticos complejos en turismo',
        'Gestión de múltiples proveedores y contratos',
        'Mantenimiento de estándares de calidad con reducción de costos'
      ],
      solutions: [
        'Mapeo detallado de procesos con workshops de stakeholders',
        'Sistema de gestión de presupuestos y contratos de proveedores',
        'Framework de gestión de riesgos con dashboards en tiempo real'
      ]
    },
    {
      id: 3,
      title: getTranslation(language, 'projectsData.marketing.title'),
      company: 'Inca Explorers',
      period: getTranslation(language, 'projectsData.marketing.period'),
      description: getTranslation(language, 'projectsData.marketing.description'),
      detailedDescription: getTranslation(language, 'projectsData.marketing.detailedDescription'),
      image: '/images/marketing-analytics.jpg',
      achievements: [
        'Implementación de A/B testing para optimización de conversiones',
        'Análisis de ROI para campañas de marketing',
        'Investigación de mercado para nuevos destinos',
        'Dashboards de KPI automatizados'
      ],
      tools: ['Google Analytics', 'Data Studio', 'Power BI', 'Excel', 'A/B Testing', 'ROI Analysis'],
      metrics: [
        { label: 'Campañas Analizadas', value: '25+' },
        { label: 'Tests A/B Realizados', value: '12' },
        { label: 'Destinos Investigados', value: '8' },
        { label: 'Dashboards Creados', value: '6' }
      ],
      challenges: [
        'Análisis de datos complejos de múltiples fuentes',
        'Optimización de campañas de marketing digital',
        'Alineación de stakeholders con insights de datos'
      ],
      solutions: [
        'Implementación de herramientas de análisis avanzado',
        'Sistema de reporting automatizado con dashboards',
        'Proceso de A/B testing estructurado'
      ]
    },
    {
      id: 4,
      title: getTranslation(language, 'projectsData.catering.title'),
      company: 'Pamu Catering',
      period: getTranslation(language, 'projectsData.catering.period'),
      description: getTranslation(language, 'projectsData.catering.description'),
      detailedDescription: getTranslation(language, 'projectsData.catering.detailedDescription'),
      image: '/images/pamu-catering.jpg',
      achievements: [
        '95% de feedback positivo en eventos',
        'Reducción del 35% en cuellos de botella',
        '20% menos errores en procesos',
        '5 SOPs desarrollados e implementados'
      ],
      tools: ['Kanban', 'Trello', 'Asana', 'Pricing Models', 'Rate Grids', 'SOPs'],
      metrics: [
        { label: 'Eventos Gestionados', value: '50+' },
        { label: 'Asistentes por Evento', value: 'Hasta 60' },
        { label: 'Feedback Positivo', value: '95%' },
        { label: 'SOPs Implementados', value: '5' }
      ],
      challenges: [
        'Gestión de eventos con múltiples proveedores',
        'Coordinación de equipos en tiempo real',
        'Mantenimiento de estándares de calidad en catering de lujo'
      ],
      solutions: [
        'Implementación de flujos de trabajo Kanban visuales',
        'Desarrollo de modelos de precios y cuadrículas de tarifas',
        'Sistema de checklists digitales para control de calidad'
      ]
    },
    {
      id: 5,
      title: getTranslation(language, 'projectsData.biohuertos.title'),
      company: 'Pacchanta Biohuertos Initiative',
      period: getTranslation(language, 'projectsData.biohuertos.period'),
      description: getTranslation(language, 'projectsData.biohuertos.description'),
      detailedDescription: getTranslation(language, 'projectsData.biohuertos.detailedDescription'),
      image: '/images/bio-huertos-pacchanta.jpg',
      achievements: [
        'Incremento del 60% en ingesta de productos frescos',
        '5 familias entrenadas en cultivo sostenible',
        'Mejora en ingresos familiares',
        'Sostenibilidad a largo plazo asegurada'
      ],
      tools: ['Sustainable Cultivation', 'Community Training', 'Organic Farming', 'Project Planning'],
      metrics: [
        { label: 'Familias Entrenadas', value: '5' },
        { label: 'Incremento Productos Frescos', value: '60%' },
        { label: 'Duración del Proyecto', value: '12 meses' },
        { label: 'Área Cultivada', value: '1,500 m²' }
      ],
      challenges: [
        'Coordinación con líderes comunitarios de Pacchanta',
        'Implementación de técnicas de cultivo sostenible',
        'Asegurar mejora en ingresos familiares'
      ],
      solutions: [
        'Programa de entrenamiento estructurado para familias',
        'Implementación de técnicas de cultivo orgánico',
        'Sistema de seguimiento y evaluación de resultados'
      ]
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
      achievements: [
        'Diseño responsivo para todos los dispositivos',
        'Animaciones fluidas con Framer Motion',
        'Optimización de rendimiento y SEO',
        'Paleta de colores galáctica personalizada'
      ],
      tools: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'React', 'Git'],
      metrics: [
        { label: 'Páginas Desarrolladas', value: '4' },
        { label: 'Componentes Creados', value: '8+' },
        { label: 'Tiempo de Desarrollo', value: '2 semanas' },
        { label: 'Lighthouse Score', value: '95+' }
      ],
      challenges: [
        'Crear una experiencia visual única y memorable',
        'Implementar animaciones suaves sin afectar rendimiento',
        'Diseñar una paleta de colores coherente y profesional'
      ],
      solutions: [
        'Uso de Framer Motion para animaciones optimizadas',
        'Implementación de diseño system con Tailwind CSS',
        'Paleta de colores galáctica con gradientes morados'
      ]
    }
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