import mdx from "@astrojs/mdx";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://emunteh-code.github.io",
  base: "/Study",
  output: "static",
  trailingSlash: "always",
  integrations: [mdx()],
  markdown: {
    syntaxHighlight: "shiki",
  },
  vite: {
    build: {
      sourcemap: false,
    },
  },
});
