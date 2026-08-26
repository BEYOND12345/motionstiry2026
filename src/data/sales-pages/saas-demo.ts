/**
 * Private sales page — /p/saas-demo/
 * Rhythm: video → stat → video → stat → video → stat → pricing → book
 * Equal film sizes. Short context. Not a wall of copy.
 */

export const saasDemoSalesPage = {
  seo: {
    titleTag: 'SaaS Product Demos | Motion Story (Private)',
    metaDescription:
      'Animated SaaS product demos that make complex software obvious. Clear pricing. Direct with Dan Neale.',
  },

  offer: 'Animated product demos for SaaS.',
  promise:
    'Complex software, clear on screen. Built for homepages, sales pages, and the call before the call.',

  tickerRowA: [
    'HSBC',
    'SEB Bank',
    'NSW Government',
    'United Nations',
    'Amex',
    'AWS',
    'Aon',
    'Insignia Financial',
  ],
  tickerRowB: [
    'Atomic',
    'Acodis',
    'Trudi',
    'Wipster',
    'Giraffe',
    'Mosaic',
    'Good2Pay',
    'Meltwater',
  ],

  /** Alternating beats: film then stat, three pairs */
  beats: [
    {
      film: {
        client: 'Trudi',
        context: 'AI property management — the product story without a login.',
        vimeoId: '866174146',
        link: '/casestudy/property-management-explainer-video/',
      },
      stat: {
        value: '96%',
        label: 'of people have watched a short video to learn about a product',
      },
    },
    {
      film: {
        client: 'Atomic',
        context: 'In-app messaging made clear before the sales call.',
        vimeoId: '861022443',
        link: '/casestudy/atomic-in-app-messaging/',
      },
      stat: {
        value: '86%',
        label: 'average conversion lift on landing pages with video',
      },
    },
    {
      film: {
        client: 'Acodis',
        context: 'AI document processing — still their strongest brand asset.',
        vimeoId: '580088673',
        link: '/casestudy/acodis/',
      },
      stat: {
        value: '62%',
        label: 'completion on recent work — about double typical branded video',
      },
    },
  ],

  /** Social proof — between work and pricing */
  proofEyebrow: 'Clients',
  rating: {
    score: '5.0',
    label: 'on Google',
  },
  testimonials: [
    {
      quote:
        '40,000 views on YouTube, which increased brand perception and reputation.',
      name: 'Simon Lehmann',
      role: 'Head of Marketing, Acodis',
    },
    {
      quote:
        '62% completion rate. 21% view rate. For a video about bins, we are pretty astounded. Long-term asset for our business.',
      name: 'Lee Bright',
      role: 'Marketing Lead, Method Recycling',
    },
  ],

  tiersHeadline: 'Clear pricing.',
  tiersLede: 'No offshore templates. No agency bloat. You work with Dan.',
  tiers: [
    {
      name: 'Micro',
      price: 'From $2,000',
      job: 'Feature drops & paid social',
      detail: '30–60s screen capture, AI voiceover, fast turnaround.',
    },
    {
      name: 'Walkthrough',
      price: '$10,000 – $15,000',
      job: 'Sales & product pages',
      detail: '60–120s rebuilt UI, motion graphics, human voiceover.',
    },
    {
      name: 'Flagship',
      price: '$15,000+',
      job: 'Homepage heroes',
      detail: '90s+ custom 2D/3D, full narrative, deep strategy.',
    },
  ],

  ship: '2–4 weeks from align to ship.',
  close: 'Book a strategy call.',
  closeLede: 'We’ll map which tier fits before you spend a dollar.',

  /** More work under the strategy call */
  moreWorkEyebrow: 'More work',
  moreWork: [
    {
      client: 'Wipster',
      context: 'Video feedback — connect the dots across the product.',
      vimeoId: '648360270',
      link: '/casestudy/wipster-product-overview/',
    },
    {
      client: 'Giraffe',
      context: 'City planning software, told with clean geometry.',
      vimeoId: '762112642',
      link: '/casestudy/giraffe/',
    },
    {
      client: 'Mosaic',
      context: 'Strategic data planning — aha moment, fast.',
      vimeoId: '879242129',
      link: '/casestudy/mosaic-platform-explained/',
    },
  ],
} as const;
