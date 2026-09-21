import fs from 'node:fs/promises';
import { createServer } from 'vite';
import { renderToString } from 'react-dom/server';
import { createElement } from 'react';
const data = JSON.parse(await fs.readFile('src/projects.json', 'utf8'));
const server = await createServer({ server: { middlewareMode: true }, appType: 'custom' });
try {
  const { App } = await server.ssrLoadModule('/src/App.jsx');
  const template = await fs.readFile('dist/client/index.html', 'utf8');
  const routes = [{path:'/',title:'letspets — Make room for play.'}, {path:'/studio',title:'스튜디오 소개 | letspets'}, {path:'/privacy',title:'개인정보처리방침 | letspets'}, ...data.projects.map(p=>({path:`/projects/${p.slug}`,title:`${p.title} | letspets`,description:p.tagline}))];
  const escape = text => text.replaceAll('&','&amp;').replaceAll('"','&quot;').replaceAll('<','&lt;').replaceAll('>','&gt;');
  for (const route of routes) {
    const body = renderToString(createElement(App, {initialPath:route.path}));
    let html = template.replace('<div id="root"></div>', `<div id="root">${body}</div>`).replace(/<title>.*?<\/title>/,`<title>${escape(route.title)}</title>`).replace('</head>', `<link rel="canonical" href="https://www.letspets.co.kr${route.path}" /></head>`);
    if (route.description) html = html.replace(/(<meta name="description" content=")[^"]*/,`$1${escape(route.description)}`).replace(/(<meta property="og:description" content=")[^"]*/,`$1${escape(route.description)}`);
    html = html.replace(/(<meta property="og:title" content=")[^"]*/,`$1${escape(route.title)}`);
    const dir = `dist/client${route.path === '/' ? '' : route.path}`;
    await fs.mkdir(dir,{recursive:true}); await fs.writeFile(`${dir}/index.html`,html);
  }
  console.log(`Prerendered ${routes.length} public pages.`);
} catch (error) { console.error(error); process.exitCode = 1; } finally { server.close(); process.exit(process.exitCode ?? 0); }
