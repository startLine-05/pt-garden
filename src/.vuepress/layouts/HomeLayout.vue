<script setup lang="ts">
import { Layout } from "vuepress-theme-hope/client";
import HeroInfo from "./HeroInfo.vue";
import Advantages from "./Advantages.vue";
import Products from "./Products.vue";
import Decorative from "./Decorative.vue";
import Advantage from "./Advantage.vue";
import Guide from "./Guide.vue";
import Display from "./Display.vue";
import About from "./About.vue";
import Footer from "./Footer.vue";
</script>

<template>
  <Layout>
    <template #heroInfo="{ text, tagline }">
      <div class="heroInfo">
        <HeroInfo :text="text" :tagline="tagline" />
      </div>
    </template>
    <template #content>
      <Advantages></Advantages>
      <Products></Products>
      <Decorative></Decorative>
      <Advantage></Advantage>
      <Display></Display>
      <Guide></Guide>
      <About></About>
      <Footer></Footer>
    </template>
  </Layout>
</template>
<style scoped>
.heroInfo {
  /* position: relative;
  top: -100px;
  left: -400px; */
}
</style>
