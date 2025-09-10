import { defineClientConfig } from "vuepress/client";
import HomeLayout from "./layouts/HomeLayout.vue";
import { setupTransparentNavbar } from "vuepress-theme-hope/presets/transparentNavbar.js";
import "vuepress-theme-hope/presets/hide-navbar-icon.scss";

export default defineClientConfig({
  layouts: {
    HomeLayout,
  },
  setup: () => {
    setupTransparentNavbar({ type: "homepage" });
  },
});
