import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://motionstory.com.au',
  integrations: [
    react(),
    sitemap(),
  ],
  vite: {
    plugins: [tailwindcss()],
    ssr: {
      noExternal: ['framer-motion'],
    },
    resolve: {
      dedupe: ['react', 'react-dom'],
    },
  },
  redirects: {
    // Old homepage variants
    '/homepage/': '/',
    '/animated-product-demos-product-explainer-animation/': '/',

    // Portfolio → new /work/ URL
    '/portfolio/': '/work/',
    '/animated-explainer-videos-and-motion-graphics/': '/work/',
    '/work-project-detail/': '/work/',

    // Old about/team pages → /about/
    '/about-team/': '/about/',
    '/our-story/': '/about/',

    // Process stays
    // '/process/' stays as-is

    // Old pricing page → contact
    '/explainer-pricing-page/': '/contact/',
    '/pricing/': '/contact/',

    // Old service pages → audience pages
    '/services/': '/saas-tech/',
    '/explainer-video-company/': '/saas-tech/',
    '/explainer-video-company-20024/': '/saas-tech/',
    '/animation-production-company/': '/saas-tech/',
    '/motion-graphic-production-company/': '/saas-tech/',
    '/animated-video-service/': '/saas-tech/',
    '/30s-explainer-videos/': '/saas-tech/',
    '/start-up-explainer-videos/': '/saas-tech/',
    '/finance-explainer-videos/': '/saas-tech/',
    '/animated-product-demos/': '/saas-tech/',
    '/saas-explainer-videos/': '/saas-tech/',
    '/technology-explainers/': '/saas-tech/',
    '/startup-explainer-videos/': '/saas-tech/',
    '/explainer-videos/': '/saas-tech/',
    '/product-demo-videos/': '/saas-tech/',
    '/animated-onboarding-videos/': '/saas-tech/',

    // Charity → causes
    '/charity-explainer-videos/': '/causes/',

    // Agency partnership → agencies
    '/agency-partnership/': '/agencies/',

    // Landing pages → relevant audience pages
    '/landing-page-design-animation/': '/saas-tech/',
    '/landing-page-explainer-video-01/': '/saas-tech/',
    '/animation-production-company-2/': '/saas-tech/',
    '/landing-page-animated-video-services-01/': '/saas-tech/',
    '/landing-animated-product-demos-01/': '/saas-tech/',
    '/freelance-motion-graphic-designer/': '/saas-tech/',
    '/freelance-motion-design-and-animation/': '/saas-tech/',
    '/motion-graphic-production/': '/saas-tech/',

    // Old standalone pages → new equivalents
    '/frequently-asked-questions-motion-story/': '/',
    '/client-testimonials-motion-story/': '/work/',

    // Consultation → contact
    '/book-a-consultation/': '/contact/',
    '/work-together/': '/contact/',
    '/thanks-now-book-a-call/': '/contact/',

    // Thank you pages
    // '/thank-you/' now has its own page

    // Misc
    '/elementor-8558/': '/',
    '/motion-story-temporary/': '/',

    // Other project slugs → portfolio
    '/other-project-slug/uts-future/': '/work/',
    '/other-project-slug/measuring-plastic-waste/': '/casestudy/united-nations/',
    '/other-project-slug/legal-separation-kit/': '/work/',
    '/other-project-slug/amsed/': '/casestudy/amsed/',
    '/other-project-slug/uclusion/': '/work/',
    '/other-project-slug/qxmd-read/': '/casestudy/read-accessing-medical-journals/',
    '/other-project-slug/oartech-product-demo/': '/work/',
    '/other-project-slug/bresic-witney/': '/casestudy/bresic-witney-a-different-estate-agent/',
    '/other-project-slug/liquid-ai/': '/work/',
    '/other-project-slug/fracture-care/': '/work/',
    '/other-project-slug/bat-nav/': '/casestudy/bat-nav-platform-explainer/',
    '/other-project-slug/class-supper/': '/work/',
    '/other-project-slug/food-waste-programme/': '/casestudy/acir/',
    '/other-project-slug/licensys-smart-city/': '/work/',
    '/other-project-slug/luse-krue/': '/casestudy/redcross-covid-vacine-explainer/',

    // Duplicate case study
    '/casestudy/hey-you/': '/casestudy/heyyou-app/',
  },
});
