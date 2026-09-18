import type { VerticalLandingConfig } from './types';
import { verticalCase } from './helpers';

export const saasVerticalLanding: VerticalLandingConfig = {
  seo: {
    titleTag: 'SaaS Motion Graphic Explainer Videos | Motion Story',
    metaDescription:
      'SaaS motion graphic explainer videos for new products. Product on screen, story first — even from a Figma. Work directly with Dan Neale.',
    canonicalPath: '/saas-explainer-videos/',
  },
  eyebrow: 'SaaS motion graphic explainer videos',
  headline: ['Make the software', 'obvious before login.'],
  lede: 'SaaS motion graphic explainer videos for products that do not explain themselves yet. Product on screen — even from a Figma or a napkin brief — so people get it before they log in.',
  heroVideo: {
    vimeoId: '866174146',
    title: 'Trudi / AI Property Management',
  },
  tickerLabel: 'Trusted by teams who need clarity',
  tickerRowA: [
    'TransferWise',
    'Schoolbox',
    'Wipster',
    'Atomic',
    'Good2Pay',
    'Hey You',
    'Uclusion',
    'Class Trust',
    'ARK',
    'TruLet',
  ],
  tickerRowB: [
    'Smokeball',
    'Insignia Financial',
    'Amex',
    'AWS',
    'Aon',
    'Liquid AI',
    'Data Republic',
    'Method',
    'UTS',
  ],
  workEyebrow: 'Selected work',
  cases: [
    verticalCase('atomic', {
      tags: 'Software, SaaS, explainer, in-app messaging',
      body: 'Atomic needed an explainer that showcased the distinctiveness of their in-app messaging — how companies convey valuable, specific information instead of bombarding users with spam.',
    }),
    verticalCase('wipster', {
      tags: 'Software, SaaS, explainer, feedback tool',
      body: "Wipster needed every user to know how their software had grown. Our 'Connect the Dots' concept links core functionality with newest developments, whisking the viewer through the features in smooth animation.",
    }),
    verticalCase('acodis', {
      tags: 'Software, AI, SaaS, explainer',
      body: "Acodis couldn't succinctly explain their AI data extraction in layman's terms. We brought the platform to life with visuals that replicate the extraction process, matched to their brand.",
    }),
    verticalCase('infoview', {
      tags: 'SaaS, expense management, explainer',
      body: 'Digitising expense management for modern teams — receipt capture to approval and reporting, without the paper trail.',
    }),
    verticalCase('oovvuu', {
      tags: 'Software, SaaS, explainer, demo',
      body: 'With a WordPress plugin capable of bringing curated video to every news article, Oovvuu needed reporters using it. We crafted a visual language resembling printing reels and focused on elevating news reporting.',
    }),
    verticalCase('driv0', {
      tags: 'SaaS motion graphics, software, booking',
      body: "Drivo spent too much time explaining their car park management system in pitch meetings. The animation uses bird’s-eye and cross-section views, weaving software features and user benefits into an instantly understandable demonstration.",
    }),
  ],
  value: {
    headline: 'Make a new product make sense.',
    body: 'I unscramble software that does not explain itself yet — product on screen, story first — so founders and product teams can launch without a login or a live demo.',
  },
  benefits: {
    headline: 'Operate effectively',
    items: [
      'Present a clear product overview',
      'Quickly teach the user how it works',
      'Increase conversions faster',
    ],
  },
  quote: {
    text: '40,000 views on YouTube, which increased brand perception and reputation.',
    name: 'Simon Lehman',
    role: 'Marketing Manager, Acodis',
  },
  faqs: [
    {
      question: 'What is a SaaS motion graphic explainer video?',
      answer:
        'A 60–90 second film that makes software obvious. Product on screen, UI in motion, story first. Creative directors brief it as a motion graphic explainer. It is not a generic 2D character explainer and not a raw screen recording.',
    },
    {
      question: 'What makes a good software demo?',
      answer:
        "It's all about the story. The film should clearly present the solution and demonstrate how the features help the viewer.",
    },
    {
      question: 'What type of animation works best for software?',
      answer:
        'Motion graphic-styled films in 2D or 3D work best — they represent product features clearly without drowning in UI chrome.',
    },
    {
      question: 'How long does it take?',
      answer:
        'On average six weeks for a SaaS motion graphics piece. Simpler pieces can ship in about two weeks when scope is tight.',
    },
    {
      question: 'What assets should I provide?',
      answer:
        'If the product is live: access to the platform and brand assets. If it is still a concept, we can invent the visuals from the brief.',
    },
    {
      question: 'What is the ideal length?',
      answer:
        'Between 90 and 120 seconds is the sweet spot. Longer only when you need a deep walkthrough of the platform.',
    },
    {
      question: 'Who will I be working with?',
      answer:
        'A small studio. You work hands-on with me — the director — throughout the creative process. No account-manager layer.',
    },
    {
      question: 'How much does it cost?',
      answer:
        'From $5,000. Most projects land around $10,000–$15,000. Fixed quote after we understand the brief.',
    },
  ],
  links: [
    { href: '/product-demo-videos/', eyebrow: 'Demos', label: 'Motion graphic product explainer videos →' },
    { href: '/finance-explainer-videos/', eyebrow: 'Fintech', label: 'Fintech motion graphic explainer videos →' },
    { href: '/cybersecurity-explainer-videos/', eyebrow: 'Cyber', label: 'Cybersecurity motion graphic explainer videos →' },
    { href: '/work/', eyebrow: 'Portfolio', label: 'See all work →' },
  ],
};
