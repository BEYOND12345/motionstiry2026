import { TESTIMONIAL_ACODIS_TEAM } from './testimonials';
import { SPINE_TICKER_ROW_A, SPINE_TICKER_ROW_B } from './spine-shared';

export const SESSION_FROM = 'From $1,500';

export type OfferBuild = { label: string; body: string };
export type OfferProduct = { name: string; body: string; href: string };
export type OfferProblem = { label: string; body: string };

/** Offer-specific StoryBrand content for Creative Business Designer */
export type CreativeBusinessOfferConfig = {
  slug: string;
  seo: {
    titleTag: string;
    metaDescription: string;
    canonicalPath: string;
  };
  hero: {
    eyebrow: string;
    h1: string;
    subhead: string;
    primaryCta: string;
    secondaryCta: string;
  };
  trustStrip: {
    line: string;
    rowA: string[];
    rowB: string[];
  };
  value: {
    headline: string;
    body: string;
  };
  problem: {
    eyebrow: string;
    headline: string;
    items: OfferProblem[];
  };
  guide: {
    eyebrow: string;
    headline: string;
    body: string;
    name: string;
    role: string;
    photoSrc: string;
  };
  plan: {
    eyebrow: string;
    headline: string;
    steps: { label: string; body: string }[];
  };
  stakes: {
    eyebrow: string;
    headline: string;
    body: string;
  };
  success: {
    headline: string;
    body: string;
  };
  testimonial: {
    quote: string;
    name: string;
    role: string;
    company: string;
  };
  faq: {
    items: { question: string; answer: string }[];
  };
  footerLine: string;
  accentColor: string;
  outcomes: string[];
  builds: OfferBuild[];
  products: OfferProduct[];
  why: {
    eyebrow: string;
    headline: string;
    paragraphs: string[];
  };
};

export const creativeBusinessDesignerOffer: CreativeBusinessOfferConfig = {
  slug: 'creative-business-designer',
  seo: {
    titleTag: 'Creative Business Designer | Motion Story',
    metaDescription:
      "What's holding your business back? Paid problem-solving sessions, then I build it. Websites, apps, sales funnels, video, and strategy. 20 years. Work with Dan.",
    canonicalPath: '/creative-business-designer/',
  },
  hero: {
    eyebrow: 'Creative business designer',
    h1: "What's holding your business back?",
    subhead: 'I can bring your vision to life.',
    primaryCta: 'Book a problem-solving session',
    secondaryCta: 'See how it works',
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
    body: "I'm Dan Neale. I help people turn a rough idea into something real: a website, an app prototype, a sales funnel, a pitch deck, a film, or the strategy that makes the next move obvious. I build my own products too, so I think like a builder, not a supplier waiting for a brief.",
    name: 'Daniel Neale',
    role: 'Creative business designer, Motion Story',
    photoSrc: '/daniel-neale.jpg',
  },
  plan: {
    eyebrow: 'How it works',
    headline: 'Three steps. No agency maze.',
    steps: [
      {
        label: 'We talk',
        body: `A paid problem-solving session. An hour or a day, depending on the size of it. ${SESSION_FROM}. You bring the mess. We map out what's actually wrong and what to do about it.`,
      },
      {
        label: 'I build it',
        body: 'Not a report. Not a deck of recommendations you file away. The actual thing: the website, the app prototype, the video, the funnel.',
      },
      {
        label: 'You get on with running your business',
        body: 'One contact. No agency, no committee, no six-week onboarding.',
      },
    ],
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
          'If there is something to build, I quote the build and make it. Website, app prototype, funnel, video, or a mix. Fixed quote before production starts.',
      },
      {
        question: 'What can you build?',
        answer:
          'Software and app prototypes. Websites. Sales funnels. Video and motion graphics. Automation and technical problem-solving. Big ideas and strategy, including sharpening a brief for a bigger agency if that is what you need.',
      },
      {
        question: 'Is this just video?',
        answer:
          'No. Video is one craft I have twenty years in. This offer is broader: vision to the actual thing, in whatever format gets your business moving.',
      },
      {
        question: 'Who will I work with?',
        answer: 'Me. Dan Neale. One contact. No agency layer.',
      },
      {
        question: 'Where are you based?',
        answer: 'Byron Bay, Australia. Remote with clients worldwide.',
      },
    ],
  },
  footerLine: 'Creative business design · Byron Bay',
  accentColor: '#FF0000',
  outcomes: [
    'Website live in days',
    'Pitch deck and video ready before your next meeting',
    'App prototype in your hands in a fortnight',
    'Sales funnel built in two weeks',
    'A rough idea turned into something real, fast',
  ],
  builds: [
    {
      label: 'Software and app prototyping',
      body: "Working prototypes, not mockups. I build my own apps, so I know what's realistic and what's a fantasy your developer will quietly hate you for.",
    },
    {
      label: 'Websites',
      body: 'Fast, sharp, built to convert. Days, not months.',
    },
    {
      label: 'Sales funnels',
      body: 'Story and assets across the path from cold visitor to booked call.',
    },
    {
      label: 'Video and motion graphics',
      body: 'Twenty years of it. Explainers, product demos, brand films, launch content. This is my craft, and one format among several.',
    },
    {
      label: 'Automation and technical problem-solving',
      body: 'Quotes taking too long. Leads leaking out of a bad funnel. Manual work eating your week. Usually solvable.',
    },
    {
      label: 'Big ideas and strategy',
      body: "Marketing thinking, positioning, launch plans. Including getting your brief sharp enough to hand to a bigger agency if that's genuinely what you need.",
    },
  ],
  products: [
    {
      name: 'Freewheel',
      body: 'Cycling tour and navigation app.',
      href: 'https://freewheeltours.com/',
    },
    {
      name: 'SMASH Invoices',
      body: 'Voice-to-invoice app for tradies.',
      href: 'https://smashinvoices.com/',
    },
  ],
  why: {
    eyebrow: 'Why I do this',
    headline: 'I think like a builder, not a supplier.',
    paragraphs: [
      "I'm building my own products alongside this work. So I don't think like a supplier waiting for a brief. I think like someone who's had to solve the same problems you're solving.",
      "I'd rather spend my time with people building real things than making another corporate video. If that's you, we'll get on.",
    ],
  },
};
