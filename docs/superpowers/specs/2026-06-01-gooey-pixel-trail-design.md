# Gooey Pixel Trail — Design Spec

**Goal:** Add an emerald gooey pixel trail cursor effect to the Hero and About sections of the portfolio.

**Scope:** Hero + About sections only (can be extended to full page later).

---

## What It Does

As the user moves their mouse over the Hero or About sections, a grid of invisible pixel cells covers the section. When the cursor passes through a cell, it lights up in emerald (`#10B981`) and fades out over 600ms. Nearby lit cells are merged into organic liquid blob shapes by an SVG gooey filter — making the trail look like molten glass flowing across the page. The effect is invisible when the mouse is still.

---

## Architecture

### New files

| File | Responsibility |
|------|---------------|
| `src/hooks/use-dimensions.ts` | Measures a container element's live width/height via ResizeObserver fallback to getBoundingClientRect |
| `src/hooks/use-screen-size.ts` | Returns current Tailwind breakpoint as a `ComparableScreenSize` with `.lessThan()`, `.greaterThan()` etc. |
| `src/components/ui/gooey-filter.tsx` | Renders a hidden `<svg>` with a named `<filter>` — Gaussian blur + alpha matrix that merges nearby blobs |
| `src/components/ui/pixel-trail.tsx` | Divides its container into a pixel grid, tracks `onMouseMove`, triggers per-cell fade animations |

### Modified files

| File | Change |
|------|--------|
| `src/components/sections/Hero.tsx` | Add `<GooeyFilter>` + pixel trail overlay layer between background and content |
| `src/components/sections/About.tsx` | Same pattern as Hero |

---

## Component Details

### `GooeyFilter`

Props:
- `id: string` (default `"goo-filter"`) — links the filter to the `filter: url(#id)` CSS on the container
- `strength: number` (default `10`) — stdDeviation of the Gaussian blur; lower = tighter blobs

Renders a single hidden `<svg>` with `<feGaussianBlur>` + `<feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9">` + `<feComposite>`. No state, no effects.

### `PixelTrail`

Props:
- `pixelSize: number` — cell size in px; `32` desktop, `24` mobile
- `fadeDuration: number` — ms for each cell to fade back to transparent; **600**
- `delay: number` — ms before fade starts; **0**
- `pixelClassName?: string` — Tailwind class for pixel color; `"bg-[#10B981]"`

Internals:
- `useDimensions(containerRef)` to get live section dimensions
- Grid = `Math.ceil(width / pixelSize)` columns × `Math.ceil(height / pixelSize)` rows
- Each `PixelDot` is a `motion.div` with its own `useAnimationControls`
- Mouse position snaps to grid cell via `Math.floor((x - rect.left) / pixelSize)`
- Cell ID pattern: `{trailId}-pixel-{col}-{row}` — DOM lookup triggers the cell's animate function
- `uuid` replaced with `useRef(Math.random().toString(36).slice(2))` — stable across renders, no extra package
- `cn()` replaced with plain string concatenation — no shadcn/clsx dependency

### `useDimensions`

- Accepts a `RefObject<HTMLElement | null>`
- Uses `getBoundingClientRect()` on mount + `resize` event listener
- Returns `{ width: number, height: number }`

### `useScreenSize`

- Listens to `window.innerWidth` on resize
- Returns a `ComparableScreenSize` instance with `.lessThan(breakpoint)` etc.
- Breakpoints match Tailwind defaults: xs / sm / md / lg / xl / 2xl

---

## Section Integration

Both Hero and About get the same overlay pattern:

```
<section>                          ← existing section wrapper
  {/* existing backgrounds */}
  <GooeyFilter id="gooey-{section}" strength={5} />
  <div
    className="absolute inset-0 z-[1] pointer-events-none"
    style={{ filter: "url(#gooey-{section})" }}
  >
    <PixelTrail
      pixelSize={screenSize.lessThan('md') ? 24 : 32}
      fadeDuration={600}
      delay={0}
      pixelClassName="bg-[#10B981]"
    />
  </div>
  <div className="relative z-[2]">  ← existing content wrapped here
    ...
  </div>
</section>
```

Each section uses a unique filter `id` (`"gooey-hero"`, `"gooey-about"`) to avoid SVG filter ID collisions.

---

## Device Gating

The effect is **disabled on touch devices**. Both sections check `window.matchMedia('(pointer: fine)')` on mount (same pattern as `CustomCursor`). On touch screens the overlay div is not rendered. This prevents the pixel grid from triggering on scroll-induced synthetic mouse events on mobile.

---

## Z-index Stack

| Layer | z-index |
|-------|---------|
| Section background / decorative glows | 0 (normal flow) |
| Pixel trail + gooey filter div | 1 |
| Section content (text, buttons, images) | 2 |

---

## What Is Not Changing

- No changes to `CustomCursor`, `Navbar`, `Footer`, or any other section
- No new npm packages
- The pixel trail does not affect pointer events on buttons/links — `pointer-events: none` is set on the trail layer
