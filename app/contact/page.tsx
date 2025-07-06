'use client'

export const dynamic = 'force-dynamic'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, Linkedin, Download, Send, MapPin, Clock } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import { getTranslation } from '@/lib/i18n'

export default function ContactPage() {
  const { language } = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Enviar a Formspree
      const response = await fetch('https://formspree.io/f/xzzgqvpp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        throw new Error('Error en el envío')
      }
    } catch (error) {
      console.error('Error sending form:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'neilpachatusan@gmail.com',
      href: 'mailto:neilpachatusan@gmail.com'
    },
    {
      icon: Phone,
      title: 'Teléfono',
      value: '+51 940231417',
      href: 'tel:+51940231417'
    },
    {
      icon: MapPin,
      title: 'Ubicación',
      value: 'Perú',
      href: '#'
    },
    {
      icon: Clock,
      title: 'Disponibilidad',
      value: 'Lun - Vie, 9:00 - 18:00',
      href: '#'
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
              <span className="gradient-text">{getTranslation(language, 'contact.title')}</span>
            </h1>
            <p className="text-xl text-secondary-600 dark:text-secondary-400 max-w-3xl mx-auto leading-relaxed">
              {getTranslation(language, 'contact.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="card p-8"
            >
              <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-6">
                {getTranslation(language, 'contact.form.title')}
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2">
                      {getTranslation(language, 'contact.form.name')}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-secondary-300 dark:border-secondary-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-secondary-800 text-secondary-900 dark:text-white"
                      placeholder={getTranslation(language, 'contact.form.namePlaceholder')}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2">
                      {getTranslation(language, 'contact.form.email')}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-secondary-300 dark:border-secondary-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-secondary-800 text-secondary-900 dark:text-white"
                      placeholder={getTranslation(language, 'contact.form.emailPlaceholder')}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2">
                    {getTranslation(language, 'contact.form.subject')}
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-secondary-300 dark:border-secondary-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-secondary-800 text-secondary-900 dark:text-white"
                    placeholder={getTranslation(language, 'contact.form.subjectPlaceholder')}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2">
                    {getTranslation(language, 'contact.form.message')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-secondary-300 dark:border-secondary-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-secondary-800 text-secondary-900 dark:text-white resize-none"
                    placeholder={getTranslation(language, 'contact.form.messagePlaceholder')}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>{getTranslation(language, 'contact.form.sending')}</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      <span>{getTranslation(language, 'contact.form.send')}</span>
                    </>
                  )}
                </button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-lg"
                  >
                    {getTranslation(language, 'contact.form.success')}
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 rounded-lg"
                  >
                    {getTranslation(language, 'contact.form.error')}
                  </motion.div>
                )}
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Contact Information */}
              <div className="card p-8">
                <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-6">
                  {getTranslation(language, 'contact.contactInfo.title')}
                </h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg">
                        <info.icon className="h-6 w-6 text-primary-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-secondary-900 dark:text-white">{info.title}</h3>
                        <a
                          href={info.href}
                          className="text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                        >
                          {info.value}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="card p-8">
                <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-6">
                  {getTranslation(language, 'contact.contactInfo.connect')}
                </h2>
                <div className="space-y-4">
                  <a
                    href="https://www.linkedin.com/in/neil-endicott-90a0a51a2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-4 bg-secondary-50 dark:bg-secondary-800 rounded-lg hover:bg-secondary-100 dark:hover:bg-secondary-700 transition-colors"
                  >
                    <Linkedin className="h-6 w-6 text-blue-600" />
                    <div>
                      <h3 className="font-semibold text-secondary-900 dark:text-white">LinkedIn</h3>
                      <p className="text-sm text-secondary-600 dark:text-secondary-400">Conecta profesionalmente</p>
                    </div>
                  </a>

                  <a
                    href="/api/cv"
                    download="Neil-Endicott-CV.pdf"
                    className="flex items-center space-x-3 p-4 bg-secondary-50 dark:bg-secondary-800 rounded-lg hover:bg-secondary-100 dark:hover:bg-secondary-700 transition-colors"
                  >
                    <Download className="h-6 w-6 text-green-600" />
                    <div>
                      <h3 className="font-semibold text-secondary-900 dark:text-white">{getTranslation(language, 'contact.contactInfo.downloadCV')}</h3>
                      <p className="text-sm text-secondary-600 dark:text-secondary-400">{getTranslation(language, 'contact.contactInfo.cvDescription')}</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Availability */}
              <div className="card p-8">
                <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-6">
                  {getTranslation(language, 'contact.contactInfo.availability')}
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-secondary-600 dark:text-secondary-400">{getTranslation(language, 'contact.contactInfo.mondayFriday')}</span>
                    <span className="font-semibold text-secondary-900 dark:text-white">9:00 - 18:00</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-secondary-600 dark:text-secondary-400">{getTranslation(language, 'contact.contactInfo.saturday')}</span>
                    <span className="font-semibold text-secondary-900 dark:text-white">10:00 - 14:00</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-secondary-600 dark:text-secondary-400">{getTranslation(language, 'contact.contactInfo.sunday')}</span>
                    <span className="font-semibold text-secondary-900 dark:text-white">{getTranslation(language, 'contact.contactInfo.closed')}</span>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-primary-50 dark:bg-primary-900/20 rounded-lg">
                  <p className="text-sm text-primary-700 dark:text-primary-300">
                    <strong>Nota:</strong> {getTranslation(language, 'contact.contactInfo.note')}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
} 