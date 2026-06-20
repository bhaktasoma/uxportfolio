import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base: "./" makes asset paths relative, so the build works whether it's
// served from a user/organization page (root) or a project page (/repo/).
// Routing uses HashRouter, so deep links and refreshes work on GitHub Pages
// without any 404.html redirect hack.
export default defineConfig({
  base: "./",
  plugins: [react()],
});
