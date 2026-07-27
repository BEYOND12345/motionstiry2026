import type { LandingPageConfig } from '../../components/LandingPage/types';
import { getShowcaseProjects } from '../projects';

type FeaturedProject = LandingPageConfig['featuredWork']['projects'][number];

/** Short display titles for the 3×3 landing grid */
const SHOWCASE_TITLES: Record<string, string> = {
  trudi: 'Trudi Product Demo',
  atomic: 'Atomic In-App Messaging',
  mosaic: 'Mosaic Platform Explained',
  acodis: 'Acodis AI Explainer',
  'method-recycling': 'Method Recycling',
  wipster: 'Wipster Product Overview',
  meltwater: 'Meltwater Brand Story',
  'rspca-cats': 'RSPCA Cat Care',
  'united-nations': 'United Nations Plastic Waste',
};

/** Shared 9-piece featured set for Ads landings. */
export function getLandingShowcaseWork(): FeaturedProject[] {
  return getShowcaseProjects().map((p) => ({
    thumbnail: `https://vumbnail.com/${p.vimeoId}.jpg`,
    client: p.client,
    oneLineResult: SHOWCASE_TITLES[p.id] ?? p.title,
    videoUrl: p.vimeoId,
  }));
}
