import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
  const queryClient = new QueryClient();

  if (typeof window !== "undefined") {
    const pathname = window.location.pathname;
    if (pathname.endsWith("/index.html")) {
      const routePath = pathname.replace(/\/index\.html$/, "") || "/";
      if (routePath !== pathname) {
        window.history.replaceState(null, "", routePath);
      }
    } else if (pathname.endsWith("index.html")) {
      const routePath = pathname.replace(/index\.html$/, "") || "/";
      if (routePath !== pathname) {
        window.history.replaceState(null, "", routePath);
      }
    }
  }

  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
  });

  return router;
};
