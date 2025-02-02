<script setup lang="ts">
import {useSlots} from "vue";

useSlots();

withDefaults(defineProps<{ colorVariant?: "default" | "green" | "red" }>(), {
  colorVariant: "default"
});
</script>

<template>
  <button
      :class="colorVariant === 'red'
      ? 'bg-secondary-600 hover:bg-secondary-400'
      : colorVariant === 'green'
      ? 'bg-success-500 hover:bg-success-200'
      : 'bg-primary-600 hover:bg-primary-400 '"
      class="text-white
  flex items-center gap-4 px-4 py-2
  border-none rounded-full
  cursor-pointer
  transition
">
    <slot name="start-adornment"></slot>
    <p class="flex-1 font-bold">
      <slot></slot>
    </p>
    <slot name="end-adornment"></slot>
  </button>
</template>