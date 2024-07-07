<template>
  <div
    class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
  >
    <Product v-bind="product" v-for="product in products" />
  </div>
</template>

<script setup lang="ts">
import products from "@/data/product";
</script>
