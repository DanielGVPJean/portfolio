import { Experience, PersonalInfo } from '../types'

export const personalInfo: PersonalInfo = {
  name: 'Daniel González Viera Petit-Jean',
  title: 'Senior Software Engineer | Technical Lead',
  email: 'danielgvpj@outlook.com',
  phone: '(+52) 56 3587 3290',
  linkedin: 'linkedin.com/in/danielgvpj/',
  profileImage: 'images/profile.jpeg',
}

export const experiences: Experience[] = [
  {
    id: '1',
    title: 'Senior Software Engineer | Technical Lead',
    company: 'Cautiva Producciones',
    period: 'August 2024 – current',
    location: 'Mexico City, México',
    technologies: [
      { name: 'DevOps' },
      { name: 'GitHub Actions' },
      { name: 'React' },
      { name: 'TypeScript' },
      { name: 'Node.js' },
      { name: 'Docker' },
      { name: 'Apache' },
      { name: 'Laravel' },
      { name: 'PHP' }
    ],
    achievements: [
      {
        text: 'Pioneered offline-first architecture using IndexedDB, reducing load times by 10+ seconds',
        hasExample: false,
        exampleUrl: '/videos/offline-architecture-demo.webm',
        mediaType: 'video'
      },
      {
        text: 'Managed cross-functional team of 6 engineers and designers',
        hasExample: false
      },
      {
        text: 'Architected standalone Auth System microservice with Clerk and Laravel',
        hasExample: false
      },
      {
        text: 'Designed CI/CD pipelines reducing deployment errors by 90%',
        hasExample: false
      },
      {
        text: 'Implemented Payment Management System with Stripe API integration',
        hasExample: false
      }
    ]
  },
  {
    id: '2',
    title: 'Software Engineer',
    company: 'Colegio Las Hayas',
    period: 'August 2022 – August 2024',
    location: 'Xalapa, México',
    technologies: [
      { name: 'JavaScript' },
      { name: 'Node.js' },
      { name: 'React' },
      { name: 'TypeScript' },
      { name: 'Laravel' },
      { name: 'PHP' },
      { name: 'C++' },
      { name: 'Python' },
      { name: 'Apache' }
    ],
    achievements: [
      {
        text: 'Built Python-based Greenhouse Data Analytics Service with Linear Regression',
        hasExample: false
      },
      {
        text: 'Developed Resource Consumption Monitoring Platform with C++ agents',
        hasExample: false
      },
      {
        text: 'Engineered RFID-Driven Asset Lending System with microcontroller firmware',
        hasExample: false
      },
      {
        text: 'Created Offline-First Grading Module with IndexedDB caching',
        hasExample: false
      }
    ]
  },
  {
    id: '3',
    title: 'Full-Stack Developer',
    company: 'Build-It-Yourself',
    period: 'June 2023 – August 2023',
    location: 'Cambridge MA, USA',
    technologies: [
      { name: 'React' },
      { name: 'JavaScript' },
      { name: 'Laravel' },
      { name: 'PHP' },
      { name: 'MySQL' },
      { name: 'Apache' },
      { name: 'C++' }
    ],
    achievements: [
      {
        text: 'Designed real-time control platform using React and Laravel',
        hasExample: false
      },
      {
        text: 'Implemented WebSocket channels for bidirectional communication',
        hasExample: false
      },
      {
        text: 'Collaborated on C++ firmware for robotic project control',
        hasExample: false
      }
    ]
  },
  {
    id: '4',
    title: 'Full-Stack Developer',
    company: '3D-POP',
    period: 'Jan 2021 — Jul 2022',
    location: 'Xalapa, Ver., México',
    technologies: [
      { name: 'JavaScript' },
      { name: 'jQuery' },
      { name: 'HTML5' },
      { name: 'CSS3' },
      { name: 'PHP' },
      { name: 'MySQL' }
    ],
    achievements: [
      {
        text: 'Architected 3D Printing E-Commerce Platform',
        hasExample: false
      },
      {
        text: 'Developed Online Order Management System',
        hasExample: false
      },
      {
        text: 'Created Manufacturing Cost Calculator with real-time pricing',
        hasExample: false
      },
      {
        text: 'Implemented automated email notification system',
        hasExample: false
      }
    ]
  },
  {
    id: '5',
    title: 'Mentoring Program (RSI)',
    company: 'MIT',
    period: 'June 2017 – August 2017',
    location: 'Cambridge MA, USA',
    technologies: [
      { name: 'Mentoring' },
      { name: 'C++' },
      { name: 'Electronics' },
      { name: 'Wearables' },
      { name: 'JavaScript' },
      { name: 'HTML' },
      { name: 'CSS' }
    ],
    achievements: [
      {
        text: 'Guided pre-college students through research projects at MIT RSI',
        hasExample: false
      },
      {
        text: 'Taught programming logic and wearable electronics prototyping',
        hasExample: false
      },
      {
        text: 'Led development of interactive portfolios showcasing student work',
        hasExample: false
      }
    ]
  }
]
