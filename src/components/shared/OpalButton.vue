<script setup lang="ts">
import {useSlots} from "vue";

const slots = useSlots();
</script>

<template>
  <button class="button">
    <div class="adornment-container">
      <slot name="start-adornment"></slot>
    </div>
    <div class="button-content">
      <slot></slot>
    </div>
    <div class="adornment-container">
      <slot name="end-adornment"></slot>
    </div>
  </button>
</template>

<style scoped>
.button {
  display: flex;
  border-radius: 24px;
  border: none;
  color: white;
  background-color: var(--color-primary-600);
  padding: 0.5rem 1rem;
  gap: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.button:hover {
  background-color: var(--color-primary-400);
}

.button-content {
  flex: 1;
  color: white;
  font-weight: bolder;
}
</style>