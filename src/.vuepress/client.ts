import { defineClientConfig } from "vuepress/client";
import HomeLayout from "./layouts/HomeLayout.vue";
import Shop from "./components/Shop.vue";
import ProductCard from "./components/ProductCard.vue";
import ProductList from "./components/ProductList.vue";
import ProductDetails from "./components/ProductDetails/index.vue";
import { setupTransparentNavbar } from "vuepress-theme-hope/presets/transparentNavbar.js";
import "vuepress-theme-hope/presets/hide-navbar-icon.scss";

export default defineClientConfig({
  layouts: {
    HomeLayout,
  },
  enhance: ({ app, router, siteData }) => {
    app.component("Shop", Shop);
    app.component("ProductCard", ProductCard);
    app.component("ProductList", ProductList);
    app.component("ProductDetails", ProductDetails);
  },
  setup: () => {
    setupTransparentNavbar({ type: "blog-homepage" });
  },
});
