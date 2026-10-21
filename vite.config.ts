import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => ({
  plugins: [{
    name: 'kampive-prerender-dev',
    apply: 'serve',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (req.url === '/robots.txt') {
          res.setHeader('Content-Type', 'text/plain');
          res.end('User-agent: *\nDisallow: /\n');
          return;
        }
        next();
      });
    },
    transformIndexHtml: {
      order: 'pre',
      async handler(html, ctx) {
        if (!ctx.server) return html;
        const { render } = await ctx.server.ssrLoadModule('/src/render.tsx');
        const result = render(loadEnv(mode, process.cwd(), 'VITE_'));
        return html.replace('<!--site-head-->', result.head).replace('<!--app-html-->', result.body);
      },
    },
  }],
}));
