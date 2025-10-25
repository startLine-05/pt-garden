import { navbar } from "vuepress-theme-hope";

export default navbar([
  {
    text: "products",
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
    text: "scene",
    prefix: "/scene/",
    children: [
      {
        text: "户外",
        link: "outdoors.md",
      },
    ],
  },
  {
    text: "nursing-guidelines",
    link: "/nursing-guidelines/README.md",
    icon: "lightbulb",
  },
  {
    text: "about",
    link: "/about/README.md",
    icon: "lightbulb",
  },
]);
