export type Language = 'en' | 'es'

export const defaultLanguage: Language = 'en'

export const translations = {
  en: {
    // Navigation
    nav: {
      home: 'Home',
      projects: 'Projects',
      about: 'About',
      contact: 'Contact'
    },
    
    // Hero Section
    hero: {
      title: 'Neil Endicott',
      subtitle: 'Project & Operations Manager',
      description: 'Impact-driven Project & Operations Manager with over 3 years of experience, expert in Agile methodologies (Scrum, Kanban) and Waterfall. Specialized in stakeholder management, risk management, and optimization of digital workflows.',
      viewProjects: 'View Projects',
      contact: 'Contact',
      scrollMore: 'See more'
    },

    // Metrics Section
    metrics: {
      title: 'Outstanding Results',
      subtitle: 'Key metrics that demonstrate my impact in project and operations management',
      delivery: {
        label: 'On-Time Delivery',
        description: 'Luxury project delivery rate'
      },
      costs: {
        label: 'Cost Reduction',
        description: 'Operational cost optimization'
      },
      errors: {
        label: 'Fewer Errors',
        description: 'Documentation error reduction'
      },
      b2b: {
        label: 'B2B Increase',
        description: 'International agreement growth'
      }
    },

    // Skills Section
    skills: {
      title: 'Key Skills',
      subtitle: 'Technologies and methodologies I use to optimize projects and operations',
      projectManagement: {
        title: 'Project Management',
        skills: ['Agile (Scrum, Kanban)', 'Waterfall', 'Risk Management', 'Scope Control', 'Budgets']
      },
      digitalTools: {
        title: 'Digital Tools',
        skills: ['Jira', 'Trello', 'Asana', 'Notion', 'Google Sheets', 'MS Project']
      },
      communication: {
        title: 'Communication',
        skills: ['Stakeholder Management', 'Negotiation', 'Contract Review', 'English (C1/C2)', 'Spanish (Native)']
      }
    },

    // Projects Page
    projects: {
      title: 'My Projects',
      subtitle: 'A selection of outstanding projects that demonstrate my experience in project management, operations optimization, and leadership in dynamic environments.',
      viewDetails: 'View Details',
      visitWebsite: 'Visit Website',
      achievements: 'Key Achievements',
      tools: 'Tools & Technologies',
      challenges: 'Challenges Faced',
      solutions: 'Implemented Solutions',
      detailedDescription: 'Detailed Description'
    },

    // Contact Page
    contact: {
      title: 'Contact',
      subtitle: 'Do you have a project in mind? Need an expert Project Manager? I\'m here to help you achieve your goals.',
      form: {
        title: 'Send me a Message',
        name: 'Name *',
        email: 'Email *',
        subject: 'Subject *',
        message: 'Message *',
        namePlaceholder: 'Your full name',
        emailPlaceholder: 'your@email.com',
        subjectPlaceholder: 'How can I help you?',
        messagePlaceholder: 'Tell me about your project...',
        send: 'Send Message',
        sending: 'Sending...',
        success: 'Message sent successfully! I\'ll get back to you soon.',
        error: 'There was an error sending the message. Please try again.'
      },
      info: {
        email: 'Email',
        phone: 'Phone',
        location: 'Location',
        availability: 'Availability'
      },
      contactInfo: {
        title: 'Contact Information',
        connect: 'Connect With Me',
        downloadCV: 'Download CV',
        cvDescription: 'My resume in PDF',
        availability: 'Availability',
        mondayFriday: 'Monday - Friday',
        saturday: 'Saturday',
        sunday: 'Sunday',
        closed: 'Closed',
        note: 'Note: For urgent projects, I can make exceptions to the schedule. Don\'t hesitate to contact me!'
      },
      about: {
        title: 'About Me',
        subtitle: 'Project & Operations Manager with over 3 years of experience, specialized in Agile methodologies and optimization of digital workflows for luxury tourism and events companies.',
        experience: 'Professional Experience',
        experienceSubtitle: 'My professional trajectory in project management and operations',
        education: 'Education & Certifications',
        educationSubtitle: 'My academic training and professional certifications',
        skills: 'Technical Skills',
        skillsSubtitle: 'Technologies, methodologies and tools I use in my daily work'
      }
    },

    // Project Details
    projectsData: {
      website: {
        title: 'Website Redesign and Launch',
        company: 'Inca Explorers',
        period: 'Jul 2021 – Present',
        description: 'Orchestrated the complete redesign and launch of Inca Explorers responsive website, defining the WBS, managing bi-weekly sprints, and optimizing performance to improve user experience.',
        detailedDescription: 'As Project Manager, I led a cross-functional team of developers and designers to completely transform Inca Explorers digital presence. The project included complete website restructuring, implementation of Agile methodologies with bi-weekly sprints, and performance optimization to improve user experience and conversions.'
      },
      logistics: {
        title: 'Logistics Optimization and Cost Reduction',
        company: 'Inca Explorers',
        period: 'Jul 2021 – Present',
        description: 'Led complete logistics restructuring with process mapping and stakeholder workshops, achieving significant reduction in operational costs and improving overall efficiency.',
        detailedDescription: 'I implemented a comprehensive logistics optimization strategy that included detailed mapping of all operational processes, stakeholder workshops to identify bottlenecks, and implementation of budget management systems. The project resulted in significant cost reduction while maintaining luxury tourism quality standards.'
      },
      marketing: {
        title: 'Marketing Analysis and Digital Strategy',
        company: 'Inca Explorers',
        period: 'Jul 2021 – Present',
        description: 'Leveraged marketing analytics (market research, A/B testing, ROI analysis) and data tools to drive insights and stakeholder alignment.',
        detailedDescription: 'I developed and implemented a comprehensive marketing analysis strategy that included market research for new destinations, A/B testing for conversion optimization, and ROI analysis for all marketing campaigns. I used advanced data analysis tools to generate actionable insights and improve stakeholder alignment.'
      },
      catering: {
        title: 'High-End Event Management',
        company: 'Pamu Catering',
        period: 'Jan 2022 – Dec 2024',
        description: 'Executed high-end catering events for 60+ attendees, developing pricing models and rate grids, achieving 95% positive feedback.',
        detailedDescription: 'As Founder and Project Manager, I designed and executed high-end catering events for up to 60 attendees. I developed sophisticated pricing models and rate grids, implemented Kanban workflows to optimize operations, and created 5 SOPs that significantly reduced errors and bottlenecks.'
      },
      biohuertos: {
        title: 'Community Bio Gardens - Pacchanta',
        company: 'Pacchanta Biohuertos Initiative',
        period: 'Jan 2023 – Dec 2023',
        description: 'Designed and implemented organic bio gardens; trained 5 families in sustainable cultivation, increasing fresh produce intake by 60% and improving household income.',
        detailedDescription: 'I led a comprehensive community project in Pacchanta, Cusco, designing and implementing sustainable organic bio gardens. The project included training 5 families in sustainable cultivation techniques, implementing efficient irrigation systems, and creating a local business model that significantly improved household income and food security.'
      },
      portfolio: {
        title: 'Professional Web Portfolio - Frontend Development',
        company: 'Neil Endicott Portfolio',
        period: 'Nov 2024 – Present',
        description: 'Developed my personal web portfolio using Next.js, TypeScript, and Tailwind CSS, implementing responsive design and interactive animations to showcase my professional experience.',
        detailedDescription: 'As a frontend developer and project manager, I completely designed and developed my professional web portfolio using modern technologies like Next.js, TypeScript, and Tailwind CSS. The project includes responsive design for all devices, fluid animations with Framer Motion, performance and SEO optimization, and a personalized galactic color palette that reflects my professional style.'
      }
    }
  },

  es: {
    // Navigation
    nav: {
      home: 'Inicio',
      projects: 'Proyectos',
      about: 'Acerca de',
      contact: 'Contacto'
    },
    
    // Hero Section
    hero: {
      title: 'Neil Endicott',
      subtitle: 'Project & Operations Manager',
      description: 'Impact-driven Project & Operations Manager con más de 3 años de experiencia, experto en metodologías Agile (Scrum, Kanban) y Waterfall. Especializado en gestión de stakeholders, gestión de riesgos y optimización de flujos de trabajo digitales.',
      viewProjects: 'Ver Proyectos',
      contact: 'Contactar',
      scrollMore: 'Ver más'
    },

    // Metrics Section
    metrics: {
      title: 'Resultados Destacados',
      subtitle: 'Métricas clave que demuestran mi impacto en la gestión de proyectos y operaciones',
      delivery: {
        label: 'Entrega a Tiempo',
        description: 'Tasa de entrega en proyectos de lujo'
      },
      costs: {
        label: 'Reducción de Costos',
        description: 'Optimización de costos operativos'
      },
      errors: {
        label: 'Menos Errores',
        description: 'Reducción en errores de documentación'
      },
      b2b: {
        label: 'Incremento B2B',
        description: 'Aumento en acuerdos internacionales'
      }
    },

    // Skills Section
    skills: {
      title: 'Habilidades Principales',
      subtitle: 'Tecnologías y metodologías que utilizo para optimizar proyectos y operaciones',
      projectManagement: {
        title: 'Gestión de Proyectos',
        skills: ['Agile (Scrum, Kanban)', 'Waterfall', 'Gestión de Riesgos', 'Control de Alcance', 'Presupuestos']
      },
      digitalTools: {
        title: 'Herramientas Digitales',
        skills: ['Jira', 'Trello', 'Asana', 'Notion', 'Google Sheets', 'MS Project']
      },
      communication: {
        title: 'Comunicación',
        skills: ['Gestión de Stakeholders', 'Negociación', 'Revisión de Contratos', 'Inglés (C1/C2)', 'Español (Nativo)']
      }
    },

    // Projects Page
    projects: {
      title: 'Mis Proyectos',
      subtitle: 'Una selección de proyectos destacados que demuestran mi experiencia en gestión de proyectos, optimización de operaciones y liderazgo en entornos dinámicos.',
      viewDetails: 'Ver Detalles',
      visitWebsite: 'Visitar Sitio Web',
      achievements: 'Logros Principales',
      tools: 'Herramientas y Tecnologías',
      challenges: 'Desafíos Enfrentados',
      solutions: 'Soluciones Implementadas',
      detailedDescription: 'Descripción Detallada'
    },

    // Contact Page
    contact: {
      title: 'Contacto',
      subtitle: '¿Tienes un proyecto en mente? ¿Necesitas un Project Manager experto? Estoy aquí para ayudarte a hacer realidad tus objetivos.',
      form: {
        title: 'Envíame un Mensaje',
        name: 'Nombre *',
        email: 'Email *',
        subject: 'Asunto *',
        message: 'Mensaje *',
        namePlaceholder: 'Tu nombre completo',
        emailPlaceholder: 'tu@email.com',
        subjectPlaceholder: '¿En qué puedo ayudarte?',
        messagePlaceholder: 'Cuéntame sobre tu proyecto...',
        send: 'Enviar Mensaje',
        sending: 'Enviando...',
        success: '¡Mensaje enviado exitosamente! Te responderé pronto.',
        error: 'Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.'
      },
      info: {
        email: 'Email',
        phone: 'Teléfono',
        location: 'Ubicación',
        availability: 'Disponibilidad'
      },
      contactInfo: {
        title: 'Información de Contacto',
        connect: 'Conecta Conmigo',
        downloadCV: 'Descargar CV',
        cvDescription: 'Mi currículum en PDF',
        availability: 'Disponibilidad',
        mondayFriday: 'Lunes - Viernes',
        saturday: 'Sábados',
        sunday: 'Domingos',
        closed: 'Cerrado',
        note: 'Nota: Para proyectos urgentes, puedo hacer excepciones en el horario. ¡No dudes en contactarme!'
      },
      about: {
        title: 'Sobre Mí',
        subtitle: 'Project & Operations Manager con más de 3 años de experiencia, especializado en metodologías Agile y optimización de flujos de trabajo digitales para empresas de turismo de lujo y eventos.',
        experience: 'Experiencia Profesional',
        experienceSubtitle: 'Mi trayectoria profesional en gestión de proyectos y operaciones',
        education: 'Educación & Certificaciones',
        educationSubtitle: 'Mi formación académica y certificaciones profesionales',
        skills: 'Habilidades Técnicas',
        skillsSubtitle: 'Tecnologías, metodologías y herramientas que utilizo en mi trabajo diario'
      }
    },

    // Project Details
    projectsData: {
      website: {
        title: 'Rediseño y Lanzamiento de Website Responsive',
        company: 'Inca Explorers',
        period: 'Jul 2021 – Presente',
        description: 'Orquesté el rediseño completo y lanzamiento del website responsive de Inca Explorers, definiendo el WBS, gestionando sprints bimensuales y optimizando el rendimiento para mejorar la experiencia del usuario.',
        detailedDescription: 'Como Project Manager, lideré un equipo cross-funcional de desarrolladores y diseñadores para transformar completamente la presencia digital de Inca Explorers. El proyecto incluyó la reestructuración completa del sitio web, implementación de metodologías Agile con sprints bimensuales, y optimización de rendimiento para mejorar la experiencia del usuario y las conversiones.'
      },
      logistics: {
        title: 'Optimización Logística y Reducción de Costos',
        company: 'Inca Explorers',
        period: 'Jul 2021 – Presente',
        description: 'Lideré la reestructuración logística completa con mapeo de procesos y talleres de stakeholders, logrando una reducción significativa en costos operativos y mejorando la eficiencia general.',
        detailedDescription: 'Implementé una estrategia integral de optimización logística que incluyó el mapeo detallado de todos los procesos operativos, talleres de stakeholders para identificar cuellos de botella, y la implementación de sistemas de gestión de presupuestos. El proyecto resultó en una reducción significativa de costos mientras se mantuvieron los estándares de calidad en turismo de lujo.'
      },
      marketing: {
        title: 'Análisis de Marketing y Estrategia Digital',
        company: 'Inca Explorers',
        period: 'Jul 2021 – Presente',
        description: 'Aproveché análisis de marketing (investigación de mercado, A/B testing, análisis de ROI) y herramientas de datos para impulsar insights y alineación de stakeholders.',
        detailedDescription: 'Desarrollé e implementé una estrategia de análisis de marketing integral que incluyó investigación de mercado para nuevos destinos, A/B testing para optimización de conversiones, y análisis de ROI para todas las campañas de marketing. Utilicé herramientas avanzadas de análisis de datos para generar insights accionables y mejorar la alineación de stakeholders.'
      },
      catering: {
        title: 'Gestión de Eventos de Alta Gama',
        company: 'Pamu Catering',
        period: 'Ene 2022 – Dic 2024',
        description: 'Ejecuté eventos de catering de alta gama para 60+ asistentes, desarrollando modelos de precios y cuadrículas de tarifas, logrando un feedback positivo del 95%.',
        detailedDescription: 'Como Founder y Project Manager, diseñé y ejecuté eventos de catering de alta gama para hasta 60 asistentes. Desarrollé modelos de precios sofisticados y cuadrículas de tarifas, implementé flujos de trabajo Kanban para optimizar operaciones, y creé 5 SOPs que redujeron significativamente los errores y cuellos de botella.'
      },
      biohuertos: {
        title: 'Bio Huertos Comunitarios - Pacchanta',
        company: 'Pacchanta Biohuertos Initiative',
        period: 'Ene 2023 – Dic 2023',
        description: 'Diseñé e implementé bio huertos orgánicos; entrené a 5 familias en cultivo sostenible, aumentando la ingesta de productos frescos en un 60% y mejorando los ingresos familiares.',
        detailedDescription: 'Lideré un proyecto comunitario integral en Pacchanta, Cusco, diseñando e implementando bio huertos orgánicos sostenibles. El proyecto incluyó el entrenamiento de 5 familias en técnicas de cultivo sostenible, la implementación de sistemas de riego eficientes, y la creación de un modelo de negocio local que mejoró significativamente los ingresos familiares y la seguridad alimentaria.'
      },
      portfolio: {
        title: 'Portafolio Web Profesional - Desarrollo Frontend',
        company: 'Neil Endicott Portfolio',
        period: 'Nov 2024 – Presente',
        description: 'Desarrollé mi portafolio web personal utilizando Next.js, TypeScript y Tailwind CSS, implementando diseño responsivo y animaciones interactivas para mostrar mi experiencia profesional.',
        detailedDescription: 'Como desarrollador frontend y project manager, diseñé y desarrollé completamente mi portafolio web profesional utilizando tecnologías modernas como Next.js, TypeScript y Tailwind CSS. El proyecto incluye diseño responsivo para todos los dispositivos, animaciones fluidas con Framer Motion, optimización de rendimiento y SEO, y una paleta de colores galáctica personalizada que refleja mi estilo profesional.'
      }
    }
  }
}

export function getTranslation(lang: Language, key: string): any {
  const keys = key.split('.')
  let value: any = translations[lang]
  
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k]
    } else {
      return key // Return key if translation not found
    }
  }
  
  return value
} 