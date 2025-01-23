<script setup lang="ts">
import { defineProps } from "vue";

interface Props { 
  name: string;
  id?: string;
  active?: boolean;
};

const props = defineProps<Props>();
</script>

<template>
  <router-link to="/" class="link">
    <li class="item" :class="{ 'active': props.active }">
      <h4>{{ props.name }}</h4>
      <p class="course-id">{{ props.id }}</p>
    </li>
  </router-link>
</template>

<style scoped>
.item {
  width: 300px;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  list-style: none;
  color: var(--text-dark);
  transition: background-color 0.3s ease;
}

.item:hover {
  background-color: var(--main-theme-color-50);
}

.active {
  background-color: var(--main-theme-color-);
}

.link {
  text-decoration: none;
}

.course-id { 
  color: var(--main-theme-gray-20);
}
</style>
