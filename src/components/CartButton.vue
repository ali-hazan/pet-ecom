<template>
  <button
    class="border rounded-full w-14 h-14 flex justify-center items-center relative"
  >
    <span
      v-if="qty"
      class="absolute bg-red text-white w-8 h-8 leading-8 rounded-full -top-2 -right-2"
    >
      {{ qty }}
    </span>
    <IconCart />
  </button>
</template>

<script lang="ts" setup>
defineProps({
  qty: {
    type: Number,
    default: 0,
  },
});
</script>
