<template>
  <div class="flex justify-between container mx-auto px-8 py-6">
    <router-link class="text-center text-xl font-bold" to="/">
      <img src="@/assets/images/logo.png" class="w-20" />Pet-Ecom</router-link
    >
    <router-link to="/cart">
      <CartButton :qty="totalItemsInCart" />
    </router-link>
  </div>
</template>

<script lang="ts" setup>
import { useCartStore } from "@/stores";

const { totalItemsInCart } = storeToRefs(useCartStore());
</script>
