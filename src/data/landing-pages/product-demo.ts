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
    titleTag: 'Custom Animated Product Demos | Motion Story',
    metaDescription:
      "Show your software's value with a custom animated demo. Work directly with Dan Neale on the visual story, design and finished animation.",
    canonicalPath: '/landing-animated-product-demos-01/',
  },
  hero: {
    eyebrow: 'Product demo videos',
    h1: "Show your product's value.",
    subhead: 'Animated demos that show what your product does and why it matters.',
    videoSrc: '861022443',
    fullShowreelUrl: '861022443',
    primaryCta: 'Book a project call',
    secondaryCta: 'See the work',
  },
  trustStrip: {
    line: 'Trusted by teams who need clarity',
    rowA: SPINE_TICKER_ROW_A,
    rowB: SPINE_TICKER_ROW_B,
  },
  value: SPINE_VALUE,
  guide: {
    ...SPINE_GUIDE,
    body: 'I understand the product, find the visual story and design and animate the demo.',
  },
  plan: {
    ...SPINE_PLAN,
    steps: [
      { label: 'We talk', body: 'Audience, purpose and where the demo will run.' },
      { label: 'We shape the story', body: 'Script and storyboard before animation begins.' },
      { label: 'We make the film', body: 'Design, animation and the agreed final formats.' },
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
      ...SPINE_CORE_FAQS.filter((item) => item.question !== 'How long does it take?'),
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
