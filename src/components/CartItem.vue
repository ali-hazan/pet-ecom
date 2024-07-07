<template>
  <Card class="flex justify-between flex-col lg:flex-row">
    <div class="flex gap-4">
      <img :src="image" :alt="name" class="w-28 h-28 object-contain" />
      <div>
        <h3>
          {{ name }}
        </h3>
        <div class="text-md my-2">
          {{ price }}
          AED
        </div>
        <Button
          class="flex justify-start items-center gap-2"
          variant="secondary"
          size="sm"
          @click="removeCartItem(id)"
          >Remove <IconDelete class="text-danger" /> </Button
        >
      </div>
    </div>
    <div class="flex justify-between lg:flex-col items-center mt-6 lg:mt-0">
      <div>
        <label class="block font-bold text-sm" for="quantity">Quantity</label>
      <QtySelector
        id="quantity"
        :qty="qty"
        @add="addQty(id)"
        @substract="substractQty(id)"
      />
      </div>
  
      <div class="text-md mt-2">
        <strong>{{ (qty * price).toFixed(2) }}</strong> AED
      </div>
    </div>
  </Card>
</template>

<script lang="ts" setup>
import { useCartStore } from "@/stores";
import IconDelete from "./icons/IconDelete.vue";

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
  qty: {
    type: Number,
    required: true,
  },
});

const { addQty, substractQty, removeCartItem } = useCartStore();
</script>
