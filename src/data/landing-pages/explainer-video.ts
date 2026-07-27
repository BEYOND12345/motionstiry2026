import type { LandingPageConfig } from '../../components/LandingPage/types';
import { SAAS_TRUST_LOGOS } from './trust-logos';
import { TESTIMONIAL_ACODIS } from './testimonials';

function piece(
  vimeoId: string,
  client: string,
  oneLineResult: string
): LandingPageConfig['featuredWork']['projects'][number] {
  return {
    thumbnail: `https://vumbnail.com/${vimeoId}.jpg`,
    client,
    oneLineResult,
    videoUrl: vimeoId,
  };
}

/** Config for /landing-page-explainer-video-01/ */
export const explainerVideoLanding: LandingPageConfig = {
  slug: 'explainer-video',
  seo: {
    titleTag: 'Explainer Videos For Complex Products | Motion Story',
    metaDescription:
      'Explainer videos for SaaS and tech teams. Work directly with the creative director — script, storyboard, animation. 20 years of senior craft.',
    canonicalPath: '/landing-page-explainer-video-01/',
  },
  hero: {
    h1: 'Explainer Videos For Complex Products',
    subhead:
      'Work directly with the creative director. 20 years of senior craft — no account managers, no handoffs, no juniors.',
    videoSrc: '861022443',
    fullShowreelUrl: '861022443',
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
        body: 'No juniors, no handoffs. The person you brief is the person who animates.',
      },
    ],
  },
  middleGround: {
    headline: 'Not an agency. Not a freelancer.',
    body: 'Big agencies bury the craft under account managers and juniors. Solo freelancers can execute but rarely own the story. This studio sits between — big-agency thinking without the overheads, senior craft with direct access.',
  },
  featuredWork: {
    // 3×2 grid — short titles under each thumbnail (reference layout)
    projects: [
      piece('866174146', 'Trudi', 'Trudi Product Demo'),
      piece('306054358', 'NSW Government', 'NSW Pinch Point Explained'),
      piece('557884851', 'Method Recycling', 'Method Recycling'),
      piece('879242129', 'Mosaic', 'Mosaic Platform Explained'),
      piece('580088673', 'Acodis', 'Acodis AI Explainer'),
      piece('762085540', 'RSPCA', 'RSPCA Cat Care'),
    ],
  },
  testimonial: TESTIMONIAL_ACODIS,
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
        question: 'Who will I work with?',
        answer:
          'Me. Dan Neale — creative director and maker. No account managers, no handoffs, no juniors on your project.',
      },
      {
        question: 'Do you rewrite the script?',
        answer:
          "Yes — that's usually where the film is won or lost. I'll structure the story, tighten the hooks, and make sure every line earns its place before a single frame is animated.",
      },
      {
        question: 'What kinds of companies do you work with?',
        answer:
          'Mostly SaaS and tech companies with complex products that need to be made obvious. Also creative and design agencies bringing in a senior motion specialist.',
      },
    ],
  },
  finalCta: {
    headline: 'Talk to the person who actually makes the work.',
    formIntro: 'Or send a brief — I reply within one business day.',
  },
  form: {
    textareaLabel: 'What are you trying to explain?',
    submitButtonLabel: 'Send brief',
    redirectTo: '/thank-you',
  },
  accentColor: '#FF0000',
};
