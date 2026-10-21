import { readFile, writeFile } from 'node:fs/promises';
import { loadEnv } from 'vite';
import { render } from '../src/render';

const { head, body, config } = render(loadEnv('production', process.cwd(), 'VITE_'));
const template = await readFile('dist/index.html', 'utf8');
await writeFile('dist/index.html', template.replace('<!--site-head-->', head).replace('<!--app-html-->', body));
await writeFile('dist/robots.txt', `User-agent: *\nAllow: /\n${config.siteUrl ? `\nSitemap: ${config.siteUrl}sitemap.xml\n` : ''}`);
if (config.siteUrl) {
  // The config accepts only a normalized HTTPS origin, so no XML-special characters are possible.
  await writeFile('dist/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>${config.siteUrl}</loc></url></urlset>\n`);
} else {
  console.info('Set VITE_SITE_URL to enable canonical URL, sitemap and absolute social-image URLs.');
}
console.info('React page pre-rendered to dist/index.html.');
