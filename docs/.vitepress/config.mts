import { defineConfig } from "vitepress";
import { shared } from "./config/shared";
import { en } from "./config/en";
import { zh } from "./config/zh";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  ...shared,
  locales: {
    root: { label: "English", ...en },
    zh: { label: "简体中文", ...zh },
  },
});
