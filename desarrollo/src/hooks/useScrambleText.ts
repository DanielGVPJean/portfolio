import { useState, useEffect } from 'react'

// Caracteres que mantienen el mismo ancho que las letras originales
const getCharacterForLetter = (char: string): string => {
  if (char === ' ') return ' '
  if (char === '\n') return '\n'
  if (/[A-Z]/.test(char)) return 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'[Math.floor(Math.random() * 26)]
  if (/[a-z]/.test(char)) return 'abcdefghijklmnopqrstuvwxyz'[Math.floor(Math.random() * 26)]
  if (/[0-9]/.test(char)) return '0123456789'[Math.floor(Math.random() * 10)]
  if (/[.,:;!?@#$%^&*()_+-=[\]{}|\\;':",./<>?]/.test(char)) return '.,:;!?@#$%^&*()_+-='[Math.floor(Math.random() * 15)]
  return char
}

// Estado global para sincronizar todas las animaciones
let globalAnimationStarted = false;
let globalAnimationTimestamp = 0;

export const useScrambleText = (finalText: string, _delay: number = 0) => {
  const [displayText, setDisplayText] = useState(finalText)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    // Si es la primera vez que se llama a este hook, iniciar la animación global
    if (!globalAnimationStarted) {
      globalAnimationStarted = true;
      globalAnimationTimestamp = Date.now();
    }

    // Inicializar con texto scrambled
    const initialScrambled = finalText
      .split('')
      .map(char => getCharacterForLetter(char))
      .join('')
    
    setDisplayText(initialScrambled)

    // Usar un solo temporizador para todas las instancias
    const maxIterations = 15;
    const iterationDuration = 100; // ms por iteración
    const totalDuration = maxIterations * iterationDuration;
    
    // Calcular cuánto tiempo ha pasado desde que comenzó la animación global
    const timeSinceStart = Date.now() - globalAnimationTimestamp;
    
    // Si ya pasó el tiempo total, mostrar el texto final
    if (timeSinceStart >= totalDuration) {
      setDisplayText(finalText);
      setIsComplete(true);
      return;
    }
    
    // Calcular en qué iteración estamos
    let currentIteration = Math.floor(timeSinceStart / iterationDuration);
    
    // Configurar un intervalo para actualizar el texto
    const scrambleInterval = setInterval(() => {
      currentIteration++;
      
      if (currentIteration < maxIterations) {
        // Generar texto scrambled
        const scrambledText = finalText
          .split('')
          .map((char) => {
            // En las últimas iteraciones, mostrar más caracteres correctos
            if (Math.random() < currentIteration / maxIterations) {
              return char // Mostrar carácter correcto
            }
            return getCharacterForLetter(char) // Mostrar carácter scrambled
          })
          .join('')

        setDisplayText(scrambledText)
      } else {
        // Asegurar que el texto final sea exactamente el correcto
        setDisplayText(finalText)
        setIsComplete(true)
        clearInterval(scrambleInterval)
      }
    }, iterationDuration)

    return () => clearInterval(scrambleInterval)
  }, [finalText]) // Eliminamos delay de las dependencias

  return { displayText, isComplete }
}
