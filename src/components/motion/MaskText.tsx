'use client'

import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { useMotionPreference } from './MotionProvider'

interface MaskTextProps {
  children: string | React.ReactNode
  className?: string
  delay?: number
  duration?: number
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span' | 'div'
}

export const EDITORIAL_EASING = [0.22, 1, 0.36, 1] as const

export default function MaskText({
  children,
  className = '',
  delay = 0,
  duration = 0.8,
  as: Component = 'div',
}: MaskTextProps) {
  const systemReduced = useReducedMotion()
  const { isReduced } = useMotionPreference()
  const shouldReduce = isReduced || systemReduced

  if (typeof children === 'string') {
    const lines = children.split('\n')

    return (
      <Component className={className}>
        {lines.map((line, idx) => (
          <span key={idx} className="block overflow-hidden pb-1">
            <motion.span
              className="inline-block"
              initial={shouldReduce ? { opacity: 0 } : { y: '105%', opacity: 0 }}
              animate={shouldReduce ? { opacity: 1 } : { y: '0%', opacity: 1 }}
              transition={{
                duration: shouldReduce ? 0.3 : duration,
                delay: delay + idx * 0.08,
                ease: EDITORIAL_EASING,
              }}
            >
              {line}
            </motion.span>
          </span>
        ))}
      </Component>
    )
  }

  return (
    <Component className={`overflow-hidden ${className}`}>
      <motion.div
        initial={shouldReduce ? { opacity: 0 } : { y: '105%', opacity: 0 }}
        animate={shouldReduce ? { opacity: 1 } : { y: '0%', opacity: 1 }}
        transition={{
          duration: shouldReduce ? 0.3 : duration,
          delay,
          ease: EDITORIAL_EASING,
        }}
      >
        {children}
      </motion.div>
    </Component>
  )
}
