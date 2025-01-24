<script setup lang="ts">
import { useSlots } from "vue";

const slots = useSlots();
</script>

<template>
  <div class="card">
    <div v-if="slots.header" class="card-header">
      <slot name="header"></slot>
    </div>

    <div class="card-body">
      <slot></slot>
    </div>

    <div v-if="slots.actions" class="card-actions">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
  background: white;
}

.card-header {
  font-size: 1.2rem;
  font-weight: bold;
}
</style>
