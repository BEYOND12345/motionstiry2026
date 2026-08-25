import type { VerticalLandingConfig } from './types';
import {
  VERTICAL_CORE_FAQS,
  VERTICAL_TICKER_A,
  VERTICAL_TICKER_B,
  verticalCase,
} from './helpers';

export const productDemoVerticalLanding: VerticalLandingConfig = {
  seo: {
    titleTag: 'Animated Product Demo Videos | Motion Story',
    metaDescription:
      'Animated product demos that show what you make and why it matters. Built for landing pages, sales, and launches. Dan Neale, Motion Story.',
    canonicalPath: '/product-demo-videos/',
  },
  eyebrow: 'Product demo videos',
  headline: ['Stories for', 'products.'],
  lede: 'Shine the best possible light on your creation. Informative explainers that give customers everything they need to know — all they have to do is click play.',
  heroVideo: {
    vimeoId: '866174146',
    title: 'Trudi / AI Property Management',
  },
  tickerLabel: 'Trusted by teams who need clarity',
  tickerRowA: VERTICAL_TICKER_A,
  tickerRowB: VERTICAL_TICKER_B,
  cases: [
    verticalCase('eluse-krue', {
      tags: 'Product demo, beauty, science, motion graphic',
      body: 'With decades of scientific research going into the Ellus & Krue EPI-gN Serum, they needed to tell its creation story. Framed through the professor’s eyes, every ingredient gets its moment with fluid animation and a hand-drawn style.',
    }),
    verticalCase('oartech', {
      tags: 'Animated product demo, health & fitness',
      body: "Oartech couldn't demo its advanced rowing machine online, so we designed an animation that shows the product in use — and where it beats the competition for a safer workout.",
    }),
    verticalCase('method-recycling', {
      tags: 'Product demo explainer, recycling system',
      body: 'Method struggled to get people excited about a revamp of the office bin. Vibrant character illustration and bold brand colour made a lively workplace story that also explains the green credentials.',
    }),
    verticalCase('propspeed', {
      tags: 'Animated product demo, marine',
      body: "Propspeed's propeller coating works wonders but isn't easily understood. Labelled diagrams and split-screen comparisons made the technical story easy to absorb, with the product in action.",
    }),
    verticalCase('braums', {
      tags: 'Animated product demo, traffic',
      body: 'Braums challenged the status quo with a touch-less pedestrian push button. We made a solid case for why the technology improves road safety and protects the public.',
    }),
    verticalCase('method-product', {
      tags: 'Product explainer, workplace',
      body: "A product-level walkthrough of Method's bin system in real workplaces — practical clarity that complements the brand film.",
    }),
    verticalCase('good2pay', {
      tags: 'Product demo, fintech',
      body: 'Paperless invoicing made obvious — a product story built for busy teams who need to see the workflow, not read a feature list.',
    }),
    verticalCase('heyyou', {
      tags: 'App demo, food ordering',
      body: 'A product story for the Hey You ordering app — clear enough for a cold visitor, sharp enough for growth teams.',
    }),
  ],
  value: {
    headline: 'Show it in action.',
    body: 'We design informative explainers that give customers everything they need to know about your product — captivating, easy to digest, and ready for sales and social.',
  },
  benefits: {
    headline: 'Show everyone',
    items: [
      'Captivating advertising that is easy to digest',
      'Social-media friendly with huge reach',
      'Solidify sales messaging and brand image',
    ],
  },
  quote: {
    text: '62% completion rate. 21% view rate. For a video about bins, we are pretty astounded. Long-term asset for our business.',
    name: 'Lee Bright',
    role: 'Marketing Lead, Method Recycling',
  },
  faqs: [
    {
      question: 'How is a product demo different from a SaaS explainer?',
      answer:
        'A product demo walks through how it works. A SaaS explainer sells the story and the value. Many teams need both.',
    },
    ...VERTICAL_CORE_FAQS,
  ],
  links: [
    { href: '/saas-explainer-videos/', eyebrow: 'SaaS', label: 'SaaS explainer videos →' },
    { href: '/startups/', eyebrow: 'Startups', label: 'Stories for startups →' },
    { href: '/explainer-videos/', eyebrow: 'Explainers', label: 'Explainer videos →' },
    { href: '/work/', eyebrow: 'Portfolio', label: 'See all work →' },
  ],
};
