import test from 'node:test';
import assert from 'node:assert/strict';
import { render } from '../src/render';
import { createSiteConfig } from '../src/config';

test('page content and crawlable store links exist before JavaScript runs', () => {
  const { body, head } = render({});
  assert.match(body, /<h1>Seu próximo/);
  assert.match(body, /Encontre campings, confira avaliações/);
  assert.match(body, /href="https:\/\/www.apple.com\/br\/app-store\/"/);
  assert.match(body, /href="https:\/\/play.google.com\/store\/apps"/);
  assert.equal((body.match(/<h1>/g) || []).length, 1);
  assert.match(head, /name="description"/);
  assert.match(head, /application\/ld\+json/);
  assert.doesNotMatch(head, /canonical|og:url|og:image/);
});

test('official domain enables consistent canonical and sharing URLs', () => {
  const { head, config } = render({ VITE_SITE_URL: 'https://camping.example' });
  assert.equal(config.siteUrl, 'https://camping.example/');
  assert.match(head, /rel="canonical" href="https:\/\/camping.example\/"/);
  assert.match(head, /content="https:\/\/camping.example\/images\/social.jpg"/);
  const json = head.match(/<script type="application\/ld\+json">(.*?)<\/script>/)?.[1];
  assert.ok(json);
  assert.equal(JSON.parse(json).url, config.siteUrl);
});

test('invalid public URLs fail at build time', () => {
  for (const value of ['javascript:alert(1)', 'http://camping.example', 'https://user:pass@camping.example']) {
    assert.throws(() => createSiteConfig({ VITE_APP_STORE_URL: value }));
  }
  assert.throws(() => createSiteConfig({ VITE_SITE_URL: 'https://camping.example/path' }));
});

test('official product links replace generic store links', () => {
  const { body } = render({ VITE_APP_STORE_URL: 'https://apps.apple.com/br/app/id123', VITE_GOOGLE_PLAY_URL: 'https://play.google.com/store/apps/details?id=com.example.app' });
  assert.match(body, /href="https:\/\/apps.apple.com\/br\/app\/id123"/);
  assert.match(body, /details\?id=com.example.app/);
});
