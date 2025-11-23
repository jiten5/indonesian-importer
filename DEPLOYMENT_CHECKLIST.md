# Phase 5: Pre-Deployment Validation Checklist

## Code Quality ✅

- [ ] **ESLint**: Zero errors, warnings < 10
  - Run: `npm run lint`
  - Fix all critical errors
  - Document any remaining warnings

- [ ] **Prettier**: All files formatted consistently
  - Run: `npx prettier --check .`
  - Run: `npx prettier --write .` to format

- [ ] **TypeScript**: Zero type errors
  - Run: `npx tsc --noEmit`
  - Verify all `app/` files compile

- [ ] **No console.log**: Production code clean
  - Search: `grep -r "console.log" app/ components/ lib/`
  - Remove all console.log statements

---

## Security 🔒

- [ ] **Environment variables**: Not hardcoded
  - Create `.env.example` with placeholder values
  - Verify no secrets in `.env` committed to Git

- [ ] **HTTPS enforced**: Vercel default (automatic)

- [ ] **Security headers configured**: In `next.config.js`
  - X-Frame-Options: SAMEORIGIN
  - X-Content-Type-Options: nosniff
  - Strict-Transport-Security
  - X-XSS-Protection

- [ ] **No sensitive data**: Client-side code clean
  - Review all API calls
  - Check for hardcoded API keys

- [ ] **CAPTCHA implemented**: On contact form (optional)
  - Consider adding reCAPTCHA v3 for production

---

## SEO & Meta Tags 📱

- [ ] **TC051**: Meta title present and unique on all 14 pages
  - Home, Products, Solutions, Pricing, About, Contact
  - Search, Indonesia Imports, Indonesia Exports
  - Data Platforms, API, Data License pages

- [ ] **TC052**: Meta description present (150-160 chars)
  
- [ ] **TC053**: OG tags for social sharing
  - og:title, og:description, og:image
  - twitter:card, twitter:title, twitter:description

- [ ] **TC054**: Structured data (JSON-LD) present
  - Organization schema
  - BreadcrumbList for navigation

- [ ] **TC055**: Sitemap.xml accessible at `/sitemap.xml`
  - Generate with Next.js app router

- [ ] **Canonical tags**: Configured to prevent duplicate content

- [ ] **Heading hierarchy**: One H1 per page, proper H2-H6

- [ ] **Alt text**: All images have descriptive alt attributes

- [ ] **robots.txt**: Generated and accessible

---

## Navigation & UX (TC001-TC005) 🧭

- [ ] **TC001**: Navbar links navigate to correct pages
  - Home, Products, Solutions, Pricing, About, Contact
  - All links functional in both desktop and mobile

- [ ] **TC002**: Mobile menu opens/closes properly
  - Click hamburger icon → menu opens
  - Click close icon → menu closes

- [ ] **TC003**: Mobile menu closes on link click
  - Click any link in mobile menu → navigates + closes menu

- [ ] **TC004**: Footer links function correctly
  - Company links (About, Contact, Pricing)
  - Legal links (Privacy, Terms, Cookies)
  - Social media links (if applicable)

- [ ] **TC005**: Logo returns to home page
  - Click logo from any page → returns to `/`

---

## Forms & Data Entry (TC006-TC010) 📝

- [ ] **TC006**: Contact form validates required fields
  - Full Name (required)
  - Email (required)
  - Message (required)

- [ ] **TC007**: Contact form shows validation errors
  - Email format validation
  - Minimum length validations
  - Error messages display inline

- [ ] **TC008**: Contact form submits successfully
  - Submit → success message displays
  - Form clears after submission

- [ ] **TC009**: Search filters work individually
  - HS Code filter
  - Country filter
  - Date range filter
  - Value range filter

- [ ] **TC010**: Form error messages display properly
  - Red text color
  - Clear and specific
  - Positioned near field

---

## Search Functionality (TC011-TC020) 🔍

- [ ] **TC011**: Search returns results for valid query
  - Enter HS code → click Search → results display

- [ ] **TC012**: Search filters narrow results correctly
  - Apply multiple filters → results update

- [ ] **TC013**: Pagination navigates between pages
  - Click Next → page 2 loads
  - Click Previous → returns to page 1

- [ ] **TC014**: Page jump modal works (if implemented)
  - Enter page number → jump to that page

- [ ] **TC015**: Export data button functional
  - Click Export → shows premium modal/downloads CSV

- [ ] **TC016**: Sort by column works
  - Click column header → data sorts ascending
  - Click again → data sorts descending

- [ ] **TC017**: 10-row masking displays for non-members
  - Free users see 10 rows max
  - "Unlock Full Access" message visible

- [ ] **TC018**: Visualizations render in search results (if implemented)
  - Charts display correctly
  - No layout shifts

- [ ] **TC019**: Tab switching (Shipments/Importers/Exporters) works
  - Click tab → content updates
  - URL updates or state changes

- [ ] **TC020**: Date range filter works correctly
  - Select date from + date to → results filtered

---

## Responsive Design (TC021-TC030) 📱💻

- [ ] **TC021**: Mobile 375px renders correctly
  - Test on iPhone SE / small mobile
  - No horizontal scroll
  - All content accessible

- [ ] **TC022**: Mobile text readable (16px minimum)
  - Body text ≥ 16px
  - Headings properly scaled

- [ ] **TC023**: Mobile touch targets adequate (44px)
  - Buttons ≥ 44x44px
  - Links have sufficient padding

- [ ] **TC024**: Tablet 768px renders correctly
  - Test on iPad
  - Proper grid layouts
  - No overflow

- [ ] **TC025**: Desktop 1440px renders correctly
  - Optimal content width maintained
  - Proper spacing and margins

- [ ] **TC026**: Images scale on all devices
  - Use Next.js Image component
  - Proper aspect ratios maintained

- [ ] **TC027**: Navbar responsive on all sizes
  - Desktop: full navbar
  - Mobile: hamburger menu

- [ ] **TC028**: No horizontal scroll on mobile
  - Test all pages
  - Fix any overflow issues

- [ ] **TC029**: Modals responsive on mobile
  - Modals fit screen
  - Close button accessible

- [ ] **TC030**: Tables scrollable on mobile
  - Horizontal scroll for wide tables
  - Or responsive table design

---

## Performance (TC031-TC040) ⚡

- [ ] **TC031**: Lighthouse performance > 90
  - Run Lighthouse in Chrome DevTools
  - Test on homepage, search, pricing

- [ ] **TC032**: Lighthouse accessibility > 90
  - All pages meet WCAG AA
  - No critical accessibility issues

- [ ] **TC033**: Page load time < 3s on 4G
  - Use Chrome DevTools throttling
  - Test "Fast 3G" preset

- [ ] **TC034**: LCP < 2.5s
  - Largest Contentful Paint
  - Optimize hero images

- [ ] **TC035**: FID < 100ms
  - First Input Delay
  - Minimize JavaScript blocking

- [ ] **TC036**: CLS < 0.1
  - Cumulative Layout Shift
  - Reserve space for images
  - Avoid dynamic content shifts

- [ ] **TC037**: Images lazy load below fold
  - Next.js Image component auto-lazy loads
  - Verify with Network tab

- [ ] **TC038**: No cumulative layout shifts
  - Monitor CLS in DevTools
  - Fix any shifting elements

- [ ] **TC039**: Animations smooth (60fps target)
  - Use transform and opacity only
  - Avoid animating layout properties

- [ ] **TC040**: Mobile performance acceptable
  - Test on real device if possible
  - Lighthouse mobile mode > 80

---

## Dark Mode & Accessibility (TC041-TC050) 🌙♿

- [ ] **TC041**: Dark mode toggle works
  - Click toggle → theme switches
  - Preference persists on reload

- [ ] **TC042**: All text readable in dark mode
  - Sufficient contrast
  - No invisible text

- [ ] **TC043**: Color contrast ≥ 4.5:1 in light mode
  - Use WebAIM Contrast Checker
  - Test all text/background combinations

- [ ] **TC044**: Color contrast ≥ 4.5:1 in dark mode
  - Dark backgrounds with light text
  - Proper contrast ratios

- [ ] **TC045**: Keyboard navigation works (Tab)
  - Tab through all interactive elements
  - Logical tab order

- [ ] **TC046**: Focus outlines visible
  - Focus indicators clear
  - Custom focus styles applied

- [ ] **TC047**: Screen reader reads content
  - Test with NVDA (Windows) or VoiceOver (Mac)
  - Proper heading structure
  - Alt text on images

- [ ] **TC048**: ARIA labels present
  - Buttons have aria-label if no text
  - Icons have aria-hidden or labels

- [ ] **TC049**: Form labels associated
  - All inputs have <label> elements
  - Labels properly linked with htmlFor

- [ ] **TC050**: Skip link functional
  - Press Tab on page load → skip link visible
  - Click skip link → jumps to main content

---

## Browser Compatibility 🌐

- [ ] **Chrome (latest)**: Full functionality
- [ ] **Firefox (latest)**: Full functionality
- [ ] **Safari (latest)**: Full functionality
- [ ] **Edge (latest)**: Full functionality
- [ ] **Mobile Chrome (latest)**: Full functionality
- [ ] **Mobile Safari (latest)**: Full functionality

---

## Content & Copy ✍️

- [ ] **All typos fixed**: Proofread all pages

- [ ] **All CTAs have clear purpose**:
  - "Get Started", "Contact Sales", "Learn More"
  - Descriptive button text

- [ ] **All form labels clear and concise**:
  - "Full Name", "Email Address", "Message"
  - No ambiguous labels

- [ ] **Error messages helpful and specific**:
  - "Email is required" not "Invalid input"
  - "Password must be at least 8 characters"

- [ ] **All data (pricing, features) accurate**:
  - Review pricing tables
  - Verify feature lists

- [ ] **All company info updated**:
  - Copyright year
  - Contact information
  - Address (if applicable)

---

## Build Validation 🏗️

- [ ] **Production build succeeds**: `npm run build`
  - No build errors
  - No critical warnings
  - Check bundle sizes

- [ ] **Build output size acceptable**:
  - Main bundle < 300KB gzipped
  - Page bundles < 100KB each

- [ ] **All pages generate successfully**:
  - Check `.next/server/app` directory
  - All 14 pages present

- [ ] **Development server runs**: `npm run dev`
  - No runtime errors
  - Hot reload works

- [ ] **Production server runs**: `npm run start`
  - After build, start production server
  - Test all routes

---

## Deployment Preparation 🚀

- [ ] **Environment variables documented**: `.env.example` created

- [ ] **Git repository clean**:
  - No `node_modules` committed
  - `.gitignore` properly configured
  - No sensitive files tracked

- [ ] **README.md updated**:
  - Setup instructions
  - Environment variables needed
  - Build and deployment steps

- [ ] **Dependencies up to date**: `npm outdated`
  - Update critical dependencies
  - Test after updates

- [ ] **Vercel configuration**: `vercel.json` (if needed)
  - Custom redirects
  - Headers
  - Build settings

---

## Final Checks ✔️

- [ ] **All tests pass**: `npm test`
- [ ] **E2E tests pass**: `npx playwright test`
- [ ] **Lighthouse audit > 90** on all metrics
- [ ] **No console errors** in browser
- [ ] **Analytics integrated** (Google Analytics, if applicable)
- [ ] **Monitoring setup** (Vercel Analytics, Sentry, etc.)

---

**Total Test Cases**: 55+  
**Target Completion**: 100%  
**Lighthouse Score Target**: > 90 across all metrics  
**Core Web Vitals**: LCP < 2.5s, FID < 100ms, CLS < 0.1
