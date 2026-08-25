import type { VerticalLandingConfig } from './types';
import {
  VERTICAL_CORE_FAQS,
  VERTICAL_TICKER_A,
  VERTICAL_TICKER_B,
  verticalCase,
} from './helpers';

export const explainerVerticalLanding: VerticalLandingConfig = {
  seo: {
    titleTag: 'Explainer Video Production | Motion Story',
    metaDescription:
      'Explainer video production for SaaS, tech, and nonprofits. Motion design that makes people understand and care. Dan Neale, Byron Bay.',
    canonicalPath: '/explainer-videos/',
  },
  eyebrow: 'Explainer videos',
  headline: ['Explainers for ideas', "that don't explain themselves."],
  lede: 'Complex products, platforms, and missions — made clear in 60 to 180 seconds. A story people can watch, understand, and act on.',
  heroVideo: {
    vimeoId: '879242129',
    title: 'Mosaic / Strategic Data Planning',
  },
  tickerLabel: 'Trusted by teams who need clarity',
  tickerRowA: VERTICAL_TICKER_A,
  tickerRowB: VERTICAL_TICKER_B,
  cases: [
    verticalCase('atomic', {
      tags: 'SaaS, product, explainer',
      body: 'In-app messaging explained without the spam story — distinctive, specific, and easy to watch.',
    }),
    verticalCase('acodis', {
      tags: 'AI, SaaS, explainer',
      body: 'AI document processing demystified for lay audiences with visuals that replicate the extraction process.',
    }),
    verticalCase('giraffe', {
      tags: 'Platform, 3D, explainer',
      body: 'Urban planning software told for architects, developers, and government in one coherent film.',
    }),
    verticalCase('wipster', {
      tags: 'SaaS, feedback tool',
      body: 'Connect-the-dots storytelling that shows how a complex collaboration product actually works.',
    }),
    verticalCase('bat-nav', {
      tags: 'Energy, platform',
      body: 'Big battery technology explained so businesses understand why choosing right matters.',
    }),
    verticalCase('united-nations', {
      tags: 'Cause, data',
      body: 'Plastic waste in oceans — stark opener, then a clear path to action.',
    }),
    verticalCase('shape-connect', {
      tags: 'Security, SaaS',
      body: 'Website security made visible for non-technical decision makers.',
    }),
    verticalCase('ranalytic', {
      tags: 'Hardware, RF, explainer',
      body: 'RF scanning technology walked through for buyers and partners who need the system, not the jargon.',
    }),
  ],
  value: {
    headline: 'Make the complex watchable.',
    body: 'What would normally take hours to explain can take 90 seconds — when the story is right and the craft is senior.',
  },
  benefits: {
    headline: 'What a strong explainer does',
    items: [
      'Gives buyers the aha moment without a demo call',
      'Aligns sales, marketing, and product on one story',
      'Works on the homepage, in decks, and in ads',
    ],
  },
  quote: {
    text: 'What would normally take hours to explain now takes 90 seconds.',
    name: 'AMSED',
    role: 'Client',
  },
  faqs: VERTICAL_CORE_FAQS,
  links: [
    { href: '/saas-explainer-videos/', eyebrow: 'SaaS', label: 'SaaS explainer videos →' },
    { href: '/technology-videos/', eyebrow: 'Tech', label: 'Technology videos →' },
    { href: '/product-demo-videos/', eyebrow: 'Demos', label: 'Product demo videos →' },
    { href: '/work/', eyebrow: 'Portfolio', label: 'See all work →' },
  ],
};
