import { renderToString, renderToStaticMarkup } from 'react-dom/server';
import { App } from './App';
import { createSiteConfig, description, title } from './config';

export function render(env: Record<string, string | undefined>) {
  const config = createSiteConfig(env);
  const image = config.siteUrl ? `${config.siteUrl}images/social.jpg` : '';
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Kampive',
    description,
    inLanguage: 'pt-BR',
    ...(config.siteUrl ? { url: config.siteUrl } : {}),
    about: { '@type': 'MobileApplication', name: 'Kampive', applicationCategory: 'TravelApplication', operatingSystem: 'iOS, Android', description },
  };
  const head = renderToStaticMarkup(<>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="robots" content="index, follow, max-image-preview:large" />
    <meta name="theme-color" content="#fbf9f4" />
    {config.siteUrl && <link rel="canonical" href={config.siteUrl} />}
    <meta property="og:type" content="website" />
    <meta property="og:locale" content="pt_BR" />
    <meta property="og:site_name" content="Kampive" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    {config.siteUrl && <meta property="og:url" content={config.siteUrl} />}
    {image && <><meta property="og:image" content={image} /><meta property="og:image:width" content="1200" /><meta property="og:image:height" content="630" /><meta property="og:image:alt" content="Paisagem Kampive com uma barraca entre montanhas e árvores." /></>}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    {image && <meta name="twitter:image" content={image} />}
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />
  </>);
  return { head, body: renderToString(<App config={config} />), config };
}
