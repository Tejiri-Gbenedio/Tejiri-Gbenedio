'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Lightbulb } from 'lucide-react'
import type { Automation } from '@/data'

interface Props {
  automation: Automation
  index: number
}

export default function AutomationDetailCard({ automation, index }: Props) {
  const isEven = index % 2 === 1

  const imageBlock = (
    <div className="group/img relative w-full lg:w-1/2 shrink-0">
      <div
        className="relative overflow-hidden rounded-2xl border transition-all duration-300"
        style={{
          minHeight: '320px',
          background: 'var(--color-surface-alt)',
          borderColor: 'var(--color-border)',
          boxShadow: '0 20px 48px -22px rgba(28,25,23,0.22)',
        }}
      >
        <Image
          src={automation.image}
          alt={`${automation.title} workflow screenshot`}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-contain p-4 transition-transform duration-500 group-hover/img:scale-[1.02]"
        />
      </div>
    </div>
  )

  const textBlock = (
    <div className="flex-1 flex flex-col justify-center py-4">
      <h2
        className="font-semibold text-2xl md:text-3xl mb-3 leading-tight tracking-tight"
        style={{ fontFamily: 'var(--font-geist-sans)', color: 'var(--color-ink)' }}
      >
        {automation.title}
      </h2>

      {/* Tool badges */}
      <div className="flex flex-wrap gap-1.5 mb-5">
        {automation.tools.map((tool) => (
          <span
            key={tool}
            className="text-xs px-2.5 py-1 rounded-md border"
            style={{ background: 'var(--color-surface-alt)', borderColor: 'var(--color-border)', color: 'var(--color-muted)', fontFamily: 'var(--font-mono)' }}
          >
            {tool}
          </span>
        ))}
      </div>

      {/* Description — split on double newline */}
      <div className="space-y-3 mb-6">
        {automation.description.split('\n\n').map((para, i) => (
          <p key={i} className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)' }}>
            {para}
          </p>
        ))}
      </div>

      {/* Business Impact callout */}
      <div
        className="flex gap-3 p-4 rounded-xl border"
        style={{ background: 'var(--color-accent-soft)', borderColor: 'rgba(154,72,31,0.16)' }}
      >
        <Lightbulb size={16} className="shrink-0 mt-0.5" style={{ color: 'var(--color-accent-ink)' }} />
        <div>
          <p
            className="text-[11px] font-semibold uppercase tracking-wider mb-1"
            style={{ color: 'var(--color-accent-ink)', fontFamily: 'var(--font-mono)' }}
          >
            Business Impact
          </p>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--color-ink)' }}>
            {automation.businessImpact}
          </p>
        </div>
      </div>
    </div>
  )

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className={`flex flex-col lg:flex-row gap-10 lg:gap-16 items-center ${isEven ? 'lg:flex-row-reverse' : ''}`}
    >
      {imageBlock}
      {textBlock}
    </motion.div>
  )
}
