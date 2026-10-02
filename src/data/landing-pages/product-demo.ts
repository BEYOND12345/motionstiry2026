import type { SpineLandingConfig } from '../../components/LandingPage/spine-types';
import { TESTIMONIAL_METHOD } from './testimonials';
import {
  SPINE_CLOSE,
  SPINE_GUIDE,
  SPINE_PLAN,
  SPINE_PROOF_PRODUCT_DEMO_ADS,
  SPINE_TICKER_ROW_A,
  SPINE_TICKER_ROW_B,
  SPINE_VALUE,
  SPINE_CORE_FAQS,
} from './spine-shared';

/** Config for /landing-animated-product-demos-01/ */
export const productDemoLanding: SpineLandingConfig = {
  slug: 'product-demo',
  seo: {
    titleTag: 'Product Demo Videos | Motion Story',
    metaDescription:
      'Product demos with the software on screen. Dan Neale, freelance motion graphic designer. Story, storyboard, and animation.',
    canonicalPath: '/landing-animated-product-demos-01/',
  },
  hero: {
    eyebrow: 'Product demo videos',
    h1: 'Show how the product works.',
    subhead: 'The software stays on screen, so a buyer can follow the workflow.',
    videoSrc: '861022443',
    fullShowreelUrl: '861022443',
    primaryCta: 'Book a call',
    secondaryCta: 'See the work',
  },
  trustStrip: {
    line: 'Trusted by teams who need clarity',
    rowA: SPINE_TICKER_ROW_A,
    rowB: SPINE_TICKER_ROW_B,
  },
  value: SPINE_VALUE,
  guide: SPINE_GUIDE,
  plan: {
    ...SPINE_PLAN,
    steps: [
      { label: 'We talk', body: 'Scope, audience, where the demo has to work.' },
      SPINE_PLAN.steps[1],
      SPINE_PLAN.steps[2],
    ],
  },
  proof: {
    eyebrow: 'Selected work',
    headline: 'Selected product demos.',
    cases: SPINE_PROOF_PRODUCT_DEMO_ADS,
  },
  stakes: {
    eyebrow: 'What’s at stake',
    headline: 'The first film buyers see sets the ceiling for trust.',
    body: '',
  },
  success: {
    headline: SPINE_CLOSE.headline,
    body: 'What do people need to understand about the product? I can help decide what to show, then make the film.',
  },
  testimonial: TESTIMONIAL_METHOD,
  faq: {
    items: [
      {
        question: 'What is a product demo video?',
        answer:
          'A short animated walkthrough that shows how your product works. Built for landing pages, sales decks, and follow up emails.',
      },
      ...SPINE_CORE_FAQS,
    ],
  },
  finalCta: {
    headline: SPINE_CLOSE.headline,
    formIntro: SPINE_CLOSE.formIntro,
  },
  form: {
    textareaLabel: 'What does your product do?',
    submitButtonLabel: 'Send brief',
    redirectTo: '/thank-you',
  },
  accentColor: '#FF0000',
};
