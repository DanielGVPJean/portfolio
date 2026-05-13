import React from 'react'
import { ScrambleText } from '../atoms/ScrambleText'
import { Code, Server, Database, GitBranch, Zap, FlaskConical, Cloud } from 'lucide-react'

export const SkillsSection: React.FC = () => {
  const skills = [
    {
      icon: <Code size={24} />,
      title: 'FRONTEND DEVELOPMENT',
      technologies: 'REACT, TYPESCRIPT, TAILWIND CSS',
      color: 'from-blue-500 to-purple-600'
    },
    {
      icon: <Server size={24} />,
      title: 'BACKEND DEVELOPMENT',
      technologies: 'NODE.JS, TYPESCRIPT, PHP, LARAVEL, PYTHON, GRAPHQL',
      color: 'from-green-500 to-teal-600'
    },
    {
      icon: <Cloud size={24} />,
      title: 'CLOUD & DEVOPS',
      technologies: 'AWS LAMBDA, AWS SQS, GITHUB ACTIONS, DOCKER, APACHE',
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: <Database size={24} />,
      title: 'DATABASE MANAGEMENT',
      technologies: 'MYSQL, DYNAMODB, INDEXEDDB',
      color: 'from-orange-500 to-red-600'
    },
    {
      icon: <GitBranch size={24} />,
      title: 'ARCHITECTURE',
      technologies: 'REST APIS, DISTRIBUTED SYSTEMS, MICROSERVICES, EVENT-DRIVEN WORKFLOWS, WEBSOCKETS',
      color: 'from-cyan-500 to-blue-600'
    },
    {
      icon: <FlaskConical size={24} />,
      title: 'TESTING',
      technologies: 'JEST, PLAYWRIGHT, UNIT TESTING, INTEGRATION TESTING, END-TO-END TESTING',
      color: 'from-yellow-500 to-orange-600'
    }
  ]
  
  return (
    <section id="skills" className="mb-16 pt-4 scroll-mt-24">
      <div className="mb-8">
        <ScrambleText 
          text="SKILLS & EXPERTISE"
          className="text-3xl font-bold text-white"
          as="h2"
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <div 
            key={index} 
            className={`bg-gradient-to-br ${skill.color} rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]`}
          >
            <div className="flex justify-between items-start mb-6">
              <div className="p-2 bg-white/10 rounded-lg">
                {skill.icon}
              </div>
              <Zap size={20} className="text-white/70" />
            </div>
            
            <h3 className="text-lg font-bold mb-2 text-white">{skill.title}</h3>
            <p className="text-sm text-white/80">{skill.technologies}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
