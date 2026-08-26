'use client'
import { motion } from 'framer-motion'

interface Props {
  /** Deprecated: eyebrows are no longer rendered. Kept optional for caller compatibility. */
  label?: string
  title: string
  subtitle?: string
  centered?: boolean
}

export default function SectionHeading({ title, subtitle, centered = false }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`mb-12 ${centered ? 'text-center' : ''}`}
    >
      <h2
        className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.08]"
        style={{ fontFamily: 'var(--font-geist-sans)', color: 'var(--color-ink)' }}
      >
        {title}
      </h2>
      <div
        aria-hidden
        className={`mt-5 h-0.5 w-12 rounded-full ${centered ? 'mx-auto' : ''}`}
        style={{ background: 'var(--color-accent)' }}
      />
      {subtitle && (
        <p
          className={`mt-5 text-lg leading-relaxed max-w-2xl ${centered ? 'mx-auto' : ''}`}
          style={{ color: 'var(--color-muted)' }}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
