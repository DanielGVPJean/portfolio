import React, { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { X } from 'lucide-react'

interface ExampleModalProps {
  isOpen: boolean
  onClose: () => void
  mediaUrl: string
  title: string
  mediaType?: 'video' | 'image'
}

export const ExampleModal: React.FC<ExampleModalProps> = ({ 
  isOpen, 
  onClose, 
  mediaUrl, 
  title,
  mediaType = 'video'
}) => {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (isOpen && videoRef.current && mediaType === 'video') {
      videoRef.current.play()
    } else if (!isOpen && videoRef.current && mediaType === 'video') {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
  }, [isOpen, mediaType])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      // Eliminamos la línea que cambia el overflow del body
      // document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      // document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  if (!isOpen) return null

  // Usar createPortal para renderizar el modal directamente en el body
  return createPortal(
    <div 
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      onClick={handleBackdropClick}
      style={{ 
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 9999
      }}
    >
      <div 
        className="bg-black/60 backdrop-blur-md rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden border border-white/10 shadow-lg animate-in fade-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center p-6 border-b border-white/20">
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <button 
            onClick={onClose}
            className="text-white/70 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-lg"
          >
            <X size={24} />
          </button>
        </div>
        <div className="p-6">
          {mediaType === 'video' ? (
            <video 
              ref={videoRef}
              className="w-full h-auto rounded-lg"
              controls
              autoPlay
              muted
              loop
            >
              <source src={mediaUrl} type="video/webm" />
              <source src={mediaUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <img 
              src={mediaUrl || "/placeholder.svg"}
              alt={title}
              className="w-full h-auto rounded-lg max-h-[60vh] object-contain"
            />
          )}
        </div>
      </div>
    </div>,
    document.body
  )
}
