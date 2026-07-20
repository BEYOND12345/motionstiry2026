import type { LandingPageConfig } from '../../components/LandingPage/types';
import { SAAS_TRUST_LOGOS } from './trust-logos';

/**
 * Config for /landing-animated-product-demos-01/
 * TODO(dan): Confirm featuredWork + testimonial for the demo ad group.
 */
export const productDemoLanding: LandingPageConfig = {
  slug: 'product-demo',
  seo: {
    titleTag: 'Product Demo Videos That Sell Your Software | Motion Story',
    metaDescription:
      "Animated product demos for SaaS teams. Sales-ready videos, no login required. Script, storyboard, animation by a creative director with 20 years' craft.",
    canonicalPath: '/landing-animated-product-demos-01/',
  },
  hero: {
    h1: 'Product Demo Videos That Sell Your Software',
    subhead:
      'Work directly with the creative director. 20 years of senior craft — no account managers, no handoffs, no juniors.',
    videoSrc: '861022443',
    fullShowreelUrl: '861022443',
  },
  trustStrip: {
    line: 'Trusted by hundreds of SaaS and tech companies.',
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
    // TODO(dan): Swap for strongest product-demo pieces if different from explainers.
    projects: [
      {
        thumbnail: 'https://vumbnail.com/861022443.jpg',
        client: 'Atomic',
        oneLineResult: 'In-app messaging made clear for product and sales.',
        videoUrl: '861022443',
      },
      {
        thumbnail: 'https://vumbnail.com/866174146.jpg',
        client: 'Trudi',
        oneLineResult: 'AI property management — product workflows made obvious.',
        videoUrl: '866174146',
      },
      {
        thumbnail: 'https://vumbnail.com/648360270.jpg',
        client: 'Wipster',
        oneLineResult: 'Video feedback workflows explained for product and sales.',
        videoUrl: '648360270',
      },
    ],
  },
  // TODO(dan): Replace if a stronger demo-specific testimonial is preferred.
  testimonial: {
    quote: '40,000 views on YouTube, which increased brand perception and reputation.',
    name: 'Simon Lehman',
    role: 'Marketing Manager',
    company: 'Acodis',
  },
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
          'Every project runs concept → script → storyboard → design → animation → delivery. I own the whole chain. Timelines are usually 4–8 weeks depending on scope.',
      },
      {
        question: 'What kinds of companies do you work with?',
        answer:
          'SaaS teams commissioning demos for landing pages, sales decks, and onboarding. Also product marketing leads at scale-ups who want a demo their sales team will actually use.',
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
    textareaLabel: 'What does your product do?',
    submitButtonLabel: 'Send brief',
    redirectTo: '/thank-you',
  },
  accentColor: '#FF0000',
};
