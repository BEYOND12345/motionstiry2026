import type { LandingPageConfig } from '../../components/LandingPage/types';
import { getLandingShowcaseWork } from './showcase-work';
import { SAAS_TRUST_LOGOS } from './trust-logos';
import { TESTIMONIAL_FINNIMORE } from './testimonials';

/** Config for /product-demo-videos/ */
export const productDemoVideosLanding: LandingPageConfig = {
  slug: 'product-demo-videos',
  seo: {
    titleTag: 'Product Demo Video | Motion Story',
    metaDescription:
      'Animated product demo video that shows your software in action — no login required. Built for landing pages, sales decks, and onboarding. Work with the creative director.',
    canonicalPath: '/product-demo-videos/',
  },
  hero: {
    h1: 'Product Demo Videos That Actually Sell',
    subhead:
      'An animated product demo video your sales team can send — no login, no fumbled walkthrough. Senior craft, end to end.',
    videoSrc: '866174146',
    fullShowreelUrl: '866174146',
  },
  trustStrip: {
    line: 'Trusted by leading SaaS and tech companies.',
    logos: [...SAAS_TRUST_LOGOS],
  },
  coreSell: {
    leadCopy:
      "Screenshots don't sell and screen recordings bore. I'll script, storyboard and animate a demo your sales team can actually send — no login required, no fumbled walkthrough, just your product's value in under two minutes.",
    proofPoints: [
      {
        title: 'Built for landing pages and sales decks',
        body: "Format and length that fits where you'll actually use it.",
      },
      {
        title: 'Complexity translated, not dumbed down',
        body: 'Technical detail shaped so it serves the story.',
      },
      {
        title: 'Sales-ready in weeks, not quarters',
        body: 'Fast turnaround because one person owns the whole chain.',
      },
      {
        title: 'Senior craft on every frame',
        body: 'No juniors, no handoffs, no templated animation libraries.',
      },
    ],
  },
  middleGround: {
    headline: 'Not an agency. Not a freelancer.',
    body: 'Big agencies bury the craft under account managers and juniors. Solo freelancers can execute but rarely own the story. This studio sits between — big-agency thinking without the overheads, senior craft with direct access.',
  },
  featuredWork: {
    projects: getLandingShowcaseWork(),
  },
  testimonial: TESTIMONIAL_FINNIMORE,
  process: {
    steps: [
      {
        label: 'Project call',
        body: "20 minutes. Scope, timing, whether I'm the right fit.",
      },
      {
        label: 'Script & storyboard',
        body: 'Rewritten for clarity and hooks. Shared before a single frame is animated.',
      },
      {
        label: 'Design & animation',
        body: 'Concept, style frames, full production.',
      },
      {
        label: 'Delivery',
        body: 'Final files, revisions handled, ready to ship.',
      },
    ],
  },
  faq: {
    items: [
      {
        question: 'What is a product demo video?',
        answer:
          'A short animated walkthrough — usually 60 to 120 seconds — that shows how your product works and what happens when someone uses it. Designed for sales decks, landing pages, and follow-up emails.',
      },
      {
        question: 'How is this different from a SaaS explainer video?',
        answer:
          'A product demo video shows the product in action. A SaaS explainer video sells the story and the why. If buyers still don’t get what you do, start with the explainer. If they get it and need proof of how it works, commission a demo.',
      },
      {
        question: 'What do projects involve?',
        answer:
          'Every product demo video runs concept → script → storyboard → design → animation → delivery. I own the whole chain. Timelines are usually 4–8 weeks depending on scope.',
      },
      {
        question: 'Who will I work with?',
        answer:
          'Me. Dan Neale — creative director. No account managers. When a job needs extra hands, I bring in specialists I trust and direct.',
      },
      {
        question: 'Do you need access to our product?',
        answer:
          'Usually a walkthrough, staging access, or a clear feature brief is enough. I turn that into a sales-ready film — no live product login required for the viewer.',
      },
    ],
  },
  finalCta: {
    headline: 'Need a product demo video?',
    formIntro: 'Or send a brief — I reply within one business day.',
  },
  form: {
    textareaLabel: 'What should your product demo video show?',
    submitButtonLabel: 'Send brief',
    redirectTo: '/thank-you',
  },
  accentColor: '#FF0000',
};
