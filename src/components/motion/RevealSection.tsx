'use client'

import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { useMotionPreference } from './MotionProvider'
import { EDITORIAL_EASING } from './MaskText'

interface RevealSectionProps {
  children: React.ReactNode
  className?: string
  delay?: number
  duration?: number
  yOffset?: number
  id?: string
}

export default function RevealSection({
  children,
  className = '',
  delay = 0,
  duration = 0.7,
  yOffset = 32,
  id,
}: RevealSectionProps) {
  const systemReduced = useReducedMotion()
  const { isReduced } = useMotionPreference()
  const shouldReduce = isReduced || systemReduced

  return (
    <motion.section
      id={id}
      className={className}
      initial={shouldReduce ? { opacity: 0 } : { opacity: 0, y: yOffset }}
      whileInView={shouldReduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: shouldReduce ? 0.3 : duration,
        delay,
        ease: EDITORIAL_EASING,
      }}
    >
      {children}
    </motion.section>
  )
}
