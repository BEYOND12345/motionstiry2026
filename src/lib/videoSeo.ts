import type { Project } from '../data/projects';

const BASE_TAGS = [
  'motion design',
  'animated explainer video',
  'explainer video production',
  'Motion Story',
];

const CATEGORY_TAGS: Record<string, string[]> = {
  'SaaS & Tech': [
    'SaaS explainer video',
    'software explainer video',
    'technology video',
    'product demo video',
  ],
  'Causes & NFP': [
    'nonprofit explainer video',
    'charity explainer video',
    'cause campaign video',
    'public information animation',
  ],
  'Data & Govtech': [
    'data visualisation video',
    'government explainer video',
    'policy explainer video',
    'technology video',
  ],
  Agencies: [
    'agency motion design',
    'brand animation',
    'white label animation',
    'motion graphics',
  ],
};

export function getVideoSeoTags(project: Project) {
  const haystack = `${project.title} ${project.client} ${project.description} ${project.details}`.toLowerCase();
  const tags = new Set([
    ...BASE_TAGS,
    ...(CATEGORY_TAGS[project.category] ?? []),
  ]);

  if (haystack.includes('startup') || haystack.includes('launch') || haystack.includes('early-stage')) {
    tags.add('startup explainer video');
  }

  if (haystack.includes('product') || haystack.includes('platform') || haystack.includes('workflow') || haystack.includes('app')) {
    tags.add('product video');
    tags.add('platform explainer video');
  }

  if (haystack.includes('demo') || haystack.includes('walkthrough')) {
    tags.add('animated product demo');
  }

  if (haystack.includes('ai') || haystack.includes('data') || haystack.includes('security') || haystack.includes('rf') || haystack.includes('technology')) {
    tags.add('technical explainer video');
  }

  if (haystack.includes('onboarding')) {
    tags.add('onboarding video');
  }

  if (haystack.includes('charity') || haystack.includes('nonprofit') || haystack.includes('rspca') || haystack.includes('red cross')) {
    tags.add('charity animation');
  }

  return Array.from(tags).slice(0, 16);
}

export function getVideoSeoCategory(project: Project) {
  if (project.category === 'Causes & NFP') return 'Nonprofit explainer video';
  if (project.category === 'Data & Govtech') return 'Data visualisation and government explainer video';
  if (project.category === 'Agencies') return 'Brand animation and agency motion design';
  return 'SaaS explainer and product demo video';
}
