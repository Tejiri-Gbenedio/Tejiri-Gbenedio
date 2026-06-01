# Gooey Pixel Trail Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add an emerald gooey pixel trail cursor effect to the Hero and About sections.

**Architecture:** Four new utility files (2 hooks + 2 components) are created first, then Hero and About are each updated with a self-contained overlay layer that sits above backgrounds but below content. Touch devices are gated out at runtime with `matchMedia('(pointer: fine)')`.

**Tech Stack:** Next.js 16, React 19, TypeScript, Tailwind v4, framer-motion v12. No new npm packages.

---

## File Map

| Action | Path |
|--------|------|
| Create | `src/hooks/use-dimensions.ts` |
| Create | `src/hooks/use-screen-size.ts` |
| Create | `src/components/ui/gooey-filter.tsx` |
| Create | `src/components/ui/pixel-trail.tsx` |
| Modify | `src/components/sections/Hero.tsx` |
| Modify | `src/components/sections/About.tsx` |

---

## Task 1: `useDimensions` hook

**Files:**
- Create: `src/hooks/use-dimensions.ts`

- [ ] **Step 1: Create the file**

```ts
import { RefObject, useEffect, useState } from 'react'

interface Dimensions {
  width: number
  height: number
}

export function useDimensions(
  ref: RefObject<HTMLElement | null>
): Dimensions {
  const [dimensions, setDimensions] = useState<Dimensions>({ width: 0, height: 0 })

  useEffect(() => {
    const update = () => {
      if (ref.current) {
        const { width, height } = ref.current.getBoundingClientRect()
        setDimensions({ width, height })
      }
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [ref])

  return dimensions
}
```

- [ ] **Step 2: Verify TypeScript compiles**

Run: `npx tsc --noEmit`
Expected: no errors from this file

---

## Task 2: `useScreenSize` hook

**Files:**
- Create: `src/hooks/use-screen-size.ts`

- [ ] **Step 1: Create the file**

```ts
'use client'
import { useEffect, useState } from 'react'

const SCREEN_SIZES = ['xs', 'sm', 'md', 'lg', 'xl', '2xl'] as const
export type ScreenSize = (typeof SCREEN_SIZES)[number]

const sizeOrder: Record<ScreenSize, number> = {
  xs: 0, sm: 1, md: 2, lg: 3, xl: 4, '2xl': 5,
}

class ComparableScreenSize {
  constructor(private value: ScreenSize) {}
  toString(): ScreenSize { return this.value }
  valueOf(): number { return sizeOrder[this.value] }
  equals(other: ScreenSize): boolean { return this.value === other }
  lessThan(other: ScreenSize): boolean { return this.valueOf() < sizeOrder[other] }
  greaterThan(other: ScreenSize): boolean { return this.valueOf() > sizeOrder[other] }
  lessThanOrEqual(other: ScreenSize): boolean { return this.valueOf() <= sizeOrder[other] }
  greaterThanOrEqual(other: ScreenSize): boolean { return this.valueOf() >= sizeOrder[other] }
}

export function useScreenSize(): ComparableScreenSize {
  const [screenSize, setScreenSize] = useState<ScreenSize>('xs')

  useEffect(() => {
    const handle = () => {
      const w = window.innerWidth
      if (w >= 1536) setScreenSize('2xl')
      else if (w >= 1280) setScreenSize('xl')
      else if (w >= 1024) setScreenSize('lg')
      else if (w >= 768) setScreenSize('md')
      else if (w >= 640) setScreenSize('sm')
      else setScreenSize('xs')
    }
    handle()
    window.addEventListener('resize', handle)
    return () => window.removeEventListener('resize', handle)
  }, [])

  return new ComparableScreenSize(screenSize)
}
```

- [ ] **Step 2: Verify TypeScript compiles**

Run: `npx tsc --noEmit`
Expected: no errors

---

## Task 3: `GooeyFilter` component

**Files:**
- Create: `src/components/ui/gooey-filter.tsx`

- [ ] **Step 1: Create the file**

```tsx
export function GooeyFilter({
  id = 'goo-filter',
  strength = 10,
}: {
  id?: string
  strength?: number
}) {
  return (
    <svg className="hidden absolute" aria-hidden="true">
      <defs>
        <filter id={id}>
          <feGaussianBlur in="SourceGraphic" stdDeviation={strength} result="blur" />
          <feColorMatrix
            in="blur"
            type="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
            result="goo"
          />
          <feComposite in="SourceGraphic" in2="goo" operator="atop" />
        </filter>
      </defs>
    </svg>
  )
}
```

- [ ] **Step 2: Verify TypeScript compiles**

Run: `npx tsc --noEmit`
Expected: no errors

---

## Task 4: `PixelTrail` component

**Files:**
- Create: `src/components/ui/pixel-trail.tsx`

- [ ] **Step 1: Create the file**

```tsx
'use client'
import React, { useCallback, useMemo, useRef } from 'react'
import { motion, useAnimationControls } from 'framer-motion'
import { useDimensions } from '@/hooks/use-dimensions'

interface PixelTrailProps {
  pixelSize: number
  fadeDuration?: number
  delay?: number
  className?: string
  pixelClassName?: string
}

export function PixelTrail({
  pixelSize = 20,
  fadeDuration = 500,
  delay = 0,
  className,
  pixelClassName,
}: PixelTrailProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const dimensions = useDimensions(containerRef)
  const trailId = useRef(Math.random().toString(36).slice(2))

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const x = Math.floor((e.clientX - rect.left) / pixelSize)
      const y = Math.floor((e.clientY - rect.top) / pixelSize)
      const el = document.getElementById(`${trailId.current}-pixel-${x}-${y}`)
      if (el) {
        const fn = (el as HTMLElement & { __animatePixel?: () => void }).__animatePixel
        if (fn) fn()
      }
    },
    [pixelSize]
  )

  const columns = useMemo(() => Math.ceil(dimensions.width / pixelSize), [dimensions.width, pixelSize])
  const rows = useMemo(() => Math.ceil(dimensions.height / pixelSize), [dimensions.height, pixelSize])

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 w-full h-full pointer-events-auto${className ? ` ${className}` : ''}`}
      onMouseMove={handleMouseMove}
    >
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <div key={rowIndex} className="flex">
          {Array.from({ length: columns }).map((_, colIndex) => (
            <PixelDot
              key={`${colIndex}-${rowIndex}`}
              id={`${trailId.current}-pixel-${colIndex}-${rowIndex}`}
              size={pixelSize}
              fadeDuration={fadeDuration}
              delay={delay}
              className={pixelClassName}
            />
          ))}
        </div>
      ))}
    </div>
  )
}

interface PixelDotProps {
  id: string
  size: number
  fadeDuration: number
  delay: number
  className?: string
}

const PixelDot = React.memo(function PixelDot({ id, size, fadeDuration, delay, className }: PixelDotProps) {
  const controls = useAnimationControls()

  const animatePixel = useCallback(() => {
    controls.start({
      opacity: [1, 0],
      transition: { duration: fadeDuration / 1000, delay: delay / 1000 },
    })
  }, [controls, fadeDuration, delay])

  const ref = useCallback(
    (node: HTMLDivElement | null) => {
      if (node) {
        (node as HTMLDivElement & { __animatePixel?: () => void }).__animatePixel = animatePixel
      }
    },
    [animatePixel]
  )

  return (
    <motion.div
      id={id}
      ref={ref}
      className={className}
      style={{ width: `${size}px`, height: `${size}px` }}
      initial={{ opacity: 0 }}
      animate={controls}
    />
  )
})
```

- [ ] **Step 2: Verify TypeScript compiles**

Run: `npx tsc --noEmit`
Expected: no errors

- [ ] **Step 3: Commit the four new utility files**

```bash
git add src/hooks/use-dimensions.ts src/hooks/use-screen-size.ts src/components/ui/gooey-filter.tsx src/components/ui/pixel-trail.tsx
git commit -m "feat: add useDimensions, useScreenSize, GooeyFilter, PixelTrail utilities"
```

---

## Task 5: Integrate into Hero section

**Files:**
- Modify: `src/components/sections/Hero.tsx`

The Hero section already has `relative` and `overflow-hidden` on its `<section>`. The plan is:
1. Add `'use client'` state for `isMouseDevice` (same pattern as `CustomCursor`)
2. Import `GooeyFilter`, `PixelTrail`, `useScreenSize`
3. Insert the gooey overlay between the decorative glows and the content div
4. Wrap the existing content div in `<div className="relative z-[2]">`

- [ ] **Step 1: Replace `Hero.tsx` with the updated version**

```tsx
'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import MagneticButton from '@/components/ui/MagneticButton'
import { GooeyFilter } from '@/components/ui/gooey-filter'
import { PixelTrail } from '@/components/ui/pixel-trail'
import { useScreenSize } from '@/hooks/use-screen-size'
import { techPills, contactLinks } from '@/data'

export default function Hero() {
  const [isMouseDevice, setIsMouseDevice] = useState(false)
  const screenSize = useScreenSize()

  useEffect(() => {
    if (window.matchMedia('(pointer: fine)').matches) setIsMouseDevice(true)
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center pt-16 px-6 overflow-hidden"
      style={{ background: '#F8F7F4' }}
    >
      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#11182712 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* Floating accent glows */}
      <div
        className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #10B98120 0%, transparent 70%)',
          animation: 'float 6s ease-in-out infinite',
        }}
      />
      <div
        className="absolute bottom-1/4 left-1/3 w-64 h-64 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #C9A43E14 0%, transparent 70%)',
          animation: 'float 8s ease-in-out infinite reverse',
        }}
      />

      {/* Gooey pixel trail — mouse devices only */}
      {isMouseDevice && (
        <>
          <GooeyFilter id="gooey-hero" strength={5} />
          <div
            className="absolute inset-0 z-[1] pointer-events-none"
            style={{ filter: 'url(#gooey-hero)' }}
          >
            <PixelTrail
              pixelSize={screenSize.lessThan('md') ? 24 : 32}
              fadeDuration={600}
              delay={0}
              pixelClassName="bg-[#10B981]"
            />
          </div>
        </>
      )}

      {/* Content */}
      <div className="relative z-[2] max-w-6xl mx-auto w-full">
        {/* Available badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-6"
        >
          <span className="w-2 h-2 rounded-full" style={{ background: '#10B981', boxShadow: '0 0 0 4px #10B98130' }} />
          <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: '#10B981', fontFamily: 'var(--font-syne)' }}>
            Available for Projects
          </span>
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <h1
            className="font-black leading-[1.04]"
            style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.8rem, 7vw, 6rem)' }}
          >
            <span className="block" style={{ color: '#111827' }}>AI Automation</span>
            <span
              className="block text-clip"
              style={{
                backgroundImage: 'linear-gradient(90deg, #10B981 0%, #C9A43E 35%, #F59E0B 55%, #10B981 80%, #059669 100%)',
                backgroundSize: '200% auto',
                fontStyle: 'italic',
                animation: 'gradientFlow 3s linear infinite',
              }}
            >
              &amp; Full-Stack
            </span>
            <span className="block" style={{ color: '#111827' }}>Developer.</span>
          </h1>
        </motion.div>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 text-lg md:text-xl max-w-xl leading-relaxed"
          style={{ color: '#6B7280' }}
        >
          I build Automations, Modern Websites, E-commerce Platforms, Apps and AI-powered Digital
          Experiences that help businesses grow online.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <MagneticButton href={contactLinks.whatsapp} variant="primary">
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
          transition={{ duration: 0.6, delay: 0.65 }}
          className="mt-14 flex flex-wrap gap-2"
        >
          {techPills.map((tech, i) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.65 + i * 0.05 }}
              className="text-xs px-3 py-1.5 rounded-full border font-mono"
              style={{ background: '#FAFAF8', borderColor: '#E5E7EB', color: '#6B7280' }}
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ color: '#9CA3AF' }}
      >
        <span className="text-xs uppercase tracking-widest" style={{ fontFamily: 'var(--font-syne)' }}>Scroll</span>
        <motion.div animate={{ y: [0, 7, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
          <ArrowDown size={15} />
        </motion.div>
      </motion.div>
    </section>
  )
}
```

- [ ] **Step 2: Check dev server for errors**

Run: `npx next dev` (already running on port 3000 — check browser console for errors)
Expected: Hero loads, no console errors, pixel trail appears on mouse move

---

## Task 6: Integrate into About section

**Files:**
- Modify: `src/components/sections/About.tsx`

The About section's `<section>` tag currently has no `relative` or `overflow-hidden`. Both are needed for `absolute inset-0` to work correctly. They are added in this step.

- [ ] **Step 1: Replace `About.tsx` with the updated version**

```tsx
'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import MagneticButton from '@/components/ui/MagneticButton'
import { GooeyFilter } from '@/components/ui/gooey-filter'
import { PixelTrail } from '@/components/ui/pixel-trail'
import { useScreenSize } from '@/hooks/use-screen-size'
import { contactLinks } from '@/data'

const stats = [
  { value: '10+', label: 'Projects Delivered' },
  { value: '100%', label: 'Client Satisfaction' },
  { value: '2+', label: 'Years Building' },
]

const values = [
  'Business-first thinking — I build for results, not just code.',
  'Fast turnaround without cutting corners.',
  'Clear communication throughout every project.',
  'Mobile-first and SEO-ready by default.',
]

export default function About() {
  const [isMouseDevice, setIsMouseDevice] = useState(false)
  const screenSize = useScreenSize()

  useEffect(() => {
    if (window.matchMedia('(pointer: fine)').matches) setIsMouseDevice(true)
  }, [])

  return (
    <section id="about" className="relative overflow-hidden py-24 px-6" style={{ background: '#F8F7F4' }}>
      {/* Gooey pixel trail — mouse devices only */}
      {isMouseDevice && (
        <>
          <GooeyFilter id="gooey-about" strength={5} />
          <div
            className="absolute inset-0 z-[1] pointer-events-none"
            style={{ filter: 'url(#gooey-about)' }}
          >
            <PixelTrail
              pixelSize={screenSize.lessThan('md') ? 24 : 32}
              fadeDuration={600}
              delay={0}
              pixelClassName="bg-[#10B981]"
            />
          </div>
        </>
      )}

      {/* Content */}
      <div className="relative z-[2] max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <div>
          <SectionHeading label="About Me" title="I Help Businesses Grow Online" />
          <p className="leading-relaxed mb-5" style={{ color: '#6B7280' }}>
            I&apos;m Tejiri Gbenedio — an AI Automation & Full-Stack Web Developer based in Nigeria.
            I don&apos;t just write code; I build digital tools that solve real business problems.
          </p>
          <p className="leading-relaxed mb-8" style={{ color: '#6B7280' }}>
            Whether you need a clean business website, a full e-commerce platform, or an automation
            that saves your team hours every week — I build it with attention to detail, on time,
            and within budget.
          </p>
          <ul className="space-y-3 mb-10">
            {values.map((v) => (
              <li key={v} className="flex items-start gap-3">
                <CheckCircle2 size={17} className="mt-0.5 shrink-0" style={{ color: '#10B981' }} />
                <span className="text-sm" style={{ color: '#111827' }}>{v}</span>
              </li>
            ))}
          </ul>
          <MagneticButton href={contactLinks.whatsapp} variant="primary">
            Work With Me
          </MagneticButton>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="p-7 rounded-2xl border text-center transition-all duration-300"
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
              <p className="font-extrabold text-4xl mb-2" style={{ fontFamily: 'var(--font-syne)', color: '#10B981' }}>
                {stat.value}
              </p>
              <p className="text-sm" style={{ color: '#6B7280' }}>{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Verify in browser**

Navigate to `http://localhost:3000/#about` — move mouse around the About section.
Expected: emerald pixel blobs appear and fade, gooey merge effect visible when blobs overlap

- [ ] **Step 3: Final commit**

```bash
git add src/components/sections/Hero.tsx src/components/sections/About.tsx
git commit -m "feat: add gooey pixel trail to Hero and About sections"
```

---

## Self-Review Checklist

- [x] `useDimensions` — Task 1 ✓
- [x] `useScreenSize` — Task 2 ✓
- [x] `GooeyFilter` — Task 3 ✓
- [x] `PixelTrail` — Task 4 ✓
- [x] Hero integration with device gate — Task 5 ✓
- [x] About integration with `relative overflow-hidden` added — Task 6 ✓
- [x] Unique filter IDs per section (`gooey-hero`, `gooey-about`) — ✓
- [x] No new npm packages — ✓
- [x] `pointer-events-none` on overlay div — ✓
- [x] Touch device gate via `matchMedia('(pointer: fine)')` — ✓
