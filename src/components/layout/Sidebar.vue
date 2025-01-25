<script setup lang="ts">
import useCoursesStore from "@/store/courses";
import SidebarCourse from "./SidebarCourse.vue";

defineProps<{ isOpen: boolean }>();
const emit = defineEmits(["close"]);
const coursesStore = useCoursesStore();
</script>

<template>
  <div class="backdrop" v-if="isOpen" @click="emit('close')"></div>
  <aside class="drawer" :class="{ open: isOpen }">
    <nav class="nav">
      <ul class="course-list">
        <li v-for="course in coursesStore.courses" :key="course.id">
          <SidebarCourse :name="course.name" :id="course.id"/>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<style scoped>
.drawer {
  position: absolute;
  inset-block: 0;
  left: -300px;
  width: 300px;
  z-index: 200;
  background: var(--color-primary-600);
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
