// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  site: "https://uop-gameplay.github.io",
  integrations: [tailwind(), icon()],
  output: "hybrid",
  adapter: node({
    mode: "standalone",
  }),
});
