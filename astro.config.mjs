// @ts-check
import { defineConfig, passthroughImageService } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://retailtherapy.troylusty.com",
  integrations: [tailwind(), icon(), mdx()],
  output: "static",
  image: {
    service: passthroughImageService(),
  },
});
