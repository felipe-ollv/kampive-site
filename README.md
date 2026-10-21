# Kampive · Site

Landing page em React, TypeScript e Vite, seguindo a proposta aprovada em `design/approved-layout.png`. Paleta creme, verde-floresta e terracota; fonte Plus Jakarta Sans hospedada junto do site.

## Desenvolvimento

Requer Node.js 22.16+ e npm.

```sh
npm ci
npm run dev
```

## Verificação e build

```sh
npm run lint
npm run typecheck
npm test
npm run build
npm run preview
```

Publique o diretório `dist/` em um servidor de arquivos estáticos. O build pré-renderiza os componentes React; texto, links e metadados já estão no HTML recebido, inclusive com JavaScript desativado. Não precisa de servidor Node em produção. O servidor deve retornar 404 para caminhos inexistentes, sem fallback de SPA.

## Domínio e lojas

Copie `.env.example` para `.env.local` e preencha:

- `VITE_SITE_URL`: origem HTTPS do domínio oficial, sem caminho (exemplo de formato: `https://seu-dominio.com`).
- `VITE_APP_STORE_URL`: página oficial do app na App Store.
- `VITE_GOOGLE_PLAY_URL`: página oficial do app no Google Play.

Os links genéricos das lojas foram mantidos a pedido do responsável até a publicação do app. Não levam a uma ficha de produto. Não foi inventado um domínio oficial.

Após alterar as variáveis, execute o build novamente. Com o domínio preenchido, são gerados canonical, `og:url`, imagem social absoluta e `sitemap.xml`; `robots.txt` passa a indicar o sitemap. Sem domínio, os metadados que dependem dele são omitidos. Título, descrição, idioma, Open Graph, dados estruturados e permissão de indexação já estão configurados. O servidor de desenvolvimento bloqueia crawling via robots.txt.

Depois de publicar no domínio definitivo: configurar HTTPS e redirecionamento das variações de domínio para a URL canônica; verificar a propriedade no Google Search Console e Bing Webmaster Tools; enviar `/sitemap.xml`. A implementação prepara o site para rastreamento, mas não garante posição nos resultados nem indexação antes de publicação.

## Layout e acessibilidade

Conteúdo em uma tela nas dimensões usuais de desktop e celular. A altura da ilustração diminui em celulares baixos. O documento pode crescer com zoom, fontes ampliadas ou janelas extremamente pequenas, preservando acesso ao conteúdo. Navegação por teclado, foco visível, link para pular ao conteúdo e respeito à preferência de movimento reduzido.

## Imagens

`design/` preserva a proposta aprovada, a ilustração gerada e o ícone original do app. Os arquivos otimizados em `public/images/` já estão prontos para uso. Para regenerar os tamanhos:

```sh
npx tsx scripts/prepare-assets.ts
```

A ilustração usa WebP responsivo; a imagem social usa JPEG 1200×630. Não há fontes ou imagens carregadas de terceiros.
