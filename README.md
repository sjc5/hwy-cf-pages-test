# Hwy

Welcome to your new Hwy project!

Be sure to check out the docs at [https://hwy.dev/docs](https://hwy.dev/docs).

## IMPORTANT WRANGLER-SPECIFIC NOTES:

Because Wrangler is in charge of your dev server, you should set your dev server port
via the `--port` flag in the `dev:wrangler` script in your `package.json` file
instead of in the `dev.port` field in your `hwy.config.ts` file.

When you deploy, you'll want to set your build configuration as follows:

- Build command: `npm run build`
- Build output directory: `/dist`

Additionally, you'll need to set the `nodejs_compat` compatibility flags for both
Production and Preview from the Cloudflare dashboard. [Read more](https://developers.cloudflare.com/pages/platform/functions/get-started/#runtime-features).
