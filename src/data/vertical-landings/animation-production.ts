import type { VerticalLandingConfig } from './types';
import {
  VERTICAL_CORE_FAQS,
  VERTICAL_TICKER_A,
  VERTICAL_TICKER_B,
  verticalCase,
  verticalFilm,
} from './helpers';

export const animationProductionLanding: VerticalLandingConfig = {
  seo: {
    titleTag: 'Animation Production Company | 2D Animation Studio | Motion Story',
    metaDescription:
      'Animation production company. 2D animation studio for motion graphics and brand animation. Dan Neale, Motion Story, Byron Bay.',
    canonicalPath: '/animation-production-company/',
  },
  eyebrow: '2D animation studio',
  headline: ['Animation production company.'],
  lede: 'Motion graphics and brand animation, plus explainers and product films, produced by the person who directs them. Based in Byron Bay. Teams in Sydney, Melbourne, Brisbane, Los Angeles, and across Australia.',
  heroVideo: {
    vimeoId: '557884851',
    title: 'Method / Beautiful Bin System',
  },
  heroCarousel: [
    verticalFilm('giraffe'),
    verticalFilm('wipster'),
    verticalFilm('nsw-gov'),
    verticalFilm('eluse-krue'),
    verticalFilm('bark-busters'),
    verticalFilm('driv0'),
    verticalFilm('infoview'),
    verticalFilm('aon-conversations'),
  ],
  tickerLabel: 'Trusted by teams who need clarity',
  tickerRowA: VERTICAL_TICKER_A,
  tickerRowB: VERTICAL_TICKER_B,
  cases: [
    verticalCase('method-recycling', {
      tags: 'Product, workplace, motion graphic',
      body: 'Method’s bin system, shown in real workplaces so the product is obvious without a feature list.',
    }),
    verticalCase('mosaic', {
      tags: 'Platform, data, explainer',
      body: 'Strategic data planning, distilled into a film a team can watch in one sitting.',
    }),
    verticalCase('acodis', {
      tags: 'AI, SaaS, explainer',
      body: 'AI document processing, made visible for people who are not the engineers.',
    }),
    verticalCase('meltwater', {
      tags: 'Brand, motion graphic',
      body: 'A brand film for Meltwater. The company, not a feature tour: media data at scale, told so a new audience can follow who they are.',
    }),
    verticalCase('redcross', {
      tags: 'Cause, explainer',
      body: 'A Red Cross vaccine explainer. Clear, calm, and factual.',
    }),
    verticalCase('trudi', {
      tags: 'SaaS, product film',
      body: 'AI property management, with the product on screen before anyone has to log in.',
    }),
  ],
  value: {
    headline: 'One company. One director.',
    body: 'I run the production. Story, boards, design, and animation. When a job needs extra hands, I direct them.',
  },
  benefits: {
    headline: 'What the company produces',
    items: [
      'Motion graphics, brand animation, explainers, and product films',
      'You work with the director, from brief to final file',
      'Teams in Sydney, Melbourne, Brisbane, Los Angeles, and across Australia',
    ],
  },
  quote: {
    text: 'Motion Story’s work was truly exceptional. Both highly creative and effective.',
    name: 'Emiliano Harrison',
    role: 'Google review',
  },
  faqs: [
    {
      question: 'Are you an animation production company?',
      answer:
        'Yes. Motion Story is an animation production company run by Dan Neale in Byron Bay. I work with teams in Sydney, Melbourne, Brisbane, and Los Angeles. You work with me from the story through to the finished film.',
    },
    {
      question: 'Do you make brand animation?',
      answer:
        'Yes. That is the company itself, not the product tour. Meltwater is that kind of film: motion graphics for who they are, so a new audience can follow it. The work is 2D.',
    },
    {
      question: 'Is this the same as hiring a freelancer?',
      answer:
        'The company is me. Teams who want a freelance motion designer, a motion graphics producer, a creative producer, or a specialist hire me on the freelance page. Same person, same films.',
    },
    ...VERTICAL_CORE_FAQS,
  ],
  links: [
    { href: '/motion-graphics/', eyebrow: 'Freelance', label: 'Freelance motion designer →' },
    { href: '/explainer-videos/', eyebrow: 'Explainers', label: 'Motion graphic explainer videos →' },
    { href: '/saas-explainer-videos/', eyebrow: 'SaaS', label: 'SaaS motion graphic explainer videos →' },
    { href: '/work/', eyebrow: 'Portfolio', label: 'See all work →' },
  ],
};
