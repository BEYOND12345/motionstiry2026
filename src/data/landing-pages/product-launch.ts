import type { LandingPageConfig } from '../../components/LandingPage/types';
import { SAAS_TRUST_LOGOS } from './trust-logos';
import { TESTIMONIAL_AMSED } from './testimonials';

/** Config for /product-launch-video/ */
export const productLaunchLanding: LandingPageConfig = {
  slug: 'product-launch',
  seo: {
    titleTag: 'Product Launch Videos That Land | Motion Story',
    metaDescription:
      'Product launch videos for SaaS and tech. Work directly with the creative director — story, craft, and timing built for the moment you ship.',
    canonicalPath: '/product-launch-video/',
  },
  hero: {
    h1: 'Product Launch Videos That Land',
    subhead:
      'Work directly with the creative director. 20 years of senior craft — no account managers, no handoffs, no juniors.',
    videoSrc: '863428533',
    fullShowreelUrl: '863428533',
  },
  trustStrip: {
    line: 'Trusted by hundreds of SaaS and tech companies.',
    logos: [...SAAS_TRUST_LOGOS],
  },
  coreSell: {
    leadCopy:
      "A launch isn't a feature list with music. I'll shape the story, the hook, and the proof so the film earns attention on day one — and still works in sales decks months later. One person owns the whole thing, concept to delivery.",
    proofPoints: [
      {
        title: 'Built for the launch moment',
        body: 'Messaging, pacing, and length tuned for announcement day — not a generic explainer with a new title.',
      },
      {
        title: 'Story that carries past week one',
        body: 'Assets your team can keep using on the site, in outreach, and in investor updates.',
      },
      {
        title: 'Complexity handled under pressure',
        body: 'Tight timelines without losing craft. Clear scope, clear delivery.',
      },
      {
        title: 'Senior craft on every frame',
        body: 'No juniors, no handoffs. The person you brief is the person who animates.',
      },
    ],
  },
  middleGround: {
    headline: 'Not an agency. Not a freelancer.',
    body: 'Big agencies bury the craft under account managers and juniors. Solo freelancers can execute but rarely own the story. This studio sits between — big-agency thinking without the overheads, senior craft with direct access.',
  },
  featuredWork: {
    projects: [
      {
        thumbnail: 'https://vumbnail.com/863428533.jpg',
        client: 'Trusyft',
        oneLineResult: 'Cinematic product promo built for launch energy.',
        videoUrl: '863428533',
      },
      {
        thumbnail: 'https://vumbnail.com/394326130.jpg',
        client: 'Meltwater',
        oneLineResult: 'Brand story for a media intelligence platform.',
        videoUrl: '394326130',
      },
      {
        thumbnail: 'https://vumbnail.com/861022443.jpg',
        client: 'Atomic',
        oneLineResult: 'Product capability made clear for go-to-market.',
        videoUrl: '861022443',
      },
    ],
  },
  testimonial: TESTIMONIAL_AMSED,
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
        question: 'What do projects involve?',
        answer:
          'Every project runs concept → script → storyboard → design → animation → delivery. I own the whole chain. Timelines are usually 4–8 weeks depending on scope — tighter when the launch date is fixed.',
      },
      {
        question: 'What kinds of companies do you work with?',
        answer:
          'SaaS and tech teams shipping a new product, major feature, or repositioning. Also product marketing leads who need a launch film that sales will actually use.',
      },
      {
        question: 'Are you hiring?',
        answer: 'No — this page is for teams commissioning work.',
      },
      {
        question: 'How do we start?',
        answer:
          'Book a 20-minute call or send a brief through the form. I reply within one business day.',
      },
    ],
  },
  finalCta: {
    headline: 'Talk to the person who actually makes the work.',
    formIntro: 'Or send a brief — I reply within one business day.',
  },
  form: {
    textareaLabel: 'What are you launching?',
    submitButtonLabel: 'Send brief',
    redirectTo: '/thank-you',
  },
  accentColor: '#FF0000',
};
