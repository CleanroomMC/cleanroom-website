// https://vitepress.dev/guide/custom-theme
import { render, h } from "vue";
import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import BackToTop from "../../../components/internal/BackToTop.vue";
import "./style.css";

import { handleDetails } from "./composables/details";

function addBackTotop() {
  render(
    h(BackToTop, {
      threshold: 300,
    }),
    document.body,
  );
}

function addDetailsAnimation() {
  document.querySelectorAll('details').forEach((details) => handleDetails(details))
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
        addDetailsAnimation();
      })
    }
  },
} satisfies Theme;
