import { mdsvex } from "mdsvex";
// I prefer to name it like this
import adapterNetlify from "@sveltejs/adapter-netlify";
import preprocess from "svelte-preprocess";

export default {
  extensions: [".svelte", ".svelte.md", ".md", ".svx"],
  preprocess: [
    preprocess(),
    mdsvex({
      smartypants: {
        dashes: "oldschool",
      },
      extensions: [".svelte.md", ".md", ".svx"],
      layout: "src/lib/MarkdownLayout.svelte",
    }),
  ],

  kit: {
    adapter: adapterNetlify(),
  },
};
