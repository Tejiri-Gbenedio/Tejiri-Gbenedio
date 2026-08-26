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
      <h3 className="text-xl font-semibold tracking-tight mb-1" style={{ fontFamily: 'var(--font-geist-sans)', color: 'var(--color-ink)' }}>
        {project.title}
      </h3>
      <p className="text-sm mb-5 leading-relaxed" style={{ color: 'var(--color-muted)' }}>
        {project.tagline}
      </p>

      <div className="space-y-3 mb-5">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-wider mb-1" style={{ color: 'var(--color-subtle)' }}>
            The Need
          </p>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--color-ink)' }}>{project.clientNeed}</p>
        </div>
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-wider mb-1" style={{ color: 'var(--color-subtle)' }}>
            The Solution
          </p>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--color-ink)' }}>{project.solution}</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.features.map((f) => (
          <span key={f} className="text-xs font-medium px-2.5 py-1 rounded-full" style={{ background: 'var(--color-accent-soft)', color: 'var(--color-accent-ink)' }}>
            {f}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.techStack.map((t) => (
          <span key={t} className="text-xs px-2.5 py-1 rounded-md border" style={{ background: 'var(--color-surface-alt)', borderColor: 'var(--color-border)', color: 'var(--color-muted)', fontFamily: 'var(--font-mono)' }}>
            {t}
          </span>
        ))}
      </div>

      {!project.hideLink && project.status === 'live' && (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-semibold group/link transition-colors hover:text-[#8A4A2A]"
          style={{ color: 'var(--color-accent)', fontFamily: 'var(--font-geist-sans)' }}
          aria-label={`View ${project.title} live site (opens in new tab)`}
        >
          View Live Site
          <ArrowUpRight size={15} aria-hidden="true" className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
        </a>
      )}
      {project.status === 'coming-soon' && (
        <span className="inline-flex items-center gap-1.5 text-sm font-semibold" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-geist-sans)' }}>
          <ExternalLink size={14} aria-hidden="true" /> In Development
        </span>
      )}
    </>
  )
}

function CategoryBadge({ label }: { label: string }) {
  return (
    <div className="absolute top-3 left-3">
      <span
        className="text-white text-xs font-semibold px-3 py-1 rounded-full"
        style={{ background: 'var(--color-accent)', fontFamily: 'var(--font-geist-sans)' }}
      >
        {label}
      </span>
    </div>
  )
}

export default function ProjectCard({ project, index, portrait }: { project: Project; index: number; portrait?: boolean }) {
  const [hovered, setHovered] = useState(false)

  const cardStyle = {
    background: 'var(--color-card)',
    border: `1px solid ${hovered ? 'var(--color-border-strong)' : 'var(--color-border)'}`,
    boxShadow: hovered ? '0 22px 48px -16px rgba(28,25,23,0.18)' : '0 1px 2px rgba(28,25,23,0.05)',
  }

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
        className="group rounded-2xl flex flex-col md:flex-row overflow-hidden transition-all duration-300"
        style={cardStyle}
      >
        <div className="relative w-full md:w-72 shrink-0 overflow-hidden" style={{ minHeight: '420px', background: '#EDE9E3' }}>
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 288px"
            className="transition-transform duration-500 group-hover:scale-[1.03]"
            style={{ objectFit: 'contain', padding: '20px' }}
          />
          <CategoryBadge label={project.category} />
        </div>

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
      className="group rounded-2xl overflow-hidden transition-all duration-300"
      style={cardStyle}
    >
      <div className="relative h-52 overflow-hidden" style={{ background: '#EDE9E3' }}>
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
        {project.status === 'coming-soon' && (
          <div className="absolute inset-0 flex items-center justify-center" style={{ background: 'rgba(28,25,23,0.6)' }}>
            <span
              className="text-white text-xs font-semibold uppercase tracking-widest border border-white/30 px-4 py-2 rounded-full"
              style={{ fontFamily: 'var(--font-geist-sans)' }}
            >
              Coming Soon
            </span>
          </div>
        )}
        <CategoryBadge label={project.category} />
      </div>

      <div className="p-6">
        <CardContent project={project} />
      </div>
    </motion.div>
  )
}
