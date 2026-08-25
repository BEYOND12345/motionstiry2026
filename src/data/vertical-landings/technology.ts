import type { VerticalLandingConfig } from './types';
import {
  VERTICAL_CORE_FAQS,
  VERTICAL_TICKER_A,
  VERTICAL_TICKER_B,
  verticalCase,
} from './helpers';

export const technologyVerticalLanding: VerticalLandingConfig = {
  seo: {
    titleTag: 'Technology Explainer Videos | Motion Story',
    metaDescription:
      'From AI and cyber security to crypto and smart cities — technology made widely understood through a worthy story. Dan Neale, Motion Story.',
    canonicalPath: '/technology-videos/',
  },
  eyebrow: 'Technology videos',
  headline: ['Stories for', 'technology.'],
  lede: 'From artificial intelligence and cyber security to crypto tokens and smart cities, the latest advances can be widely understood when you give them a worthy story.',
  heroVideo: {
    vimeoId: '879242129',
    title: 'Mosaic / Strategic Data Planning',
  },
  tickerLabel: 'Trusted by teams who need clarity',
  tickerRowA: VERTICAL_TICKER_A,
  tickerRowB: VERTICAL_TICKER_B,
  cases: [
    verticalCase('acodis', {
      tags: 'Software, AI, SaaS, explainer',
      body: "Acodis couldn't succinctly explain their AI data extraction in layman's terms. We brought the platform to life with visuals that replicate the process, matched to their brand.",
    }),
    verticalCase('carter-coin', {
      tags: 'Crypto, coin, explainer, 3D',
      body: "Carter Token's white paper didn't articulate the vision clearly enough. With 3D visuals and a plain-speaking script, we demonstrated the wealth-generating power of the security deposit solution.",
    }),
    verticalCase('liquid-ai', {
      tags: 'Software explainer, AI, motion graphic',
      body: "Liquid AI can target ads more precisely than ever, but couldn't easily show how the technology works. We crafted an origin story fusing traditional marketing, online advertising, and AI.",
    }),
    verticalCase('data-republic', {
      tags: 'Software explainer, data, motion graphic',
      body: "Data Republic wasn't converting enough visitors. We designed a conceptual 3D environment that methodically explained the inner workings of their privacy-preserving data solution.",
    }),
    verticalCase('giraffe', {
      tags: 'Software, city planning, SaaS, 3D',
      body: 'An inclusive story for architects, developers, and government — clean geometry walking through powerful capabilities and a clear vision for smarter cities.',
    }),
    verticalCase('bat-nav', {
      tags: 'Energy tech, platform explainer',
      body: 'Batteries as the future of energy — pointing out the pitfalls of choosing wrong, and how Cell Engineer matches the best battery to any requirement.',
    }),
    verticalCase('nisient', {
      tags: 'Quantum security, deep tech',
      body: 'Post-quantum security made clear for decision makers — one of the most technical subjects in software, told so non-specialists can follow and act.',
    }),
    verticalCase('shape-connect', {
      tags: 'Cyber security, SaaS',
      body: 'Website security visualised in real time — threats detected and neutralised, made accessible to non-technical buyers.',
    }),
  ],
  value: {
    headline: 'Convince and convert.',
    body: 'New technology needs clearly articulated statements to prove it is needed and show how powerful it can be. We construct convincing stories that dispel doubt and stick.',
  },
  benefits: {
    headline: 'Make it real',
    items: [
      'Inspire users with the possibilities',
      'Simplify comprehension and speed up adoption',
      'Highlight transformative potential',
    ],
  },
  quote: {
    text: '40,000 views on YouTube, which increased brand perception and reputation.',
    name: 'Simon Lehman',
    role: 'Marketing Manager, Acodis',
  },
  faqs: VERTICAL_CORE_FAQS,
  links: [
    { href: '/saas-explainer-videos/', eyebrow: 'SaaS', label: 'SaaS explainer videos →' },
    { href: '/product-demo-videos/', eyebrow: 'Demos', label: 'Product demo videos →' },
    { href: '/explainer-videos/', eyebrow: 'Explainers', label: 'Explainer videos →' },
    { href: '/work/', eyebrow: 'Portfolio', label: 'See all work →' },
  ],
};
