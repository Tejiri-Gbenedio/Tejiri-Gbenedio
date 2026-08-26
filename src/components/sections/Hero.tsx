'use client'
import { useState, useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import MagneticButton from '@/components/ui/MagneticButton'
import { techPills, contactLinks } from '@/data'

const SPOT = 560

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const [spotlight, setSpotlight] = useState(false)
  const rawX = useMotionValue(-9999)
  const rawY = useMotionValue(-9999)
  const x = useSpring(rawX, { stiffness: 140, damping: 26, mass: 0.6 })
  const y = useSpring(rawY, { stiffness: 140, damping: 26, mass: 0.6 })

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const frame = window.requestAnimationFrame(() => setSpotlight(true))
    return () => window.cancelAnimationFrame(frame)
  }, [])

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!spotlight || !sectionRef.current) return
    const rect = sectionRef.current.getBoundingClientRect()
    rawX.set(e.clientX - rect.left - SPOT / 2)
    rawY.set(e.clientY - rect.top - SPOT / 2)
  }

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex flex-col justify-center pt-16 px-6 overflow-hidden"
      style={{ background: 'var(--color-canvas)' }}
      onMouseMove={handleMouseMove}
    >
      {/* Warm dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(rgba(28,25,23,0.05) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
          maskImage: 'radial-gradient(ellipse 90% 70% at 50% 40%, #000 40%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 90% 70% at 50% 40%, #000 40%, transparent 100%)',
        }}
      />

      {/* Pointer-follow spotlight (mouse + motion-OK) or a static warm glow otherwise */}
      {spotlight ? (
        <motion.div
          aria-hidden
          className="absolute top-0 left-0 rounded-full pointer-events-none z-[1]"
          style={{
            x,
            y,
            width: SPOT,
            height: SPOT,
            background: 'radial-gradient(circle, rgba(217,122,77,0.20) 0%, rgba(217,122,77,0.07) 40%, transparent 70%)',
          }}
        />
      ) : (
        <div
          aria-hidden
          className="absolute pointer-events-none z-[1] rounded-full"
          style={{
            top: '18%',
            right: '12%',
            width: 460,
            height: 460,
            background: 'radial-gradient(circle, rgba(217,122,77,0.16) 0%, transparent 70%)',
          }}
        />
      )}

      {/* Content */}
      <div className="relative z-[2] max-w-6xl mx-auto w-full">
        {/* Availability status chip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 rounded-full border px-3.5 py-1.5 mb-7"
          style={{ borderColor: 'var(--color-border)', background: 'var(--color-card)' }}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60" style={{ background: 'var(--color-accent)' }} />
            <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: 'var(--color-accent)' }} />
          </span>
          <span className="text-xs font-medium" style={{ color: 'var(--color-muted)' }}>
            Available for projects
          </span>
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1
            className="leading-[1.03]"
            style={{
              fontFamily: 'var(--font-geist-sans)',
              fontWeight: 700,
              letterSpacing: '-0.035em',
              fontSize: 'clamp(2.75rem, 7vw, 5.75rem)',
            }}
          >
            <span className="block" style={{ color: 'var(--color-ink)' }}>AI Automation</span>
            <span className="block" style={{ color: 'var(--color-accent)' }}>&amp; Full-Stack</span>
            <span className="block" style={{ color: 'var(--color-ink)' }}>Developer.</span>
          </h1>
        </motion.div>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.24 }}
          className="mt-7 text-lg md:text-xl max-w-xl leading-relaxed"
          style={{ color: 'var(--color-muted)' }}
        >
          I build Automations, Modern Websites, E-commerce Platforms, Apps and AI-powered Digital
          Experiences that help businesses grow online.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.38 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <MagneticButton href={contactLinks.whatsapp} variant="primary">
            Let&apos;s Have A Talk
          </MagneticButton>
          <MagneticButton
            onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
            variant="outline"
          >
            View My Work
          </MagneticButton>
        </motion.div>

        {/* Tech pills (real stack — monospace is legit here) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-14 flex flex-wrap gap-2"
        >
          {techPills.map((tech) => (
            <span
              key={tech}
              className="text-xs px-3 py-1.5 rounded-md border"
              style={{
                background: 'var(--color-card)',
                borderColor: 'var(--color-border)',
                color: 'var(--color-muted)',
                fontFamily: 'var(--font-mono)',
              }}
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ color: 'var(--color-subtle)' }}
      >
        <span className="text-[10px] uppercase tracking-[0.25em]" style={{ fontFamily: 'var(--font-mono)' }}>Scroll</span>
        <motion.div animate={{ y: [0, 7, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
          <ArrowDown size={15} />
        </motion.div>
      </motion.div>
    </section>
  )
}
