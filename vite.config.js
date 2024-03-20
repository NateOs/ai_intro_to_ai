import { defineConfig } from "vite";

export default defineConfig({
  env: {
    API_URL: import.meta.env.OPENAI_API,
  },
  plugins: [],
});
