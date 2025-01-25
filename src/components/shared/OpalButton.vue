<script setup lang="ts">
import {useSlots} from "vue";

useSlots();
</script>

<template>
  <button class="bg-primary-600 text-white
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