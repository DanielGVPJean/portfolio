import React from 'react'
import { Home, Zap, Briefcase } from 'lucide-react'

export const NavBar: React.FC = () => {
  const navItems = [
    { icon: Home, label: 'Home', mobileOnly: true },
    { icon: Zap, label: 'Skills', mobileOnly: false },
    { icon: Briefcase, label: 'Experience', mobileOnly: false }
  ]

  const scrollToSection = (label: string) => {
    const element = document.getElementById(label.toLowerCase())
    if (element) {
      // Calcular la posición del elemento
      const elementPosition = element.getBoundingClientRect().top
      // Posición actual del scroll
      const offsetPosition = elementPosition + window.pageYOffset
      
      // En mobile (< 640px) el navbar está abajo, no necesita offset
      // En tablet/desktop (≥ 640px) el navbar está arriba, necesita offset
      const isMobile = window.innerWidth < 640
      const navbarHeight = 80
      const additionalOffset = 20
      const totalOffset = isMobile ? 0 : navbarHeight + additionalOffset
      
      // Hacer scroll con el offset apropiado
      window.scrollTo({
        top: offsetPosition - totalOffset,
        behavior: 'smooth'
      })
    }
  }

  // Filtrar items visibles según el tamaño de pantalla
  const getVisibleItems = () => {
    return navItems.filter(item => !item.mobileOnly)
  }

  const visibleItems = getVisibleItems()

  return (
    <nav className="fixed bottom-6 sm:top-6 left-1/2 transform -translate-x-1/2 z-40">
      <div className="bg-black/20 backdrop-blur-md rounded-full border border-white/10 shadow-lg">
        {/* Desktop version - solo skills y experience */}
        <div className="hidden lg:flex items-center px-6 py-3">
          {visibleItems.map(({ icon: Icon, label }) => (
            <button
              key={label}
              onClick={() => scrollToSection(label)}
              className="text-white/70 hover:text-white transition-colors duration-300 mx-3 first:ml-0 last:mr-0"
              aria-label={label}
            >
              <Icon size={18} />
            </button>
          ))}
        </div>
        
        {/* Mobile/Tablet version - todos los items */}
        <div className="flex lg:hidden items-center px-6 py-3">
          {navItems.map(({ icon: Icon, label }) => (
            <button
              key={label}
              onClick={() => scrollToSection(label)}
              className="text-white/70 hover:text-white transition-colors duration-300 mx-3 first:ml-0 last:mr-0"
              aria-label={label}
            >
              <Icon size={18} />
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}
