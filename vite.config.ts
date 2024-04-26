import { crx, defineManifest } from "@crxjs/vite-plugin";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const manifest = defineManifest({
    manifest_version: 3,
    version: "1.0",
    name: "いあきゃら特徴表",
    description: "いあきゃら上で特徴表を振ることができます。",
    "icons": {
        // "16": "image/icon16.png",
        // "48": "image/icon48.png",
        // "128": "image/icon128.png"
    },  
    action: {
        // default_icon: "image/icon128.png",
        default_title: "いあきゃら特徴表",
        default_popup: "src/index.html",
    },
    permissions: [ 
        "storage"
    ],
    content_scripts: [
        {
            matches: ["https://iachara.com/edit/*"],
            js: ["src/app/main.tsx"],
            run_at: "document_idle"
        },
    ],
});

export default defineConfig({
    plugins: [react(), crx({ manifest })],
});
