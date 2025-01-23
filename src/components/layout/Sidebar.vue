<script setup lang="ts">
import { defineProps, defineEmits } from "vue";
import coursesStore from "@/store/courses";
import SidebarCourse from "./SidebarCourse.vue";

defineProps<{ isOpen: boolean }>();
const emit = defineEmits(["close"]);
</script>

<template>
  <div class="backdrop" v-if="isOpen" @click="emit('close')"></div>
  <aside class="drawer" :class="{ open: isOpen }">
    <nav class="nav">
      <ul class="course-list">
        <li v-for="course in coursesStore.courses" :key="course.id">
          <SidebarCourse :name="course.name" :id="course.id" :active="coursesStore.activeCourse === course.id"/>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<style scoped>
.drawer {
  position: fixed;
  top: 3.5rem;
  bottom: 2rem;
  left: -300px;
  width: 300px;
  z-index: 200;
  height: calc(100vh - 6rem);
  background: var(--main-theme-color-60);
  transition: left 0.3s ease;
}

.drawer.open {
  left: 0;
}

.course-list { 
  width: 100%;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  list-style: none;
}

.backdrop {
  position: fixed;
  inset: 0;
  z-index: 50;
  background: rgba(0, 0, 0, 0.5);
}
</style>
