import { navbar } from "vuepress-theme-hope";

export default navbar([
  {
    text: "植物系列",
    icon: "lightbulb",
    prefix: "/product/",
    children: [
      {
        text: "芦荟",
        link: "aloe/README.md",
      },
      {
        text: "仙人球",
        link: "cactus/README.md",
      },
    ],
  },
  {
    text: "分类浏览",
    prefix: "/scene/",
    children: [
      {
        text: "户外",
        link: "outdoors.md",
      },
    ],
  },
  {
    text: "护理指南",
    link: "/nursing-guidelines/README.md",
    icon: "lightbulb",
  },
  {
    text: "关于我们",
    link: "/about/README.md",
    icon: "lightbulb",
  },
]);
