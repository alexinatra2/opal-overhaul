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
      ? 'bg-secondary-600'
      : colorVariant === 'green'
      ? 'bg-success-40'
      : 'bg-primary-600'"
      class="text-white
  flex items-center gap-4 px-4 py-2
  border-none rounded-full
  cursor-pointer
  hover:bg-primary-400 transition
">
    <slot name="start-adornment"></slot>
    <p class="flex-1 font-bold">
      <slot></slot>
    </p>
    <slot name="end-adornment"></slot>
  </button>
</template>