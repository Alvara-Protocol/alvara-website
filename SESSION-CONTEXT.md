# Alvara Website Rebrand - Session Context

## Overview

Complete rebuild of alvara.xyz from a Next.js application to a single-page static HTML website. The new site is a flagship marketing/conversion page for the Alvara Protocol (ERC-7621 Basket Token Standard).

## Architecture

- **Single-page static HTML** (index.html + gb/index.html for UK FinProm variant)
- **No build step** — pure HTML/CSS/JS, deployed directly to Vercel
- **Fonts**: PP Supply Sans (display), Titillium Web (body), Space Mono (mono)
- **Themes**: Dark mode (default) + light mode toggle
- **i18n**: Client-side language switcher (EN/ES/FR/DE/IT/PT/TR/ZH/JA/KO)
- **Deployment**: Vercel CLI (`vercel --prod --yes`)

## Key Features

### Hero Section
- **Crossfade slideshow**: 12 background images cycling every 7 seconds with 1.5s CSS fade transition
- **Dark overlay**: `rgba(8,8,16,0.65-0.75)` gradient for text legibility over any image
- **Text-shadow**: Applied to all hero text in dark mode; removed in light mode via `text-shadow: none`
- **Stats bar**: ERC-7621, 3 Chains, 100+ BSKTs Created, 500+ Managers

### Section Backgrounds
- **Alternating shades** for clear visual page breaks:
  - `.section`: `rgba(10, 8, 22, 0.95)` (near-black) + `1px solid rgba(255,255,255,0.04)` border-top
  - `.section-alt`: `rgba(22, 18, 42, 0.95)` (lighter purple) + `1px solid rgba(255,255,255,0.06)` border-top
  - Light mode: white vs lavender-tinted alternation
- **Texture**: Gradient mesh blobs (opacity 0.18) + grain overlay (0.045) behind sections

### Tokenomics Chart
- **SVG donut chart** with 6 segments, generated via JavaScript
- **Hover interaction**: SVG path redraw approach — segments expand (`outerR+8`, `innerR-8`, `startDeg-2`, `endDeg+2`) on hover
- **Z-order**: `svg.appendChild(path)` moves hovered segment to top
- **Segments**: BSKT Incentives 44%, Foundation 20%, Team & Contributors 15%, Investors 14%, DEX/CEX Liquidity 5%, Airdrop 2%
- **Scroll animation**: Scale-in on intersection observer trigger

### Responsive Design
- Mobile-first with breakpoints at 768px, 1024px
- Ultra-wide support: 1600px, 2000px, 2560px, 3200px breakpoints
- Large screen breakpoints at end of CSS (after base rules) to ensure cascade override

### Other Features
- Scroll-driven reveal animations via IntersectionObserver
- Scroll progress bar at top of page
- Blog section pulling from /blog/ directory
- Smart contract address copy buttons
- Keyboard-accessible navigation
- prefers-reduced-motion support
- Hidden scrollbar (`scrollbar-width: none` + `::-webkit-scrollbar`)

## Text Color System

### Dark Theme
| Variable | Value | Usage |
|----------|-------|-------|
| `--text-primary` | `#FFFFFF` | Headings, primary content |
| `--text-secondary` | `#E8E4F0` | Hero subtitle, supporting text |
| `--text-muted` | `#C4BBD8` | Descriptions, card text, step text |
| `--text-subtle` | `#9B8FB8` | Tertiary text, notes |

### Light Theme
| Variable | Value | Usage |
|----------|-------|-------|
| `--text-primary` | `#1A1530` | Headings, primary content |
| `--text-secondary` | `#2D2545` | Supporting text |
| `--text-muted` | `#524670` | Descriptions, card text |
| `--text-subtle` | `#6B5F85` | Tertiary text, notes |

## File Structure

```
alvara-website/
├── index.html          # Main site (~820KB single file with inline CSS/JS)
├── gb/index.html       # UK FinProm variant (same design, compliance additions)
├── vercel.json         # Vercel config with CSP headers, redirects
├── images/
│   ├── hero-bg-1.jpg through hero-bg-12.jpg  # Slideshow backgrounds
│   ├── alvara-og.jpg   # Open Graph image
│   └── ...             # Chain logos, partner logos, etc.
├── blog/               # Static blog posts
│   ├── erc-7621-ethereum-basket-token-standard.html
│   ├── what-is-a-bskt.html
│   └── ...
├── fonts/              # Self-hosted PP Supply Sans
├── css/                # External blog stylesheet
├── SECURITY-AUDIT.md   # Security audit report
├── robots.txt
├── sitemap.xml
└── serve.js            # Local dev server
```

## GB Page (UK FinProm Variant)

Identical to main index.html except:
- Contains UK Financial Promotions compliance banner
- Risk warnings as required by UK FCA regulations
- Same design, same JS, same CSS
- Image paths use absolute `/images/` paths

## Session History

### Changes Made This Session

1. **Pie chart hover fix** — Evolved through 5 iterations from CSS translate to SVG path redraw approach, eliminating all gap/flicker/z-order issues

2. **Scrollbar removal** — Hidden browser scrollbar with `scrollbar-width: none` + `::-webkit-scrollbar { display: none }`

3. **Tokenomics data update** — Updated to correct data: BSKT Incentives 44%, Foundation 20%, Team & Contributors 15%, Investors 14%, DEX/CEX Liquidity 5%, Airdrop 2%

4. **Background redesign** — Removed scrolling bg-image-strip (hurt conversion), replaced with:
   - Hero crossfade slideshow (12 images, 7s interval)
   - Clean section backgrounds with near-opaque overlays
   - Mesh blobs + grain for subtle texture

5. **Section page breaks** — Restored alternating section backgrounds with clear contrast between `.section` and `.section-alt`

6. **Text legibility overhaul** — Full audit and fix of all text colors:
   - Bumped `--text-muted` from `#9B8FB8` → `#C4BBD8` (dark) and `#6B5F85` → `#524670` (light)
   - Bumped `--text-subtle` from `#6B5F85` → `#9B8FB8` (dark) and `#9B8FB8` → `#6B5F85` (light)
   - Darkened hero overlay from 0.4-0.55 → 0.65-0.75
   - Added text-shadow to all hero text in dark mode
   - Removed text-shadow in light mode (was causing fuzzy text)
   - Upgraded hero subtitle to `--text-secondary`
   - Upgraded hero stat labels to `--text-muted`
   - Boosted light mode hero overlay from 0.15-0.5 → 0.55-0.75
   - Fixed footer text colors in light mode

7. **Ultra-wide screen support** — Added breakpoints at 1600px, 2000px, 2560px, 3200px with progressive scaling of containers, typography, spacing, and chart dimensions

8. **All changes synced to GB page**

## Deployment

- **Production URL**: alvara.xyz (Vercel)
- **Preview**: Local Node.js static server on port 3111
- **Deploy command**: `cd /Users/cal/Documents/alvara-website && vercel --prod --yes`

## Previous Sessions

Earlier sessions (before this one) covered:
- Initial website build from scratch
- Design feedback implementation from CMO (Edy)
- Blog section build
- QA fixes across all sections
- Security audit and CSP header configuration
- Initial responsive design work
