<script setup lang="ts">
import { Layout } from "vuepress-theme-hope/client";
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
