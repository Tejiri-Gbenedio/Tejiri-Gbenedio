'use client'

import React from 'react'
import Link from 'next/link'
import {
  MessageSquare,
  Mail,
  Award,
  Sparkles,
  ZapOff,
  ArrowUpRight,
} from 'lucide-react'
import { useMotionPreference } from './motion/MotionProvider'

function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  )
}

function LinkedinIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  )
}

const contactItems = [
  {
    label: 'WhatsApp Direct',
    value: '+234 708 472 1120',
    href: 'https://wa.me/2347084721120',
    icon: MessageSquare,
    badge: 'Instant Response',
  },
  {
    label: 'Official Email',
    value: 'tejirigbe@gmail.com',
    href: 'mailto:tejirigbe@gmail.com',
    icon: Mail,
    badge: 'Contract Inquiries',
  },
  {
    label: 'StackedHQ Builder',
    value: '965 Stacks · 14 Builds',
    href: 'https://thestackedhq.com/builders/tejiri-gbenedio',
    icon: Award,
    badge: 'Peer-Reviewed',
  },
  {
    label: 'Professional Network',
    value: 'LinkedIn Profile',
    href: 'https://www.linkedin.com/in/gbenedio-tejiri-169998123',
    icon: LinkedinIcon,
    badge: 'Connect',
  },
  {
    label: 'Source Repositories',
    value: 'github.com/Tejiri-Gbenedio',
    href: 'https://github.com/Tejiri-Gbenedio',
    icon: GithubIcon,
    badge: 'Codebase',
  },
]

const siteNav = [
  { label: 'Home', href: '/' },
  { label: 'Web & App Projects', href: '/projects' },
  { label: 'AI & Automations', href: '/automations' },
  { label: 'Services & Scope', href: '/services' },
  { label: 'About & Philosophy', href: '/about' },
  { label: 'Curriculum Vitae', href: '/cv' },
]

export default function Footer() {
  const { motionMode, toggleMotionMode } = useMotionPreference()

  return (
    <footer className="border-t border-[#222226] bg-[#0A0A0B] text-[#F4F4F0] pt-16 pb-12 px-5 sm:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Top Direct Contact Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pb-14 border-b border-[#222226]">
          {contactItems.map((item) => {
            const Icon = item.icon
            return (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group relative p-4 rounded-xl border border-[#222226] bg-[#121214] hover:bg-[#18181B] hover:border-[#323238] transition-all duration-200 flex items-start justify-between"
              >
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono uppercase tracking-wider text-[#8E8E93]">
                      {item.label}
                    </span>
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#18181B] text-[#D4AF37] border border-[#222226]">
                      {item.badge}
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-[#F4F4F0] group-hover:text-[#D4AF37] transition-colors">
                    {item.value}
                  </p>
                </div>
                <div className="p-2 rounded-lg bg-[#18181B] text-[#8E8E93] group-hover:text-[#F4F4F0] group-hover:bg-[#222226] transition-colors">
                  <Icon className="w-4 h-4" />
                </div>
              </a>
            )
          })}

          {/* Quick Action Card */}
          <div className="p-4 rounded-xl border border-[#D4AF37]/30 bg-[#121214] flex flex-col justify-between">
            <div className="space-y-1">
              <span className="text-xs font-mono uppercase tracking-wider text-[#D4AF37]">
                Start A Project
              </span>
              <p className="text-sm font-semibold text-[#F4F4F0]">
                Have a vision or technical challenge?
              </p>
            </div>
            <a
              href="https://wa.me/2347084721120"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center justify-center gap-2 py-2.5 px-3.5 rounded-lg bg-[#D4AF37] text-[#0A0A0B] text-xs md:text-sm font-mono uppercase tracking-wider font-bold hover:bg-[#E5A93C] transition-colors"
            >
              <span>Initiate Consultation</span>
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

        {/* Middle Navigation & Identity Row */}
        <div className="py-10 grid grid-cols-1 md:grid-cols-12 gap-8 border-b border-[#222226]">
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-3">
            <Link href="/" className="inline-block text-xl font-bold tracking-tight">
              <span>Tejiri</span>
              <span className="text-[#D4AF37]">.Dev</span>
            </Link>
            <p className="text-sm text-[#8E8E93] max-w-sm leading-relaxed">
              AI Automation &amp; Full-Stack Web Developer. Verified StackedHQ Founding Member. Engineering production web applications and autonomous n8n workflows for high-growth businesses.
            </p>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#8E8E93] pt-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
              <span>Lagos, Nigeria · Global Remote Contracts</span>
            </div>
          </div>

          {/* Site Navigation Links */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-4">
            {siteNav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs font-mono uppercase tracking-wider text-[#8E8E93] hover:text-[#D4AF37] transition-colors py-1"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom Bar: Copyright & Reduced Motion Accessibility Switch */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs font-mono text-[#8E8E93] text-center sm:text-left">
            © {new Date().getFullYear()} Tejiri Gbenedio. All rights reserved.
          </p>

          {/* Accessibility Motion Toggle */}
          <button
            onClick={toggleMotionMode}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#222226] bg-[#121214] hover:bg-[#18181B] text-xs font-mono text-[#8E8E93] transition-all hover:text-[#F4F4F0]"
            aria-label={`Toggle motion animations. Currently: ${motionMode}`}
          >
            {motionMode === 'enhanced' ? (
              <>
                <Sparkles size={13} className="text-[#D4AF37]" />
                <span>Motion: <strong className="text-[#D4AF37] font-semibold">Enhanced</strong></span>
              </>
            ) : (
              <>
                <ZapOff size={13} className="text-[#10B981]" />
                <span>Motion: <strong className="text-[#10B981] font-semibold">Reduced</strong></span>
              </>
            )}
            <span className="text-[10px] text-[#8E8E93]/60">(Toggle)</span>
          </button>
        </div>
      </div>
    </footer>
  )
}
