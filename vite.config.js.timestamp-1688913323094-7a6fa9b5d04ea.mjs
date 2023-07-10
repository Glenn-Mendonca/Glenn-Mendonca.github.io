// vite.config.js
import { defineConfig } from "file:///D:/Git_Repos/Portfolio/node_modules/vite/dist/node/index.js";
import react from "file:///D:/Git_Repos/Portfolio/node_modules/@vitejs/plugin-react-swc/index.mjs";
import mdx from "file:///D:/Git_Repos/Portfolio/node_modules/@mdx-js/rollup/index.js";
var vite_config_default = defineConfig({
  plugins: [
    // mdx({
    //   extensions: [".mdx", ".md"],
    //   include: "blogs/**",
    // }),
    react()
  ],
  build: {
    outDir: "dist",
    watch: {
      include: "src/**",
      exclude: "node_modules/**"
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxHaXRfUmVwb3NcXFxcUG9ydGZvbGlvXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxHaXRfUmVwb3NcXFxcUG9ydGZvbGlvXFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9HaXRfUmVwb3MvUG9ydGZvbGlvL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCB7cmVzb2x2ZX0gZnJvbSAncGF0aCdcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdC1zd2MnXG5pbXBvcnQgbWR4IGZyb20gXCJAbWR4LWpzL3JvbGx1cFwiXG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbXG4gICAgLy8gbWR4KHtcbiAgICAvLyAgIGV4dGVuc2lvbnM6IFtcIi5tZHhcIiwgXCIubWRcIl0sXG4gICAgLy8gICBpbmNsdWRlOiBcImJsb2dzLyoqXCIsXG4gICAgLy8gfSksXG4gICAgcmVhY3QoKSxcbiAgXSxcbiAgYnVpbGQ6IHtcbiAgICBvdXREaXI6ICdkaXN0JyxcbiAgICB3YXRjaDoge1xuICAgICAgaW5jbHVkZTogJ3NyYy8qKicsXG4gICAgICBleGNsdWRlOiAnbm9kZV9tb2R1bGVzLyoqJyxcbiAgICB9XG59fSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBMFAsU0FBUyxvQkFBb0I7QUFFdlIsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sU0FBUztBQUdoQixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUtQLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTCxRQUFRO0FBQUEsSUFDUixPQUFPO0FBQUEsTUFDTCxTQUFTO0FBQUEsTUFDVCxTQUFTO0FBQUEsSUFDWDtBQUFBLEVBQ0o7QUFBQyxDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
