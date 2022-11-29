import { mdsvex } from "mdsvex";
import adapter from "@sveltejs/adapter-auto";
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
    adapter: adapter(),
  },
};
