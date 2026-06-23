<instructions>
## 🚨 MANDATORY: CHANGELOG TRACKING 🚨

You MUST maintain this file to track your work across messages. This is NON-NEGOTIABLE.

---

## INSTRUCTIONS

- **MAX 5 lines** per entry - be concise but informative
- **Include file paths** of key files modified or discovered
- **Note patterns/conventions** found in the codebase
- **Sort entries by date** in DESCENDING order (most recent first)
- If this file gets corrupted, messy, or unsorted -> re-create it. 
- CRITICAL: Updating this file at the END of EVERY response is MANDATORY.
- CRITICAL: Keep this file under 300 lines. You are allowed to summarize, change the format, delete entries, etc., in order to keep it under the limit.

</instructions>

<changelog>
## 2026-06-23 (latest+1)
- Updated HeroContent hero subheading: "built for Florida and the St. Marys, GA area — heavy rain, heat, and hurricane season." → "for Jacksonville and the St. Marys area — engineered for ultimate storm protection."

## 2026-06-23 (latest)
- Updated ServicesSection heading: "Roofing Services Built for Florida & St. Marys, GA Homes" → "Roofing Services for Jacksonville & St. Marys Homes"
- Updated ReviewsSection header: "Florida & St. Marys, GA" → "Jacksonville & St. Marys"

## 2026-06-23 (prior)
- Changed service area from "Georgia" to "St. Marys, GA" across FooterInfo, HeroContent, ServicesSection, ReviewsSection

## 2026-06-23 (prior)
- Fixed index.html page `<title>` to "RidgeCrest Roofing | Professional Roof Replacement & Repair"
- Added meta description tag for Google search snippet
- Changed "Street-Ready" → "Picture-Perfect" in HeroContent.tsx hero headline

## 2026-06-23 (prev)
- Removed review #7 ("RidgeCrest did an outstanding job...") from ReviewsSection/index.tsx
- Updated header phone number to (904) 446-8369 in HeaderCallButton.tsx

## 2026-06-23
- Switched ALL gallery photos to object-contain with black bg — no more cropping or zooming
- Removed per-photo objectFit override; WorkGalleryItem now always uses object-contain
- Reverted object-top → object-center for all cover images in WorkGalleryItem (was cropping landscape photos)
- Fixed photo 9 portrait crop issue — full hip roof/waterfront image now visible without zoom
- Fixed layout broken by bulk-injected debug classes; replaced invalid <body> root in App.tsx

## 2026-06-22 (latest)
- Added /admin dashboard page (src/pages/AdminPage.tsx) with login gate via useAuth
- Wired EmailJS (@emailjs/browser) into ContactSection for form submission notifications
- Added react-router-dom BrowserRouter to App.tsx with / and /admin routes

## 2026-06-22 (prior)
- Downgraded vite 6.3.5 → ^5.4.0, removed pinned esbuild 0.25.5 to fix Sandpack bundler timeout
- Changed "48-Hour Turnaround" → "24-Hour Turnaround" in HeroContent.tsx

## 2026-06-22
- Removed CtaSection ("Ready to Reroof Your Home?" + Call Now/Email Us) from Main layout
- Only ContactSection form remains in that area

## 2026-06-22
- Removed "(optional)" label from phone number field in ContactSection
- Made phone field always submitted (removed `|| undefined` fallback)
- Replaced all "Ridge Crest" → "RidgeCrest" across 8 files site-wide
- Files: ContactSection, HeaderLogo, FooterInfo, HeroContent, CtaCard, HeroImageCard, ReviewsSection, WorkGallery
</changelog>
