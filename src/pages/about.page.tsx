import { type PageProps, Suspense } from "hwy";

export default async function ({ Outlet, c }: PageProps) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
      <p>
        This is the about page. This is coming from{" "}
        <code>src/pages/about.page.tsx</code> This is functioning as a "layout
        route" because it is rendering an "outlet" (see below).
      </p>

      <div style={{ textTransform: "uppercase", fontWeight: "bold" }}>
        Outlet:
      </div>

      <Suspense c={c} fallback={<div>Loading...</div>}>
        <WithArtificialDelay delay={500}>
          <div class="outlet-wrapper">
            <Outlet />
          </div>
        </WithArtificialDelay>
      </Suspense>
    </div>
  );
}

async function WithArtificialDelay({
  children,
  delay,
}: {
  children: any;
  delay?: number;
}) {
  await new Promise((r) => setTimeout(r, delay ?? 500));
  return <>{children}</>;
}
