<script setup lang="ts">
import { useSlots } from "vue";

const slots = useSlots();
</script>

<template>
  <div class="card">
    <!-- Render Header Slot if Provided -->
    <div v-if="slots.header" class="card-header">
      <slot name="header"></slot>
    </div>

    <!-- Render Content Slot -->
    <div class="card-body">
      <slot></slot>
    </div>

    <!-- Render Actions Slot if Provided -->
    <div v-if="slots.actions" class="card-actions">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<style scoped>
.card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  background: white;
  width: 100%;
  max-width: 400px;
}

.card-header {
  font-size: 1.2rem;
  font-weight: bold;
  border-bottom: 1px solid #ddd;
  padding-bottom: 0.5rem;
  margin-bottom: 0.5rem;
}

.card-body {
  font-size: 1rem;
}

.card-actions {
  margin-top: 1rem;
  text-align: right;
  border-top: 1px solid #ddd;
  padding-top: 0.5rem;
}
</style>
