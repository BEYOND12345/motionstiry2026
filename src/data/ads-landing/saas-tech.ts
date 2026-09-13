import type { AdsLandingConfig } from './types';

export const saasTechLanding: AdsLandingConfig = {
  path: '/saas-tech/',
  title: 'Motion Design for SaaS & Tech | Motion Story',
  description:
    'Explainer and product demo videos for SaaS and tech. Work directly with the creative director — senior craft, no handoffs.',
  serviceKeyword: 'Motion Design for SaaS',

  h1: 'Motion Design For SaaS & Tech',
  subhead:
    'Work directly with the creative director. 20 years of senior craft — no account managers, no handoffs, no juniors.',

  bookingUrl: '/book/',
  bookingLabel: 'Book a 20-minute project call',
  secondaryCtaLabel: 'Send a brief',

  heroVimeoId: '861022443',
  heroVideoTitle: 'Motion Story SaaS showreel',

  trustLine: 'Trusted by hundreds of SaaS and tech companies.',
  logos: [
    { name: 'TransferWise' },
    { name: 'Schoolbox' },
    { name: 'Smokeball' },
    { name: 'Atomic' },
    { name: 'Wipster' },
    { name: 'Mosaic' },
    { name: 'Trudi' },
    { name: 'Acodis' },
    { name: 'Meltwater' },
    { name: 'Good2Pay' },
    { name: 'Hey You' },
    { name: 'InfoView' },
    { name: 'Class Trust' },
    { name: 'United Nations' },
    { name: 'RSPCA' },
  ],

  coreSell:
    "I won't just take your script. I'll rewrite it, storyboard it, get the timings right, and make sure the hooks land — built around how people actually watch. One person owns the whole thing, concept to delivery.",
  proofPoints: [
    {
      title: 'Original ideation',
      body: 'From the ground up — not a brief translated into motion, a story built to land.',
    },
    {
      title: 'Narrative structure',
      body: 'Story architecture first. Animation serves the watch, not the other way around.',
    },
    {
      title: 'On time, on budget',
      body: 'Complexity handled without drama. Clear scope, clear delivery.',
    },
    {
      title: 'Senior craft',
      body: 'Every frame. No juniors. The person you brief is the person who makes it.',
    },
  ],

  middleGround: {
    leftLabel: 'Not an agency.',
    rightLabel: 'Not a freelancer.',
    body: 'Big-studio thinking without the overheads and layers. The person you brief is the person who makes it. Your budget goes further when one expert owns the project — ideation through delivery.',
  },

  projects: [
    {
      client: 'Atomic',
      result: 'In-app messaging made clear for product and sales.',
      vimeoId: '861022443',
    },
    {
      client: 'Mosaic',
      result: 'Complex data planning platform, explained simply.',
      vimeoId: '879242129',
    },
    {
      client: 'Acodis',
      result: '40,000 YouTube views — brand perception lift.',
      vimeoId: '580088673',
    },
  ],

  testimonial: {
    quote:
      '40,000 views on YouTube, which increased brand perception and reputation.',
    name: 'Simon Lehman',
    role: 'Marketing Manager',
    company: 'Acodis',
  },

  processSteps: [
    'Project call',
    'Script & storyboard',
    'Design & animation',
    'Delivery',
  ],

  faqs: [
    {
      question: 'What do projects involve?',
      answer:
        'A focused project call, then I take ownership of the story — rewrite and structure the script, storyboard, design, and animate. Scope is set around craft and clarity, not a race to the cheapest frame.',
    },
    {
      question: 'Who will I work with?',
      answer:
        'Me. Dan Neale — creative director and maker. No account managers, no handoffs, no juniors on your project.',
    },
    {
      question: 'Do you work with creative studios?',
      answer:
        'Yes. Senior motion specialist support — white label or collaborative. You keep the client relationship; I own the craft.',
    },
    {
      question: 'Are you hiring?',
      answer: 'No — this page is for teams commissioning work.',
    },
  ],

  finalCtaHeading: 'Book a 20-minute project call',
  finalCtaSubhead: 'Talk to the person who actually makes the work.',

  formspreeAction: 'https://formspree.io/f/xaqlpada',
  thankYouUrl: 'https://motionstory.com.au/thank-you/',
};
