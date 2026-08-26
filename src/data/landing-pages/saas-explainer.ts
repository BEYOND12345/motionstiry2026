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
    titleTag: 'SaaS Motion Graphics | Motion Story',
    metaDescription:
      'SaaS motion graphics for complex software. Clear product stories for landing pages, sales, and onboarding. Work directly with the creative director.',
    canonicalPath: '/saas-explainer-videos/',
  },
  hero: {
    eyebrow: 'SaaS motion graphics',
    h1: 'SaaS motion graphics that make complex software obvious.',
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
        question: 'What is SaaS motion graphics?',
        answer:
          'A short animated film, usually 60 to 90 seconds, that shows what your software does and why it matters, without a login or a live walkthrough. Built for homepages, sales decks, and ads.',
      },
      {
        question: 'How is this different from a product demo video?',
        answer:
          'SaaS motion graphics tell the software story — UI, workflows, and value. Physical product demos show tangible goods in action. See product demo videos for that lane.',
      },
      ...SPINE_CORE_FAQS,
    ],
  },
  finalCta: {
    headline: SPINE_CLOSE.headline,
    formIntro: SPINE_CLOSE.formIntro,
  },
  form: {
    textareaLabel: 'What should your SaaS motion graphics piece show?',
    submitButtonLabel: 'Send brief',
    redirectTo: '/thank-you',
  },
  accentColor: '#FF0000',
};
