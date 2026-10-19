'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import MaskText from '@/components/motion/MaskText'
import RevealSection from '@/components/motion/RevealSection'
import {
  ArrowUpRight,
  Award,
  CheckCircle2,
  Code2,
  Database,
  Cpu,
  MapPin,
  Sparkles,
  Layers,
  Quote,
  ExternalLink,
} from 'lucide-react'
import { builderCredential, contactLinks, testimonials, projects } from '@/data/portfolio'

const architectureLayers = [
  {
    layerNumber: '01',
    layerTitle: 'Frontend & Interactive Systems',
    subtitle: 'High-contrast editorial UI with sub-second performance.',
    description:
      'I engineer responsive, accessible web interfaces that reject generic AI templates. Every interaction is governed by custom cubic-bezier easing physics, strict typographic hierarchy, and responsive mobile ergonomics.',
    stack: [
      { name: 'Next.js 16 (App Router)', role: 'Core Framework & SSR' },
      { name: 'TypeScript', role: 'Strict Type Safety' },
      { name: 'React 19', role: 'Component Architecture' },
      { name: 'Tailwind CSS', role: 'Engineered Design Tokens' },
      { name: 'Framer Motion', role: 'Editorial Physics & Easing' },
    ],
    icon: Code2,
  },
  {
    layerNumber: '02',
    layerTitle: 'Backend, Databases & Cloud',
    subtitle: 'Resilient schemas, fail-safe webhooks, and scalable infrastructure.',
    description:
      'Behind every slick user interface sits a hardened data layer. I design PostgreSQL schemas, real-time Supabase subscriptions, and Airtable operations bases equipped with schema validation and automated retries.',
    stack: [
      { name: 'Node.js & Edge Runtime', role: 'Serverless Functions' },
      { name: 'PostgreSQL / Supabase', role: 'Relational Central Storage' },
      { name: 'Pinecone Vector DB', role: 'Semantic Retrieval & RAG' },
      { name: 'Airtable API', role: 'Operations & Inventory Bases' },
      { name: 'REST & Webhook Gateways', role: 'Bi-directional Normalization' },
    ],
    icon: Database,
  },
  {
    layerNumber: '03',
    layerTitle: 'AI Agents & Workflow Orchestration',
    subtitle: 'Zero-hallucination multi-modal agents that perform real business work.',
    description:
      'I build automated telephone receptionists, structured chat parsers, and executive office assistants. Built on n8n and peer-reviewed on StackedHQ to ensure deterministic, fault-tolerant autonomy.',
    stack: [
      { name: 'n8n Orchestration', role: 'Enterprise Workflow Engine' },
      { name: 'OpenAI GPT-4o / 4o-mini', role: 'Classification & Extraction' },
      { name: 'Vapi Voice AI', role: 'Ultra-low Latency Telephony' },
      { name: 'Groq / Llama 3.3', role: 'High-speed Local Evaluation' },
      { name: 'Twilio & WhatsApp API', role: 'Multi-Channel Dispatch' },
    ],
    icon: Cpu,
  },
]

export default function AboutView() {
  return (
    <div className="bg-[#0A0A0B] bg-architectural-grid text-[#F4F4F0] min-h-screen pt-32 md:pt-40 pb-28">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-20">
        {/* ===================== 1. HERO SPLIT SECTION ===================== */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Thesis & Editorial Narrative */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-[#D4AF37] font-semibold">
                04 · Engineer &amp; Architect
              </span>

              <MaskText
                as="h1"
                className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.08] tracking-[-0.03em] font-display text-[#F4F4F0]"
              >
                Bridging Full-Stack Code
                with Autonomous AI.
              </MaskText>
            </div>

            <div className="space-y-6 text-base sm:text-lg text-[#A1A1AA] leading-relaxed font-sans">
              <p>
                Most developers specialize in either customer-facing frontend design or deep backend scripting. I operate at the intersection of both: engineering the studio-grade web platform visitors interact with, and orchestrating the autonomous AI workflows that run the business behind the scenes.
              </p>
              <p>
                As a Verified StackedHQ Founding Member with 14 peer-reviewed production systems and 965 Stacks earned, I treat AI automation not as novelty prompt engineering, but as mission-critical systems engineering. Whether taking orders over WhatsApp, answering customer phone calls with sub-second voice latency, or routing messy multi-channel leads into clean database rows, every system is built for deterministic reliability.
              </p>
              <p>
                I partner with ambitious founders, established medical and energy practices, and growing culinary brands across Nigeria, Europe, and the US to turn digital operations into an unfair competitive advantage.
              </p>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href={contactLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-sans font-semibold bg-[#D4AF37] text-[#0A0A0B] hover:bg-[#E5A93C] transition-all shadow-[0_0_18px_rgba(212,175,55,0.18)]"
              >
                <span>Initiate Direct Conversation</span>
                <ArrowUpRight size={16} />
              </a>

              <Link
                href="/cv"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-sans font-medium text-[#F4F4F0] border border-[#222226] bg-[#121214] hover:bg-[#18181B] hover:border-[#323238] transition-colors"
              >
                <span>Inspect Curriculum Vitae</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Framed Portrait & Verified Credentials */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end space-y-6">
            <div className="relative w-full max-w-md">
              <div className="rounded-2xl p-3 bg-[#121214] border border-[#222226] shadow-2xl space-y-4">
                <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-[#0A0A0B]">
                  <Image
                    src="/tejiri-portrait.jpg"
                    alt="Tejiri Gbenedio"
                    fill
                    priority
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 450px"
                  />
                </div>

                {/* Verified Metadata Card below portrait */}
                <div className="p-4 rounded-xl border border-[#222226] bg-[#18181B] space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#D4AF37]">
                      Tejiri Gbenedio
                    </span>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#10B981]/15 text-[#10B981] border border-[#10B981]/30 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                      Active / Available
                    </span>
                  </div>

                  <div className="space-y-1.5 text-xs font-mono text-[#A1A1AA]">
                    <div className="flex items-center gap-2">
                      <Award size={14} className="text-[#D4AF37] shrink-0" />
                      <span>Verified StackedHQ Founding Member</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Sparkles size={14} className="text-[#D4AF37] shrink-0" />
                      <span>965 Stacks · 14 Peer-Reviewed Systems</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={14} className="text-[#8E8E93] shrink-0" />
                      <span>Lagos, Nigeria · Global Remote Contracts</span>
                    </div>
                  </div>

                  <a
                    href={builderCredential.profileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center w-full py-2.5 rounded-lg bg-[#D4AF37] text-[#0A0A0B] text-xs font-mono font-bold hover:bg-[#E5A93C] transition-colors"
                  >
                    View StackedHQ Peer Registry ↗
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================== 2. 3-LAYER TECHNICAL ARCHITECTURE MATRIX ===================== */}
        <RevealSection className="space-y-10 pt-12 border-t border-[#222226]">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Layers size={16} className="text-[#D4AF37]" />
                <span className="text-xs font-mono uppercase tracking-widest text-[#D4AF37]">
                  Engineering Matrix
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#F4F4F0]">
                3-Layer Technical Architecture
              </h2>
            </div>
            <p className="text-xs font-mono text-[#8E8E93]">
              From Pixel-Perfect UI to Autonomous Workflow Logic
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {architectureLayers.map((layer) => {
              const Icon = layer.icon
              return (
                <div
                  key={layer.layerNumber}
                  className="rounded-2xl border border-[#222226] bg-[#121214] p-6 sm:p-8 flex flex-col justify-between hover:border-[#323238] transition-all space-y-6 group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-[#18181B] text-[#D4AF37] border border-[#222226] font-semibold">
                        LAYER {layer.layerNumber}
                      </span>
                      <div className="p-2.5 rounded-lg border border-[#222226] bg-[#18181B] text-[#D4AF37]">
                        <Icon size={18} />
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold font-display text-[#F4F4F0] group-hover:text-[#D4AF37] transition-colors">
                        {layer.layerTitle}
                      </h3>
                      <p className="text-xs font-mono text-[#D4AF37] mt-1">
                        {layer.subtitle}
                      </p>
                    </div>

                    <p className="text-sm text-[#A1A1AA] leading-relaxed font-sans">
                      {layer.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#222226] space-y-2">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#8E8E93]">
                      Production Technologies:
                    </span>
                    <div className="space-y-1.5">
                      {layer.stack.map((item) => (
                        <div
                          key={item.name}
                          className="flex items-center justify-between text-xs font-mono p-2 rounded bg-[#0A0A0B] border border-[#222226]"
                        >
                          <span className="text-[#F4F4F0] font-medium">{item.name}</span>
                          <span className="text-[10px] text-[#8E8E93]">{item.role}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </RevealSection>

        {/* ===================== 3. EDITORIAL CLIENT ENDORSEMENTS ===================== */}
        <RevealSection className="space-y-10 pt-12 border-t border-[#222226]">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Quote size={16} className="text-[#D4AF37]" />
                <span className="text-xs font-mono uppercase tracking-widest text-[#D4AF37]">
                  Client Testimonials
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#F4F4F0]">
                Editorial Client Endorsements
              </h2>
            </div>
            <p className="text-xs font-mono text-[#8E8E93]">
              Real Business Outcomes · Verified Deployments
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="rounded-2xl border border-[#222226] bg-[#121214] p-6 sm:p-8 flex flex-col justify-between hover:border-[#323238] transition-all space-y-6"
              >
                <div className="space-y-4">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#18181B] text-[#D4AF37] border border-[#222226] uppercase">
                    {t.projectContext}
                  </span>

                  <p className="text-sm sm:text-base text-[#F4F4F0] leading-relaxed font-sans italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-[#222226] space-y-0.5">
                  <p className="text-sm font-bold font-display text-[#F4F4F0]">
                    {t.clientName}
                  </p>
                  <p className="text-xs font-mono text-[#8E8E93]">
                    {t.clientRole} · <strong className="text-[#A1A1AA] font-normal">{t.company}</strong>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </RevealSection>

        {/* ===================== 4. BOTTOM DIRECT CONTACT CARD ===================== */}
        <section className="p-8 sm:p-12 rounded-2xl border border-[#222226] bg-[#121214] flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-mono text-[#D4AF37] uppercase tracking-wider">
              Have a complex technical vision?
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#F4F4F0] font-display">
              Let&apos;s Build Something Measurable Together
            </h3>
            <p className="text-sm sm:text-base text-[#A1A1AA] max-w-xl">
              I am open for select contract engagements, autonomous workflow architecture, and full-stack web applications.
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
        </section>
      </div>
    </div>
  )
}
