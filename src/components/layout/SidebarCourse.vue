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
  <router-link :to="`/courses/${props.id}`" class="block">
    <li class="w-72 flex items-center gap-4 p-4 text-gray-800 transition-colors hover:bg-primary-500" :class="{ 'bg-primary-400': active }">
      <h4>{{ props.name }}</h4>
      <p class="text-gray-400">{{ props.id }}</p>
    </li>
  </router-link>
</template>
