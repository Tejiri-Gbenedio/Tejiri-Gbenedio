'use client'
import { MotionConfig } from 'framer-motion'

/**
 * App-wide motion settings. reducedMotion="user" makes every framer-motion
 * animation automatically respect the OS "reduce motion" preference.
 */
export default function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>
}
