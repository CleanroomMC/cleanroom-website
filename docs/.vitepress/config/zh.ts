import { DefaultTheme, defineConfig } from "vitepress";

export const zh = defineConfig({
  lang: "zh",
  description: "CleanroomMC",
  themeConfig: {
    nav: nav(),
    sidebar: {
      "/zh/wiki/": wikiSidebar(),
    },
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

function wikiSidebar(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "Cleanroom Mod Development",
      collapsed: false,
      base: "/zh/wiki/cleanroom-mod-development/",
      items: [{ text: "Introduction", link: "introduction" }],
    },
    {
      text: "Forge Mod Development",
      collapsed: false,
      base: "/zh/wiki/forge-mod-development/",
      items: [
        {
          text: "Mixin",
          collapsed: true,
          base: "/zh/wiki/forge-mod-development/mixin/",
          items: [
            { text: "前言", link: "preface" },
            { text: "Mixin Booter", link: "mixinbooter" },
            {
              text: "注解",
              collapsed: true,
              base: "/zh/wiki/forge-mod-development/mixin/annotation/",
              items: [{ text: "Shadow", link: "shadow" }],
            },
            {
              text: "环境",
              collapsed: true,
              base: "/zh/wiki/forge-mod-development/mixin/environment/",
              items: [
                { text: "注册", link: "registration" },
                { text: "配置", link: "configuration" },
              ],
            },
          ],
        },
        {
          text: "渲染",
          collapsed: true,
          base: "/zh/wiki/forge-mod-development/render/",
          items: [
            {
              text: "Colouring Blocks and Items",
              link: "colouring-blocks-and-items",
            },
          ],
        },
        { text: "Behaviour", link: "behaviour" },
        { text: "Debugging", link: "debugging" },
        { text: "Event", link: "event" },
        { text: "Game Object", link: "game-object" },
        { text: "Sidedness", link: "sidedness" },
      ],
    },
    {
      text: "Modularui",
      collapsed: true,
      base: "/zh/wiki/modularui/",
      items: [
        {
          text: "Introduction",
          link: "introduction",
        },
        { text: "Getting started", link: "getting-started" },
        { text: "Framework", link: "framework" },
        { text: "Client gui tutorial", link: "client-gui-tutorial" },
        { text: "Synced gui tutorial", link: "synced-gui-tutorial" },
        { text: "Sizing and positioning", link: "sizing-and-positioning" },
        { text: "Themes", link: "themes" },
        {
          text: "Json",
          collapsed: true,
          base: "/zh/wiki/modularui/json/",
          items: [
            { text: "Alignment", link: "alignment" },
            { text: "Color", link: "color" },
            { text: "Drawable", link: "drawable" },
            { text: "Theme", link: "theme" },
          ],
        },
      ],
    },
    {
      text: "Proposal",
      collapsed: false,
      base: "/zh/wiki/proposal/",
      items: [
        {
          text: "Standard",
          collapsed: false,
          base: "/zh/wiki/proposal/standard/",
          items: [{ text: "MTMS", link: "mtms" }],
        },
      ],
    },
  ];
}
