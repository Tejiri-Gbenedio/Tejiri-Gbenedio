'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import MaskText from '@/components/motion/MaskText'
import RevealSection from '@/components/motion/RevealSection'
import WorkflowPipeline from '@/components/ui/WorkflowPipeline'
import VideoDemoModal from './VideoDemoModal'
import {
  ArrowUpRight,
  CheckCircle2,
  Cpu,
  Layers,
  Sparkles,
  Award,
  Play,
  ExternalLink,
  Code2,
} from 'lucide-react'
import {
  priorityAutomations,
  archiveAutomations,
  AutomationSystem,
  builderCredential,
  contactLinks,
} from '@/data/portfolio'

export default function AutomationsView() {
  const [selectedSystem, setSelectedSystem] = useState<AutomationSystem | null>(null)

  return (
    <div className="bg-[#0A0A0B] bg-architectural-grid text-[#F4F4F0] min-h-screen pt-32 md:pt-40 pb-28">
      {/* Video Demo Modal */}
      <VideoDemoModal
        system={selectedSystem}
        onClose={() => setSelectedSystem(null)}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        {/* ===================== 1. EDITORIAL HEADER & STACKEDHQ BANNER ===================== */}
        <section className="space-y-8">
          <div className="space-y-4">
            <span className="text-xs md:text-sm font-mono uppercase tracking-widest text-[#D4AF37] font-semibold">
              02 · Autonomous Systems &amp; Workflow Orchestration
            </span>

            <MaskText
              as="h1"
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.08] tracking-[-0.03em] font-display text-[#F4F4F0] max-w-4xl"
            >
              Production AI Agents &amp;
              Automated Pipelines.
            </MaskText>

            <p className="text-xl md:text-2xl text-[#A1A1AA] max-w-3xl leading-relaxed font-sans">
              Peer-reviewed n8n orchestration, conversational Voice AI agents, and RAG architectures engineered to eliminate operational bottlenecks, handle customer inquiries 24/7, and generate direct revenue.
            </p>
          </div>

          {/* Verified StackedHQ Credential Banner */}
          <div className="p-6 sm:p-8 rounded-2xl border border-[#D4AF37]/50 bg-gradient-to-r from-[#18181B] via-[#121214] to-[#18181B] shadow-[0_0_35px_rgba(212,175,55,0.08)] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2.5">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-[#D4AF37] text-[#0A0A0B] text-xs md:text-sm font-mono font-bold">
                  VERIFIED BUILDER
                </span>
                <span className="text-xs md:text-sm font-mono text-[#10B981] flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                  Peer-Reviewed Credential
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#F4F4F0]">
                Verified StackedHQ Founding Member · 965 Stacks Earned
              </h2>
              <p className="text-base md:text-[17px] text-[#A1A1AA] max-w-2xl font-sans leading-relaxed">
                Every automation below is an architecture deployed for real businesses and vetted through peer code review on the global StackedHQ builder registry.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0 w-full sm:w-auto">
              <a
                href={builderCredential.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm md:text-base font-sans font-semibold bg-[#D4AF37] text-[#0A0A0B] hover:bg-[#E5A93C] transition-all shadow-[0_0_20px_rgba(212,175,55,0.2)]"
              >
                <span>Verify Builder Profile</span>
                <ArrowUpRight size={18} />
              </a>

              <a
                href={contactLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm md:text-base font-sans font-medium text-[#F4F4F0] border border-[#222226] bg-[#121214] hover:bg-[#18181B] hover:border-[#323238] transition-colors"
              >
                <span>Book Architecture Call</span>
              </a>
            </div>
          </div>
        </section>

        {/* ===================== 2. TOP 6 PRIORITY SYSTEMS SHOWCASE ===================== */}
        <section className="space-y-10">
          <div className="flex items-center justify-between border-b border-[#222226] pb-4">
            <div className="flex items-center gap-2">
              <Sparkles size={18} className="text-[#D4AF37]" />
              <h2 className="text-2xl md:text-3xl font-bold font-display text-[#F4F4F0]">
                Priority Production Systems
              </h2>
            </div>
            <span className="text-xs md:text-sm font-mono text-[#8E8E93]">
              6 Peer-Reviewed Architectures
            </span>
          </div>

          <div className="space-y-12">
            {priorityAutomations.map((system, idx) => (
              <RevealSection
                key={system.id}
                className="rounded-2xl border border-[#222226] bg-[#121214] p-6 sm:p-8 lg:p-10 hover:border-[#323238] transition-all space-y-6"
              >
                {/* Header Row: Index, Category, Title, Action Button */}
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 pb-6 border-b border-[#222226]">
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className="text-xs md:text-sm font-mono px-3 py-1 rounded bg-[#18181B] text-[#D4AF37] border border-[#222226] font-semibold">
                        SYSTEM 0{idx + 1}
                      </span>
                      <span className="text-xs md:text-sm font-mono px-3 py-1 rounded bg-[#0A0A0B] text-[#10B981] border border-[#10B981]/30 flex items-center gap-1.5">
                        <CheckCircle2 size={13} />
                        StackedHQ Peer-Reviewed
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-[#F4F4F0]">
                      {system.title}
                    </h3>
                    <p className="text-base md:text-lg font-sans text-[#D4AF37] font-medium">
                      {system.tagline}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <button
                      onClick={() => setSelectedSystem(system)}
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm md:text-base font-sans font-semibold bg-[#D4AF37] text-[#0A0A0B] hover:bg-[#E5A93C] transition-all shadow-[0_0_15px_rgba(212,175,55,0.18)] active:scale-95"
                    >
                      <span>Inspect Workflow Diagram</span>
                      <ArrowUpRight size={16} />
                    </button>

                    <a
                      href={builderCredential.profileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl border border-[#222226] bg-[#18181B] text-[#A1A1AA] hover:text-[#F4F4F0] hover:border-[#323238] transition-colors"
                      title="View code on StackedHQ"
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>

                {/* Business Impact Paragraph */}
                <div className="space-y-1.5">
                  <span className="text-xs md:text-sm font-mono uppercase tracking-wider text-[#8E8E93]">
                    Business Impact &amp; Operational ROI:
                  </span>
                  <p className="text-base md:text-[17px] text-[#A1A1AA] leading-relaxed font-sans">
                    {system.businessImpact}
                  </p>
                </div>

                {/* Single-Row Horizontal Workflow Pipeline */}
                <div className="py-2">
                  <WorkflowPipeline nodes={system.pipeline} />
                </div>

                {/* Orchestration Tools & Details Footer */}
                <div className="pt-6 border-t border-[#222226] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs md:text-sm font-mono uppercase text-[#8E8E93] mr-2">
                      Tools &amp; APIs:
                    </span>
                    {system.tools.map((tool) => (
                      <span
                        key={tool}
                        className="text-xs md:text-sm font-mono px-3 py-1 rounded bg-[#18181B] border border-[#222226] text-[#F4F4F0]"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => setSelectedSystem(system)}
                    className="text-xs md:text-sm font-mono text-[#D4AF37] hover:underline flex items-center gap-1.5 self-start sm:self-auto"
                  >
                    <span>View Architecture Specs &amp; Flow</span>
                    <ArrowUpRight size={15} />
                  </button>
                </div>
              </RevealSection>
            ))}
          </div>
        </section>

        {/* ===================== 3. SECONDARY PRODUCTION WORKFLOWS ARCHIVE ===================== */}
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
                Secondary Workflow Deployments
              </h2>
            </div>
            <p className="text-xs md:text-sm font-mono text-[#8E8E93]">
              Swiss Studio Technical Archive · Systems 07 – 10
            </p>
          </div>

          {/* Desktop Table View */}
          <div className="hidden md:block rounded-2xl border border-[#222226] bg-[#121214] overflow-hidden">
            <div className="grid grid-cols-12 px-6 py-4 bg-[#18181B] border-b border-[#222226] text-xs md:text-sm font-mono uppercase tracking-wider text-[#8E8E93]">
              <div className="col-span-1">Index</div>
              <div className="col-span-4">System &amp; Intent</div>
              <div className="col-span-3">Orchestration Tools</div>
              <div className="col-span-3">Business Outcome</div>
              <div className="col-span-1 text-right">Details</div>
            </div>

            <div className="divide-y divide-[#222226]">
              {archiveAutomations.map((item, index) => (
                <div
                  key={item.id}
                  className="grid grid-cols-12 px-6 py-5 items-center hover:bg-[#18181B] transition-colors group"
                >
                  {/* Index */}
                  <div className="col-span-1 font-mono text-sm text-[#8E8E93]">
                    0{index + 7}
                  </div>

                  {/* System & Tagline */}
                  <div className="col-span-4 pr-4">
                    <p className="font-display font-bold text-base md:text-[17px] text-[#F4F4F0] group-hover:text-[#D4AF37] transition-colors">
                      {item.title}
                    </p>
                    <p className="text-sm text-[#8E8E93] truncate mt-0.5 font-sans">
                      {item.tagline}
                    </p>
                  </div>

                  {/* Tools */}
                  <div className="col-span-3 flex flex-wrap gap-1.5 pr-2">
                    {item.tools.map((t) => (
                      <span
                        key={t}
                        className="text-xs md:text-sm font-mono px-2.5 py-1 rounded bg-[#0A0A0B] text-[#A1A1AA] border border-[#222226]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Business Outcome */}
                  <div className="col-span-3 pr-4">
                    <p className="text-sm md:text-base text-[#A1A1AA] line-clamp-2 leading-relaxed font-sans">
                      {item.businessImpact}
                    </p>
                  </div>

                  {/* Action */}
                  <div className="col-span-1 text-right">
                    <button
                      onClick={() => setSelectedSystem(item)}
                      className="inline-flex items-center gap-1 text-xs md:text-sm font-mono text-[#D4AF37] hover:underline"
                    >
                      <span>Deep Dive</span>
                      <ArrowUpRight size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Card List View */}
          <div className="md:hidden space-y-4">
            {archiveAutomations.map((item, index) => (
              <div
                key={item.id}
                className="p-5 rounded-xl border border-[#222226] bg-[#121214] space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs md:text-sm font-mono text-[#D4AF37]">SYSTEM 0{index + 7}</span>
                  <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-[#18181B] text-[#10B981] border border-[#10B981]/30">
                    Deployed
                  </span>
                </div>

                <div>
                  <h4 className="text-lg font-bold font-display text-[#F4F4F0]">{item.title}</h4>
                  <p className="text-sm text-[#A1A1AA] mt-1 font-sans">{item.tagline}</p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {item.tools.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono px-2.5 py-1 rounded bg-[#18181B] text-[#8E8E93] border border-[#222226]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <p className="text-sm text-[#8E8E93] leading-relaxed pt-1">
                  {item.businessImpact}
                </p>

                <div className="pt-2">
                  <button
                    onClick={() => setSelectedSystem(item)}
                    className="inline-flex items-center justify-center gap-1.5 w-full py-3 rounded-lg bg-[#18181B] border border-[#222226] text-xs md:text-sm font-mono text-[#D4AF37] hover:bg-[#222226] transition-colors"
                  >
                    <span>View Architecture Specs</span>
                    <ArrowUpRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </RevealSection>
      </div>
    </div>
  )
}
