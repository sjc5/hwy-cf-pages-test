import {
  hwyInit,
  CssImports,
  rootOutlet,
  DevLiveRefreshScript,
  ClientEntryScript,
  HeadElements,
  getDefaultBodyProps,
  renderRoot,
} from "hwy";
import { Hono } from "hono";
import { logger } from "hono/logger";
import { secureHeaders } from "hono/secure-headers";

const app = new Hono();

await hwyInit({ app });

app.use("*", logger());
app.get("*", secureHeaders());

app.all("*", async (c, next) => {
  return await renderRoot(c, next, async ({ activePathData }) => {
    return (
      <html lang="en">
        <head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width,initial-scale=1" />

          <HeadElements
            c={c}
            activePathData={activePathData}
            defaults={[
              { title: "cf-pages-tester" },
              {
                tag: "meta",
                props: {
                  name: "description",
                  content: "Take the Hwy!",
                },
              },
              {
                tag: "meta",
                props: {
                  name: "htmx-config",
                  content: JSON.stringify({
                    selfRequestsOnly: true,
                    refreshOnHistoryMiss: true,
                    scrollBehavior: "auto",
                  }),
                },
              },
            ]}
          />

          <CssImports />
          <ClientEntryScript />
          <DevLiveRefreshScript />
        </head>

        <body {...getDefaultBodyProps()}>
          <nav>
            <a href="/">
              <h1>Hwy</h1>
            </a>

            <ul>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/login">Login</a>
              </li>
            </ul>
          </nav>

          <main>
            {await rootOutlet({
              activePathData,
              c,
              fallbackErrorBoundary: () => {
                return <div>Something went wrong.</div>;
              },
            })}
          </main>
        </body>
      </html>
    );
  });
});

app.notFound((c) => c.text("404 Not Found", 404));

app.onError((error, c) => {
  console.error(error);
  return c.text("500 Internal Server Error", 500);
});

export default app;
