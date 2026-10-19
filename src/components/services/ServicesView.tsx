'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import MaskText from '@/components/motion/MaskText'
import RevealSection from '@/components/motion/RevealSection'
import {
  ArrowUpRight,
  CheckCircle2,
  Cpu,
  Clock,
  ChevronDown,
  Layers,
  Sparkles,
  Bot,
  Globe,
  ShoppingBag,
  ShieldCheck,
  Workflow,
} from 'lucide-react'
import { contactLinks } from '@/data/portfolio'

const pillars = [
  {
    number: '01',
    id: 'ai-automations',
    badge: 'FLAGSHIP CAPABILITY',
    title: 'AI Automations & Custom AI Agents',
    subtitle: 'Automate your customer support, phone calls, WhatsApp orders, and daily repetitive tasks.',
    icon: Bot,
    summary:
      'I build custom AI workflows using n8n, OpenAI, and Voice AI that answer customer inquiries, qualify leads, book appointments, and update your spreadsheets or CRM automatically.',
    deliverables: [
      '24/7 Inbound Voice AI Receptionist with live calendar booking & SMS confirmation',
      'Conversational WhatsApp & Web Chat ordering bots with line-item database parsing',
      'RAG knowledge bases loaded with company data for zero-hallucination customer support',
      'Automated executive inbox triage, attachment parsing, and operational spreadsheet logging',
      'Two-way appointment reminder engines that reschedule slots based on customer SMS replies',
    ],
    techStack: ['n8n', 'OpenAI GPT-4o', 'Vapi Voice AI', 'Pinecone Vector DB', 'Airtable', 'Twilio'],
    timeline: '2 – 3 Weeks per production workflow system',
    whatsappMessage: 'Hi Tejiri, I want to discuss building AI Automations & Custom AI Agents for my business.',
  },
  {
    number: '02',
    id: 'custom-web-apps',
    badge: 'CUSTOM ENGINEERING',
    title: 'Custom Web Applications & AI Platforms',
    subtitle: 'Full-stack web apps, booking platforms, client portals, and internal business tools.',
    icon: Globe,
    summary:
      'Need more than a standard website? I build fast, secure web applications with databases, user accounts, payment integration, and built-in AI features tailored to how your business operates.',
    deliverables: [
      'Next.js 16 + TypeScript full-stack architectural applications',
      'Real-time clinical, dental, or corporate appointment scheduling engines',
      'Bespoke client dashboards, authenticated portals, and role-based access systems',
      'Sub-second Core Web Vitals performance with clean editorial motion choreography',
      'Technical SEO architecture ensuring category authority in search rankings',
    ],
    techStack: ['Next.js 16', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'PostgreSQL', 'Supabase'],
    timeline: '3 – 5 Weeks from design system to production launch',
    whatsappMessage: 'Hi Tejiri, I want to discuss building a Custom Web Application or AI Platform.',
  },
  {
    number: '03',
    id: 'business-websites',
    badge: 'REVENUE ARCHITECTURE',
    title: 'Business Websites, Landing Pages & E-Commerce',
    subtitle: 'Clean, fast, mobile-ready websites designed to make your brand look professional and turn visitors into paying customers.',
    icon: ShoppingBag,
    summary:
      'From high-converting landing pages for your ads to full company websites and online stores with WhatsApp or card checkout — built to load fast and rank on Google.',
    deliverables: [
      'High-converting landing pages for paid ads and corporate brand flagships',
      'Mobile-first digital catalogs and restaurant menu flagships',
      'Direct-to-WhatsApp order dispatch and automated receipt generation',
      'Payment gateway integrations (Stripe, Paystack, Flutterwave) with instant link generation',
      'Sub-second page speeds with 95+ Google Lighthouse scores and Google schema',
    ],
    techStack: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'Flutterwave', 'WhatsApp Cloud API'],
    timeline: '2 – 3 Weeks to full commercial deployment',
    whatsappMessage: 'Hi Tejiri, I want to discuss building a Business Website, Landing Page, or E-Commerce flagship.',
  },
]

const processSteps = [
  {
    step: '01',
    title: 'Systems Audit & Architecture Spec',
    timeline: 'Days 1 – 4',
    description:
      'We audit your current operational bottlenecks, inquiry channels, and customer touchpoints. I deliver an architectural specification defining the exact data schemas, APIs, trigger points, and expected ROI before writing a line of code.',
  },
  {
    step: '02',
    title: 'Sprint Engineering & Staging',
    timeline: 'Weeks 1 – 3',
    description:
      'Full-stack development and workflow orchestration built in isolated staging environments. Every n8n node, database webhook, Vapi voice prompt, and Next.js component is engineered with fail-safe error recovery.',
  },
  {
    step: '03',
    title: 'Peer-Grade QA & Live Demo Walkthrough',
    timeline: 'Week 3 – 4',
    description:
      'Rigorous edge-case testing under live conditions (accent handling, concurrent webhooks, mobile viewport responsiveness). We conduct a private screen-share walkthrough to review telemetry, test edge cases, and refine copy.',
  },
  {
    step: '04',
    title: 'Production Deployment & Handover',
    timeline: 'Final Sprint',
    description:
      'Domain DNS cutover, cloud deployment (Vercel / VPS / Cloudflare), database migrations, and operational staff training. You receive full documentation, API credentials, and 30 days of active post-launch support.',
  },
]

export default function ServicesView() {
  const [openStep, setOpenStep] = useState<number | null>(0)

  return (
    <div className="bg-[#0A0A0B] bg-architectural-grid text-[#F4F4F0] min-h-screen pt-32 md:pt-40 pb-28">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-20">
        {/* ===================== 1. EDITORIAL HEADER ===================== */}
        <section className="space-y-6">
          <div className="flex items-center gap-2">
            <span className="text-xs md:text-sm font-mono uppercase tracking-widest text-[#D4AF37] font-semibold">
              03 · SERVICES &amp; SOLUTIONS
            </span>
          </div>

          <MaskText
            as="h1"
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.08] tracking-[-0.03em] font-display text-[#F4F4F0] max-w-4xl"
          >
            What I Can Build For Your Business.
          </MaskText>

          <p className="text-xl md:text-2xl text-[#A1A1AA] max-w-3xl leading-relaxed font-sans">
            Whether you need a modern website that wins customers, a custom web application, or AI automations that handle your calls, WhatsApp orders, and admin work 24/7 — here is exactly how I can help you grow.
          </p>
        </section>

        {/* ===================== 2. THE 3 HIGH-TICKET ENGINEERING PILLARS ===================== */}
        <section className="space-y-12">
          <div className="flex items-center justify-between border-b border-[#222226] pb-4">
            <div className="flex items-center gap-2">
              <Sparkles size={18} className="text-[#D4AF37]" />
              <h2 className="text-2xl md:text-3xl font-bold font-display text-[#F4F4F0]">
                Core Engineering Services
              </h2>
            </div>
            <span className="text-xs md:text-sm font-mono text-[#8E8E93]">
              3 Tailored Engagement Solutions
            </span>
          </div>

          <div className="space-y-12">
            {pillars.map((pillar) => {
              const Icon = pillar.icon
              const whatsappUrl = `https://wa.me/2347084721120?text=${encodeURIComponent(
                pillar.whatsappMessage
              )}`

              return (
                <RevealSection
                  key={pillar.id}
                  className="rounded-2xl border border-[#222226] bg-[#121214] p-6 sm:p-8 lg:p-10 hover:border-[#323238] transition-all space-y-8"
                >
                  {/* Top Bar: Pillar Number, Badge, Title & Icon */}
                  <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-6 border-b border-[#222226]">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2.5">
                        <span className="text-xs md:text-sm font-mono px-3 py-1 rounded bg-[#18181B] text-[#D4AF37] border border-[#222226] font-semibold">
                          SERVICE {pillar.number}
                        </span>
                        <span className="text-xs md:text-sm font-mono text-[#10B981] flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                          {pillar.badge}
                        </span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-[#F4F4F0]">
                        {pillar.title}
                      </h3>
                      <p className="text-base md:text-lg font-sans text-[#D4AF37] font-medium leading-relaxed">
                        {pillar.subtitle}
                      </p>
                    </div>

                    <div className="p-4 rounded-xl border border-[#222226] bg-[#18181B] text-[#D4AF37] shrink-0 self-start">
                      <Icon size={32} />
                    </div>
                  </div>

                  {/* Executive Summary / Description */}
                  <p className="text-base md:text-[17px] text-[#A1A1AA] leading-relaxed font-sans">
                    {pillar.summary}
                  </p>

                  {/* Concrete Deliverables Checklist */}
                  <div className="space-y-3 pt-2">
                    <span className="text-xs md:text-sm font-mono uppercase tracking-wider text-[#8E8E93]">
                      What You Receive (Concrete Deliverables):
                    </span>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                      {pillar.deliverables.map((item, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-3 p-3.5 rounded-xl border border-[#222226] bg-[#0A0A0B]/60"
                        >
                          <CheckCircle2 size={18} className="text-[#10B981] shrink-0 mt-0.5" />
                          <span className="text-sm md:text-base font-sans text-[#F4F4F0] leading-snug">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Strip: Tech Stack, Timeline & Scope CTA */}
                  <div className="pt-6 border-t border-[#222226] flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                    <div className="space-y-2.5">
                      <div className="flex items-center gap-2 text-xs md:text-sm font-mono text-[#8E8E93]">
                        <Clock size={15} className="text-[#D4AF37]" />
                        <span>Typical Delivery: <strong className="text-[#F4F4F0]">{pillar.timeline}</strong></span>
                      </div>

                      <div className="flex flex-wrap gap-2 pt-1">
                        {pillar.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs md:text-sm font-mono px-3 py-1 rounded bg-[#18181B] text-[#A1A1AA] border border-[#222226]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm md:text-base font-sans font-semibold bg-[#D4AF37] text-[#0A0A0B] hover:bg-[#E5A93C] transition-all shadow-[0_0_18px_rgba(212,175,55,0.18)] active:scale-95 shrink-0"
                    >
                      <span>Scope This Architecture</span>
                      <ArrowUpRight size={18} />
                    </a>
                  </div>
                </RevealSection>
              )
            })}
          </div>
        </section>

        {/* ===================== 3. HOW WE WORK: 4-STAGE ARCHITECTURAL PROCESS ===================== */}
        <RevealSection className="space-y-10 pt-12 border-t border-[#222226]">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Workflow size={18} className="text-[#D4AF37]" />
                <span className="text-xs md:text-sm font-mono uppercase tracking-widest text-[#D4AF37]">
                  Engagement Methodology
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#F4F4F0]">
                How Engagements Work
              </h2>
            </div>
            <p className="text-xs md:text-sm font-mono text-[#8E8E93]">
              A Rigorous 4-Stage Architectural Blueprint
            </p>
          </div>

          <div className="space-y-4">
            {processSteps.map((step, index) => {
              const isOpen = openStep === index

              return (
                <div
                  key={step.step}
                  className="rounded-2xl border border-[#222226] bg-[#121214] overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenStep(isOpen ? null : index)}
                    className="w-full px-6 sm:px-8 py-5 flex items-center justify-between text-left hover:bg-[#18181B] transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-sm md:text-base font-mono text-[#D4AF37] font-bold">
                        {step.step}.
                      </span>
                      <div>
                        <h4 className="text-lg sm:text-xl font-bold font-display text-[#F4F4F0]">
                          {step.title}
                        </h4>
                        <span className="text-xs md:text-sm font-mono text-[#8E8E93] sm:hidden block mt-0.5">
                          {step.timeline}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <span className="hidden sm:inline text-xs md:text-sm font-mono px-3 py-1 rounded bg-[#0A0A0B] text-[#8E8E93] border border-[#222226]">
                        {step.timeline}
                      </span>
                      <ChevronDown
                        size={18}
                        className={`text-[#8E8E93] transition-transform duration-300 ${
                          isOpen ? 'rotate-180 text-[#D4AF37]' : ''
                        }`}
                      />
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden border-t border-[#222226] bg-[#0A0A0B]/60 px-6 sm:px-8 py-5"
                      >
                        <p className="text-base md:text-[17px] text-[#A1A1AA] leading-relaxed font-sans max-w-3xl">
                          {step.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>
        </RevealSection>

        {/* ===================== 4. BOTTOM DIRECT SCOPING CTA ===================== */}
        <section className="p-8 sm:p-12 rounded-2xl border border-[#222226] bg-[#121214] flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs md:text-sm font-mono text-[#D4AF37] uppercase tracking-wider">
              Ready to eliminate operational friction?
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#F4F4F0] font-display">
              Initiate a 20-Minute Technical Architecture Call
            </h3>
            <p className="text-base md:text-[17px] text-[#A1A1AA] max-w-xl leading-relaxed">
              We will map out your current workflows, calculate prospective automation hours, and define the scope of your build.
            </p>
          </div>

          <a
            href={contactLinks.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-8 py-4 rounded-xl text-base font-sans font-semibold bg-[#D4AF37] text-[#0A0A0B] hover:bg-[#E5A93C] transition-all duration-200 active:scale-95 shadow-[0_0_20px_rgba(212,175,55,0.2)] flex items-center gap-2"
          >
            <span>Book Consultation via WhatsApp</span>
            <ArrowUpRight size={18} />
          </a>
        </section>
      </div>
    </div>
  )
}
