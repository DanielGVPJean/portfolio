export interface Achievement {
  text: string
  hasExample?: boolean
  exampleUrl?: string
  mediaType?: 'video' | 'image'
}

export interface Experience {
  id: string
  title: string
  company: string
  period: string
  location: string
  technologies: Technology[]
  achievements: Achievement[]
}

export interface Technology {
  name: string
}

export interface PersonalInfo {
  name: string
  title: string
  email: string
  phone: string
  linkedin: string
  github: string
  profileImage: string
}
