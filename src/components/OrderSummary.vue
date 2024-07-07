<template>
  <Card>
    <h3 class="text-xl mb-6">Order summary</h3>
    <div class="flex justify-between gap-2 mb-4">
      <input
        v-model="voucherCode"
        class="bg-secondary rounded-lg h-10 block w-full border-none outline-none px-4 py-2"
        type="text"
      />
      <Button @click="applyDiscount" size="sm">Apply</Button>
    </div>
    <div
      class="inline-flex bg-secondary p-2 rounded-md text-sm gap-2 items-center font-bold mb-4"
      v-if="selectedDiscount"
    >
      {{ selectedDiscount.code }}
      <button @click="selectedDiscount = null">
        <IconDelete class="w-4 h-4" />
      </button>
    </div>
    <div class="flex justify-between mb-2">
      Sub Total <span>{{ subTotal.toFixed(2) }} AED</span>
    </div>
    <div class="flex justify-between mb-2" v-if="selectedDiscount">
      Discount ({{
        selectedDiscount.isPercentage ? selectedDiscount.value + "%" : "AED"
      }}) <span> {{ discountPrice.toFixed(2) }} AED </span>
    </div>
    <div class="flex justify-between mb-2">
      VAT ({{ vat.VAT }}%) <span>{{ vat.vatAmount.toFixed(2) }} AED</span>
    </div>
    <div class="flex justify-between font-bold text-lg">
      <strong>Grand Total</strong> <span>{{ total.toFixed(2) }} AED</span>
    </div>
    <Button class="w-full mt-8">Checkout</Button>
  </Card>
</template>

<script lang="ts" setup>
import { useCartStore } from "@/stores";
import discount from "@/data/discount";
import type { IDiscount } from "@/types/product";
import { toast, type ToastOptions } from "vue3-toastify";
const { subTotal, selectedDiscount, discountPrice, vat, total } = storeToRefs(
  useCartStore()
);
const voucherCode = ref("");
const applyDiscount = () => {
  if (selectedDiscount.value) {
    toast("Only one voucher code applicable at one time!", { type: "error" });
    return;
  }
  if (voucherCode.value) {
    const discountItem = discount.find(
      (item: IDiscount) => item.code === voucherCode.value
    );
    if (discountItem) {
      selectedDiscount.value = discountItem;
      toast("Voucher added successfully!");
      voucherCode.value = "";
    } else {
      toast("Voucher not found!", { type: "error" });
    }
  } else {
    toast("Please enter your voucher code!", { type: "error" });
  }
};
</script>
