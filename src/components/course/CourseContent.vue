<script setup lang="ts">
import {Course} from "@/store/courses.ts";

defineProps<{ course: Course }>();
</script>

<template>
  <div class="w-full h-full py-4 px-8 flex flex-col gap-4">
    <section>
      <h1 class="text-3xl font-bold">{{ course.name }}</h1>
      <p class="text-base">{{ course.id }}</p>
      <p class="text-base text-gray-500">{{ course.author }}</p>
    </section>

    <section class="flex flex-col gap-2">
      <h2 class="text-2xl font-bold">Updates</h2>
      <p>Hier finden Sie updates zu diesem Kurs</p>
    </section>

    <section v-if="course.desc" class="flex flex-col gap-2">
      <h2 class="text-2xl font-bold">Beschreibung</h2>
      <p>{{ course.desc }}</p>
    </section>

    <section class="">

    </section>
  </div>
</template>