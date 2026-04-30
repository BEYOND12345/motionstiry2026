import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { BLOG_POSTS } from './src/data/blog-posts.ts';

// Build a slug → date lookup for blog-post lastmod hints in the sitemap.
const BLOG_LASTMOD = new Map(
  BLOG_POSTS.map((post) => [post.slug, new Date(post.date)]),
);

// Main landing pages that deserve a priority boost over blog posts.
const HIGH_PRIORITY_PAGES = new Set([
  '/about/',
  '/agencies/',
  '/blog/',
  '/causes/',
  '/contact/',
  '/explainer-videos/',
  '/motion-graphics/',
  '/process/',
  '/product-demo-videos/',
  '/saas-explainer-videos/',
  '/saas-tech/',
  '/services/',
  '/startups/',
  '/technology-videos/',
  '/work/',
]);

const LOW_PRIORITY_PAGES = new Set([
  '/privacy-policy/',
]);

// Build timestamp used as lastmod for static pages that don't have their own
// publish date (landing pages, case studies, etc.). Gives Google a useful
// freshness signal on every deploy.
const BUILD_DATE = new Date();

export default defineConfig({
  site: 'https://motionstory.com.au',
  trailingSlash: 'always',
  integrations: [
    react(),
    sitemap({
      filter: (page) => !page.includes('/thank-you/'),
      serialize: (item) => {
        const path = new URL(item.url).pathname;

        if (path === '/') {
          return { ...item, priority: 1.0, changefreq: 'weekly', lastmod: BUILD_DATE.toISOString() };
        }

        if (LOW_PRIORITY_PAGES.has(path)) {
          return { ...item, priority: 0.3, changefreq: 'yearly', lastmod: BUILD_DATE.toISOString() };
        }

        if (HIGH_PRIORITY_PAGES.has(path)) {
          return { ...item, priority: 0.9, changefreq: 'monthly', lastmod: BUILD_DATE.toISOString() };
        }

        if (path.startsWith('/casestudy/')) {
          return { ...item, priority: 0.8, changefreq: 'monthly', lastmod: BUILD_DATE.toISOString() };
        }

        // Top-level slug → blog post. Use the post's own publish date.
        const match = path.match(/^\/([^/]+)\/$/);
        if (match) {
          const postDate = BLOG_LASTMOD.get(match[1]);
          if (postDate) {
            return { ...item, priority: 0.7, changefreq: 'monthly', lastmod: postDate.toISOString() };
          }
        }

        return { ...item, priority: 0.5, changefreq: 'monthly', lastmod: BUILD_DATE.toISOString() };
      },
    }),
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
  // NOTE: On Netlify, public/_redirects is authoritative (served as proper 301s
  // at the edge before any HTML is rendered). Keep these entries in sync with
  // public/_redirects. This config also powers dev-mode (npm run dev) redirects.
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

    // '/services/' is now a real hub page (src/pages/services.astro)
    '/explainer-video-company/': '/explainer-videos/',
    '/explainer-video-company-20024/': '/explainer-videos/',
    '/animation-production-company/': '/explainer-videos/',
    '/motion-graphic-production-company/': '/motion-graphics/',
    '/animated-video-service/': '/explainer-videos/',
    '/30s-explainer-videos/': '/startups/',
    '/start-up-explainer-videos/': '/startups/',
    '/finance-explainer-videos/': '/saas-tech/',
    '/animated-product-demos/': '/product-demo-videos/',
    '/product-demos/': '/product-demo-videos/',
    '/tech-videos/': '/technology-videos/',
    '/technology-video/': '/technology-videos/',
    // '/saas-explainer-videos/' now has its own page
    '/technology-explainers/': '/saas-explainer-videos/',
    '/startup-explainer-videos/': '/startups/',
    // '/explainer-videos/' now has its own page
    // '/product-demo-videos/' now has its own page
    '/animated-onboarding-videos/': '/saas-explainer-videos/',

    // Old SaaS/startup stories pages (from GSC Apr 2026)
    '/stories-for-start-ups-animated-explainer-videos/': '/startups/',
    '/sas-platfrom-explainers/': '/saas-explainer-videos/',

    // Charity → causes
    '/charity-explainer-videos/': '/causes/',
    '/stories-for-charities-nonprofits/': '/causes/',

    // Agency partnership → agencies
    '/agency-partnership/': '/agencies/',

    // Landing pages → relevant audience pages
    '/landing-page-design-animation/': '/saas-tech/',
    '/landing-page-explainer-video-01/': '/saas-tech/',
    '/animation-production-company-2/': '/saas-tech/',
    '/landing-page-animated-video-services-01/': '/saas-tech/',
    '/landing-animated-product-demos-01/': '/product-demo-videos/',
    '/freelance-motion-graphic-designer/': '/motion-graphics/',
    '/freelance-motion-design-and-animation/': '/saas-tech/',
    '/motion-graphic-production/': '/motion-graphics/',

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
    '/other-project-slug/oartech-product-demo/': '/work/',

    // Old WP /folio/ slug → /casestudy/ (from GSC Apr 2026)
    '/folio/good2pay/': '/casestudy/good2pay/',
    '/folio/method-explainer-video/': '/casestudy/method-explainer-video/',
    '/folio/shape-connect/': '/casestudy/shape-connect/',
    '/folio/ipa-australia/': '/casestudy/ipa-australia/',

    // Duplicate case study
    '/casestudy/hey-you/': '/casestudy/heyyou-app/',

    // Old WordPress taxonomy pages (from GSC data)
    '/caseandstudy-videotype/2d-motion-graphic/': '/work/',
    '/caseandstudy-videotype/product-demo/': '/work/',
    '/cands-category/awareness/': '/work/',
    '/cands-category/music/': '/work/',
    '/cands-category/recent-work/': '/work/',
    '/cands-category/hero-video/': '/work/',
    '/cands-category/explainer/': '/work/',
    '/cands-category/app/': '/work/',
    '/cands-category/property/': '/work/',
    '/tax-other-projects/product-demo/': '/work/',
    '/tax-other-projects/explainer/': '/work/',
    '/tax-other-projects/education/': '/work/',
    '/category/industry/': '/blog/',

    // Old WP blog slugs that now 404 (from GSC "Not found", Apr 2026)
    '/saas-explainer-videos-the-secret-sauce-for-saas/': '/saas-explainer-videos/',
    '/best-animation-production-companies-in-australia/': '/find-the-perfect-animation-production-company/',
    '/looking-for-animation-expert-who-understands-complex-products-instantly/': '/art-of-explaining-complex-ideas-motion-designers-framework/',
    '/who-creates-the-best-product-demo-videos-complete-studio-comparison/': '/product-demo-videos/',
    '/why-your-product-demo-isnt-converting-and-how-to-fix-it/': '/why-saas-demo-video-not-converting/',
    '/new-features-ignored-by-existing-users-feature-adoption-animation/': '/onboard-saas-customers-using-animation-reduce-churn/',
    '/visual-problem-solver-daniel-neale-sees-solutions-others-miss/': '/about/',
    '/why-your-sales-presentations-arent-closing-deals-and-how-to-fix-it/': '/how-to-use-video-in-saas-sales-process/',
    '/creative-director-who-animates-strategic-execution-combination/': '/about/',
    '/need-someone-who-gets-complex-ideas-immediately-daniel-neale/': '/about/',
    '/why-your-investor-pitch-isnt-getting-funded-and-how-to-fix-it/': '/motion-design-in-pitch-deck-what-investors-want/',
    '/how-to-make-boring-presentations-engaging-without-being-cringe/': '/motion-design-in-pitch-deck-what-investors-want/',
    '/explainer-video-specialist-united-states-daniel-neale/': '/about/',

    // Missing /casestudy/ index (from GSC "Discovered" Apr 2026)
    '/casestudy/': '/work/',
  },
});
