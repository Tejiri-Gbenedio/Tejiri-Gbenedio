'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Lightbulb } from 'lucide-react'
import type { Automation } from '@/data'

const shadowFloat1 = {
  x: [-15, 2, 13, -15, 11, -1, -15],
  y: [-15, -4, -7, 15, -3, 11, -15],
}
const shadowFloat2 = {
  x: [15, -10, 3, 15, -2, -12, 15],
  y: [15, -6, 9, -15, 6, -8, 15],
}

interface Props {
  automation: Automation
  index: number
}

export default function AutomationDetailCard({ automation, index }: Props) {
  const [imageHovered, setImageHovered] = useState(false)
  const isEven = index % 2 === 1

  const imageBlock = (
    <div
      className="relative w-full lg:w-1/2 shrink-0"
      style={{ isolation: 'isolate', minHeight: '320px' }}
      onMouseEnter={() => setImageHovered(true)}
      onMouseLeave={() => setImageHovered(false)}
    >
      {/* Shadow layer 1 — emerald */}
      <motion.div
        className="absolute inset-0 rounded-2xl"
        style={{ background: 'rgba(16,185,129,0.5)', zIndex: 0 }}
        animate={imageHovered ? shadowFloat1 : { x: 0, y: 0 }}
        transition={imageHovered ? { duration: 3, repeat: Infinity, ease: 'linear' } : { duration: 0.5 }}
      />
      {/* Shadow layer 2 — gold */}
      <motion.div
        className="absolute inset-0 rounded-2xl"
        style={{ background: 'rgba(201,164,62,0.5)', zIndex: 0 }}
        animate={imageHovered ? shadowFloat2 : { x: 0, y: 0 }}
        transition={imageHovered ? { duration: 3.5, repeat: Infinity, ease: 'linear' } : { duration: 0.5 }}
      />
      {/* Image */}
      <motion.div
        className="relative overflow-hidden rounded-2xl"
        style={{ minHeight: '320px', zIndex: 1, background: '#EDECEA' }}
        animate={{ scale: imageHovered ? [1, 1.03, 0.98, 1] : 1 }}
        transition={{ duration: 0.4, times: [0, 0.33, 0.66, 1] }}
      >
        <Image
          src={automation.image}
          alt={`${automation.title} workflow screenshot`}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-contain p-4"
        />
      </motion.div>
    </div>
  )

  const textBlock = (
    <div className="flex-1 flex flex-col justify-center py-4">
      <h2
        className="font-extrabold text-2xl md:text-3xl mb-3 leading-tight"
        style={{ fontFamily: 'var(--font-syne)', color: '#111827' }}
      >
        {automation.title}
      </h2>

      {/* Tool badges */}
      <div className="flex flex-wrap gap-1.5 mb-5">
        {automation.tools.map((tool) => (
          <span
            key={tool}
            className="text-xs px-2.5 py-1 rounded-full font-mono"
            style={{ background: '#F3F4F6', color: '#4B5563' }}
          >
            {tool}
          </span>
        ))}
      </div>

      {/* Description — split on double newline */}
      <div className="space-y-3 mb-6">
        {automation.description.split('\n\n').map((para, i) => (
          <p key={i} className="text-sm leading-relaxed" style={{ color: '#374151' }}>
            {para}
          </p>
        ))}
      </div>

      {/* Business Impact callout */}
      <div
        className="flex gap-3 p-4 rounded-xl"
        style={{
          background: 'rgba(16,185,129,0.07)',
          borderLeft: '3px solid #10B981',
        }}
      >
        <Lightbulb size={16} className="shrink-0 mt-0.5" style={{ color: '#10B981' }} />
        <div>
          <p
            className="text-xs font-semibold uppercase tracking-wider mb-1"
            style={{ color: '#10B981', fontFamily: 'var(--font-syne)' }}
          >
            Business Impact
          </p>
          <p className="text-sm leading-relaxed italic" style={{ color: '#374151' }}>
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
