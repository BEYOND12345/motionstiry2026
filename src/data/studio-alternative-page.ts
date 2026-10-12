import { ALL_PROJECTS, type Project } from './projects';

export const STUDIO_ALT_TITLE = 'Independent Motion Designer | Motion Story';

export const STUDIO_ALT_DESCRIPTION =
  'An independent motion designer. You work directly with me, as part of your team. Fast two to three week turnarounds, depending on the project.';

export const STUDIO_ALT_PATH = '/independent-motion-designer/';

export const STUDIO_ALT_CANONICAL = `https://motionstory.com.au${STUDIO_ALT_PATH}`;

const CAPTIONS: Record<string, string> = {
  nisient:
    'Quantum-era security is hard for a decision maker to follow. The film turns security readiness into a story.',
  acodis:
    'AI data extraction is hard to show to a non-specialist. The film follows the process.',
  mosaic:
    'Strategic data planning is a dense workflow. The film shows how a team connects strategy to the work.',
  'united-nations':
    'Plastic waste figures are hard to take in. The film turns them into a visual account for policy discussions.',
};

function film(id: string): Project & { caption: string } {
  const project = ALL_PROJECTS.find((item) => item.id === id);
  if (!project) throw new Error(`Missing project ${id}`);
  const caption = CAPTIONS[id];
  if (!caption) throw new Error(`Missing caption ${id}`);
  return { ...project, caption };
}

/** Hero first, then the three films under it. Captions stay inside existing project facts. */
export const STUDIO_ALT_FILMS = [
  film('nisient'),
  film('acodis'),
  film('mosaic'),
  film('united-nations'),
];
