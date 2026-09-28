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
      'Freelance motion designer for teams in Sydney, Melbourne, Brisbane, and Los Angeles. Dan Neale, Motion Story, Byron Bay.',
    canonicalPath: '/motion-graphics/',
  },
  eyebrow: 'Freelance motion designer',
  headline: ['Freelance motion designer.'],
  lede: "Hi. I'm Dan. All round creative. Design, illustration, 2D animation, motion graphics, production. I work as part of your team, anywhere in the world. A creative partner, not a freelancer you brief and forget, and not a studio with layers.",
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
      body: 'Product motion that feels native to the software. Clear, branded, and ready for sales.',
    }),
  ],
  value: {
    headline: 'Storytelling from idea to execution.',
    body: "I work with you directly from the first conversation to the last file. Working out the story, making storyboards, defining a complex message, or seeing it through production. I'm with you from beginning to end.",
  },
  benefits: {
    headline: 'Why agencies book me',
    items: [
      'Twenty years of premium studio experience, direct access',
      'Trusted by top Australian creative agencies',
      'I plug into your team in Sydney, Melbourne, Brisbane, Los Angeles, or remotely',
    ],
  },
  quote: {
    text: 'Motion Story’s delivery was creative, efficient, and seamless. Once we provided our vision, they crafted a clear message that resonated with our audience.',
    name: 'Kris Deep',
    role: 'Founder, Pulseee',
  },
  faqs: [
    {
      question: 'Do you work with teams in Sydney, Melbourne, Brisbane, and Los Angeles?',
      answer:
        'Yes. I am based in Byron Bay and work remotely with agencies and in house teams in Sydney, Melbourne, Brisbane, Los Angeles, and across Australia. You still work with me.',
    },
    {
      question: 'Can I hire you as a freelancer, producer, or specialist?',
      answer:
        'Yes. Teams hire me as a freelance motion designer, a motion graphics producer, a creative producer, a consultant, or a specialist who plugs into the team. The work is the same. I shape the story and make the film.',
    },
    {
      question: 'What do you cover?',
      answer:
        '2D animation and motion graphics, explainers and SaaS demos, product launch films, brand and campaign work, and motion for pitch decks and internal comms.',
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
