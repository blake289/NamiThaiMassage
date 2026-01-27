# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- **Dev server**: `npm run dev`
- **Build**: `npm run build`
- **Lint**: `npm run lint`
- **Start production**: `npm run start`

No test framework is configured.

## Architecture

This is a static marketing site for Nami Thai Massage (North Park, San Diego) built with **Next.js 16**, **React 19**, and **TypeScript** (strict mode). It uses the **App Router** (`src/app/`).

### Routing & Pages

- `src/app/page.tsx` — Homepage with hero, services preview, testimonials, FAQs
- `src/app/services/` — All massage types with pricing
- `src/app/book/` — Links to external Pocketsuite booking system
- `src/app/contact/` — Contact form with embedded Google Maps
- `src/app/gift-cards/` — Gift certificate sales
- `src/app/about/` — Therapist background
- `src/app/info/` — 16 educational/SEO pages covering massage types (deep-tissue, sports, swedish, etc.) and local neighborhoods (north-park, hillcrest, university-heights, etc.)

Info pages follow a consistent template: breadcrumb, hero section, benefits content, FAQs, and CTA.

### Components

Shared components live in `src/components/`: Header (client-side with responsive nav + mobile menu), Footer, ServiceCard, ChatButton (exit-intent triggered), StickyMobileCTA (appears on scroll for mobile).

Client components use the `'use client'` directive.

### Styling

**CSS Modules** for component-scoped styles (`.module.css` files alongside components/pages). **No Tailwind.**

Global design system in `src/app/globals.css` defines:
- CSS custom properties for colors (forest greens, golds, creams), typography, spacing
- Fonts: Cormorant Garamond (headings), Lato (body)
- Fluid typography via `clamp()`
- Utility classes: `.container`, `.btn`, `.btn-primary`, `.btn-secondary`, `.section-*`
- Decorative effects: golden glows, lotus patterns, royal frames

### Key Patterns

- **SEO-first**: Every page has rich metadata exports and JSON-LD structured data (LocalBusiness, WebSite schemas)
- **Fully static**: No API routes, no database, no server-side data fetching
- **Path alias**: `@/*` maps to `./src/*`
- **Phone number** (619-287-3034) and **booking URL** (`bookme.pocketsuite.io/book/nami-thai-massage`) are hardcoded throughout pages
- **Images** in `public/images/`; info pages are missing hero images (see PHOTO_REQUIREMENTS.md)
