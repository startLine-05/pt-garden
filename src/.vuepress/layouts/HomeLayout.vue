<script setup lang="ts">
import { Layout } from "vuepress-theme-hope/client";
import HeroInfo from "./HeroInfo.vue";
import Products from "./Products.vue";
import Scene from "./Scene.vue";
import Advantage from "./Advantage.vue";
import Guide from "./Guide.vue";
import Evaluate from "./Evaluate.vue";
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
      <Products></Products>
      <Scene></Scene>
      <Advantage></Advantage>
      <Guide></Guide>
      <Evaluate></Evaluate>
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
