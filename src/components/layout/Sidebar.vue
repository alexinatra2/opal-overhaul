<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

defineProps<{ isOpen: boolean }>();
const emit = defineEmits(["close"]);
</script>

<template>
  <div class="backdrop" v-if="isOpen" @click="emit('close')"></div>
  <aside class="drawer" :class="{ open: isOpen }">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </nav>
  </aside>
</template>

<style scoped>
.drawer {
  position: fixed;
  top: 0;
  left: -250px;
  width: 250px;
  height: 100vh;
  background: var(--background-dark);
  color: white;
  padding: 1rem;
  transition: left 0.3s ease;
}

.drawer.open {
  left: 0;
}

.backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
}
</style>
