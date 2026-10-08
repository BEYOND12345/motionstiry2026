import { ALL_PROJECTS, type Project } from './projects';

export const FREELANCE_TITLE =
  'Freelance Motion Designer for Sydney, Melbourne and Los Angeles | Motion Story';

export const FREELANCE_DESCRIPTION =
  'Based in Byron Bay, working remotely with teams in Sydney, Melbourne, Brisbane, Los Angeles and San Francisco. Freelance motion graphic designer.';

export const FREELANCE_CANONICAL = 'https://motionstory.com.au/freelance-motion-graphic-designer/';

export const FREELANCE_FAQS = [
  {
    question: 'Do you work with Sydney and Melbourne teams?',
    answer:
      'Yes. I am based in Byron Bay and I work remotely. Sydney, Melbourne and Brisbane are the same working day. Los Angeles and San Francisco overlap with my morning. The NSW Government pinch-point film was a Sydney brief, made from here.',
  },
  {
    question: 'Can you work with our existing designs?',
    answer:
      'Yes. I can animate your brand assets, work from a storyboard or develop the design with your team.',
  },
  {
    question: 'Can you help with the idea as well?',
    answer:
      'Yes. I can help with concepts, messaging, scripting and storyboards, as well as design and animation.',
  },
  {
    question: 'Can you work to a tight deadline?',
    answer:
      "Tell me what's involved and when you need it. I'll let you know what's achievable and help plan the work around the time available.",
  },
] as const;

function film(id: string): Project {
  const project = ALL_PROJECTS.find((item) => item.id === id);
  if (!project) throw new Error(`Missing project ${id}`);
  return project;
}

/** Brand film already used as the approved hero asset. */
export const FREELANCE_FEATURED = film('meltwater');

/**
 * Motion graphics from the previous page, with newer films in front.
 * Eluse stays. Role lines are omitted: the project records do not
 * confirm a credit such as "Design and animation" per film.
 */
export const FREELANCE_SELECTED = [
  film('eluse-krue'),
  film('ark'),
  film('method-recycling'),
  film('insignia'),
  film('amex-closed-loop'),
  film('atomic'),
  film('mosaic'),
  film('trudi'),
  film('altius-map'),
  film('united-nations'),
];

/** More of the earlier motion set, plus recent films. No repeats of the pieces above. */
export const FREELANCE_RANGE = [
  film('nisient'),
  film('cloud-trace'),
  film('giraffe'),
  film('redcross'),
  film('rspca-cats'),
  film('wipster'),
];
