import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
const {projects} = JSON.parse(await fs.readFile(new URL('../src/projects.json',import.meta.url)));
test('all six migrated project pages contain crawlable content and local images',async()=>{
  assert.equal(projects.length,6);
  assert.equal(new Set(projects.map(p=>p.slug)).size,6);
  for (const p of projects) {
    const html=await fs.readFile(`dist/client/projects/${p.slug}/index.html`,'utf8');
    assert.ok(html.includes(p.title));assert.ok(html.includes(p.tagline));assert.ok(html.includes(`https://www.letspets.co.kr/projects/${p.slug}`));
    for(const image of p.gallery) await fs.access(`dist/client${image.src}`);
  }
  for(const path of ['studio/index.html','privacy/index.html','app-ads.txt','sitemap.xml']) await fs.access(`dist/client/${path}`);
  assert.match(await fs.readFile('dist/client/app-ads.txt','utf8'),/google\.com, pub-\d+, DIRECT/);
});
