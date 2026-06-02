# Automations Showcase — Design Spec

## Goal

Add an n8n Automations showcase to the Tejiri Gbenedio portfolio: a homepage section with 6 mini-cards and a dedicated `/automations` detail page with full workflow descriptions and screenshots.

---

## Architecture

### New Files

| File | Purpose |
|------|---------|
| `src/app/automations/page.tsx` | `/automations` route — full detail page |
| `src/components/sections/Automations.tsx` | Homepage section: 6 mini-cards + CTA |
| `src/components/ui/AutomationDetailCard.tsx` | Full card component used on detail page |

### Modified Files

| File | Change |
|------|--------|
| `src/data/index.ts` | Add `automations` array (6 entries) |
| `src/components/Navbar.tsx` | Add "Automations" nav link |
| `src/app/page.tsx` | Add `<Automations />` between `<Projects />` and `<Services />` |
| `public/` | Copy 6 workflow screenshots from source folder |

---

## Data Structure

Add to `src/data/index.ts`:

```ts
export interface Automation {
  id: number
  title: string
  icon: string           // lucide icon name
  tagline: string        // 1-line for homepage mini-card
  tools: string[]        // badge row: ['n8n', 'GPT-4.1-mini', 'Gmail', 'Airtable']
  description: string    // full paragraph(s) for detail page
  businessImpact: string // highlighted callout text
  image: string          // /public filename, e.g. '/email-classification.png'
}
```

### 6 Automation Entries

1. **AI Email Classification & Triage**
   - icon: `Mail`
   - tagline: "Auto-sorts and routes your inbox before a human ever reads it."
   - tools: `['n8n', 'GPT-4.1-mini', 'Gmail', 'Airtable']`
   - image: `/email-classification.png`

2. **Gym Life AI Receptionist**
   - icon: `Dumbbell`
   - tagline: "24/7 member management and instant payment links on Telegram."
   - tools: `['n8n', 'GPT-4.1-mini', 'Telegram', 'Airtable', 'Flutterwave']`
   - image: `/gym-ai-receptionist.png`

3. **Konfam FM AI Assistant — RAG Chatbot**
   - icon: `Radio`
   - tagline: "AI assistant that knows the station's content and captures advertiser leads."
   - tools: `['n8n', 'GPT-4.1-mini', 'Pinecone', 'Telegram', 'Google Sheets']`
   - image: `/konfam-rag-agent.png`

4. **Mama Tee's Kitchen — AI Voice Receptionist**
   - icon: `Phone`
   - tagline: "Phone AI that takes orders, books reservations, and alerts staff instantly."
   - tools: `['n8n', 'Vapi', 'Airtable', 'Telegram']`
   - image: `/mama-tee-call-handler.png`

5. **Mama Tee's Kitchen — AI Chat Ordering System**
   - icon: `MessageCircle`
   - tagline: "Website chat AI that guides customers through ordering 24/7."
   - tools: `['n8n', 'GPT-4o', 'Airtable', 'Webhook']`
   - image: `/mama-tee-chat-handler.png`

6. **Autonomous Job Hunt System**
   - icon: `Briefcase`
   - tagline: "5-workflow pipeline that scrapes, scores, and writes cover letters automatically."
   - tools: `['n8n', 'Groq', 'Llama 3.3', 'Google Sheets', 'Telegram']`
   - image: `/job-hunt-overview.png`

---

## Homepage Section (`Automations.tsx`)

**Position:** Between `<Projects />` and `<Services />` in `page.tsx`.

**Section heading:** Uses existing `SectionHeading` component.
- Label (gold): `"WHAT I BUILD WITH AI"`
- Title: `"AI Automations"`
- Subtitle: `"Workflows that run your business while you sleep."`

**Mini-card grid:**
- Layout: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`
- Each card contains:
  - Lucide icon (emerald, 24px)
  - Title (`font-syne`, bold)
  - Tagline (1 line, muted gray)
  - Tool badge row (same pill style as Hero tech pills)
- Hover state: emerald border glow + box shadow lift (same pattern as About stat cards)
- Cards are **not individually clickable** — no link per card

**CTA:** Single `MagneticButton` variant `"outline"` — `"Explore All Automations →"` — links to `/automations`. Centered below the grid.

**Entry animation:** `motion.div` with `initial={{ opacity: 0, y: 20 }}`, `whileInView={{ opacity: 1, y: 0 }}`, `viewport={{ once: true }}`, staggered by card index.

---

## Detail Page (`/automations`)

**Route:** `src/app/automations/page.tsx` — uses shared `<Navbar />` and `<Footer />`. No pixel trail.

### Page Header

- `h1` in Fraunces display font: `"AI Automations"`
- Subtitle paragraph: `"Workflows I've built that run real businesses."`
- Same font sizing as Hero h1 but smaller (`clamp(2rem, 5vw, 3.5rem)`)
- Warm off-white background (`#F8F7F4`) matching the rest of the site

### AutomationDetailCard Layout

Each of the 6 automations gets one `AutomationDetailCard`. Cards alternate layout:
- **Odd cards (1, 3, 5):** Screenshot left, text right
- **Even cards (2, 4, 6):** Text left, screenshot right

On mobile: screenshot always stacks above text (single column).

**Card structure:**
```
[screenshot col]                [text col]
 - next/Image, rounded-2xl      - Title (font-syne, bold, large)
 - floating shadow hover        - Tool badge row
   (reuses ProjectCard pattern) - Description paragraphs
                                - Business Impact callout block
```

**Business Impact callout block:**
- Background: `rgba(16, 185, 129, 0.07)` (very light emerald tint)
- Left border: `3px solid #10B981`
- Padding: `p-4`
- Icon: `Lightbulb` (lucide, emerald, 16px) + label `"Business Impact"` in emerald, small caps
- Body: italic text, color `#374151`

**Screenshot:**
- Uses `next/Image` with `fill` or explicit dimensions
- Wrapper uses `isolation: isolate` (same as ProjectCard)
- Floating shadow hover animation reused from `ProjectCard.tsx` (emerald + gold layers)

**Dividers:** A subtle `<hr>` or spacing between cards.

**Card entry animation:** `whileInView` fade + slide up, `once: true`, stagger by index.

### Bottom CTA

Below all 6 cards:
```
Ready to automate your business?
[ Let's Have A Talk ]   ← MagneticButton primary → WhatsApp link
```

---

## Navbar Change

Add `"Automations"` link to the nav items array in `Navbar.tsx`, pointing to `/automations`. Positioned after "Projects" and before "Services" to match page order.

---

## Screenshot Files

Copy from source folder into `public/`:

| Source filename | Public filename |
|----------------|-----------------|
| `email classification workflow.png` | `email-classification.png` |
| `gym ai receptionist.png` | `gym-ai-receptionist.png` |
| `Konfam fm rag agent.png` | `konfam-rag-agent.png` |
| `mama tee call handler.png` | `mama-tee-call-handler.png` |
| `mama tee chat handler.png` | `mama-tee-chat-handler.png` |
| `Autonomous Job Hunt System -/wf00 job hunt.png` | `job-hunt-overview.png` |

---

## What Is Explicitly Out of Scope

- Individual cards on the homepage are **not** clickable links
- Sub-workflow screenshots for the Job Hunt System are **not** shown (only `wf00`)
- No lightbox/modal image zoom
- No pixel trail on the `/automations` page
- No filtering or sorting of automations
