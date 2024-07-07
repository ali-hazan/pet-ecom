<template>
  <div class="inline-flex items-center">
    <label
      class="relative flex items-center p-3 rounded-full cursor-pointer"
      :htmlFor="id"
    >
      <input
        type="checkbox"
        class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
        :id="id"
        v-model="data"
      />
      <span
        class="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100"
      >
        <IconCheck />
      </span>
    </label>
    <label
      class="mt-px font-light text-gray-700 cursor-pointer select-none"
      :htmlFor="id"
    >
      <slot />
    </label>
  </div>
</template>

<script lang="ts" setup>
import getUid from "@/utils/getUid";
import { useVModel } from "@vueuse/core";

const id = getUid();
const props = defineProps<{
  modelValue: string;
}>();
const emit = defineEmits(["update:modelValue"]);
const data = useVModel(props, "modelValue", emit);
</script>
