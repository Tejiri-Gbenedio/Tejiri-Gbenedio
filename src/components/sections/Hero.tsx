'use client'
import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import MagneticButton from '@/components/ui/MagneticButton'
import { GooeyFilter } from '@/components/ui/gooey-filter'
import { PixelTrail, type PixelTrailHandle } from '@/components/ui/pixel-trail'
import { useScreenSize } from '@/hooks/use-screen-size'
import { techPills, contactLinks } from '@/data'

export default function Hero() {
  const [isMouseDevice, setIsMouseDevice] = useState(false)
  const screenSize = useScreenSize()
  const pixelTrailRef = useRef<PixelTrailHandle>(null)

  useEffect(() => {
    if (window.matchMedia('(pointer: fine)').matches) setIsMouseDevice(true)
  }, [])

  const handleMouseMove = (e: React.MouseEvent) => {
    pixelTrailRef.current?.handleMouseMove({ clientX: e.clientX, clientY: e.clientY })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center pt-16 px-6 overflow-hidden"
      style={{ background: '#F8F7F4' }}
      onMouseMove={handleMouseMove}
    >
      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#11182712 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* Floating accent glows */}
      <div
        className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #10B98120 0%, transparent 70%)',
          animation: 'float 6s ease-in-out infinite',
        }}
      />
      <div
        className="absolute bottom-1/4 left-1/3 w-64 h-64 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #C9A43E14 0%, transparent 70%)',
          animation: 'float 8s ease-in-out infinite reverse',
        }}
      />

      {/* Gooey pixel trail — mouse devices only */}
      {isMouseDevice && (
        <>
          <GooeyFilter id="gooey-hero" strength={5} />
          <div
            className="absolute inset-0 z-[1] pointer-events-none"
            style={{ filter: 'url(#gooey-hero)' }}
          >
            <PixelTrail
              ref={pixelTrailRef}
              pixelSize={screenSize.lessThan('md') ? 24 : 32}
              fadeDuration={600}
              delay={0}
              pixelClassName="bg-[#10B981]"
            />
          </div>
        </>
      )}

      {/* Content */}
      <div className="relative z-[2] max-w-6xl mx-auto w-full">
        {/* Available badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-6"
        >
          <span className="w-2 h-2 rounded-full" style={{ background: '#10B981', boxShadow: '0 0 0 4px #10B98130' }} />
          <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: '#10B981', fontFamily: 'var(--font-syne)' }}>
            Available for Projects
          </span>
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <h1
            className="font-black leading-[1.04]"
            style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.8rem, 7vw, 6rem)' }}
          >
            <span className="block" style={{ color: '#111827' }}>AI Automation</span>
            <span
              className="block text-clip"
              style={{
                backgroundImage: 'linear-gradient(90deg, #10B981 0%, #C9A43E 35%, #F59E0B 55%, #10B981 80%, #059669 100%)',
                backgroundSize: '200% auto',
                fontStyle: 'italic',
                animation: 'gradientFlow 3s linear infinite',
              }}
            >
              &amp; Full-Stack
            </span>
            <span className="block" style={{ color: '#111827' }}>Developer.</span>
          </h1>
        </motion.div>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 text-lg md:text-xl max-w-xl leading-relaxed"
          style={{ color: '#6B7280' }}
        >
          I build Automations, Modern Websites, E-commerce Platforms, Apps and AI-powered Digital
          Experiences that help businesses grow online.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
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

        {/* Tech pills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="mt-14 flex flex-wrap gap-2"
        >
          {techPills.map((tech, i) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.65 + i * 0.05 }}
              className="text-xs px-3 py-1.5 rounded-full border font-mono"
              style={{ background: '#FAFAF8', borderColor: '#E5E7EB', color: '#6B7280' }}
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ color: '#9CA3AF' }}
      >
        <span className="text-xs uppercase tracking-widest" style={{ fontFamily: 'var(--font-syne)' }}>Scroll</span>
        <motion.div animate={{ y: [0, 7, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
          <ArrowDown size={15} />
        </motion.div>
      </motion.div>
    </section>
  )
}
