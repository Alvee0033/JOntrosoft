# JANTRA | Home — Product Requirements Document (PRD)

## 1. Overview

**JANTRA** is a premium enterprise software brand website featuring a VisionOS-inspired glassmorphism design. The site consists of 4 pages that showcase spatial computing solutions for business. The design language is futuristic, minimal, and premium — featuring floating glass panels, animated gradient orbs, and a warm orange/slate color palette.

**Source:** Google Stitch Project `5704801160505809986`

---

## 2. Design System

### Color Palette
| Token | Value | Usage |
|-------|-------|-------|
| Primary Orange | `#FB923C` / `orange-400` | Accents, CTAs, gradient highlights |
| Dark Orange | `#F97316` / `orange-500` | Buttons, active states |
| Deep Orange | `#EA580C` / `orange-600` | Hover states, gradient endpoints |
| Slate 900 | `#1E293B` | Primary text, dark buttons |
| Slate 600 | `#475569` | Body text |
| Slate 50 | `#F8FAFC` | Page background |
| White/20 | `rgba(255,255,255,0.2)` | Glass panel backgrounds |

### Typography
- **Font:** System sans-serif (Tailwind default)
- **Headings:** Bold, tight tracking (`tracking-tight`)
- **Body:** Regular weight, relaxed leading
- **Labels:** Uppercase, wide tracking, 10-12px

### Visual Effects
- **Glassmorphism:** `backdrop-blur(40px)`, white/20 bg, white/50 border
- **Background Orbs:** 400-800px blurred gradient circles, animated with float/pulse
- **Animations:** Float (6-8s), spin-slow (12s), pulse-soft (4-10s)
- **Hover Effects:** Scale, translateY, enhanced shadows

---

## 3. Pages

### Page 1: Home / Hero (`index.html`)
**Source Screen:** `7e8960f8743149f0b9e51e8ed801edf5`

- Floating pill navigation: JANTRA logo + [Products, Solutions, Ecosystem, Support] + "Launch App" button
- Full-screen hero with two zones:
  - **Left:** Glass panel with "Future of Work" badge, heading "Enterprise Software, Reimagined.", body text, "Get Started" + "View Demo" buttons, social proof (2,000+ companies)
  - **Right:** 3D isometric animation — rotating cube inside a rotated glass container with floating nodes
- Background orbs (orange, blue)

### Page 2: Services (`services.html`)
**Source Screen:** `0644aea87a50414eaf9dfa6c15f6001a`

- Floating pill navigation: JANTRA logo + [Experience, Services, Showcase, Connect]
- Hero header: "Elevating Reality" centered
- Two Z-pattern service sections:
  - **Service 1 (left visual, right text):** "Spatial Infrastructure" — gradient placeholder + glass card with description + "Explore Architecture" CTA
  - **Service 2 (right visual, left text):** "Cognitive Interface" — gradient placeholder + glass card with description + "Interface Design" CTA
- Footer CTA: Glass panel with email input + "Get Access" button + copyright

### Page 3: Checkout (`checkout.html`)
**Source Screen:** `92dfc9d7581640c8969c297543fe6b45`

- Floating pill navigation: JANTRA logo + divider + [Pricing, Enterprise, Support]
- Split layout:
  - **Left:** Glass checkout form — plan summary (Pro Enterprise, $2,400/yr), payment method selector (card ending 4242 + Add New), security badge, "Pay $2,400.00" orange gradient button, terms link
  - **Right:** Security visual — tall glass card with lock icon + "Encrypted Core" label, floating decorative elements

### Page 4: Contact (`contact.html`)
**Source Screen:** `f0100c58f8454d3fb92e2a726d2eb586`

- Floating pill navigation: [Home, Projects | Contact (active), About]
- Three-layer spatial layout:
  - **Center:** Globe SVG placeholder with "Jantra Global Node" label, floating animation
  - **Left widget:** Contact form — "Send a Signal" heading, fields (Identifier/name, Frequency/email, Transmission/message), "Dispatch" button
  - **Right widget:** Info card — email (hello@jantra.io), phone (+1 555 890-JANTRA), location ("Remote First"), active status indicator
- Mouse parallax tilt effect on all elements

---

## 4. Technical Stack

| Concern | Choice |
|---------|--------|
| Framework | Static HTML (no build step) |
| Styling | Tailwind CSS v3 CDN with `forms` + `container-queries` plugins |
| Animations | CSS keyframes + Tailwind animation utilities |
| Interactivity | Vanilla JS (mouse parallax on Contact page) |
| Pages | 4 standalone HTML files with shared nav linking |

---

## 5. Navigation Mapping

| Nav Item | Target |
|----------|--------|
| Home | `index.html` |
| Products / Solutions / Experience | `services.html` |
| Ecosystem / Showcase / Projects | `services.html` |
| Support / Enterprise / Pricing | `checkout.html` |
| Connect / Contact | `contact.html` |
| About | `contact.html` |
| Launch App / Get Started | `checkout.html` |

---

## 6. File Structure

```
jantra/
├── index.html        # Page 1: Hero / Home
├── services.html     # Page 2: Services
├── checkout.html     # Page 3: Checkout
└── contact.html      # Page 4: Contact
```

Each HTML file is self-contained with Tailwind CDN, inline custom styles, and inline scripts.

---

## 7. Acceptance Criteria

- [ ] All 4 pages render identically to the Stitch screenshots
- [ ] Glassmorphism panels with proper blur and transparency
- [ ] Animated background orbs (float + pulse)
- [ ] Floating pill navigation on every page
- [ ] Responsive layout visible on desktop (2560×2048 base)
- [ ] Smooth hover effects and transitions
- [ ] Mouse parallax effect on Contact page
- [ ] Cross-page navigation links work correctly
