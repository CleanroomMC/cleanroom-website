// https://vitepress.dev/guide/custom-theme
import { render, h } from "vue";
import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import BackToTop from "../../../components/internal/BackToTop.vue";
import "./style.css";

function addBackTotop() {
  if (typeof window === undefined) return;
  window.addEventListener("load", () => {
    const wrapper = document.createElement("div");
    document.body.appendChild(wrapper);
    render(
      h(BackToTop, {
        threshold: 300,
      }),
      wrapper,
    );
  });
}

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    });
  },
  enhanceApp({ app, router, siteData }) {
    // ...
    addBackTotop();
  },
} satisfies Theme;
