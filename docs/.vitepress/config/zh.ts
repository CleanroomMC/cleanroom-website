import { type DefaultTheme, defineConfigWithTheme } from "vitepress";
import { generateSidebar } from "vitepress-sidebar";
import { CleanRoomConfig } from "./customConfig";

const sidebar = generateSidebar([
  {
    // GroovyScript:
    documentRootPath: "docs",
    scanStartPath: "groovy-script",
    resolvePath: "/zh/groovy-script/",
    hyphenToSpace: true,
    underscoreToSpace: true,
    useFolderTitleFromIndexFile: true,
    keepMarkdownSyntaxFromTitle: true,
    useTitleFromFrontmatter: true,
    useTitleFromFileHeading: true,
    sortMenusByName: true,
    collapseDepth: 2,
    folderLinkNotIncludesFileName: true,
    useFolderLinkFromIndexFile: true,
  },
]);

sidebar["/zh/wiki/"] = wikiSidebar();

export const zh = defineConfigWithTheme<CleanRoomConfig>({
  lang: "zh",
  description: "CleanroomMC",
  themeConfig: {
    nav: nav(),
    sidebar,
    outlineTitle: "大纲",
    lastUpdatedText: "更新于",
    editLinkText: "编辑此页",
    sourceLinkText: "查看源码",
    timeDict: {
      today: "今天",
      ago: "前",
      day: "一天",
      days: "%d 天",
      week: "大约一周",
      weeks: "%d 周",
      month: "大约一个月",
      months: "%d 个月",
      year: "大约一年",
      years: "%d 年",
    },
  },
});

function nav(): DefaultTheme.NavItem[] {
  return [
    { text: "主页", link: "/zh/" },
    { text: "指南", link: "/zh/guide/" },
    { text: "维基", link: "/zh/wiki/" },
    { text: "GroovyScript", link: "/zh/groovy-script/" },
  ];
}

function wikiSidebar(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "Cleanroom 模组开发",
      collapsed: false,
      base: "/zh/wiki/cleanroom-mod-development/",
      items: [{ text: "引言", link: "introduction" }],
    },
    {
      text: "Forge 模组开发",
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
              text: "为方块与物品上色",
              link: "colouring-blocks-and-items",
            },
          ],
        },
        { text: "行为", link: "behaviour" },
        { text: "调试", link: "debugging" },
        { text: "事件", link: "event" },
        { text: "游戏对象", link: "game-object" },
        { text: "游戏端", link: "sidedness" },
      ],
    },
    {
      text: "Modularui",
      collapsed: true,
      base: "/zh/wiki/modularui/",
      items: [
        {
          text: "引言",
          link: "introduction",
        },
        { text: "第一步", link: "getting-started" },
        { text: "框架", link: "framework" },
        { text: "客户端 GUI 教程", link: "client-gui-tutorial" },
        { text: "同步 GUI 教程", link: "synced-gui-tutorial" },
        { text: "大小与位置", link: "sizing-and-positioning" },
        { text: "主题", link: "themes" },
        {
          text: "Json",
          collapsed: true,
          base: "/zh/wiki/modularui/json/",
          items: [
            { text: "对齐", link: "alignment" },
            { text: "颜色", link: "color" },
            { text: "Drawable", link: "drawable" },
            { text: "主题", link: "theme" },
          ],
        },
      ],
    },
    {
      text: "提议",
      collapsed: false,
      base: "/zh/wiki/proposal/",
      items: [
        {
          text: "标准",
          collapsed: false,
          base: "/zh/wiki/proposal/standard/",
          items: [{ text: "MTMS", link: "mtms" }],
        },
      ],
    },
  ];
}
