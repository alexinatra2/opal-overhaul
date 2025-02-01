<script setup lang="ts">
import {defineEmits, defineProps} from "vue";
import useCoursesStore from "@/store/courses";
import SidebarCourse from "./SidebarCourse.vue";

defineProps<{ isOpen: boolean }>();
const emit = defineEmits(["close"]);
const coursesStore = useCoursesStore();
</script>

<template>
  <div class="fixed inset-0 bg-black bg-opacity-50 z-50" v-if="isOpen" @click="emit('close')"></div>
  <aside class="fixed inset-y-0 left-0 w-72 bg-primary-600 transition-transform transform -translate-x-full z-200" :class="{ 'translate-x-0': isOpen }">
    <nav>
      <ul class="w-full p-0 flex flex-col list-none">
        <li v-for="course in coursesStore.courses" :key="course.id">
          <SidebarCourse :name="course.name" :id="course.id" />
        </li>
      </ul>
    </nav>
  </aside>
</template>


