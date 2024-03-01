import { type DefaultTheme, defineConfig } from "vitepress";

export const en = defineConfig({
  lang: "en",
  description: "CleanroomMC",
  themeConfig: {
    nav: nav(),
    sidebar: {
      "/wiki/": wikiSidebar(),
    },
    outlineTitle: "Outline",
    lastUpdated: {
      text: "Updated at",
    },
    editLink: {
      pattern:
        "https://github.com/CleanroomMC/cleanroom-website/edit/main/docs/:path",
      text: "Edit this page",
    },
  },
});

function nav(): DefaultTheme.NavItem[] {
  return [
    { text: "Home", link: "/" },
    { text: "Guide", link: "/guide/" },
    { text: "Wiki", link: "/wiki/" },
  ];
}

function wikiSidebar(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "Cleanroom Mod Development",
      collapsed: false,
      base: "/wiki/cleanroom-mod-development/",
      items: [{ text: "Introduction", link: "introduction" }],
    },
    {
      text: "Forge Mod Development",
      collapsed: false,
      base: "/wiki/forge-mod-development/",
      items: [
        {
          text: "Mixin",
          collapsed: true,
          base: "/wiki/forge-mod-development/mixin/",
          items: [
            { text: "Preface", link: "preface" },
            { text: "Mixin Booter", link: "mixinbooter" },
            {
              text: "Annotation",
              collapsed: true,
              base: "/wiki/forge-mod-development/mixin/annotation/",
              items: [{ text: "Shadow", link: "shadow" }],
            },
            {
              text: "Environment",
              collapsed: true,
              base: "/wiki/forge-mod-development/mixin/environment/",
              items: [
                { text: "Registration", link: "registration" },
                { text: "Configuration", link: "configuration" },
              ],
            },
          ],
        },
        {
          text: "Render",
          collapsed: true,
          base: "/wiki/forge-mod-development/render/",
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
      base: "/wiki/modularui/",
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
          base: "/wiki/modularui/json/",
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
      base: "/wiki/proposal/",
      items: [
        {
          text: "Standard",
          collapsed: false,
          base: "/wiki/proposal/standard/",
          items: [{ text: "MTMS", link: "mtms" }],
        },
      ],
    },
  ];
}
