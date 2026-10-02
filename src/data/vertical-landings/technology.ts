import type { VerticalLandingConfig } from './types';
import {
  VERTICAL_CORE_FAQS,
  VERTICAL_TICKER_A,
  VERTICAL_TICKER_B,
  verticalCase,
  verticalFilm,
} from './helpers';

export const technologyVerticalLanding: VerticalLandingConfig = {
  seo: {
    titleTag: 'Technology Explainer Videos | Motion Story',
    metaDescription:
      'From AI and cyber security to crypto and smart cities. Technology made widely understood through a worthy story. Dan Neale, Motion Story.',
    canonicalPath: '/technology-videos/',
  },
  eyebrow: 'Technology videos',
  headline: ['Make the tech', 'followable.'],
  lede: 'AI, cyber, crypto, smart cities. Complex tech made clear with a story people can follow.',
  ctaNote:
    'What is the hard idea your buyers have to grasp? I can make that followable, using the work rather than a list of industries.',
  heroVideo: {
    vimeoId: '762112642',
    title: 'Giraffe / Designing Cities',
  },
  heroCarousel: [
    verticalFilm('giraffe'),
    verticalFilm('mosaic'),
    verticalFilm('atomic'),
    verticalFilm('cloud-trace'),
    verticalFilm('shape-connect'),
    verticalFilm('ranalytic'),
    verticalFilm('trudi'),
    verticalFilm('driv0'),
  ],
  tickerLabel: 'Trusted by teams who need clarity',
  tickerRowA: VERTICAL_TICKER_A,
  tickerRowB: VERTICAL_TICKER_B,
  cases: [
    verticalCase('acodis', {
      tags: 'Software, AI, SaaS, explainer',
      body: 'Acodis needed the extraction process explained for people outside engineering. I showed the process in their visual language.',
    }),
    verticalCase('carter-coin', {
      tags: 'Crypto, coin, explainer, 3D',
      body: 'Carter Token needed the security-deposit idea out of the white paper. I used 3D visuals and a plain script so the mechanism was followable.',
    }),
    verticalCase('liquid-ai', {
      tags: 'Software explainer, AI, motion graphic',
      body: 'Liquid AI needed people to see how the targeting works. I told it as an origin story: traditional marketing, online advertising, and the AI.',
    }),
    verticalCase('data-republic', {
      tags: 'Software explainer, data, motion graphic',
      body: 'Data Republic needed the privacy model explained without a white paper. I built a 3D environment that walks through how the data stays protected.',
    }),
    verticalCase('bat-nav', {
      tags: 'Energy tech, platform explainer',
      body: 'Batteries as the future of energy. Pointing out the pitfalls of choosing wrong, and how Cell Engineer matches the best battery to any requirement.',
    }),
    verticalCase('nisient', {
      tags: 'Quantum security, deep tech',
      body: 'Post quantum security made clear for decision makers. One of the most technical subjects in software, told so non-specialists can follow and act.',
    }),
  ],
  value: {
    headline: 'Make the hard idea followable.',
    body: 'I start with what a buyer has to understand, then show how the technology works. The film has to stay credible with the people who already know the subject.',
  },
  benefits: {
    headline: 'Make it real',
    items: [
      'One idea a non-specialist can follow',
      'The mechanism, not a feature list',
      'A film the technical team can still stand behind',
    ],
  },
  quote: {
    text: '40,000 views on YouTube, which increased brand perception and reputation.',
    name: 'Simon Lehman',
    role: 'Marketing Manager, Acodis',
  },
  faqs: VERTICAL_CORE_FAQS,
  links: [
    { href: '/cybersecurity-explainer-videos/', eyebrow: 'Cyber', label: 'Cybersecurity motion graphic explainer videos →' },
    { href: '/finance-explainer-videos/', eyebrow: 'Fintech', label: 'Fintech motion graphic explainer videos →' },
    { href: '/saas-explainer-videos/', eyebrow: 'SaaS', label: 'SaaS motion graphic explainer videos →' },
    { href: '/work/', eyebrow: 'Portfolio', label: 'See all work →' },
  ],
};
