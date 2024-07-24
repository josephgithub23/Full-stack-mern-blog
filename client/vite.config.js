import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

/*
 * We change the proxy to 3000
 * from the front end. we also set secure: false. because the port request is coming through http not https.
 */

// https://vitejs.dev/config/

export default defineConfig({
  server: {
    proxy: {
      "/api/": {
        target: "http://localhost:3000",
        secure: false,
      },
    },
  },
  plugins: [react()],
});
