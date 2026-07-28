import type { LandingPageConfig } from '../../components/LandingPage/types';
import { getLandingShowcaseWork } from './showcase-work';
import { SAAS_TRUST_LOGOS } from './trust-logos';
import { TESTIMONIAL_ACODIS_TEAM } from './testimonials';

/** Config for /saas-explainer-videos/ */
export const saasExplainerLanding: LandingPageConfig = {
  slug: 'saas-explainer',
  seo: {
    titleTag: 'SaaS Explainer Video | Motion Story',
    metaDescription:
      'SaaS explainer video production for complex software. Clear product stories for landing pages, sales, and onboarding. Work directly with the creative director.',
    canonicalPath: '/saas-explainer-videos/',
  },
  hero: {
    h1: 'SaaS Explainer Videos for Complex Software',
    subhead:
      'A SaaS explainer video that makes your product obvious — before the demo call. Senior craft, no account managers, no handoffs.',
    videoSrc: '879242129',
    fullShowreelUrl: '879242129',
  },
  trustStrip: {
    line: 'Trusted by leading SaaS and tech companies.',
    logos: [...SAAS_TRUST_LOGOS],
  },
  coreSell: {
    leadCopy:
      "I won't just take your script. I'll rewrite it, storyboard it, get the timings right, and make sure the hooks land — built around how people actually watch. One person owns the whole thing, concept to delivery.",
    proofPoints: [
      {
        title: 'Original ideation from the ground up',
        body: 'Concept and narrative developed with you, not templated from a library.',
      },
      {
        title: 'Story structure, not just animation',
        body: 'The script and storyboard get the same attention as every frame.',
      },
      {
        title: 'Delivered on time, complexity handled',
        body: 'Technical detail translated so it serves the story, not the other way around.',
      },
      {
        title: 'Senior craft on every frame',
        body: 'No juniors, no account managers. The person you brief is the person responsible for the work.',
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
  testimonial: TESTIMONIAL_ACODIS_TEAM,
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
        question: 'What is a SaaS explainer video?',
        answer:
          'A short animated film — usually 60 to 90 seconds — that shows what your software does and why it matters, without a login or a live walkthrough. Built for homepages, sales decks, and ads.',
      },
      {
        question: 'How is this different from a product demo video?',
        answer:
          'A SaaS explainer video sells the story and the value. A product demo video walks through how it works. Most teams need the explainer first; many later add a demo. See product demo videos if you already have demand and need a sales asset.',
      },
      {
        question: 'What do projects involve?',
        answer:
          'Every SaaS explainer video runs concept → script → storyboard → design → animation → delivery. I own the whole chain. Timelines are usually 4–8 weeks depending on scope.',
      },
      {
        question: 'Who will I work with?',
        answer:
          'Me. Dan Neale — creative director. No account managers. When a job needs extra hands, I bring in specialists I trust and direct.',
      },
      {
        question: 'What kinds of companies do you work with?',
        answer:
          'Mostly SaaS and tech companies with complex products that need to be made obvious. Also creative and design agencies bringing in a senior motion specialist.',
      },
    ],
  },
  finalCta: {
    headline: 'Ready for a SaaS explainer video?',
    formIntro: 'Or send a brief — I reply within one business day.',
  },
  form: {
    textareaLabel: 'What should your SaaS explainer video explain?',
    submitButtonLabel: 'Send brief',
    redirectTo: '/thank-you',
  },
  accentColor: '#FF0000',
};
