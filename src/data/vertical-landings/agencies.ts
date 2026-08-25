import type { VerticalLandingConfig } from './types';
import {
  VERTICAL_CORE_FAQS,
  VERTICAL_TICKER_A,
  VERTICAL_TICKER_B,
  verticalCase,
} from './helpers';

export const agenciesVerticalLanding: VerticalLandingConfig = {
  seo: {
    titleTag: 'Agency Partnerships | Motion Story',
    metaDescription:
      'Senior creative direction and motion for agencies. White label or collaborative. Skip the production chain — work directly with Dan.',
    canonicalPath: '/agencies/',
  },
  eyebrow: 'Agencies & studios',
  headline: ['Senior craft.', 'No production maze.'],
  lede: 'White label or collaborative creative direction — senior motion design without another production layer. You get direct access to the director responsible for the work.',
  heroVideo: {
    vimeoId: '649763018',
    title: 'Aon / Conversations',
  },
  tickerLabel: 'Trusted by teams who need clarity',
  tickerRowA: VERTICAL_TICKER_A,
  tickerRowB: VERTICAL_TICKER_B,
  cases: [
    verticalCase('wipster', {
      tags: 'Agency-ready, SaaS, explainer',
      body: 'Connect-the-dots product storytelling for a video feedback platform — the kind of film agencies need when the brief is complex and the timeline is real.',
    }),
    verticalCase('meltwater', {
      tags: 'Brand story, campaign motion',
      body: 'A brand story with the polish agencies expect — clear narrative, strong craft, delivery you can put in front of a client without flinching.',
    }),
    verticalCase('atomic', {
      tags: 'Product, in-app messaging',
      body: 'In-app messaging made native and clear — collaborative or white-label ready.',
    }),
    verticalCase('united-nations', {
      tags: 'Cause, data, explainer',
      body: 'High-stakes storytelling for a global mission — proof that senior craft scales to the hardest briefs.',
    }),
    verticalCase('mosaic', {
      tags: 'SaaS, data planning',
      body: 'Strategic data planning explained with precision — the standard agencies want when the client is technical.',
    }),
    verticalCase('acodis', {
      tags: 'AI, SaaS, explainer',
      body: 'Deep tech made layperson-clear — the brief agencies bring when the product team cannot explain it themselves.',
    }),
    verticalCase('giraffe', {
      tags: '3D, urban tech',
      body: 'City planning software for three stakeholder groups — architecture, development, and government.',
    }),
    verticalCase('method-recycling', {
      tags: 'Product, brand',
      body: 'A workplace product story with completion rates that still surprise clients years later.',
    }),
  ],
  value: {
    headline: 'One director. Clear accountability.',
    body: 'Skip the account manager stack. I own concept through delivery — and when specialists come in, I direct them. Your client still gets a single point of craft.',
  },
  benefits: {
    headline: 'How agencies use Motion Story',
    items: [
      'White label delivery under your studio brand',
      'Collaborative creative direction on retained accounts',
      'Senior surge capacity without hiring a full production team',
    ],
  },
  quote: {
    text: 'Daniel and the team were incredible to work with. We had a larger explainer video project and Motion Story made it easy to brainstorm, pivot ideas and collaborate at each stage.',
    name: 'Matty Sirros',
    role: 'Marketing Manager, Atomic',
  },
  faqs: [
    {
      question: 'Do you white label?',
      answer:
        'Yes. Collaborative or white label. You keep the client relationship; I own the craft and delivery.',
    },
    ...VERTICAL_CORE_FAQS,
  ],
  links: [
    { href: '/saas-explainer-videos/', eyebrow: 'SaaS', label: 'SaaS explainer videos →' },
    { href: '/product-demo-videos/', eyebrow: 'Demos', label: 'Product demo videos →' },
    { href: '/motion-graphics/', eyebrow: 'Motion', label: 'Motion graphics →' },
    { href: '/work/', eyebrow: 'Portfolio', label: 'See all work →' },
  ],
};
