import type { SiteConfig } from './config';
import { AppleIcon, FeatureIcon, PlayIcon } from './icons';

export function App({ config }: { config: SiteConfig }) {
  return <div className="landing">
    <a className="skip-link" href="#conteudo">Ir para o conteúdo</a>
    <header className="header">
      <a className="brand" href="/" aria-label="Kampive — início">
        <img src="/images/brand.webp" width="52" height="52" alt="" />
        <span>Kampive</span>
      </a>
      <p className="tagline">Explore a vida ao ar livre.</p>
    </header>

    <main id="conteudo" className="hero">
      <div className="landscape" aria-hidden="true">
        <img src="/images/landscape.webp" srcSet="/images/landscape-small.webp 640w, /images/landscape.webp 1440w" sizes="(max-width: 700px) 100vw, 64vw" width="1440" height="960" alt="" fetchPriority="high" />
      </div>
      <div className="hero-copy">
        <h1>Seu próximo<br />camping<br />começa <span>aqui.</span></h1>
        <p className="description">Encontre campings, confira avaliações<br className="desktop-break" /> e salve seus lugares favoritos.</p>
        <nav className="downloads" aria-label="Baixe o Kampive nas lojas">
          <a className="store-badge" href={config.appStoreUrl} aria-label="Baixar na App Store">
            <AppleIcon /><span><small>Baixar na</small><strong>App Store</strong></span>
          </a>
          <a className="store-badge" href={config.googlePlayUrl} aria-label="Disponível no Google Play">
            <PlayIcon /><span><small>Disponível no</small><strong>Google Play</strong></span>
          </a>
        </nav>
        <ul className="features" aria-label="Recursos do aplicativo">
          <li><FeatureIcon name="explore" /><span>Explore</span></li>
          <li><FeatureIcon name="star" /><span>Avalie</span></li>
          <li><FeatureIcon name="bookmark" /><span>Salve</span></li>
        </ul>
      </div>
    </main>
    <footer>Kampive <span aria-hidden="true">·</span> Explore a vida ao ar livre.</footer>
  </div>;
}
