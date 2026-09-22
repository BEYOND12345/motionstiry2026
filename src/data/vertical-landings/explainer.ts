import type { VerticalLandingConfig } from './types';
import {
  VERTICAL_CORE_FAQS,
  VERTICAL_TICKER_A,
  VERTICAL_TICKER_B,
  verticalCase,
} from './helpers';

export const explainerVerticalLanding: VerticalLandingConfig = {
  seo: {
    titleTag: 'Motion Graphic Explainer Videos | Motion Story',
    metaDescription:
      'Motion graphic explainer videos for products, platforms, and missions that do not explain themselves. Senior craft. Dan Neale, Byron Bay.',
    canonicalPath: '/explainer-videos/',
  },
  eyebrow: 'Motion graphic explainer videos',
  headline: ['Motion graphic', 'explainer videos.'],
  lede: 'Make the idea land in one sitting. For products, platforms, and missions that do not explain themselves. Sixty to 180 seconds.',
  heroVideo: {
    vimeoId: '879242129',
    title: 'Mosaic / Strategic Data Planning',
  },
  tickerLabel: 'Trusted by teams who need clarity',
  tickerRowA: VERTICAL_TICKER_A,
  tickerRowB: VERTICAL_TICKER_B,
  cases: [
    verticalCase('united-nations', {
      tags: 'Cause, data',
      body: 'Plastic waste in oceans — stark opener, then a clear path to action.',
    }),
    verticalCase('bat-nav', {
      tags: 'Energy, platform',
      body: 'Big battery technology explained so businesses understand why choosing right matters.',
    }),
    verticalCase('ranalytic', {
      tags: 'Hardware, RF, explainer',
      body: 'RF scanning technology walked through for buyers and partners who need the system, not the jargon.',
    }),
    verticalCase('nsw-gov', {
      tags: 'Government, reform, explainer',
      body: 'A complex reform made clear for a huge public audience — social-ready and praised for how clear the message is.',
    }),
    verticalCase('ipa', {
      tags: 'Policy, advocacy, explainer',
      body: 'Electric car road tax explained so the campaign could reach a huge audience and support approval in SA and VIC.',
    }),
    verticalCase('redcross', {
      tags: 'Nonprofit, Covid, explainer',
      body: 'Vaccine equity told like a wildlife documentary — humans in the spotlight, so the message could not be ignored.',
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
    { href: '/saas-explainer-videos/', eyebrow: 'SaaS', label: 'SaaS motion graphic explainer videos →' },
    { href: '/product-demo-videos/', eyebrow: 'Demos', label: 'Motion graphic product explainer videos →' },
    { href: '/finance-explainer-videos/', eyebrow: 'Fintech', label: 'Fintech motion graphic explainer videos →' },
    { href: '/work/', eyebrow: 'Portfolio', label: 'See all work →' },
  ],
};
