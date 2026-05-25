'use client'
import { motion } from 'framer-motion'

interface Props {
  label: string
  title: string
  subtitle?: string
  centered?: boolean
}

export default function SectionHeading({ label, title, subtitle, centered = false }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-12 ${centered ? 'text-center' : ''}`}
    >
      <span
        className="inline-block text-sm font-semibold uppercase tracking-widest mb-3"
        style={{ color: '#C9A43E', fontFamily: 'var(--font-syne)' }}
      >
        {label}
      </span>
      <h2
        className="font-extrabold text-4xl md:text-5xl leading-tight"
        style={{ fontFamily: 'var(--font-syne)', color: '#111827' }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg max-w-2xl leading-relaxed" style={{ color: '#6B7280' }}>
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
