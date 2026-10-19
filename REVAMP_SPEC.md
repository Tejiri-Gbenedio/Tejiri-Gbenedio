# PORTFOLIO REVAMP SPECIFICATION & PHASE CHECKLIST
**Domain:** `tejiri-gbenedio.vercel.app`  
**Identity:** Tejiri Gbenedio — AI Automation & Full-Stack Developer  
**Verification:** Verified StackedHQ Founding Member · 965 Stacks · 14 Peer-Reviewed Builds

---

## 5-PHASE EXECUTION CHECKLIST

### [x] Phase 1: Spec Files, Design System, Motion Primitives & Global Shell
- [x] Create `DESIGN_SYSTEM.md` and `REVAMP_SPEC.md` in root.
- [x] Configure `globals.css` with Obsidian & Brushed Brass tokens, typography variables, grid textures, and hairline utilities.
- [x] Configure `layout.tsx` with Google fonts (`Plus Jakarta Sans`, `Geist Sans`, `JetBrains Mono`).
- [x] Create reusable motion primitives in `src/components/motion/`:
  - `MotionProvider.tsx` (Reduced-motion context + manual toggle state).
  - `MaskText.tsx` (Line-clipped editorial text reveals).
  - `RevealSection.tsx` (Weighted scroll entrance with layered depth).
  - `StaggerGrid.tsx` (Staggered child animations).
- [x] Refactor Global Navbar (`src/components/Navbar.tsx`) & Mobile Drawer:
  - Left: `Tejiri.Dev` brand mark + subtle pill badge with pulsing `#10B981` dot (`Live · Available for Projects`).
  - Right: Dedicated Next.js routes (`/`, `/projects`, `/automations`, `/services`, `/about`, `/cv`) + metallic booking CTA.
  - Mobile Drawer: Smooth animated drawer with thumb-friendly layout and reachable booking action.
- [x] Refactor Global Footer (`src/components/Footer.tsx`):
  - Direct contact cards (WhatsApp `+234 705 238 1068`, Email `tejirigbe@gmail.com`, LinkedIn, GitHub).
  - Interactive accessibility toggle: `Motion: Enhanced / Reduced`.
- [x] Verification:
  - Run TypeScript compiler and Next.js build check (both passed with code 0).
  - Local HTTP and DOM verification completed.
  - Documented tested items vs limitations; awaiting user approval before Phase 2.

---

### [x] Phase 2: Central Data Layer & Cinematic Home Page (`/`)
- [x] Typography Scale Fix: Title Case navbar links in `font-sans text-[15px] md:text-base`, larger `Tejiri.Dev` logo, increased status badge and CTA sizes, and generous `max-w-7xl` container padding.
- [x] Create `src/data/portfolio.ts` with all typed data:
  - 6 Web & App Projects (Flagship + Archive).
  - 10 AI Systems & Automations (Top 6 priority builds with pipelines + secondary archive).
  - Services (3 High-Ticket Pillars), Testimonials, Experience & Stack Matrix.
- [x] Build `<WorkflowPipeline nodes={string[]} />` component with animated sequence connectors and responsive mobile ergonomics.
- [x] Rebuild `src/app/page.tsx` (`/` Home):
  - Hero Split: Masked headline reveal ("AI Automation & Full-Stack Developer." + Tejiri Gbenedio introduction).
  - Portrait scale-and-settle reveal (`/tejiri-portrait.jpg`) + Brushed Brass `VERIFIED STACKEDHQ MEMBER · 965 STACKS` badge.
  - Primary booking CTA ("Let's Have A Talk") + Secondary "View All Projects".
  - Scroll-triggered dual-discipline preview (Flagship Voice AI agent pipeline + Mama Tee's & DentalCare HQ) with routes to `/automations` and `/projects`.
  - Removed all legacy single-page dumps (old "Projects That Drive Results", 8 generic service cards, CV dump) from `/`.
- [x] Verification: TypeScript compiler `0` errors, Next.js build `0` errors, DOM verified.

---

### [x] Phase 3: Web & App Engineering Page (`/projects`)
- [x] Phase 2 visual refinements applied:
  - `<WorkflowPipeline />` fixed to stay on a single horizontal row on desktop (`lg:flex-nowrap`, `flex-1 min-w-[140px]`, compact connectors).
  - StackedHQ portrait badge upgraded to solid Metallic Brushed Brass (`bg-[#D4AF37] text-[#0A0A0B] font-mono font-bold shadow-2xl border border-[#F4F4F0]/20`).
  - Reusable `<ProjectPreview />` component created with macOS studio browser frame, Microlink live preview fallback, and local image rendering.
- [x] Create `src/app/projects/page.tsx` with dedicated metadata and OpenGraph configuration.
- [x] Build `src/components/projects/ProjectsView.tsx`:
  - Editorial header with `MaskText` line reveal and monospace section badge.
  - Interactive category filter tabs (`All`, `AI Web Apps`, `Corporate & SaaS`, `E-Commerce & Brand`) with `layoutId` animated pill indicator.
  - Tier 1 — Flagship Case Study spotlights for *Mama Tee's AI Ordering App*, *DentalCare HQ*, and *Rayvora Solar* with rich `<ProjectPreview />` headers, architectural pillars, and direct launch actions.
  - Tier 2 — Swiss Studio Production Index directory table with hover highlighting and responsive mobile cards.
- [x] Verification: Next.js production build (`npm run build`) passed with `0` errors, generating static `/projects` route; DOM checks passed.

---

### [x] Phase 4: AI Systems & Workflows Page (`/automations`)
- [x] Swapped Flagships & Refined Previews:
  - Promoted *Mutiee Bakes* to Flagship with *DentalCare HQ* and *Rayvora Solar*; moved *Mama Tee's AI Ordering App* into Tier 2 Production Directory.
  - Removed floating category badge from `<ProjectPreview />` top-left to eliminate navbar overlap.
  - Wrapped all 3 Flagship previews in macOS Studio Browser window frame with zero text clipping.
- [x] Refactored `src/app/automations/page.tsx` with dedicated metadata and OpenGraph tags.
- [x] Built `src/components/automations/AutomationsView.tsx`:
  - Editorial header with `MaskText` line reveal and monospace section badge.
  - Verified StackedHQ Founding Builder banner (`965 Stacks Earned`, `14 Peer-Reviewed Builds`, external verification link).
  - Top 6 Priority Systems Grid: Voice AI Agent, WhatsApp Order Intake, AI Chatbot, AI Office Assistant, Appointment Reminder, Multi-Channel Intake with single-row `<WorkflowPipeline />` visualizer and tool tags.
  - Secondary Production Workflows Archive: Clean Swiss-style technical directory table for *Konfam FM 89.5*, *Gym Life AI*, *Autonomous Job Hunt*, and *AI Email Classifier*.
- [x] Built `src/components/automations/VideoDemoModal.tsx` with keyboard ESC listener, interactive walkthrough canvas, and direct StackedHQ/WhatsApp demo triggers.
- [x] Verification: TypeScript compiler `0` errors, Next.js build `0` errors, DOM verified.

---

### [x] Phase 5: Services, About, Interactive CV & Final Motion QA
- [x] Create `src/app/services/page.tsx` & `ServicesView.tsx` (3 High-Ticket Pillars + Concrete Deliverables + Tech Stack + Delivery Timelines + Scope Architecture CTA + 4-Stage Architectural Process Accordion).
- [x] Create `src/app/about/page.tsx` & `AboutView.tsx` (Hero Split with Monospace index, MaskText H1, Framed Portrait `/tejiri-portrait.jpg` + Verified StackedHQ Badge, 3-Layer Technical Architecture Matrix, Editorial Client Quotes without star icons or monograms).
- [x] Create `src/app/cv/page.tsx` & `CVView.tsx` (Sticky Executive Action Bar with "Download Official CV (PDF)" linking to `/tejiri-gbenedio-cv.pdf`, Fullscreen PDF Modal Preview, 2-Column Web Resume with Executive Profile, Achievements, Experience, and Discipline Stack).
- [x] Cross-site QA: `npx tsc --noEmit` passed with 0 errors. `npm run build` compiled all 6 routes statically (`/`, `/projects`, `/automations`, `/services`, `/about`, `/cv`). Reduced-motion preference toggle verified.

