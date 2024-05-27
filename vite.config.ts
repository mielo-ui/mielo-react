import { defineConfig } from "vite"
import { resolve } from "path"
import react from "@vitejs/plugin-react"
import { viteStaticCopy } from "vite-plugin-static-copy"
import dts from "vite-plugin-dts"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({ include: ["lib"] }),
    viteStaticCopy({
      targets: [
        { src: "lib/styles", dest: "", rename: "sass" },
        { src: "lib/fonts", dest: "" },
      ],
    }),
  ],
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, "lib/main.ts"),
      formats: ["es"],
      name: "adwaita-ui",
      fileName: "main",
    },
    rollupOptions: {
      external: ["react", "react/jsx-runtime"],
    },
  },
})
