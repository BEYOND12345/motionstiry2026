import type { VerticalLandingConfig } from './types';
import {
  VERTICAL_CORE_FAQS,
  VERTICAL_TICKER_A,
  VERTICAL_TICKER_B,
  verticalCase,
  verticalFilm,
} from './helpers';

export const productDemoVerticalLanding: VerticalLandingConfig = {
  seo: {
    titleTag: 'Product Demo Videos | Product Animation Videos | Motion Story',
    metaDescription:
      'Product demo videos and product animation videos that show the software working. Software demos, onboarding videos, and tutorials. Dan Neale, Motion Story.',
    canonicalPath: '/product-demo-videos/',
  },
  eyebrow: 'For the product',
  headline: ['Product demo videos.'],
  lede: 'Show the software working. UI on screen, workflow clear. Play, understand, decide. More than a screen recording.',
  ctaNote:
    'What do people need to understand about your product? I can help decide what to show, then make the film.',
  heroVideo: {
    vimeoId: '448704979',
    title: 'Good2Pay / Paperless Invoicing',
  },
  heroCarousel: [
    verticalFilm('atomic'),
    verticalFilm('driv0'),
    verticalFilm('oovvuu'),
    verticalFilm('infoview'),
    verticalFilm('trudi'),
    verticalFilm('wipster'),
    verticalFilm('acodis'),
    verticalFilm('mosaic'),
  ],
  tickerLabel: 'Trusted by teams who need clarity',
  tickerRowA: VERTICAL_TICKER_A,
  tickerRowB: VERTICAL_TICKER_B,
  cases: [
    verticalCase('good2pay', {
      tags: 'SaaS, product demo, invoicing',
      body: 'Paperless invoicing, from the moment an invoice is created through to payment. The workflow stays on screen so a buyer can follow it without a call.',
    }),
    verticalCase('heyyou', {
      tags: 'SaaS, product demo, app',
      body: 'The Hey You ordering app, from the menu to skipping the queue.',
    }),
    verticalCase('food-by-us', {
      tags: 'SaaS, product demo, ordering',
      body: 'Commercial kitchen ordering in one place. Compare suppliers, then place the order.',
    }),
    verticalCase('class-trust', {
      tags: 'SaaS, product demo, accounting',
      body: 'SMSF accounting is dense by nature. The film turns the compliance workflow into a sequence a trustee or an accountant can follow.',
    }),
    verticalCase('trulet', {
      tags: 'SaaS, product demo, property',
      body: 'AI property management. Tenant screening, rent, and maintenance, shown as the product works.',
    }),
    verticalCase('uclusion', {
      tags: 'SaaS, product demo, product teams',
      body: 'How product teams collect feedback and decide what to build next.',
    }),
  ],
  value: {
    headline: 'Show the software working.',
    body: 'A software demo assumes people already care. I put the product on screen so they can see the workflow, not a feature list, not a raw screen grab.',
  },
  benefits: {
    headline: 'For the sales conversation',
    items: [
      'Software demo and software product demo, with the UI on screen',
      'Software onboarding videos and tutorials for the first week in the product',
      'Ready for a product page, a help centre, or a sales follow-up',
    ],
  },
  quote: {
    text: '40,000 views on YouTube, which increased brand perception and reputation.',
    name: 'Simon Lehman',
    role: 'Marketing Manager, Acodis',
  },
  faqs: [
    {
      question: 'What is a product demo video?',
      answer:
        'Sixty to 120 seconds of the product actually working. The interface stays on screen so a buyer can follow the workflow before they book a call. If they need the why before the how, that is an explainer, and many teams need both.',
    },
    {
      question: 'Do you make software onboarding videos and software tutorials?',
      answer:
        'Yes. A software onboarding video gets a new user to the first useful action. A software tutorial walks one task, for a help centre or an email sequence. Same craft as the demo: the product on screen, one workflow, no raw screen recording.',
    },
    ...VERTICAL_CORE_FAQS,
  ],
  links: [
    { href: '/saas-explainer-videos/', eyebrow: 'SaaS', label: 'SaaS motion graphic explainer videos →' },
    { href: '/product-launch-video/', eyebrow: 'Launch', label: 'Product launch videos →' },
    { href: '/startups/', eyebrow: 'Startups', label: 'Stories for startups →' },
    { href: '/work/', eyebrow: 'Portfolio', label: 'See all work →' },
  ],
};
