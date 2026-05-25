# Tejiri Gbenedio Portfolio Website — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a modern, cinematic freelance agency-style portfolio for Tejiri Gbenedio, positioned as "AI Automation & Full-Stack Web Developer," deployable to Vercel.

**Architecture:** Single-page Next.js 14 App Router site with all sections as React components, static data in a central data file, Framer Motion for all animations, and three signature interactive effects (video text mask in hero, stacked shadow bounce on project cards, magnetic CTA buttons).

**Tech Stack:** Next.js 14 (App Router) · TypeScript · Tailwind CSS · Framer Motion · Lucide React · Google Fonts (Syne + Inter) · Vercel

---

## Color System (reference throughout)

```
Background:   #F8F7F4  (warm off-white)
Surface:      #FFFFFF
Text primary: #111827  (near-black)
Text muted:   #6B7280
Accent:       #10B981  (soft emerald)
Accent dark:  #059669
Accent light: #D1FAE5
Shadow black: #0F172A
```

---

## File Map

```
c:\Users\HP\Documents\My Online Potfolio\
├── src/
│   ├── app/
│   │   ├── layout.tsx          ← root layout: fonts, metadata, body bg
│   │   ├── page.tsx            ← assembles all sections in order
│   │   └── globals.css         ← CSS reset, custom properties, scrollbar
│   ├── components/
│   │   ├── Navbar.tsx          ← fixed top nav, smooth scroll links, mobile menu
│   │   ├── Footer.tsx          ← copyright + social links
│   │   ├── sections/
│   │   │   ├── Hero.tsx        ← text video-mask headline, magnetic CTAs, tech pills
│   │   │   ├── Projects.tsx    ← section shell + 3-col grid of ProjectCards
│   │   │   ├── Services.tsx    ← 8 service tiles with icons
│   │   │   ├── Pricing.tsx     ← 4 pricing tier cards in ₦
│   │   │   ├── Testimonials.tsx ← star ratings + quote cards
│   │   │   ├── About.tsx       ← outcome-focused bio + stats
│   │   │   └── Contact.tsx     ← WhatsApp, Email, LinkedIn, GitHub links
│   │   └── ui/
│   │       ├── MagneticButton.tsx   ← cursor-tracking magnetic button wrapper
│   │       ├── ProjectCard.tsx      ← card with stacked offset shadow hover
│   │       └── SectionHeading.tsx   ← reusable animated section title
│   └── data/
│       └── index.ts            ← all static content (projects, services, pricing, testimonials)
├── public/
│   ├── placeholder-project.jpg ← gray placeholder for project thumbnails
│   └── avatar-placeholder.jpg  ← placeholder for profile photo
├── tailwind.config.ts
├── next.config.ts
└── tsconfig.json
```

---

## Task 1 — Scaffold Next.js Project

**Files:**
- Creates all project files via `create-next-app`
- Modify: `tailwind.config.ts`
- Modify: `src/app/globals.css`

- [ ] **Step 1: Run create-next-app in the portfolio directory**

```powershell
cd "c:\Users\HP\Documents\My Online Potfolio"
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --no-git
```
When prompted: accept all defaults (Yes to App Router, Yes to Tailwind, etc.)

- [ ] **Step 2: Install dependencies**

```powershell
npm install framer-motion lucide-react
```

- [ ] **Step 3: Replace `tailwind.config.ts` with custom config**

```typescript
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#F8F7F4',
        surface: '#FFFFFF',
        'text-primary': '#111827',
        'text-muted': '#6B7280',
        accent: '#10B981',
        'accent-dark': '#059669',
        'accent-light': '#D1FAE5',
        'shadow-black': '#0F172A',
      },
      fontFamily: {
        heading: ['var(--font-syne)', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
```

- [ ] **Step 4: Replace `src/app/globals.css`**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --font-syne: 'Syne', sans-serif;
  --font-inter: 'Inter', sans-serif;
}

html {
  scroll-behavior: smooth;
}

body {
  background-color: #F8F7F4;
  color: #111827;
  font-family: var(--font-inter);
  -webkit-font-smoothing: antialiased;
}

/* Hide scrollbar but keep scroll */
::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: #F8F7F4; }
::-webkit-scrollbar-thumb { background: #10B981; border-radius: 3px; }

/* Video text mask utility */
.text-video-clip {
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
}

/* Stacked shadow card */
.project-card-shadow {
  position: relative;
}
.project-card-shadow::before {
  content: '';
  position: absolute;
  inset: 0;
  background: #10B981;
  transform: translate(6px, 6px);
  transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
  z-index: -1;
  border-radius: inherit;
}
.project-card-shadow::after {
  content: '';
  position: absolute;
  inset: 0;
  background: #0F172A;
  transform: translate(12px, 12px);
  transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) 0.04s;
  z-index: -2;
  border-radius: inherit;
}
.project-card-shadow:hover::before {
  transform: translate(10px, 10px);
}
.project-card-shadow:hover::after {
  transform: translate(20px, 20px);
}
```

- [ ] **Step 5: Verify dev server starts**

```powershell
npm run dev
```
Expected: `▲ Next.js 14.x.x` and `Local: http://localhost:3000` — open browser, confirm default Next.js page loads.

Stop the dev server (Ctrl+C).

---

## Task 2 — Root Layout & Fonts

**Files:**
- Modify: `src/app/layout.tsx`

- [ ] **Step 1: Replace `src/app/layout.tsx`**

```typescript
import type { Metadata } from 'next'
import { Syne, Inter } from 'next/font/google'
import './globals.css'

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  weight: ['400', '600', '700', '800'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600'],
})

export const metadata: Metadata = {
  title: 'Tejiri Gbenedio — AI Automation & Full-Stack Web Developer',
  description:
    'I build modern websites, e-commerce platforms, automations, and AI-powered digital experiences that help businesses grow online.',
  keywords: ['web developer', 'AI automation', 'Next.js', 'e-commerce', 'Nigeria'],
  openGraph: {
    title: 'Tejiri Gbenedio — AI Automation & Full-Stack Web Developer',
    description: 'Modern websites, e-commerce, and AI-powered digital experiences.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${syne.variable} ${inter.variable} bg-background text-text-primary font-body`}>
        {children}
      </body>
    </html>
  )
}
```

- [ ] **Step 2: Start dev server and verify fonts load**

```powershell
npm run dev
```
Open `http://localhost:3000` — fonts should be loading (check DevTools Network tab for Syne/Inter). Stop server.

---

## Task 3 — Data Layer

**Files:**
- Create: `src/data/index.ts`

- [ ] **Step 1: Create `src/data/index.ts` with all static content**

```typescript
export const projects = [
  {
    id: 1,
    title: 'Mutiee Bakes',
    category: 'Business Website',
    tagline: 'A sweet online presence for a growing bakery brand.',
    clientNeed: 'The client needed an attractive online presence to showcase their baked goods, take inquiries, and attract new customers beyond word-of-mouth.',
    solution: 'Built a warm, visually rich website with an interactive menu, photo gallery, and direct WhatsApp inquiry flow — optimized for mobile since most traffic is from phones.',
    techStack: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    features: ['Interactive menu', 'Photo gallery', 'WhatsApp inquiry flow', 'Mobile-first design', 'SEO optimized'],
    image: '/placeholder-project.jpg',
    liveUrl: '#',
    status: 'live' as const,
  },
  {
    id: 2,
    title: 'Grills Cartel',
    category: 'Business Website',
    tagline: 'Bold digital identity for a premium grill & BBQ brand.',
    clientNeed: 'A bold, appetizing website that matched the brand energy and helped customers find the menu, location, and place orders.',
    solution: 'Designed a dark, high-energy site with full menu display, location info, and a reservation/order link — built for fast mobile load times.',
    techStack: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    features: ['Full menu display', 'Location & hours', 'Reservation link', 'Mobile responsive', 'Brand-aligned design'],
    image: '/placeholder-project.jpg',
    liveUrl: '#',
    status: 'live' as const,
  },
  {
    id: 3,
    title: 'Online Bookstore Platform',
    category: 'E-commerce Website',
    tagline: 'Full-stack e-commerce platform for book retail.',
    clientNeed: 'A client needed a complete online bookstore with product listings, secure payments, order management, and delivery tracking.',
    solution: 'Building a full e-commerce platform with Paystack payment integration, an admin dashboard for inventory management, customer order tracking, and SEO-optimized product pages.',
    techStack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Paystack', 'Tailwind CSS'],
    features: ['Paystack payment integration', 'Admin dashboard', 'Delivery tracking', 'SEO optimized', 'Mobile responsive'],
    image: '/placeholder-project.jpg',
    liveUrl: '#',
    status: 'coming-soon' as const,
  },
]

export const services = [
  { id: 1, title: 'Business Websites', description: 'Professional websites that represent your brand 24/7 and convert visitors to customers.', icon: 'Globe' },
  { id: 2, title: 'E-commerce Stores', description: 'Full online stores with payments, inventory management, and order tracking.', icon: 'ShoppingBag' },
  { id: 3, title: 'AI Automations', description: 'Automate repetitive tasks — lead follow-up, scheduling, reports — so you focus on growth.', icon: 'Bot' },
  { id: 4, title: 'Landing Pages', description: 'High-converting landing pages built to turn ad traffic into real customers.', icon: 'Layout' },
  { id: 5, title: 'Mobile Apps', description: 'Cross-platform mobile applications that work seamlessly on iOS and Android.', icon: 'Smartphone' },
  { id: 6, title: 'UI/UX Design', description: 'Clean, intuitive designs that make your product a pleasure to use.', icon: 'Palette' },
  { id: 7, title: 'Website Redesign', description: 'Transform your outdated website into a modern, fast, and professional experience.', icon: 'RefreshCw' },
  { id: 8, title: 'SEO Optimization', description: 'Get found on Google. Technical SEO and content strategy that drives organic traffic.', icon: 'Search' },
]

export const pricingTiers = [
  {
    id: 1,
    name: 'Starter Website',
    priceRange: '₦150,000 – ₦250,000',
    description: 'Perfect for small businesses and personal brands getting online.',
    features: ['Up to 5 pages', 'Mobile responsive', 'Contact form', 'Basic SEO setup', 'WhatsApp integration', '2 revision rounds'],
    highlighted: false,
    cta: 'Get Started',
  },
  {
    id: 2,
    name: 'Business Website',
    priceRange: '₦300,000 – ₦600,000',
    description: 'For established businesses that need a powerful digital presence.',
    features: ['Up to 10 pages', 'Custom animations', 'Blog/News section', 'Full SEO optimization', 'Analytics setup', 'Social media integration', '3 revision rounds'],
    highlighted: true,
    cta: 'Most Popular',
  },
  {
    id: 3,
    name: 'E-commerce Store',
    priceRange: '₦500,000 – ₦1,500,000',
    description: 'Complete online store with payments and inventory management.',
    features: ['Unlimited products', 'Paystack/Flutterwave', 'Admin dashboard', 'Order tracking', 'Delivery management', 'Customer accounts', 'Mobile responsive'],
    highlighted: false,
    cta: 'Build My Store',
  },
  {
    id: 4,
    name: 'Custom App / SaaS',
    priceRange: 'Custom Quote',
    description: 'Complex web applications, AI integrations, and SaaS platforms.',
    features: ['Full-stack development', 'Database architecture', 'AI/Automation integration', 'User authentication', 'API development', 'Ongoing support', 'Custom scope'],
    highlighted: false,
    cta: "Let's Talk",
  },
]

export const testimonials = [
  {
    id: 1,
    name: 'Chiamaka Obi',
    role: 'Owner, Mutiee Bakes',
    quote: "Tejiri completely transformed how my bakery looks online. Customers now find me on Google and message directly from the site. The design is exactly what I wanted — beautiful and professional.",
    rating: 5,
    avatar: '/placeholder-project.jpg',
  },
  {
    id: 2,
    name: 'David Eghosa',
    role: 'Co-founder, Grills Cartel',
    quote: "Fast delivery, clean code, and the site looks exactly like our brand. We've had people come in saying they found us online — which never happened before the new site.",
    rating: 5,
    avatar: '/placeholder-project.jpg',
  },
  {
    id: 3,
    name: 'Tolu Adeyemi',
    role: 'Startup Founder',
    quote: "Tejiri built our landing page in record time. The conversion rate is noticeably better than what we had before. Very professional and great communicator throughout.",
    rating: 5,
    avatar: '/placeholder-project.jpg',
  },
]

export const techStack = ['Next.js', 'React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Framer Motion', 'n8n', 'OpenAI API']

export const contactLinks = {
  whatsapp: 'https://wa.me/2347052381068',
  email: 'tejirigbe@gmail.com',
  linkedin: 'https://www.linkedin.com/in/gbenedio-tejiri-169998123',
  github: 'https://github.com/Tejiri-Gbenedio',
}
```

---

## Task 4 — Reusable UI Primitives

**Files:**
- Create: `src/components/ui/SectionHeading.tsx`
- Create: `src/components/ui/MagneticButton.tsx`
- Create: `src/components/ui/ProjectCard.tsx`

- [ ] **Step 1: Create `src/components/ui/SectionHeading.tsx`**

```typescript
'use client'
import { motion } from 'framer-motion'

interface SectionHeadingProps {
  label: string
  title: string
  subtitle?: string
  centered?: boolean
}

export default function SectionHeading({ label, title, subtitle, centered = false }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-12 ${centered ? 'text-center' : ''}`}
    >
      <span className="inline-block text-accent font-heading font-semibold text-sm uppercase tracking-widest mb-3">
        {label}
      </span>
      <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-text-primary leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-text-muted text-lg max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
```

- [ ] **Step 2: Create `src/components/ui/MagneticButton.tsx`**

```typescript
'use client'
import { useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

interface MagneticButtonProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
  href?: string
  variant?: 'primary' | 'outline'
}

export default function MagneticButton({ children, className = '', onClick, href, variant = 'primary' }: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement & HTMLAnchorElement>(null)
  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)
  const x = useSpring(rawX, { stiffness: 200, damping: 18 })
  const y = useSpring(rawY, { stiffness: 200, damping: 18 })

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    rawX.set((e.clientX - cx) * 0.35)
    rawY.set((e.clientY - cy) * 0.35)
  }

  const handleMouseLeave = () => {
    rawX.set(0)
    rawY.set(0)
  }

  const baseClass = `inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-heading font-semibold text-sm transition-colors duration-200 cursor-pointer select-none ${
    variant === 'primary'
      ? 'bg-accent text-white hover:bg-accent-dark'
      : 'border-2 border-text-primary text-text-primary hover:bg-text-primary hover:text-white'
  } ${className}`

  const MotionTag = href ? motion.a : motion.button

  return (
    <MotionTag
      ref={ref as any}
      style={{ x, y }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      href={href}
      className={baseClass}
    >
      {children}
    </MotionTag>
  )
}
```

- [ ] **Step 3: Create `src/components/ui/ProjectCard.tsx`**

```typescript
'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { ExternalLink, ArrowUpRight } from 'lucide-react'
import type { projects } from '@/data'

type Project = (typeof projects)[number]

interface ProjectCardProps {
  project: Project
  index: number
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="project-card-shadow rounded-xl bg-surface overflow-visible group"
    >
      {/* Image */}
      <div className="relative h-52 bg-gray-100 overflow-hidden rounded-t-xl">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {project.status === 'coming-soon' && (
          <div className="absolute inset-0 bg-shadow-black/60 flex items-center justify-center">
            <span className="text-white font-heading font-bold text-sm uppercase tracking-widest border border-white/30 px-4 py-2 rounded-full">
              Coming Soon
            </span>
          </div>
        )}
        <div className="absolute top-3 left-3">
          <span className="bg-accent text-white text-xs font-heading font-semibold px-3 py-1 rounded-full">
            {project.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-heading font-extrabold text-xl text-text-primary mb-1">{project.title}</h3>
        <p className="text-text-muted text-sm mb-4 leading-relaxed">{project.tagline}</p>

        {/* Case study details */}
        <div className="space-y-3 mb-5">
          <div>
            <p className="text-xs font-heading font-semibold uppercase tracking-wider text-text-muted mb-1">The Need</p>
            <p className="text-sm text-text-primary leading-relaxed">{project.clientNeed}</p>
          </div>
          <div>
            <p className="text-xs font-heading font-semibold uppercase tracking-wider text-text-muted mb-1">The Solution</p>
            <p className="text-sm text-text-primary leading-relaxed">{project.solution}</p>
          </div>
        </div>

        {/* Features */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.features.map((f) => (
            <span key={f} className="text-xs bg-accent-light text-accent-dark font-medium px-2.5 py-1 rounded-full">
              {f}
            </span>
          ))}
        </div>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.techStack.map((t) => (
            <span key={t} className="text-xs bg-gray-100 text-text-muted px-2.5 py-1 rounded-full font-mono">
              {t}
            </span>
          ))}
        </div>

        {/* CTA */}
        {project.status === 'live' ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-heading font-semibold text-accent hover:text-accent-dark transition-colors group/link"
          >
            View Live Site
            <ArrowUpRight size={16} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
          </a>
        ) : (
          <span className="inline-flex items-center gap-1.5 text-sm font-heading font-semibold text-text-muted">
            <ExternalLink size={14} />
            In Development
          </span>
        )}
      </div>
    </motion.div>
  )
}
```

---

## Task 5 — Navbar

**Files:**
- Create: `src/components/Navbar.tsx`

- [ ] **Step 1: Create `src/components/Navbar.tsx`**

```typescript
'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Home', href: '#hero' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href: string) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="font-heading font-extrabold text-lg text-text-primary tracking-tight">
          Tejiri<span className="text-accent">.</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNav(link.href)}
                className="font-body text-sm text-text-muted hover:text-accent transition-colors duration-200"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <button
          onClick={() => handleNav('#contact')}
          className="hidden md:inline-flex items-center px-5 py-2 bg-accent text-white text-sm font-heading font-semibold rounded-full hover:bg-accent-dark transition-colors duration-200"
        >
          Hire Me
        </button>

        {/* Mobile hamburger */}
        <button className="md:hidden text-text-primary" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <ul className="px-6 py-4 space-y-4">
              {links.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className="font-body text-base text-text-primary hover:text-accent transition-colors w-full text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => handleNav('#contact')}
                  className="w-full mt-2 py-3 bg-accent text-white text-sm font-heading font-semibold rounded-full hover:bg-accent-dark transition-colors"
                >
                  Hire Me
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
```

---

## Task 6 — Hero Section

**Files:**
- Create: `src/components/sections/Hero.tsx`

- [ ] **Step 1: Create `src/components/sections/Hero.tsx`**

```typescript
'use client'
import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import MagneticButton from '@/components/ui/MagneticButton'
import { techStack } from '@/data'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center pt-16 px-6 overflow-hidden bg-background"
    >
      {/* Subtle bg grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#111827 1px, transparent 1px), linear-gradient(90deg, #111827 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Floating accent blob */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none animate-float" />

      <div className="relative max-w-6xl mx-auto w-full">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-6"
        >
          <span className="w-8 h-px bg-accent" />
          <span className="text-accent font-heading font-semibold text-sm uppercase tracking-widest">
            Available for Projects
          </span>
        </motion.div>

        {/* Main headline with video/gradient text mask */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <h1 className="font-heading font-extrabold leading-[1.05] text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
            <span className="block text-text-primary">AI Automation</span>
            <span
              className="block text-video-clip"
              style={{
                backgroundImage: 'linear-gradient(135deg, #10B981 0%, #059669 30%, #0F172A 60%, #10B981 100%)',
                backgroundSize: '200% auto',
              }}
            >
              & Full-Stack
            </span>
            <span className="block text-text-primary">Developer.</span>
          </h1>
        </motion.div>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 text-text-muted text-lg md:text-xl max-w-xl leading-relaxed"
        >
          I build modern websites, e-commerce platforms, automations, and AI-powered digital
          experiences that help businesses grow online.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <MagneticButton
            href="https://wa.me/2347052381068"
            variant="primary"
          >
            Let&apos;s Have A Talk
          </MagneticButton>
          <MagneticButton
            onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
            variant="outline"
          >
            View My Work
          </MagneticButton>
        </motion.div>

        {/* Tech pills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-14 flex flex-wrap gap-2"
        >
          {techStack.map((tech, i) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 + i * 0.05 }}
              className="text-xs font-mono bg-white border border-gray-200 text-text-muted px-3 py-1.5 rounded-full"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted"
      >
        <span className="text-xs font-body uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  )
}
```

---

## Task 7 — Projects Section

**Files:**
- Create: `src/components/sections/Projects.tsx`

- [ ] **Step 1: Create `src/components/sections/Projects.tsx`**

```typescript
'use client'
import SectionHeading from '@/components/ui/SectionHeading'
import ProjectCard from '@/components/ui/ProjectCard'
import { projects } from '@/data'

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          label="Featured Work"
          title="Projects That Drive Results"
          subtitle="Each project is a full case study — the client's need, the solution, and the outcome."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
```

---

## Task 8 — Services Section

**Files:**
- Create: `src/components/sections/Services.tsx`

- [ ] **Step 1: Create `src/components/sections/Services.tsx`**

```typescript
'use client'
import { motion } from 'framer-motion'
import { Globe, ShoppingBag, Bot, Layout, Smartphone, Palette, RefreshCw, Search } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import { services } from '@/data'

const iconMap: Record<string, React.ReactNode> = {
  Globe: <Globe size={24} />,
  ShoppingBag: <ShoppingBag size={24} />,
  Bot: <Bot size={24} />,
  Layout: <Layout size={24} />,
  Smartphone: <Smartphone size={24} />,
  Palette: <Palette size={24} />,
  RefreshCw: <RefreshCw size={24} />,
  Search: <Search size={24} />,
}

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          label="What I Do"
          title="Services That Grow Your Business"
          subtitle="From a simple landing page to a full AI-powered platform — I build what your business needs to thrive online."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              whileHover={{ y: -4 }}
              className="group p-6 bg-background rounded-2xl border border-gray-100 hover:border-accent/40 hover:shadow-lg transition-all duration-300 cursor-default"
            >
              <div className="w-12 h-12 bg-accent-light rounded-xl flex items-center justify-center text-accent mb-4 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                {iconMap[service.icon]}
              </div>
              <h3 className="font-heading font-bold text-base text-text-primary mb-2">{service.title}</h3>
              <p className="text-sm text-text-muted leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

---

## Task 9 — Pricing Section

**Files:**
- Create: `src/components/sections/Pricing.tsx`

- [ ] **Step 1: Create `src/components/sections/Pricing.tsx`**

```typescript
'use client'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import MagneticButton from '@/components/ui/MagneticButton'
import { pricingTiers } from '@/data'

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          label="Investment"
          title="Transparent Pricing"
          subtitle="No hidden fees. No surprises. Just clear value for your investment."
          centered
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
          {pricingTiers.map((tier, i) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative flex flex-col p-6 rounded-2xl border transition-all duration-300 ${
                tier.highlighted
                  ? 'bg-shadow-black border-accent text-white shadow-2xl scale-105'
                  : 'bg-white border-gray-200 hover:border-accent/40 hover:shadow-md'
              }`}
            >
              {tier.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-accent text-white text-xs font-heading font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="mb-5">
                <h3 className={`font-heading font-bold text-lg mb-1 ${tier.highlighted ? 'text-white' : 'text-text-primary'}`}>
                  {tier.name}
                </h3>
                <p className={`text-sm leading-relaxed ${tier.highlighted ? 'text-white/70' : 'text-text-muted'}`}>
                  {tier.description}
                </p>
              </div>
              <div className="mb-6">
                <span className={`font-heading font-extrabold text-2xl ${tier.highlighted ? 'text-accent' : 'text-text-primary'}`}>
                  {tier.priceRange}
                </span>
              </div>
              <ul className="space-y-2.5 mb-8 flex-1">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <Check size={14} className={`mt-0.5 shrink-0 ${tier.highlighted ? 'text-accent' : 'text-accent'}`} />
                    <span className={`text-sm ${tier.highlighted ? 'text-white/80' : 'text-text-muted'}`}>{f}</span>
                  </li>
                ))}
              </ul>
              <MagneticButton
                href="https://wa.me/2347052381068"
                variant={tier.highlighted ? 'primary' : 'outline'}
                className={`w-full justify-center ${!tier.highlighted ? 'border-gray-300 text-text-primary hover:bg-text-primary hover:text-white' : ''}`}
              >
                {tier.id === 4 ? "Let's Talk" : 'Get Started'}
              </MagneticButton>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

---

## Task 10 — Testimonials Section

**Files:**
- Create: `src/components/sections/Testimonials.tsx`

- [ ] **Step 1: Create `src/components/sections/Testimonials.tsx`**

```typescript
'use client'
import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import { testimonials } from '@/data'

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          label="Social Proof"
          title="What Clients Say"
          subtitle="Real feedback from real clients."
          centered
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="relative bg-background rounded-2xl p-7 border border-gray-100 hover:border-accent/30 hover:shadow-md transition-all duration-300"
            >
              <Quote size={28} className="text-accent/20 mb-4" />
              <p className="text-text-primary text-sm leading-relaxed mb-6 italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent-light flex items-center justify-center font-heading font-bold text-accent text-sm">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-heading font-semibold text-sm text-text-primary">{t.name}</p>
                  <p className="text-xs text-text-muted">{t.role}</p>
                </div>
                <div className="ml-auto flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, idx) => (
                    <Star key={idx} size={12} className="fill-accent text-accent" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

---

## Task 11 — About Section

**Files:**
- Create: `src/components/sections/About.tsx`

- [ ] **Step 1: Create `src/components/sections/About.tsx`**

```typescript
'use client'
import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import MagneticButton from '@/components/ui/MagneticButton'

const stats = [
  { value: '3+', label: 'Projects Delivered' },
  { value: '100%', label: 'Client Satisfaction' },
  { value: '2+', label: 'Years Building' },
  { value: '₦0', label: 'Hidden Fees' },
]

const values = [
  'Business-first thinking — I build for results, not just code.',
  'Fast turnaround without cutting corners.',
  'Clear communication throughout every project.',
  'Mobile-first, SEO-ready by default.',
]

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left — text */}
        <div>
          <SectionHeading
            label="About Me"
            title="I Help Businesses Grow Online"
          />
          <p className="text-text-muted leading-relaxed mb-6">
            I&apos;m Tejiri Gbenedio — an AI Automation & Full-Stack Web Developer based in Nigeria.
            I don&apos;t just write code; I build digital tools that solve real business problems.
          </p>
          <p className="text-text-muted leading-relaxed mb-8">
            Whether you need a clean business website, a full e-commerce platform, or an automation
            that saves your team hours every week — I build it with attention to detail, on time, and
            within budget.
          </p>
          <ul className="space-y-3 mb-10">
            {values.map((v) => (
              <li key={v} className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-accent mt-0.5 shrink-0" />
                <span className="text-sm text-text-primary">{v}</span>
              </li>
            ))}
          </ul>
          <MagneticButton href="https://wa.me/2347052381068" variant="primary">
            Work With Me
          </MagneticButton>
        </div>

        {/* Right — stats */}
        <div className="grid grid-cols-2 gap-5">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-7 border border-gray-100 hover:border-accent/40 hover:shadow-md transition-all duration-300 text-center"
            >
              <p className="font-heading font-extrabold text-4xl text-accent mb-2">{stat.value}</p>
              <p className="text-sm text-text-muted font-body">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

---

## Task 12 — Contact Section

**Files:**
- Create: `src/components/sections/Contact.tsx`

- [ ] **Step 1: Create `src/components/sections/Contact.tsx`**

```typescript
'use client'
import { motion } from 'framer-motion'
import { MessageCircle, Mail, Linkedin, Github, ArrowUpRight } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import MagneticButton from '@/components/ui/MagneticButton'
import { contactLinks } from '@/data'

const channels = [
  {
    icon: <MessageCircle size={22} />,
    label: 'WhatsApp',
    value: '+234 705 238 1068',
    href: contactLinks.whatsapp,
    description: 'Fastest response. Message me directly.',
  },
  {
    icon: <Mail size={22} />,
    label: 'Email',
    value: 'tejirigbe@gmail.com',
    href: `mailto:${contactLinks.email}`,
    description: 'For detailed project briefs.',
  },
  {
    icon: <Linkedin size={22} />,
    label: 'LinkedIn',
    value: 'Gbenedio Tejiri',
    href: contactLinks.linkedin,
    description: 'Connect professionally.',
  },
  {
    icon: <Github size={22} />,
    label: 'GitHub',
    value: 'Tejiri-Gbenedio',
    href: contactLinks.github,
    description: 'Browse my open source work.',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <SectionHeading
          label="Get In Touch"
          title="Ready to Build Something Great?"
          subtitle="Tell me about your project and let's figure out the best way to bring it to life."
          centered
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <MagneticButton href={contactLinks.whatsapp} variant="primary" className="text-base px-10 py-4">
            Let&apos;s Have A Talk
          </MagneticButton>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-left">
          {channels.map((ch, i) => (
            <motion.a
              key={ch.label}
              href={ch.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ y: -2 }}
              className="group flex items-start gap-4 p-5 bg-background rounded-2xl border border-gray-100 hover:border-accent/40 hover:shadow-md transition-all duration-300"
            >
              <div className="w-11 h-11 bg-accent-light rounded-xl flex items-center justify-center text-accent shrink-0 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                {ch.icon}
              </div>
              <div className="flex-1">
                <p className="font-heading font-semibold text-sm text-text-primary mb-0.5">{ch.label}</p>
                <p className="text-sm text-accent font-medium mb-0.5">{ch.value}</p>
                <p className="text-xs text-text-muted">{ch.description}</p>
              </div>
              <ArrowUpRight size={16} className="text-text-muted group-hover:text-accent transition-colors mt-1 shrink-0" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
```

---

## Task 13 — Footer

**Files:**
- Create: `src/components/Footer.tsx`

- [ ] **Step 1: Create `src/components/Footer.tsx`**

```typescript
import { contactLinks } from '@/data'
import { Github, Linkedin, MessageCircle } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-shadow-black text-white py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-heading font-extrabold text-lg">
          Tejiri<span className="text-accent">.</span>
        </p>
        <p className="text-white/40 text-sm text-center">
          © {year} Tejiri Gbenedio · AI Automation & Full-Stack Web Developer
        </p>
        <div className="flex items-center gap-4">
          <a href={contactLinks.github} target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-accent transition-colors">
            <Github size={18} />
          </a>
          <a href={contactLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-accent transition-colors">
            <Linkedin size={18} />
          </a>
          <a href={contactLinks.whatsapp} target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-accent transition-colors">
            <MessageCircle size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}
```

---

## Task 14 — Assemble Main Page

**Files:**
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Replace `src/app/page.tsx`**

```typescript
import Navbar from '@/components/Navbar'
import Hero from '@/components/sections/Hero'
import Projects from '@/components/sections/Projects'
import Services from '@/components/sections/Services'
import Pricing from '@/components/sections/Pricing'
import Testimonials from '@/components/sections/Testimonials'
import About from '@/components/sections/About'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Projects />
      <Services />
      <Pricing />
      <Testimonials />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}
```

- [ ] **Step 2: Add placeholder image to `public/`**

Download or create a gray 800×500 placeholder image at `public/placeholder-project.jpg`.
Run this in PowerShell to create a simple base64 placeholder:

```powershell
# This creates a minimal valid JPEG placeholder
$bytes = [System.Convert]::FromBase64String("/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAyADIDASIAAhEBAxEB/8QAGgABAAMBAQEAAAAAAAAAAAAAAAUGBwQCA//EACcQAAIBAwQBBAMBAAAAAAAAAAECAwQFERIhMUFRBhNhcZHB0f/EABYBAQEBAAAAAAAAAAAAAAAAAAECAv/EABYRAQEBAAAAAAAAAAAAAAAAAAABEf/aAAwDAQACEQMRAD8A6kAAAAAAAAAAAAAAAA5mpa/p2m3Udrcy3MlyqM7Q2trNPKqsEZ2RVd2RWJJJJJJe5VoarperWeqbqVrK0qlm5L1M4ys4SxnGcJjIyrFnGVYqaAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/9k=")
[System.IO.File]::WriteAllBytes("public/placeholder-project.jpg", $bytes)
Write-Host "Placeholder created"
```

- [ ] **Step 3: Run dev server and do a full visual check**

```powershell
npm run dev
```

Open `http://localhost:3000` and verify:
- [ ] Navbar appears and is transparent, turns white on scroll
- [ ] Hero headline renders with gradient text mask effect
- [ ] Both CTA buttons have magnetic hover effect
- [ ] All 7 sections visible when scrolling
- [ ] Project cards show stacked shadow boxes on hover
- [ ] Services tiles lift on hover
- [ ] Pricing cards show correctly (middle card dark + scaled)
- [ ] Contact channels link correctly
- [ ] Footer renders
- [ ] Mobile menu works on small viewport

---

## Task 15 — Build Check & Vercel Prep

**Files:**
- Modify: `next.config.ts`

- [ ] **Step 1: Update `next.config.ts` to allow external images (for when real project screenshots are added)**

```typescript
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: '**' },
    ],
  },
}

export default nextConfig
```

- [ ] **Step 2: Run production build to catch TypeScript/lint errors**

```powershell
npm run build
```
Expected: `✓ Compiled successfully` with no errors. Fix any TypeScript errors before proceeding.

- [ ] **Step 3: Confirm build output**

```powershell
npm run start
```
Open `http://localhost:3000` — verify production build looks identical to dev. Stop server.

---

## Spec Coverage Check

| Requirement | Covered by |
|---|---|
| Hero with tagline + CTA buttons | Task 6 |
| Subtle animations in hero | Task 6 (float blob, fade-up) |
| Video/gradient text mask on headline | Task 6 (gradient text clip) |
| Magnetic CTA buttons | Task 4 (MagneticButton) |
| Project case study cards | Task 4 (ProjectCard) + Task 7 |
| Stacked shadow bounce on project cards | Task 1 globals.css + Task 4 |
| 8 Services | Task 8 |
| 4 Pricing tiers in ₦ | Task 9 |
| Testimonials with star ratings | Task 10 |
| Outcome-focused About + stats | Task 11 |
| Contact: WhatsApp, Email, LinkedIn, GitHub | Task 12 |
| Dark footer | Task 13 |
| Smooth scroll navbar | Task 5 |
| Framer Motion entrance animations | All section components |
| Vercel-ready build | Task 15 |
| Emerald green + warm off-white palette | Task 1 (Tailwind config) |
| Syne + Inter fonts | Task 2 |
