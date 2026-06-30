'use client'
import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import MagneticButton from '@/components/ui/MagneticButton'
import { GooeyFilter } from '@/components/ui/gooey-filter'
import { PixelTrail, type PixelTrailHandle } from '@/components/ui/pixel-trail'
import { useScreenSize } from '@/hooks/use-screen-size'
import { contactLinks } from '@/data'

const stats = [
  { value: '10+', label: 'Projects Delivered' },
  { value: '100%', label: 'Client Satisfaction' },
  { value: '2+', label: 'Years Building' },
]

const values = [
  'Business-first thinking — I build for results, not just code.',
  'Fast turnaround without cutting corners.',
  'Clear communication throughout every project.',
  'Mobile-first and SEO-ready by default.',
]

export default function About() {
  const [isMouseDevice, setIsMouseDevice] = useState(false)
  const screenSize = useScreenSize()
  const pixelTrailRef = useRef<PixelTrailHandle>(null)

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return
    const raf = window.requestAnimationFrame(() => setIsMouseDevice(true))
    return () => window.cancelAnimationFrame(raf)
  }, [])

  const handleMouseMove = (e: React.MouseEvent) => {
    pixelTrailRef.current?.handleMouseMove({ clientX: e.clientX, clientY: e.clientY })
  }

  return (
    <section id="about" className="relative overflow-hidden py-24 px-6" style={{ background: '#F8F7F4' }} onMouseMove={handleMouseMove}>
      {/* Gooey pixel trail — mouse devices only */}
      {isMouseDevice && (
        <>
          <GooeyFilter id="gooey-about" strength={5} />
          <div
            className="absolute inset-0 z-[1] pointer-events-none"
            style={{ filter: 'url(#gooey-about)' }}
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
      <div className="relative z-[2] max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <div>
          <SectionHeading label="About Me" title="I Help Businesses Grow Online" />
          <p className="leading-relaxed mb-5" style={{ color: '#6B7280' }}>
            I&apos;m Tejiri Gbenedio — an AI Automation & Full-Stack Web Developer based in Nigeria.
            I don&apos;t just write code; I build digital tools that solve real business problems.
          </p>
          <p className="leading-relaxed mb-8" style={{ color: '#6B7280' }}>
            Whether you need a clean business website, a full e-commerce platform, or an automation
            that saves your team hours every week — I build it with attention to detail, on time,
            and within budget.
          </p>
          <ul className="space-y-3 mb-10">
            {values.map((v) => (
              <li key={v} className="flex items-start gap-3">
                <CheckCircle2 size={17} className="mt-0.5 shrink-0" style={{ color: '#10B981' }} />
                <span className="text-sm" style={{ color: '#111827' }}>{v}</span>
              </li>
            ))}
          </ul>
          <MagneticButton href={contactLinks.whatsapp} variant="primary">
            Work With Me
          </MagneticButton>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="p-7 rounded-2xl border text-center transition-all duration-300"
              style={{ background: '#fff', borderColor: '#E5E7EB' }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = '#10B98166'
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(16,185,129,0.08)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = '#E5E7EB'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <p className="font-extrabold text-4xl mb-2" style={{ fontFamily: 'var(--font-syne)', color: '#10B981' }}>
                {stat.value}
              </p>
              <p className="text-sm" style={{ color: '#6B7280' }}>{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
