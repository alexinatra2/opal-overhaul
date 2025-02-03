<script setup lang="ts">
import useCoursesStore from "@/store/courses";
import SidebarCourse from "./SidebarCourse.vue";
import {storeToRefs} from "pinia";

defineProps<{ isOpen: boolean }>();
const emit = defineEmits(["close"]);
const coursesStore = useCoursesStore();
const {enrolledCourses} = storeToRefs(coursesStore);
</script>

<template>
  <div class="fixed inset-0 bg-black opacity-50 z-50" v-if="isOpen" @click="emit('close')"></div>
  <aside
      class="fixed inset-y-0 left-0 w-72 bg-primary-600
      transition-transform transform duration-400 ease-in-out -translate-x-full z-200"
      :class="{ 'translate-x-0': isOpen }">
    <nav>
      <ul class="w-full p-0 grid grid-cols-1 list-none">
        <SidebarCourse v-for="course in enrolledCourses" :key="course.id" :course="course"/>
      </ul>
    </nav>
  </aside>
</template>


