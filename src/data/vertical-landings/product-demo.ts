import type { VerticalLandingConfig } from './types';
import {
  VERTICAL_CORE_FAQS,
  VERTICAL_TICKER_A,
  VERTICAL_TICKER_B,
  verticalCase,
} from './helpers';

export const productDemoVerticalLanding: VerticalLandingConfig = {
  seo: {
    titleTag: 'Motion Graphic Product Explainer Videos | Motion Story',
    metaDescription:
      'Motion graphic product explainer videos that show the software working. UI on screen — more than a screen recording. Dan Neale, Motion Story.',
    canonicalPath: '/product-demo-videos/',
  },
  eyebrow: 'Motion graphic product explainer videos',
  headline: ['Motion graphic product', 'explainer videos.'],
  lede: 'Show the product working. UI on screen, workflow clear — play, understand, decide. More than a screen recording.',
  heroVideo: {
    vimeoId: '557884851',
    title: 'Method / Beautiful Bin System',
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
    verticalCase('heyyou', {
      tags: 'App demo, food ordering',
      body: 'A product story for the Hey You ordering app — clear enough for a cold visitor, sharp enough for growth teams.',
    }),
  ],
  value: {
    headline: 'Show the product working.',
    body: 'A demo assumes people already care. I put the product on screen so they can see the workflow — not a feature list, not a raw screen grab.',
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
      question: 'What is a motion graphic product explainer video?',
      answer:
        'A film that shows the product working — real or stylised UI — so people already evaluating you can see the workflow. Different from a SaaS motion graphic explainer, which tells the why when the product is new or the UI is unfinished. Many teams need both.',
    },
    ...VERTICAL_CORE_FAQS,
  ],
  links: [
    { href: '/saas-explainer-videos/', eyebrow: 'SaaS', label: 'SaaS motion graphic explainer videos →' },
    { href: '/product-launch-video/', eyebrow: 'Launch', label: 'Product launch videos →' },
    { href: '/startups/', eyebrow: 'Startups', label: 'Stories for startups →' },
    { href: '/work/', eyebrow: 'Portfolio', label: 'See all work →' },
  ],
};
