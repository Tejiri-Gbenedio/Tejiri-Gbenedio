'use client'
import React, { forwardRef, useCallback, useImperativeHandle, useMemo, useRef } from 'react'
import { motion, useAnimationControls } from 'framer-motion'
import { useDimensions } from '@/hooks/use-dimensions'

interface PixelTrailProps {
  pixelSize: number
  fadeDuration?: number
  delay?: number
  className?: string
  pixelClassName?: string
}

export interface PixelTrailHandle {
  handleMouseMove: (e: { clientX: number; clientY: number }) => void
}

export const PixelTrail = forwardRef<PixelTrailHandle, PixelTrailProps>(function PixelTrail(
  { pixelSize = 20, fadeDuration = 500, delay = 0, className, pixelClassName },
  ref
) {
  const containerRef = useRef<HTMLDivElement>(null)
  const dimensions = useDimensions(containerRef)
  const trailId = useRef(Math.random().toString(36).slice(2))

  const triggerPixel = useCallback(
    (clientX: number, clientY: number) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const x = Math.floor((clientX - rect.left) / pixelSize)
      const y = Math.floor((clientY - rect.top) / pixelSize)
      const el = document.getElementById(`${trailId.current}-pixel-${x}-${y}`)
      if (el) {
        const fn = (el as HTMLElement & { __animatePixel?: () => void }).__animatePixel
        if (fn) fn()
      }
    },
    [pixelSize]
  )

  useImperativeHandle(ref, () => ({
    handleMouseMove: (e) => triggerPixel(e.clientX, e.clientY),
  }), [triggerPixel])

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => triggerPixel(e.clientX, e.clientY),
    [triggerPixel]
  )

  const columns = useMemo(() => Math.ceil(dimensions.width / pixelSize), [dimensions.width, pixelSize])
  const rows = useMemo(() => Math.ceil(dimensions.height / pixelSize), [dimensions.height, pixelSize])

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 w-full h-full pointer-events-none${className ? ` ${className}` : ''}`}
      onMouseMove={handleMouseMove}
    >
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <div key={rowIndex} className="flex">
          {Array.from({ length: columns }).map((_, colIndex) => (
            <PixelDot
              key={`${colIndex}-${rowIndex}`}
              id={`${trailId.current}-pixel-${colIndex}-${rowIndex}`}
              size={pixelSize}
              fadeDuration={fadeDuration}
              delay={delay}
              className={pixelClassName}
            />
          ))}
        </div>
      ))}
    </div>
  )
})

interface PixelDotProps {
  id: string
  size: number
  fadeDuration: number
  delay: number
  className?: string
}

const PixelDot = React.memo(function PixelDot({ id, size, fadeDuration, delay, className }: PixelDotProps) {
  const controls = useAnimationControls()

  const animatePixel = useCallback(() => {
    controls.start({
      opacity: [1, 0],
      transition: { duration: fadeDuration / 1000, delay: delay / 1000 },
    })
  }, [controls, fadeDuration, delay])

  const ref = useCallback(
    (node: HTMLDivElement | null) => {
      if (node) {
        (node as HTMLDivElement & { __animatePixel?: () => void }).__animatePixel = animatePixel
      }
    },
    [animatePixel]
  )

  return (
    <motion.div
      id={id}
      ref={ref}
      className={className}
      style={{ width: `${size}px`, height: `${size}px` }}
      initial={{ opacity: 0 }}
      animate={controls}
    />
  )
})
