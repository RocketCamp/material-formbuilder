import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: "src/index.js",
      formats: ["cjs", "esm"],
      name: "my-react-component",
    },
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "@mui/material",
        "@mui/icons-material",
        "@emotion/styled",
        "@emotion/react",
      ],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "@mui/material": "MaterialUI",
          "@mui/icons-material": "MaterialUI Icons",
          "@emotion/styled": "The styled API for @emotion/react",
          "@emotion/react": "Simple styling in React.",
        },
      },
    },
  },
});
