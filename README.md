# Hwy

Welcome to your new Hwy project!

Be sure to check out the docs at [https://hwy.dev](https://hwy.dev).

## IMPORTANT WRANGLER-SPECIFIC NOTES:

Unfortunately, you'll need to manually keep the `--port` flag in the `dev:wrangler` script
in sync with the `dev.port` field in your `hwy.config.ts` file.

When you deploy, you'll want to set your build configuration as follows:

- Build command: `npm run build`
- Build output directory: `/dist`
