'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowUpRight, ExternalLink } from 'lucide-react'
import type { projects } from '@/data'

type Project = Omit<(typeof projects)[number], 'status'> & { status: 'live' | 'coming-soon'; hideLink?: boolean }

function CardContent({ project }: { project: Project }) {
  return (
    <>
      <h3 className="font-extrabold text-xl mb-1" style={{ fontFamily: 'var(--font-syne)', color: '#111827' }}>
        {project.title}
      </h3>
      <p className="text-sm mb-4 leading-relaxed" style={{ color: '#6B7280' }}>
        {project.tagline}
      </p>

      <div className="space-y-3 mb-5">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: '#9CA3AF', fontFamily: 'var(--font-syne)' }}>
            The Need
          </p>
          <p className="text-sm leading-relaxed" style={{ color: '#111827' }}>{project.clientNeed}</p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: '#9CA3AF', fontFamily: 'var(--font-syne)' }}>
            The Solution
          </p>
          <p className="text-sm leading-relaxed" style={{ color: '#111827' }}>{project.solution}</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.features.map((f) => (
          <span key={f} className="text-xs font-medium px-2.5 py-1 rounded-full" style={{ background: '#D1FAE5', color: '#059669' }}>
            {f}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.techStack.map((t) => (
          <span key={t} className="text-xs px-2.5 py-1 rounded-full font-mono" style={{ background: '#F3F4F6', color: '#4B5563' }}>
            {t}
          </span>
        ))}
      </div>

      {!project.hideLink && project.status === 'live' && (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-semibold group/link"
          style={{ color: '#10B981', fontFamily: 'var(--font-syne)' }}
          aria-label={`View ${project.title} live site (opens in new tab)`}
        >
          View Live Site
          <ArrowUpRight size={15} aria-hidden="true" className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
        </a>
      )}
      {project.status === 'coming-soon' && (
        <span className="inline-flex items-center gap-1.5 text-sm font-semibold" style={{ color: '#9CA3AF', fontFamily: 'var(--font-syne)' }}>
          <ExternalLink size={14} aria-hidden="true" /> In Development
        </span>
      )}
    </>
  )
}

export default function ProjectCard({ project, index, portrait }: { project: Project; index: number; portrait?: boolean }) {
  const [hovered, setHovered] = useState(false)

  if (portrait) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{ y: -4 }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="rounded-xl flex flex-col md:flex-row transition-all duration-300"
        style={{
          background: '#FAFAF8',
          border: `1px solid ${hovered ? '#10B98140' : '#E5E7EB'}`,
          boxShadow: hovered ? '0 20px 50px rgba(0,0,0,0.09)' : '0 1px 3px rgba(0,0,0,0.04)',
        }}
      >
        {/* Portrait image — full height on left */}
        <div
          className="relative w-full md:w-72 shrink-0 overflow-hidden rounded-t-xl md:rounded-tl-xl md:rounded-bl-xl md:rounded-tr-none md:rounded-br-none"
          style={{ background: '#EDECEA', minHeight: '420px' }}
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 288px"
            style={{ objectFit: 'contain', padding: '20px', transform: hovered ? 'scale(1.02)' : 'scale(1)', transition: 'transform 0.5s ease' }}
          />
          <div className="absolute top-3 left-3">
            <span
              className="text-white text-xs font-semibold px-3 py-1 rounded-full"
              style={{ background: '#10B981', fontFamily: 'var(--font-syne)' }}
            >
              {project.category}
            </span>
          </div>
        </div>

        {/* Content — right side */}
        <div className="p-6 md:p-8 flex-1 flex flex-col justify-center">
          <CardContent project={project} />
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="rounded-xl transition-all duration-300 group"
      style={{
        background: '#FAFAF8',
        border: `1px solid ${hovered ? '#10B98140' : '#E5E7EB'}`,
        boxShadow: hovered ? '0 20px 50px rgba(0,0,0,0.09)' : '0 1px 3px rgba(0,0,0,0.04)',
      }}
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden rounded-t-xl bg-gray-100">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-500"
          style={{ transform: hovered ? 'scale(1.05)' : 'scale(1)' }}
        />
        {project.status === 'coming-soon' && (
          <div className="absolute inset-0 flex items-center justify-center" style={{ background: 'rgba(15,23,42,0.65)' }}>
            <span
              className="text-white text-xs font-semibold uppercase tracking-widest border border-white/30 px-4 py-2 rounded-full"
              style={{ fontFamily: 'var(--font-syne)' }}
            >
              Coming Soon
            </span>
          </div>
        )}
        <div className="absolute top-3 left-3">
          <span
            className="text-white text-xs font-semibold px-3 py-1 rounded-full"
            style={{ background: '#10B981', fontFamily: 'var(--font-syne)' }}
          >
            {project.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <CardContent project={project} />
      </div>
    </motion.div>
  )
}
