import type { SpineLandingConfig } from '../../components/LandingPage/spine-types';
import { TESTIMONIAL_ACODIS_TEAM } from './testimonials';
import {
  SPINE_CLOSE,
  SPINE_GUIDE,
  SPINE_PLAN,
  SPINE_PROOF_SAAS_EXPLAINER,
  SPINE_TICKER_ROW_A,
  SPINE_TICKER_ROW_B,
  SPINE_VALUE,
  SPINE_CORE_FAQS,
} from './spine-shared';

/** Config for /saas-explainer-videos/ */
export const saasExplainerLanding: SpineLandingConfig = {
  slug: 'saas-explainer',
  seo: {
    titleTag: 'SaaS Explainer Video | Motion Story',
    metaDescription:
      'SaaS explainer video production for complex software. Clear product stories for landing pages, sales, and onboarding. Work directly with the creative director.',
    canonicalPath: '/saas-explainer-videos/',
  },
  hero: {
    eyebrow: 'SaaS explainer videos',
    h1: 'SaaS explainers that make complex software obvious.',
    subhead: 'Complex software, made obvious.',
    videoSrc: '879242129',
    fullShowreelUrl: '879242129',
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
  plan: SPINE_PLAN,
  proof: {
    eyebrow: 'Selected work',
    headline: 'Selected SaaS work.',
    cases: SPINE_PROOF_SAAS_EXPLAINER,
  },
  stakes: {
    eyebrow: 'What’s at stake',
    headline: 'The first film buyers see sets the ceiling for trust.',
    body: '',
  },
  success: {
    headline: SPINE_CLOSE.headline,
    body: 'One story. The buyer already gets it.',
  },
  testimonial: TESTIMONIAL_ACODIS_TEAM,
  faq: {
    items: [
      {
        question: 'What is a SaaS explainer video?',
        answer:
          'A short animated film, usually 60 to 90 seconds, that shows what your software does and why it matters, without a login or a live walkthrough. Built for homepages, sales decks, and ads.',
      },
      {
        question: 'How is this different from a product demo video?',
        answer:
          'A SaaS explainer sells the story and the value. A product demo walks through how it works. Most teams need the explainer first. See product demo videos if you already have demand and need a sales asset.',
      },
      ...SPINE_CORE_FAQS,
    ],
  },
  finalCta: {
    headline: SPINE_CLOSE.headline,
    formIntro: SPINE_CLOSE.formIntro,
  },
  form: {
    textareaLabel: 'What should your SaaS explainer video explain?',
    submitButtonLabel: 'Send brief',
    redirectTo: '/thank-you',
  },
  accentColor: '#FF0000',
};
