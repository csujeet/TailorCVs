Changelog:

- Added consent-aware analytics loader (component: src/components/consent-analytics.tsx).
- Added client wrapper (src/components/client-consent-analytics.tsx) and integrated into layout.
- Added Author component and improved JSON-LD metadata for blog articles.
- Removed server-side contact EmailJS fallback; contact now uses client-side @emailjs/browser.
- Updated .env.example with NEXT_PUBLIC_GA_MEASUREMENT_ID.
