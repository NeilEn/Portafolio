'use client'

export const dynamic = 'force-dynamic'

import { motion } from 'framer-motion'
import { Calendar, MapPin, Award, BookOpen, Users, Target, Download } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import { getTranslation } from '@/lib/i18n'

export default function AboutPage() {
  const { language } = useLanguage()
  const experiences = getTranslation(language, 'about.experiences')

  const education = getTranslation(language, 'about.educationList')

  const skills = language === 'es'
    ? [
        {
          title: getTranslation(language, 'skills.projectManagement.title'),
          skills: getTranslation(language, 'skills.projectManagement.skills')
        },
        {
          title: getTranslation(language, 'skills.digitalTools.title'),
          skills: getTranslation(language, 'skills.digitalTools.skills')
        },
        {
          title: 'Flujos de Trabajo',
          skills: ['SOPs', 'Dashboards', 'Status Reporting', 'Análisis de Varianza']
        },
        {
          title: getTranslation(language, 'skills.communication.title'),
          skills: getTranslation(language, 'skills.communication.skills')
        },
        {
          title: 'Idiomas',
          skills: ['Inglés (C1/C2)', 'Español (Nativo)']
        }
      ]
    : [
        {
          title: getTranslation(language, 'skills.projectManagement.title'),
          skills: getTranslation(language, 'skills.projectManagement.skills')
        },
        {
          title: getTranslation(language, 'skills.digitalTools.title'),
          skills: getTranslation(language, 'skills.digitalTools.skills')
        },
        {
          title: 'Workflow',
          skills: ['SOPs', 'Dashboards', 'Status Reporting', 'Variance Analysis']
        },
        {
          title: getTranslation(language, 'skills.communication.title'),
          skills: getTranslation(language, 'skills.communication.skills')
        },
        {
          title: 'Languages',
          skills: ['English (C1/C2)', 'Spanish (Native)']
        }
      ]

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
              {getTranslation(language, 'about.title').split(' ').map((word: string, index: number) => 
                index === 1 ? (
                  <span key={index} className="gradient-text"> {word} </span>
                ) : (
                  <span key={index}>{index === 0 ? word : ` ${word}`}</span>
                )
              )}
            </h1>
            <p className="text-xl text-secondary-600 dark:text-secondary-400 max-w-3xl mx-auto leading-relaxed">
              {getTranslation(language, 'about.subtitle')}
            </p>
          </motion.div>

          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="card p-8 max-w-4xl mx-auto"
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Avatar Placeholder */}
              <div className="flex flex-col items-center lg:items-start">
                <div className="w-48 h-48 rounded-full overflow-hidden flex items-center justify-center mb-6 border-4 border-primary-400 shadow-lg">
                  <img
                    src="/neil.jpeg"
                    alt="Neil Endicott"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="text-center lg:text-left">
                  <h2 className="text-2xl font-bold mb-2">Neil Endicott</h2>
                  <p className="text-secondary-600 dark:text-secondary-400">Project & Operations Manager</p>
                </div>
              </div>

              {/* Contact Info */}
              <div className="lg:col-span-2 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-primary-600" />
                    <span className="text-secondary-600 dark:text-secondary-400">{getTranslation(language, 'about.location')}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Calendar className="h-5 w-5 text-primary-600" />
                    <span className="text-secondary-600 dark:text-secondary-400">{getTranslation(language, 'about.experienceYears')}</span>
                  </div>
                </div>
                
                <div className="bg-secondary-50 dark:bg-secondary-800 p-4 rounded-lg">
                  <p className="text-secondary-700 dark:text-secondary-300 leading-relaxed">
                    {getTranslation(language, 'about.subtitle')}
                  </p>
                  
                  {/* Download CV Button */}
                  <div className="mt-4">
                    <a
                      href="/api/cv"
                      download="Neil-Endicott-CV.pdf"
                      className="inline-flex items-center px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors duration-200"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      {getTranslation(language, 'about.downloadCV')}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              {getTranslation(language, 'about.experience').split(' ').map((word: string, index: number) => 
                index === 1 ? (
                  <span key={index} className="gradient-text"> {word} </span>
                ) : (
                  <span key={index}>{index === 0 ? word : ` ${word}`}</span>
                )
              )}
            </h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto">
              {getTranslation(language, 'about.experienceSubtitle')}
            </p>
          </motion.div>

          <div className="space-y-8">
            {Array.isArray(experiences) && experiences.map((exp: any, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="card p-6"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-primary-600 mb-1">{exp.company}</h3>
                    <p className="text-lg font-semibold text-secondary-900 dark:text-white">{exp.position}</p>
                  </div>
                  <div className="flex items-center space-x-4 mt-2 lg:mt-0">
                    <div className="flex items-center space-x-2 text-secondary-600 dark:text-secondary-400">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-secondary-600 dark:text-secondary-400">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">{exp.location}</span>
                    </div>
                  </div>
                </div>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement: string, achievementIndex: number) => (
                    <li key={achievementIndex} className="flex items-start space-x-3">
                      <Target className="h-5 w-5 text-primary-600 mt-0.5 flex-shrink-0" />
                      <span className="text-secondary-700 dark:text-secondary-300">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 bg-secondary-50 dark:bg-secondary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              {getTranslation(language, 'about.education').split(' ').map((word: string, index: number) => 
                index === 1 ? (
                  <span key={index} className="gradient-text"> {word} </span>
                ) : (
                  <span key={index}>{index === 0 ? word : ` ${word}`}</span>
                )
              )}
            </h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto">
              {getTranslation(language, 'about.educationSubtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Array.isArray(education) && education.map((edu: any, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg">
                    <BookOpen className="h-6 w-6 text-primary-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-1">
                      {edu.degree}
                    </h3>
                    <p className="text-secondary-600 dark:text-secondary-400 mb-2">{edu.institution}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-secondary-500 dark:text-secondary-500">{edu.period}</span>
                      <span className={`text-sm px-2 py-1 rounded-full ${
                        edu.status === getTranslation(language, 'about.completed') 
                          ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                          : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                      }`}>
                        {edu.status}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-secondary-900 dark:text-white">
              {getTranslation(language, 'about.skills').split(' ').map((word: string, index: number) => 
                index === 1 ? (
                  <span key={index} className="gradient-text"> {word} </span>
                ) : (
                  <span key={index}>{index === 0 ? word : ` ${word}`}</span>
                )
              )}
            </h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto">
              {getTranslation(language, 'about.skillsSubtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-primary-100 dark:bg-primary-900 rounded-lg">
                    <Users className="h-5 w-5 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-secondary-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>
                <div className="space-y-2">
                  {category.skills.map((skill: string, skillIndex: number) => (
                    <div key={skillIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                      <span className="text-secondary-700 dark:text-secondary-300">{skill}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
} 