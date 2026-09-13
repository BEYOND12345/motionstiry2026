/**
 * Download first-party Vimeo posters into public/posters/
 * so previews are not blocked with vumbnail.com or a remote CDN.
 */
import { mkdirSync, readFileSync, writeFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

const ROOT = new URL("..", import.meta.url).pathname;
const POSTER_DIR = join(ROOT, "public/posters");
const HASHES = {
  "1157366298": "1ddd2b07e1",
  "862219691": "03ab78a34f",
};

function walk(dir, files = []) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === "node_modules" || entry.name === "dist") continue;
      walk(full, files);
    } else if (/\.(ts|tsx|astro|xml|js|mjs)$/.test(entry.name)) {
      files.push(full);
    }
  }
  return files;
}

function collectIds() {
  const ids = new Set();
  for (const file of walk(join(ROOT, "src"))) {
    const text = readFileSync(file, "utf8");
    for (const match of text.matchAll(/vimeoId:\s*['"](\d+)['"]/g)) ids.add(match[1]);
    for (const match of text.matchAll(/secondaryVimeoId:\s*['"](\d+)['"]/g)) ids.add(match[1]);
  }
  return [...ids].sort();
}

async function fetchThumbnailUrl(id) {
  const hash = HASHES[id];
  const url = hash
    ? `https://vimeo.com/api/oembed.json?url=https://vimeo.com/${id}/${hash}&width=1280`
    : `https://vimeo.com/api/oembed.json?url=https://vimeo.com/${id}&width=1280`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`oembed ${res.status}`);
  const data = await res.json();
  if (!data.thumbnail_url) throw new Error("missing thumbnail_url");
  return data.thumbnail_url;
}

async function downloadPoster(id) {
  const thumbnailUrl = await fetchThumbnailUrl(id);
  const res = await fetch(thumbnailUrl);
  if (!res.ok) throw new Error(`image ${res.status}`);
  const bytes = Buffer.from(await res.arrayBuffer());
  if (bytes.length < 1000) throw new Error(`image too small (${bytes.length}b)`);
  writeFileSync(join(POSTER_DIR, `${id}.jpg`), bytes);
  return bytes.length;
}

async function mapPool(items, limit, worker) {
  const results = new Map();
  let i = 0;
  async function next() {
    const index = i++;
    if (index >= items.length) return;
    const id = items[index];
    results.set(id, await worker(id));
    return next();
  }
  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, () => next()));
  return results;
}

mkdirSync(POSTER_DIR, { recursive: true });
const ids = collectIds();
console.log(`Downloading ${ids.length} posters into public/posters/…`);

const results = await mapPool(ids, 6, async (id) => {
  try {
    const bytes = await downloadPoster(id);
    console.log(`ok ${id} (${bytes}b)`);
    return { ok: true };
  } catch (error) {
    console.error(`fail ${id}: ${error.message}`);
    return { ok: false };
  }
});

const missing = ids.filter((id) => !results.get(id)?.ok);
if (missing.length) {
  console.error(`Missing posters: ${missing.join(", ")}`);
  process.exit(1);
}
console.log(`Wrote ${ids.length} files to public/posters/`);
