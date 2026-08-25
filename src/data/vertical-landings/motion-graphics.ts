import type { VerticalLandingConfig } from './types';
import {
  VERTICAL_CORE_FAQS,
  VERTICAL_TICKER_A,
  VERTICAL_TICKER_B,
  verticalCase,
} from './helpers';

export const motionGraphicsVerticalLanding: VerticalLandingConfig = {
  seo: {
    titleTag: 'Motion Graphics & Freelance Motion Designer | Motion Story',
    metaDescription:
      'Senior freelance motion designer. Premium 2D animation, motion graphics and explainers. Direct access. No agency layer. Dan Neale, Byron Bay.',
    canonicalPath: '/motion-graphics/',
  },
  eyebrow: 'Motion graphics',
  headline: ['Motion graphics', 'with a director attached.'],
  lede: 'Premium 2D animation and motion graphics for agencies and in-house teams. Twenty years of studio craft, direct access — no markup, no junior handoffs.',
  heroVideo: {
    vimeoId: '394326130',
    title: 'Meltwater / Brand Story',
  },
  tickerLabel: 'Trusted by teams who need clarity',
  tickerRowA: VERTICAL_TICKER_A,
  tickerRowB: VERTICAL_TICKER_B,
  cases: [
    verticalCase('united-nations', {
      tags: 'Motion graphic, data, cause',
      body: 'Data-led storytelling for a global plastic waste brief — attention-grabbing, then actionable.',
    }),
    verticalCase('method-recycling', {
      tags: 'Character, brand, product',
      body: 'Character-led workplace storytelling with completion rates that still surprise.',
    }),
    verticalCase('rspca-cats', {
      tags: 'Character animation, charity',
      body: 'Behaviour change for cat owners — warm illustration with a serious message.',
    }),
    verticalCase('atomic', {
      tags: 'SaaS, UI storytelling',
      body: 'Product motion that feels native to the software — clear, branded, sales-ready.',
    }),
    verticalCase('wipster', {
      tags: 'Platform, explainer',
      body: 'Smooth feature storytelling for a complex collaboration tool.',
    }),
    verticalCase('amsed', {
      tags: 'Motion graphic',
      body: 'Hours of explanation compressed into a watchable motion piece.',
    }),
    verticalCase('bark-busters', {
      tags: 'Character, training',
      body: 'Charming character animation that makes behavioural training feel accessible.',
    }),
    verticalCase('eluse-krue', {
      tags: 'Science, beauty, hand-drawn',
      body: 'A scientific product story with a unique hand-drawn visual language.',
    }),
  ],
  value: {
    headline: 'Bespoke work. No templates.',
    body: 'I do what I say I will do. Reliable delivery, senior craft, and a single point of contact from brief to final file.',
  },
  benefits: {
    headline: 'Why agencies book me',
    items: [
      'Twenty years of premium studio experience, direct access',
      'Trusted by top Australian creative agencies',
      'No agency markup, no junior handoffs',
    ],
  },
  quote: {
    text: 'Motion Story’s delivery was creative, efficient, and seamless. Once we provided our vision, they crafted a clear message that resonated with our audience.',
    name: 'Kris Deep',
    role: 'Founder, Pulseee',
  },
  faqs: [
    {
      question: 'What do you cover?',
      answer:
        '2D animation and motion graphics, explainers and SaaS demos, product launch films, brand and campaign work, and motion for pitch decks and internal comms.',
    },
    ...VERTICAL_CORE_FAQS,
  ],
  links: [
    { href: '/agencies/', eyebrow: 'Agencies', label: 'Agency partnerships →' },
    { href: '/explainer-videos/', eyebrow: 'Explainers', label: 'Explainer videos →' },
    { href: '/saas-explainer-videos/', eyebrow: 'SaaS', label: 'SaaS explainer videos →' },
    { href: '/work/', eyebrow: 'Portfolio', label: 'See all work →' },
  ],
};
