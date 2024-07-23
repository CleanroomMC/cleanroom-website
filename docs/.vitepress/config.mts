import { defineConfig } from "vitepress";
import { shared } from "./config/shared";
import { en } from "./config/en";
import { zh } from "./config/zh";
import {
  GitChangelog,
  GitChangelogMarkdownSection,
} from "@nolebase/vitepress-plugin-git-changelog/vite";
// https://vitepress.dev/reference/site-config
export default defineConfig({
  ...shared,
  locales: {
    root: { label: "English", ...en },
    zh: { label: "简体中文", ...zh },
  },
  vite: {
    optimizeDeps: {
      exclude: ["@nolebase/vitepress-plugin-enhanced-readabilities/client"],
    },
    ssr: {
      noExternal: ["@nolebase/vitepress-plugin-enhanced-readabilities"],
    },
    plugins: [
      GitChangelog({
        repoURL: () => "https://github.com/CleanroomMC/cleanroom-website",
      }),
      GitChangelogMarkdownSection(),
    ],
  },
});
