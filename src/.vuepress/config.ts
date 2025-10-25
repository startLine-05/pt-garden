import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/pt-garden/",

  lang: "zh-CN",
  title: "Tropical Green Nook",
  description: "PT花园演示",  

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
