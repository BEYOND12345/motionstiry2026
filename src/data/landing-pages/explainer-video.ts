import type { SpineLandingConfig } from '../../components/LandingPage/spine-types';
import { TESTIMONIAL_ACODIS } from './testimonials';
import {
  SPINE_CLOSE,
  SPINE_GUIDE,
  SPINE_PLAN,
  SPINE_PROOF_EXPLAINER,
  SPINE_TICKER_ROW_A,
  SPINE_TICKER_ROW_B,
  SPINE_VALUE,
  SPINE_CORE_FAQS,
} from './spine-shared';

/** Config for /landing-page-explainer-video-01/ */
export const explainerVideoLanding: SpineLandingConfig = {
  slug: 'explainer-video',
  seo: {
    titleTag: 'Explainer Videos For Complex Products | Motion Story',
    metaDescription:
      'Explainer videos for SaaS and tech teams. Work directly with the creative director. Script, storyboard, animation.',
    canonicalPath: '/landing-page-explainer-video-01/',
  },
  hero: {
    eyebrow: 'Explainer videos',
    h1: 'Explainer videos for complex products.',
    subhead: 'Complex made clear.',
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
  plan: SPINE_PLAN,
  proof: {
    eyebrow: 'Selected work',
    headline: 'Selected work.',
    cases: SPINE_PROOF_EXPLAINER,
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
  testimonial: TESTIMONIAL_ACODIS,
  faq: {
    items: [
      {
        question: 'What is an explainer video?',
        answer:
          'A short animated film that makes a complex product or idea obvious. Built for pages, decks, and sales.',
      },
      ...SPINE_CORE_FAQS,
    ],
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
