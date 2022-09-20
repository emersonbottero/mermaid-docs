import { defineConfig } from "vite";
import { MermaidPlugin } from "vitepress-plugin-mermaid";
import { SearchPlugin } from "vitepress-plugin-search";

export default defineConfig({
  plugins: [MermaidPlugin(), SearchPlugin()],
  // resolve: {
  //   alias: {
  //     mermaid: 'https://unpkg.com/mermaid@9.1.7/dist/mermaid.esm.min.mjs',
  //   },
  // },
});
