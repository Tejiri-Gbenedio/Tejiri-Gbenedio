# DESIGN SYSTEM: OBSIDIAN, BRUSHED BRASS & EDITORIAL MOTION

## 1. Visual Philosophy & Anti-AI Slop Guardrails
This portfolio rejects generic "AI-generated" tropes:
- **STRICTLY BANNED:** Purple/blue/cyan neon gradients, fuzzy high-spread glowing drop shadows, generic "The Need / The Solution" cards, "pill badge soup" (e.g. badges for "Mobile-first" or "Fast load"), generic 8-card icon grids, and generic monogram initials with 5-star ratings.
- **CHOSEN DIRECTION:** Architectural Obsidian & Brushed Brass with weighted, editorial motion physics, high-contrast typography, and crisp hairline grid structures.

---

## 2. Color Palette & Semantic Tokens
| Token | Hex | Semantic Role |
| :--- | :--- | :--- |
| `--color-bg-primary` | `#0A0A0B` | Deep Carbon Black (Global Page Canvas) |
| `--color-surface` | `#121214` | Elevated Matte Obsidian (Cards, Sections) |
| `--color-surface-hover` | `#18181B` | Hover State for Cards & Interactive Elements |
| `--color-border-hairline` | `#222226` | 1px Solid Architectural Grid Lines |
| `--color-border-hover` | `#323238` | Highlighted Border on Card Hover/Focus |
| `--color-text-primary` | `#F4F4F0` | Warm Alabaster (Primary Headings & Key Text) |
| `--color-text-secondary` | `#8E8E93` | Muted Pewter (Body, Subheaders, Metadata) |
| `--color-accent-gold` | `#D4AF37` | Metallic Brushed Brass (Primary CTAs, Active Nav, Badges) |
| `--color-accent-hover` | `#E5A93C` | Bright Warm Gold (Interactive State) |
| `--color-status-live` | `#10B981` | Emerald Green (Pulsing "Available for Projects" Dot) |

---

## 3. Typography Architecture
1. **Display & Headings:** `Plus Jakarta Sans` or `Syne` via `next/font/google`
   - Weight: 700 / 800
   - Tracking: `-0.03em` to `-0.02em` (Tight, assertive)
   - Color: `#F4F4F0`
2. **Body & Paragraphs:** `Geist Sans` or `Inter`
   - Weight: 400 / 500
   - Line Height: 1.6 to 1.7
   - Color: `#8E8E93` (Paragraphs) / `#F4F4F0` (Key Emphases)
3. **Technical & Metadata:** `JetBrains Mono` or `Geist Mono`
   - Role: Route badges, index numerals (`01`, `02`), tech stack tags, pipeline nodes, metrics
   - Letter-spacing: `0.04em`
   - Uppercase or strict numeric tabular styling

---

## 4. Motion Architecture (Framer Motion)
- **Weighted Editorial Easing:** Custom cubic-bezier `[0.22, 1, 0.36, 1]` (Noticeable, crisp deceleration; never rubbery springs).
- **Cinematic Entrance Sequence:**
  1. Structural borders and header hairlines draw in (`0.0s – 0.3s`).
  2. Portrait (`/tejiri-portrait.jpg`) scale-and-settle entrance (`scale: 1.08, opacity: 0, filter: blur(6px)` -> `scale: 1.0, opacity: 1, filter: blur(0px)` over `0.85s`), followed by the Brushed Brass Verified StackedHQ Member badge docking into place.
  3. Hero headings reveal upward through line-clipped masks (`y: 100%` -> `0%`, staggered `0.08s`).
  4. Primary booking CTA glides into focus.
- **Scroll Reveals:** Reusable `<RevealSection />`, `<StaggerGrid />`, and `<MaskText />` with layered depth (`y: 32px` -> `0px`, `opacity: 0` -> `1`).
- **Workflow Connectors:** Sequential left-to-right animated flow lines in `<WorkflowPipeline />`.
- **Accessibility & Reduced Motion:**
  - Full system respect for `useReducedMotion()`.
  - Manual toggle in footer: `Motion: Enhanced / Reduced` stored in client context/localStorage.
  - In reduced motion mode: instant crossfades (`opacity` only, `0` transforms).

---

## 5. Architectural Borders & Grid Utilities
- Crisp `1px solid #222226` hairline borders.
- Architectural blueprint grid texture overlay (subtle `1px` lines repeating at `40px` or `60px` with `0.03` opacity).
- Interactive card surfaces with subtle hover border transition to `#323238` and elevation highlight.