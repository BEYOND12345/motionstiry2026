import type { SpineLandingConfig } from '../../components/LandingPage/spine-types';
import { TESTIMONIAL_NSW_GOV } from './testimonials';
import {
  SPINE_CLOSE,
  SPINE_GUIDE,
  SPINE_PLAN,
  SPINE_PROOF_PRODUCT_LAUNCH,
  SPINE_TICKER_ROW_A,
  SPINE_TICKER_ROW_B,
  SPINE_VALUE,
  SPINE_CORE_FAQS,
} from './spine-shared';

/** Config for /product-launch-video/ */
export const productLaunchLanding: SpineLandingConfig = {
  slug: 'product-launch',
  seo: {
    titleTag: 'Product Launch Videos That Land | Motion Story',
    metaDescription:
      'Product launch videos for SaaS and tech. Work directly with the creative director. Story, craft, and timing built for the moment you ship.',
    canonicalPath: '/product-launch-video/',
  },
  hero: {
    eyebrow: 'Product launch videos',
    h1: 'Product launch videos that land.',
    subhead: 'Built for the moment you ship.',
    videoSrc: '863428533',
    fullShowreelUrl: '863428533',
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
      { label: 'We talk', body: 'Scope, launch date, where the film has to work.' },
      SPINE_PLAN.steps[1],
      {
        label: 'We make the film',
        body: 'Design, animation, delivery. Built for the launch window.',
      },
    ],
  },
  proof: {
    eyebrow: 'Selected work',
    headline: 'Selected launch work.',
    cases: SPINE_PROOF_PRODUCT_LAUNCH,
  },
  stakes: {
    eyebrow: 'What’s at stake',
    headline: 'The first film buyers see sets the ceiling for trust.',
    body: '',
  },
  success: {
    headline: SPINE_CLOSE.headline,
    body: 'One story. Ready for launch day.',
  },
  testimonial: TESTIMONIAL_NSW_GOV,
  faq: {
    items: [
      {
        question: 'What is a product launch video?',
        answer:
          'A film built for the moment you ship: the hook, the story, and proof sales can keep using after launch week.',
      },
      ...SPINE_CORE_FAQS,
    ],
  },
  finalCta: {
    headline: SPINE_CLOSE.headline,
    formIntro: SPINE_CLOSE.formIntro,
  },
  form: {
    textareaLabel: 'What are you launching?',
    submitButtonLabel: 'Send brief',
    redirectTo: '/thank-you',
  },
  accentColor: '#FF0000',
};
