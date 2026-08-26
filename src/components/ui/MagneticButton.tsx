'use client'
import { useRef, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

interface Props {
  children: React.ReactNode
  className?: string
  onClick?: () => void
  href?: string
  variant?: 'primary' | 'outline'
}

export default function MagneticButton({ children, className = '', onClick, href, variant = 'primary' }: Props) {
  const ref = useRef<HTMLElement>(null)
  const [hovered, setHovered] = useState(false)
  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)
  const x = useSpring(rawX, { stiffness: 200, damping: 18 })
  const y = useSpring(rawY, { stiffness: 200, damping: 18 })

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    rawX.set((e.clientX - (rect.left + rect.width / 2)) * 0.3)
    rawY.set((e.clientY - (rect.top + rect.height / 2)) * 0.3)
  }

  const handleMouseLeave = () => {
    setHovered(false)
    rawX.set(0)
    rawY.set(0)
  }

  const base =
    'inline-flex items-center gap-2 px-6 py-3.5 rounded-[10px] text-sm font-semibold select-none transition-colors duration-200'

  const styles =
    variant === 'primary'
      ? { background: hovered ? 'var(--color-accent-hover)' : 'var(--color-accent)', color: '#fff' }
      : {
          background: hovered ? 'var(--color-ink)' : 'transparent',
          color: hovered ? '#fff' : 'var(--color-ink)',
          border: '1.5px solid var(--color-ink)',
        }

  const shared = {
    ref: ref as React.Ref<HTMLElement>,
    style: { x, y, ...styles, fontFamily: 'var(--font-geist-sans)' },
    onMouseMove: handleMouseMove,
    onMouseEnter: () => setHovered(true),
    onMouseLeave: handleMouseLeave,
    className: `${base} ${className}`,
  }

  if (href) {
    return (
      <motion.a
        {...shared}
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button {...shared} ref={ref as React.Ref<HTMLButtonElement>} onClick={onClick}>
      {children}
    </motion.button>
  )
}
