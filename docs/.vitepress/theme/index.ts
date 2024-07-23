// https://vitepress.dev/guide/custom-theme
import { render, h } from "vue";
import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import BackToTop from "../../../components/internal/BackToTop.vue";
import "./style.css";

import { handleDetailsAnimation } from "./composables/details";

import { NolebaseGitChangelogPlugin } from "@nolebase/vitepress-plugin-git-changelog/client";

import "@nolebase/vitepress-plugin-git-changelog/client/style.css";

function addBackTotop() {
  render(
    h(BackToTop, {
      threshold: 300,
    }),
    document.body,
  );
}

function addDetailsAnimation() {
  document
    .querySelectorAll("details")
    .forEach((details) => handleDetailsAnimation(details));
}

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    });
  },
  enhanceApp({ app, router, siteData }) {
    if (typeof window !== "undefined") {
      window.addEventListener("load", () => {
        addBackTotop();
      });

      router.onAfterRouteChanged = () => {
        setTimeout(() => {
          addDetailsAnimation();
        }, 0);
      };
    }
    app.use(NolebaseGitChangelogPlugin);
  },
} satisfies Theme;
