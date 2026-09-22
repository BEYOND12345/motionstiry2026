import type { Project } from '../data/projects';

export type CaseStudyLane = {
  jobLabel: string;
  moneyHref: string;
  moneyLabel: string;
};

const CYBER = /nisient|shape connect|shape-connect|data republic|quantum|cyber|security|privacy-preserving/;
const FINTECH = /amex|american express|insignia|bambora|good2pay|class trust|swell|payment|fintech|insurance|raa/;

export function getCaseStudyLane(project: Project): CaseStudyLane {
  const hay = `${project.id} ${project.slug} ${project.title} ${project.client} ${project.description} ${project.details}`.toLowerCase();

  if (CYBER.test(hay)) {
    return {
      jobLabel: 'Cybersecurity motion graphic explainer video',
      moneyHref: '/cybersecurity-explainer-videos/',
      moneyLabel: 'Cybersecurity motion graphic explainer videos',
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
      moneyHref: '/motion-graphics/',
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
  return `${project.title} — ${jobLabel} | Motion Story`;
}

export function getCaseStudyMetaDescription(project: Project) {
  const { jobLabel } = getCaseStudyLane(project);
  return `${project.description} ${jobLabel} for ${project.client}, made by Dan Neale at Motion Story, Byron Bay.`;
}

export function getCaseStudyContext(project: Project) {
  const { jobLabel } = getCaseStudyLane(project);
  return `${jobLabel} for ${project.client}. I shaped the story and made the film.`;
}
