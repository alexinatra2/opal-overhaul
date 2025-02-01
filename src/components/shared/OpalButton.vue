<script setup lang="ts">
import {useSlots} from "vue";

const slots = useSlots();
</script>

<template>
  <button class="flex items-center rounded-3xl border-none text-white bg-primary-60 px-4 py-2 gap-4 cursor-pointer transition-colors duration-300 hover:bg-primary-40">
    <div class="adornment-container">
      <slot name="start-adornment"></slot>
    </div>
    <div class="flex-1 font-bold text-white">
      <slot></slot>
    </div>
    <div class="adornment-container">
      <slot name="end-adornment"></slot>
    </div>
  </button>
</template>
