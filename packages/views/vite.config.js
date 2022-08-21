//@ts-check
import { createVuePlugin } from "vite-plugin-vue2";
import { defineConfig } from "vite";
import { resolve } from "path";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    createVuePlugin({
      jsx: true,
    }),
    dts(),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "./src/main.ts"),
      fileName: "index",
      formats: ["es"],
    },
    rollupOptions: {
      external: ["vue"],
    },
  },
});
