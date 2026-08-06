import type { SpineLandingConfig } from '../../components/LandingPage/spine-types';
import { TESTIMONIAL_ACODIS_TEAM } from './testimonials';
import {
  SPINE_CLOSE,
  SPINE_GUIDE,
  SPINE_PLAN,
  SPINE_PROOF_CASES,
  SPINE_TICKER_ROW_A,
  SPINE_TICKER_ROW_B,
  SPINE_VALUE,
  SPINE_CORE_FAQS,
} from './spine-shared';

/** Config for /product-demo-videos/ */
export const productDemoVideosLanding: SpineLandingConfig = {
  slug: 'product-demo-videos',
  seo: {
    titleTag: 'Product Demo Video | Motion Story',
    metaDescription:
      'Animated product demo videos for SaaS. No login required. Built for landing pages, sales decks, and onboarding. Work directly with the creative director.',
    canonicalPath: '/product-demo-videos/',
  },
  hero: {
    eyebrow: 'Product demo videos',
    h1: 'Product demos that sales can send.',
    subhead: 'Clear. On brand. Ready for sales.',
    videoSrc: '866174146',
    fullShowreelUrl: '866174146',
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
    cases: SPINE_PROOF_CASES,
  },
  stakes: {
    eyebrow: 'What’s at stake',
    headline: 'The first film buyers see sets the ceiling for trust.',
    body: '',
  },
  success: {
    headline: SPINE_CLOSE.headline,
    body: 'One video. The buyer already gets it.',
  },
  testimonial: TESTIMONIAL_ACODIS_TEAM,
  faq: {
    items: [
      {
        question: 'What is a product demo video?',
        answer:
          'A short animated walkthrough, usually 60 to 120 seconds, that shows how your product works. Built for sales decks, landing pages, and follow up emails.',
      },
      {
        question: 'How is this different from a SaaS explainer video?',
        answer:
          'A product demo shows the product in action. A SaaS explainer sells the story and the why. Start with the explainer if buyers still don’t get what you do. Commission a demo when they need proof of how it works.',
      },
      ...SPINE_CORE_FAQS,
      {
        question: 'Do you need access to our product?',
        answer:
          'Usually a walkthrough, staging access, or a clear feature brief is enough. Viewers never need a live product login.',
      },
    ],
  },
  finalCta: {
    headline: SPINE_CLOSE.headline,
    formIntro: SPINE_CLOSE.formIntro,
  },
  form: {
    textareaLabel: 'What should your product demo video show?',
    submitButtonLabel: 'Send brief',
    redirectTo: '/thank-you',
  },
  accentColor: '#FF0000',
};
