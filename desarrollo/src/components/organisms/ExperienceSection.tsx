import React, { useState } from 'react'
import { ScrambleText } from '../atoms/ScrambleText'
import { ExampleModal } from '../molecules/ExampleModal'
import { experiences } from '../../data/portfolio'
import { Achievement } from '../../types'
import { ExternalLink, Play } from 'lucide-react'

const companyUrls: { [key: string]: string } = {
  'Cautiva Producciones': 'https://cautiva.com.mx/',
  'Colegio Las Hayas': 'https://hayas.edu.mx/',
  'Build-It-Yourself': 'https://build-it-yourself.com/',
  '3D-POP': 'https://3d-pop.com/',
  'MIT': 'https://math.mit.edu/research/highschool/rsi/'
}

export const ExperienceSection: React.FC = () => {
  const [selectedExample, setSelectedExample] = useState<{
    achievement: Achievement, 
    title: string, 
    mediaType: 'video' | 'image'
  } | null>(null)

  const handleExampleClick = (achievement: Achievement, title: string) => {
    if (achievement.hasExample && achievement.exampleUrl) {
      setSelectedExample({
        achievement, 
        title, 
        mediaType: achievement.mediaType || 'video'
      })
    }
  }

  return (
    <section id="experience" className="py-8 pt-4 scroll-mt-24">
      <div className="mb-10">
        <ScrambleText 
          text="PROFESSIONAL EXPERIENCE"
          className="text-2xl font-bold text-white"
          as="h2"
        />
      </div>
      
      <div className="space-y-10">
        {experiences.map((exp) => (
          <div 
            key={exp.id} 
            className="border border-white/10 rounded-xl p-5 hover:border-white/20 transition-all duration-300"
          >
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">{exp.company}</h3>
                <h4 className="text-orange-400 mb-1 text-sm">{exp.title}</h4>
                <p className="text-xs text-gray-400 mb-3">{exp.period} | {exp.location}</p>
              </div>
              <a 
                href={companyUrls[exp.company]}
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-400 hover:text-white transition-colors"
              >
                <ExternalLink size={18} />
              </a>
            </div>
            
            <div className="mb-3">
              <div className="flex flex-wrap gap-1.5">
                {exp.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="tech-tag text-xs"
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
            
            <ul className="space-y-2 text-xs text-gray-300">
              {exp.achievements.map((achievement, achIndex) => (
                <li 
                  key={achIndex}
                  className="flex items-start gap-2"
                >
                  <span className="text-orange-400 mt-0.5">•</span>
                  <div className="flex-1">
                    <span>{achievement.text}</span>
                    {achievement.hasExample && (
                      <button
                        onClick={() => handleExampleClick(
                          achievement,
                          `${exp.company} - ${achievement.text.slice(0, 30)}...`
                        )}
                        className="example-btn ml-2"
                      >
                        <Play size={10} className="mr-1" />
                        example
                      </button>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      
      {selectedExample && (
        <ExampleModal
          isOpen={!!selectedExample}
          onClose={() => setSelectedExample(null)}
          mediaUrl={selectedExample.achievement.exampleUrl || ''}
          title={selectedExample.title}
          mediaType={selectedExample.mediaType}
        />
      )}
    </section>
  )
}
