import { DefaultTheme, defineConfig } from "vitepress";

export const zh = defineConfig({
  lang: "zh",
  description: "CleanroomMC",
  themeConfig: {
    nav: nav(),
    docFooter: {
      next: "下一篇",
      prev: "上一篇",
    },
  },
});

function nav(): DefaultTheme.NavItem[] {
  return [
    { text: "主页", link: "/zh/" },
    { text: "指南", link: "/zh/guide/" },
    { text: "维基", link: "/zh/wiki/" },
  ];
}
