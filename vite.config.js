import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/Issa-Weds-Isata/", // IMPORTANT for GitHub Pages
});
