import { ALL_PROJECTS } from '../data/projects';
import { getVideoSeoCategory, getVideoSeoTags } from '../lib/videoSeo';

const SITE_URL = 'https://motionstory.com.au';

function escapeXml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function truncate(value: string, maxLength: number) {
  return value.length > maxLength ? `${value.slice(0, maxLength - 1)}…` : value;
}

function videoEntry(project: (typeof ALL_PROJECTS)[number], vimeoId: string, label?: string) {
  const pageUrl = `${SITE_URL}/casestudy/${project.slug}/`;
  const title = label ? `${project.title}: ${label}` : project.title;
  const description = truncate(project.details || project.description, 2048);
  const tags = getVideoSeoTags(project)
    .map((tag) => `<video:tag>${escapeXml(tag)}</video:tag>`)
    .join('\n      ');
  const category = getVideoSeoCategory(project);

  return `
    <video:video>
      <video:thumbnail_loc>https://vumbnail.com/${vimeoId}.jpg</video:thumbnail_loc>
      <video:title>${escapeXml(truncate(title, 100))}</video:title>
      <video:description>${escapeXml(description)}</video:description>
      <video:player_loc allow_embed="yes">https://player.vimeo.com/video/${vimeoId}</video:player_loc>
      <video:publication_date>${project.year}-01-01T00:00:00+00:00</video:publication_date>
      <video:category>${escapeXml(category)}</video:category>
      ${tags}
      <video:family_friendly>yes</video:family_friendly>
      <video:uploader info="${SITE_URL}/">Motion Story</video:uploader>
    </video:video>`;
}

export function GET() {
  const urls = ALL_PROJECTS.map((project) => {
    const videos = [
      videoEntry(project, project.vimeoId),
      ...(project.secondaryVimeoId ? [videoEntry(project, project.secondaryVimeoId, 'Additional video')] : []),
    ].join('');

    return `
  <url>
    <loc>${SITE_URL}/casestudy/${project.slug}/</loc>${videos}
  </url>`;
  }).join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">${urls}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}
