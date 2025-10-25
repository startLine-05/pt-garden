<template>
  <ShoppingCartOutlined class="shop-link" @click="toShop"></ShoppingCartOutlined>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { ShoppingCartOutlined } from "@ant-design/icons-vue";

const toShop = () => {
  window.open('https://www.ebay.com/usr/pattigarden_rarecactuscollector', '_blank');

}
</script>
<style scoped>
.shop-link {
  cursor: pointer;
  color: #2b2d24;
  font-size: 22px;
  transition: color 0.3s;
  &:hover {
    color: #52c41a;
  }
}
</style>
