import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react-swc";
// import mdx from "@mdx-js/rollup"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // mdx({
    //   extensions: [".mdx", ".md"],
    //   include: "blogs/**",
    // }),
    react(),
  ],
  build: {
    outDir: "dist",
    watch: {
      include: "src/**",
      exclude: "node_modules/**",
    },
  },
});
