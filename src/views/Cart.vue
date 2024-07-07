<template>
  <div>
    <h1 class="text-4xl mb-10">My Cart</h1>
    <Card class="flex justify-between items-center mb-6">
      <span>
        <CheckBox v-model="selectAll">Select all</CheckBox>
      </span>
      <Button
        :disable="!selectAll"
        @click="
          emptyCart();
          selectAll = false;
        "
        size="sm"
        rounded="md"
        variant="secondary"
        >Delete</Button
      >
    </Card>
    <div class="grid grid-cols-4 gap-12" v-if="totalItemsInCart">
      <div class="col-span-4 md:col-span-2 lg:col-span-3">
        <CartItem
          v-bind="item"
          v-for="item in cart"
          class="mb-2"
          :class="selectAll ? 'shadow-xl' : ''"
        />
      </div>
      <div class="col-span-4 md:col-span-2 lg:col-span-1">
        <OrderSummary />
      </div>
    </div>
    <div class="text-center text-xl" v-else>Your cart is empty</div>
  </div>
</template>

<script lang="ts" setup>
import { useCartStore } from "@/stores/index";
import { storeToRefs } from "pinia";
import { ref } from "vue";
const selectAll = ref(false);
const { emptyCart } = useCartStore();
const { cart, totalItemsInCart } = storeToRefs(useCartStore());
</script>

<style></style>
