import type { VerticalLandingConfig } from './types';
import {
  VERTICAL_CORE_FAQS,
  VERTICAL_TICKER_A,
  VERTICAL_TICKER_B,
  verticalCase,
} from './helpers';

export const motionGraphicsVerticalLanding: VerticalLandingConfig = {
  seo: {
    titleTag: 'Freelance Motion Designer Australia | Motion Graphics Studio | Motion Story',
    metaDescription:
      'Senior freelance motion designer. Motion graphic explainer videos, 2D animation, and campaign motion. Direct access. No agency layer. Dan Neale, Byron Bay.',
    canonicalPath: '/motion-graphics/',
  },
  eyebrow: 'Motion graphics studio',
  headline: ['Motion graphics studio.', 'Freelance motion designer.'],
  lede: 'Motion graphics with a director attached. Premium 2D animation and motion graphic explainer videos for agencies and in-house teams. Byron Bay, Australia — no markup, no junior handoffs.',
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
    verticalCase('rspca-cats', {
      tags: 'Character animation, charity',
      body: 'Behaviour change for cat owners — warm illustration with a serious message.',
    }),
    verticalCase('amsed', {
      tags: 'Motion graphic',
      body: 'Hours of explanation compressed into a watchable motion piece.',
    }),
    verticalCase('bark-busters', {
      tags: 'Character, training',
      body: 'Charming character animation that makes behavioural training feel accessible.',
    }),
    verticalCase('atomic', {
      tags: 'SaaS, UI storytelling',
      body: 'Product motion that feels native to the software — clear, branded, sales-ready.',
    }),
    verticalCase('cotton-australia', {
      tags: 'Farming, explainer, motion graphic',
      body: 'Thirty years of eco-friendly farming told from planting to harvest — craft in service of a clear story.',
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
    { href: '/explainer-videos/', eyebrow: 'Explainers', label: 'Motion graphic explainer videos →' },
    { href: '/saas-explainer-videos/', eyebrow: 'SaaS', label: 'SaaS motion graphic explainer videos →' },
    { href: '/work/', eyebrow: 'Portfolio', label: 'See all work →' },
  ],
};
