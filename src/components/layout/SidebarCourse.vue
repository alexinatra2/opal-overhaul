<script setup lang="ts">
import {ref, watch} from "vue";
import {useRoute} from "vue-router";

interface Props {
  name: string;
  id: string;
}

const props = defineProps<Props>();
const route = useRoute();

const active = ref(false);
watch(
    () => route.params.id,
    (newId, _oldId) => {
      active.value = newId === props.id;
    }
);
</script>

<template>
  <router-link :to="`/courses/${props.id}`" class="link">
    <li class="item" :class="{ 'active': active }">
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
  background-color: var(--color-primary-500);
}

.active {
  background-color: var(--color-primary-400);
}

.course-id {
  color: var(--color-gray-200);
}
</style>
