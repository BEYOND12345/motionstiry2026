import type { VerticalLandingConfig } from './types';
import {
  VERTICAL_CORE_FAQS,
  VERTICAL_TICKER_A,
  VERTICAL_TICKER_B,
  verticalCase,
} from './helpers';

export const productLaunchVerticalLanding: VerticalLandingConfig = {
  seo: {
    titleTag: 'Product Launch Videos for SaaS | Motion Story',
    metaDescription:
      'Product launch videos for new SaaS products. Motion graphics for the moment you ship — even before the UI is ready. Work directly with Dan Neale.',
    canonicalPath: '/product-launch-video/',
  },
  eyebrow: 'Product launch videos',
  headline: ['The first film', 'buyers see.'],
  lede: 'Product launch videos for the moment you ship. One story, timed to launch day — even before the UI is ready. Sales can keep using it after week one.',
  heroVideo: {
    vimeoId: '863428533',
    title: 'Trusyft / Product Promo',
  },
  tickerLabel: 'Trusted by teams who need clarity',
  tickerRowA: VERTICAL_TICKER_A,
  tickerRowB: VERTICAL_TICKER_B,
  cases: [
    verticalCase('eluse-krue', {
      tags: 'Launch, beauty, science',
      body: 'A scientific product story told through the professor’s eyes — every ingredient gets its moment, ready for the campaign that ships with the product.',
    }),
    verticalCase('bark-busters', {
      tags: 'Launch, character, training',
      body: 'Charming character animation that makes behavioural training feel accessible on day one.',
    }),
    verticalCase('bresic-witney', {
      tags: 'Launch, brand, property',
      body: 'A different kind of estate agent, told through motion for the moment the brand had to land.',
    }),
    verticalCase('amsed', {
      tags: 'Launch, motion graphic',
      body: 'Hours of explanation compressed into a watchable launch piece.',
    }),
    verticalCase('acir', {
      tags: 'Launch, data, programme',
      body: 'Food waste data turned into a visual narrative that could travel with the programme launch.',
    }),
    verticalCase('food-by-us', {
      tags: 'Launch, SaaS, kitchen',
      body: 'A crowded category, told clean and fast so the product could ship with a story chefs actually watch.',
    }),
  ],
  value: {
    headline: 'Ready for launch day.',
    body: 'The first film buyers see sets the ceiling for trust. I time the story to the window you actually have — not a production maze.',
  },
  benefits: {
    headline: 'What a launch film has to do',
    items: [
      'Give sales a story they can send after week one',
      'Work before the UI is finished',
      'Hold up on a homepage, in a deck, and in a room',
    ],
  },
  quote: {
    text: 'What would normally take hours to explain now takes 90 seconds.',
    name: 'AMSED',
    role: 'Client',
  },
  faqs: [
    {
      question: 'What is a product launch video?',
      answer:
        'A film built for the moment you ship: the hook, the story, and proof sales can keep using after launch week. It is a motion graphics piece timed to launch — not a separate craft.',
    },
    ...VERTICAL_CORE_FAQS,
  ],
  links: [
    { href: '/saas-explainer-videos/', eyebrow: 'SaaS', label: 'SaaS motion graphic explainer videos →' },
    { href: '/product-demo-videos/', eyebrow: 'Demos', label: 'Motion graphic product explainer videos →' },
    { href: '/startups/', eyebrow: 'Startups', label: 'Stories for startups →' },
    { href: '/work/', eyebrow: 'Portfolio', label: 'See all work →' },
  ],
};
