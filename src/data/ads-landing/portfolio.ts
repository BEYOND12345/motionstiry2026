import { ALL_PROJECTS } from '../projects';
import type { AdsProject } from './types';

/** Map the full portfolio into AdsLanding project cards, with optional featured pieces first. */
export function getAdsPortfolio(featured: AdsProject[] = []): AdsProject[] {
  const featuredIds = new Set(featured.map((p) => p.vimeoId));
  const rest: AdsProject[] = ALL_PROJECTS.filter((p) => !featuredIds.has(p.vimeoId)).map((p) => ({
    client: p.client,
    result: p.description,
    vimeoId: p.vimeoId,
    thumbnailAlt: `${p.client} — ${p.title}`,
  }));

  return [...featured, ...rest];
}
