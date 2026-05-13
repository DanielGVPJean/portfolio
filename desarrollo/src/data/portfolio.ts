import { Experience, PersonalInfo } from '../types'

export const personalInfo: PersonalInfo = {
  name: 'Daniel González Viera Petit-Jean',
  title: 'Senior Software Engineer | Full Stack & Backend Systems',
  email: 'danielgvpj@outlook.com',
  phone: '(+52) 56 3587 3290',
  linkedin: 'linkedin.com/in/danielgvpj/',
  github: 'github.com/DanielGVPJean/portfolio',
  profileImage: 'images/profile.webp',
}

export const experiences: Experience[] = [
  {
    id: '1',
    title: 'Senior Software Engineer',
    company: 'Sprinter Health',
    period: 'July 2025 – Present',
    location: 'Mexico City, México',
    technologies: [
      { name: 'GitHub Actions' },
      { name: 'React' },
      { name: 'TypeScript' },
      { name: 'Node.js' },
      { name: 'AWS Amplify' },
      { name: 'AWS SQS' },
      { name: 'GraphQL' },
      { name: 'Git' },
      { name: 'PHP' }
    ],
    achievements: [
      {
        text: 'Led the Mexico-based nearshore engineering team, coordinating delivery, priorities, and technical execution across backend initiatives',
        hasExample: false
      },
      {
        text: 'Designed and implemented a distributed asynchronous messaging system using AWS SQS and Node.js to orchestrate patient SMS delivery workflows, retry handling, SLA compliance, and timezone-aware scheduling',
        hasExample: false
      },
      {
        text: 'Built a retry and staging queue workflow for failed or prematurely scheduled messages, with TTL-based routing to a dead letter queue for operational review',
        hasExample: false
      },
      {
        text: 'Designed and implemented an automated patient follow-up platform integrating REST APIs, Zendesk webhooks, and asynchronous backend workflows for lab results, reducing outreach latency from up to 3 weeks to only a few days',
        hasExample: false
      },
      {
        text: 'Developed AWS Lambda-based tooling to support analysis, validation, and troubleshooting of messaging and ticketing workflows in staging and production environments',
        hasExample: false
      },
      {
        text: 'Added unit, integration, and end-to-end tests for backend services, improving reliability and reducing regressions across asynchronous workflows',
        hasExample: false
      }
    ]
  },
  {
    id: '2',
    title: 'Senior Software Engineer | Technical Lead',
    company: 'Cautiva Producciones',
    period: 'August 2024 – July 2025',
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
        text: 'Pioneered an offline-first architecture for on-site user panels using IndexedDB, reducing initial load times by more than 10 seconds and driving a 99% reduction in connectivity-related incidents through resilient queue handling and asynchronous background synchronization',
        hasExample: true,
        exampleUrl: '/videos/load_example.mp4',
        mediaType: 'video'
      },
      {
        text: 'Managed and mentored a cross-functional team of 6 engineers and designers, coordinating delivery, priorities, and technical execution across backend and frontend initiatives',
        hasExample: false
      },
      {
        text: 'Architected and led development of a standalone Auth System microservice using Clerk for secure authentication and Laravel for session and permissions management, reducing duplicated auth-related bug reports by 85%',
        hasExample: false
      },
      {
        text: 'Designed and implemented CI/CD pipelines with GitHub Actions to support a blue-green deployment flow for frontend and backend services, reducing deployment errors by 90% and improving release portability',
        hasExample: false
      },
      {
        text: 'Led requirement gathering sessions with key clients and internal stakeholders, translating business needs into clear functional specifications and user stories',
        hasExample: false
      },
      {
        text: 'Designed and implemented a Payment Management System integrating the Stripe API and webhooks to orchestrate payment events across ticket-selling platforms, including real-time alerts, dynamic coupon generation, and a unified shopping cart',
        hasExample: false
      }
    ]
  },
  {
    id: '3',
    title: 'Senior Software Engineer',
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
        text: 'Built a Python-based Greenhouse Data Analytics Service that ingests smart sensor feeds, applies sorting and indexing pipelines, and runs a linear regression model to predict pH trends, with REST APIs for real-time queries and scheduled batch forecasts',
        hasExample: false
      },
      {
        text: 'Developed a Resource Consumption Monitoring Platform using C++ agents to poll water, gas, and electricity smart meter APIs, streaming data into a central Laravel API with a React dashboard featuring WebSocket updates and customizable alerts',
        hasExample: false
      },
      {
        text: 'Engineered an RFID-Driven Asset Lending System with microcontroller firmware in C++ for check-in/check-out flows, a PHP/MySQL REST API backend, and a React SPA for administrators to manage inventory and generate usage reports',
        hasExample: false
      },
      {
        text: 'Contributed to an Offline-First Grading Module for a UN Model Platform, supporting the Laravel backend and implementing an IndexedDB-based offline cache with automatic sync logic on the React frontend',
        hasExample: false
      }
    ]
  },
  {
    id: '4',
    title: 'Full Stack Developer',
    company: 'Build It Yourself',
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
        text: 'Designed and led full stack development of a real-time control platform using React on the frontend and Laravel on the backend, with WebSocket channels for instant bidirectional command and telemetry updates',
        hasExample: false
      },
      {
        text: 'Collaborated with embedded engineers to develop C++ firmware on microcontrollers for live remote operation of robotic projects during BIY workshops',
        hasExample: false
      }
    ]
  },
  {
    id: '5',
    title: 'Full Stack Developer',
    company: '3D POP',
    period: 'January 2021 – July 2022',
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
        text: 'Designed and built the company\'s 3D Printing E-Commerce Platform using JavaScript, jQuery, HTML5, and CSS3, enabling customers to browse, configure, and submit custom print jobs directly from the browser',
        hasExample: false
      },
      {
        text: 'Developed the Online Order Management System with PHP and MySQL to handle order placement, status tracking, and inventory updates, streamlining the full submission-to-production workflow',
        hasExample: false
      },
      {
        text: 'Created a Manufacturing Cost Calculator in JavaScript to estimate pricing based on material, print time, and finishing options, providing real-time quotes during checkout',
        hasExample: false
      },
      {
        text: 'Implemented automated email notifications with server-side PHP routines to trigger transactional messages at each stage of the order lifecycle, improving communication and reducing support inquiries',
        hasExample: false
      }
    ]
  },
  {
    id: '6',
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
        text: 'Mentored two pre-college students during the 2017 MIT Research Science Institute, guiding technical research initiatives and teaching core programming, electronics, and problem-solving concepts through hands-on wearable technology projects',
        hasExample: false
      },
      {
        text: 'Supported the design and development of interactive JavaScript and HTML-based interfaces to showcase research outcomes and technical prototypes through a polished online portfolio presentation',
        hasExample: false
      }
    ]
  }
]
