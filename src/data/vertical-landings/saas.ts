import type { VerticalLandingConfig } from './types';
import { verticalCase } from './helpers';

export const saasVerticalLanding: VerticalLandingConfig = {
  seo: {
    titleTag: 'SaaS Motion Graphics | Motion Story',
    metaDescription:
      'SaaS motion graphics that show what your software does, how it works, and why it matters — UI in motion, story first. Work directly with Dan Neale.',
    canonicalPath: '/saas-explainer-videos/',
  },
  eyebrow: 'SaaS motion graphics',
  headline: ['SaaS motion', 'graphics.'],
  lede: 'Show what your software does and why it matters — product on screen, value clear in seconds.',
  heroVideo: {
    vimeoId: '866174146',
    title: 'Trudi / AI Property Management',
  },
  tickerLabel: 'Trusted by teams who need clarity',
  tickerRowA: [
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
    {
      title: 'Atomic / In-App Messaging',
      client: 'Atomic',
      link: '/casestudy/atomic-in-app-messaging/',
      vimeoId: '861022443',
      tags: 'Software, SaaS, explainer, in-app messaging',
      body: 'Atomic needed an explainer that showcased the distinctiveness of their in-app messaging — how companies convey valuable, specific information instead of bombarding users with spam.',
    },
    verticalCase('good2pay', {
      tags: 'Fintech, SaaS, explainer',
      body: 'Paperless invoicing made obvious — a SaaS story built for busy teams who need to see the workflow, not read a feature list.',
    }),
    verticalCase('heyyou', {
      tags: 'App, SaaS, food ordering',
      body: 'A product story for the Hey You ordering app — clear enough for a cold visitor, sharp enough for growth teams.',
    }),
    {
      title: 'Uclusion / Product Decision Platform',
      client: 'Uclusion',
      link: '/casestudy/uclusion-product-explainer/',
      vimeoId: '338131381',
      tags: 'Software, SaaS, explainer',
      body: 'Uclusion invented a software modification platform with benefits for users and developers — if both use it. We synchronised their stories side-by-side to show how the solution fast-tracks improvement of any software.',
    },
    verticalCase('ark', {
      tags: 'SaaS, product, explainer',
      body: "ARK couldn't succinctly explain their modular design technology in layman's terms. We brought the platform to life with visuals that replicate the design process — what ARK does, in under 60 seconds.",
    }),
    {
      ...verticalCase('infoview', {
        tags: 'SaaS, expense management, explainer',
        body: 'Digitising expense management for modern teams — receipt capture to approval and reporting, without the paper trail.',
      }),
      vimeoId: '404864437',
    },
    verticalCase('class-trust', {
      tags: 'Fintech, SaaS, SMSF, explainer',
      body: "Class Trust's SMSF accounting is complex by nature. We broke compliance workflows into clear, approachable sequences so trustees and accountants get the value fast.",
    }),
    verticalCase('trulet', {
      tags: 'Software, SaaS, AI, property',
      body: 'TruLet aimed to revolutionise rental management with AI, but needed to simply explain how it works in practice. A fluid story of seamless efficiency, with their colours and typography throughout.',
    }),
    {
      title: 'Giraffe / Designing Cities',
      client: 'Giraffe',
      link: '/casestudy/giraffe/',
      vimeoId: '762112642',
      tags: 'Software, city planning, SaaS motion graphics, 3D',
      body: "Giraffe's software revolutionises city planning. We created an inclusive story for architects, developers, and government — using clean geometric shapes to walk through the capabilities and present a clear vision for smarter cities.",
    },
    {
      title: 'Wipster / Video Feedback Tool',
      client: 'Wipster',
      link: '/casestudy/wipster-product-overview/',
      vimeoId: '648360270',
      tags: 'Software, SaaS, explainer, feedback tool',
      body: "Wipster needed every user to know how their software had grown. Our 'Connect the Dots' concept links core functionality with newest developments, whisking the viewer through the features in smooth animation.",
    },
    {
      title: 'Acodis / AI Document Processing',
      client: 'Acodis',
      link: '/casestudy/acodis/',
      vimeoId: '580088673',
      tags: 'Software, AI, SaaS, explainer',
      body: "Acodis couldn't succinctly explain their AI data extraction in layman's terms. We brought the platform to life with visuals that replicate the extraction process, matched to their brand.",
    },
    {
      title: 'Mosaic / Strategic Data Planning',
      client: 'Mosaic',
      link: '/casestudy/mosaic-platform-explained/',
      vimeoId: '879242129',
      tags: 'Software, SaaS, data, explainer',
      body: 'Explaining strategic data planning with clarity and precision — a SaaS story built for buyers who need the aha moment fast.',
    },
    {
      title: 'Oovvuu / WordPress Plugin',
      client: 'Oovvuu',
      link: '/casestudy/oovvu/',
      vimeoId: '557000542',
      tags: 'Software, SaaS, explainer, demo',
      body: 'With a WordPress plugin capable of bringing curated video to every news article, Oovvuu needed reporters using it. We crafted a visual language resembling printing reels and focused on elevating news reporting.',
    },
    {
      title: 'DRIV0 / Carpark Management',
      client: 'DRIV0',
      link: '/casestudy/driv0/',
      vimeoId: '394074132',
      tags: 'SaaS motion graphics, software, booking',
      body: 'Drivo spent too much time explaining their car park management system in pitch meetings. The animation uses bird’s-eye and cross-section views, weaving software features and user benefits into an instantly understandable demonstration.',
    },
    {
      title: 'Food By Us / Kitchen Ordering',
      client: 'Food By Us',
      link: '/casestudy/food-by-us/',
      vimeoId: '672120018',
      tags: 'SaaS motion graphics, software, food ordering',
      body: 'Cutting through a crowded industry is hard, especially for busy chefs. We told the story clean and fast, kept transitions sharp and playful, and made the result tailored, personal, and compelling.',
    },
  ],
  value: {
    headline: 'Make complex software simple.',
    body: 'We unscramble advanced software so it can be presented in an easily understandable way, and capture attention with a straightforward story that keeps people engaged.',
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
    { href: '/product-demo-videos/', eyebrow: 'Demos', label: 'Product demo videos →' },
    { href: '/technology-videos/', eyebrow: 'Tech', label: 'Technology videos →' },
    { href: '/startups/', eyebrow: 'Startups', label: 'Stories for startups →' },
    { href: '/work/', eyebrow: 'Portfolio', label: 'See all work →' },
  ],
};
