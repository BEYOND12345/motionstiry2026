import type { SpineLandingConfig } from '../../components/LandingPage/spine-types';
import { TESTIMONIAL_METHOD } from './testimonials';
import {
  SPINE_CLOSE,
  SPINE_TICKER_ROW_A,
  SPINE_TICKER_ROW_B,
  spineCases,
} from './spine-shared';

const PRODUCT_DEMO_BODIES: Record<string, string> = {
  good2pay: 'Invoice to payment, on screen.',
  wipster: 'Feedback on the timeline, inside the product.',
  heyyou: 'From the menu to skipping the queue.',
  'food-by-us': 'Compare suppliers. Place the order.',
  'class-trust': 'SMSF accounting as a sequence you can follow.',
  trulet: 'Tenant screening, rent, and maintenance on screen.',
  uclusion: 'Collect feedback. Decide what to build next.',
  trudi: 'Tenant communication, maintenance, reporting.',
  infoview: 'Capture, approve, close the loop.',
  swell: 'AI accounting as a working product.',
  joineree: 'From a role to a match.',
  oovvuu: 'The plugin does the explaining.',
  driv0: 'The interface stays in frame.',
  bambora: 'A payment workflow a business can follow.',
};

const productDemoIds = [
  'wipster',
  'heyyou',
  'food-by-us',
  'class-trust',
  'trulet',
  'uclusion',
  'trudi',
  'infoview',
  'swell',
  'joineree',
  'oovvuu',
  'driv0',
  'bambora',
] as const;

const heroFilm = spineCases('good2pay').map((item) => ({
  ...item,
  outcome: PRODUCT_DEMO_BODIES.good2pay,
  body: PRODUCT_DEMO_BODIES.good2pay,
}))[0]!;

const productCases = spineCases(...productDemoIds).map((item, i) => {
  const id = productDemoIds[i]!;
  const body = PRODUCT_DEMO_BODIES[id] || item.outcome;
  return { ...item, body, outcome: body };
});

/** Config for /landing-page-product-video-01/ (old Ads URL still serves this page) */
export const explainerVideoLanding: SpineLandingConfig = {
  slug: 'product-video',
  seo: {
    titleTag: 'Make Your SaaS Product Easy to Understand | Motion Story',
    metaDescription:
      'Product videos for SaaS and technology companies that turn complicated products into simple stories. Not a screen recording. Work directly with the creative director.',
    canonicalPath: '/landing-page-product-video-01/',
  },
  siteFooter: true,
  hero: {
    eyebrow: 'Product videos',
    h1: 'Make your SaaS product easy to understand.',
    subhead:
      'I create product videos for SaaS and technology companies that turn complicated products into simple stories.',
    videoSrc: heroFilm.videoUrl,
    videoHash: heroFilm.vimeoHash,
    fullShowreelUrl: heroFilm.videoUrl,
    primaryCta: 'Book a call',
    secondaryCta: '',
  },
  trustStrip: {
    line: 'Trusted by teams who need clarity',
    rowA: SPINE_TICKER_ROW_A,
    rowB: SPINE_TICKER_ROW_B,
  },
  value: {
    headline: '',
    body: '',
  },
  guide: {
    eyebrow: 'Your director',
    headline: "Hi, I'm Dan.",
    body: "If you like what you see here, I'm the person you'll work with, helping you distil your product down to what matters and turn that value into a clear story people understand.",
    name: 'Daniel Neale',
    role: 'Creative director, Motion Story',
    photoSrc: '/daniel-neale.jpg',
  },
  plan: {
    eyebrow: '',
    headline: '',
    steps: [],
  },
  proof: {
    eyebrow: 'Selected work',
    headline: '',
    workLed: true,
    weaves: [
      {
        after: 2,
        headline: 'Product storytelling, not feature dumping.',
        mark: 'feature dumping',
        text: [
          'I find the simple idea underneath it.',
          'What it helps someone do, and why that matters.',
        ],
      },
      {
        after: 5,
        quote: {
          text: TESTIMONIAL_METHOD.quote,
          name: TESTIMONIAL_METHOD.name,
          company: TESTIMONIAL_METHOD.company,
        },
      },
      {
        after: 8,
        headline: 'Hundreds of product videos. One goal: make people get it.',
        mark: 'get it',
        text: "I've created hundreds of product demos, SaaS explainers and technology videos. I understand UI, product messaging and how to simplify complicated software without making it feel simplistic.",
      },
      {
        after: 11,
        headline: 'Make the value obvious.',
        mark: 'value obvious',
        text: [
          'Not a tour of everything it can do.',
          'The story someone will actually want to follow.',
        ],
      },
      {
        after: 12,
        headline: 'Got a product that needs a better story?',
        mark: 'better story',
        text: "Tell me what you're trying to explain. I'll help you work out the clearest way to turn it into a film people understand.",
      },
    ],
    cases: productCases,
  },
  stakes: {
    eyebrow: '',
    headline: '',
    body: '',
  },
  success: {
    headline: '',
    body: '',
  },
  testimonial: TESTIMONIAL_METHOD,
  faq: {
    items: [],
  },
  finalCta: {
    headline: SPINE_CLOSE.headline,
    formIntro: SPINE_CLOSE.formIntro,
  },
  form: {
    textareaLabel: 'What are you trying to explain?',
    submitButtonLabel: 'Send brief',
    redirectTo: '/thank-you',
  },
  accentColor: '#FF0000',
};
