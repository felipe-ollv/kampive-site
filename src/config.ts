export type SiteConfig = {
  siteUrl: string;
  appStoreUrl: string;
  googlePlayUrl: string;
};

type Environment = Record<string, string | undefined>;

function secureUrl(value: string | undefined, fallback = ''): string {
  if (!value?.trim()) return fallback;
  const url = new URL(value.trim());
  if (url.protocol !== 'https:' || url.username || url.password) {
    throw new Error('Public site and store URLs must use HTTPS without credentials.');
  }
  return url.href;
}

export function createSiteConfig(env: Environment): SiteConfig {
  const siteUrl = secureUrl(env.VITE_SITE_URL);
  if (siteUrl && new URL(siteUrl).href !== `${new URL(siteUrl).origin}/`) {
    throw new Error('VITE_SITE_URL must be an origin, without a path, query or fragment.');
  }
  return {
    siteUrl,
    appStoreUrl: secureUrl(env.VITE_APP_STORE_URL, 'https://www.apple.com/br/app-store/'),
    googlePlayUrl: secureUrl(env.VITE_GOOGLE_PLAY_URL, 'https://play.google.com/store/apps'),
  };
}

export const title = 'Kampive — Encontre campings e explore a vida ao ar livre';
export const description = 'Encontre campings, confira avaliações e salve seus lugares favoritos. Conheça o Kampive, seu app para explorar a vida ao ar livre.';
