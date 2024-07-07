<template>
  <div
    class="rounded-lg shadow-lg bg-white flex flex-col h-fit p-4 md:p-6 hover:shadow-xl"
  >
    <img :src="image" :alt="name" class="h-32 object-contain mb-4" />
    <h3 class="h-12 line-clamp-2 mb-4">
      {{ name }}
    </h3>
    <div class="flex justify-between items-center">
      <span class="text-lg">
        <strong>{{ price.toFixed(2) }}</strong> AED
      </span>
      <Button size="sm" @click="addItem">
        <IconPlus class="h-4" />
      </Button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useCartStore } from "@/stores/index";
import { toast, type ToastOptions } from "vue3-toastify";

const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});
const { addItemToCart } = useCartStore();

const addItem = () => {
  addItemToCart({
    ...props,
    qty: 1,
  });
  toast(`${props.name} added to your cart!`);
};
</script>
