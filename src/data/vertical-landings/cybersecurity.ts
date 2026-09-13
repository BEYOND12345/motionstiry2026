import type { VerticalLandingConfig } from './types';
import { VERTICAL_CORE_FAQS, verticalCase } from './helpers';

export const cybersecurityVerticalLanding: VerticalLandingConfig = {
  seo: {
    titleTag: 'Cybersecurity Motion Graphic Explainer Videos | Motion Story',
    metaDescription:
      'Cybersecurity motion graphic explainer videos for security, privacy, and quantum-era platforms. Technical subjects, non-specialist buyers. Dan Neale.',
    canonicalPath: '/cybersecurity-explainer-videos/',
  },
  eyebrow: 'Cybersecurity motion graphic explainer videos',
  headline: ['Cybersecurity motion graphic', 'explainer videos.'],
  lede: 'Cybersecurity motion graphic explainer videos for platforms that security people understand and buyers do not. Threats, privacy, post-quantum readiness — told so a non-specialist can follow and act.',
  heroVideo: {
    vimeoId: '1213121904',
    title: 'Nisient / Quantum Security',
  },
  tickerLabel: 'Trusted by teams who need clarity',
  tickerRowA: [
    'TransferWise',
    'Schoolbox',
    'Nisient',
    'Shape Connect',
    'Data Republic',
    'Acodis',
    'Atomic',
    'Wipster',
    'Mosaic',
    'Amex',
  ],
  tickerRowB: [
    'Smokeball',
    'United Nations',
    'NSW Government',
    'AWS',
    'Aon',
    'Liquid AI',
    'UTS',
    'Method',
    'Giraffe',
  ],
  workEyebrow: 'Selected work',
  cases: [
    verticalCase('shape-connect', {
      tags: 'Cyber security, SaaS, motion graphic explainer',
      body: 'Website security visualised in real time — threats detected and neutralised, made accessible to non-technical decision makers.',
    }),
    verticalCase('data-republic', {
      tags: 'Privacy, data security, motion graphic explainer',
      body: 'Privacy-preserving data explained as a journey, not a white paper. A 3D environment that shows how the security model actually works.',
    }),
  ],
  value: {
    headline: 'Make the threat, and the fix, visible.',
    body: 'Security products fail in the first ten seconds when they open on a feature list. I start with the specific risk the buyer already feels, then show the mechanism — without talking down to the technical team in the room.',
  },
  benefits: {
    headline: 'What a security explainer has to do',
    items: [
      'Name one real risk, not “the threat landscape”',
      'Show the mechanism so a CFO can follow it',
      'Stay credible with the security team watching',
    ],
  },
  quote: {
    text: "Every animator we'd tried before just made something that looked good but still confused people.",
    name: 'Alexander Armer',
    role: 'Client',
  },
  faqs: [
    {
      question: 'What is a cybersecurity motion graphic explainer video?',
      answer:
        'A short film that makes a security, privacy, or cyber product obvious to people who do not live in the category. Motion graphics so you can show threats, flows, and controls that a screen recording cannot.',
    },
    {
      question: 'Can you explain a product the security team already understands?',
      answer:
        'Yes. The film is usually for the buyer who is not the practitioner — a CISO briefing a board, a founder briefing a customer, a marketer briefing a category. The technical team still has to recognise their product in it.',
    },
    {
      question: 'Is this a product demo or an explainer?',
      answer:
        'If the audience does not yet believe they need the category, start with a motion graphic explainer. If they already care and need to see the console, that is a product explainer. Many cybersecurity briefs arrive as the first and should have been the second — or the other way around.',
    },
    ...VERTICAL_CORE_FAQS,
  ],
  links: [
    { href: '/saas-explainer-videos/', eyebrow: 'SaaS', label: 'SaaS motion graphic explainer videos →' },
    { href: '/finance-explainer-videos/', eyebrow: 'Fintech', label: 'Fintech motion graphic explainer videos →' },
    { href: '/technology-videos/', eyebrow: 'Tech', label: 'Technology explainer videos →' },
    { href: '/work/', eyebrow: 'Portfolio', label: 'See all work →' },
  ],
};
