import type { VerticalLandingConfig } from './types';
import {
  VERTICAL_TICKER_A,
  VERTICAL_TICKER_B,
  verticalCase,
  verticalFilm,
} from './helpers';

export const explainerVerticalLanding: VerticalLandingConfig = {
  seo: {
    titleTag: 'Explainer Videos | Animated Explainer Video | Motion Story',
    metaDescription:
      'Animated explainer videos for products, platforms and ideas that do not explain themselves. Dan Neale, Motion Story, Byron Bay.',
    canonicalPath: '/explainer-videos/',
  },
  eyebrow: 'Motion graphics',
  headline: ['Create the aha moment.'],
  lede: 'Explainer videos for products, platforms and ideas that take too long to explain.',
  heroVideo: {
    vimeoId: '540393117',
    title: 'United Nations / Plastic Waste Data',
  },
  heroCarousel: [
    verticalFilm('united-nations'),
    verticalFilm('amsed'),
    verticalFilm('mosaic'),
    verticalFilm('ipa'),
    verticalFilm('redcross'),
    verticalFilm('cotton-australia'),
    verticalFilm('atomic'),
    verticalFilm('acodis'),
  ],
  tickerLabel: 'Trusted by teams who need clarity',
  tickerRowA: VERTICAL_TICKER_A,
  tickerRowB: VERTICAL_TICKER_B,
  workLed: false,
  hideMe: true,
  storyLed: true,
  story: {
    quote: {
      text: 'What would normally take hours to explain now takes 90 seconds.',
      name: 'AMSED',
      role: '',
    },
    range: {
      headline: ['Different subjects.', 'Same job.'],
      mark: 'Same job.',
      text: 'Make the complicated feel obvious.',
      films: [
        verticalCase('ipa', {
          tags: 'Policy, explainer',
          body: 'Electric car road tax explained.',
        }),
        verticalCase('redcross', {
          tags: 'Nonprofit, explainer',
          body: 'Vaccine equity, told like a wildlife documentary.',
        }),
        verticalCase('cotton-australia', {
          tags: 'Farming, explainer',
          body: 'Thirty years of farming, from planting to harvest.',
        }),
      ],
    },
    close: {
      headline: "Hi, I'm Dan. I'll direct the story.",
      mark: 'direct the story.',
      text: [
        'You bring the product, idea or message. Tell me what you are trying to communicate.',
        "I'll help find the way into it, then take it through storyboard, design and animation with you.",
      ],
      ctaLabel: 'Talk to me about your project',
    },
  },
  weaves: [],
  cases: [
    verticalCase('amsed', {
      tags: 'Motion graphic, explainer',
      body: 'Hours of explanation, compressed into a film you can watch in one sitting.',
    }),
    verticalCase('mosaic', {
      tags: 'Software, explainer',
      body: 'Strategic data planning, shown so a team can see the system.',
    }),
    verticalCase('nsw-gov', {
      tags: 'Government, reform, explainer',
      body: 'A complex reform, made clear for a huge public audience.',
    }),
    verticalCase('ranalytic', {
      tags: 'Hardware, RF, explainer',
      body: 'RF scanning technology, walked through for buyers and partners.',
    }),
    verticalCase('bat-nav', {
      tags: 'Energy, platform',
      body: 'Big battery storage, from monitoring a site through to dispatch.',
    }),
    verticalCase('acodis', {
      tags: 'Software, AI, explainer',
      body: 'AI document processing, shown so someone outside engineering can follow it.',
    }),
    verticalCase('atomic', {
      tags: 'Software, explainer',
      body: 'In-app messaging, shown inside the product rather than described beside it.',
    }),
    verticalCase('food-by-us', {
      tags: 'Software, explainer',
      body: 'Commercial kitchen ordering. Compare suppliers and place the order in one place.',
    }),
    verticalCase('rspca-cats', {
      tags: 'Cause, explainer',
      body: 'Cat care, told so a community can see how to help.',
    }),
    verticalCase('rspca-giving', {
      tags: 'Fundraising, explainer',
      body: 'Workplace giving. From caring about animal welfare to a donation at work.',
    }),
    verticalCase('lxrp', {
      tags: 'Infrastructure, explainer',
      body: "Victoria's level crossing removals, explained for the people living with the works.",
    }),
    verticalCase('solar-my-school', {
      tags: 'Community, explainer',
      body: 'Crowdfunded solar for schools, so parents and local businesses can see how it works.',
    }),
    verticalCase('good2pay', {
      tags: 'Software, explainer',
      body: 'Paperless invoicing, from the invoice through to payment.',
    }),
    verticalCase('braums', {
      tags: 'Product, explainer',
      body: 'A touchless pedestrian crossing. Sensors instead of a button.',
    }),
    verticalCase('bark-busters', {
      tags: 'Training, explainer',
      body: 'A dog training method, shown so an owner can follow it.',
    }),
    verticalCase('driv0', {
      tags: 'Software, explainer',
      body: 'Carpark management. Sensors and the workflow a building manager actually runs.',
    }),
    verticalCase('heyyou', {
      tags: 'App, explainer',
      body: 'Order-ahead coffee and food, from the menu to skipping the queue.',
    }),
    verticalCase('swell', {
      tags: 'AI, accounting, explainer',
      body: 'AI accounting. Bookkeeping and reporting, so a client can see what the service does.',
    }),
  ],
  value: {
    headline: 'Create the aha moment.',
    body: [],
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
    role: '',
  },
  faqs: [],
  links: [
    { href: '/saas-explainer-videos/', eyebrow: 'SaaS', label: 'SaaS motion graphic explainer videos →' },
    { href: '/product-demo-videos/', eyebrow: 'Demos', label: 'Software demo videos →' },
    { href: '/finance-explainer-videos/', eyebrow: 'Fintech', label: 'Fintech motion graphic explainer videos →' },
    { href: '/work/', eyebrow: 'Portfolio', label: 'See all work →' },
  ],
};
