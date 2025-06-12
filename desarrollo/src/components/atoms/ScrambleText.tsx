import React from 'react'
import { useScrambleText } from '../../hooks/useScrambleText'

interface ScrambleTextProps {
  text: string
  className?: string
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span'
}

export const ScrambleText: React.FC<ScrambleTextProps> = ({ 
  text,
  className = '',
  as: Component = 'span'
}) => {
  const { displayText } = useScrambleText(text)

  // Preservar saltos de línea
  const renderText = () => {
    return displayText.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        {line}
        {index < displayText.split('\n').length - 1 && <br />}
      </React.Fragment>
    ))
  }

  return (
    <Component className={`font-mono ${className}`}>
      {renderText()}
    </Component>
  )
}
