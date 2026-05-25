'use client'
import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)
  const [hovering, setHovering] = useState(false)
  const [clicking, setClicking] = useState(false)

  const dotX = useSpring(mouseX, { stiffness: 600, damping: 32 })
  const dotY = useSpring(mouseY, { stiffness: 600, damping: 32 })
  const ringX = useSpring(mouseX, { stiffness: 90, damping: 18 })
  const ringY = useSpring(mouseY, { stiffness: 90, damping: 18 })

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
      const el = e.target as HTMLElement
      setHovering(!!(el.closest('a') || el.closest('button')))
    }
    const onDown = () => setClicking(true)
    const onUp = () => setClicking(false)

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup', onUp)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup', onUp)
    }
  }, [mouseX, mouseY])

  return (
    <>
      {/* Inner dot — snaps fast */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none rounded-full"
        style={{ x: dotX, y: dotY, translateX: '-50%', translateY: '-50%', width: 12, height: 12 }}
        animate={{
          scale: clicking ? 0.5 : (hovering ? 1 : 0.58),
          backgroundColor: hovering ? '#C9A43E' : '#10B981',
        }}
        transition={{ duration: 0.12, ease: 'easeOut' }}
      />
      {/* Outer ring — lags behind for depth */}
      <motion.div
        className="fixed top-0 left-0 z-[9998] pointer-events-none rounded-full"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
          border: '1.5px solid',
          width: 44,
          height: 44,
        }}
        animate={{
          scale: clicking ? 0.75 : (hovering ? 1 : 0.68),
          borderColor: hovering ? '#C9A43E' : '#10B981',
          backgroundColor: hovering ? 'rgba(201,164,62,0.06)' : 'rgba(0,0,0,0)',
          opacity: clicking ? 0.5 : 0.65,
        }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
      />
    </>
  )
}
