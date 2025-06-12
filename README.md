# Portfolio - Daniel González Viera Petit-Jean

> A modern, interactive portfolio website showcasing professional experience and technical expertise.

**Developed by Daniel González Viera Petit-Jean © 2025**

## 🌟 Live Demo

Visit the live portfolio at: [https://danielgv.com](https://danielgv.com)

## 📋 Overview

This is a professional portfolio website built with modern web technologies, featuring interactive animations, smooth navigation, and a sophisticated example modal system. The portfolio showcases work experience, technical skills, and project examples in an elegant, responsive design.

### Key Features

- 🎨 **Interactive Animations** - ScrambleText effects and smooth transitions
- 📱 **Responsive Design** - Optimized for all device sizes
- 🖼️ **Example Modal System** - Display project videos and images
- 🧭 **Smooth Navigation** - Floating navigation with scroll-to-section
- ⚡ **Fast Performance** - Built with Vite for optimal loading
- 🔍 **SEO Optimized** - Complete with robots.txt, sitemap.xml, and meta tags
- 🎯 **TypeScript** - Fully typed for better development experience

## 🛠️ Technology Stack

### Core Technologies
- **React** `18.2.0` - UI library
- **TypeScript** `5.2.2` - Type safety and better development experience
- **Vite** `4.5.0` - Build tool and development server

### Styling & UI
- **Tailwind CSS** `3.3.5` - Utility-first CSS framework
- **Lucide React** `0.292.0` - Beautiful icon library
- **Framer Motion** `10.16.4` - Animation library

### Development Tools
- **ESLint** `8.53.0` - Code linting
- **PostCSS** `8.4.31` - CSS processing
- **Autoprefixer** `10.4.16` - CSS vendor prefixes

## 📁 Project Structure

```
src/
├── components/
│   ├── atoms/                 # Basic reusable components
│   │   └── ScrambleText.tsx   # Animated text effect
│   ├── molecules/             # Compound components
│   │   ├── ExampleModal.tsx   # Modal for project examples
│   │   └── NavBar.tsx         # Navigation component
│   └── organisms/             # Complex sections
│       ├── Header.tsx         # Profile card section
│       ├── SkillsSection.tsx  # Skills showcase
│       ├── ExperienceSection.tsx # Work experience
│       └── PortfolioTemplate.tsx # Main layout
├── data/
│   └── portfolio.ts           # All portfolio data configuration
├── hooks/
│   └── useScrambleText.ts     # Custom hook for text animations
├── types/
│   └── index.ts               # TypeScript type definitions
└── main.tsx                   # Application entry point
```

### Architecture

This project follows **Atomic Design** methodology:
- **Atoms**: Basic building blocks (ScrambleText)
- **Molecules**: Simple UI components (NavBar, ExampleModal)
- **Organisms**: Complex sections that combine multiple components
- **Templates**: Page layouts that structure the entire application

## ⚙️ Configuration Guide

### Personal Information

Edit your personal details in `src/data/portfolio.ts`:

```typescript
export const personalInfo: PersonalInfo = {
  name: 'Your Full Name',
  title: 'Your Professional Title',
  email: 'your.email@domain.com',
  phone: '(+XX) XX XXXX XXXX',
  linkedin: 'linkedin.com/in/yourprofile/',
  github: 'github.com/company/yourprofile/',
  profileImage: 'images/your-profile.jpeg',
}
```

### Work Experience

Add or modify experiences in `src/data/portfolio.ts`:

```typescript
export const experiences: Experience[] = [
  {
    id: '1',
    title: 'Your Job Title',
    company: 'Company Name',
    period: 'Start Date – End Date',
    location: 'City, Country',
    technologies: [
      { name: 'React' },
      { name: 'TypeScript' },
      // Add more technologies
    ],
    achievements: [
      {
        text: 'Description of your achievement',
        hasExample: true,                    // Enable example button
        exampleUrl: '/videos/demo.webm',     // Path to example file
        mediaType: 'video'                   // 'video' or 'image'
      },
      {
        text: 'Another achievement without example',
        hasExample: false                    // No example button
      }
    ]
  }
]
```

### Skills Configuration

Modify skills in `src/components/organisms/SkillsSection.tsx`:

```typescript
const skills = [
  {
    icon: <Code size={24} />,
    title: 'SKILL CATEGORY',
    technologies: 'TECH1, TECH2, TECH3',
    color: 'from-blue-500 to-purple-600'  // Tailwind gradient
  }
]
```

### Example Modal System

The portfolio includes an interactive example system:

#### Enabling Examples
1. Set `hasExample: true` in the achievement object
2. Provide `exampleUrl` pointing to your media file
3. Specify `mediaType` as either `'video'` or `'image'`

#### Example File Locations
Place your example files in the `public` folder:
- Videos: `public/videos/your-demo.webm` (or `.mp4`)
- Images: `public/images/your-screenshot.png` (or `.jpg`)

#### Supported Formats
- **Videos**: `.webm`, `.mp4`
- **Images**: `.png`, `.jpg`, `.jpeg`

## 🚀 Development

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd portfolio
```

2. Navigate to the development folder:
```bash
cd desarrollo
```

3. Install dependencies:
```bash
npm install
```

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint
```

### Development Server

The development server runs on `http://localhost:5173` with hot module replacement enabled.

## 📦 Build & Deployment

### Building for Production

```bash
cd desarrollo
npm run build
```

This creates a `dist` folder with optimized static files ready for deployment.

### Deployment Setup

For detailed deployment configuration including CI/CD setup, refer to [DEPLOYMENT.md](./DEPLOYMENT.md).

The project includes:
- **robots.txt** - Search engine crawling rules
- **sitemap.xml** - Site structure for SEO
- **favicon.svg** - Custom favicon with "DG" branding

## 🎨 Customization

### Styling
- The project uses Tailwind CSS for styling
- Color scheme can be modified in the Tailwind configuration
- Custom styles are in `src/index.css`

### Animations
- ScrambleText effect can be customized in `src/hooks/useScrambleText.ts`
- Transition timings and effects are configurable per component

### Navigation
- Smooth scroll behavior is implemented in `src/components/molecules/NavBar.tsx`
- Section IDs correspond to navigation targets

## 🔧 Technical Details

### Type Safety
The project uses TypeScript with custom interfaces:
- `PersonalInfo` - Personal data structure
- `Experience` - Work experience structure
- `Achievement` - Individual achievement with example support
- `Technology` - Technology/skill representation

### Performance Optimizations
- Vite for fast development and optimized builds
- Lazy loading for modal content
- Efficient re-renders with React best practices
- Optimized images and media loading

### SEO Features
- Semantic HTML structure
- Meta tags for social sharing
- Structured data for search engines
- Optimized loading performance

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

**Developed by Daniel González Viera Petit-Jean © 2025**

---

For deployment and CI/CD configuration, see [DEPLOYMENT.md](./DEPLOYMENT.md)
