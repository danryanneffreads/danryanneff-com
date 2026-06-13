# WordPress Site Audit Report: danryanneff.com
**Date:** June 13, 2026  
**Current Stack:** WordPress (xCloud hosted)  
**Target Stack:** Astro + Tailwind CSS + Cloudflare Pages

---

## Executive Summary

The WordPress site is a clean, minimal portfolio showcasing Dan Ryan Neff's services. It contains **7 main pages** with straightforward content, a contact form, and dark mode support. The site has good SEO fundamentals and minimal dynamic features, making it highly suitable for migration to Astro.

**Key Stats:**
- 7 public pages (1 broken)
- 1 contact form with Fluent Forms backend
- 2 hero images
- ~43 navigation links
- Clean, semantic HTML structure
- No complex dynamic features

---

## 1. Full Sitemap & URL Structure

| # | Page | URL | Status | Title |
|---|------|-----|--------|-------|
| 1 | Homepage | `/` | ✅ Active | DanRyanNeff.com - Dan Ryan Neff personal brand website |
| 2 | About | `/about-2/` | ✅ Active | Dan Ryan Neff \| Clarity and Structure Partner - DanRyanNeff.com |
| 3 | Work With Me | `/work-with-me/` | ✅ Active | Work With Dan Ryan Neff \| Clarity and Structure - DanRyanNeff.com |
| 4 | Contact | `/contact/` | ✅ Active | Contact - DanRyanNeff.com |
| 5 | Projects (Mandalafy) | `/mandalafy/` | ✅ Active | Mandalafy — Interactive Mandala Tool - DanRyanNeff.com |
| 6 | Newsletter | `/?page_id=231` | ❌ Broken (404) | Page not found - DanRyanNeff.com |
| 7 | Privacy Policy | `/privacy-policy/` | ✅ Active | Privacy Policy - DanRyanNeff.com |

### URL Preservation Strategy

**Current URLs to preserve:**
```
/                    → Homepage
/about-2/            → About page (non-canonical slug)
/work-with-me/       → Work With Me
/contact/            → Contact page
/mandalafy/          → Projects (Mandalafy)
/privacy-policy/     → Privacy Policy
```

**Issues & Recommendations:**
- ⚠️ `/about-2/` — Non-canonical slug (suggests old revision). Recommend `/about/` in Astro with 301 redirect from `/about-2/`.
- ⚠️ `/?page_id=231` — Query parameter URL (Newsletter link points here). Recommend `/projects/` or remove link. Currently returns 404.
- ✅ Other URLs are clean and should be preserved as-is.

---

## 2. Navigation Structure

### Header Navigation
- Logo/Home link
- About
- Work With Me
- Contact

### Body/Content Links
- Operations Assessment
- Digital Assessment
- Featured projects/clients:
  - Cameron McNerney (with "Learn more" link)
  - Hendo AI
  - Mandalafy
  - Systems Atlas
  - LandingBio

### CTAs (scattered across pages)
- "Start a conversation"
- "Work with me"
- "Book a working session"

### Footer Links
- Projects
- Newsletter (⚠️ broken link)
- Contact
- Privacy Policy
- Dark Mode Toggle button

---

## 3. Page Content Breakdown

### Homepage (`/`)
**Headings:**
- H1 (2):
  - "Good judgment in a changing world."
  - "Operations & Digital Builder"
- H2 (10):
  - "What people bring to me"
  - "Start with a conversation."
  - "What I build"
  - "About Dan"
  - "Bring me a real situation."
  - "Operations"
  - "Digital"
  - "How to start"
  - "About Dan"
  - "Ready to work together?"

**Assets:**
- 2 images
- ~43 links

**Features:**
- Services showcase (Operations & Digital)
- Testimonial/case study section
- About section
- CTA sections

### About Page (`/about-2/`)
- Company/personal background
- Links to services and projects

### Work With Me Page (`/work-with-me/`)
- Service offerings (Operations Assessment, Digital Assessment)
- CTAs for booking sessions
- Featured clients/projects

### Contact Page (`/contact/`)
**Form Details:**
- Using Fluent Forms plugin (WordPress form builder)
- Form ID: 3
- Fields:
  - Email (type: email, name: "email", placeholder: "Email Address")
  - Description (textarea, name: "description", placeholder: "Project inquiry, question, or introduction...")
  - Submit button: "Submit Form"
- Security: Cloudflare Turnstile CAPTCHA (cf-turnstile-response field)
- Form action: Posts to WordPress via Fluent Forms

### Projects Page (`/mandalafy/`)
- Mandalafy project page
- Interactive tool or showcase

### Newsletter Page (`/?page_id=231`)
- **Currently broken (404)**
- Need clarification from @dan on intent

### Privacy Policy (`/privacy-policy/`)
- Standard legal page

---

## 4. SEO Metadata & Social Preview

### Global Meta Tags
```html
<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1">
<meta name="robots" content="max-snippet:-1,max-image-preview:large,max-video-preview:-1">
<meta name="description" content="Conversations and clarity sessions that help thoughtful people move meaningful work forward with stronger structure and connection.">
```

### Open Graph Tags (all pages)
```html
<meta property="og:type" content="website">
<meta property="og:locale" content="en_US">
<meta property="og:site_name" content="DanRyanNeff.com">
<meta property="og:title" content="DanRyanNeff.com">
<meta property="og:description" content="Conversations and clarity sessions that help thoughtful people move meaningful work forward with stronger structure and connection.">
<meta property="og:url" content="https://danryanneff.com/">
<meta property="og:image" content="https://danryanneff.com/wp-content/uploads/2024/08/cropped-DoorsConvos2.png">
<meta property="og:image:width" content="954">
<meta property="og:image:height" content="499">
```

### Twitter Card Tags
```html
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="DanRyanNeff.com">
<meta name="twitter:description" content="Conversations and clarity sessions...">
<meta name="twitter:image" content="https://danryanneff.com/wp-content/uploads/2024/08/cropped-DoorsConvos2.png">
```

### Per-Page Titles
| Page | Title |
|------|-------|
| Homepage | DanRyanNeff.com - Dan Ryan Neff personal brand website |
| About | Dan Ryan Neff \| Clarity and Structure Partner - DanRyanNeff.com |
| Work With Me | Work With Dan Ryan Neff \| Clarity and Structure - DanRyanNeff.com |
| Contact | Contact - DanRyanNeff.com |
| Mandalafy | Mandalafy — Interactive Mandala Tool - DanRyanNeff.com |
| Privacy | Privacy Policy - DanRyanNeff.com |

---

## 5. Forms & Interactive Elements

### Contact Form
- **Backend:** Fluent Forms (WordPress plugin)
- **Type:** Standard contact form
- **Fields:**
  1. Email (required)
  2. Description/Message (required)
- **Validation:** Client-side + Fluent Forms server-side
- **CAPTCHA:** Cloudflare Turnstile
- **Submission:** POSTs to WordPress form handler

**Migration Challenge:** Astro is static, so we need a form service. Options:
1. **Formspree** (easiest, no backend needed)
2. **Basin** (simple form service)
3. **Resend** (email-focused, requires API setup)
4. **Netlify Forms** (if deployed on Netlify, but we're using Cloudflare Pages)
5. **Custom serverless** (AWS Lambda, Vercel Functions, etc.)

### Dark Mode Toggle
- Button-based toggle (not browser preference)
- Likely uses localStorage to persist preference
- Currently CSS-based theme switching in WordPress

---

## 6. Assets & Images

### Images Found
1. **OG Preview Image**
   - Path: `/wp-content/uploads/2024/08/cropped-DoorsConvos2.png`
   - Dimensions: 954×499px
   - Usage: Social preview (OG image)

2. **Additional images** (embedded in page content)
   - Found 2 images on homepage
   - Specific URLs to be extracted during content migration

### Asset Migration Plan
```
public/
├── images/
│   ├── og-preview.png (from cropped-DoorsConvos2.png)
│   ├── hero-1.png (from homepage)
│   ├── hero-2.png (from homepage)
│   └── [any project images]
└── files/ (if any downloadables exist)
```

---

## 7. Current Styling & Design System

### Visual Design
- ✅ Responsive/mobile-first
- ✅ Light mode (white/light backgrounds)
- ✅ Dark mode toggle (dark gray/black)
- ✅ Clean, minimal aesthetic
- ✅ Professional color palette

### Observed Colors
- Light mode: White (#fff) background, dark text
- Dark mode: Dark gray/black background, light text
- Accent colors: Professional blues/neutrals (to be confirmed from CSS)

### Typography
- Sans-serif throughout (appears to be system fonts or standard web safe fonts)
- Clean, readable hierarchy

### Components Identified
- Navigation header
- Hero sections
- Content sections with text + CTA
- Project/client cards
- Contact form
- Footer
- Dark mode toggle button

---

## 8. Proposed Astro File Structure

```
src/
├── layouts/
│   └── BaseLayout.astro              # Main template with meta tags, navigation, footer
├── components/
│   ├── Header.astro                  # Navigation + logo
│   ├── Footer.astro                  # Footer links + copyright
│   ├── DarkModeToggle.astro          # Dark mode button (client-side)
│   ├── ContactForm.astro             # Contact form with form service integration
│   ├── ServiceCard.astro             # Reusable card for services/projects
│   ├── HeroSection.astro             # Hero banner component
│   ├── TestimonialCard.astro         # For case studies/testimonials
│   └── SEOMeta.astro                 # Reusable SEO meta component
├── pages/
│   ├── index.astro                   # Homepage (/)
│   ├── about.astro                   # About page (/about/)
│   │   └── [create redirect from /about-2/]
│   ├── work-with-me.astro            # Work With Me (/work-with-me/)
│   ├── contact.astro                 # Contact (/contact/)
│   ├── projects/
│   │   ├── index.astro               # Projects listing (/projects/)
│   │   │   └── [redirect from /?page_id=231]
│   │   └── mandalafy.astro           # Mandalafy project (/projects/mandalafy/)
│   ├── privacy-policy.astro          # Privacy Policy (/privacy-policy/)
│   └── 404.astro                     # Custom 404 page
├── styles/
│   ├── global.css                    # Tailwind + global styles
│   ├── variables.css                 # CSS custom properties (colors, fonts)
│   └── theme.css                     # Light/dark mode themes
├── lib/
│   ├── constants.ts                  # Site config, nav structure, metadata
│   ├── types.ts                      # TypeScript interfaces
│   └── formHandler.ts                # Form submission logic
└── data/
    ├── navigation.json               # Menu/nav structure
    ├── services.json                 # Services/offerings
    ├── projects.json                 # Projects/case studies
    └── seo.json                      # Per-page SEO config

public/
├── images/
│   ├── og-preview.png
│   ├── hero-1.png
│   ├── hero-2.png
│   └── [other assets]
└── favicon.ico

astro.config.mjs
tailwind.config.cjs
tsconfig.json
package.json
```

---

## 9. Migration Plan

### Phase 1: Setup & Planning (1 day)
- [x] Complete site audit (this document)
- [ ] Create Astro project scaffold with TypeScript + Tailwind
- [ ] Initialize Git repo
- [ ] Download all WordPress assets (images, files)
- [ ] Extract page content as markdown/JSON

### Phase 2: Core Infrastructure (2 days)
- [ ] Set up BaseLayout with meta tags & Astro config
- [ ] Build Header component with navigation
- [ ] Build Footer component
- [ ] Implement dark mode toggle (client-side with localStorage)
- [ ] Configure Tailwind CSS with design system
- [ ] Set up SEO meta component

### Phase 3: Page Migration (3 days)
- [ ] Create homepage (`index.astro`)
- [ ] Create About page (`about.astro`)
- [ ] Create Work With Me page (`work-with-me.astro`)
- [ ] Create Projects listing & Mandalafy page
- [ ] Create Contact page (form integration)
- [ ] Create Privacy Policy page
- [ ] Create 404 page

### Phase 4: Form Integration (1 day)
- [ ] Choose form service (recommend: Formspree or Basin)
- [ ] Implement form submission handler
- [ ] Add validation + error states
- [ ] Test end-to-end email delivery
- [ ] Remove Turnstile CAPTCHA requirement (or keep if desired)

### Phase 5: SEO & Optimization (1 day)
- [ ] Add all page titles and meta descriptions
- [ ] Configure OG/Twitter tags per page
- [ ] Create sitemap.xml
- [ ] Add robots.txt
- [ ] Implement structured data (JSON-LD) if needed
- [ ] Optimize images (compression, WebP)

### Phase 6: Testing & QA (1 day)
- [ ] Visual regression testing (compare to original screenshots)
- [ ] Cross-browser testing (Chrome, Firefox, Safari, mobile)
- [ ] Accessibility audit (WCAG 2.1 AA)
- [ ] Performance audit (Lighthouse)
- [ ] Link validation (all internal links work)
- [ ] Form testing (submit and email delivery)

### Phase 7: Deployment Prep (1 day)
- [ ] Set up Cloudflare Pages
- [ ] Configure custom domain (danryanneff.com)
- [ ] Set up 301 redirects:
  - `/about-2/` → `/about/`
  - `/?page_id=231` → `/projects/` (or 410 Gone)
  - `/newsletter` → ??? (needs @dan input)
- [ ] DNS configuration (CNAME or nameserver change)
- [ ] SSL/TLS certificate setup (auto-provisioned by Cloudflare)
- [ ] Staging deployment + final testing
- [ ] Production deployment

---

## 10. Risks & Unknowns

### Critical Unknowns (blocking)
1. **Newsletter Page** — The link currently breaks (404). What should it be?
   - External link (e.g., Substack)?
   - Internal projects page?
   - Delete the link?
   - Placeholder page?

2. **Form Service** — Which service for contact form?
   - Formspree (simple, no setup)
   - Resend (email API, requires setup)
   - Basin (simple)
   - Other?

3. **Email Notifications** — Who receives form submissions?
   - Current: WordPress admin email
   - New: Same email address or different?

4. **Analytics/Tracking** — Any current tracking to preserve?
   - Google Analytics?
   - Hotjar?
   - Custom tracking?

### Technical Risks
- **Dark mode persistence:** Must ensure localStorage works correctly
- **Form submission:** Must test thoroughly before cutover
- **Image optimization:** Ensure images load quickly on Cloudflare
- **Cache headers:** Cloudflare may cache differently than WordPress

### Unknowns to Resolve
- [ ] Exact WordPress theme being used (for style reference)
- [ ] Any WordPress plugins doing dynamic content transformation
- [ ] Whether Mandalafy project is an external redirect or embedded tool
- [ ] Exact email address for form submissions

---

## 11. SEO Baseline & Best Practices

### Current Strengths
✅ Unique, descriptive page titles
✅ Well-written meta descriptions
✅ OG/Twitter tags configured
✅ Clean, semantic HTML
✅ Mobile-responsive design
✅ Good Core Web Vitals (presumed)

### Recommendations for Astro Migration
- ✅ Replicate all current titles and descriptions exactly
- ✅ Implement dynamic OG image generation if needed
- ✅ Add per-page meta descriptions for About, Work With Me, Contact
- ✅ Create XML sitemap
- ✅ Add structured data (JSON-LD) for person/organization
- ✅ Implement Open Graph for better social sharing
- ✅ Use descriptive alt text for all images

---

## 12. Implementation Timeline & Effort

| Phase | Deliverables | Effort | Duration |
|-------|--------------|--------|----------|
| 1. Setup | Audit complete, Astro scaffold | Low | 1 day |
| 2. Core | Layout, components, styling | Medium | 2 days |
| 3. Pages | 7 pages built & migrated | Medium | 3 days |
| 4. Forms | Form service, submission handling | Medium | 1 day |
| 5. SEO | Metadata, sitemap, optimization | Low | 1 day |
| 6. Testing | QA, accessibility, performance | Medium | 1 day |
| 7. Deployment | Cloudflare Pages, DNS, 301s | Low | 1 day |
| **Total** | Production-ready site | | **10 days** |

---

## 13. Deployment Checklist

Pre-Launch
- [ ] All pages built and rendering correctly
- [ ] Contact form functional with email delivery tested
- [ ] Dark mode toggle working on all pages
- [ ] All images optimized and loading
- [ ] SEO metadata in place
- [ ] Lighthouse score > 90
- [ ] Accessibility audit passed (WCAG 2.1 AA)
- [ ] Cross-browser testing passed
- [ ] All links validated
- [ ] 404 page styled and functional

Cloudflare Pages Setup
- [ ] GitHub repo created and connected
- [ ] Build command configured
- [ ] Environment variables set
- [ ] Staging deployment successful
- [ ] Production build tested

DNS & Domain
- [ ] CNAME record added (or nameserver changed)
- [ ] SSL certificate issued (auto by Cloudflare)
- [ ] DNS propagation verified
- [ ] Domain resolves to Cloudflare Pages

Redirects & Migration
- [ ] 301 redirects configured for:
  - `/about-2/` → `/about/`
  - `/?page_id=231` → `/projects/` (or decision made)
  - `/newsletter` → (decision made)
- [ ] Old site monitored for 24 hours
- [ ] Search console updated with new URL

Post-Launch
- [ ] Monitor error logs
- [ ] Verify email form delivery
- [ ] Check Core Web Vitals
- [ ] Monitor analytics (if applicable)

---

## 14. Risks Mitigation

| Risk | Mitigation |
|------|-----------|
| Form submissions fail | Use managed service (Formspree) + test thoroughly |
| Dark mode breaks | Implement CSS variables + localStorage test |
| Images slow page down | Optimize + use CDN (Cloudflare) |
| SEO drops during migration | Use 301 redirects, maintain URLs, update sitemap |
| DNS propagation issues | Test in staging first, prepare rollback plan |
| Broken links to old pages | 404 page with suggestions, monitor error logs |

---

## 15. Next Steps

### For @dan
1. **Clarify unknowns:**
   - What should Newsletter page/link be?
   - Which form service to use (Formspree/Resend/other)?
   - What email address for form submissions?
   - Any analytics/tracking to preserve?

2. **Review & approve:**
   - Audit findings
   - Proposed file structure
   - Migration timeline
   - Deployment plan

3. **Provide assets:**
   - Any brand guidelines or design specs
   - Email address for form submissions
   - Analytics account info (if applicable)

### For @engineer (next phase)
1. After @dan approval:
   - Initialize Astro project
   - Begin Phase 2: Core infrastructure build
   - Create components and layouts
   - Extract content from WordPress

---

## Screenshots & Evidence

Captured during audit:
- `screenshots/01-homepage.png`
- `screenshots/02-about.png`
- `screenshots/03-work-with-me.png`
- `screenshots/04-contact.png`
- `screenshots/05-projects.png`
- `screenshots/06-newsletter.png`
- `screenshots/07-privacy.png`

All stored in `./screenshots/` directory for reference.

---

## Conclusion

✅ **Migration is feasible and straightforward.** The WordPress site is well-structured with minimal complexity. Astro + Tailwind is an excellent choice for this static portfolio site.

**Key advantages of migration:**
- Faster page loads (static HTML)
- Better developer experience (Astro)
- Native Tailwind CSS support
- Easy deployment and scaling (Cloudflare Pages)
- Superior SEO (proper meta tags, fast core web vitals)
- Cost reduction (no WordPress hosting fees)

**Primary blockers:** Minor clarifications from @dan on form service, newsletter page intent, and analytics requirements.

**Ready for:** Detailed review with @dan and approval to proceed to Phase 2 (Astro build).

