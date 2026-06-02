# Automations Showcase Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a 6-card Automations section to the homepage and a full `/automations` detail page showcasing n8n workflows with screenshots, descriptions, and business impact callouts.

**Architecture:** Data lives in `src/data/index.ts` as an `automations` array. The homepage section (`Automations.tsx`) renders 6 mini-cards with icon + title + tagline + tool badges. The detail page (`src/app/automations/page.tsx`) renders one `AutomationDetailCard` per automation in alternating screenshot-left / screenshot-right layout, reusing the floating shadow hover pattern from `ProjectCard.tsx`.

**Tech Stack:** Next.js 16 App Router, TypeScript, Tailwind v4, Framer Motion v12, lucide-react v1, next/image.

---

## File Map

| Action | File | Purpose |
|--------|------|---------|
| Copy × 6 | `public/*.png` | Workflow screenshots served by next/image |
| Modify | `src/data/index.ts` | Add `Automation` interface + `automations` array |
| Modify | `src/components/Navbar.tsx` | Add "Automations" link (navigates to `/automations`) |
| Create | `src/components/sections/Automations.tsx` | Homepage section — 6 mini-cards + CTA |
| Create | `src/components/ui/AutomationDetailCard.tsx` | Full card for detail page |
| Create | `src/app/automations/page.tsx` | `/automations` route |
| Modify | `src/app/page.tsx` | Add `<Automations />` between Projects and Services |

---

## Task 1: Copy screenshots into public/

**Files:**
- Modify: `public/` (add 6 PNG files)

- [ ] **Step 1: Copy all 6 screenshots**

Run in PowerShell from the project root:

```powershell
Copy-Item "n8n automation screenshots & summary\email classification workflow.png" "public\email-classification.png"
Copy-Item "n8n automation screenshots & summary\gym ai receptionist.png" "public\gym-ai-receptionist.png"
Copy-Item "n8n automation screenshots & summary\Konfam fm rag agent.png" "public\konfam-rag-agent.png"
Copy-Item "n8n automation screenshots & summary\mama tee call handler.png" "public\mama-tee-call-handler.png"
Copy-Item "n8n automation screenshots & summary\mama tee chat handler.png" "public\mama-tee-chat-handler.png"
Copy-Item "n8n automation screenshots & summary\Autonomous Job Hunt System -\wf00 job hunt.png" "public\job-hunt-overview.png"
```

- [ ] **Step 2: Verify all 6 files exist**

```powershell
Get-ChildItem public | Where-Object { $_.Name -in @("email-classification.png","gym-ai-receptionist.png","konfam-rag-agent.png","mama-tee-call-handler.png","mama-tee-chat-handler.png","job-hunt-overview.png") } | Select-Object Name
```

Expected: 6 filenames listed.

- [ ] **Step 3: Commit**

```bash
git add public/email-classification.png public/gym-ai-receptionist.png public/konfam-rag-agent.png public/mama-tee-call-handler.png public/mama-tee-chat-handler.png public/job-hunt-overview.png
git commit -m "feat: add n8n workflow screenshots to public"
```

---

## Task 2: Add automations data to src/data/index.ts

**Files:**
- Modify: `src/data/index.ts`

- [ ] **Step 1: Add the `Automation` interface and `automations` array**

Append to the bottom of `src/data/index.ts`:

```ts
export interface Automation {
  id: number
  title: string
  icon: string
  tagline: string
  tools: string[]
  description: string
  businessImpact: string
  image: string
}

export const automations: Automation[] = [
  {
    id: 1,
    title: 'AI Email Classification & Triage',
    icon: 'Mail',
    tagline: 'Auto-sorts and routes your inbox before a human ever reads it.',
    tools: ['n8n', 'GPT-4.1-mini', 'Gmail', 'Airtable'],
    description:
      'Built an intelligent email triage system that automatically reads, classifies, summarizes, and routes incoming emails to the right department — without any human intervention. The workflow polls Gmail every minute, passes each email through a dedicated AI Classifier agent that returns a single department label (Sales, Customer Service, HR, Finance, Operations, or Other), then routes it through a Switch node into the correct branch.\n\nTwo separate AI agents handle distinct jobs: the Classifier uses a temperature of zero and a strict 20-token limit for consistent, deterministic output, while the Summarizer intelligently condenses emails longer than 2,500 characters into 2–3 sentences — leaving shorter emails untouched to avoid unnecessary processing. Each email is then labeled inside Gmail for visual inbox organization and logged to an Airtable database with full metadata: sender, subject, AI-generated summary, department, and timestamp.',
    businessImpact:
      'Businesses and teams that handle high email volumes across multiple departments spend significant time just sorting and reading emails before they can act on them. This system eliminates that entirely — every email is pre-triaged, summarized, and waiting in the right department\'s queue the moment it arrives.',
    image: '/email-classification.png',
  },
  {
    id: 2,
    title: 'Gym Life AI Receptionist',
    icon: 'Dumbbell',
    tagline: '24/7 member management and instant payment links on Telegram.',
    tools: ['n8n', 'GPT-4.1-mini', 'Telegram', 'Airtable', 'Flutterwave'],
    description:
      'Built a fully deployed AI receptionist for a gym business, running 24/7 on Telegram. Members message the bot just as they would a front-desk staff member — asking about their subscription, requesting renewals, raising complaints, or inquiring about gym services — and receive instant, personalized responses at any hour.\n\nThe workflow uses a single GPT-4.1-mini call to both classify the member\'s intent and write a warm, human-sounding reply in one shot. A Switch node then routes each conversation to the appropriate branch: subscription lookups, general enquiries, complaint handling, or payment processing. For the renewal flow, the bot looks up their membership record in Airtable, then calls the Flutterwave payment API to generate a unique, personalized payment link in real time — pre-filled with the member\'s name and email — and delivers it directly in the chat. The entire process, from message to payment link, is fully automated with zero staff involvement.',
    businessImpact:
      'Gyms lose members to poor communication — missed renewal reminders, unanswered messages, no one available after hours. This system ensures every member inquiry gets handled instantly, every renewal gets a payment link within seconds, and the business keeps running even when no staff are at the desk.',
    image: '/gym-ai-receptionist.png',
  },
  {
    id: 3,
    title: 'Konfam FM AI Assistant — RAG Chatbot',
    icon: 'Radio',
    tagline: 'AI assistant that knows the station\'s content and captures advertiser leads.',
    tools: ['n8n', 'GPT-4.1-mini', 'Pinecone', 'Telegram', 'Google Sheets'],
    description:
      'Built a fully automated AI assistant for Konfam FM 89.5, a Lagos-based radio station, deployed as a Telegram bot. The system uses Retrieval-Augmented Generation (RAG) — meaning every user question first queries a Pinecone vector database loaded with the station\'s actual content (shows, schedules, presenters, events) before the AI responds. This ensures the bot never makes up station information.\n\nThe bot handles listener enquiries, show schedules, and event information conversationally — matching the energy of the station\'s brand, including Pidgin-friendly responses. It maintains per-user conversation memory across a session so interactions feel natural and contextual. The standout feature is a built-in lead capture system: when a user expresses interest in advertising, the AI walks them through a structured 3-step conversation to collect their name and phone number. A JavaScript node silently parses the output, logs the lead to Google Sheets, and fires an instant Telegram alert to the station\'s sales team — all while the user simply receives a warm, seamless reply.',
    businessImpact:
      'Radio stations lose advertising enquiries daily to missed calls and unanswered DMs. This system turns every Telegram message into a handled interaction — whether it\'s a listener asking about a show or an advertiser ready to spend.',
    image: '/konfam-rag-agent.png',
  },
  {
    id: 4,
    title: "Mama Tee's Kitchen — AI Voice Receptionist",
    icon: 'Phone',
    tagline: 'Phone AI that takes orders, books reservations, and alerts staff instantly.',
    tools: ['n8n', 'Vapi', 'Airtable', 'Telegram'],
    description:
      "Built the complete backend automation layer for an AI-powered phone receptionist for a Nigerian restaurant. When customers call the restaurant, a Vapi voice AI handles the conversation — taking orders, booking reservations, or capturing callback requests — and fires structured tool calls to this n8n workflow in real time to log and act on everything collected during the call.\n\nThe workflow accepts payloads from two sources — Vapi phone calls and a website chat widget — and uses a JavaScript normalisation node to unify both into a single clean data structure before routing. A Switch node then directs each tool call to the correct Airtable table: a dedicated ORDERS table, a RESERVATIONS table, and a CALLBACKS table. Each table has its own status lifecycle. Once a record is written, the workflow immediately sends a structured HTTP response back to the Vapi voice agent so the call continues without delay. In parallel, formatted Telegram alerts fire to the restaurant's operations chat with the full details and a staff action prompt.",
    businessImpact:
      "Restaurants miss revenue every day through missed calls, forgotten orders, and unanswered reservation requests — especially during busy service hours. This system ensures every call is handled by the AI, every data point is logged automatically, and the right staff member gets an instant notification to follow up.",
    image: '/mama-tee-call-handler.png',
  },
  {
    id: 5,
    title: "Mama Tee's Kitchen — AI Chat Ordering System",
    icon: 'MessageCircle',
    tagline: 'Website chat AI that guides customers through ordering 24/7.',
    tools: ['n8n', 'GPT-4o', 'Airtable', 'Webhook'],
    description:
      "Built the complete AI-powered chat backend for a Nigerian restaurant's website ordering system. Customers open the chat widget, and \"Tee\" — a warm, conversational AI assistant — guides them through the full ordering experience: browsing the menu, selecting items with prices, choosing between pickup and delivery, selecting a delivery zone across Abuja, providing contact details, and confirming their order — all in natural conversation.\n\nEvery message is sent to n8n, which constructs a full prompt including the complete restaurant context and the entire conversation history, then calls GPT-4o with forced JSON output. GPT-4o responds with a structured object containing the reply and an action flag it only sets once the customer has explicitly confirmed. A zone normaliser function sanitises the AI's delivery zone output to match Airtable's exact field values before writing. All records land in the same shared Airtable base as the phone call system, giving the restaurant a single unified operations dashboard regardless of which channel the customer used.",
    businessImpact:
      'Most small restaurants take orders through WhatsApp manually — meaning someone has to be available, read every message, type responses, and remember to log the order. This system handles the entire interaction automatically, 24/7, on the restaurant\'s own website, while writing every confirmed order directly into an operations database ready for the kitchen team.',
    image: '/mama-tee-chat-handler.png',
  },
  {
    id: 6,
    title: 'Autonomous Job Hunt System',
    icon: 'Briefcase',
    tagline: '5-workflow pipeline that scrapes, scores, and writes cover letters automatically.',
    tools: ['n8n', 'Groq', 'Llama 3.3', 'Google Sheets', 'Telegram'],
    description:
      'Built a 5-workflow autonomous job search pipeline that runs every Monday–Wednesday at 9am and handles everything from discovery to application without human involvement.\n\nThe system scrapes five live job platforms (Adzuna, Remotive, RemoteOK and others), filters and deduplicates listings, then scores each job against a structured CV profile across six weighted dimensions — skill match, experience level, location, recency, and more — using Llama 3.3 70B via Groq. High-scoring jobs (75+) automatically get a tailored cover letter written, validated, and saved to disk. Mid-range jobs (50–74) trigger a Telegram alert for manual review. All results are logged to a Google Sheets tracker with status and timestamp. Errors surface instantly via Telegram.',
    businessImpact:
      'Job searching manually takes hours every week — browsing boards, reading listings, deciding what to apply for, then writing individual cover letters. This pipeline compresses the entire discovery-to-application workflow into a single automated run that delivers pre-scored opportunities with cover letters ready. The only human decision left is whether to hit send.',
    image: '/job-hunt-overview.png',
  },
]
```

- [ ] **Step 2: Verify TypeScript compiles**

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add src/data/index.ts
git commit -m "feat: add automations data array to data/index.ts"
```

---

## Task 3: Add "Automations" link to Navbar

**Files:**
- Modify: `src/components/Navbar.tsx:6-12`

The current `links` array uses `href: '#section-id'` for homepage anchor scrolling. The Automations link needs to navigate to `/automations` (a separate page), so it uses a full path, not a hash. This means it should be a `<Link>` not a scroll button.

- [ ] **Step 1: Update the links array and add next/link import**

Replace the top of `src/components/Navbar.tsx` (lines 1–12):

```tsx
'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'

const links = [
  { label: 'Home', href: '#hero', isAnchor: true },
  { label: 'Projects', href: '#projects', isAnchor: true },
  { label: 'Automations', href: '/automations', isAnchor: false },
  { label: 'Services', href: '#services', isAnchor: true },
  { label: 'About', href: '#about', isAnchor: true },
  { label: 'Contact', href: '#contact', isAnchor: true },
]
```

- [ ] **Step 2: Update the desktop nav to handle both link types**

Replace the desktop `<ul>` block (lines 40–52) with:

```tsx
{/* Desktop */}
<ul className="hidden md:flex items-center gap-8">
  {links.map((l) => (
    <li key={l.href}>
      {l.isAnchor ? (
        <button
          onClick={() => scrollTo(l.href)}
          className="text-sm transition-colors duration-200 hover:text-[#10B981]"
          style={{ color: '#6B7280' }}
        >
          {l.label}
        </button>
      ) : (
        <Link
          href={l.href}
          className="text-sm transition-colors duration-200 hover:text-[#10B981]"
          style={{ color: '#6B7280' }}
        >
          {l.label}
        </Link>
      )}
    </li>
  ))}
</ul>
```

- [ ] **Step 3: Update the mobile nav to handle both link types**

Replace the mobile `<ul>` content (lines 85–102):

```tsx
<ul className="px-6 py-5 space-y-4">
  {links.map((l) => (
    <li key={l.href}>
      {l.isAnchor ? (
        <button
          onClick={() => scrollTo(l.href)}
          className="text-base w-full text-left transition-colors hover:text-[#10B981]"
          style={{ color: '#111827', fontFamily: 'var(--font-syne)' }}
        >
          {l.label}
        </button>
      ) : (
        <Link
          href={l.href}
          onClick={() => setOpen(false)}
          className="text-base block w-full transition-colors hover:text-[#10B981]"
          style={{ color: '#111827', fontFamily: 'var(--font-syne)' }}
        >
          {l.label}
        </Link>
      )}
    </li>
  ))}
  <li>
    <button
      onClick={() => scrollTo('#contact')}
      className="w-full mt-2 py-3 rounded-full text-sm font-semibold text-white"
      style={{ background: '#10B981', fontFamily: 'var(--font-syne)' }}
    >
      Hire Me
    </button>
  </li>
</ul>
```

- [ ] **Step 4: Verify TypeScript compiles**

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 5: Commit**

```bash
git add src/components/Navbar.tsx
git commit -m "feat: add Automations nav link to Navbar"
```

---

## Task 4: Create Automations homepage section

**Files:**
- Create: `src/components/sections/Automations.tsx`

This section renders 6 mini-cards (icon + title + tagline + tool badges) with a single CTA button linking to `/automations`. No screenshots on the mini-cards.

- [ ] **Step 1: Create the file**

Create `src/components/sections/Automations.tsx` with this full content:

```tsx
'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  Mail,
  Dumbbell,
  Radio,
  Phone,
  MessageCircle,
  Briefcase,
  ArrowUpRight,
} from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import { automations } from '@/data'

const iconMap: Record<string, React.ComponentType<{ size?: number; color?: string }>> = {
  Mail,
  Dumbbell,
  Radio,
  Phone,
  MessageCircle,
  Briefcase,
}

export default function Automations() {
  return (
    <section id="automations" className="py-24 px-6" style={{ background: '#FAFAF8' }}>
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          label="WHAT I BUILD WITH AI"
          title="AI Automations"
          subtitle="Workflows that run your business while you sleep."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {automations.map((automation, i) => {
            const Icon = iconMap[automation.icon]
            return (
              <motion.div
                key={automation.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="p-6 rounded-2xl border transition-all duration-300"
                style={{ background: '#fff', borderColor: '#E5E7EB' }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = '#10B98166'
                  e.currentTarget.style.boxShadow = '0 8px 30px rgba(16,185,129,0.08)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = '#E5E7EB'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: '#D1FAE5' }}
                >
                  {Icon && <Icon size={20} color="#059669" />}
                </div>

                <h3
                  className="font-bold text-base mb-2 leading-snug"
                  style={{ fontFamily: 'var(--font-syne)', color: '#111827' }}
                >
                  {automation.title}
                </h3>

                <p className="text-sm mb-4 leading-relaxed" style={{ color: '#6B7280' }}>
                  {automation.tagline}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {automation.tools.map((tool) => (
                    <span
                      key={tool}
                      className="text-xs px-2.5 py-1 rounded-full font-mono"
                      style={{ background: '#F3F4F6', color: '#4B5563' }}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center"
        >
          <Link
            href="/automations"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold border-2 transition-colors duration-200 hover:bg-[#111827] hover:text-white"
            style={{ borderColor: '#111827', color: '#111827', fontFamily: 'var(--font-syne)' }}
          >
            Explore All Automations
            <ArrowUpRight size={15} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Verify TypeScript compiles**

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add src/components/sections/Automations.tsx
git commit -m "feat: add Automations homepage section with 6 mini-cards"
```

---

## Task 5: Create AutomationDetailCard component

**Files:**
- Create: `src/components/ui/AutomationDetailCard.tsx`

This component renders one full automation card with the floating shadow hover effect on the image (same technique as `ProjectCard.tsx`), description text split on `\n\n`, and the Business Impact callout block.

- [ ] **Step 1: Create the file**

Create `src/components/ui/AutomationDetailCard.tsx` with this full content:

```tsx
'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Lightbulb } from 'lucide-react'
import type { Automation } from '@/data'

const shadowFloat1 = {
  x: [-15, 2, 13, -15, 11, -1, -15],
  y: [-15, -4, -7, 15, -3, 11, -15],
}
const shadowFloat2 = {
  x: [15, -10, 3, 15, -2, -12, 15],
  y: [15, -6, 9, -15, 6, -8, 15],
}

interface Props {
  automation: Automation
  index: number
}

export default function AutomationDetailCard({ automation, index }: Props) {
  const [imageHovered, setImageHovered] = useState(false)
  const isEven = index % 2 === 1

  const imageBlock = (
    <div
      className="relative w-full lg:w-1/2 shrink-0"
      style={{ isolation: 'isolate', minHeight: '320px' }}
      onMouseEnter={() => setImageHovered(true)}
      onMouseLeave={() => setImageHovered(false)}
    >
      {/* Shadow layer 1 — emerald */}
      <motion.div
        className="absolute inset-0 rounded-2xl"
        style={{ background: 'rgba(16,185,129,0.5)', zIndex: 0 }}
        animate={imageHovered ? shadowFloat1 : { x: 0, y: 0 }}
        transition={imageHovered ? { duration: 3, repeat: Infinity, ease: 'linear' } : { duration: 0.5 }}
      />
      {/* Shadow layer 2 — gold */}
      <motion.div
        className="absolute inset-0 rounded-2xl"
        style={{ background: 'rgba(201,164,62,0.5)', zIndex: 0 }}
        animate={imageHovered ? shadowFloat2 : { x: 0, y: 0 }}
        transition={imageHovered ? { duration: 3.5, repeat: Infinity, ease: 'linear' } : { duration: 0.5 }}
      />
      {/* Image */}
      <motion.div
        className="relative overflow-hidden rounded-2xl"
        style={{ minHeight: '320px', zIndex: 1, background: '#EDECEA' }}
        animate={{ scale: imageHovered ? [1, 1.03, 0.98, 1] : 1 }}
        transition={{ duration: 0.4, times: [0, 0.33, 0.66, 1] }}
      >
        <Image
          src={automation.image}
          alt={`${automation.title} workflow screenshot`}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-contain p-4"
        />
      </motion.div>
    </div>
  )

  const textBlock = (
    <div className="flex-1 flex flex-col justify-center py-4">
      <h2
        className="font-extrabold text-2xl md:text-3xl mb-3 leading-tight"
        style={{ fontFamily: 'var(--font-syne)', color: '#111827' }}
      >
        {automation.title}
      </h2>

      {/* Tool badges */}
      <div className="flex flex-wrap gap-1.5 mb-5">
        {automation.tools.map((tool) => (
          <span
            key={tool}
            className="text-xs px-2.5 py-1 rounded-full font-mono"
            style={{ background: '#F3F4F6', color: '#4B5563' }}
          >
            {tool}
          </span>
        ))}
      </div>

      {/* Description — split on double newline */}
      <div className="space-y-3 mb-6">
        {automation.description.split('\n\n').map((para, i) => (
          <p key={i} className="text-sm leading-relaxed" style={{ color: '#374151' }}>
            {para}
          </p>
        ))}
      </div>

      {/* Business Impact callout */}
      <div
        className="flex gap-3 p-4 rounded-xl"
        style={{
          background: 'rgba(16,185,129,0.07)',
          borderLeft: '3px solid #10B981',
        }}
      >
        <Lightbulb size={16} className="shrink-0 mt-0.5" style={{ color: '#10B981' }} />
        <div>
          <p
            className="text-xs font-semibold uppercase tracking-wider mb-1"
            style={{ color: '#10B981', fontFamily: 'var(--font-syne)' }}
          >
            Business Impact
          </p>
          <p className="text-sm leading-relaxed italic" style={{ color: '#374151' }}>
            {automation.businessImpact}
          </p>
        </div>
      </div>
    </div>
  )

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className={`flex flex-col lg:flex-row gap-10 lg:gap-16 items-center ${isEven ? 'lg:flex-row-reverse' : ''}`}
    >
      {imageBlock}
      {textBlock}
    </motion.div>
  )
}
```

- [ ] **Step 2: Verify TypeScript compiles**

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add src/components/ui/AutomationDetailCard.tsx
git commit -m "feat: add AutomationDetailCard component with floating shadow and business impact callout"
```

---

## Task 6: Create the /automations page

**Files:**
- Create: `src/app/automations/page.tsx`

This is a Next.js App Router page that renders the full detail page: Navbar, page header, 6 `AutomationDetailCard` components separated by dividers, a bottom CTA, and Footer.

- [ ] **Step 1: Create the file**

Create `src/app/automations/page.tsx` with this full content:

```tsx
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AutomationDetailCard from '@/components/ui/AutomationDetailCard'
import MagneticButton from '@/components/ui/MagneticButton'
import { automations } from '@/data'
import { contactLinks } from '@/data'

export const metadata: Metadata = {
  title: 'AI Automations — Tejiri Gbenedio',
  description:
    'n8n automation workflows built for real businesses — email triage, AI receptionists, RAG chatbots, and autonomous pipelines.',
}

export default function AutomationsPage() {
  return (
    <>
      <Navbar />
      <main style={{ background: '#F8F7F4' }}>
        {/* Page header */}
        <section className="pt-32 pb-16 px-6">
          <div className="max-w-6xl mx-auto">
            <span
              className="inline-block text-sm font-semibold uppercase tracking-widest mb-3"
              style={{ color: '#C9A43E', fontFamily: 'var(--font-syne)' }}
            >
              WHAT I BUILD WITH AI
            </span>
            <h1
              className="font-black leading-tight mb-4"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                color: '#111827',
              }}
            >
              AI Automations
            </h1>
            <p className="text-lg max-w-2xl leading-relaxed" style={{ color: '#6B7280' }}>
              Workflows I&apos;ve built that run real businesses — handling emails, calls, orders,
              and job applications automatically, without human intervention.
            </p>
          </div>
        </section>

        {/* Automation detail cards */}
        <section className="px-6 pb-24">
          <div className="max-w-6xl mx-auto space-y-20">
            {automations.map((automation, i) => (
              <div key={automation.id}>
                <AutomationDetailCard automation={automation} index={i} />
                {i < automations.length - 1 && (
                  <hr className="mt-20" style={{ borderColor: '#E5E7EB' }} />
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <section
          className="py-20 px-6 text-center"
          style={{ background: '#FAFAF8', borderTop: '1px solid #E5E7EB' }}
        >
          <div className="max-w-xl mx-auto">
            <h2
              className="font-extrabold text-3xl mb-4"
              style={{ fontFamily: 'var(--font-syne)', color: '#111827' }}
            >
              Ready to automate your business?
            </h2>
            <p className="mb-8 leading-relaxed" style={{ color: '#6B7280' }}>
              Let&apos;s talk about what processes are eating your team&apos;s time and how an automation can fix it.
            </p>
            <MagneticButton href={contactLinks.whatsapp} variant="primary">
              Let&apos;s Have A Talk
            </MagneticButton>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
```

- [ ] **Step 2: Verify TypeScript compiles**

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add src/app/automations/page.tsx
git commit -m "feat: add /automations detail page"
```

---

## Task 7: Wire Automations section into homepage

**Files:**
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Add the Automations import and component**

Replace the full content of `src/app/page.tsx` with:

```tsx
import Navbar from '@/components/Navbar'
import CustomCursor from '@/components/CustomCursor'
import Hero from '@/components/sections/Hero'
import Projects from '@/components/sections/Projects'
import Automations from '@/components/sections/Automations'
import Services from '@/components/sections/Services'
import Testimonials from '@/components/sections/Testimonials'
import About from '@/components/sections/About'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[99999] focus:px-4 focus:py-2 focus:bg-white focus:text-black focus:rounded focus:shadow-lg"
      >
        Skip to main content
      </a>
      <CustomCursor />
      <Navbar />
      <main id="main-content">
        <Hero />
        <Projects />
        <Automations />
        <Services />
        <Testimonials />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
```

- [ ] **Step 2: Verify TypeScript compiles**

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 3: Start dev server and visually verify**

```bash
npm run dev
```

Open http://localhost:3000 and check:
- Navbar shows "Automations" between "Projects" and "Services"
- Clicking "Automations" in nav navigates to `/automations`
- Homepage scrolls through: Hero → Projects → **Automations (6 mini-cards)** → Services → Testimonials → About → Contact
- Each mini-card shows icon, title, tagline, tool badges
- Hover on mini-card shows emerald border glow
- "Explore All Automations →" button links to `/automations`

Then open http://localhost:3000/automations and check:
- Page header shows "AI Automations" in Fraunces font
- 6 full cards alternate screenshot-left / screenshot-right layout
- Screenshots load (next/image)
- Hovering the screenshot triggers floating emerald + gold shadow
- Business Impact callout is visible with emerald left border and lightbulb icon
- Bottom CTA section shows "Ready to automate your business?" with MagneticButton
- Footer renders

- [ ] **Step 4: Commit**

```bash
git add src/app/page.tsx
git commit -m "feat: wire Automations section into homepage between Projects and Services"
```

---

## Task 8: Push to production

- [ ] **Step 1: Push to master**

```bash
git push origin master
```

- [ ] **Step 2: Verify Vercel deployment**

Wait ~60 seconds, then open https://tejiri-gbenedio.vercel.app and confirm:
- Automations section visible on homepage
- Automations nav link works
- `/automations` page loads with all 6 cards and screenshots

---

## Self-Review Notes

**Spec coverage check:**
- ✅ 6 screenshots copied to public/
- ✅ `Automation` interface + `automations` array in data/index.ts
- ✅ Navbar "Automations" link (navigates to /automations, not anchor scroll)
- ✅ Homepage section: icon + title + tagline + tool badges, no screenshots, single CTA
- ✅ 3-col desktop / 2-col tablet / 1-col mobile grid
- ✅ Card hover: emerald border glow + box shadow (matches About stat cards)
- ✅ Detail page: alternating screenshot-left/right layout
- ✅ Floating shadow hover reused from ProjectCard.tsx
- ✅ Business Impact callout: emerald tint + left border + Lightbulb icon + italic text
- ✅ Bottom CTA with MagneticButton → WhatsApp
- ✅ Page metadata for SEO
- ✅ No pixel trail on /automations page
- ✅ Mobile: screenshot stacks above text (flex-col default, lg:flex-row)
