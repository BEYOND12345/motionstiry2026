/**
 * Private proposal page — /p/trajectory/
 * Written for Arjun (Trajectory). Personal, not a template.
 */

export const trajectoryProposal = {
  seo: {
    titleTag: 'For Arjun / Trajectory | Motion Story',
    metaDescription:
      'A simple visual on how Dan Neale and Motion Story would work with Trajectory: quick start, brand motion kit, ongoing content.',
  },

  greeting: 'Arjun, great chatting today.',
  lede: "Here's a simple visual on how I'd suggest we work together. Built for you, not a template I send around.",
  portraitCaption: 'Dan Neale',
  portraitRole: 'Motion designer & creative director',

  stagesEyebrow: 'How we work',
  stagesHeadline: 'Three stages.',
  stagesLede:
    'Start light, lock the visual language, then move into regular content as the launch builds.',

  stages: [
    {
      num: '01',
      title: 'Quick start',
      body: "We kick off with whatever's top of mind right now. No big commitment. Priced on complexity, invoiced as we go, so you can see how we work together straight away.",
    },
    {
      num: '02',
      title: 'Brand motion kit',
      body: 'Once you\'re happy, we build a reusable set of visual and motion building blocks: style, templates, transitions. Designed once properly so every piece after this moves faster.',
    },
    {
      num: '03',
      title: 'Ongoing content',
      body: "With the kit in place, we move into regular content: teasers, explainers, bigger storytelling pieces. Clear timelines on what's quick and what needs more room.",
    },
  ],

  scaleEyebrow: 'Complexity',
  scaleHeadline: 'The range you sketched.',
  scaleLede:
    'From simple reusable pieces up to full illustrated storytelling. Same craft ladder, growing with the relationship.',
  scaleLevels: [
    { level: '01', label: 'Title cards & lower thirds' },
    { level: '02', label: 'Logo animations & intros' },
    { level: '03', label: 'Short social teasers' },
    { level: '04', label: '~30s explainers' },
    { level: '05', label: 'Illustrated storytelling' },
  ],

  whyEyebrow: 'Why me',
  whyHeadline: 'Direct access. Real concept. Built for speed when it counts.',
  whyPoints: [
    {
      title: 'Small on purpose',
      body: "It's just me as creative director. I bring people in when a project genuinely needs more hands. You get me, not account managers or handoffs.",
    },
    {
      title: 'Story first',
      body: 'Every project starts with a north star concept before anything gets designed or animated. That\'s what keeps the work distinct, not cookie-cutter.',
    },
    {
      title: 'Fast, with honesty',
      body: "I move fast when it matters. I'm also upfront early about which pieces are quick turnarounds and which need proper time. No surprises.",
    },
    {
      title: 'Long game',
      body: 'I want to be part of companies like Trajectory long-term, not a vendor for one-off jobs. This is exactly the ongoing creative partner role I want to play.',
    },
  ],

  workEyebrow: 'Work',
  workHeadline: 'A mix of the lanes you described.',
  workLede:
    'Brand intros, short explainers, and more story-led pieces. Enough range to see how I work across the complexity ladder.',
  work: [
    {
      category: 'Brand intro',
      note: 'Meltwater',
      kind: 'film' as const,
      client: 'Meltwater',
      vimeoId: '394326130',
      link: '/casestudy/meltwater/',
    },
    {
      category: 'Explainer',
      note: 'Red Cross',
      kind: 'film' as const,
      client: 'Red Cross',
      vimeoId: '762086291',
      link: '/casestudy/redcross-covid-vacine-explainer/',
    },
    {
      category: 'Product explainer',
      note: 'Good2Pay',
      kind: 'film' as const,
      client: 'Good2Pay',
      vimeoId: '448704979',
      link: '/casestudy/good2pay/',
    },
    {
      category: 'Product explainer',
      note: 'Atomic',
      kind: 'film' as const,
      client: 'Atomic',
      vimeoId: '861022443',
      link: '/casestudy/atomic-in-app-messaging/',
    },
    {
      category: 'Tech storytelling',
      note: 'Acodis',
      kind: 'film' as const,
      client: 'Acodis',
      vimeoId: '580088673',
      link: '/casestudy/acodis/',
    },
    {
      category: 'Illustrated storytelling',
      note: 'Data Republic',
      kind: 'film' as const,
      client: 'Data Republic',
      vimeoId: '301736476',
      link: '/casestudy/data-republic/',
    },
    {
      category: 'Brand intro',
      note: 'Bresic Whitney',
      kind: 'film' as const,
      client: 'Bresic Whitney',
      vimeoId: '360177296',
      link: '/casestudy/bresic-witney-a-different-estate-agent/',
    },
  ],

  pricingEyebrow: 'Starting point',
  pricingHeadline: 'Numbers to orient us, not a locked quote.',
  pricingLede:
    "We'll firm these up once volume and cadence are clearer. For now, a simple starting point.",
  hourly: {
    rate: '$100 USD / hour',
    note: 'Used for stage 1 quick-start work, priced on complexity rather than a flat number.',
  },
  ranges: [
    {
      title: 'Simple reusable pieces',
      body: 'Title cards, lower thirds, quick social cuts. Smaller, quicker jobs at the lower end.',
    },
    {
      title: 'Mid-tier explainers',
      body: 'More assets and movement. A step up in time and cost.',
    },
    {
      title: 'Illustrated storytelling',
      body: 'Diagrammatic pieces in the 3Blue1Brown lane. Most involved, top end, given the extra design and narrative work.',
    },
  ],
  kitNote:
    'Priced as a one-off once scope is agreed. An investment that speeds up and reduces cost on everything after it.',
  retainerNote:
    "We define this together after stages 1 and 2, once we have a real sense of volume. Could be a monthly rate covering a set of lower-tier pieces, or priority access with production billed per piece. We'll shape it together.",

  closeHeadline: "Got a top priority piece?",
  closeLede:
    "Tell me what's first and I'll start mapping concept and timing. We can keep it light and move from there.",
  closeCta: 'Reply and pick the first piece',
  closeMailto:
    'mailto:daniel@motionstory.com.au?subject=Trajectory%20%2F%20first%20piece',
} as const;
