import type { HwyConfig } from "@hwy-js/build";

export default {
  deploymentTarget: "cloudflare-pages",
  dev: {
    watchExclusions: ["src/styles/tw-output.bundle.css"],
  },
} satisfies HwyConfig;
