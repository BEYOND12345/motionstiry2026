import type { Project } from '../data/projects';

export type CaseStudyLane = {
  jobLabel: string;
  moneyHref: string;
  moneyLabel: string;
};

const CYBER = /nisient|shape connect|shape-connect|data republic|quantum|cybersecurity|\bcyber\b|privacy-preserving|website security|data security/;
const FINTECH = /amex|american express|insignia|bambora|good2pay|class trust|swell|payment|fintech|insurance|raa/;

/** Films on /product-demo-videos/. Checked before fintech so these case studies support the demo page. */
const PRODUCT_DEMO_IDS = new Set([
  'good2pay',
  'heyyou',
  'food-by-us',
  'class-trust',
  'trulet',
  'uclusion',
]);

export function getCaseStudyLane(project: Project): CaseStudyLane {
  const hay = `${project.id} ${project.slug} ${project.title} ${project.client} ${project.description} ${project.details}`.toLowerCase();

  if (CYBER.test(hay)) {
    return {
      jobLabel: 'Cybersecurity motion graphic explainer video',
      moneyHref: '/cybersecurity-explainer-videos/',
      moneyLabel: 'Cybersecurity motion graphic explainer videos',
    };
  }

  if (PRODUCT_DEMO_IDS.has(project.id)) {
    return {
      jobLabel: 'Product demo video',
      moneyHref: '/product-demo-videos/',
      moneyLabel: 'Product demo videos',
    };
  }

  if (FINTECH.test(hay)) {
    return {
      jobLabel: 'Fintech motion graphic explainer video',
      moneyHref: '/finance-explainer-videos/',
      moneyLabel: 'Fintech motion graphic explainer videos',
    };
  }

  if (project.category === 'Causes & NFP') {
    return {
      jobLabel: 'Motion graphic explainer video',
      moneyHref: '/causes/',
      moneyLabel: 'Causes and nonprofit films',
    };
  }

  if (project.category === 'Agencies') {
    return {
      jobLabel: 'Motion graphics',
      moneyHref: '/freelance-motion-graphic-designer/',
      moneyLabel: 'Motion graphics studio',
    };
  }

  if (project.category === 'Data & Govtech') {
    return {
      jobLabel: 'Motion graphic explainer video',
      moneyHref: '/technology-videos/',
      moneyLabel: 'Technology explainer videos',
    };
  }

  return {
    jobLabel: 'SaaS motion graphic explainer video',
    moneyHref: '/saas-explainer-videos/',
    moneyLabel: 'SaaS motion graphic explainer videos',
  };
}

export function getCaseStudyMetaTitle(project: Project) {
  const { jobLabel } = getCaseStudyLane(project);
  return `${project.title}. ${jobLabel} | Motion Story`;
}

export function getCaseStudyMetaDescription(project: Project) {
  const { jobLabel } = getCaseStudyLane(project);
  return `${project.description} ${jobLabel} for ${project.client}, made by Dan Neale at Motion Story, Byron Bay.`;
}

export function getCaseStudyContext(project: Project) {
  const { jobLabel } = getCaseStudyLane(project);
  return `${jobLabel} for ${project.client}. I shaped the story and made the film.`;
}
