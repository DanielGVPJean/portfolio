import React, { useEffect, useState } from 'react'
import { NavBar } from '../molecules/NavBar'
import { Header } from '../organisms/Header'
import { ExperienceSection } from '../organisms/ExperienceSection'
import { SkillsSection } from '../organisms/SkillsSection'

export const PortfolioTemplate: React.FC = () => {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <div className={`min-h-screen transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
      <NavBar />
      
      <main className="container-custom pt-4 sm:pt-20">
        <div className="flex flex-col lg:flex-row gap-7 min-h-screen">
          {/* Profile Card - Left Side */}
          <div className="lg:w-1/3">
            <Header />
          </div>
          
          {/* Content - Right Side */}
          <div className="lg:w-2/3 bg-black/80 rounded-3xl p-7 border border-white/10 relative shadow-2xl shadow-black/80">
            <SkillsSection />
            <ExperienceSection />
          </div>
        </div>
      </main>
      
      <footer className="py-7 text-center text-white/60 mt-16">
        <p>&copy; 2025 Daniel González Viera Petit-Jean. Code licensed under MIT License.</p>
      </footer>
    </div>
  )
}
