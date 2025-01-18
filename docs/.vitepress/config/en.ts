import { type DefaultTheme, defineConfigWithTheme } from "vitepress";
import { generateSidebar } from "vitepress-sidebar";
import { CleanRoomConfig } from "./customConfig";

const sidebar = generateSidebar([
  { // GroovyScript:
    documentRootPath: "docs",
    scanStartPath: "groovy-script",
    resolvePath: "/groovy-script/",
    hyphenToSpace: true,
    underscoreToSpace: true,
    useFolderTitleFromIndexFile: true,
    keepMarkdownSyntaxFromTitle: true,
    useTitleFromFrontmatter: true,
    useTitleFromFileHeading: true,
    sortMenusByFrontmatterOrder: true,
    sortMenusOrderByDescending: true,
    collapsed: true,
    collapseDepth: 2,
    folderLinkNotIncludesFileName: true,
    useFolderLinkFromIndexFile: true,
    rootGroupText: 'GroovyScript',
    rootGroupLink: '.',
    rootGroupCollapsed: false,
  }
]);

sidebar["/wiki/"] = wikiSidebar();

export const en = defineConfigWithTheme<CleanRoomConfig>({
  lang: "en",
  description: "CleanroomMC",
  themeConfig: {
    nav: nav(),
    sidebar,
    outlineTitle: "Outline",
    lastUpdatedText: "Last updated",
    editLinkText: "Edit Page Source",
    viewLinkText: "View Page Source",
    sourceLinkText: "View Source Code",
    timeDict: {
      today: "today",
      ago: "ago",
      day: "a day",
      days: "%d days",
      week: "about a week",
      weeks: "%d weeks",
      month: "about a month",
      months: "%d months",
      year: "about a year",
      years: "%d years"
    },
  },
});

function nav(): DefaultTheme.NavItem[] {
  let nav: DefaultTheme.NavItem[] = [];
  nav.push({ text: "Home", link: "/" });
  nav.push({ text: "Wiki", link: "/wiki/" });
  if(process.env.ENVIRONMENT === 'development') nav.push({ text: "Guide", link: "/guide/" });
  nav.push({ text: "GroovyScript", link: "/groovy-script/" });
  return nav;
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
      collapsed: true,
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
            {
                text: "Render Documentation",
                link: "render-documentation",
            }
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
