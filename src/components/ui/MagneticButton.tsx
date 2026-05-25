'use client'
import { useRef } from 'react'
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
  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)
  const x = useSpring(rawX, { stiffness: 200, damping: 18 })
  const y = useSpring(rawY, { stiffness: 200, damping: 18 })

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    rawX.set((e.clientX - (rect.left + rect.width / 2)) * 0.35)
    rawY.set((e.clientY - (rect.top + rect.height / 2)) * 0.35)
  }

  const handleMouseLeave = () => {
    rawX.set(0)
    rawY.set(0)
  }

  const base =
    'inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold cursor-pointer select-none transition-colors duration-200'

  const styles =
    variant === 'primary'
      ? { background: '#10B981', color: '#fff' }
      : { background: 'transparent', color: '#111827', border: '2px solid #111827' }

  const hoverStyle =
    variant === 'primary'
      ? 'hover:opacity-90'
      : 'hover:bg-[#111827] hover:text-white'

  if (href) {
    return (
      <motion.a
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        style={{ x, y, ...styles, fontFamily: 'var(--font-syne)' }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={`${base} ${hoverStyle} ${className}`}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      ref={ref as React.Ref<HTMLButtonElement>}
      style={{ x, y, ...styles, fontFamily: 'var(--font-syne)' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={`${base} ${hoverStyle} ${className}`}
    >
      {children}
    </motion.button>
  )
}
