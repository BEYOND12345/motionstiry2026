import type { SpineLandingConfig } from '../../components/LandingPage/spine-types';
import { TESTIMONIAL_ACODIS_TEAM } from './testimonials';
import {
  SPINE_TICKER_ROW_A,
  SPINE_TICKER_ROW_B,
  spineCases,
} from './spine-shared';

const SESSION_FROM = 'From $1,500';

/** StoryBrand config for /creative-business-designer/ */
export const creativeBusinessDesignerLanding: SpineLandingConfig = {
  slug: 'creative-business-designer',
  seo: {
    titleTag: 'Creative Business Designer | Motion Story',
    metaDescription:
      "What's holding your business back? Paid problem-solving sessions, then I build it. Websites, video, app prototypes, sales funnels. 20 years. Work with Dan.",
    canonicalPath: '/creative-business-designer/',
  },
  hero: {
    eyebrow: 'Creative business designer',
    h1: "What's holding your business back?",
    subhead: 'I can bring your vision to life.',
    videoSrc: '792094835',
    fullShowreelUrl: '792094835',
    primaryCta: 'Book a session',
    secondaryCta: 'See the work',
  },
  trustStrip: {
    line: 'Twenty years of client work through Motion Story',
    rowA: SPINE_TICKER_ROW_A,
    rowB: SPINE_TICKER_ROW_B,
  },
  value: {
    headline: 'One person. One session. Then it gets built.',
    body: 'Most people sell you advice or sell you production. I do both, which is why this is simple.',
  },
  problem: {
    eyebrow: 'Is this you?',
    headline: 'If this sounds familiar.',
    items: [
      {
        label: "I've got an idea but nothing to show for it.",
        body: 'A short sprint and you walk away with a live site and a story that makes it sound real.',
      },
      {
        label: "I'm pitching for money and I'm not ready.",
        body: 'Deck and video, done before the meeting.',
      },
      {
        label: "I've built it but nobody knows about it.",
        body: 'A launch plan. And I build the assets, not just the plan.',
      },
      {
        label: "People still don't get what we do.",
        body: 'Video content strategy, then I make the videos.',
      },
      {
        label: "I know what's next but I've got no time to work it out.",
        body: 'A working session and a clear roadmap. What to do, in what order, what it costs.',
      },
    ],
  },
  guide: {
    eyebrow: 'Your guide',
    headline: 'Work directly with a creative business designer. 20 years of it.',
    body: "I'm Dan Neale. I help early companies consolidate what they do, then turn it into something people can believe: websites, video, prototypes, and funnels. I also ship my own products, Freewheel and SMASH Invoices, so I think like a builder, not a supplier waiting for a brief.",
    name: 'Daniel Neale',
    role: 'Creative business designer, Motion Story',
    photoSrc: '/daniel-neale.jpg',
  },
  plan: {
    eyebrow: 'The plan',
    headline: 'Three steps. No production maze.',
    steps: [
      {
        label: 'We talk',
        body: `A paid problem-solving session. An hour or a day, depending on the size of it. ${SESSION_FROM}. You bring the mess. We map out what's actually wrong and what to do about it.`,
      },
      {
        label: 'I build it',
        body: 'Not a report. Not a deck of recommendations you file away. The actual thing: the website, the video, the prototype, the funnel.',
      },
      {
        label: 'You run the business',
        body: 'One contact. No agency, no committee, no six-week onboarding.',
      },
    ],
  },
  proof: {
    eyebrow: 'Success',
    headline: 'Work that makes the idea believable.',
    cases: spineCases(
      'cart-share',
      'atomic',
      'trusyft',
      'wipster',
      'ark',
      'good2pay',
      'method-product',
      'heyyou',
    ),
  },
  stakes: {
    eyebrow: 'What to avoid',
    headline: 'Another strategy deck that dies in Notion is not a plan.',
    body: 'Without a clear story and something real to show, you look unfinished. Pitch meetings slip. Launches stall. Agencies take months. You stay stuck explaining instead of shipping.',
  },
  success: {
    headline: "Tell me what's holding you back.",
    body: "Book a problem-solving session and let's work out what to do about it.",
  },
  testimonial: TESTIMONIAL_ACODIS_TEAM,
  faq: {
    items: [
      {
        question: 'What does a session cost?',
        answer: `Paid problem-solving session, ${SESSION_FROM}. An hour or a day depending on the size of it. Filters tyre-kickers. You pay for the thinking.`,
      },
      {
        question: 'What happens after the session?',
        answer:
          'If there is something to build, I quote the build and make it. Website, video, prototype, funnel, or a mix. Fixed quote before production starts.',
      },
      {
        question: 'What can you build?',
        answer:
          'Software and app prototypes. Video and motion graphics. Websites. Automation and technical problem-solving. Big ideas and strategy, including sharpening a brief for a bigger agency if that is what you need.',
      },
      {
        question: 'Who will I work with?',
        answer: 'Me. Dan Neale. One contact. No agency layer.',
      },
      {
        question: 'Where are you based?',
        answer: 'Byron Bay, Australia. Remote with clients worldwide.',
      },
      {
        question: 'Do you build your own products too?',
        answer:
          'Yes. Freewheel is a cycling tour and navigation app. SMASH Invoices is voice-to-invoice for tradies. Concept to shipped product, both of them. Same hands.',
      },
    ],
  },
  finalCta: {
    headline: "Tell me what's holding you back.",
    formIntro: 'Book a problem-solving session.',
  },
  form: {
    textareaLabel: "What's holding your business back?",
    submitButtonLabel: 'Send brief',
    redirectTo: '/thank-you',
  },
  footerLine: 'Creative business design · Byron Bay',
  accentColor: '#FF0000',
};
