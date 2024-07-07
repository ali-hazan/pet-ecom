<template>
  <div
    class="inline-flex text-sm font-bold bg-secondary p-2 justify-center items-center gap-4 rounded-lg"
  >
    <button @click="substractQty">
      <IconMinus />
    </button>
    {{ qty ?? 0 }}
    <button  @click="addQty">
      <IconPlus />
    </button>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  qty: number;
}>();
const emit = defineEmits(["add", "substract"]);

const substractQty = () => {
  emit("substract");
};
const addQty = () => {
  emit("add");
};
</script>

<style scoped>
button {
  @apply h-8 w-8 border active:border-[#1E2238] hover:border-[#1E2238] rounded-md flex justify-center items-center;
}
</style>
