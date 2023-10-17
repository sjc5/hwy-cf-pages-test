import type { HwyConfig } from "@hwy-js/build"

export default {
  dev: {
    port: 5555,
    watchExclusions: ["src/styles/tw-output.bundle.css"],
  },
  deploymentTarget: "cloudflare-pages",
} satisfies HwyConfig
