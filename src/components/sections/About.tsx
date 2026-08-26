'use client'
import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import MagneticButton from '@/components/ui/MagneticButton'
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
  return (
    <section id="about" className="py-24 px-6" style={{ background: 'var(--color-canvas)' }}>
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <div>
          <SectionHeading title="I Help Businesses Grow Online" />
          <p className="leading-relaxed mb-5" style={{ color: 'var(--color-muted)' }}>
            I&apos;m Tejiri Gbenedio — an AI Automation & Full-Stack Web Developer based in Nigeria.
            I don&apos;t just write code; I build digital tools that solve real business problems.
          </p>
          <p className="leading-relaxed mb-8" style={{ color: 'var(--color-muted)' }}>
            Whether you need a clean business website, a full e-commerce platform, or an automation
            that saves your team hours every week — I build it with attention to detail, on time,
            and within budget.
          </p>
          <ul className="space-y-3 mb-10">
            {values.map((v) => (
              <li key={v} className="flex items-start gap-3">
                <CheckCircle2 size={17} className="mt-0.5 shrink-0" style={{ color: 'var(--color-accent)' }} />
                <span className="text-sm" style={{ color: 'var(--color-ink)' }}>{v}</span>
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
              style={{ background: 'var(--color-card)', borderColor: 'var(--color-border)' }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'var(--color-border-strong)'
                e.currentTarget.style.boxShadow = '0 16px 36px -14px rgba(28,25,23,0.16)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--color-border)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <p className="font-semibold text-4xl mb-2 tracking-tight" style={{ fontFamily: 'var(--font-geist-sans)', color: 'var(--color-accent)' }}>
                {stat.value}
              </p>
              <p className="text-sm" style={{ color: 'var(--color-muted)' }}>{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
