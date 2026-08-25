import { ALL_PROJECTS } from '../projects';
import type { VerticalCase } from './types';

export function verticalCase(
  id: string,
  extras: { body: string; tags?: string }
): VerticalCase {
  const p = ALL_PROJECTS.find((x) => x.id === id);
  if (!p) throw new Error(`Unknown project id for vertical landing: ${id}`);
  return {
    title: p.title,
    client: p.client,
    link: `/casestudy/${p.slug}/`,
    vimeoId: p.vimeoId,
    vimeoHash: p.vimeoHash,
    tags: extras.tags,
    body: extras.body,
  };
}

export const VERTICAL_TICKER_A = [
  'United Nations',
  'RSPCA',
  'Red Cross',
  'NSW Government',
  'Wipster',
  'Atomic',
  'Acodis',
  'Method',
];

export const VERTICAL_TICKER_B = [
  'Aon',
  'Amex',
  'UTS',
  'Cotton Australia',
  'Giraffe',
  'Trudi',
  'Mosaic',
  'Meltwater',
];

export const VERTICAL_CORE_FAQS = [
  {
    question: 'How much does it cost?',
    answer:
      'From $5,000. Most projects land around $10,000–$15,000. Fixed quote upfront after we understand the brief.',
  },
  {
    question: 'How long does it take?',
    answer:
      'Most projects run 3 to 6 weeks. Simpler pieces can ship in about two weeks when scope is tight.',
  },
  {
    question: 'Who will I be working with?',
    answer:
      'Me. Dan Neale. Concept, storyboard, creative direction, and delivery. When a job needs extra hands, I direct them.',
  },
];
