import { crx, defineManifest } from "@crxjs/vite-plugin";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const manifest = defineManifest({
  manifest_version: 3,
  name: "いあきゃら特徴表",
  version: "1.0",
  action: {
    default_popup: "src/index.html",
  },
  content_scripts: [
    {
      matches: ["https://iachara.com/edit/*"],
      js: ["src/app/main.tsx"],
    },
  ],
});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), crx({ manifest })],
});
