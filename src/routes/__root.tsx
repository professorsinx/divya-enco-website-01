import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Divya Enco — Engineering Manufacturing & Fabrication" },
      {
        name: "description",
        content:
          "Divya Enco delivers quality engineering products and fabrication solutions through machining, welding, assembly and disciplined manufacturing in Tamil Nadu.",
      },
      { name: "author", content: "Divya Enco" },
      { property: "og:title", content: "Divya Enco — Engineering Manufacturing & Fabrication" },
      {
        property: "og:description",
        content:
          "Quality products, in-time delivery and optimum cost for demanding industrial requirements.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function FloatingQuoteCTA() {
  return (
    <motion.div
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full border border-white/60 bg-white/20 px-2 py-2 backdrop-blur-2xl shadow-[var(--shadow-glass)] ring-1 ring-primary/20 md:bottom-6 md:right-6"
      initial={{ opacity: 0, y: 12, scale: 0.98 }}
      animate={{ opacity: 1, y: [0, -4, 0], scale: 1 }}
      transition={{ opacity: { duration: 0.6 }, y: { duration: 2.4, repeat: Infinity, ease: "easeInOut" }, scale: { duration: 0.6 } }}
    >
      <Link
        to="/contact"
        className="inline-flex items-center gap-2 rounded-full bg-card/70 px-4 py-2 text-[11px] font-black uppercase tracking-[0.22em] text-foreground transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
      >
        <span className="whitespace-nowrap">Request a Quote</span>
      </Link>
      <span className="h-4 w-px bg-border/80" />
      <Link
        to="/contact"
        className="inline-flex items-center gap-2 rounded-full bg-card/70 px-4 py-2 text-[11px] font-black uppercase tracking-[0.22em] text-foreground transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
      >
        <span className="whitespace-nowrap">Send Drawing for Estimate</span>
        <ArrowRight size={14} />
      </Link>
    </motion.div>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
      <FloatingQuoteCTA />
    </QueryClientProvider>
  );
}
