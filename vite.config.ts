import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
function normalizeBasePath(basePath: string): string {
  const trimmed = (basePath ?? "").trim();
  if (!trimmed) return "/";

  const leadingSlash = trimmed.startsWith("/") ? trimmed : `/${trimmed}`;
  return leadingSlash.endsWith("/") ? leadingSlash : `${leadingSlash}/`;
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "VITE_");
  const base = normalizeBasePath(
    env.VITE_BASE_PATH ?? (mode === "production" ? "/-Ethio-Friends-Foundation/" : "/")
  );

  return {
    base,
    server: {
      host: "::",
      port: 8080,
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (!id.includes("node_modules")) return;

            if (
              id.includes("node_modules/react/") ||
              id.includes("node_modules/react-dom/") ||
              id.includes("node_modules/react-router/") ||
              id.includes("node_modules/react-router-dom/") ||
              id.includes("node_modules/@remix-run/router/") ||
              id.includes("node_modules/history/") ||
              id.includes("node_modules/scheduler/") ||
              id.includes("node_modules/use-sync-external-store/") ||
              id.includes("node_modules/react-is/")
            ) {
              return "react-vendor";
            }

            if (id.includes("node_modules/@radix-ui/")) return "radix-vendor";
            if (id.includes("node_modules/@tanstack/")) return "tanstack-vendor";
            if (id.includes("node_modules/@supabase/")) return "supabase-vendor";
            if (id.includes("node_modules/lucide-react/")) return "icons-vendor";

            if (
              id.includes("node_modules/react-hook-form/") ||
              id.includes("node_modules/@hookform/") ||
              id.includes("node_modules/zod/") ||
              id.includes("node_modules/@floating-ui/")
            ) {
              return "forms-vendor";
            }

            return "vendor";
          },
        },
      },
    },
    plugins: [react()].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
