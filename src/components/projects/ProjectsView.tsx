'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import MaskText from '@/components/motion/MaskText'
import RevealSection from '@/components/motion/RevealSection'
import ProjectPreview from '@/components/ui/ProjectPreview'
import {
  ArrowUpRight,
  ExternalLink,
  Layers,
  Sparkles,
  CheckCircle2,
  Filter,
} from 'lucide-react'
import { projects, Project } from '@/data/portfolio'

const categories = ['All Architectures', 'Corporate & SaaS', 'AI Web Apps', 'E-Commerce & Brand']

export default function ProjectsView() {
  const [activeCategory, setActiveCategory] = useState('All Architectures')

  // Flagships (Top 3): DentalCare HQ, Rayvora Solar, Mutiee Bakes
  const flagships = projects.filter((p) => p.flagship)
  const directoryArchive = projects.filter((p) => !p.flagship)

  const filteredFlagships = flagships.filter((p) => {
    if (activeCategory === 'All Architectures') return true
    return p.category === activeCategory
  })

  const filteredArchive = directoryArchive.filter((p) => {
    if (activeCategory === 'All Architectures') return true
    return p.category === activeCategory
  })

  return (
    <div className="bg-[#0A0A0B] bg-architectural-grid text-[#F4F4F0] min-h-screen pt-32 md:pt-40 pb-28">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-20">
        {/* ===================== 1. EDITORIAL HEADER ===================== */}
        <section className="space-y-6">
          <div className="flex items-center gap-2">
            <span className="text-xs md:text-sm font-mono uppercase tracking-widest text-[#D4AF37] font-semibold">
              01 · Engineering Directory &amp; Flagship Case Studies
            </span>
          </div>

          <MaskText
            as="h1"
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.08] tracking-[-0.03em] font-display text-[#F4F4F0] max-w-4xl"
          >
            Digital Flagships &amp;
            AI Applications.
          </MaskText>

          <p className="text-xl md:text-2xl text-[#A1A1AA] max-w-3xl leading-relaxed font-sans">
            Full-stack platforms built for velocity, conversion, and long-term architectural durability. From multi-modal AI food ordering systems to high-conversion clinical portals and clean-energy consultation funnels.
          </p>

          {/* Interactive Category Filter Tabs */}
          <div className="pt-4 flex flex-wrap items-center gap-2.5">
            <div className="flex items-center gap-1.5 mr-2 text-xs md:text-sm font-mono uppercase text-[#8E8E93]">
              <Filter size={14} className="text-[#D4AF37]" />
              <span>Filter:</span>
            </div>
            {categories.map((cat) => {
              const isActive = activeCategory === cat
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`relative px-4 py-2 rounded-full text-xs md:text-sm font-sans font-medium transition-colors ${
                    isActive
                      ? 'text-[#0A0A0B] font-semibold'
                      : 'text-[#A1A1AA] hover:text-[#F4F4F0] bg-[#121214] border border-[#222226]'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="projects-active-pill"
                      className="absolute inset-0 bg-[#D4AF37] rounded-full shadow-[0_0_15px_rgba(212,175,55,0.25)] -z-10"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  {cat}
                </button>
              )
            })}
          </div>
        </section>

        {/* ===================== 2. TIER 1: FLAGSHIP SPOTLIGHTS ===================== */}
        <section className="space-y-10">
          <div className="flex items-center justify-between border-b border-[#222226] pb-4">
            <div className="flex items-center gap-2">
              <Sparkles size={18} className="text-[#D4AF37]" />
              <h2 className="text-2xl md:text-3xl font-bold font-display text-[#F4F4F0]">
                Flagship Case Studies
              </h2>
            </div>
            <span className="text-xs md:text-sm font-mono text-[#8E8E93]">
              Showing {filteredFlagships.length} of 3 Flagships
            </span>
          </div>

          <AnimatePresence mode="popLayout">
            {filteredFlagships.length > 0 ? (
              <div className="space-y-12">
                {filteredFlagships.map((project, idx) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className="rounded-2xl border border-[#222226] bg-[#121214] overflow-hidden hover:border-[#323238] transition-all group grid grid-cols-1 lg:grid-cols-12"
                  >
                    {/* Visual Preview Left / Top */}
                    <div className="lg:col-span-7 border-b lg:border-b-0 lg:border-r border-[#222226]">
                      <ProjectPreview
                        title={project.title}
                        image={project.image}
                        liveUrl={project.liveUrl}
                        category={project.category}
                        aspectRatio="aspect-[16/10]"
                      />
                    </div>

                    {/* Editorial Details Right */}
                    <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-xs md:text-sm font-mono px-3 py-1 rounded bg-[#18181B] text-[#D4AF37] border border-[#222226] font-semibold">
                            Flagship 0{idx + 1}
                          </span>
                          <span className="text-xs md:text-sm font-mono text-[#8E8E93]">
                            {project.category}
                          </span>
                        </div>

                        <div>
                          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-[#F4F4F0]">
                            {project.title}
                          </h3>
                          <p className="text-base md:text-lg font-sans text-[#D4AF37] mt-1 font-medium">
                            {project.tagline}
                          </p>
                        </div>

                        <p className="text-base md:text-[17px] text-[#A1A1AA] leading-relaxed font-sans">
                          {project.summary}
                        </p>

                        {/* Architectural Features */}
                        {project.features && (
                          <div className="space-y-2 pt-2">
                            <span className="text-xs md:text-sm font-mono uppercase tracking-wider text-[#8E8E93]">
                              Architectural Pillars:
                            </span>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                              {project.features.map((feat) => (
                                <div key={feat} className="flex items-center gap-2 text-xs md:text-sm font-mono text-[#F4F4F0]">
                                  <CheckCircle2 size={14} className="text-[#10B981] shrink-0" />
                                  <span>{feat}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Bottom Tech Stack & Action CTA */}
                      <div className="pt-6 border-t border-[#222226] space-y-4">
                        <div className="flex flex-wrap gap-2">
                          {project.techStack.map((tech) => (
                            <span
                              key={tech}
                              className="text-xs md:text-sm font-mono px-3 py-1 rounded bg-[#18181B] text-[#A1A1AA] border border-[#222226]"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        {project.liveUrl ? (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-xl text-sm md:text-base font-sans font-semibold bg-[#D4AF37] text-[#0A0A0B] hover:bg-[#E5A93C] transition-all shadow-[0_0_18px_rgba(212,175,55,0.18)]"
                          >
                            <span>Launch Live Platform</span>
                            <ArrowUpRight size={18} />
                          </a>
                        ) : (
                          <span className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-xl text-xs md:text-sm font-mono text-[#8E8E93] border border-[#222226] bg-[#18181B]">
                            Internal Enterprise System
                          </span>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="p-8 rounded-2xl border border-[#222226] bg-[#121214] text-center text-[#8E8E93] text-base">
                No flagship builds in this category. Browse the full production index below.
              </div>
            )}
          </AnimatePresence>
        </section>

        {/* ===================== 3. TIER 2: SWISS STUDIO PRODUCTION ARCHIVE TABLE ===================== */}
        <RevealSection className="space-y-6 pt-12 border-t border-[#222226]">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Layers size={18} className="text-[#D4AF37]" />
                <span className="text-xs md:text-sm font-mono uppercase tracking-widest text-[#D4AF37]">
                  Production Directory
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#F4F4F0]">
                Interactive Production Index
              </h2>
            </div>
            <p className="text-xs md:text-sm font-mono text-[#8E8E93]">
              Swiss Studio Technical Archive · All Deployed Platforms
            </p>
          </div>

          {/* Desktop Table View */}
          <div className="hidden md:block rounded-2xl border border-[#222226] bg-[#121214] overflow-hidden">
            <div className="grid grid-cols-12 px-6 py-4 bg-[#18181B] border-b border-[#222226] text-xs md:text-sm font-mono uppercase tracking-wider text-[#8E8E93]">
              <div className="col-span-1">Index</div>
              <div className="col-span-4">Platform &amp; Intent</div>
              <div className="col-span-3">Category</div>
              <div className="col-span-3">Core Architecture</div>
              <div className="col-span-1 text-right">Preview</div>
            </div>

            <div className="divide-y divide-[#222226]">
              {filteredArchive.map((item, index) => (
                <div
                  key={item.id}
                  className="grid grid-cols-12 px-6 py-5 items-center hover:bg-[#18181B] transition-colors group"
                >
                  {/* Index */}
                  <div className="col-span-1 font-mono text-sm text-[#8E8E93]">
                    0{index + 1}
                  </div>

                  {/* Project & Tagline */}
                  <div className="col-span-4 pr-4">
                    <p className="font-display font-bold text-base md:text-[17px] text-[#F4F4F0] group-hover:text-[#D4AF37] transition-colors">
                      {item.title}
                    </p>
                    <p className="text-sm text-[#8E8E93] truncate mt-0.5 font-sans">
                      {item.tagline}
                    </p>
                  </div>

                  {/* Category */}
                  <div className="col-span-3">
                    <span className="text-xs md:text-sm font-mono px-3 py-1 rounded bg-[#0A0A0B] text-[#A1A1AA] border border-[#222226]">
                      {item.category}
                    </span>
                  </div>

                  {/* Core Architecture */}
                  <div className="col-span-3 flex flex-wrap gap-1.5 pr-2">
                    {item.techStack.slice(0, 3).map((stack) => (
                      <span
                        key={stack}
                        className="text-xs font-mono px-2.5 py-0.5 rounded bg-[#18181B] text-[#8E8E93] border border-[#222226]"
                      >
                        {stack}
                      </span>
                    ))}
                    {item.techStack.length > 3 && (
                      <span className="text-xs font-mono text-[#8E8E93]">
                        +{item.techStack.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Action Link */}
                  <div className="col-span-1 text-right">
                    {item.liveUrl ? (
                      <a
                        href={item.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs md:text-sm font-mono text-[#A1A1AA] group-hover:text-[#D4AF37] transition-colors"
                        aria-label={`Open ${item.title} live preview`}
                      >
                        <span>View</span>
                        <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </a>
                    ) : (
                      <span className="text-xs font-mono text-[#8E8E93]/60">—</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Card List View */}
          <div className="md:hidden space-y-4">
            {filteredArchive.map((item, index) => (
              <div
                key={item.id}
                className="p-5 rounded-xl border border-[#222226] bg-[#121214] space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs md:text-sm font-mono text-[#D4AF37]">Index 0{index + 1}</span>
                  <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-[#18181B] text-[#A1A1AA] border border-[#222226]">
                    {item.category}
                  </span>
                </div>

                <div>
                  <h4 className="text-lg font-bold font-display text-[#F4F4F0]">{item.title}</h4>
                  <p className="text-sm text-[#A1A1AA] mt-1 font-sans">{item.tagline}</p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {item.techStack.map((stack) => (
                    <span
                      key={stack}
                      className="text-xs font-mono px-2.5 py-0.5 rounded bg-[#18181B] text-[#8E8E93] border border-[#222226]"
                    >
                      {stack}
                    </span>
                  ))}
                </div>

                {item.liveUrl && (
                  <div className="pt-2">
                    <a
                      href={item.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 w-full py-3 rounded-lg bg-[#18181B] border border-[#222226] text-xs md:text-sm font-mono text-[#D4AF37] hover:bg-[#222226] transition-colors"
                    >
                      <span>Open Live Platform</span>
                      <ArrowUpRight size={14} />
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </RevealSection>
      </div>
    </div>
  )
}
