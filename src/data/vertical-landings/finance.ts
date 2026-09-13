import type { VerticalLandingConfig } from './types';
import { VERTICAL_CORE_FAQS, verticalCase } from './helpers';

export const financeVerticalLanding: VerticalLandingConfig = {
  seo: {
    titleTag: 'Fintech Motion Graphic Explainer Videos | Motion Story',
    metaDescription:
      'Fintech motion graphic explainer videos for payments, banking, and financial software. Trust-first craft. Dan Neale, Byron Bay.',
    canonicalPath: '/finance-explainer-videos/',
  },
  eyebrow: 'Fintech motion graphic explainer videos',
  headline: ['Fintech motion graphic', 'explainer videos.'],
  lede: 'Fintech motion graphic explainer videos for payments, banking, and financial software that cannot afford to look cute or vague. Clear enough for a board, sharp enough for a landing page.',
  heroVideo: {
    vimeoId: '1157366298',
    vimeoHash: '1ddd2b07e1',
    title: 'Amex / Closed Loop',
  },
  tickerLabel: 'Trusted by teams who need clarity',
  tickerRowA: [
    'TransferWise',
    'American Express',
    'Insignia Financial',
    'Good2Pay',
    'Class Trust',
    'Bambora',
    'Swell',
    'Atomic',
    'Wipster',
  ],
  tickerRowB: [
    'Smokeball',
    'Schoolbox',
    'Aon',
    'AWS',
    'Mosaic',
    'Data Republic',
    'UTS',
    'NSW Government',
    'Method',
    'Acodis',
  ],
  workEyebrow: 'Selected work',
  cases: [
    verticalCase('insignia', {
      tags: 'Financial services, motion graphic explainer',
      body: 'Finance is a category where trust is everything. The Insignia film balances what they do with a warm, human language that earns attention rather than demanding it.',
    }),
    verticalCase('class-trust', {
      tags: 'Fintech, SMSF, motion graphic explainer',
      body: "Class Trust's SMSF accounting is complex by nature. Compliance workflows become clear sequences so trustees and accountants get the value fast.",
    }),
    verticalCase('good2pay', {
      tags: 'Fintech, invoicing, motion graphic explainer',
      body: 'Paperless invoicing made obvious — a payments story for busy teams who need to see the workflow, not read a feature list.',
    }),
    verticalCase('bambora', {
      tags: 'Payments, gateway, motion graphic explainer',
      body: 'A payment gateway walked through as one system: accept, manage, and reconcile across channels without the usual integration fog.',
    }),
    verticalCase('swell', {
      tags: 'AI accounting, fintech, motion graphic explainer',
      body: 'Machine learning for bookkeeping and reconciliation, told so accountants see the advisory work they get back — not a black box.',
    }),
  ],
  value: {
    headline: 'Make money software feel trustworthy.',
    body: 'Payments, ledgers, and closed-loop networks do not explain themselves. I put the mechanism on screen so a CFO, a marketer, and a customer all see the same story.',
  },
  benefits: {
    headline: 'What a fintech explainer has to do',
    items: [
      'Make the mechanism obvious without a deck',
      'Look like a regulated business, not a cartoon',
      'Work on a homepage, in a sales room, and in a board pack',
    ],
  },
  quote: {
    text: 'It felt like Motion Story was part of our team, even though we were both sitting at the other end of the globe.',
    name: 'Simon Lehmann',
    role: 'Head of Marketing, Acodis',
  },
  faqs: [
    {
      question: 'What is a fintech motion graphic explainer video?',
      answer:
        'A short film that makes a payments, banking, or finance product obvious. Motion graphics, not live action. Built for trust: clear mechanism, no cartoon language, no feature dump.',
    },
    {
      question: 'How is this different from a generic explainer?',
      answer:
        'Generic explainers often use stock characters and a problem-solution template. Finance buyers read that as cheap. These films show the actual product logic — the loop, the ledger, the workflow — in a visual language that matches the brand.',
    },
    ...VERTICAL_CORE_FAQS,
  ],
  links: [
    { href: '/saas-explainer-videos/', eyebrow: 'SaaS', label: 'SaaS motion graphic explainer videos →' },
    { href: '/cybersecurity-explainer-videos/', eyebrow: 'Cyber', label: 'Cybersecurity motion graphic explainer videos →' },
    { href: '/product-demo-videos/', eyebrow: 'Demos', label: 'Motion graphic product explainer videos →' },
    { href: '/work/', eyebrow: 'Portfolio', label: 'See all work →' },
  ],
};
