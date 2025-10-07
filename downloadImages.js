// downloadImages.js
// Downloads all images referenced by profiles/<id>/image_URL
// Run: node downloadImages.js
// Env (optional):
//   STRICT_DOWNLOAD=1         -> exit(1) if any download fails
//   DOWNLOAD_CONCURRENCY=8    -> parallelism (default 8)
//   DOWNLOAD_TIMEOUT_MS=20000 -> per-request timeout

import app from './firebase-config.js';
import { getDatabase, ref, query, orderByChild, get } from 'firebase/database';
import fs from 'fs';
import path from 'path';
import process from 'process';
import fetch from 'node-fetch';
import { fileURLToPath } from 'url';
import crypto from 'crypto';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DB_PATH = 'profiles';
const OUTPUT_ROOT = path.join(__dirname, 'public', 'images', 'profiles');
const MANIFEST_PATH = path.join(__dirname, 'src', 'imageManifest.json');
const FETCHED_DATA_PATH = path.join(__dirname, 'src', 'fetchedData.json');

const CONCURRENCY = Number(process.env.DOWNLOAD_CONCURRENCY || 8);
const TIMEOUT_MS = Number(process.env.DOWNLOAD_TIMEOUT_MS || 20000);
const STRICT = !!process.env.STRICT_DOWNLOAD;
const RETRIES = 3;

function ensureDir(p) {
  fs.mkdirSync(p, { recursive: true });
}
function hash(s) {
  return crypto.createHash('sha1').update(String(s)).digest('hex');
}
function safeBasenameFromUrl(u) {
  try {
    const url = new URL(u);
    const base = path.basename(decodeURIComponent(url.pathname)) || 'file';
    return base.replace(/[^a-zA-Z0-9._-]/g, '_').slice(-120);
  } catch {
    return hash(u).slice(0, 12);
  }
}
function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}
async function fetchWithTimeout(url, opts = {}) {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), TIMEOUT_MS);
  try {
    return await fetch(url, { ...opts, signal: controller.signal, redirect: 'follow' });
  } finally {
    clearTimeout(id);
  }
}
async function download(url, outPath) {
  for (let attempt = 1; attempt <= RETRIES; attempt++) {
    try {
      const res = await fetchWithTimeout(url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const buf = Buffer.from(await res.arrayBuffer());
      if (!buf.length) throw new Error('Empty body');
      ensureDir(path.dirname(outPath));
      fs.writeFileSync(outPath, buf);
      return { ok: true, contentType: res.headers.get('content-type') || '' };
    } catch (err) {
      if (attempt === RETRIES) return { ok: false, error: err.message };
      await sleep(300 * attempt);
    }
  }
}
async function mapLimit(items, limit, worker) {
  const results = new Array(items.length);
  let i = 0;
  const workers = Array.from({ length: Math.min(limit, items.length) }, async () => {
    while (i < items.length) {
      const idx = i++;
      results[idx] = await worker(items[idx], idx);
    }
  });
  await Promise.all(workers);
  return results;
}

async function run() {
  const db = getDatabase(app);
  const ordered = query(ref(db, DB_PATH), orderByChild('upload_date'));

  console.log(`[downloadImages] Fetching "${DB_PATH}"...`);
  const snap = await get(ordered);
  if (!snap.exists()) {
    console.log('[downloadImages] No data at profiles.');
    return;
  }

  const data = snap.val();
  ensureDir(path.dirname(FETCHED_DATA_PATH));
  fs.writeFileSync(FETCHED_DATA_PATH, JSON.stringify(data, null, 2));
  console.log(`[downloadImages] Wrote raw -> ${path.relative(__dirname, FETCHED_DATA_PATH)}`);

  const entries = Object.entries(data);
  console.log(`[downloadImages] ${entries.length} profiles.`);

  const manifest = {}; // id -> [{ originalUrl, localPath, ok, skipped?, note? }]
  const tasks = [];

  for (const [id, profile] of entries) {
    const url = profile?.image_URL; // <-- your schema
    manifest[id] = [];
    if (!url || typeof url !== 'string') continue;

    // Build a stable filename; add a short hash to avoid collisions
    let base = safeBasenameFromUrl(url);
    const suffix = hash(url).slice(0, 8);
    if (path.extname(base)) {
      const parts = base.split('.');
      const ext = parts.pop();
      base = `${parts.join('.')}-${suffix}.${ext}`;
    } else {
      base = `${base}-${suffix}`;
    }

    const outDir = path.join(OUTPUT_ROOT, id);
    const outPath = path.join(outDir, base);

    tasks.push(async () => {
      try {
        if (fs.existsSync(outPath) && fs.statSync(outPath).size > 0) {
          manifest[id].push({ originalUrl: url, localPath: `/images/profiles/${id}/${base}`, ok: true, skipped: true, note: 'exists' });
          return;
        }
        const res = await download(url, outPath);
        if (!res.ok) {
          manifest[id].push({ originalUrl: url, localPath: null, ok: false, note: res.error });
        } else {
          manifest[id].push({ originalUrl: url, localPath: `/images/profiles/${id}/${base}`, ok: true });
          console.log(`[ok] ${id} ← ${url}`);
        }
      } catch (e) {
        manifest[id].push({ originalUrl: url, localPath: null, ok: false, note: e.message });
      }
    });
  }

  console.log(`[downloadImages] ${tasks.length} image(s) to fetch. Concurrency=${CONCURRENCY}`);
  await mapLimit(tasks, CONCURRENCY, (fn) => fn());

  ensureDir(path.dirname(MANIFEST_PATH));
  fs.writeFileSync(MANIFEST_PATH, JSON.stringify(manifest, null, 2));
  console.log(`[downloadImages] Wrote manifest -> ${path.relative(__dirname, MANIFEST_PATH)}`);

  const failed = Object.values(manifest).flat().filter(x => x.ok === false);
  if (failed.length) {
    console.warn(`[downloadImages] ${failed.length} download(s) failed.`);
    if (STRICT) process.exit(1);
  }

  console.log('[downloadImages] Done.');
}

run().catch(err => {
  console.error('[downloadImages] Fatal:', err);
  process.exit(1);
});