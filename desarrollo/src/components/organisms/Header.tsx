import React from 'react'
import { ScrambleText } from '../atoms/ScrambleText'
import { personalInfo } from '../../data/portfolio'
import { Mail, Phone, Linkedin } from 'lucide-react'

export const Header: React.FC = () => {
  return (
    <section id="home" className="sticky top-20">
      {/* Profile Card */}
      <div className="bg-white rounded-3xl p-7 shadow-2xl">
        <div className="flex flex-col items-center text-center">
          <div className="relative mb-5">
            <img 
              src={personalInfo.profileImage || "/placeholder.svg"}
              alt={personalInfo.name}
              className="w-28 h-28 rounded-2xl object-cover shadow-lg"
            />
          </div>
          
          <div className="mb-5">
            <ScrambleText 
              text={personalInfo.name}
              className="text-xl font-bold text-black mb-2"
              as="h1"
            />
            
            <ScrambleText 
              text={personalInfo.title}
              className="text-gray-600 font-medium text-sm"
              as="h2"
            />
          </div>
          
          <div className="w-full space-y-2">
            <a 
              href={`mailto:${personalInfo.email}`}
              className="flex items-center justify-center gap-2 p-2.5 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group"
            >
              <Mail size={16} className="text-gray-600 group-hover:text-black" />
              <ScrambleText 
                text={personalInfo.email}
                className="text-gray-700 group-hover:text-black text-xs"
              />
            </a>
            
            <a 
              href={`tel:${personalInfo.phone}`}
              className="flex items-center justify-center gap-2 p-2.5 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group"
            >
              <Phone size={16} className="text-gray-600 group-hover:text-black" />
              <ScrambleText 
                text={personalInfo.phone}
                className="text-gray-700 group-hover:text-black text-xs"
              />
            </a>
            
            <a 
              href={`https://${personalInfo.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 p-2.5 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group"
            >
              <Linkedin size={16} className="text-gray-600 group-hover:text-black" />
              <ScrambleText 
                text={personalInfo.linkedin}
                className="text-gray-700 group-hover:text-black text-xs"
              />
            </a>
          </div>
          
          <div className="mt-5 pt-5 border-t border-gray-200 w-full">
            <ScrambleText 
              text="Specializing in full-stack development with expertise in React, Laravel, and modern DevOps practices."
              className="text-gray-600 text-xs leading-relaxed"
              as="p"
            />
          </div>
        </div>
      </div>
    </section>
  )
}