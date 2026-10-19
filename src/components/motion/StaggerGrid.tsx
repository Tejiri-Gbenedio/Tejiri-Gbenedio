'use client'

import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { useMotionPreference } from './MotionProvider'
import { EDITORIAL_EASING } from './MaskText'

interface StaggerGridProps {
  children: React.ReactNode
  className?: string
  staggerDelay?: number
}

export const staggerContainerVariants = (staggerDelay = 0.08) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: staggerDelay,
    },
  },
})

export const staggerItemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: EDITORIAL_EASING,
    },
  },
}

export default function StaggerGrid({
  children,
  className = '',
  staggerDelay = 0.08,
}: StaggerGridProps) {
  const systemReduced = useReducedMotion()
  const { isReduced } = useMotionPreference()
  const shouldReduce = isReduced || systemReduced

  if (shouldReduce) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      variants={staggerContainerVariants(staggerDelay)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  const systemReduced = useReducedMotion()
  const { isReduced } = useMotionPreference()
  const shouldReduce = isReduced || systemReduced

  if (shouldReduce) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div className={className} variants={staggerItemVariants}>
      {children}
    </motion.div>
  )
}
