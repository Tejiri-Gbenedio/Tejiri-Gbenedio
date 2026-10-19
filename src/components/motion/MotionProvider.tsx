'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'
import { MotionConfig } from 'framer-motion'

type MotionMode = 'enhanced' | 'reduced'

interface MotionContextType {
  motionMode: MotionMode
  toggleMotionMode: () => void
  isReduced: boolean
}

const MotionContext = createContext<MotionContextType>({
  motionMode: 'enhanced',
  toggleMotionMode: () => {},
  isReduced: false,
})

export const useMotionPreference = () => useContext(MotionContext)

export default function MotionProvider({ children }: { children: React.ReactNode }) {
  const [motionMode, setMotionMode] = useState<MotionMode>('enhanced')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Check localStorage or system preference
    const stored = localStorage.getItem('portfolio-motion-mode') as MotionMode | null
    if (stored === 'reduced' || stored === 'enhanced') {
      setMotionMode(stored)
      document.documentElement.setAttribute('data-motion', stored)
    } else {
      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      const initialMode = prefersReduced ? 'reduced' : 'enhanced'
      setMotionMode(initialMode)
      document.documentElement.setAttribute('data-motion', initialMode)
    }
    setMounted(true)
  }, [])

  const toggleMotionMode = () => {
    const nextMode = motionMode === 'enhanced' ? 'reduced' : 'enhanced'
    setMotionMode(nextMode)
    localStorage.setItem('portfolio-motion-mode', nextMode)
    document.documentElement.setAttribute('data-motion', nextMode)
  }

  const isReduced = motionMode === 'reduced'

  return (
    <MotionContext.Provider value={{ motionMode, toggleMotionMode, isReduced }}>
      <MotionConfig reducedMotion={isReduced ? 'always' : 'user'}>
        {children}
      </MotionConfig>
    </MotionContext.Provider>
  )
}
