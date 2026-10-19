import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import MaskText from '@/components/motion/MaskText'
import RevealSection from '@/components/motion/RevealSection'
import WorkflowPipeline from '@/components/ui/WorkflowPipeline'
import ProjectPreview from '@/components/ui/ProjectPreview'
import {
  ArrowUpRight,
  ArrowRight,
  CheckCircle2,
  Cpu,
  Globe,
  ExternalLink,
  Award,
} from 'lucide-react'
import {
  projects,
  priorityAutomations,
  techPills,
  builderCredential,
  contactLinks,
} from '@/data/portfolio'

export default function Home() {
  const flagshipAutomation = priorityAutomations[0]
  const flagshipWebA = projects[0] // Mama Tee's AI Ordering App
  const flagshipWebB = projects[1] // DentalCare HQ

  return (
    <>
      <Navbar />

      <main className="min-h-screen pt-28 md:pt-36 pb-24 bg-[#0A0A0B] bg-architectural-grid">
        {/* ===================== 1. CINEMATIC HERO SECTION ===================== */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 pt-6 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Heading, Lead Copy, Dual CTAs & Tech Stack */}
            <div className="lg:col-span-7 space-y-8">
              {/* Main Headline with MaskText editorial line reveal */}
              <div>
                <span className="inline-block text-xs md:text-sm font-mono tracking-widest uppercase text-[#D4AF37] font-semibold mb-3">
                  Tejiri Gbenedio · Portfolio
                </span>
                <MaskText
                  as="h1"
                  className="text-5xl sm:text-6xl lg:text-[72px] font-bold leading-[1.06] tracking-[-0.03em] font-display text-[#F4F4F0]"
                >
                  AI Automation &amp;
                  Full-Stack Developer.
                </MaskText>
              </div>

              {/* Lead Paragraph */}
              <p className="text-xl md:text-2xl leading-relaxed text-[#A1A1AA] max-w-2xl font-sans">
                I engineer autonomous AI agents, enterprise n8n workflow pipelines, and studio-grade Next.js web applications that eliminate operational bottlenecks and turn visitors into high-ticket clients.
              </p>

              {/* Dual Action Triggers */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <a
                  href={contactLinks.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base font-sans font-semibold bg-[#D4AF37] text-[#0A0A0B] hover:bg-[#E5A93C] transition-all duration-200 active:scale-95 shadow-[0_0_25px_rgba(212,175,55,0.22)]"
                >
                  <span>Let&apos;s Have A Talk</span>
                  <ArrowUpRight size={18} className="text-[#0A0A0B]" />
                </a>

                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base font-sans font-medium text-[#F4F4F0] border border-[#222226] bg-[#121214] hover:bg-[#18181B] hover:border-[#323238] transition-all duration-200 active:scale-95"
                >
                  <span>View All Projects</span>
                  <ArrowRight size={18} className="text-[#A1A1AA]" />
                </Link>
              </div>

              {/* Architectural Tech Stack Strip */}
              <div className="pt-6 border-t border-[#222226] space-y-3">
                <p className="text-xs md:text-sm font-mono uppercase tracking-widest text-[#8E8E93]">
                  Core Engineering Stack
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {techPills.map((tech) => (
                    <span
                      key={tech}
                      className="px-3.5 py-1.5 text-xs md:text-sm font-mono bg-[#121214] border border-[#222226] text-[#A1A1AA] rounded-md hover:text-[#F4F4F0] hover:border-[#323238] transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Framed Portrait + Verified StackedHQ Badge */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md">
                {/* Framed Card Container */}
                <div className="relative rounded-2xl p-3 bg-[#121214] border border-[#222226] shadow-2xl">
                  {/* Portrait Image Frame */}
                  <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-[#0A0A0B]">
                    <Image
                      src="/tejiri-portrait.jpg"
                      alt="Tejiri Gbenedio — AI Automation & Full-Stack Developer"
                      fill
                      priority
                      className="object-cover object-top transition-transform duration-700 hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 450px"
                    />
                  </div>

                  {/* Overlapping Brushed Brass Badge with High Contrast */}
                  <a
                    href={builderCredential.profileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute -bottom-4 -right-2 sm:-right-4 px-4 py-2.5 rounded-xl bg-[#D4AF37] text-[#0A0A0B] font-mono font-bold shadow-2xl border border-[#F4F4F0]/20 flex items-center gap-2 hover:bg-[#E5A93C] hover:scale-[1.02] active:scale-[0.98] transition-all group z-10"
                  >
                    <CheckCircle2 size={16} className="text-[#0A0A0B] shrink-0 stroke-[2.5]" />
                    <span className="text-xs sm:text-sm font-mono font-bold tracking-tight text-[#0A0A0B]">
                      VERIFIED STACKEDHQ MEMBER
                    </span>
                    <ArrowUpRight size={14} className="text-[#0A0A0B] opacity-90 group-hover:opacity-100 transition-opacity" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================== 2. FLAGSHIP DUAL-PREVIEW SECTION ===================== */}
        <RevealSection className="max-w-7xl mx-auto px-6 md:px-12 pt-16 pb-20 border-t border-[#222226]">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#D4AF37] font-semibold">
                Dual-Discipline Showcase
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F4F4F0] mt-2 font-display">
                Production Systems in Action.
              </h2>
              <p className="text-base md:text-lg text-[#A1A1AA] max-w-2xl mt-3 font-sans">
                A live look into our flagship autonomous AI orchestration and studio-grade web engineering.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Link
                href="/automations"
                className="px-4 py-2 rounded-lg text-sm font-mono border border-[#222226] bg-[#121214] hover:bg-[#18181B] text-[#A1A1AA] hover:text-[#F4F4F0] transition-colors"
              >
                All Automations →
              </Link>
              <Link
                href="/projects"
                className="px-4 py-2 rounded-lg text-sm font-mono border border-[#222226] bg-[#121214] hover:bg-[#18181B] text-[#A1A1AA] hover:text-[#F4F4F0] transition-colors"
              >
                All Web Projects →
              </Link>
            </div>
          </div>

          {/* 1. Flagship AI Automation Card */}
          <div className="rounded-2xl border border-[#222226] bg-[#121214] p-6 sm:p-8 lg:p-10 mb-12 hover:border-[#323238] transition-all">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-[#222226]">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-2.5 py-1 rounded-full text-xs font-mono uppercase tracking-wider bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/30">
                    Flagship Automation
                  </span>
                  <span className="text-xs font-mono text-[#8E8E93]">
                    Peer-Reviewed StackedHQ Build
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#F4F4F0] font-display">
                  {flagshipAutomation.title}
                </h3>
              </div>

              <Link
                href="/automations"
                className="inline-flex items-center gap-2 text-sm font-mono text-[#D4AF37] hover:text-[#E5A93C] transition-colors"
              >
                <span>View Full Pipeline Specs</span>
                <ArrowRight size={16} />
              </Link>
            </div>

            <p className="text-base md:text-lg text-[#A1A1AA] leading-relaxed my-6 font-sans">
              {flagshipAutomation.businessImpact}
            </p>

            {/* Live Interactive Workflow Pipeline */}
            <div className="py-4">
              <WorkflowPipeline nodes={flagshipAutomation.pipeline} />
            </div>

            {/* Tools Used Strip */}
            <div className="mt-6 pt-6 border-t border-[#222226] flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono uppercase text-[#8E8E93] mr-2">
                Orchestration Layer:
              </span>
              {flagshipAutomation.tools.map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1 text-xs font-mono rounded bg-[#18181B] border border-[#222226] text-[#F4F4F0]"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* 2. Flagship Web Engineering Spotlight Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Card A: Mama Tee's AI Ordering App */}
            <div className="rounded-2xl border border-[#222226] bg-[#121214] overflow-hidden flex flex-col justify-between hover:border-[#323238] transition-all group">
              <ProjectPreview
                title={flagshipWebA.title}
                image={flagshipWebA.image}
                liveUrl={flagshipWebA.liveUrl}
                category={flagshipWebA.category}
              />

              <div className="p-6 sm:p-8 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl md:text-2xl font-bold text-[#F4F4F0] font-display">
                    {flagshipWebA.title}
                  </h3>
                  {flagshipWebA.liveUrl && (
                    <a
                      href={flagshipWebA.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg border border-[#222226] bg-[#18181B] text-[#A1A1AA] hover:text-[#F4F4F0] hover:border-[#D4AF37] transition-all"
                      aria-label={`Open ${flagshipWebA.title} live demo`}
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>

                <p className="text-sm md:text-base text-[#A1A1AA] leading-relaxed font-sans">
                  {flagshipWebA.summary}
                </p>

                <div className="pt-2 flex flex-wrap gap-2">
                  {flagshipWebA.techStack.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono px-2.5 py-1 rounded bg-[#18181B] text-[#8E8E93] border border-[#222226]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Card B: DentalCare HQ */}
            <div className="rounded-2xl border border-[#222226] bg-[#121214] overflow-hidden flex flex-col justify-between hover:border-[#323238] transition-all group">
              <ProjectPreview
                title={flagshipWebB.title}
                image={flagshipWebB.image}
                liveUrl={flagshipWebB.liveUrl}
                category={flagshipWebB.category}
              />

              <div className="p-6 sm:p-8 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl md:text-2xl font-bold text-[#F4F4F0] font-display">
                    {flagshipWebB.title}
                  </h3>
                  {flagshipWebB.liveUrl && (
                    <a
                      href={flagshipWebB.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg border border-[#222226] bg-[#18181B] text-[#A1A1AA] hover:text-[#F4F4F0] hover:border-[#D4AF37] transition-all"
                      aria-label={`Open ${flagshipWebB.title} live demo`}
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>

                <p className="text-sm md:text-base text-[#A1A1AA] leading-relaxed font-sans">
                  {flagshipWebB.summary}
                </p>

                <div className="pt-2 flex flex-wrap gap-2">
                  {flagshipWebB.techStack.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono px-2.5 py-1 rounded bg-[#18181B] text-[#8E8E93] border border-[#222226]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </RevealSection>

        {/* ===================== 3. CREDIBILITY & DIRECT INQUIRY STRIP ===================== */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-12">
          <div className="p-8 sm:p-12 rounded-2xl border border-[#222226] bg-[#121214] flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-2 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 text-xs font-mono text-[#D4AF37] uppercase tracking-wider">
                <Award size={16} />
                <span>Verified StackedHQ Builder · 14 Peer-Reviewed Builds</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#F4F4F0] font-display">
                Need an Autonomous System or Flagship Web Application?
              </h3>
              <p className="text-sm sm:text-base text-[#A1A1AA] max-w-xl">
                I take on select engineering contracts to build resilient AI workflows and high-converting modern platforms.
              </p>
            </div>

            <a
              href={contactLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 px-8 py-4 rounded-xl text-base font-sans font-semibold bg-[#D4AF37] text-[#0A0A0B] hover:bg-[#E5A93C] transition-all duration-200 active:scale-95 shadow-[0_0_20px_rgba(212,175,55,0.2)] flex items-center gap-2"
            >
              <span>Initiate Direct Consultation</span>
              <ArrowUpRight size={18} />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
