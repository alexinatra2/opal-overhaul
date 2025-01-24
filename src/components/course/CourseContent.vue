<script setup lang="ts">
import {Course} from "@/store/courses.ts";

defineProps<{ course: Course }>();
</script>

<template>
  <section class="w-full h-full bg-red-500 p-4">
    <h1 class="text-3xl font-bold">{{ course.name }}</h1>
  </section>
</template>