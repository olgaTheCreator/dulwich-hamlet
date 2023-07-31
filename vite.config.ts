import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";
import dns from "dns";

dns.setDefaultResultOrder("verbatim");
// https://vitejs.dev/config/
export default defineConfig({
  base: '/dulwich-hamlet/',
  server: {
    host: true,
    port: 5173,
    strictPort: true,
  },
  plugins: [react(), svgr()],
});
