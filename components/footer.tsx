'use client'

import Link from 'next/link'
import { Linkedin, Mail, Phone, Download } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import { getTranslation } from '@/lib/i18n'

export function Footer() {
  const { language } = useLanguage()
  return (
    <footer className="bg-secondary-900 dark:bg-secondary-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 gradient-text">
              Neil Endicott
            </h3>
            <p className="text-secondary-300 mb-4">
              {getTranslation(language, 'footer.description')}
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-secondary-300">
                <Mail className="h-4 w-4" />
                <a 
                  href="mailto:neilpachatusan@gmail.com"
                  className="hover:text-primary-400 transition-colors"
                >
                  neilpachatusan@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-2 text-secondary-300">
                <Phone className="h-4 w-4" />
                <a 
                  href="tel:+51940231417"
                  className="hover:text-primary-400 transition-colors"
                >
                  +51 940231417
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{getTranslation(language, 'footer.quickLinks')}</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/about"
                  className="text-secondary-300 hover:text-primary-400 transition-colors"
                >
                  {getTranslation(language, 'footer.about')}
                </Link>
              </li>
              <li>
                <Link 
                  href="/projects"
                  className="text-secondary-300 hover:text-primary-400 transition-colors"
                >
                  {getTranslation(language, 'footer.projects')}
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact"
                  className="text-secondary-300 hover:text-primary-400 transition-colors"
                >
                  {getTranslation(language, 'footer.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Social & Resume */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{getTranslation(language, 'footer.connect')}</h3>
            <div className="space-y-3">
              <a
                href="https://www.linkedin.com/in/neil-endicott-90a0a51a2"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-secondary-300 hover:text-primary-400 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span>LinkedIn</span>
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-secondary-300 hover:text-primary-400 transition-colors"
              >
                <Download className="h-5 w-5" />
                <span>{getTranslation(language, 'footer.downloadCV')}</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-800 mt-8 pt-8 text-center text-secondary-400">
          <p>&copy; {new Date().getFullYear()} Neil Endicott. {getTranslation(language, 'footer.allRightsReserved')}</p>
        </div>
      </div>
    </footer>
  )
} 