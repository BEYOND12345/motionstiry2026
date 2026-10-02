import type { VerticalLandingConfig } from './types';
import {
  VERTICAL_CORE_FAQS,
  VERTICAL_TICKER_A,
  VERTICAL_TICKER_B,
  verticalCase,
  verticalFilm,
} from './helpers';

export const motionGraphicsVerticalLanding: VerticalLandingConfig = {
  seo: {
    titleTag: 'Freelance Motion Graphic Designer | Motion Story',
    metaDescription:
      'Freelance motion graphic designer. Dan Neale helps teams explain products and complex ideas, from the story through to the finished film.',
    canonicalPath: '/freelance-motion-graphic-designer/',
  },
  eyebrow: 'Freelance motion designer',
  headline: ['Freelance motion designer.', 'Your team, directly.'],
  lede: "Hi, I'm Dan. I help teams explain products and complex ideas, from the story through to the finished film.",
  ctaNote:
    'You work with me. Story, storyboard, design and animation. Or an existing brief, executed. When the work needs another specialist, I bring them in and direct them.',
  heroVideo: {
    vimeoId: '394326130',
    title: 'Meltwater / Brand Story',
  },
  heroCarousel: [
    verticalFilm('meltwater'),
    verticalFilm('mosaic'),
    verticalFilm('redcross'),
    verticalFilm('acodis'),
    verticalFilm('wipster'),
    verticalFilm('giraffe'),
    verticalFilm('trudi'),
    verticalFilm('nsw-gov'),
  ],
  tickerLabel: 'Trusted by teams who need clarity',
  tickerRowA: VERTICAL_TICKER_A,
  tickerRowB: VERTICAL_TICKER_B,
  workLed: true,
  weaves: [
    {
      after: 2,
      quote: {
        text: 'Motion Story’s delivery was creative, efficient, and seamless. Once we provided our vision, they crafted a clear message that resonated with our audience.',
        name: 'Kris Deep',
        role: 'Founder, Pulseee',
      },
    },
    {
      after: 5,
      headline: 'Shape the story, or execute the brief.',
      mark: 'brief.',
      text: [
        'Need an extra pair of hands? I can do that.',
        'Need someone to take ownership of the motion? I can do that too.',
      ],
    },
    {
      after: 8,
      headline: 'More than making things move.',
      mark: 'making things move.',
      text: 'I help work out what needs to be communicated, how to communicate it clearly, then make it happen.',
    },
    {
      after: 9,
      headline: 'You work directly with me.',
      mark: 'directly with me',
      text: 'Story, storyboard, design and animation. Or an existing brief, executed. When the work needs another specialist, I bring them in and direct them.',
    },
  ],
  cases: [
    verticalCase('united-nations', {
      tags: 'Motion graphic, data, cause',
      body: 'Data led storytelling for a global plastic waste brief. It grabs attention, then gives a path to action.',
    }),
    verticalCase('eluse-krue', {
      tags: 'Brand, motion graphic',
      body: 'Bringing a premium skincare brand to life through motion.',
    }),
    verticalCase('amsed', {
      tags: 'Motion graphic',
      body: 'Hours of explanation compressed into a watchable motion piece.',
    }),
    verticalCase('method-recycling', {
      tags: 'Product, motion graphic',
      body: 'Reimagining waste management with thoughtful design.',
    }),
    verticalCase('rspca-cats', {
      tags: 'Character animation, charity',
      body: 'Behaviour change for cat owners. Warm illustration with a serious message.',
    }),
    verticalCase('ipa', {
      tags: 'Policy, explainer',
      body: 'Explaining road tax policy for the electric vehicle era.',
    }),
    verticalCase('bark-busters', {
      tags: 'Character, training',
      body: 'Charming character animation that makes behavioural training feel accessible.',
    }),
    verticalCase('cotton-australia', {
      tags: 'Farming, explainer, motion graphic',
      body: 'Thirty years of eco friendly farming told from planting to harvest. Craft in service of a clear story.',
    }),
    verticalCase('acir', {
      tags: 'Data, cause',
      body: 'Tackling food waste through animated data storytelling.',
    }),
    verticalCase('atomic', {
      tags: 'SaaS, UI storytelling',
      body: 'Product motion that feels native to the software.',
    }),
  ],
  value: {
    headline: 'Shape the story, or execute the brief.',
    body: "If you already know exactly what you need, I can jump in and execute it. If you don't, I can help work it out. I can take direction, or I can provide it.",
  },
  benefits: {
    headline: 'How I like to work',
    items: [
      'Need an extra pair of hands? I can do that.',
      'Need someone to take ownership of the motion? I can do that too.',
      'I can take direction, or I can provide it.',
    ],
  },
  quote: {
    text: 'Motion Story’s delivery was creative, efficient, and seamless. Once we provided our vision, they crafted a clear message that resonated with our audience.',
    name: 'Kris Deep',
    role: 'Founder, Pulseee',
  },
  faqs: [
    {
      question: 'Are you a freelancer or a studio?',
      answer:
        'You work with me. I handle the story, the storyboard, the design and the animation. When a project needs another specialist, I bring in someone I trust and I direct that work.',
    },
    {
      question: 'Can you just execute a brief?',
      answer:
        "Yes. If you already know exactly what you need, I can jump in and make it. If you don't, I can help work out the idea, the message and the visual approach. I can take direction, or I can provide it.",
    },
    {
      question: 'What do you actually do on a project?',
      answer:
        "I've spent years doing more than making things move. That might mean simplifying a complicated product, developing the visual idea, shaping the story, planning the animation or creating detailed storyboards before production begins. I help work out what needs to be communicated, how to communicate it clearly, and then make it happen.",
    },
    ...VERTICAL_CORE_FAQS,
  ],
  links: [
    { href: '/animation-production-company/', eyebrow: 'Company', label: 'Animation production company →' },
    { href: '/agencies/', eyebrow: 'Agencies', label: 'Agency partnerships →' },
    { href: '/explainer-videos/', eyebrow: 'Explainers', label: 'Motion graphic explainer videos →' },
    { href: '/saas-explainer-videos/', eyebrow: 'SaaS', label: 'SaaS motion graphic explainer videos →' },
    { href: '/work/', eyebrow: 'Portfolio', label: 'See all work →' },
  ],
};
