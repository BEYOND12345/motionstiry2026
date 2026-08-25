import type { SpineCase, SpineLandingConfig } from '../../components/LandingPage/spine-types';
import { ALL_PROJECTS, type Project } from '../projects';

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

function projectToCase(p: Project): SpineCase {
  const useCase = p.title.includes(' / ') ? p.title.split(' / ')[1]! : p.title;
  return {
    client: p.client,
    useCase,
    body: '',
    outcome: p.description,
    videoUrl: p.vimeoId,
    vimeoHash: p.vimeoHash,
  };
}

/** Build spine proof rows from portfolio project ids (order preserved). */
export function spineCases(...ids: string[]): SpineCase[] {
  const byId = new Map(ALL_PROJECTS.map((p) => [p.id, p]));
  return ids.map((id) => {
    const project = byId.get(id);
    if (!project) throw new Error(`Unknown portfolio project id: ${id}`);
    return projectToCase(project);
  });
}

/**
 * Per-landing proof mixes — exclusive split of the site portfolio.
 * Each film appears on one landing only (see landing-portfolio-mix canvas).
 */
export const SPINE_PROOF_PRODUCT_DEMO_ADS = spineCases(
  'trudi',
  'wipster',
  'good2pay',
  'oovvuu',
  'method-product',
  'heyyou',
  'food-by-us',
  'driv0',
  'braums',
  'bambora',
  'ark',
);

export const SPINE_PROOF_PRODUCT_DEMO_SEO = spineCases(
  'trulet',
  'infoview',
  'class-trust',
  'swell',
  'joineree',
  'uclusion',
  'oartech',
  'propspeed',
  'read-medical',
  'amplify',
  'ranalytic',
  'cart-share',
);

export const SPINE_PROOF_SAAS_EXPLAINER = spineCases(
  'mosaic',
  'acodis',
  'nisient',
  'cloud-trace',
  'giraffe',
  'bat-nav',
  'insignia',
  'shape-connect',
  'carter-coin',
  'liquid-ai',
  'data-republic',
  'aon-conversations',
  'altius-map',
  'altius-eap',
  'amex-closed-loop',
);

export const SPINE_PROOF_EXPLAINER = spineCases(
  'atomic',
  'meltwater',
  'united-nations',
  'rspca-cats',
  'redcross',
  'solar-my-school',
  'nsw-gov',
  'lxrp',
  'ipa',
  'raa-insurance',
  'neat-streets',
  'rspca-giving',
  'cotton-australia',
);

export const SPINE_PROOF_PRODUCT_LAUNCH = spineCases(
  'trusyft',
  'method-recycling',
  'eluse-krue',
  'bark-busters',
  'bresic-witney',
  'amsed',
  'acir',
);

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
