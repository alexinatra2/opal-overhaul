<script setup lang="ts">
import {ref, watch} from "vue";
import {useRoute} from "vue-router";
import {Course} from "@/store/courses.ts";

const {course} = defineProps<{ course: Course }>();
const route = useRoute();

const active = ref(false);
watch(
    () => route.params.id,
    (newId, _oldId) => {
      active.value = newId === course.id;
    }
);
</script>

<template>
  <router-link :to="`/courses/${course.id}`" class="block">
    <li class="w-72 grid grid-cols-6 grid-rows-1 p-4 text-white transition-colors hover:bg-primary-500"
        :class="{ 'bg-primary-400': active }">
      <h4 class="col-span-5">{{ course.name }}</h4>
      <p class="text-gray-200">{{ course.id }}</p>
    </li>
  </router-link>
</template>
