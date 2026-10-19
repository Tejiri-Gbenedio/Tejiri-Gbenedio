'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { Lock, ExternalLink, ShieldCheck } from 'lucide-react'

interface ProjectPreviewProps {
  title: string
  image?: string
  liveUrl?: string
  category?: string
  className?: string
  aspectRatio?: string
  priority?: boolean
}

export default function ProjectPreview({
  title,
  image,
  liveUrl,
  category,
  className = '',
  aspectRatio = 'aspect-[16/10]',
  priority = false,
}: ProjectPreviewProps) {
  const [imageError, setImageError] = useState(false)
  const isSvgFallback = image?.endsWith('.svg') || !image
  const hasLocalImage = !!image && !isSvgFallback

  // High-res desktop live screenshot URL via Microlink API (full 1440x900 viewport to eliminate text cropping)
  const microlinkUrl = liveUrl
    ? `https://api.microlink.io/?url=${encodeURIComponent(
        liveUrl
      )}&screenshot=true&meta=false&embed=screenshot.url&viewport.width=1440&viewport.height=900&viewport.deviceScaleFactor=1`
    : null

  // Clean domain display for the macOS browser address bar
  const domainDisplay = liveUrl
    ? liveUrl.replace(/^https?:\/\//, '').replace(/\/$/, '')
    : 'production.app'

  return (
    <div
      className={`relative ${aspectRatio} w-full bg-[#121214] flex flex-col overflow-hidden border-b border-[#222226] group-hover:border-[#323238] transition-colors ${className}`}
    >
      {/* Studio macOS Browser Window Top Bar */}
      <div className="h-9 px-4 bg-[#18181B] border-b border-[#222226] flex items-center justify-between shrink-0 select-none z-10">
        {/* Window controls */}
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#EF4444]/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#10B981]/80" />
        </div>

        {/* URL Pill */}
        <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#0A0A0B]/70 border border-[#222226] text-[11px] font-mono text-[#8E8E93]">
          <Lock size={10} className="text-[#10B981] shrink-0" />
          <span className="max-w-[170px] sm:max-w-[260px] truncate">{domainDisplay}</span>
        </div>

        {/* Live status badge */}
        <div className="flex items-center gap-1 text-[10px] font-mono text-[#D4AF37]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
          <span className="hidden sm:inline">LIVE</span>
        </div>
      </div>

      {/* Browser Viewport Canvas: NO overlapping category badge, full width without left-edge text clipping */}
      <div className="relative flex-1 w-full bg-[#0E0E10] overflow-hidden">
        {hasLocalImage ? (
          /* Local PNG preview (e.g. Mutiee Bakes) inside macOS frame */
          <Image
            src={image!}
            alt={title}
            fill
            priority={priority}
            className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
            sizes="(max-width: 1024px) 100vw, 650px"
          />
        ) : microlinkUrl && !imageError ? (
          /* High-res Microlink live desktop screenshot */
          <Image
            src={microlinkUrl}
            alt={`${title} live desktop preview`}
            fill
            unoptimized
            onError={() => setImageError(true)}
            className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
          />
        ) : (
          /* Architectural Fallback Blueprint */
          <div className="absolute inset-0 p-6 flex flex-col justify-between bg-gradient-to-br from-[#121214] via-[#151518] to-[#18181B]">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase tracking-widest text-[#D4AF37] px-2.5 py-1 rounded bg-[#0A0A0B] border border-[#222226]">
                {category || 'Production Web App'}
              </span>
              <ShieldCheck size={20} className="text-[#10B981]" />
            </div>

            <div className="space-y-1.5">
              <h4 className="text-2xl font-bold font-display text-[#F4F4F0]">{title}</h4>
              <p className="text-xs font-mono text-[#8E8E93]">
                HTTPS Verified · Studio Architecture
              </p>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-[#222226]">
              <span className="text-xs font-mono text-[#D4AF37]">Launch platform</span>
              <ExternalLink size={14} className="text-[#D4AF37]" />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
