<template>
  <button
    :disabled="disable"
    class="line-clamp-1 hover:opacity-75 transition-opacity"
    :class="computedClasses"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts" setup>
const props = defineProps({
  variant: {
    type: String as PropType<"primary" | "secondary">,
    default: "primary",
  },
  size: {
    type: String as PropType<"sm" | "md" | "lg">,
    default: "md",
  },
  rounded: {
    type: String as PropType<"sm" | "md" | "lg">,
    default: "sm",
  },
  disable: {
    type: Boolean,
    default: false,
  },
});

const computedClasses = computed(() => {
  const common =
    props.size === "sm"
      ? "h-10 px-4 text-sm"
      : props.size === "md"
      ? " text-lg px-4 h-[44px]"
      : "px-6 text-xl h-[52px]";
  const radius =
    props.rounded === "sm"
      ? "rounded-lg"
      : props.rounded === "md"
      ? "rounded-2xl"
      : "rounded-full";
  const disable = props.disable ? "opacity-75" : "";
  const bgColor = props.variant === "primary" ? "bg-primary" : "bg-secondary";
  const textColor = props.variant === "primary" ? "text-white" : "text-black";
  return [common, radius, bgColor, textColor, disable];
});
</script>
