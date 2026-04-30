import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const SITE_URL = process.env.SITE_URL || 'https://motionstory.com.au';
const HOST = new URL(SITE_URL).host;
const INDEXNOW_KEY = process.env.INDEXNOW_KEY || '4c0bdb6f9e0e4f1c9fd9f6e597ec68d4';
const KEY_LOCATION = `${SITE_URL}/${INDEXNOW_KEY}.txt`;
const ENDPOINT = process.env.INDEXNOW_ENDPOINT || 'https://api.indexnow.org/indexnow';
const DIST_DIR = process.env.DIST_DIR || 'dist';
const IS_LIVE = process.argv.includes('--live');
const URL_LIMIT = Number(process.env.INDEXNOW_LIMIT || '10000');

function listXmlFiles(dir) {
  const entries = readdirSync(dir);
  return entries.flatMap((entry) => {
    const path = join(dir, entry);
    const stats = statSync(path);
    if (stats.isDirectory()) return listXmlFiles(path);
    return path.endsWith('.xml') ? [path] : [];
  });
}

function extractUrlsFromXml(xml) {
  return [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1].trim());
}

function collectUrls() {
  if (!existsSync(DIST_DIR)) {
    throw new Error(`Missing ${DIST_DIR}. Run "npm run build" first.`);
  }

  const urls = new Set();
  for (const file of listXmlFiles(DIST_DIR)) {
    const xml = readFileSync(file, 'utf8');
    for (const url of extractUrlsFromXml(xml)) {
      if (!url.startsWith(SITE_URL)) continue;
      if (url.endsWith('.xml')) continue;
      urls.add(url);
    }
  }

  return [...urls]
    .filter((url) => {
      const parsed = new URL(url);
      return parsed.host === HOST;
    })
    .slice(0, URL_LIMIT);
}

function chunk(items, size) {
  const chunks = [];
  for (let index = 0; index < items.length; index += size) {
    chunks.push(items.slice(index, index + size));
  }
  return chunks;
}

async function submitUrls(urlList) {
  const payload = {
    host: HOST,
    key: INDEXNOW_KEY,
    keyLocation: KEY_LOCATION,
    urlList,
  };

  const response = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'content-type': 'application/json; charset=utf-8' },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`IndexNow failed (${response.status}): ${body}`);
  }

  return response.status;
}

async function main() {
  const urls = collectUrls();
  console.log(`IndexNow endpoint: ${ENDPOINT}`);
  console.log(`Host: ${HOST}`);
  console.log(`Key location: ${KEY_LOCATION}`);
  console.log(`Collected ${urls.length} canonical URLs from built sitemaps.`);

  if (urls.length === 0) {
    console.log('No URLs to submit.');
    return;
  }

  console.log('Sample URLs:');
  for (const url of urls.slice(0, 10)) {
    console.log(`- ${url}`);
  }

  if (!IS_LIVE) {
    console.log('\nDry run only. Re-run with --live to submit.');
    return;
  }

  for (const urlList of chunk(urls, 1000)) {
    const status = await submitUrls(urlList);
    console.log(`Submitted ${urlList.length} URLs. IndexNow status: ${status}`);
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
