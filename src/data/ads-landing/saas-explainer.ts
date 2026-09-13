import type { AdsLandingConfig } from './types';
import { saasTechLanding } from './saas-tech';

/** Duplicate of master template — swap only service-specific fields. */
export const saasExplainerLanding: AdsLandingConfig = {
  ...saasTechLanding,
  path: '/saas-explainer-videos/',
  title: 'SaaS Motion Graphics | Motion Story',
  description:
    'SaaS motion graphics for complex software. Clear product stories for sales, onboarding, and landing pages. Work directly with the creative director.',
  serviceKeyword: 'SaaS Motion Graphics',
  h1: 'Motion Graphics For Complex Products',
  subhead:
    'Work directly with the creative director. 20 years of senior craft — no account managers, no handoffs, no juniors.',
  heroVimeoId: '879242129',
  heroVideoTitle: 'SaaS motion graphics showreel',
  projects: [
    {
      client: 'Mosaic',
      result: 'Platform story that sales can send before the call.',
      vimeoId: '879242129',
    },
    {
      client: 'Atomic',
      result: 'Product narrative built for clarity, not feature dumps.',
      vimeoId: '861022443',
    },
    {
      client: 'Trudi',
      result: 'AI property platform made immediate and human.',
      vimeoId: '866174146',
    },
  ],
};
