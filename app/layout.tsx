import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { LanguageProvider } from '@/contexts/LanguageContext'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Neil Endicott - Project & Operations Manager',
  description: 'Project & Operations Manager with over 3 years of experience in Agile methodologies, stakeholder management, and digital workflow optimization. Specialized in luxury tourism and event management.',
  keywords: 'Project Manager, Operations Manager, Agile, Scrum, Kanban, Stakeholder Management, Digital Workflows, Tourism, Event Management',
  authors: [{ name: 'Neil Endicott' }],
  creator: 'Neil Endicott',
  publisher: 'Neil Endicott',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://neil-endicott-portfolio.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Neil Endicott - Project & Operations Manager',
    description: 'Project & Operations Manager with over 3 years of experience in Agile methodologies, stakeholder management, and digital workflow optimization.',
    url: 'https://neil-endicott-portfolio.vercel.app',
    siteName: 'Neil Endicott Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Neil Endicott - Project & Operations Manager',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Neil Endicott - Project & Operations Manager',
    description: 'Project & Operations Manager with over 3 years of experience in Agile methodologies, stakeholder management, and digital workflow optimization.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider defaultTheme="system">
          <LanguageProvider>
            <div className="min-h-screen flex flex-col">
              <Navbar />
              <main className="flex-1">
                {children}
              </main>
              <Footer />
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
} 