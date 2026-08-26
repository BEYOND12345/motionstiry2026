import type { VerticalLandingConfig } from './types';
import {
  VERTICAL_CORE_FAQS,
  VERTICAL_TICKER_A,
  VERTICAL_TICKER_B,
  verticalCase,
} from './helpers';

export const startupsVerticalLanding: VerticalLandingConfig = {
  seo: {
    titleTag: 'Stories for Startups | Start-Up Explainer Videos | Motion Story',
    metaDescription:
      "Whether you're disrupting a marketplace or creating a new one, people need to understand what you do. Startup explainer videos by Dan Neale.",
    canonicalPath: '/startups/',
  },
  eyebrow: 'Startups',
  headline: ['Stories for', 'startups.'],
  lede: 'Make the idea clear fast — for investors, customers, and anyone who needs to get it before they buy in.',
  heroVideo: {
    vimeoId: '863428533',
    title: 'Trusyft / Product Promo',
  },
  tickerLabel: 'Trusted by teams who need clarity',
  tickerRowA: VERTICAL_TICKER_A,
  tickerRowB: VERTICAL_TICKER_B,
  cases: [
    verticalCase('ark', {
      tags: 'Start-up, product, explainer',
      body: "ARK couldn't succinctly explain their modular design technology in layman's terms. We brought the platform to life with visuals that replicate the design process — what ARK does, in under 60 seconds.",
    }),
    verticalCase('cart-share', {
      tags: 'Software, start-up, explainer, pitch',
      body: "Cart Share's discount platform had huge potential, but needed excitement and awareness. A fantastically simple 30-second concept, lively character animation, and an upbeat voiceover that leaves a lasting impression.",
    }),
    verticalCase('ranalytic', {
      tags: 'Start-up, product, explainer',
      body: 'With a new wireless network monitoring system ready to launch, Ranlytics needed to summarise the wide-ranging uses of Kallo. Product photos, a three-step install, and real use cases across public, industrial, and commercial sectors.',
    }),
    verticalCase('trulet', {
      tags: 'Software, start-up, explainer',
      body: 'TruLet aimed to revolutionise rental management with AI, but needed to simply explain how it works in practice. A fluid story of seamless efficiency, with their colours and typography throughout.',
    }),
    verticalCase('joineree', {
      tags: 'Start-up, recruitment, explainer',
      body: 'Joineree matches the right people to the right workplace — we created focused messages for employers and employees, with a distinct animation style for a forward-thinking service.',
    }),
    verticalCase('bat-nav', {
      tags: 'Software, start-up, explainer, 3D',
      body: 'Buying the right big battery is hard. A simple story presenting batteries as the future of energy, the pitfalls of choosing wrong, and how Cell Engineer matches the best battery to any requirement.',
    }),
    verticalCase('heyyou', {
      tags: 'App, start-up, product',
      body: 'A launch-ready product story for the Hey You ordering app — clear for cold traffic, sharp for growth.',
    }),
    verticalCase('good2pay', {
      tags: 'Fintech, start-up, explainer',
      body: 'Paperless invoicing explained fast — built for teams who will not sit through a feature tour.',
    }),
  ],
  value: {
    headline: 'Explain your idea.',
    body: 'With a dynamic visual story, you can truly connect with investors, show the true value your product brings, and clarify any doubts about your next big idea.',
  },
  benefits: {
    headline: 'Convince and scale',
    items: [
      'Get customers believing in what you are doing',
      'Convince more investors to back your idea',
      'Reinforce your brand and convey your character',
    ],
  },
  quote: {
    text: '62% completion rate. 21% view rate. Long-term asset for our business.',
    name: 'Lee Bright',
    role: 'Marketing Lead, Method Recycling',
  },
  faqs: [
    {
      question: 'What is the best fit for startups?',
      answer:
        'Homepage heroes, waitlist videos, investor updates, and the first product story that has to work cold — before a login.',
    },
    ...VERTICAL_CORE_FAQS,
  ],
  links: [
    { href: '/saas-explainer-videos/', eyebrow: 'SaaS', label: 'SaaS motion graphics →' },
    { href: '/product-demo-videos/', eyebrow: 'Demos', label: 'Product demo videos →' },
    { href: '/creative-business-designer/', eyebrow: 'Sessions', label: 'Creative business designer →' },
    { href: '/work/', eyebrow: 'Portfolio', label: 'See all work →' },
  ],
};
