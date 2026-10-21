import { hydrateRoot } from 'react-dom/client';
import '@fontsource-variable/plus-jakarta-sans/wght.css';
import './styles.css';
import { App } from './App';
import { createSiteConfig } from './config';

hydrateRoot(document.getElementById('root')!, <App config={createSiteConfig(import.meta.env)} />);
