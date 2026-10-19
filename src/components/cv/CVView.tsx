'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import MaskText from '@/components/motion/MaskText'
import RevealSection from '@/components/motion/RevealSection'
import {
  Download,
  ExternalLink,
  FileText,
  CheckCircle2,
  Award,
  Sparkles,
  MapPin,
  Mail,
  Phone,
  Eye,
  ArrowUpRight,
  Code2,
  Database,
  Cpu,
  Layers,
  ShieldCheck,
  ChevronRight,
  Briefcase,
  GraduationCap,
} from 'lucide-react'
import { builderCredential, contactLinks, cv } from '@/data/portfolio'

export default function CVView() {
  const [showPdfModal, setShowPdfModal] = useState(false)

  const experience = [
    {
      role: 'Verified Founding Builder & Automation Engineer',
      organization: 'StackedHQ Builder Network',
      location: 'Global Remote',
      badge: '965 STACKS EARNED · 14 PEER-REVIEWED BUILDS',
      summary:
        'Selected as a founding builder on StackedHQ, an elite peer-reviewed engineering platform for production automation architectures. Engineered 14 full-scale autonomous systems across voice, chat, multi-modal RAG, and business operations.',
      bullets: [
        'Built sub-600ms conversational Voice AI receptionists integrating Vapi, Groq (Llama 3.3 70B), and Google Calendar for hands-free clinical and service booking.',
        'Architected multi-model RAG pipelines using OpenAI text-embedding-3-small, Pinecone Vector DB, and hybrid semantic retrieval for automated legal, policy, and inventory query resolution.',
        'Engineered zero-data-loss n8n orchestration engines connecting WhatsApp Cloud API, Airtable bases, Gmail triggers, and payment gateway webhooks.',
        'Achieved 100% peer-approval rate across all 14 published systems with 965 cumulative Stacks awarded by engineering reviewers.',
      ],
      tech: ['n8n', 'Vapi Voice AI', 'OpenAI GPT-4o', 'Groq Llama 3.3', 'Pinecone', 'WhatsApp API', 'Airtable'],
    },
    {
      role: 'Principal Full-Stack Engineer & AI Architect',
      organization: 'Independent Client Advisory & Production Studio',
      location: 'Lagos, Nigeria · Global Clients',
      badge: '6+ PRODUCTION PLATFORMS DEPLOYED',
      summary:
        'Architect and deploy high-performance web applications and conversion-engineered digital flagships for medical practices, renewable energy firms, gourmet hospitality brands, and technology startups.',
      bullets: [
        'Designed and shipped DentalCare HQ, a high-conversion patient acquisition portal with custom scheduling workflows, achieving sub-second load times and 98+ Lighthouse scores.',
        'Engineered Rayvora Solar, a commercial solar quotation and enterprise acquisition platform with interactive system calculators and CRM lead ingestion.',
        'Developed Mutiee Bakes digital flagship, replacing static social media orders with an interactive product catalog connected to an automated WhatsApp order engine.',
        'Built full-stack ordering and kitchen dispatch prototypes (Mama Tee’s Kitchen & AI Ordering Suite) featuring live order queues and instant customer SMS updates.',
      ],
      tech: ['Next.js 16', 'TypeScript', 'Tailwind CSS', 'React 19', 'Framer Motion', 'PostgreSQL', 'Supabase'],
    },
    {
      role: 'Frontend & Web Applications Developer',
      organization: 'Digital Solutions & Product Engagements',
      location: 'Hybrid / Remote',
      badge: 'CLIENT SYSTEMS',
      summary:
        'Developed responsive client-facing interfaces, custom single-page applications, and interactive web tools with rigorous attention to responsive layouts, cross-browser compatibility, and search performance.',
      bullets: [
        'Built scalable component design systems in React and TypeScript with strict CSS variable tokens and accessibility compliance.',
        'Integrated third-party REST APIs, headless CMS backends, and Stripe/Paystack payment flows.',
        'Optimized client web assets to improve Core Web Vitals, reducing LCP by 45% and eliminating layout shifts.',
      ],
      tech: ['React', 'JavaScript (ES6+)', 'HTML5 / CSS3', 'Tailwind CSS', 'REST APIs', 'Git'],
    },
  ]

  const keyAchievements = [
    {
      stat: '965',
      label: 'Stacks Earned on StackedHQ',
      detail: 'Ranked among top verified founding builders on the premier automation marketplace.',
    },
    {
      stat: '14',
      label: 'Peer-Reviewed Architectures',
      detail: 'All systems audited and verified for production reliability, error handling, and security.',
    },
    {
      stat: '98+',
      label: 'Avg. Lighthouse Performance',
      detail: 'Clean semantic Next.js App Router codebases with minimal bundle overhead and instant paint.',
    },
    {
      stat: '<600ms',
      label: 'Voice AI Latency Threshold',
      detail: 'Engineered natural turn-taking telephonic agents via Groq Llama 3.3 and Vapi pipelines.',
    },
  ]

  const stackDisciplines = [
    {
      title: 'AI & Workflow Automation',
      icon: Cpu,
      skills: [
        'n8n Orchestration (Self-Hosted & Cloud)',
        'Vapi Voice AI Phone Agents',
        'OpenAI GPT-4o / GPT-4o-mini',
        'Groq / Llama 3.3 70B Fast Inference',
        'Pinecone Vector Database (RAG)',
        'WhatsApp Cloud API & Twilio',
      ],
    },
    {
      title: 'Frontend & Interactive',
      icon: Code2,
      skills: [
        'Next.js 16 (App Router, Server Components)',
        'TypeScript (Strict Type Safety)',
        'React 19 & React Server Actions',
        'Tailwind CSS & Custom Design Tokens',
        'Framer Motion Physics & Orchestration',
        'Responsive Ergonomics & A11y',
      ],
    },
    {
      title: 'Backend, Cloud & Data',
      icon: Database,
      skills: [
        'Node.js & Edge Runtime',
        'PostgreSQL & Supabase Realtime',
        'Airtable Enterprise Bases & APIs',
        'REST, GraphQL & Webhook Gateways',
        'Fail-Safe Retry Queues & Idempotency',
        'Git / GitHub & Vercel CI/CD',
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-[#0A0A0B] text-[#F4F4F0] pt-28 pb-32">
      {/* Sticky Executive Action Bar */}
      <div className="sticky top-20 z-40 bg-[#121214]/90 backdrop-blur-xl border-y border-[#222226] py-3.5 mb-12 shadow-2xl">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-pulse" />
            <div>
              <p className="font-sans text-base md:text-[17px] font-semibold text-[#F4F4F0] tracking-tight">
                Tejiri Gbenedio <span className="text-[#A1A1AA] font-normal hidden sm:inline">— AI Automation Specialist & Full-Stack Developer</span>
              </p>
              <p className="font-mono text-xs md:text-sm text-[#A1A1AA] flex items-center gap-2">
                <span>Updated April 2026</span>
                <span>·</span>
                <span className="text-[#D4AF37]">Verified StackedHQ Builder (965 Stacks)</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <button
              onClick={() => setShowPdfModal(true)}
              className="flex-1 md:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-md bg-[#18181B] hover:bg-[#222226] text-[#F4F4F0] border border-[#27272A] hover:border-[#D4AF37]/40 text-xs md:text-sm font-medium transition-all"
            >
              <Eye className="w-4 h-4 text-[#D4AF37]" />
              <span>Preview PDF Document</span>
            </button>

            <a
              href={contactLinks.cvPdf}
              download="Tejiri-Gbenedio-CV.pdf"
              className="flex-1 md:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md bg-[#D4AF37] hover:bg-[#E5A93C] text-[#0A0A0B] font-mono text-xs md:text-sm font-bold tracking-tight transition-all duration-200 shadow-lg shadow-[#D4AF37]/20 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Download className="w-4 h-4" />
              <span>Download Official CV (PDF)</span>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Editorial Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 font-mono text-xs md:text-sm tracking-widest text-[#D4AF37] uppercase mb-4 font-semibold">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
            <span>05 · CURRICULUM VITAE &amp; TECHNICAL DOSSIER</span>
          </div>

          <div className="max-w-4xl">
            <MaskText>
              <h1 className="font-sans text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F4F4F0] leading-[1.08] mb-6">
                Engineering Experience, Built for Production.
              </h1>
            </MaskText>
            <p className="text-xl md:text-2xl text-[#A1A1AA] font-normal leading-relaxed max-w-3xl">
              An interactive technical record of full-stack web platforms engineered, autonomous multi-agent pipelines deployed, and peer-reviewed automation blueprints verified on StackedHQ.
            </p>
          </div>
        </div>

        {/* 2-Column Structured Web Resume */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Column (8 cols) */}
          <div className="lg:col-span-8 space-y-12">
            {/* Section 1: Executive Profile */}
            <RevealSection>
              <div className="bg-[#121214] border border-[#222226] rounded-xl p-8 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />
                <div className="flex items-center gap-3 font-mono text-xs md:text-sm text-[#D4AF37] tracking-wider uppercase mb-4 font-semibold">
                  <Briefcase className="w-4 h-4" />
                  <span>Executive Profile</span>
                </div>
                <h2 className="font-sans text-2xl sm:text-3xl font-bold text-[#F4F4F0] mb-4 tracking-tight">
                  Systems Architect Bridging High-Contrast Interfaces with Autonomous Intelligence
                </h2>
                <div className="space-y-4 text-base md:text-[17px] text-[#A1A1AA] leading-relaxed">
                  <p>
                    Full-Stack Software Engineer and AI Automation Specialist with deep expertise in modern React/Next.js App Router ecosystems, Node.js edge architecture, and autonomous multi-agent orchestration via n8n, Vapi Voice AI, and Pinecone RAG.
                  </p>
                  <p>
                    Recognized as a verified founding builder on <strong className="text-[#F4F4F0]">StackedHQ</strong> with <strong className="text-[#D4AF37]">965 Stacks earned</strong> across 14 peer-reviewed production automation blueprints. Proven track record delivering end-to-end client applications for international brands, combining high-ticket visual craft with bulletproof operational backends.
                  </p>
                  <p>
                    Passionate about deterministic systems design: rejecting fragile low-code shortcuts in favor of strict type safety, structured JSON outputs, robust webhook retry queues, and sub-600ms telephonic agent execution.
                  </p>
                </div>
              </div>
            </RevealSection>

            {/* Section 2: Architectural Achievements Grid */}
            <RevealSection delay={0.1}>
              <div>
                <div className="flex items-center gap-3 font-mono text-xs md:text-sm text-[#D4AF37] tracking-wider uppercase mb-5 font-semibold">
                  <Award className="w-4 h-4" />
                  <span>Key Architectural Metrics</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {keyAchievements.map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-[#121214] border border-[#222226] rounded-xl p-6 hover:border-[#D4AF37]/40 transition-colors"
                    >
                      <div className="font-mono text-3xl sm:text-4xl font-bold text-[#D4AF37] mb-2 tracking-tight">
                        {item.stat}
                      </div>
                      <div className="font-sans text-base md:text-lg font-semibold text-[#F4F4F0] mb-1.5">
                        {item.label}
                      </div>
                      <p className="text-sm text-[#A1A1AA] leading-relaxed">
                        {item.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </RevealSection>

            {/* Section 3: Engineering Experience (WITHOUT YEARS) */}
            <RevealSection delay={0.2}>
              <div>
                <div className="flex items-center gap-3 font-mono text-xs md:text-sm text-[#D4AF37] tracking-wider uppercase mb-6 font-semibold">
                  <Layers className="w-4 h-4" />
                  <span>Production Engineering Experience</span>
                </div>

                <div className="space-y-8">
                  {experience.map((exp, idx) => (
                    <div
                      key={idx}
                      className="bg-[#121214] border border-[#222226] rounded-xl p-8 hover:border-[#333338] transition-all relative"
                    >
                      {/* Top Row: Role Title & Badge cleanly (NO YEARS) */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                        <h3 className="font-sans text-xl sm:text-2xl font-bold text-[#F4F4F0] tracking-tight">
                          {exp.role}
                        </h3>
                        <span className="font-mono text-xs md:text-sm text-[#D4AF37] bg-[#18181B] px-3 py-1 rounded border border-[#27272A] self-start sm:self-auto font-medium">
                          {exp.badge}
                        </span>
                      </div>

                      <p className="text-base font-medium text-[#A1A1AA] mb-4">
                        {exp.organization} · <span className="font-mono text-sm text-[#71717A]">{exp.location}</span>
                      </p>

                      <p className="text-[#D4D4D8] text-base md:text-[17px] leading-relaxed mb-5 font-sans">
                        {exp.summary}
                      </p>

                      <ul className="space-y-3 mb-6">
                        {exp.bullets.map((bullet, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-3 text-base text-[#A1A1AA] leading-relaxed font-sans">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mt-2.5 shrink-0" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2 pt-4 border-t border-[#222226]">
                        {exp.tech.map((t, tIdx) => (
                          <span
                            key={tIdx}
                            className="font-mono text-xs md:text-sm px-3 py-1 rounded bg-[#18181B] text-[#A1A1AA] border border-[#27272A]"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </RevealSection>

            {/* Section 4: Education & Certifications */}
            <RevealSection delay={0.3}>
              <div className="bg-[#121214] border border-[#222226] rounded-xl p-8">
                <div className="flex items-center gap-3 font-mono text-xs md:text-sm text-[#D4AF37] tracking-wider uppercase mb-5 font-semibold">
                  <GraduationCap className="w-4 h-4" />
                  <span>Verified Credentials &amp; Education</span>
                </div>

                <div className="space-y-5">
                  <div className="flex items-start justify-between gap-4 pb-5 border-b border-[#222226]">
                    <div>
                      <h4 className="font-sans text-lg font-bold text-[#F4F4F0]">
                        Verified Founding Builder (965 Stacks)
                      </h4>
                      <p className="text-base text-[#A1A1AA]">
                        StackedHQ Automation Engineering Platform
                      </p>
                      <p className="font-mono text-xs md:text-sm text-[#71717A] mt-1">
                        14 Peer-Reviewed Production Automations Verified · April 2026
                      </p>
                    </div>
                    <a
                      href={builderCredential.profileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-xs md:text-sm text-[#D4AF37] hover:underline flex items-center gap-1 shrink-0"
                    >
                      <span>Verify</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  <div>
                    <h4 className="font-sans text-lg font-bold text-[#F4F4F0]">
                      Continuous Self-Directed Systems &amp; AI Engineering
                    </h4>
                    <p className="text-base text-[#A1A1AA]">
                      Production Mastery in Next.js 16, Distributed Agent Architectures &amp; Vector Search
                    </p>
                    <p className="font-mono text-xs md:text-sm text-[#71717A] mt-1">
                      Comprehensive portfolio of live client flagships and open-source contributions.
                    </p>
                  </div>
                </div>
              </div>
            </RevealSection>
          </div>

          {/* Right Sidebar (4 cols) */}
          <div className="lg:col-span-4 space-y-8 lg:sticky lg:top-36">
            {/* Framed Official PDF Card */}
            <div className="bg-[#121214] border border-[#222226] rounded-xl p-6 shadow-xl relative overflow-hidden group">
              <div className="flex items-center justify-between mb-4">
                <div className="font-mono text-xs md:text-sm text-[#D4AF37] uppercase tracking-wider flex items-center gap-2 font-semibold">
                  <FileText className="w-4 h-4" />
                  <span>Official Document</span>
                </div>
                <span className="font-mono text-xs text-[#A1A1AA] bg-[#18181B] px-2.5 py-1 rounded border border-[#27272A]">
                  PDF · 114 KB
                </span>
              </div>

              {/* Framed preview image */}
              <div
                onClick={() => setShowPdfModal(true)}
                className="cursor-pointer relative aspect-[3/4] w-full rounded-lg overflow-hidden border border-[#27272A] mb-4 bg-[#0A0A0B] transition-transform duration-300 group-hover:scale-[1.01]"
              >
                <Image
                  src={cv.previewImage}
                  alt="Tejiri Gbenedio Official CV Document Preview"
                  fill
                  className="object-cover object-top filter brightness-[0.92] group-hover:brightness-100 transition-all duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B]/90 via-transparent to-transparent flex items-end p-4">
                  <div className="w-full flex items-center justify-between text-xs font-mono text-[#F4F4F0] bg-[#121214]/90 backdrop-blur px-3 py-2 rounded border border-[#27272A]">
                    <span className="flex items-center gap-1.5 text-[#D4AF37]">
                      <Eye className="w-3.5 h-3.5" />
                      <span>Click to preview</span>
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#A1A1AA]" />
                  </div>
                </div>
              </div>

              <div className="space-y-2.5">
                <a
                  href={contactLinks.cvPdf}
                  download="Tejiri-Gbenedio-CV.pdf"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-md bg-[#D4AF37] hover:bg-[#E5A93C] text-[#0A0A0B] font-mono text-xs md:text-sm font-bold tracking-tight transition-all duration-200 shadow-md shadow-[#D4AF37]/20"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Official CV (PDF)</span>
                </a>

                <button
                  onClick={() => setShowPdfModal(true)}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-md bg-[#18181B] hover:bg-[#222226] text-[#F4F4F0] border border-[#27272A] text-xs md:text-sm font-medium transition-all"
                >
                  <Eye className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Read Fullscreen in Browser</span>
                </button>
              </div>
            </div>

            {/* Technical Stack by Discipline */}
            <div className="bg-[#121214] border border-[#222226] rounded-xl p-6 shadow-xl">
              <div className="font-mono text-xs md:text-sm text-[#D4AF37] uppercase tracking-wider mb-5 flex items-center gap-2 font-semibold">
                <Cpu className="w-4 h-4" />
                <span>Technical Stack by Discipline</span>
              </div>

              <div className="space-y-6">
                {stackDisciplines.map((disc, idx) => {
                  const Icon = disc.icon
                  return (
                    <div key={idx} className="space-y-2.5">
                      <div className="flex items-center gap-2 text-base font-semibold text-[#F4F4F0]">
                        <Icon className="w-4 h-4 text-[#D4AF37]" />
                        <span>{disc.title}</span>
                      </div>
                      <ul className="space-y-2 pl-6">
                        {disc.skills.map((skill, sIdx) => (
                          <li key={sIdx} className="font-mono text-xs md:text-sm text-[#A1A1AA] flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#3F3F46]" />
                            <span>{skill}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Direct Contact Channels */}
            <div className="bg-[#121214] border border-[#222226] rounded-xl p-6 shadow-xl">
              <div className="font-mono text-xs md:text-sm text-[#D4AF37] uppercase tracking-wider mb-4 flex items-center gap-2 font-semibold">
                <ShieldCheck className="w-4 h-4" />
                <span>Direct Contact Channels</span>
              </div>

              <div className="space-y-3 font-mono text-xs md:text-sm">
                <a
                  href={`mailto:${contactLinks.email}`}
                  className="flex items-center justify-between p-3.5 rounded-lg bg-[#18181B] border border-[#27272A] hover:border-[#D4AF37]/50 text-[#F4F4F0] transition-colors"
                >
                  <div className="flex items-center gap-2.5 text-[#A1A1AA]">
                    <Mail className="w-4 h-4 text-[#D4AF37]" />
                    <span className="text-[#F4F4F0]">{contactLinks.email}</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#71717A]" />
                </a>

                <a
                  href={contactLinks.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-lg bg-[#18181B] border border-[#27272A] hover:border-[#D4AF37]/50 text-[#F4F4F0] transition-colors"
                >
                  <div className="flex items-center gap-2.5 text-[#A1A1AA]">
                    <Phone className="w-4 h-4 text-[#10B981]" />
                    <span className="text-[#F4F4F0]">{contactLinks.whatsappDisplay}</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#71717A]" />
                </a>

                <a
                  href={contactLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-lg bg-[#18181B] border border-[#27272A] hover:border-[#D4AF37]/50 text-[#F4F4F0] transition-colors"
                >
                  <div className="flex items-center gap-2.5 text-[#A1A1AA]">
                    <span className="w-4 h-4 text-[#D4AF37] font-bold text-center">in</span>
                    <span className="text-[#F4F4F0]">LinkedIn Profile</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-[#71717A]" />
                </a>

                <a
                  href={contactLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-lg bg-[#18181B] border border-[#27272A] hover:border-[#D4AF37]/50 text-[#F4F4F0] transition-colors"
                >
                  <div className="flex items-center gap-2.5 text-[#A1A1AA]">
                    <span className="w-4 h-4 text-[#D4AF37] font-mono font-bold text-center">gh</span>
                    <span className="text-[#F4F4F0]">GitHub Repositories</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-[#71717A]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PDF Modal Preview */}
      {showPdfModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-5xl h-[90vh] bg-[#121214] border border-[#222226] rounded-2xl shadow-2xl flex flex-col overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#222226] bg-[#18181B]">
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-[#D4AF37]" />
                <div>
                  <h3 className="font-sans text-base font-bold text-[#F4F4F0]">
                    Tejiri-Gbenedio-CV.pdf
                  </h3>
                  <p className="font-mono text-xs text-[#A1A1AA]">
                    Official Curriculum Vitae · Verified April 2026
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={contactLinks.cvPdf}
                  download="Tejiri-Gbenedio-CV.pdf"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded bg-[#D4AF37] text-[#0A0A0B] font-mono text-xs md:text-sm font-bold hover:bg-[#E5A93C] transition-colors"
                >
                  <Download className="w-4 h-4" />
                  <span>Download PDF</span>
                </a>
                <button
                  onClick={() => setShowPdfModal(false)}
                  className="px-3.5 py-2 rounded bg-[#27272A] hover:bg-[#333338] text-xs md:text-sm font-mono text-[#F4F4F0] transition-colors"
                >
                  Close [ESC]
                </button>
              </div>
            </div>

            <div className="flex-1 w-full h-full bg-[#0A0A0B] p-2 sm:p-4">
              <iframe
                src={`${contactLinks.cvPdf}#view=FitH`}
                title="Tejiri Gbenedio CV Document Preview"
                className="w-full h-full rounded border border-[#27272A]"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
