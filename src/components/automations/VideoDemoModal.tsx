'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import {
  X,
  ArrowUpRight,
  Award,
  Sparkles,
  CheckCircle2,
  Cpu,
  Layers,
  ZoomIn,
  ExternalLink,
  MessageSquare,
} from 'lucide-react'
import { AutomationSystem, builderCredential, contactLinks } from '@/data/portfolio'

interface VideoDemoModalProps {
  system: AutomationSystem | null
  onClose: () => void
}

export default function VideoDemoModal({ system, onClose }: VideoDemoModalProps) {
  const [isZoomed, setIsZoomed] = useState(false)

  // Listen for Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (isZoomed) {
          setIsZoomed(false)
        } else {
          onClose()
        }
      }
    }
    if (system) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    }
    return () => {
      document.body.style.overflow = 'unset'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [system, isZoomed, onClose])

  if (!system) return null

  const whatsappInquiry = `https://wa.me/2347084721120?text=${encodeURIComponent(
    `Hi Tejiri, I saw the architecture for your "${system.title}" on your portfolio and would like to request a live demo for my business.`
  )}`

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/90 backdrop-blur-md -z-10"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 16 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-5xl bg-[#121214] border border-[#222226] rounded-2xl shadow-2xl overflow-hidden my-6"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 bg-[#18181B] border-b border-[#222226]">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-pulse" />
              <span className="text-xs md:text-sm font-mono uppercase tracking-wider text-[#D4AF37] font-semibold">
                StackedHQ Peer-Reviewed Workflow Architecture
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg border border-[#222226] bg-[#121214] text-[#A1A1AA] hover:text-[#F4F4F0] hover:border-[#323238] transition-colors"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>
          </div>

          <div className="p-6 sm:p-8 space-y-6 max-h-[82vh] overflow-y-auto">
            {/* Title & Tagline */}
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs md:text-sm font-mono px-3 py-0.5 rounded bg-[#18181B] text-[#D4AF37] border border-[#222226] font-semibold">
                  Verified Production System
                </span>
                <span className="text-xs md:text-sm font-mono text-[#8E8E93]">
                  965 Stacks · Tejiri Gbenedio
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-[#F4F4F0]">
                {system.title}
              </h3>
              <p className="text-base md:text-lg font-sans text-[#A1A1AA] leading-relaxed">
                {system.tagline}
              </p>
            </div>

            {/* UNBLOCKED WORKFLOW CANVAS: 100% Crystal-Clear Visibility (No dark overlay, no play button blocking diagram) */}
            <div className="space-y-3">
              <div className="relative w-full rounded-xl overflow-hidden border border-[#222226] bg-[#0A0A0B] shadow-2xl group">
                {system.videoDemoUrl ? (
                  <div className="aspect-[16/9] w-full">
                    <iframe
                      src={system.videoDemoUrl}
                      title={`${system.title} Video Demo`}
                      className="w-full h-full border-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <div className="relative w-full bg-[#0A0A0B] p-2 sm:p-4">
                    {/* Top Status Strip inside frame */}
                    <div className="flex items-center justify-between pb-3 px-2 border-b border-[#222226]/60 text-xs font-mono">
                      <span className="text-[#D4AF37] flex items-center gap-1.5 font-semibold">
                        <Layers size={13} />
                        <span>n8n Production Workflow Graph</span>
                      </span>
                      <button
                        onClick={() => setIsZoomed(true)}
                        className="text-[#A1A1AA] hover:text-[#F4F4F0] flex items-center gap-1 transition-colors"
                      >
                        <ZoomIn size={13} />
                        <span>Click diagram to expand</span>
                      </button>
                    </div>

                    {/* 100% Unblocked, Crystal Clear Diagram */}
                    {system.image && (
                      <div
                        onClick={() => setIsZoomed(true)}
                        className="relative w-full min-h-[300px] sm:min-h-[420px] max-h-[560px] cursor-zoom-in overflow-hidden rounded-lg my-2 flex items-center justify-center bg-[#0d0d10]"
                        title="Click to view full-resolution diagram"
                      >
                        <Image
                          src={system.image}
                          alt={`${system.title} Workflow Diagram`}
                          width={1400}
                          height={900}
                          className="w-full h-auto max-h-[560px] object-contain opacity-100 filter drop-shadow-md transition-all duration-300 group-hover:scale-[1.01]"
                          priority
                        />
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* ACTION BAR MOVED CLEANLY UNDERNEATH THE IMAGE */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 p-4 rounded-xl border border-[#222226] bg-[#18181B]">
                <a
                  href={builderCredential.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center sm:justify-start gap-2 text-xs md:text-sm font-mono text-[#D4AF37] hover:text-[#E5A93C] transition-colors py-1"
                >
                  <Award size={16} />
                  <span>Verify 14 Builds on StackedHQ</span>
                  <ExternalLink size={14} />
                </a>

                <div className="flex items-center gap-3">
                  {system.image && (
                    <button
                      onClick={() => setIsZoomed(true)}
                      className="px-4 py-2.5 rounded-lg border border-[#27272A] hover:border-[#D4AF37]/50 bg-[#121214] text-xs md:text-sm font-mono text-[#F4F4F0] transition-colors flex items-center justify-center gap-2"
                    >
                      <ZoomIn size={14} className="text-[#D4AF37]" />
                      <span>Full-Screen Zoom</span>
                    </button>
                  )}

                  <a
                    href={whatsappInquiry}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-lg bg-[#D4AF37] text-[#0A0A0B] text-xs md:text-sm font-sans font-semibold hover:bg-[#E5A93C] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#D4AF37]/20"
                  >
                    <span>Request Live Screen-Share Demo</span>
                    <ArrowUpRight size={15} />
                  </a>
                </div>
              </div>
            </div>

            {/* 5-Stage Sequential Pipeline Visualizer */}
            <div className="space-y-3 pt-2">
              <span className="text-xs md:text-sm font-mono uppercase tracking-wider text-[#8E8E93]">
                5-Stage End-to-End Orchestration:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-5 gap-2.5">
                {system.pipeline.map((step, i) => (
                  <div
                    key={i}
                    className="p-3.5 rounded-lg border border-[#222226] bg-[#18181B] text-left space-y-1.5"
                  >
                    <span className="text-[11px] font-mono uppercase text-[#D4AF37] font-semibold">
                      Step 0{i + 1}
                    </span>
                    <p className="text-xs md:text-sm font-mono text-[#F4F4F0] leading-snug">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Business Impact & Engineering Architecture */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-[#222226]">
              <div className="space-y-2">
                <span className="text-xs md:text-sm font-mono uppercase tracking-wider text-[#10B981] font-semibold flex items-center gap-1.5">
                  <CheckCircle2 size={16} />
                  Business Impact &amp; ROI
                </span>
                <p className="text-base md:text-[17px] text-[#A1A1AA] leading-relaxed font-sans">
                  {system.businessImpact}
                </p>
              </div>

              <div className="space-y-2">
                <span className="text-xs md:text-sm font-mono uppercase tracking-wider text-[#D4AF37] font-semibold flex items-center gap-1.5">
                  <Cpu size={16} />
                  Technical Stack &amp; Tools
                </span>
                <div className="flex flex-wrap gap-2 pt-1">
                  {system.tools.map((t) => (
                    <span
                      key={t}
                      className="text-xs md:text-sm font-mono px-3 py-1 rounded bg-[#18181B] text-[#F4F4F0] border border-[#222226]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Deep Technical Description */}
            <div className="pt-4 border-t border-[#222226] space-y-2">
              <span className="text-xs md:text-sm font-mono uppercase tracking-wider text-[#8E8E93]">
                Implementation Narrative:
              </span>
              <p className="text-base md:text-[17px] text-[#A1A1AA] leading-relaxed font-sans">
                {system.description}
              </p>
            </div>
          </div>
        </motion.div>

        {/* FULLSCREEN ZOOM LIGHTBOX */}
        {isZoomed && system.image && (
          <div
            className="fixed inset-0 z-60 bg-black/95 flex flex-col p-4 sm:p-8 animate-in fade-in duration-200"
            onClick={() => setIsZoomed(false)}
          >
            <div className="flex items-center justify-between pb-4 border-b border-[#222226]">
              <div className="flex items-center gap-3">
                <span className="text-xs md:text-sm font-mono text-[#D4AF37]">
                  {system.title} — Full Workflow Architecture
                </span>
              </div>
              <button
                onClick={() => setIsZoomed(false)}
                className="px-4 py-2 rounded-lg bg-[#18181B] text-xs font-mono text-[#F4F4F0] border border-[#27272A] hover:bg-[#222226]"
              >
                Close Zoom [ESC]
              </button>
            </div>

            <div className="flex-1 w-full h-full flex items-center justify-center overflow-auto p-4">
              <Image
                src={system.image}
                alt={`${system.title} Full Architecture`}
                width={2000}
                height={1200}
                className="max-w-full max-h-full object-contain filter drop-shadow-2xl"
              />
            </div>
          </div>
        )}
      </div>
    </AnimatePresence>
  )
}
