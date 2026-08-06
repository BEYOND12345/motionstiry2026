import type { SpineCase, SpineLandingConfig } from '../../components/LandingPage/spine-types';

/** Shared ticker rows for Ads / money landings */
export const SPINE_TICKER_ROW_A = [
  'Insignia Financial',
  'UTS',
  'Method',
  'International Red Cross',
  'Cotton Australia',
  'NSW Government',
  'Amex',
  'Cartier',
];

export const SPINE_TICKER_ROW_B = [
  'Wipster',
  'Atomic',
  'Trudi',
  'Acodis',
  'Mosaic',
  'AWS',
  'Hey You',
  'Giraffe',
];

/** Shared centered value band — one line is enough */
export const SPINE_VALUE: SpineLandingConfig['value'] = {
  headline: 'Create clarity through storytelling.',
  body: '',
};

export const SPINE_GUIDE: SpineLandingConfig['guide'] = {
  eyebrow: 'Your director',
  headline: 'You brief me. I run the project.',
  body: 'Serious business needs serious storytelling.',
  name: 'Daniel Neale',
  role: 'Creative director, Motion Story',
  photoSrc: '/daniel-neale.jpg',
};

export const SPINE_PLAN: SpineLandingConfig['plan'] = {
  eyebrow: 'The plan',
  headline: 'Three steps. No production maze.',
  steps: [
    {
      label: 'We talk',
      body: 'Scope, audience, where the film has to work.',
    },
    {
      label: 'We shape the story',
      body: 'Script and storyboard before a frame is animated.',
    },
    {
      label: 'We make the film',
      body: 'Design, animation, delivery. Usually 4 to 8 weeks.',
    },
  ],
};

/** Full portfolio set used across spine landings */
export const SPINE_PROOF_CASES: SpineCase[] = [
  {
    client: 'Trudi',
    useCase: 'AI property management, without a login.',
    body: '',
    outcome: 'Sales ready walkthrough of the core product flows.',
    videoUrl: '866174146',
  },
  {
    client: 'Atomic',
    useCase: 'In app messaging that feels native.',
    body: '',
    outcome: 'Feature demo for decks and launch pages.',
    videoUrl: '861022443',
  },
  {
    client: 'Wipster',
    useCase: 'Video review, from feedback to delivery.',
    body: '',
    outcome: 'A product overview that explains the system.',
    videoUrl: '648360270',
  },
  {
    client: 'Acodis',
    useCase: 'AI document processing, made watchable.',
    body: '',
    outcome: 'Technical product, clear enough for any buyer.',
    videoUrl: '580088673',
  },
  {
    client: 'Mosaic',
    useCase: 'Strategic data planning, made clear.',
    body: '',
    outcome: 'Platform explainer for complex data workflows.',
    videoUrl: '879242129',
  },
  {
    client: 'Nisient',
    useCase: 'Quantum security, made decisive.',
    body: '',
    outcome: 'Deep tech, clear enough for decision makers.',
    videoUrl: '1213121904',
  },
  {
    client: 'Cloud Trace',
    useCase: 'A cloud platform, grounded in clarity.',
    body: '',
    outcome: 'SaaS explainer that shows what the product does.',
    videoUrl: '940525709',
  },
  {
    client: 'Trusyft',
    useCase: 'Product promo with cinematic clarity.',
    body: '',
    outcome: 'Animated product story built to convert.',
    videoUrl: '863428533',
  },
  {
    client: 'Giraffe',
    useCase: 'Urban planning tech, explained simply.',
    body: '',
    outcome: 'Spatial product story for architects and planners.',
    videoUrl: '762112642',
  },
  {
    client: 'Meltwater',
    useCase: 'Media intelligence at brand scale.',
    body: '',
    outcome: 'Brand story for a global SaaS platform.',
    videoUrl: '394326130',
  },
  {
    client: 'Method Recycling',
    useCase: 'A product story that changed behaviour.',
    body: '',
    outcome: 'Explainer for a design led recycling system.',
    videoUrl: '557884851',
  },
  {
    client: 'Hey You',
    useCase: 'Food ordering, made effortless.',
    body: '',
    outcome: 'App story from browse to skip the queue.',
    videoUrl: '351936883',
  },
  {
    client: 'Shape Connect',
    useCase: 'Website security, made human.',
    body: '',
    outcome: 'Complex infrastructure for non technical buyers.',
    videoUrl: '320632556',
  },
  {
    client: 'Good2Pay',
    useCase: 'Paperless invoicing, end to end.',
    body: '',
    outcome: 'Workflow demo from invoice to payment.',
    videoUrl: '448704979',
  },
  {
    client: 'Oovvuu',
    useCase: 'Video publishing for content teams.',
    body: '',
    outcome: 'Plugin walkthrough from discovery to playback.',
    videoUrl: '557000542',
  },
  {
    client: 'Uclusion',
    useCase: 'Product decisions, driven by feedback.',
    body: '',
    outcome: 'Platform story for teams prioritising what to build.',
    videoUrl: '338131381',
  },
];

/** Shared buyer FAQs for all spine landings */
export const SPINE_CORE_FAQS: SpineLandingConfig['faq']['items'] = [
  {
    question: 'How much does it cost?',
    answer:
      'Typical projects average around $10,000 if you already know what you want to say, for example if you can provide a script. Work can start from $5,000. I advise budgeting $10,000 to $20,000 to properly execute a project.',
  },
  {
    question: 'How long does it take?',
    answer:
      'Simple projects: 2 to 3 weeks. Medium: 3 to 5 weeks. Complex: 6 to 8 weeks. Fixed quote and timing after we talk.',
  },
  {
    question: 'Who does the work?',
    answer:
      'Me. I’m a motion designer, illustrator, and storyboard artist. I also work with a small team when a project needs extra hands, and I direct that work.',
  },
  {
    question: 'What is your process?',
    answer:
      'We start with a conversation and ideate what you really need to get across. Then a storyboard to solve the visual communication. Animation begins when we’re both ready, so the story is locked before production.',
  },
  {
    question: 'Can we see more work?',
    answer:
      'What’s on the site is a sample. I’ve made thousands of films: commercials, ads, music videos, product stories. Contact me if you need something specific that isn’t in the portfolio.',
  },
  {
    question: 'Do you white label, consult, or join our team?',
    answer:
      'Yes. White label for agencies. Consulting. Working alongside your team. Tell me how you need to work and we’ll shape it.',
  },
];

export const SPINE_CLOSE = {
  headline: 'Book a call with me, your creative director.',
  formIntro: 'Send a brief',
} as const;
